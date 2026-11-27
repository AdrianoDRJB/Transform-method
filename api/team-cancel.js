// Cancelamento pelo proprio cliente (Cancel Anytime), para TODOS os planos com teste gratis (15 ou 30 dias).
// A pessoa informa o e-mail usado no checkout:
//  - marcamos o cadastro dela como "cancelled" (a tarefa do dia 31 do Team pula quem esta cancelado);
//  - assinaturas em teste sao canceladas na hora (nada e cobrado);
//  - assinaturas ja ativas ficam sem renovar (cancel_at_period_end).
//
// Precisa da MESMA variavel STRIPE_SECRET_KEY, com permissoes "Customers: Write" e "Subscriptions: Write".
// Resposta e sempre a mesma, exista o e-mail ou nao, para nao revelar quem e cliente.

const readBody = async (req) => {
  if (req.body && typeof req.body === 'object') return req.body
  const chunks = []
  for await (const c of req) chunks.push(c)
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}') } catch { return {} }
}

const stripe = (key, path, params, method) =>
  fetch(`https://api.stripe.com/v1/${path}`, {
    method: method || (params ? 'POST' : 'GET'),
    headers: { Authorization: `Bearer ${key}`, ...(params ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}) },
    body: params ? params.toString() : undefined,
  }).then((r) => r.json().then((j) => ({ ok: r.ok, json: j })))

// E-mail de confirmacao na hora (Resend). Se RESEND_API_KEY nao existir ou o envio falhar,
// NAO marcamos como enviado e a tarefa de hora em hora manda o e-mail como reserva.
const sendCancelEmail = async (to, name) => {
  const rk = process.env.RESEND_API_KEY
  if (!rk) return false
  const first = String(name || '').trim().split(/\s+/)[0] || 'there'
  const text = `Hi ${first},\n\nYour plan is cancelled and it will not charge you again. If you were still in your free days, nothing was charged.\n\nIf you cancelled by mistake or have any question, just reply to this email or write to adrianonutrition@adrianonutrition.com, or message @adriano.nutrition on Instagram.\n\nAdriano Monteiro\nNutrition Coach\nadrianonutrition.com`
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${rk}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Adriano Monteiro <hello@mail.adrianonutrition.com>',
        reply_to: 'adrianonutrition@adrianonutrition.com',
        to: [to],
        subject: 'Your Transform Method cancellation is confirmed',
        text,
      }),
    })
    return r.ok
  } catch {
    return false
  }
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.statusCode = 405
    return res.end(JSON.stringify({ ok: false }))
  }
  const key = process.env.STRIPE_SECRET_KEY
  const { email } = await readBody(req)
  const addr = String(email || '').trim()
  if (!key || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr) || addr.length > 200) {
    res.statusCode = 400
    return res.end(JSON.stringify({ ok: false, error: 'invalid' }))
  }

  try {
    const variants = [...new Set([addr, addr.toLowerCase()])]
    const seen = new Set()
    for (const v of variants) {
      const list = await stripe(key, `customers?limit=20&email=${encodeURIComponent(v)}`)
      if (!list.ok) throw new Error(list.json?.error?.message || 'stripe list failed')
      for (const c of list.json.data || []) {
        if (seen.has(c.id)) continue
        seen.add(c.id)
        const p = new URLSearchParams()
        p.set('metadata[team259_status]', 'cancelled')
        p.set('metadata[team259_cancelled_by]', 'customer-page')
        p.set('metadata[team259_cancelled_at]', new Date().toISOString())
        const u = await stripe(key, `customers/${c.id}`, p)
        if (!u.ok) throw new Error(u.json?.error?.message || 'stripe update failed')
        const alreadyEmailed = c.metadata?.team259_email_cancel === 'sent'

        // Assinaturas dos planos com teste gratis
        const subs = await stripe(key, `subscriptions?customer=${c.id}&status=all&limit=20`)
        if (!subs.ok) throw new Error(subs.json?.error?.message || 'stripe subscriptions failed')
        for (const sub of subs.json.data || []) {
          if (sub.status === 'trialing') {
            // Ainda nos dias gratis: cancela agora, nada e cobrado.
            const d = new URLSearchParams()
            d.set('cancellation_details[comment]', 'cancelled by customer on /team/cancel')
            const r = await stripe(key, `subscriptions/${sub.id}`, d, 'DELETE')
            if (!r.ok) throw new Error(r.json?.error?.message || 'stripe cancel failed')
          } else if ((sub.status === 'active' || sub.status === 'past_due') && !sub.cancel_at_period_end && !sub.cancel_at) {
            // Ja pagou: nao renova mais.
            const m = new URLSearchParams()
            m.set('cancel_at_period_end', 'true')
            m.set('cancellation_details[comment]', 'cancelled by customer on /team/cancel')
            const r = await stripe(key, `subscriptions/${sub.id}`, m)
            if (!r.ok) throw new Error(r.json?.error?.message || 'stripe update sub failed')
          }
        }

        // Aviso imediato por e-mail (uma vez por cliente)
        if (c.email && !alreadyEmailed && (await sendCancelEmail(c.email, c.name))) {
          const m2 = new URLSearchParams()
          m2.set('metadata[team259_email_cancel]', 'sent')
          m2.set('metadata[team259_email_signup]', 'sent')
          await stripe(key, `customers/${c.id}`, m2)
        }
      }
    }
    res.statusCode = 200
    return res.end(JSON.stringify({ ok: true }))
  } catch (e) {
    console.error('team-cancel error', e?.message)
    res.statusCode = 500
    return res.end(JSON.stringify({ ok: false, error: 'server' }))
  }
}
