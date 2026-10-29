import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

// Pagina escondida: so quem comprou os guias de $9.90 recebe este link (dentro do PDF, no e-mail de confirmacao e no e-mail de boas-vindas).
// Nao aparece no menu nem no site, e pede aos buscadores para nao indexar.
// Os codigos precisam existir no Stripe (Promotion codes) antes de divulgar.
const CODES = {
  single: 'GUIDE40',   // 40% off no Quick Fix ($259 -> $155.40)
  quarter: 'GUIDE50',  // 50% off no START ($559 -> $279.50)
};

// Links criados so para esta campanha: cobram na hora, sem periodo de teste, com campo de codigo promocional.
const QUICK_FIX_LINK = 'https://buy.stripe.com/dRmbJ00Zh1IHcub8ln1Jm0S';
const START_LINK = 'https://buy.stripe.com/6oU14m9vNdrp0Lt6df1Jm0R';
// Quem paga o START cheio ($559) recebe 6 meses, liberados manualmente por Adriano.
const START_FULL_PRICE_LINK = START_LINK;

const link = (url, code) => `${url}?prefilled_promo_code=${code}`;

const offers = [
  {
    name: 'Single session',
    was: '$259',
    now: '$155.40',
    note: '40% off. One session to apply what you read.',
    code: CODES.single,
    url: link(QUICK_FIX_LINK, CODES.single),
    cta: 'Book my single session',
  },
  {
    name: '3 months of coaching, half price',
    was: '$559',
    now: '$279.50',
    note: '50% off. Weekly support while you build the system.',
    code: CODES.quarter,
    url: link(START_LINK, CODES.quarter),
    cta: 'Start 3 months for $279.50',
  },
  {
    name: '6 months for the price of 3',
    now: '$559',
    note: 'Pay the full 3 month price and I give you 6 months of coaching. Double the time to make it stick.',
    url: START_FULL_PRICE_LINK,
    cta: 'Get 6 months for $559',
    featured: true,
  },
];

const GuidesBonusPage = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b140f] text-white">
      <div className="max-w-3xl mx-auto px-5 py-14">
        <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3 text-center">Only for readers of the guides</p>
        <h1 className="text-3xl sm:text-4xl font-black leading-tight text-center mb-4">
          Read the guides. If you like them and want help applying them, this is for you.
        </h1>
        <p className="text-white/80 text-lg text-center mb-10">
          Reader offers, available only through this page. Discount codes are already filled in when you click.
        </p>

        <div className="space-y-5 mb-10">
          {offers.map((o) => (
            <div
              key={o.name}
              className={`bg-[#12201a] rounded-2xl p-6 ${o.featured ? 'border-2 border-[#49c274]' : 'border border-white/10'}`}
            >
              <h2 className="text-xl font-bold mb-1">{o.name}</h2>
              <p className="mb-2">
                {o.was && <span className="text-white/50 line-through mr-2">{o.was}</span>}
                <span className="text-[#49c274] text-3xl font-black">{o.now}</span>
              </p>
              <p className="text-white/85 text-lg mb-4 flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[#49c274] mt-1 flex-shrink-0" />{o.note}</p>
              <a
                href={o.url}
                className="inline-block w-full sm:w-auto text-center bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-3 px-8 rounded-xl transition-all"
              >
                {o.cta}
              </a>
              {o.code && <p className="text-white/50 text-sm mt-2">Code {o.code} is filled in for you.</p>}
            </div>
          ))}
        </div>

        <p className="text-center text-white/60">
          Not sure which one fits? <a className="text-[#49c274] underline" href="https://calendly.com/adriano-nutrition/free-20-min-discovery-call" target="_blank" rel="noopener noreferrer">Book a free 20 minute call</a> and we decide together.
        </p>
      </div>
    </div>
  );
};

export default GuidesBonusPage;
