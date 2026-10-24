// Rastreamento do site: Google Analytics 4 + Pixel da Meta.
// O Google Analytics e carregado no index.html. O Pixel da Meta e iniciado aqui.

// Cole aqui o ID do Pixel da Meta (numero de uns 15 digitos), entre aspas.
// Enquanto estiver vazio, o Pixel fica desligado e o resto continua funcionando.
export const META_PIXEL_ID = ''

let pixelStarted = false

export function initMetaPixel() {
  if (pixelStarted || !META_PIXEL_ID || typeof window === 'undefined') return
  pixelStarted = true
  /* eslint-disable */
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */
  window.fbq('init', META_PIXEL_ID)
}

function ga(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') window.gtag(...args)
}

function meta(...args) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') window.fbq(...args)
}

export function trackPageView(path) {
  ga('event', 'page_view', { page_path: path, page_location: window.location.href })
  meta('track', 'PageView')
}

// Clicou para agendar a call (link do Calendly)
export function trackBookCallClick(url) {
  ga('event', 'book_call_click', { link_url: url })
  meta('trackCustom', 'BookCallClick')
}

// Clicou para comprar um plano (link do Stripe)
export function trackCheckoutClick(url) {
  ga('event', 'begin_checkout', { link_url: url })
  meta('track', 'InitiateCheckout')
}

// Clicou para baixar um ebook gratis
export function trackEbookDownload(url) {
  ga('event', 'file_download', { link_url: url })
  meta('track', 'ViewContent', { content_name: 'free_ebook' })
}

// Agendou a call de verdade (pagina /call-booked, depois do Calendly)
export function trackCallBooked() {
  ga('event', 'qualify_lead', { method: 'calendly' })
  ga('event', 'generate_lead', { method: 'calendly' })
  meta('track', 'Lead')
}
