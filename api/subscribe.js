export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

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
          utm_medium: 'lead_magnet'
        })
      }
    )

    const data = await response.json()

    if (!response.ok) {
      return res.status(response.status).json({ error: data })
    }

    return res.status(200).json({ success: true, data })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
