import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, BookOpen } from 'lucide-react';

// Link de pagamento do Stripe do produto de $9.90 (5 guias completos, pagamento unico).
const GUIDES_CHECKOUT_LINK = 'https://buy.stripe.com/3cI14m9vNfzxdyf4571Jm0Q';
const CALENDLY_LINK = 'https://calendly.com/adriano-nutrition/free-20-min-discovery-call';

const points = [
  { title: 'Nutrition', text: 'How I stopped chasing diets and started building a system I can keep.' },
  { title: 'Training', text: "What competing taught me about showing up on the days I don't feel like it." },
  { title: 'Emotional regulation', text: 'How I deal with what happens in my head, so the plan survives a bad day.' },
];

const guides = [
  'The TRANSFORM Method',
  'Nutrition Fundamentals',
  'Environment Design',
  'Emotional Intelligence',
  'Sleep, Recovery & Mental Resilience',
];

const GuidesOfferPage = () => (
  <div className="min-h-screen bg-[#0b140f] text-white">
    <div className="bg-gradient-to-r from-[#0f3f26] to-[#1b5e3a] py-14">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3">The TRANSFORM Method</p>
        <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
          Everything I learned in 8 years of CrossFit, 4 years sober and 2 years treating ADHD.
        </h1>
        <p className="text-xl text-white/80 mb-8">In one place, for <span className="text-[#49c274] font-black">$9.90</span>.</p>
        <a
          href={GUIDES_CHECKOUT_LINK}
          className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all"
        >
          Get the guides for $9.90
        </a>
        <p className="text-white/60 text-sm mt-3">15 days to ask for a full refund, no questions asked.</p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto px-5 py-12">
      <div className="space-y-5 mb-12">
        {points.map((p) => (
          <div key={p.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5">
            <h2 className="text-[#49c274] font-bold text-lg mb-1">{p.title}</h2>
            <p className="text-white/85 text-lg">{p.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-[#49c274]" />What you get</h2>
      <p className="text-white/80 mb-4">5 complete guides in PDF. You download them right after you pay.</p>
      <ul className="space-y-2 mb-12">
        {guides.map((g) => (
          <li key={g} className="flex items-center gap-3 text-lg"><CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0" />{g}</li>
        ))}
      </ul>

      <div className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-2">Why so cheap?</h2>
        <p className="text-white/85 text-lg">
          I suffered for almost two decades in silence. You don't have to. Life won't be perfect, but it can be a lot lighter and a lot more pleasant.
        </p>
      </div>

      <div className="text-center mb-12">
        <a
          href={GUIDES_CHECKOUT_LINK}
          className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all"
        >
          Get the guides for $9.90
        </a>
        <p className="flex items-center justify-center gap-2 text-white/60 text-sm mt-3"><Shield className="w-4 h-4" />Secure payment. 15 day refund, no questions asked.</p>
      </div>

      <p className="text-center text-white/60">
        Prefer to talk first? <a className="text-[#49c274] underline" href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">Book a free 20 minute call</a>, or <Link className="text-[#49c274] underline" to="/ebooks">grab the free short guides</Link>.
      </p>
    </div>
  </div>
);

export default GuidesOfferPage;
