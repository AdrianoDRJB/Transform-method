export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Diagnostico: GET /api/subscribe mostra se a chave do beehiiv existe e se funciona (nunca mostra a chave).
  if (req.method === 'GET' && req.query && req.query.probe) {
    // Temporario: le uma pagina publica do beehiiv para descobrir o endpoint do formulario.
    try {
      const u = new URL(String(req.query.probe))
      if (!u.hostname.endsWith('beehiiv.com')) return res.status(400).json({ error: 'host' })
      const r = await fetch(u.toString(), { headers: { 'User-Agent': 'Mozilla/5.0' } })
      const t = await r.text()
      const urls = Array.from(new Set(t.match(/https?:\/\/[^"'\s)\\]+|\/[a-zA-Z0-9_\-\/]*(?:submit|subscribe|subscription)[a-zA-Z0-9_\-\/]*/g) || [])).slice(0, 60)
      const hits = []
      const re = /(.{120})(submit|subscriptions?|\/subscribe)(.{160})/g
      let m
      while ((m = re.exec(t)) && hits.length < 12) hits.push(m[0])
      const fm = t.match(/<form[\s\S]*?<\/form>/i); const inputs = (t.match(/<(?:input|button|select|textarea)[^>]*>/gi) || []).slice(0, 20); return res.status(200).json({ form: fm ? fm[0].slice(0, 2500) : null, inputs, status: r.status, setCookie: r.headers.get('set-cookie') ? 'yes' : 'no', length: t.length, head: t.slice(0, 1500), urls, hits })
    } catch (err) {
      return res.status(200).json({ error: err.message })
    }
  }

  if (req.method === 'GET') {
    const key = process.env.BEEHIIV_API_KEY
    const pid = process.env.BEEHIIV_PUBLICATION_ID || 'pub_6b58b59a-46f7-4fbc-b1c9-992f681d4caf'
    if (!key) return res.status(200).json({ hasKey: false })
    try {
      const r = await fetch(`https://api.beehiiv.com/v2/publications/${pid}`, { headers: { Authorization: `Bearer ${key}` } })
      const body = await r.json().catch(() => ({}))
      return res.status(200).json({ hasKey: true, keyLength: key.length, beehiivStatus: r.status, ok: r.ok, message: r.ok ? undefined : body })
    } catch (err) {
      return res.status(200).json({ hasKey: true, error: err.message })
    }
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, campaign } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  // Use environment variable for API key (set BEEHIIV_API_KEY in Vercel dashboard)
  const apiKey = process.env.BEEHIIV_API_KEY
  if (!apiKey) {
    console.error('BEEHIIV_API_KEY environment variable is not set')
    return res.status(500).json({ error: 'Server configuration error' })
  }

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID || 'pub_6b58b59a-46f7-4fbc-b1c9-992f681d4caf'

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'lead_magnet',
          utm_campaign: typeof campaign === 'string' && campaign ? campaign.slice(0, 60) : 'organic'
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('beehiiv subscribe failed', response.status, JSON.stringify(data))
      return res.status(response.status).json({ error: data })
    }

    return res.status(200).json({ success: true, data })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
