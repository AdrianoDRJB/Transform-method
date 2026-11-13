const PUBLICATION_ID_DEFAULT = 'pub_6b58b59a-46f7-4fbc-b1c9-992f681d4caf'
// Formulario publico de inscricao do beehiiv (usado quando a chave da API nao esta configurada).
const PUBLIC_FORM_ID = '8bc25af3-6bed-42b2-9e07-dadff9505e58'
const UA = 'Mozilla/5.0 (compatible; TransformMethodSite/1.0)'

const decodeHtml = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')

async function submitPublicForm(email, campaign) {
  const formUrl = `https://subscribe-forms.beehiiv.com/${PUBLIC_FORM_ID}`
  const page = await fetch(formUrl, { headers: { 'User-Agent': UA } })
  const html = await page.text()
  const cookies = (typeof page.headers.getSetCookie === 'function' ? page.headers.getSetCookie() : [])
    .map((c) => c.split(';')[0])
    .join('; ')
  const inputValue = (name) => {
    const tag = html.match(new RegExp(`<input[^>]*name="${name}"[^>]*>`, 'i'))
    if (!tag) return ''
    const v = tag[0].match(/value="([^"]*)"/i)
    return v ? decodeHtml(v[1]) : ''
  }
  const metaToken = html.match(/<meta[^>]*name="csrf-token"[^>]*content="([^"]*)"/i)
  const token = inputValue('authenticity_token') || (metaToken ? decodeHtml(metaToken[1]) : '')
  const body = new URLSearchParams({
    authenticity_token: token,
    form_id: inputValue('form_id') || PUBLIC_FORM_ID,
    'form[email]': email,
    utm_source: 'website',
    utm_medium: 'lead_magnet',
    utm_campaign: campaign,
    referrer: '',
    button: '',
  })
  const r = await fetch('https://subscribe-forms.beehiiv.com/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Cookie: cookies,
      Origin: 'https://subscribe-forms.beehiiv.com',
      Referer: formUrl,
      'X-CSRF-Token': token,
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'User-Agent': UA,
    },
    body,
  })
  const text = await r.text()
  return { ok: r.ok, status: r.status, detail: text.slice(0, 300), hadToken: Boolean(token), hadCookie: Boolean(cookies) }
}

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Diagnostico: GET mostra se a chave existe (nunca mostra a chave).
  // GET ?test=email@exemplo.com grava esse e-mail pelo caminho publico e mostra o resultado.
  if (req.method === 'GET') {
    const key = process.env.BEEHIIV_API_KEY
    const out = { hasKey: Boolean(key) }
    const testEmail = req.query && req.query.test
    if (testEmail && String(testEmail).includes('@')) {
      try {
        out.publicForm = await submitPublicForm(String(testEmail), 'lp_teste')
      } catch (err) {
        out.publicForm = { error: err.message }
      }
    }
    return res.status(200).json(out)
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, campaign } = req.body || {}

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  const utmCampaign = typeof campaign === 'string' && campaign ? campaign.slice(0, 60) : 'organic'
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID || PUBLICATION_ID_DEFAULT

  // Caminho 1: API do beehiiv (precisa da chave BEEHIIV_API_KEY na Vercel).
  if (apiKey) {
    try {
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
          body: JSON.stringify({
            email,
            reactivate_existing: true,
            send_welcome_email: true,
            utm_source: 'website',
            utm_medium: 'lead_magnet',
            utm_campaign: utmCampaign,
          }),
        }
      )
      const data = await response.json()
      if (response.ok) return res.status(200).json({ success: true, via: 'api', data })
      console.error('beehiiv api subscribe failed', response.status, JSON.stringify(data))
    } catch (err) {
      console.error('beehiiv api error', err.message)
    }
  } else {
    console.error('BEEHIIV_API_KEY is not set, using the public form')
  }

  // Caminho 2: formulario publico do beehiiv (nao precisa de chave).
  try {
    const result = await submitPublicForm(email, utmCampaign)
    if (result.ok) return res.status(200).json({ success: true, via: 'public_form' })
    console.error('beehiiv public form failed', JSON.stringify(result))
    return res.status(502).json({ error: 'subscribe_failed', status: result.status })
  } catch (err) {
    console.error('beehiiv public form error', err.message)
    return res.status(500).json({ error: err.message })
  }
}
