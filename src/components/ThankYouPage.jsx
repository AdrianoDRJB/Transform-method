import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, ArrowRight, Star, Sparkles, Shield, Clock, Gift, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

function ThankYouPage() {
  const GUMROAD_BUNDLE = 'https://nutriadriano.gumroad.com/l/transformation-bundle'
  const GUMROAD_STARTER_KIT = 'https://nutriadriano.gumroad.com/l/starter-kit'

  const bundleIncludes = [
    'The Complete TRANSFORM Method Guide (100+ pages)',
    'Environment & Habits Mastery (21 pages)',
    'Building Your Resilient Mind (34 pages)',
    'Emotional Mastery Guide (52 pages)',
    'Bonus: Practical Tips & Exercises Workbook'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      
      {/* Success Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            You're In! Your Starter Kit is Ready.
          </h1>
          
          <p className="text-lg text-green-100 mb-6">
            Check your email from Gumroad for the download link. If you don't see it, check your spam folder.
          </p>

          {/* Direct Link Fallback */}
          <a
            href={GUMROAD_STARTER_KIT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Access Your Starter Kit on Gumroad
          </a>
        </div>
      </div>

      {/* Transition Copy */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          You Just Took the First Step.<br />
          <span className="text-blue-600">Ready for the Full Transformation?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The Starter Kit gives you the framework. But if you're serious about real, lasting change, 
          the <strong>Complete Transformation Bundle</strong> gives you everything you need — 
          the full method, the deep-dive guides, and the practical exercises to actually make it happen.
        </p>
      </div>

      {/* Bundle Offer - Hero Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="border-2 border-yellow-400 shadow-2xl bg-white overflow-hidden">
          <CardContent className="p-0">
            {/* Bundle Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-amber-400 px-6 py-4 flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-black" />
              <span className="font-bold text-black text-sm uppercase tracking-wider">Complete Transformation Bundle</span>
              <Star className="w-5 h-5 text-black" />
            </div>
            
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Bundle Details */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Everything You Need to Transform Your Life
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    5 comprehensive guides covering nutrition, habits, environment design, mental resilience, 
                    and emotional mastery — the complete toolkit for lasting change.
                  </p>
                  
                  {/* What's Included */}
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">What's included:</h4>
                    <ul className="space-y-2.5">
                      {bundleIncludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Instant digital delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm text-gray-600">Lifetime access</span>
                    </div>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="w-full md:w-auto flex-shrink-0 text-center bg-gray-50 rounded-2xl p-6 md:p-8">
                  <p className="text-sm text-gray-500 mb-1">Complete Bundle</p>
                  <div className="text-5xl font-black text-gray-900 mb-1">$59</div>
                  <p className="text-sm text-green-600 font-semibold mb-6">One-time payment. No subscription.</p>
                  
                  <a
                    href={GUMROAD_BUNDLE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg w-full justify-center"
                  >
                    <Sparkles className="w-5 h-5" />
                    Get the Bundle
                  </a>
                  
                  <p className="text-xs text-gray-400 mt-3">Secure checkout via Gumroad</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Social Proof */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
          <p className="text-center text-gray-500 text-sm font-bold uppercase tracking-wider mb-6">From the creator</p>
          <blockquote className="text-center text-lg text-gray-700 italic max-w-2xl mx-auto">
            "Eight years ago, I was 30 years old, hungover, and couldn't catch my breath tying my shoes. 
            Today, I'm sober, a consistent athlete, and competing at a national level. 
            This bundle contains everything I learned on that journey — distilled into actionable guides 
            you can start using today."
          </blockquote>
          <p className="text-center text-gray-900 font-bold mt-4">— Adriano</p>
          <p className="text-center text-gray-500 text-sm">Lost 84 lbs · 3 years sober · National CrossFit competitor</p>
        </div>
      </div>

      {/* Soft Upsell to Coaching */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-3">For Those Who Want More</p>
          <h3 className="text-2xl font-bold mb-4">
            Want Personalized Coaching?
          </h3>
          <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
            Guides give you the knowledge. Coaching gives you the accountability, personalization, 
            and support to actually make it happen. If you're serious about transformation, 
            let's talk.
          </p>
          <Link
            to="/plans"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-xl transition-all"
          >
            Explore Coaching Plans <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Social Proof Footer */}
      <div className="py-8 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Follow along for daily tips and real transformation stories:
        </p>
        <a 
          href="https://instagram.com/adriano.nutrition" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm"
        >
          @adriano.nutrition
        </a>
      </div>
    </div>
  )
}

export default ThankYouPage
