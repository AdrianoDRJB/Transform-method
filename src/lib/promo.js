// Promocao "4 anos sobrio": 40% no primeiro pagamento, ate 31/10/2026 23:59 (Brasilia).
// Quem chega pelo anuncio da Meta (a Meta sempre coloca fbclid no link) ou por um
// link com ?promo=4years ve o desconto aplicado e o link do Stripe leva o codigo.
// Sem o anuncio, o site continua igual e os links dos influenciadores nao mudam.

export const PROMO_CODE = '4YEARS'
// 31/10/2026 23:59:59 em Brasilia (UTC-3) = 01/11/2026 02:59:59 UTC
const PROMO_ENDS_AT = Date.UTC(2026, 10, 1, 2, 59, 59)
const STORAGE_KEY = 'promo_4years'

export function isOctoberPromo() {
  if (typeof window === 'undefined') return false
  if (Date.now() > PROMO_ENDS_AT) return false
  const params = new URLSearchParams(window.location.search)
  const fromAd = params.has('fbclid') || (params.get('promo') || '').toLowerCase() === '4years'
  try {
    if (fromAd) window.sessionStorage.setItem(STORAGE_KEY, '1')
    if (window.sessionStorage.getItem(STORAGE_KEY) === '1') return true
  } catch (e) {
    // sessionStorage pode estar bloqueado, entao so vale a pagina atual
  }
  return fromAd
}

export function withPromoCode(url) {
  return `${url}?prefilled_promo_code=${PROMO_CODE}`
}

// Links novos (com campo de codigo ativo). Os links antigos continuam com os influenciadores.
export const PROMO_LINKS = {
  quickFix: 'https://buy.stripe.com/3cI4gy9vN2ML79R4571Jm0M',
  start: 'https://buy.stripe.com/3cIeVc5fxbjh9hZ8ln1Jm0N',
  evolve: 'https://buy.stripe.com/6oU3cucHZ5YXam3atv1Jm0O',
  elite: 'https://buy.stripe.com/bJe8wO0Zhcnl65NfNP1Jm0P',
}
