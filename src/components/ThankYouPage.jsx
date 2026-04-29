import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Mail, BookOpen, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card.jsx'

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            You're In!
          </h1>
          
          <p className="text-xl text-gray-700 mb-2">
            Your free <span className="font-bold text-green-600">TRANSFORM Method Guide</span> is on its way.
          </p>
          
          <p className="text-lg text-gray-600">
            Check your inbox for the download link.
          </p>
        </div>

        {/* Direct Download Fallback */}
        <Card className="shadow-lg mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Download Your eBook</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Didn't receive the email? No worries — you can download it directly here.
            </p>
            <a
              href="/TRANSFORM_Method_Full_Corrected_eBook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all"
            >
              <BookOpen className="w-5 h-5" />
              Download Free PDF
            </a>
          </CardContent>
        </Card>

        {/* What's Next - Teaser for Phase 2 (eBooks offer will go here) */}
        <Card className="shadow-lg mb-8 border-2 border-yellow-400">
          <CardContent className="p-8 text-center">
            <p className="text-yellow-600 font-bold text-sm uppercase tracking-wider mb-2">What's Next?</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Go Deeper?</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              The free guide gives you the framework. Our premium deep-dive eBooks give you the complete playbook for each area of transformation — nutrition, habits, mindset, and emotional mastery.
            </p>
            <Link
              to="/ebooks"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-xl transition-all"
            >
              Explore eBooks <ArrowRight className="w-5 h-5" />
            </Link>
          </CardContent>
        </Card>

        {/* Stay Connected */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            Follow along for daily tips and real transformation stories:
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com/adriano.nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              @adriano.nutrition
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
