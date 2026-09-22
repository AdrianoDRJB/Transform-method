import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, ArrowRight, Sparkles, Shield, Clock, PhoneCall } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

function ThankYouPage() {
  const CALENDLY_LINK = 'https://calendly.com/adriano-nutrition/new-meeting'

  const guideHighlights = [
    'The Complete TRANSFORM Method Guide',
    'Environment & Habits Mastery',
    'Building Your Resilient Mind',
    'Emotional Mastery Guide',
    'Sleep, Recovery & Mental Resilience'
  ]

  return (
    <div className="min-h-screen bg-[#0b140f]">

      {/* Success Header */}
      <div className="bg-gradient-to-r from-[#1b5e3a] to-[#0f3f26] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            You're In! Your eBook is Ready.
          </h1>

          <p className="text-lg text-white/80 mb-6">
            Your download should have started automatically. If it didn't, head back to the eBooks page and tap it again.
          </p>

          <Link
            to="/ebooks"
            className="inline-flex items-center gap-2 bg-white text-[#1b5e3a] font-bold py-3 px-6 rounded-xl hover:bg-white/90 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Browse All Free eBooks
          </Link>
        </div>
      </div>

      {/* Transition Copy */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          You Just Took the First Step.<br />
          <span className="text-[#49c274]">Ready for the Full Transformation?</span>
        </h2>
        <p className="text-lg text-[#9fb6a8] max-w-2xl mx-auto">
          The free guides give you the framework. But if you're serious about real, lasting change,
          the <strong className="text-white">Complete Guides</strong> — given directly to coaching clients — go
          much deeper, with the full method and step-by-step application.
        </p>
      </div>

      {/* Complete Guides - Hero Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="border-2 border-[#2e9e4f]/40 shadow-2xl bg-[#12201a] overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#2e9e4f] to-[#49c274] px-6 py-4 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-[#06140b]" />
              <span className="font-bold text-[#06140b] text-sm uppercase tracking-wider">Complete Guides</span>
              <Sparkles className="w-5 h-5 text-[#06140b]" />
            </div>

            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Details */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Go Deeper Into Every Topic
                  </h3>
                  <p className="text-[#9fb6a8] mb-6 text-lg">
                    5 comprehensive guides covering nutrition, habits, environment design, mental resilience,
                    and emotional mastery — the complete toolkit for lasting change.
                  </p>

                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">What's inside:</h4>
                    <ul className="space-y-2.5">
                      {guideHighlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#49c274] flex-shrink-0 mt-0.5" />
                          <span className="text-[#c9d8ce]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#49c274]" />
                      <span className="text-sm text-[#9fb6a8]">Given to coaching clients</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#49c274]" />
                      <span className="text-sm text-[#9fb6a8]">Free, no obligation call</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="w-full md:w-auto flex-shrink-0 text-center bg-[#0f1c15] rounded-2xl p-6 md:p-8">
                  <p className="text-sm text-[#9fb6a8] mb-1">Curious what's inside?</p>
                  <div className="text-2xl font-black text-white mb-4">Book a Free Call</div>

                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg w-full justify-center"
                  >
                    <PhoneCall className="w-5 h-5" />
                    Book a Call
                  </a>

                  <p className="text-xs text-[#9fb6a8] mt-3">No pressure, no sales pitch.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Social Proof */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#0f1c15] rounded-2xl p-6 md:p-8">
          <p className="text-center text-[#9fb6a8] text-sm font-bold uppercase tracking-wider mb-6">From the creator</p>
          <blockquote className="text-center text-lg text-[#c9d8ce] italic max-w-2xl mx-auto">
            "Eight years ago, I was 30 years old, hungover, and couldn't catch my breath tying my shoes.
            Today, I'm sober, a consistent athlete, and competing at a national level.
            Everything I learned on that journey is distilled into these guides —
            actionable steps you can start using today."
          </blockquote>
          <p className="text-center text-white font-bold mt-4">— Adriano</p>
          <p className="text-center text-[#9fb6a8] text-sm">Lost 84 lbs · 3 years sober · National CrossFit competitor</p>
        </div>
      </div>

      {/* Soft Upsell to Coaching */}
      <div className="bg-[#0f1c15] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3">For Those Who Want More</p>
          <h3 className="text-2xl font-bold mb-4">
            Want Personalized Coaching?
          </h3>
          <p className="text-[#9fb6a8] text-lg mb-6 max-w-xl mx-auto">
            Guides give you the knowledge. Coaching gives you the accountability, personalization,
            and support to actually make it happen. If you're serious about transformation,
            let's talk.
          </p>
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-bold py-3 px-8 rounded-xl transition-all"
          >
            Explore Coaching Plans <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Social Proof Footer */}
      <div className="py-8 text-center">
        <p className="text-[#9fb6a8] text-sm mb-4">
          Follow along for daily tips and real transformation stories:
        </p>
        <a
          href="https://instagram.com/adriano.nutrition"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#49c274] hover:text-[#3fae67] transition-colors font-medium text-sm"
        >
          @adriano.nutrition
        </a>
      </div>
    </div>
  )
}

export default ThankYouPage
