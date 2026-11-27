// Cancelamento do Team TRANSFORM pelo proprio cliente (sem falar com o Adriano).
// A pessoa informa o e-mail usado no checkout; marcamos o cadastro dela como "cancelled".
// A tarefa agendada do dia 31 pula quem esta cancelado, entao nada e cobrado.
//
// Precisa da MESMA variavel STRIPE_SECRET_KEY, com permissao "Customers: Write" (inclui leitura).
// Resposta e sempre a mesma, exista o e-mail ou nao, para nao revelar quem e cliente.

const readBody = async (req) => {
  if (req.body && typeof req.body === 'object') return req.body
  const chunks = []
  for await (const c of req) chunks.push(c)
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}') } catch { return {} }
}

const stripe = (key, path, params) =>
  fetch(`https://api.stripe.com/v1/${path}`, {
    method: params ? 'POST' : 'GET',
    headers: { Authorization: `Bearer ${key}`, ...(params ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}) },
    body: params ? params.toString() : undefined,
  }).then((r) => r.json().then((j) => ({ ok: r.ok, json: j })))

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
