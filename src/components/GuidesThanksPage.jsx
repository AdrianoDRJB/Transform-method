import React, { useEffect } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Pagina escondida de entrega: o Stripe redireciona para ca depois do pagamento de $9.90.
// Nao aparece no menu e pede aos buscadores para nao indexar.
const guides = [
  { title: 'The TRANSFORM Method', file: '/ebook-fe294804c823b6c9ccba.pdf' },
  { title: 'Nutrition Fundamentals', file: '/ebook-b146dfa1df9b28e4b332.pdf' },
  { title: 'Environment Design', file: '/ebook-8987b32fbcffae8ded64.pdf' },
  { title: 'Emotional Intelligence', file: '/ebook-96243f298e70dc8a0c1d.pdf' },
  { title: 'Sleep, Recovery & Mental Resilience', file: '/ebook-bb28a27acc76cb850e3f.pdf' },
];

const GuidesThanksPage = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b140f] text-white">
      <div className="max-w-2xl mx-auto px-5 py-14">
        <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3 text-center">Payment received</p>
        <h1 className="text-3xl sm:text-4xl font-black leading-tight text-center mb-3">Thank you. Your 5 guides are here.</h1>
        <p className="text-white/80 text-lg text-center mb-8">Start with the first one. It shows how everything fits together.</p>

        <div className="space-y-3 mb-8">
          {guides.map((g, i) => (
            <a
              key={g.file}
              href={g.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-[#12201a] border border-white/10 hover:border-[#49c274] rounded-2xl p-5 transition-all"
            >
              <span className="text-lg font-bold">{i + 1}. {g.title}</span>
              <span className="flex items-center gap-2 text-[#49c274] font-bold"><Download className="w-5 h-5" />PDF</span>
            </a>
          ))}
        </div>

        <p className="flex items-start gap-2 text-white/80 text-lg mb-10"><CheckCircle className="w-5 h-5 text-[#49c274] mt-1 flex-shrink-0" />You have 15 days to ask for a full refund, no questions asked. Just reply to your receipt email.</p>

        <div className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Want help applying them?</h2>
          <p className="text-white/85 text-lg mb-4">Readers get a special offer on coaching, valid for 14 days.</p>
          <Link
            to="/guides/bonus"
            className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-3 px-8 rounded-xl transition-all"
          >
            See the reader offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuidesThanksPage;
