import React from 'react';
import { Check, Zap, Star, Crown, Clock } from 'lucide-react';

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Choose Your <span className="text-yellow-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            All plans include a <span className="text-yellow-400 font-bold">30-day free trial</span>. Cancel anytime before it ends and pay nothing.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Plan 1: Single Consultation - ANCHOR */}
          <div className="relative border border-gray-700 rounded-2xl p-6 bg-gray-900 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Single Session</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Quick Fix</h2>
              <p className="text-gray-400 text-sm">One 15–20 min adjustment session. No ongoing support.</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-white">$219</div>
              <div className="text-gray-500 text-sm mt-1">one-time payment</div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">1 video call (15–20 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Nutrition adjustment only</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">No follow-up included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">No ongoing support</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/eVq4gy5fx0EDam34571Jm0F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition-all"
            >
              Book Session
            </a>
          </div>

          {/* Plan 2: Quarterly $499 */}
          <div className="relative border border-yellow-500/50 rounded-2xl p-6 bg-gray-900 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-yellow-400 uppercase tracking-wider font-semibold">3 Months</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TRANSFORM START</h2>
              <p className="text-gray-400 text-sm">Full coaching for 3 months. Real results, real accountability.</p>
            </div>

            <div className="mb-2">
              <div className="text-4xl font-bold text-yellow-400">$499<span className="text-lg text-gray-400 font-normal">/3mo</span></div>
              <div className="text-gray-500 text-sm mt-1">~$166/month</div>
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg px-3 py-2 mb-6">
              <span className="text-yellow-400 text-sm font-bold">30 days FREE trial</span>
              <span className="text-gray-400 text-sm"> — cancel before and pay $0</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Personalized nutrition plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Weekly 1:1 check-ins</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">WhatsApp & email support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Macro tracking guidance</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">TRANSFORM Method eBook</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/9B6eVc0Zh4UT8dV59b1Jm0v"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all"
            >
              Start Free Trial
            </a>
          </div>

          {/* Plan 3: Semiannual $999 - MOST POPULAR */}
          <div className="relative border-2 border-yellow-400 rounded-2xl p-6 bg-gray-900 flex flex-col shadow-2xl shadow-yellow-400/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Star className="w-4 h-4" /> MOST POPULAR
            </div>

            <div className="mb-6 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-yellow-400 uppercase tracking-wider font-semibold">6 Months</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TRANSFORM EVOLVE</h2>
              <p className="text-gray-400 text-sm">6 months of full transformation. Where real change happens.</p>
            </div>

            <div className="mb-2">
              <div className="text-4xl font-bold text-yellow-400">$999<span className="text-lg text-gray-400 font-normal">/6mo</span></div>
              <div className="text-gray-500 text-sm mt-1">~$166/month</div>
            </div>
            <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg px-3 py-2 mb-6">
              <span className="text-yellow-400 text-sm font-bold">30 days FREE trial</span>
              <span className="text-gray-400 text-sm"> — cancel before and pay $0</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Everything in START, plus:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Bi-weekly video calls</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Training plan included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Priority WhatsApp support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Full eBook library (5 guides)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Monthly strategy reviews</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/cNicN4dM34UTeCjatv1Jm0w"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all"
            >
              Start Free Trial
            </a>
          </div>

          {/* Plan 4: Annual $1999 */}
          <div className="relative border border-red-500/50 rounded-2xl p-6 bg-gray-900 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-red-400" />
                <span className="text-sm text-red-400 uppercase tracking-wider font-semibold">12 Months</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TRANSFORM ELITE</h2>
              <p className="text-gray-400 text-sm">Full year. Maximum results. For those who are serious.</p>
            </div>

            <div className="mb-2">
              <div className="text-4xl font-bold text-red-400">$1,999<span className="text-lg text-gray-400 font-normal">/yr</span></div>
              <div className="text-gray-500 text-sm mt-1">~$166/month</div>
            </div>
            <div className="bg-red-400/10 border border-red-400/30 rounded-lg px-3 py-2 mb-6">
              <span className="text-red-400 text-sm font-bold">30 days FREE trial</span>
              <span className="text-gray-400 text-sm"> — cancel before and pay $0</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Everything in EVOLVE, plus:</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Weekly 1:1 video calls</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Complete eBook library (7 guides)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">VIP priority support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Founding member status</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Lifetime access to all future content</span>
              </li>
            </ul>

            <a
              href="https://buy.stripe.com/dRmdR88rJ7312TB8ln1Jm0x"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-red-500 text-white font-bold hover:bg-red-400 transition-all"
            >
              Start Free Trial
            </a>
          </div>

        </div>

        {/* Anchoring callout */}
        <div className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 mb-12 text-center">
          <p className="text-gray-400 text-lg">
            💡 A single 15-min consultation costs <span className="text-white font-bold">$219</span>. 
            For just <span className="text-yellow-400 font-bold">$499</span> you get <span className="text-white font-bold">3 full months</span> of coaching — 
            with a <span className="text-yellow-400 font-bold">30-day free trial</span>. 
            The math is obvious.
          </p>
        </div>

        {/* Trust section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">30 Days</div>
            <p className="text-gray-400">Free trial — cancel anytime</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">84 lbs</div>
            <p className="text-gray-400">Lost by my first client</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <p className="text-gray-400">Real results, real people</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Questions?</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">How does the 30-day free trial work?</h3>
              <p className="text-gray-400 text-sm">You start today, I start working with you immediately. If you cancel before day 30, you pay nothing. After day 30, your subscription begins automatically.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What's the difference between the plans?</h3>
              <p className="text-gray-400 text-sm">The longer the plan, the deeper the transformation. 3 months gets you started. 6 months builds real habits. 12 months changes your life permanently.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Can I upgrade later?</h3>
              <p className="text-gray-400 text-sm">Yes. Start with 3 months and upgrade anytime. Most clients who start with 3 months end up staying longer.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What if I have questions before buying?</h3>
              <p className="text-gray-400 text-sm">
                Book a free 15-min call:{' '}
                <a href="https://calendly.com/adriano-nutrition/new-meeting" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline">
                  calendly.com/adriano-nutrition/new-meeting
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PlansPage;
