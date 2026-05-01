import React from 'react';
import { Check, Zap, Star, Crown, Clock, Calendar, ArrowRight, Shield, Users } from 'lucide-react';

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Choose Your <span className="text-yellow-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every plan is personalized to your goals, lifestyle, and body. 
            That's why we start with a conversation — not a checkout.
          </p>
        </div>

        {/* Consultative Explanation */}
        <div className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Calendar className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">How It Works</h3>
              <p className="text-gray-400 leading-relaxed">
                Transformation coaching is not one-size-fits-all. Before we start working together, 
                I want to understand your goals, your current situation, and what's been holding you back. 
                That's why every coaching plan starts with a <span className="text-yellow-400 font-semibold">free strategy call</span> — 
                a 15-minute conversation where we figure out if this is the right fit for you. No pressure, no commitment.
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Plan 1: Quick Fix - Direct Purchase */}
          <div className="relative border border-gray-700 rounded-2xl p-6 bg-gray-900 flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Single Session</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Quick Fix</h2>
              <p className="text-gray-400 text-sm">One 15–20 min adjustment session. Perfect for a specific question or quick nutrition check.</p>
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
              className="w-full text-center py-3 px-6 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition-all block"
            >
              Book Session — $219
            </a>
          </div>

          {/* Plan 2: TRANSFORM START $499 - Book a Call */}
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
              href="https://calendly.com/adriano-nutrition/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book a Strategy Call
            </a>
          </div>

          {/* Plan 3: TRANSFORM EVOLVE $999 - MOST POPULAR */}
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
              href="https://calendly.com/adriano-nutrition/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book a Strategy Call
            </a>
          </div>

          {/* Plan 4: TRANSFORM ELITE $1999 */}
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
              href="https://calendly.com/adriano-nutrition/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-red-500 text-white font-bold hover:bg-red-400 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Apply Now — Book a Call
            </a>
          </div>

        </div>

        {/* Anchoring callout */}
        <div className="bg-gray-900 border border-yellow-400/30 rounded-2xl p-8 mb-12 text-center">
          <p className="text-gray-400 text-lg">
            A single 15-min consultation costs <span className="text-white font-bold">$219</span>. 
            For just <span className="text-yellow-400 font-bold">$499</span> you get <span className="text-white font-bold">3 full months</span> of coaching — 
            with a <span className="text-yellow-400 font-bold">30-day free trial</span>. 
            The math is obvious.
          </p>
        </div>

        {/* Social Proof Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Real People. Real Results.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Adriano's Story */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/transformations/adriano-transformation.jpg" 
                  alt="Adriano's transformation" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">Adriano (The Creator)</h3>
                  <p className="text-yellow-400 text-sm">Lost 84 lbs · 3 years sober · National CrossFit competitor</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                "Eight years ago, I was 30 years old, hungover, and couldn't catch my breath tying my shoes. 
                Today, I'm sober, a consistent athlete, and competing at a national level. This method saved my life."
              </p>
            </div>

            {/* Paula's Story */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/paula-rosto.jpg" 
                  alt="Paula's transformation" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">Paula, 38</h3>
                  <p className="text-yellow-400 text-sm">Mom of 2 · Esthetician · Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                "I stopped waiting for the perfect moment. I just started. Now I do CrossFit and strength training 
                consistently. Not because I have more time — because I finally understood how it works."
              </p>
            </div>
          </div>
        </div>

        {/* Trust section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">30-Day Trial</div>
            <p className="text-gray-400 text-sm">Start free — cancel anytime before day 30 and pay nothing</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">100% Personalized</div>
            <p className="text-gray-400 text-sm">Every plan is built around your goals, body, and lifestyle</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <Calendar className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">Free Strategy Call</div>
            <p className="text-gray-400 text-sm">15 minutes to see if we're the right fit — no obligation</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Questions?</h2>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Why do I need to book a call first?</h3>
              <p className="text-gray-400 text-sm">Because real transformation requires a personalized approach. During our 15-minute strategy call, I'll understand your goals, current situation, and challenges. This way, I can tell you honestly if my coaching is the right fit — and which plan makes the most sense for you.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">How does the 30-day free trial work?</h3>
              <p className="text-gray-400 text-sm">After our call, if we decide to work together, you start immediately. I begin working with you from day one. If you cancel before day 30, you pay nothing. After day 30, your subscription begins automatically.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What's the difference between the plans?</h3>
              <p className="text-gray-400 text-sm">The longer the plan, the deeper the transformation. 3 months gets you started with solid foundations. 6 months builds real, lasting habits. 12 months changes your life permanently. We'll discuss which one is right for you during the call.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What about the Quick Fix option?</h3>
              <p className="text-gray-400 text-sm">The Quick Fix is a single 15–20 minute session for people who have a specific question or need a quick nutrition adjustment. It's not a coaching plan — it's a one-time consultation. You can purchase it directly without a strategy call.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Can I upgrade later?</h3>
              <p className="text-gray-400 text-sm">Yes. Start with 3 months and upgrade anytime. Most clients who start with 3 months end up staying longer because they see real results.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free 15-minute strategy call. No pressure, no commitment — just an honest conversation about your goals.
          </p>
          <a
            href="https://calendly.com/adriano-nutrition/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            Book Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default PlansPage;
