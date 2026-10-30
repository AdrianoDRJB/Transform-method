import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Clock, FileText, CreditCard, Dumbbell, Moon, Brain, Utensils } from 'lucide-react';

// Link de pagamento do Stripe da Quick Fix (sessao unica de 90 minutos, pagamento unico).
const QUICK_FIX_CHECKOUT_LINK = 'https://buy.stripe.com/4gMdR80Zh3QP1Pxbxz1Jm0L';

const forYou = [
  'You have tried diets before and they did not stick.',
  'You want a number (calories and macros) you can trust, not a generic app answer.',
  'You have ADHD, a busy week, or both, and you need a plan that fits real life.',
  'You train (CrossFit, gym, running) and want food that supports it.',
  'You want one honest session before you decide on longer coaching.',
];

const notForYou = [
  'You want daily check-ins and ongoing support. That is the coaching plans.',
  'You need medical care for a diagnosed condition. Please see your doctor first.',
  'You want a promise of fast weight loss. I do not make that promise.',
];

const steps = [
  { icon: CreditCard, title: 'Pay and pick your time', text: 'One payment of $259. After checkout you get a private link to choose a time that works for you.' },
  { icon: Clock, title: '90 minutes, live, just us', text: 'We go through your week, your food, your training, your sleep and what has failed before. You talk. I ask. Nothing is generic.' },
  { icon: FileText, title: 'You leave with your plan', text: 'A personalized macro and calorie plan, written for you, as a PDF you keep forever.' },
];

const covered = [
  { icon: Utensils, title: 'Food and numbers', text: 'Your maintenance calories, your target and your protein, with the reasoning, so you can adjust later without me.' },
  { icon: Dumbbell, title: 'Training', text: 'How to fuel the sessions you already do, or how to start without burning out.' },
  { icon: Moon, title: 'Sleep and recovery', text: 'The small changes that decide whether the plan survives a bad week.' },
  { icon: Brain, title: 'ADHD and emotional eating', text: 'Default meals, fewer decisions, and what to do when stress or boredom shows up.' },
];

const faqs = [
  { q: 'Is this a subscription?', a: 'No. The Quick Fix is a single payment. There is no recurring charge.' },
  { q: 'Is there follow up after the call?', a: 'No. The Quick Fix is one session and one plan. If you want ongoing coaching, you can choose a longer plan later.' },
  { q: 'Is this medical advice?', a: 'No. I am a nutrition coach, not a doctor or a registered dietitian. If you are pregnant, take medication, or have a medical or eating disorder history, talk to your doctor first.' },
  { q: 'Where are you and what time zone?', a: 'I work from Brazil and we pick a time that fits your time zone.' },
  { q: 'What do I need for the call?', a: 'A quiet place, a device with video, and a rough idea of what you eat in a normal week. Weight and height help. Nothing else.' },
];

const QuickFixPage = () => (
  <div className="min-h-screen bg-[#0b140f] text-white">
    {/* Hero */}
    <div className="bg-gradient-to-r from-[#0f3f26] to-[#1b5e3a] py-14">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3">Quick Fix · Single Session</p>
        <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
          One 90 minute call. One nutrition plan built for your real life.
        </h1>
        <p className="text-xl text-white/80 mb-8">
          Your calories, your macros and your plan, written for you and yours to keep.
        </p>
        <a
          href={QUICK_FIX_CHECKOUT_LINK}
          className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all"
        >
          Book my Quick Fix: $259
        </a>
        <p className="text-white/60 text-sm mt-3">One time payment. No subscription. No follow up charges.</p>
      </div>
    </div>

    <div className="max-w-2xl mx-auto px-5 py-12">
      {/* How it works */}
      <h2 className="text-2xl font-bold mb-5">How it works</h2>
      <div className="space-y-4 mb-12">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49c274] text-[#06140b] font-black flex items-center justify-center">{i + 1}</div>
            <div>
              <h3 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2"><s.icon className="w-5 h-5" />{s.title}</h3>
              <p className="text-white/85 text-lg">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* What we cover */}
      <h2 className="text-2xl font-bold mb-5">What we cover</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {covered.map((c) => (
          <div key={c.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5">
            <h3 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2"><c.icon className="w-5 h-5" />{c.title}</h3>
            <p className="text-white/85">{c.text}</p>
          </div>
        ))}
      </div>

      {/* For you / not for you */}
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        <div className="bg-[#12201a] border border-[#49c274]/40 rounded-2xl p-5">
          <h2 className="text-xl font-bold mb-3 text-[#49c274]">This is for you if</h2>
          <ul className="space-y-3">
            {forYou.map((t) => (
              <li key={t} className="flex gap-3 text-white/90"><CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-0.5" />{t}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#12201a] border border-white/10 rounded-2xl p-5">
          <h2 className="text-xl font-bold mb-3 text-white/90">This is not for you if</h2>
          <ul className="space-y-3">
            {notForYou.map((t) => (
              <li key={t} className="flex gap-3 text-white/80"><XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />{t}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why me */}
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-3">Who you will talk to</h2>
        <img
          src="/transformations/adriano-transformation.jpg"
          alt="Adriano, before and after"
          className="w-full rounded-xl mb-4"
          loading="lazy"
        />
        <p className="text-white/85 text-lg mb-3">
          I am Adriano Monteiro, a nutrition coach. I have 8 years of CrossFit, 4 years sober and 2 years treating ADHD. I built this method on my own life first, then used it with other people.
        </p>
        <p className="text-white/60 text-sm">
          Individual results vary. Photos show my own results and are not a guarantee for you.
        </p>
      </div>

      {/* Free first */}
      <div className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-6 mb-12 text-center">
        <h2 className="text-xl font-bold mb-2">Want to see how I think first?</h2>
        <p className="text-white/85 mb-4">Download the free guide kit. Five short guides, cited, no hype.</p>
        <Link to="/ebooks" className="inline-block border border-[#49c274] text-[#49c274] hover:bg-[#49c274] hover:text-[#06140b] font-bold py-3 px-8 rounded-xl transition-all">
          Get the free guides
        </Link>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold mb-5">Questions</h2>
      <div className="space-y-4 mb-12">
        {faqs.map((f) => (
          <div key={f.q} className="bg-[#12201a] border border-white/10 rounded-2xl p-5">
            <h3 className="font-bold text-white mb-1">{f.q}</h3>
            <p className="text-white/80">{f.a}</p>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="text-center mb-6">
        <a
          href={QUICK_FIX_CHECKOUT_LINK}
          className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all"
        >
          Book my Quick Fix: $259
        </a>
        <p className="text-white/60 text-sm mt-3">
          Want ongoing coaching instead? <Link to="/plans" className="text-[#49c274] underline">See the coaching plans</Link>.
        </p>
      </div>
    </div>
  </div>
);

export default QuickFixPage;
