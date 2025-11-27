import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { CheckCircle2, Clock, Users, ArrowRight } from 'lucide-react'

function BlackFridayOffer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
              BLACK FRIDAY EXCLUSIVE OFFER
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            The 100-Day Transformation Challenge
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Join me on my hardest transformation journey yet. Only 6 spots available.
          </p>
        </div>

        {/* Urgency Bar */}
        <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Limited Time Offer</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Offer ends December 3rd, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-red-600" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Only 6 Spots Available</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">2 per plan (Quarterly, Semi-Annual, Annual)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Section */}
        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-0">
            {/* Placeholder for Vimeo Video */}
            <div className="relative bg-slate-900 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-white text-lg mb-4">
                  📹 Your Vimeo video will be embedded here
                </p>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  After uploading your video to Vimeo, replace this section with the embed code from Vimeo's "Share" button.
                </p>
                <div className="mt-6 p-4 bg-slate-800 rounded-lg text-left max-w-xl mx-auto">
                  <p className="text-xs text-slate-300 font-mono mb-2">Example embed code:</p>
                  <code className="text-xs text-green-400">
                    &lt;iframe src="https://player.vimeo.com/video/YOUR_VIDEO_ID" ...&gt;&lt;/iframe&gt;
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What You Get Section */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What You Get in This 100-Day Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">My Complete Playbook</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Daily meals, training logs, and real-time updates</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Exclusive Study Materials</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">What I'm learning about nutrition & behavior change</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Therapy Insights</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Mental health strategies (because it's essential)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Group Q&A Lives</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Weekly sessions to share, motivate, and connect</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Private 1-on-1 Check-ins</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Individual adjustments tailored to your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">Athlete's Perspective</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">See how someone who started obese trains today</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Black Friday Bonus Section */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-900 dark:text-green-100">
              🎁 Black Friday Exclusive Bonuses
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-slate-900 dark:text-white font-medium">
                  <strong>+50% More Time</strong> on your chosen plan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-slate-900 dark:text-white font-medium">
                  <strong>Massive Discount</strong> on renewal after the 100 days
                </p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="text-slate-900 dark:text-white font-medium">
                  <strong>Lifetime Access</strong> to all new resources added during the program
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-6">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="text-blue-50 text-lg mb-6 max-w-2xl mx-auto">
                Only 6 spots available. 2 per plan. This offer ends December 3rd, 2024.
              </p>
              <Link to="/plans">
                <Button size="lg" variant="secondary" className="text-xl px-12 py-6 h-auto">
                  Choose Your Plan & Secure Your Spot <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <p className="text-blue-100 text-sm mt-4">
                30-day money-back guarantee • Zero risk
              </p>
            </CardContent>
          </Card>

          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Questions? <a href="mailto:contact@transformmethod.com" className="text-blue-600 hover:underline">Email me</a> or DM me on Instagram
          </p>
        </div>

      </div>
    </div>
  )
}

export default BlackFridayOffer
