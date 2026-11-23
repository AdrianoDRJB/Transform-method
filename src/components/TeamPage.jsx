import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Calendar, Target, Users, Moon, Dumbbell, Utensils, MessageCircle, ShieldCheck } from 'lucide-react';

// Link de pagamento do Stripe (assinatura com teste de 30 dias, cobra no dia 31).
// Enquanto estiver vazio, o botao leva para o Instagram para nao quebrar.
const TEAM_CHECKOUT_LINK = 'https://buy.stripe.com/8x200i23lafd8dVcBD1Jm0U';
const FALLBACK_LINK = 'https://ig.me/m/adriano.nutrition';
const CTA_HREF = TEAM_CHECKOUT_LINK || FALLBACK_LINK;
const CTA_TEXT = 'Start my 30 days. Pay nothing today';

// Video de apresentacao do Adriano. Quando gravar, coloque o arquivo em
// public/videos/team-intro.mp4 e troque a linha abaixo por '/videos/team-intro.mp4'.
// Enquanto estiver vazio, nada aparece para o visitante. Para ver o espaco reservado,
// abra a pagina com ?preview no final do endereco (ex.: /team?preview).
const VIDEO_SRC = '';
const VIDEO_POSTER = '/hero-bw.jpg';

const benefits = [
  { icon: Calendar, title: 'Planned with you, around your routine', text: 'We build it together, around your week and your real difficulties.' },
  { icon: MessageCircle, title: 'Close contact with me', text: 'I am building a small team, so you get real proximity and my best support.' },
  { icon: Utensils, title: 'A chef in your corner', text: 'Before nutrition I was a cook and a chef, so expect prep tips and a video or two to help in the kitchen.' },
  { icon: ShieldCheck, title: 'No shortcuts, just the real work', text: 'I have lived this for 8 years: 5 with lots of ups and downs, 4 consistent. I will hold you accountable.' },
];

const trainingPhotos = [
  { src: '/training/deadlift.jpg', alt: 'Adriano deadlifting in a competition', caption: 'Heavy days' },
  { src: '/training/handstand.jpg', alt: 'Handstand walk at a CrossFit event', caption: 'Fun on the hard days' },
];

const mealPhotos = [
  { src: '/meals/bowl-beet-veg.jpg', alt: 'Bowl with beet, carrot, zucchini and ground beef', caption: 'Color on the plate' },
  { src: '/meals/plate-broccoli.jpg', alt: 'Plate with chicken, black beans, broccoli and vegetables', caption: 'Chicken, beans, broccoli' },
  { src: '/meals/eggs-toast-fruit.jpg', alt: 'Eggs, cheese toast, fruit and coffee', caption: 'Simple breakfast' },
];

// Formacao. Cada item e verdadeiro e usa o nome e a data do certificado.
// Para incluir o Precision Nutrition Level 1, preencha LEVEL1_TEXT com o nome exato e a data do certificado
// (ex.: 'Precision Nutrition Level 1 Certification (2023)'). Enquanto estiver vazio, nao aparece para o visitante.
const LEVEL1_TEXT = '';
const credentials = [
  { text: 'Advanced Certificate in Change Psychology, Precision Nutrition (March 2025)' },
  { text: 'Nutrition for Metabolic Health: What is Metabolism, Precision Nutrition (December 2024)', badge: '/badges/pn-nmh-1.png' },
];

const midPhotos = [
  { src: '/training/rowing.jpg', alt: 'Adriano on the rowing machine', caption: 'Steady work', ratio: 'aspect-[3/4]' },
  { src: '/meals/yogurt-bowl-banana.jpg', alt: 'Yogurt bowl with banana and granola', caption: 'Yogurt bowl', ratio: 'aspect-[3/4]' },
];

const phases = [
  { icon: Target, title: 'Before week 1: Kickoff', text: 'We map what has derailed you before: schedule, training load, history, travel, family. That sets your block.' },
  { icon: Utensils, title: 'Week 1: Prep', text: 'Calories and macros set from your real training schedule. A daily rhythm built around your meals, training and travel.' },
  { icon: Dumbbell, title: 'Weeks 2 to 4: Base', text: 'Your environment rebuilt so discipline is not a daily fight. Plans for training days, travel and off plan meals.' },
  { icon: MessageCircle, title: 'Weeks 5 to 11: Build', text: 'Weekly adherence checks and the mindset that holds up under pressure. This is where most of the change shows up.' },
  { icon: Moon, title: 'Week 12: Deload and review', text: 'We review what worked and what did not, lock in your sleep and recovery, and map your next block.' },
];

const included = [
  'A kickoff session to map your limiters',
  'A call every 10 days for the full 12 weeks',
  'Calories and macros set for your schedule and adjusted as you go',
  'Messages between calls, answered within 24 hours on business days',
  'The Transform Method guides, based on cited science',
  'A final review and your next block mapped',
];

const notForYou = [
  'You want a promise of fast weight loss. I do not make that promise.',
  'You need medical care for a diagnosed condition. See your doctor first.',
  'You want a perfect diet. This is about a plan you can actually keep.',
];

const faqs = [
  { q: 'When am I charged?', a: 'Your card is saved today and nothing is charged for 30 days. On day 31 you are charged $259 once, unless you cancel before then. Cancel any time in those 30 days by sending me a message on Instagram @adriano.nutrition. No form, no questions.' },
  { q: 'What if I do not like it?', a: 'Cancel before day 31 and you pay nothing. You keep the material we built together.' },
  { q: 'Is it a subscription?', a: 'You will be charged once. It is one payment of $259 for the 12 week block. Stripe sets up free trials as subscriptions, so the checkout page says "every 12 weeks". I cancel it myself right after your first payment, so there is no second charge.' },
  { q: 'Why only 10 people?', a: 'I want to know every person in this team. The first cohort is capped at 10 and I will not go above 10 for any reason. Spots can stay open while people are in their 30 day trial, because some may cancel.' },
  { q: 'Will this work for me?', a: 'I cannot promise that. It worked for me and for some of my clients, and it is based on science, but results vary from person to person. That is why you get 30 days to decide.' },
  { q: 'Is this medical advice?', a: 'No. I am a nutrition coach, not a doctor or a registered dietitian. If you are pregnant, take medication, or have a medical or eating disorder history, talk to your doctor first.' },
  { q: 'Where are you and what time zone?', a: 'I work from Brazil and we pick call times that fit your time zone.' },
];

const CtaButton = () => (
  <a
    href={CTA_HREF}
    className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all"
  >
    {CTA_TEXT}
  </a>
);

const VideoSlot = () => {
  const showPlaceholder = !VIDEO_SRC && typeof window !== 'undefined' && window.location.search.includes('preview');
  if (!VIDEO_SRC && !showPlaceholder) return null;
  return (
    <div className="max-w-2xl mx-auto px-5 mt-8 mb-10">
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-3">
        {VIDEO_SRC ? (
          <video
            className="w-full rounded-xl bg-black"
            src={VIDEO_SRC}
            poster={VIDEO_POSTER}
            controls
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="aspect-video rounded-xl bg-black/40 border border-dashed border-[#49c274]/50 flex flex-col items-center justify-center text-center px-6">
            <p className="text-[#49c274] font-bold mb-1">Video goes here (about 60 seconds)</p>
            <p className="text-white/60 text-sm">Only visible with ?preview in the address. Visitors see nothing until the video is added.</p>
          </div>
        )}
        <p className="text-white/70 text-sm text-center mt-2">A short note from me, Adriano</p>
      </div>
    </div>
  );
};

const TeamPage = () => (
  <div className="min-h-screen bg-[#0b140f] text-white">
    {/* Hero */}
    <div className="bg-gradient-to-r from-[#0f3f26] to-[#1b5e3a] overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.25fr_0.75fr] items-center">
      <div className="px-5 py-10 md:py-14 text-left order-2 md:order-1">
        <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3">Team TRANSFORM · First cohort · 10 spots</p>
        <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4">
          12 weeks of nutrition coaching built around your real life.
        </h1>
        <p className="text-xl text-white/80 mb-3">
          Try the first 30 days. Nothing is charged until day 31. If you do not like it, cancel and keep the material.
        </p>
        <p className="text-white/90 font-bold text-lg mb-8">
          Early Black Friday price: <span className="text-white/50 line-through mr-2">$559</span><span className="text-[#49c274]">$259</span> for the full 12 weeks
        </p>
        <p className="text-white/60 text-sm mb-8 -mt-6">$559 is the regular price of the 3 month plan. $259 is the first cohort price.</p>
        <CtaButton />
        <p className="text-white/90 text-base font-bold mt-4">The $259 price is already applied. No code needed.</p>
        <p className="text-white/60 text-sm mt-3">Card saved today, $0 due today. $259 is charged once on day 31 unless you cancel before. The checkout page says "every 12 weeks" because of how Stripe handles free trials. I cancel it for you after your first payment, so you are charged one time only.</p>
      </div>
      <div className="order-1 md:order-2 md:py-10 md:pr-5">
        <img
          src="/transformations/adriano-transformation.jpg"
          alt="Adriano Monteiro, before and after"
          className="w-full h-52 md:h-auto object-cover object-top md:rounded-2xl"
        />
      </div>
      </div>
    </div>

    <VideoSlot />

    <div className="max-w-2xl mx-auto px-5 py-12">
      {/* What you get */}
      <h2 className="text-2xl font-bold mb-5">What working with me looks like</h2>
      <div className="space-y-4 mb-12">
        {benefits.map((b) => (
          <div key={b.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
            <b.icon className="w-6 h-6 text-[#49c274] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{b.title}</h3>
              <p className="text-white/80 text-lg">{b.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Real training, real food */}
      <h2 className="text-2xl font-bold mb-2">Real training. Real food.</h2>
      <p className="text-white/70 mb-4">This is my own week, not stock photos.</p>
      <div className="grid grid-cols-2 gap-2 mb-2">
        {trainingPhotos.map((p) => (
          <figure key={p.src}>
            <img src={p.src} alt={p.alt} loading="lazy" className="w-full aspect-[4/3] object-cover object-top rounded-xl" />
            <figcaption className="text-white/70 text-xs mt-1 text-center">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 mb-12">
        {mealPhotos.map((p) => (
          <figure key={p.src}>
            <img src={p.src} alt={p.alt} loading="lazy" className="w-full aspect-square object-cover rounded-xl" />
            <figcaption className="text-white/70 text-xs mt-1 text-center">{p.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* Story */}
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-3">I built this by living it</h2>
        <img
          src="/transformations/adriano-profile.jpg"
          alt="Adriano, before and after"
          className="w-full rounded-xl mb-4"
          loading="lazy"
        />
        <p className="text-white/85 text-lg mb-3">
          I am Adriano Monteiro. I have 8 years of CrossFit, 4 years sober and 2 years of treating ADHD, which taught me a lot about why I kept getting it wrong.
        </p>
        <p className="text-white/85 text-lg mb-3">
          This approach worked for me and it worked for some of my clients. It is based on science, and I cite it in the guides. Now I want to take what I learned to more people and build a team.
        </p>
        <p className="text-white/60 text-sm">
          Individual results vary. Photos show my own results and are not a guarantee for you.
        </p>
      </div>

      {/* Training */}
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-3">My training in coaching behavior change</h2>
        <ul className="space-y-3">
          {LEVEL1_TEXT && (
            <li className="flex gap-3 text-white/90"><CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-0.5" />Completed: {LEVEL1_TEXT}</li>
          )}
          {credentials.map((c) => (
            <li key={c.text} className="flex gap-3 text-white/90 items-start">
              <CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-0.5" />
              <span className="flex-1">Completed: {c.text}</span>
              {c.badge && <img src={c.badge} alt="Precision Nutrition NMH 1 badge" className="w-12 h-auto flex-shrink-0" loading="lazy" />}
            </li>
          ))}
        </ul>
        {!LEVEL1_TEXT && typeof window !== 'undefined' && window.location.search.includes('preview') && (
          <p className="mt-3 text-sm text-[#49c274]">Preview only: the Precision Nutrition Level 1 line goes here once I have the certificate.</p>
        )}
        <p className="text-white/60 text-sm mt-4">These are continuing education courses. I am a nutrition coach, not a doctor or a registered dietitian.</p>
      </div>

      {/* No one size fits all */}
      <h2 className="text-2xl font-bold mb-2">There is no one size fits all</h2>
      <p className="text-white/80 text-lg mb-5">Three people, three different plans, and all of them can be right.</p>
      <div className="space-y-4 mb-12">
        {[
          'An athlete training twice a day eats high carb to fuel it.',
          'Someone else trains fasted on low carb and feels great.',
          'A dad enjoys a barbecue watching his favorite team, and eats dessert with his daughter on weekend outings. And that is fine.',
        ].map((t) => (
          <div key={t} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-3">
            <CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-1" />
            <p className="text-white/90 text-lg">{t}</p>
          </div>
        ))}
      </div>
      <p className="text-white/85 text-lg mb-12">
        Your plan should fit your life, not the other way around. That is what we build in the kickoff.
      </p>

      {/* Keep going */}
      <div className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-bold mb-3 text-[#49c274]">The hard part is not the plan</h2>
        <p className="text-white/90 text-lg mb-3">
          Some friends will say it will not work. Family may criticize. People you know will make jokes. You may start to think you are wrong. You are not. You just have to keep going.
        </p>
        <p className="text-white/90 text-lg">
          That is where I come in, with the studies, my own experience and accountability. We are building a team. I did it, and you can try it too. We help each other.
        </p>
      </div>

      {/* 12 weeks */}
      <h2 className="text-2xl font-bold mb-5">Your 12 week block</h2>
      <div className="space-y-4 mb-12">
        {phases.map((p, i) => (
          <div key={p.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49c274] text-[#06140b] font-black flex items-center justify-center">{i + 1}</div>
            <div>
              <h3 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2"><p.icon className="w-5 h-5" />{p.title}</h3>
              <p className="text-white/85 text-lg">{p.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 mb-12">
        {midPhotos.map((p) => (
          <figure key={p.src}>
            <img src={p.src} alt={p.alt} loading="lazy" className={`w-full ${p.ratio} object-cover object-top rounded-xl`} />
            <figcaption className="text-white/70 text-xs mt-1 text-center">{p.caption}</figcaption>
          </figure>
        ))}
      </div>

      {/* What is included */}
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Calendar className="w-6 h-6 text-[#49c274]" />What is included</h2>
        <ul className="space-y-3">
          {included.map((t) => (
            <li key={t} className="flex gap-3 text-white/90 text-lg"><CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-1" />{t}</li>
          ))}
        </ul>
      </div>

      {/* 30 day trial */}
      <div className="bg-[#12201a] border border-[#49c274]/40 rounded-2xl p-6 mb-12">
        <h2 className="text-2xl font-bold mb-3 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-[#49c274]" />How the 30 days work</h2>
        <ol className="space-y-3 text-white/90 text-lg list-decimal pl-5">
          <li>You save your card today. <strong>You pay $0 today.</strong></li>
          <li>For 30 days we work together. If it is not for you, message me and cancel.</li>
          <li>If you cancel, you pay nothing and keep the material. If you stay, $259 is charged on day 31 and the block continues.</li>
        </ol>
        <div className="mt-6 text-center">
          <CtaButton />
          <p className="text-white/90 text-base font-bold mt-4">The $259 price is already applied. No code needed.</p>
        </div>
      </div>

      {/* Not for you */}
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-5 mb-12">
        <h2 className="text-xl font-bold mb-3 text-white/90">This is not for you if</h2>
        <ul className="space-y-3">
          {notForYou.map((t) => (
            <li key={t} className="flex gap-3 text-white/80"><XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />{t}</li>
          ))}
        </ul>
      </div>

      {/* Seats */}
      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12 text-center">
        <Users className="w-8 h-8 text-[#49c274] mx-auto mb-2" />
        <h2 className="text-xl font-bold mb-2">First cohort: 10 people, no more</h2>
        <p className="text-white/85">
          Because of the 30 day trial, spots can stay open while people decide. I will not go above 10 in this first team for any reason.
        </p>
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
        <CtaButton />
        <p className="text-white/60 text-sm mt-3">
          Want a single session instead? <Link to="/quick-fix" className="text-[#49c274] underline">See the Quick Fix</Link>.
        </p>
      </div>
    </div>
  </div>
);

export default TeamPage;
