import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen, ArrowRight, Star, Sparkles, Shield, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

function ThankYouPage() {
  const deepDiveEbooks = [
    {
      id: 'environment-habits',
      title: 'Environment & Habits Mastery',
      description: 'Master your environment and build lasting habits through science-based strategies.',
      price: '$5.99',
      pages: '21 pages',
      topics: ['Environment Design', 'Habit Formation', 'Behavior Change', 'Practical Exercises'],
      stripeLink: 'https://buy.stripe.com/eVq4gy5fx0EDam34571Jm0F',
      color: 'from-green-500 to-emerald-600',
      icon: '🌱'
    },
    {
      id: 'resilient-mind',
      title: 'Building Your Resilient Mind',
      description: 'Build lasting mental strength with science-backed methods and actionable strategies.',
      price: '$5.99',
      pages: '34 pages',
      topics: ['Mental Resilience', 'Growth Mindset', 'Neuroscience', 'Stress Management'],
      stripeLink: 'https://buy.stripe.com/dRm28q0ZhfzxgKrcBD1Jm0s',
      color: 'from-blue-500 to-indigo-600',
      icon: '🧠'
    },
    {
      id: 'emotional-mastery',
      title: 'Emotional Mastery Guide',
      description: 'Understand your triggers and develop emotional intelligence for lasting change.',
      price: '$5.99',
      pages: '52 pages',
      topics: ['Emotional Intelligence', 'Self-Awareness', 'Emotional Regulation', 'Trigger Management'],
      stripeLink: 'https://buy.stripe.com/eVq9AS5fxfzxam36df1Jm0t',
      color: 'from-purple-500 to-pink-600',
      icon: '💎'
    }
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
            You're In! Your Guide is On Its Way.
          </h1>
          
          <p className="text-lg text-green-100 mb-6">
            Check your inbox for the download link. If you don't see it, check your spam folder.
          </p>

          {/* Direct Download Fallback */}
          <a
            href="/TRANSFORM_Method_Full_Corrected_eBook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold py-3 px-6 rounded-xl hover:bg-green-50 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Download PDF Now (Instant Access)
          </a>
        </div>
      </div>

      {/* Transition Copy */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          You Just Took the First Step.<br />
          <span className="text-blue-600">Want to Go Deeper?</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The free guide gives you the framework. These deep-dive guides give you the 
          <strong> complete playbook</strong> for each pillar of transformation — environment, mindset, 
          and emotional mastery. Each one is a focused, actionable manual you can start using today.
        </p>
      </div>

      {/* Individual eBooks */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deepDiveEbooks.map((ebook) => (
            <Card key={ebook.id} className="flex flex-col hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-gray-100">
              <CardContent className="p-6 flex flex-col flex-1">
                {/* Icon & Title */}
                <div className="text-3xl mb-3">{ebook.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ebook.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{ebook.description}</p>
                
                {/* Topics */}
                <ul className="space-y-1.5 mb-5">
                  {ebook.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-gray-900">{ebook.price}</span>
                    <span className="text-sm text-gray-500">{ebook.pages}</span>
                  </div>
                  <a
                    href={ebook.stripeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center bg-gradient-to-r ${ebook.color} text-white font-bold py-3 px-4 rounded-xl hover:opacity-90 transition-all`}
                  >
                    Get This Guide
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bundle Offer - Best Value */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Card className="border-2 border-yellow-400 shadow-xl bg-gradient-to-br from-yellow-50 to-amber-50 overflow-hidden">
          <CardContent className="p-0">
            {/* Bundle Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-amber-400 px-6 py-3 flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-black" />
              <span className="font-bold text-black text-sm uppercase tracking-wider">Best Value — Save 33%</span>
              <Star className="w-5 h-5 text-black" />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Complete Transformation Bundle
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Get all 3 deep-dive guides together and save. Master your environment, build mental resilience, 
                    and develop emotional intelligence — the complete toolkit for lasting change.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Environment & Habits</span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">Resilient Mind</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">Emotional Mastery</span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-600">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Instant PDF download after purchase</span>
                  </div>
                </div>

                <div className="text-center flex-shrink-0">
                  <div className="text-sm text-gray-500 line-through mb-1">$17.97</div>
                  <div className="text-4xl font-black text-gray-900 mb-1">$11.99</div>
                  <div className="text-sm text-green-600 font-semibold mb-4">Save $5.98</div>
                  
                  <a
                    href="https://buy.stripe.com/cNi00i4bt2ML1Px3131Jm0u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-bold py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
                  >
                    <Sparkles className="w-5 h-5" />
                    Get the Bundle
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Soft Upsell to Coaching */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-3">For Those Who Want More</p>
          <h3 className="text-2xl font-bold mb-4">
            Want Personalized Coaching?
          </h3>
          <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
            eBooks give you the knowledge. Coaching gives you the accountability, personalization, 
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
