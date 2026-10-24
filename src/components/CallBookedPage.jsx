import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, Mail, ArrowRight } from 'lucide-react'
import { trackCallBooked } from '@/lib/tracking'

// Pagina para onde o Calendly redireciona depois que a pessoa agenda a call.
const REPLY_MAILTO =
  'mailto:adriano.nutrition@gmail.com?subject=' +
  encodeURIComponent('Before our call') +
  '&body=' +
  encodeURIComponent(
    "Hi Adriano,\n\n1) My main goal:\n2) What I have tried before:\n3) What is hardest for me right now:\n"
  )

const FAQS = [
  {
    q: "I've tried everything and failed. Why would this work?",
    a: "You did not fail before. The method you were given just was not right for you. Here we build the system together, around your routine and the foods you like.",
  },
  {
    q: 'Do I have to give up my favorite foods?',
    a: 'No. Prohibition creates compulsion. We find a way to fit your favorite foods in without hurting your results.',
  },
  {
    q: 'Can I still go out with friends?',
    a: 'Yes. I teach you to choose well at restaurants, bars and parties, so you do not become the annoying diet person.',
  },
  {
    q: 'What if I start and do not like it?',
    a: 'You have my full support for 15 days. If it is not for you, you can ask for your money back, no questions asked.',
  },
]

function CallBookedPage() {
  useEffect(() => {
    // Evita contar duas vezes se a pessoa atualizar a pagina
    try {
      if (sessionStorage.getItem('call_booked_tracked')) return
      sessionStorage.setItem('call_booked_tracked', '1')
    } catch (e) {}
    trackCallBooked()
  }, [])

  return (
    <div className="min-h-screen bg-[#0b140f]">
      <div className="bg-gradient-to-r from-[#1b5e3a] to-[#0f3f26] text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Your call is booked.</h1>
          <p className="text-lg text-white/80 mb-6">
            Check your email for the confirmation and the meeting link. While you wait, start with the free guides.
          </p>
          <Link
            to="/ebooks"
            className="inline-flex items-center gap-2 bg-white text-[#1b5e3a] font-bold py-3 px-6 rounded-xl hover:bg-white/90 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Get the free eBooks
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 text-white">
        <h2 className="text-2xl font-bold mb-6">Before our call</h2>
        <ol className="space-y-5 mb-12">
          <li className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="font-bold text-[#49c274] mb-1">1. Read the free guides</p>
            <p className="text-white/70 mb-3">
              They show you the framework I used to lose 84 lbs. We will use them as a base on the call.
            </p>
            <Link to="/ebooks" className="inline-flex items-center gap-2 font-semibold text-white underline">
              <BookOpen className="w-4 h-4" /> Get the free eBooks
            </Link>
          </li>
          <li className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="font-bold text-[#49c274] mb-1">2. Send me 3 quick lines</p>
            <p className="text-white/70 mb-3">
              Your main goal, what you tried before, and what is hardest right now. This lets me
              prepare and make our 20 minutes count.
            </p>
            <a href={REPLY_MAILTO} className="inline-flex items-center gap-2 font-semibold text-white underline">
              <Mail className="w-4 h-4" /> Email me your answers
            </a>
          </li>
          <li className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="font-bold text-[#49c274] mb-1">3. Show up</p>
            <p className="text-white/70">
              Join from the link in your confirmation email. If you need another time, just reply to that
              email or write to adriano.nutrition@gmail.com.
            </p>
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-6">Questions people ask before starting</h2>
        <div className="space-y-4 mb-12">
          {FAQS.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-4">
              <p className="font-semibold mb-1">{f.q}</p>
              <p className="text-white/70">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1b5e3a] to-[#0f3f26] rounded-2xl p-6 text-center">
          <p className="text-lg font-bold mb-2">Already know you want to start?</p>
          <p className="text-white/80 mb-4">You do not have to wait for the call. See the plans and pick what fits.</p>
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 bg-white text-[#1b5e3a] font-bold py-3 px-6 rounded-xl hover:bg-white/90 transition-all"
          >
            See the plans <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallBookedPage
