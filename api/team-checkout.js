// Checkout do Team TRANSFORM: salva o cartao hoje e cobra $259 UMA vez no dia 31.
// Nao cria assinatura, entao o Stripe nao mostra "every 12 weeks" nem renova nada.
// A cobranca do dia 31 e feita por uma tarefa agendada (ver CHECKOUT-TEAM-UMA-COBRANCA.md).
//
// Precisa da variavel STRIPE_SECRET_KEY no Vercel (chave restrita, so "Checkout Sessions: Write").
// Se a chave nao existir, ou o Stripe falhar, o cliente vai para o link antigo de pagamento,
// para nunca perder uma venda por causa de erro tecnico.

const SITE = 'https://adrianonutrition.com'
const FALLBACK_LINK = 'https://buy.stripe.com/8x200i23lafd8dVcBD1Jm0U'
const AMOUNT_LABEL = '$259'
const TRIAL_DAYS = 30

const pick = (v) => (Array.isArray(v) ? v[0] : v) || ''
const clean = (v) => String(pick(v)).slice(0, 100)

function chargeDateLabel() {
  const d = new Date(Date.now() + TRIAL_DAYS * 24 * 60 * 60 * 1000)
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York' })
}

export default async function handler(req, res) {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) {
    res.statusCode = 303
    res.setHeader('Location', FALLBACK_LINK)
    return res.end()
  }

  const q = req.query || {}
  const body = new URLSearchParams()
  body.set('mode', 'setup')
  body.set('currency', 'usd')
  body.set('customer_creation', 'always')
  body.set('locale', 'en')
  body.set('success_url', `${SITE}/team/welcome`)
  body.set('cancel_url', `${SITE}/team`)
  body.set('name_collection[individual][enabled]', 'true')
  body.set('metadata[campaign]', 'team-259-once')
  body.set('metadata[charge_after_days]', String(TRIAL_DAYS))
  body.set('metadata[utm_source]', clean(q.utm_source))
  body.set('metadata[utm_medium]', clean(q.utm_medium))
  body.set('metadata[utm_campaign]', clean(q.utm_campaign))
  body.set('setup_intent_data[description]', 'Team TRANSFORM, one payment of $259 on day 31')
  body.set('setup_intent_data[metadata][campaign]', 'team-259-once')
  body.set(
    'custom_text[submit][message]',
    `Nothing is charged today. Your card is saved for ${TRIAL_DAYS} days. On ${chargeDateLabel()} you will be charged ${AMOUNT_LABEL} one time, and that is the only charge. This is not a subscription and it will never renew. You can cancel in one click at [adrianonutrition.com/team/cancel](https://adrianonutrition.com/team/cancel), or email adrianonutrition@adrianonutrition.com or message @adriano.nutrition on Instagram, and you pay nothing. By continuing you authorize that single charge.`,
  )

  try {
    const r = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })
    const session = await r.json()
    if (!r.ok || !session.url) throw new Error(session?.error?.message || `Stripe ${r.status}`)
    res.statusCode = 303
    res.setHeader('Location', session.url)
    res.setHeader('Cache-Control', 'no-store')
    return res.end()
  } catch (err) {
    console.error('team-checkout failed:', err && err.message)
    res.statusCode = 303
    res.setHeader('Location', FALLBACK_LINK)
    return res.end()
  }
}
