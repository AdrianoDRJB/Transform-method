import React, { useState, useRef, useEffect } from 'react'
import { CheckCircle, XCircle, Download, PhoneCall, ArrowDown, Target, Home, Zap, ShieldCheck, Layers, Settings, TrendingUp, Brain, UserCheck } from 'lucide-react'
import { trackEmailSignup } from '../lib/tracking'

// Pagina de captura para trafego frio do Meta (sem preco, sem menu, sem rodape do site).
// Ordem: e-mail primeiro (libera os guias), Book a Call logo abaixo, descricao detalhada, Book a Call no fim.
const CALENDLY_LINK = 'https://calendly.com/adriano-nutrition/free-20-min-discovery-call'
const EMAIL_KEY = 'ebooks_email_done'

const guides = [
  {
    title: 'TRANSFORM Method',
    text: 'The 9-step framework in a nutshell: how nutrition, habits, mindset and environment fit together.',
    file: '/transform-method-bonus.pdf',
  },
  {
    title: 'Nutrition Fundamentals',
    text: 'The science-based basics. No fads, no myths, just what actually moves the needle.',
    file: '/nutrition-fundamentals-bonus.pdf',
  },
  {
    title: 'Environment Design',
    text: 'Shape your surroundings so good habits are easy and bad ones are hard.',
    file: '/environment-design-bonus.pdf',
  },
  {
    title: 'ADHD & Emotional Intelligence',
    text: 'Understand your triggers and build emotional awareness, with ADHD in mind.',
    file: '/adhd-emotional-intelligence-bonus.pdf',
  },
  {
    title: 'Sleep, Recovery & Mental Resilience',
    text: 'Why recovery is where the real transformation happens.',
    file: '/sleep-recovery-mental-resilience-bonus.pdf',
  },
]

const pains = [
  {
    title: 'You start strong, then one slip ends the day',
    text: 'One cookie, one skipped meal, one bad night. A voice says "I will just let today go," and two weeks later you are back where you began. That is not weak willpower. It is a plan with no way back in.',
  },
  {
    title: 'You are too tired to eat right',
    text: 'Long day, no energy left, and fast food is right there. Most plans are built for a perfect week you do not have. Your job, your family and your commute are not going away.',
  },
  {
    title: 'You do not know where to start',
    text: 'Videos, apps, macros, rules. Everyone says something different, so you end up doing nothing. You do not need more information. You need one next step that fits your day.',
  },
  {
    title: 'You do everything right and nothing moves',
    text: 'You walk. You work out. You watch what you eat. And the scale still will not budge. Often the answer is hiding in a normal week, and it is hard to see alone.',
  },
]

const steps = [
  { letter: 'T', icon: Target, title: 'Track Your Reality', text: 'We start by seeing where you really are, without judgment. Food, sleep, training, mood. Tracking on its own already changes behavior, and it shows us what to fix first.' },
  { letter: 'R', icon: Home, title: 'Redesign Your Environment', text: 'Your surroundings decide more than your discipline. We make good habits obvious and easy, and remove the triggers that pull you off track.' },
  { letter: 'A', icon: Zap, title: 'Act in Micro-Steps', text: 'Actions so small you cannot say no. We anchor each new step to something you already do, and we celebrate every win. Consistency beats intensity.' },
  { letter: 'N', icon: ShieldCheck, title: 'Navigate Obstacles and Setbacks', text: 'Setbacks are normal. This step is the "never miss twice" rule: the next meal is a fresh start, with no punishment and no waiting for Monday.' },
  { letter: 'S', icon: Layers, title: 'Stack Habits for Compound Growth', text: 'New habits ride on your existing routines, so small improvements add up instead of fading.' },
  { letter: 'F', icon: Settings, title: 'Focus on Systems, Not Goals', text: 'A goal gives direction. A system gives progress. We build daily practices that keep working on your worst days.' },
  { letter: 'O', icon: TrendingUp, title: 'Optimize Through Continuous Improvement', text: 'We review what works and what does not, and adjust. Your plan changes as your life changes.' },
  { letter: 'R', icon: Brain, title: 'Reframe Your Mindset', text: 'We challenge the stories that keep you stuck, like "I always quit" or "all or nothing."' },
  { letter: 'M', icon: UserCheck, title: 'Master Your Identity', text: 'The deepest change is who you believe you are. When the identity shifts, the habits stop being a fight.' },
]

const phases = [
  { title: 'Before week 1: Kickoff', text: 'We map what has derailed you before: schedule, training load, history, travel, family. That sets your plan.' },
  { title: 'Week 1: Prep', text: 'Calories and macros set from your real schedule. A daily rhythm built around your meals, training and travel.' },
  { title: 'Weeks 2 to 4: Base', text: 'Your environment rebuilt so discipline is not a daily fight. Plans for training days, travel and off-plan meals.' },
  { title: 'Weeks 5 to 11: Build', text: 'Weekly adherence checks and the mindset that holds up under pressure. This is where most of the change shows up.' },
  { title: 'Week 12: Review', text: 'We review what worked and what did not, lock in your sleep and recovery, and map what comes next.' },
]

const coachingIncludes = [
  'A kickoff session to map what has derailed you before',
  'A call every 10 days, for the full 12 weeks',
  'Calories and macros set for your schedule and adjusted as you go',
  'Messages between calls, answered within 24 hours on business days',
  'The Transform Method guides, based on cited science',
  'A final review and your next block mapped',
]

const callSteps = [
  'You click the button below and pick a time that fits your time zone.',
  'You get an email with the confirmation and the meeting link.',
  'You send me 3 lines: your goal, what you have tried, and what is hardest right now.',
  'On the call I listen first, then give you 1 or 2 things you can use the same day.',
  'If it makes sense, I show you how working together would look. If not, you still leave with something useful.',
]

const notForYou = [
  'You want a promise of fast weight loss. I do not make that promise.',
  'You need medical care for a diagnosed condition. See your doctor first.',
  'You want a perfect diet. This is about a plan you can actually keep.',
]

const faqs = [
  { q: 'Are the guides really free?', a: 'Yes. Enter your email once and you can download all five right on this page.' },
  { q: 'What happens after I enter my email?', a: 'You can open and download the guides right away, and you get a short email from me. You can unsubscribe at any time.' },
  { q: 'What is the free 20-minute conversation?', a: 'It is not a sales pitch. We talk about where you are stuck, and I give you 1 or 2 concrete things to use right away. If working together makes sense, I tell you how it would look. If not, you keep what you learned.' },
  { q: 'Will this work for me?', a: 'I cannot promise that. It worked for me and for some of my clients, and it is based on science, but results vary from person to person.' },
  { q: 'Do I have to give up foods I like?', a: 'No. Banning foods creates cravings. Foods you like can fit in a plan in a way that does not wreck your progress.' },
  { q: 'Can I still go out with friends, travel or work late?', a: 'Yes. A plan that only works in a perfect week is not a plan. We build around your real schedule.' },
  { q: 'Is this medical advice?', a: 'No. I am a nutrition coach, not a doctor or a registered dietitian. If you are pregnant, take medication, or have a medical or eating disorder history, talk to your doctor first.' },
  { q: 'Where are you and what time zone?', a: 'I work from Brazil, online, and we pick call times that fit your time zone.' },
]

function BookCallButton({ where }) {
  return (
    <a
      href={CALENDLY_LINK}
      target="_blank"
      rel="noopener noreferrer"
      data-where={where}
      className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all"
    >
      Book a Call
    </a>
  )
}

const BEEHIIV_FORM_URL = 'https://subscribe-forms.beehiiv.com/8bc25af3-6bed-42b2-9e07-dadff9505e58'

// Formulario oficial do beehiiv dentro da pagina (o cadastro feito pelo servidor do site e bloqueado pela Cloudflare do beehiiv).
// O e-mail vai direto para o beehiiv. Os 5 guias abrem sozinhos quando o beehiiv confirma o envio.
// O formulario do beehiiv tem largura fixa (~560px). No celular encolhemos ele para caber na caixa.
const FORM_W = 560
const FORM_H = 300

function EmailForm({ id, unlocked, onUnlock, buttonText }) {
  const boxRef = useRef(null)
  const frameRef = useRef(null)
  const [boxW, setBoxW] = useState(FORM_W)
  useEffect(() => {
    const el = boxRef.current
    if (!el) return
    const update = () => setBoxW(el.clientWidth || FORM_W)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [unlocked])
  const scale = Math.min(1, boxW / FORM_W)

  // So abre os guias quando o proprio formulario do beehiiv confirma que o e-mail foi enviado.
  useEffect(() => {
    if (unlocked) return
    const onMessage = (event) => {
      const frame = frameRef.current
      if (!frame || event.source !== frame.contentWindow) return
      if (event.data && event.data.type === 'beehiiv:success-toast') onUnlock()
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [unlocked, onUnlock])

  useEffect(() => {
    if (unlocked) return
    if (document.querySelector('script[data-beehiiv-embed]')) return
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://subscribe-forms.beehiiv.com/embed.js'
    s.setAttribute('data-beehiiv-embed', '1')
    document.body.appendChild(s)
  }, [unlocked])

  if (unlocked) {
    return (
      <div id={id} className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-5 text-left">
        <p className="text-white font-bold text-lg mb-1">Your 5 guides are unlocked.</p>
        <p className="text-white/70 text-sm mb-4">Tap a guide to download it. Then keep reading to see how the free call works.</p>
        <ul className="space-y-3">
          {guides.map((g) => (
            <li key={g.title}>
              <a
                href={g.file}
                download
                className="flex items-center gap-3 bg-[#0b140f] border border-white/10 hover:border-[#49c274] rounded-xl px-4 py-3 transition-colors"
              >
                <Download className="w-5 h-5 text-[#49c274] flex-shrink-0" />
                <span className="text-white font-semibold">{g.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div id={id} className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-5">
      <p className="text-white font-bold text-lg mb-1">Enter your email to get the 5 guides</p>
      <p className="text-white/70 text-sm mb-3">Type your email below and press Subscribe.</p>
      <div
        ref={boxRef}
        className="rounded-xl overflow-hidden border border-[#49c274]/40 bg-[#12201a]"
        style={{ height: FORM_H * scale, isolation: 'isolate' }}
      >
        <div
          style={{
            width: FORM_W,
            height: FORM_H,
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
            marginLeft: Math.max(0, (boxW - FORM_W * scale) / 2),
          }}
        >
          <iframe
            ref={frameRef}
            src={BEEHIIV_FORM_URL}
            title="Email signup"
            className="beehiiv-embed !w-full !h-full"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              border: 0,
              backgroundColor: 'transparent',
              filter: 'invert(1) hue-rotate(180deg)',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>
      <p className="text-white/70 text-sm mt-3">
        Your 5 guides open here automatically as soon as your email is sent.
      </p>
      <p className="text-white/50 text-sm mt-3">Free. Unsubscribe any time.</p>
    </div>
  )
}

function FreeGuidesLanding() {
  const readUnlocked = () => {
    try { return window.localStorage.getItem(EMAIL_KEY) === '1' } catch (e) { return false }
  }
  const [unlocked, setUnlocked] = useState(readUnlocked)
  const topRef = useRef(null)

  const onUnlock = () => {
    try { window.localStorage.setItem(EMAIL_KEY, '1') } catch (e) { /* vale so nesta visita */ }
    try {
      const p = new URLSearchParams(window.location.search)
      const source = (p.get('utm_content') || 'direct').replace(/[^a-z0-9_-]/gi, '').slice(0, 30) || 'direct'
      trackEmailSignup(`lp_${source}`)
    } catch (e) { /* segue */ }
    setUnlocked(true)
    if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[#0b140f] text-white">
      {/* Hero: e-mail primeiro */}
      <div className="bg-gradient-to-b from-[#0f3f26] to-[#0b140f] pt-10 pb-12">
        <div ref={topRef} className="max-w-2xl mx-auto px-5">
          <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3 text-center">
            Adriano | Nutrition Coach · 5 free guides
          </p>
          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4 text-center">
            A nutrition plan that still works after a bad day.
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-6 text-center">
            Five free guides for people who keep starting over. Enter your email and your guides open right here. No diet to follow, a system you can keep.
          </p>
          <EmailForm id="signup-top" unlocked={unlocked} onUnlock={onUnlock} buttonText="I entered my email. Open my 5 guides" />
          <div className="mt-6 text-center">
            <p className="text-white/70 mb-3">Prefer to talk? Free 20-minute conversation.</p>
            <BookCallButton where="top" />
          </div>
          <p className="text-center text-white/60 text-sm mt-5 flex items-center justify-center gap-2">
            <ArrowDown className="w-4 h-4" /> Keep reading to see everything I do and how the free call works
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 pb-12">
        {/* Credibilidade */}
        <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold mb-3">I built this by living it</h2>
          <img
            src="/transformations/adriano-transformation.jpg"
            alt="Adriano, before and after"
            className="w-full rounded-xl mb-4"
            loading="lazy"
          />
          <p className="text-white/85 text-lg mb-3">
            I am Adriano Monteiro. I have 8 years of CrossFit, 4 years sober and 2 years of treating ADHD, which taught me a lot about why I kept getting it wrong.
          </p>
          <p className="text-white/85 text-lg mb-3">
            What I teach worked for me and for some of my clients. It is based on science, and I cite it in the guides. These guides are what I use every day, in short form.
          </p>
          <p className="text-white/60 text-sm">
            Individual results vary. Photos show my own results and are not a guarantee for you.
          </p>
        </div>

        {/* Dores */}
        <h2 className="text-2xl font-bold mb-2">Does this sound like your week?</h2>
        <p className="text-white/70 text-lg mb-5">These are the four things I hear most from people who are tired of starting over.</p>
        <div className="space-y-4 mb-12">
          {pains.map((p) => (
            <div key={p.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5">
              <h3 className="text-[#49c274] font-bold text-lg mb-1">{p.title}</h3>
              <p className="text-white/85 text-lg">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Por que falha / mecanismo */}
        <div className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold mb-3 text-[#49c274]">Why most plans fall apart, and what I do differently</h2>
          <p className="text-white/90 text-lg mb-3">
            Most plans depend on motivation, a perfect week and counting everything. The first bad day breaks them, and then you blame yourself.
          </p>
          <p className="text-white/90 text-lg mb-3">
            I use a system I call the TRANSFORM Method. It is built around the days that go wrong: the next meal is a fresh start, the steps are small, and the plan fits your real schedule.
          </p>
          <p className="text-white/70 text-base">
            There is no one size fits all. An athlete training twice a day eats high carb. Someone else trains fasted on low carb and feels great. A dad enjoys a barbecue and dessert with his daughter, and that is fine. Your plan should fit your life, not the other way around.
          </p>
        </div>

        {/* Os guias */}
        <h2 className="text-2xl font-bold mb-2">What is inside the 5 free guides</h2>
        <p className="text-white/70 text-lg mb-5">Short, practical and based on cited science.</p>
        <div className="space-y-3 mb-6">
          {guides.map((g, i) => (
            <div key={g.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49c274] text-[#06140b] font-black flex items-center justify-center">{i + 1}</div>
              <div>
                <h3 className="font-bold text-lg">{g.title}</h3>
                <p className="text-white/80">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-12">
          <EmailForm id="signup-mid" unlocked={unlocked} onUnlock={onUnlock} buttonText="I entered my email. Open my 5 guides" />
        </div>

        {/* O metodo em detalhe */}
        <h2 className="text-2xl font-bold mb-2">The TRANSFORM Method, step by step</h2>
        <p className="text-white/70 text-lg mb-5">Nine steps. Each one answers a reason people fall off.</p>
        <div className="space-y-4 mb-12">
          {steps.map((s, i) => (
            <div key={`${s.letter}-${i}`} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49c274] text-[#06140b] font-black flex items-center justify-center">{s.letter}</div>
              <div>
                <h3 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2"><s.icon className="w-5 h-5" />{s.title}</h3>
                <p className="text-white/85 text-lg">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Como e trabalhar comigo */}
        <h2 className="text-2xl font-bold mb-2">If we work together, this is what it looks like</h2>
        <p className="text-white/70 text-lg mb-5">A 12 week block, one person at a time, built around your real life.</p>
        <div className="space-y-4 mb-8">
          {phases.map((p, i) => (
            <div key={p.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49c274] text-[#06140b] font-black flex items-center justify-center">{i + 1}</div>
              <div>
                <h3 className="text-[#49c274] font-bold text-lg mb-1">{p.title}</h3>
                <p className="text-white/85 text-lg">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 mb-12">
          <h3 className="text-xl font-bold mb-4">What is included</h3>
          <ul className="space-y-3">
            {coachingIncludes.map((t) => (
              <li key={t} className="flex gap-3 text-white/90 text-lg"><CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-1" />{t}</li>
            ))}
          </ul>
        </div>

        {/* Para quem nao e */}
        <div className="bg-[#12201a] border border-white/10 rounded-2xl p-5 mb-12">
          <h2 className="text-xl font-bold mb-3 text-white/90">This is not for you if</h2>
          <ul className="space-y-3">
            {notForYou.map((t) => (
              <li key={t} className="flex gap-3 text-white/80"><XCircle className="w-5 h-5 text-white/50 flex-shrink-0 mt-0.5" />{t}</li>
            ))}
          </ul>
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

        {/* CTA final */}
        <div className="bg-[#12201a] border-2 border-[#49c274] rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2"><PhoneCall className="w-6 h-6 text-[#49c274]" />Want to talk it through? Book a free 20-minute conversation</h2>
          <p className="text-white/80 text-lg mb-4">It is a conversation, not a sales pitch. You leave with 1 or 2 things you can use today, even if we never work together.</p>
          <ol className="space-y-3 text-white/90 text-lg list-decimal pl-5 mb-6">
            {callSteps.map((t) => (<li key={t}>{t}</li>))}
          </ol>
          <div className="text-center">
            <BookCallButton where="bottom" />
          </div>
        </div>

        {/* P.S. */}
        <p className="text-white/85 text-lg mb-3">
          <strong>P.S.</strong> If you do nothing, next week looks like this one: another plan that breaks on the first bad day. The guides are free and take a few minutes to read. And if you would rather talk, the 20-minute conversation is free too.
        </p>
        <p className="text-white/50 text-sm">
          I am a nutrition coach, not a doctor or a registered dietitian. This page is general education, not medical advice. If you are pregnant, take medication, or have a medical or eating disorder history, talk to your doctor first.
        </p>
      </div>
    </div>
  )
}

export default FreeGuidesLanding
