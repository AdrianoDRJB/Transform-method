import React from 'react';
import { Check, Zap, Star, Crown, Clock, Calendar, ArrowRight, Shield, Users, CreditCard } from 'lucide-react';

const PlansPage = () => {
  // TODO(Adriano): replace these placeholder links with the new Stripe Payment Links
  // for each plan once they're created. Do not reuse the old Quick Fix link — the
  // price changed from $219 to $259.
  const STRIPE_LINKS = {
    quickFix: '#',
    start: '#',
    evolve: '#',
    elite: '#',
  };

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">
            Choose Your <span className="text-[#49c274]">Transformation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every plan is personalized to your goals, lifestyle, and body.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-[#12201a] border border-[#2e9e4f]/30 rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Calendar className="w-8 h-8 text-[#49c274] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">How It Works</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every plan includes a <span className="text-[#49c274] font-semibold">live 60-minute assessment call</span> — 
                we'll go over your goals, your current situation, and build your personalized macro & calorie plan together. 
                From there, pick the level of ongoing support that fits you.
              </p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div id="plans" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {/* Plan 1: Quick Fix - Direct Purchase */}
          <div className="relative border border-gray-700 rounded-2xl p-6 bg-[#12201a] flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Single Session</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Quick Fix</h2>
              <p className="text-muted-foreground text-sm">A live 60-minute assessment session with a personalized macro & calorie plan — yours to keep as a PDF. No ongoing follow-up.</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-white">$259</div>
              <div className="text-muted-foreground text-sm mt-1">one-time payment</div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Live assessment call (60 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Personalized macro & calorie plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">Take-home PDF</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">No ongoing follow-up</span>
              </li>
            </ul>

            <a
              href={STRIPE_LINKS.quickFix}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              Buy Now — $259
            </a>
          </div>

          {/* Plan 2: TRANSFORM START $559/3mo */}
          <div className="relative border border-[#2e9e4f]/50 rounded-2xl p-6 bg-[#12201a] flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#49c274]" />
                <span className="text-sm text-[#49c274] uppercase tracking-wider font-semibold">3 Months</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TRANSFORM START</h2>
              <p className="text-muted-foreground text-sm">Full quarterly coaching — regular check-ins, WhatsApp support, and real accountability.</p>
            </div>

            <div className="mb-6">
              <div className="text-4xl font-bold text-[#49c274]">$559<span className="text-lg text-muted-foreground font-normal">/3mo</span></div>
              <div className="text-muted-foreground text-sm mt-1">~$186/month · billed once, upfront</div>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Live assessment call (60 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Personalized macro & calorie plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Bi-weekly check-in (video or message)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">WhatsApp access between check-ins</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Macro adjustments as you progress</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Private Discord community access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">TRANSFORM Method habit & mindset resources</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Training plan available as an add-on (arranged separately)</span>
              </li>
            </ul>

            <a
              href={STRIPE_LINKS.start}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-[#2e9e4f] text-[#06140b] font-bold hover:bg-[#3fae67] transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              Get Started — $559
            </a>
          </div>

          {/* Plan 3: TRANSFORM EVOLVE $1,159/6mo - MOST POPULAR */}
          <div className="relative border-2 border-[#2e9e4f] rounded-2xl p-6 bg-[#12201a] flex flex-col shadow-2xl shadow-[#2e9e4f]/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2e9e4f] text-[#06140b] px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Star className="w-4 h-4" /> MOST POPULAR
            </div>

            <div className="mb-6 mt-2">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-[#49c274]" />
                <span className="text-sm text-[#49c274] uppercase tracking-wider font-semibold">6 Months</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TRANSFORM EVOLVE</h2>
              <p className="text-muted-foreground text-sm">Six months of full transformation. Where real, lasting change happens.</p>
            </div>

            <div className="mb-2">
              <div className="text-4xl font-bold text-[#49c274]">$1,159<span className="text-lg text-muted-foreground font-normal">/6mo</span></div>
              <div className="text-muted-foreground text-sm mt-1">~$193/month · billed once, upfront</div>
            </div>
            <div className="bg-[#2e9e4f]/10 border border-[#2e9e4f]/30 rounded-lg px-3 py-2 mb-6">
              <span className="text-[#49c274] text-sm font-bold">Best value</span>
              <span className="text-muted-foreground text-sm"> — or +3 months at full price</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Live assessment call (60 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Personalized macro & calorie plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">3 video calls per month</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Unlimited messaging</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Private Discord community access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Monthly progress review</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Full TRANSFORM Method framework access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#49c274] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Training plan included</span>
              </li>
            </ul>

            <a
              href={STRIPE_LINKS.evolve}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-[#2e9e4f] text-[#06140b] font-bold hover:bg-[#3fae67] transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              Get Started — $1,159
            </a>
          </div>

          {/* Plan 4: TRANSFORM ELITE $2,219/yr */}
          <div className="relative border border-red-500/50 rounded-2xl p-6 bg-[#12201a] flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-5 h-5 text-red-400" />
                <span className="text-sm text-red-400 uppercase tracking-wider font-semibold">12 Months</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">TRANSFORM ELITE</h2>
              <p className="text-muted-foreground text-sm">A full year. Maximum results — for those who are serious.</p>
            </div>

            <div className="mb-2">
              <div className="text-4xl font-bold text-red-400">$2,219<span className="text-lg text-muted-foreground font-normal">/yr</span></div>
              <div className="text-muted-foreground text-sm mt-1">~$185/month · billed once, upfront</div>
            </div>
            <div className="bg-red-400/10 border border-red-400/30 rounded-lg px-3 py-2 mb-6">
              <span className="text-red-400 text-sm font-bold">Best value</span>
              <span className="text-muted-foreground text-sm"> — or +6 months at full price</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Live assessment call (60 min)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Personalized macro & calorie plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Weekly video call (1x per week)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Priority message response</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Private Discord community access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Monthly progress review</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Full TRANSFORM Method framework access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Training plan included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">All bonus guides included (nutrition, ADHD & emotional intelligence, sleep & recovery)</span>
              </li>
            </ul>

            <a
              href={STRIPE_LINKS.elite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 px-6 rounded-xl bg-red-500 text-white font-bold hover:bg-red-400 transition-all flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              Get Started — $2,219
            </a>
          </div>

        </div>

        {/* Anchoring callout */}
        <div className="bg-[#12201a] border border-[#2e9e4f]/30 rounded-2xl p-8 mb-12 text-center">
          <p className="text-muted-foreground text-lg">
            A single session costs <span className="text-white font-bold">$259</span>.
            For just <span className="text-[#49c274] font-bold">$559</span> you get <span className="text-white font-bold">3 full months</span> of coaching.
            The math is obvious.
          </p>
        </div>

        {/* Social Proof Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Real People. Real Results.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Adriano's Story */}
            <div className="bg-[#12201a] rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/transformations/adriano-transformation.jpg" 
                  alt="Adriano's transformation" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">Adriano (The Creator)</h3>
                  <p className="text-[#49c274] text-sm">Lost 84 lbs · 3 years sober · National CrossFit competitor</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "Eight years ago, I was 30 years old, hungover, and couldn't catch my breath tying my shoes. 
                Today, I'm sober, a consistent athlete, and competing at a national level. This method saved my life."
              </p>
            </div>

            {/* Paula's Story */}
            <div className="bg-[#12201a] rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/paula-rosto.jpg" 
                  alt="Paula's transformation" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-white">Paula, 38</h3>
                  <p className="text-[#49c274] text-sm">Mom of 2 · Esthetician · Entrepreneur</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "I stopped waiting for the perfect moment. I just started. Now I do CrossFit and strength training 
                consistently. Not because I have more time — because I finally understood how it works."
              </p>
            </div>
          </div>
        </div>

        {/* Trust section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          <div className="bg-[#12201a] rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <Shield className="w-8 h-8 text-[#49c274]" />
            </div>
            <div className="text-2xl font-bold text-[#49c274] mb-2">Secure Checkout</div>
            <p className="text-muted-foreground text-sm">Pay safely through Stripe — trusted, encrypted checkout</p>
          </div>
          <div className="bg-[#12201a] rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-[#49c274]" />
            </div>
            <div className="text-2xl font-bold text-[#49c274] mb-2">100% Personalized</div>
            <p className="text-muted-foreground text-sm">Every plan is built around your goals, body, and lifestyle</p>
          </div>
          <div className="bg-[#12201a] rounded-xl p-6">
            <div className="flex justify-center mb-3">
              <Calendar className="w-8 h-8 text-[#49c274]" />
            </div>
            <div className="text-2xl font-bold text-[#49c274] mb-2">Live Assessment Included</div>
            <p className="text-muted-foreground text-sm">Every plan starts with a 60-minute live session</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Questions?</h2>
          <div className="space-y-4">
            <div className="bg-[#12201a] rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What happens after I purchase?</h3>
              <p className="text-muted-foreground text-sm">You'll get an email to schedule your live 60-minute assessment call. From there, we build your personalized macro & calorie plan together and get started on your plan right away.</p>
            </div>
            <div className="bg-[#12201a] rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">How does billing work?</h3>
              <p className="text-muted-foreground text-sm">Plans are billed as a single upfront payment for the full term — 3, 6, or 12 months — not a recurring monthly subscription.</p>
            </div>
            <div className="bg-[#12201a] rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What's the difference between the plans?</h3>
              <p className="text-muted-foreground text-sm">The longer the plan, the deeper the transformation. 3 months gets you started with solid foundations. 6 months builds real, lasting habits. 12 months changes your life permanently.</p>
            </div>
            <div className="bg-[#12201a] rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">What about the Quick Fix option?</h3>
              <p className="text-muted-foreground text-sm">The Quick Fix is a single 60-minute live assessment with a personalized macro & calorie plan you keep as a PDF. It's not a coaching plan — there's no ongoing follow-up, and it's not upgradable to the full benefits of the longer plans.</p>
            </div>
            <div className="bg-[#12201a] rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">Can I upgrade later?</h3>
              <p className="text-muted-foreground text-sm">Yes. Start with 3 months and upgrade anytime. Most clients who start with 3 months end up staying longer because they see real results.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Transformation?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Pick the plan that fits you above and get started today.
          </p>
          <a
            href="#plans"
            className="inline-flex items-center gap-2 bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
            Choose Your Plan
          </a>
        </div>

      </div>
    </div>
  );
};

export default PlansPage;
