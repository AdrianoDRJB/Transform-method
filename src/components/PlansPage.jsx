import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

const PlansPage = () => {
  const plans = [
    {
      id: 'quarterly',
      name: 'TRANSFORM START',
      tagline: '3 Months + 1 FREE',
      price: '$499',
      originalPrice: null,
      duration: '4 months total',
      monthlyEquivalent: '$166/month',
      description: 'Complete access to the 100-Day Challenge with all core benefits',
      features: [
        'Full access to my 100-day transformation journey',
        'My daily meals & training logs (exclusive)',
        'What I\'m studying: nutrition & behavior change',
        'My therapy insights & mental health strategies',
        'Group Q&A live sessions (weekly)',
        'Private 1-on-1 check-ins for adjustments',
        'Personalized nutrition & training plan',
        'Multi-channel support (WhatsApp, Email)',
        '🎁 BLACK FRIDAY: +1 MONTH FREE (4 months total)',
        '30-day money-back guarantee'
      ],
      stripeLink: 'https://buy.stripe.com/6oU14m37pcnl9hZ3131Jm0l',
      badge: null,
      color: 'from-green-600 to-emerald-700',
      hoverColor: 'hover:from-green-700 hover:to-emerald-800'
    },
    {
      id: 'semiannual',
      name: 'TRANSFORM EVOLVE',
      tagline: '6 Months + 3 FREE',
      price: '$899',
      originalPrice: '$999',
      duration: '9 months total',
      monthlyEquivalent: '$149/month',
      description: 'Extended transformation with massive time bonus and 10% discount',
      features: [
        'Everything in TRANSFORM START, PLUS:',
        '🔥 10% DISCOUNT ($999 → $899)',
        '🎁 +3 MONTHS FREE (9 months total)',
        'Extended 1-on-1 support through 9 months',
        'Priority access to new content & resources',
        'Quarterly progress reviews & strategy sessions',
        'Advanced habit-building frameworks',
        'Lifetime access to all resources added during your program',
        'Massive discount on renewal',
        '30-day money-back guarantee'
      ],
      stripeLink: 'https://buy.stripe.com/3cI8wO8rJ731fGnfNP1Jm0m',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-orange-500',
      color: 'from-blue-600 to-indigo-700',
      hoverColor: 'hover:from-blue-700 hover:to-indigo-800'
    },
    {
      id: 'annual',
      name: 'TRANSFORM ELITE',
      tagline: '12 Months + 6 LIFETIME',
      price: '$1,599',
      originalPrice: '$1,999',
      duration: '12 months + lifetime benefits',
      monthlyEquivalent: '$133/month',
      description: 'Ultimate transformation with lifetime benefits as a founding member',
      features: [
        'Everything in TRANSFORM EVOLVE, PLUS:',
        '🔥 20% DISCOUNT ($1,999 → $1,599)',
        '🎁 +6 MONTHS OF LIFETIME BENEFITS',
        '👑 Founding Member Status',
        'Lifetime access to ALL future content, eBooks, courses',
        'Lifetime access to any new challenges I create',
        'Exclusive monthly 1-on-1 call (lifetime)',
        'First access to new programs & beta features',
        'VIP priority support across all channels',
        'My personal gratitude for your trust 🙏',
        '30-day money-back guarantee'
      ],
      stripeLink: 'https://buy.stripe.com/5kQ9ASfUbgDBdyf3131Jm0k',
      badge: 'BEST VALUE',
      badgeColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
      color: 'from-purple-600 to-pink-700',
      hoverColor: 'hover:from-purple-700 hover:to-pink-800'
    }
  ];

  const PlanCard = ({ plan }) => {
    const isPopular = plan.badge === 'MOST POPULAR';
    const isBestValue = plan.badge === 'BEST VALUE';
    
    return (
      <div className={`relative ${isPopular || isBestValue ? 'lg:-mt-4 lg:mb-4' : ''}`}>
        {plan.badge && (
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg flex items-center gap-1`}>
            {plan.badge === 'MOST POPULAR' && <Star className="w-4 h-4" />}
            {plan.badge === 'BEST VALUE' && <Crown className="w-4 h-4" />}
            {plan.badge}
          </div>
        )}
        
        <Card className={`h-full ${isPopular || isBestValue ? 'border-2 border-orange-500 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all`}>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {plan.name}
            </CardTitle>
            <p className="text-gray-600 text-sm mb-4 font-semibold">{plan.tagline}</p>
            <div className="mb-2">
              {plan.originalPrice && (
                <div className="text-2xl text-gray-400 line-through mb-1">
                  {plan.originalPrice}
                </div>
              )}
              <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
              <div className="text-sm text-gray-600 mt-2">
                {plan.monthlyEquivalent} • {plan.duration}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {plan.description}
            </p>
          </CardHeader>
          
          <CardContent className="pt-0">
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a
              href={plan.stripeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r ${plan.color} ${plan.hoverColor} transition-all shadow-lg`}
            >
              Choose {plan.name}
            </a>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              Only 2 spots per plan • Offer ends Dec 3rd, 2024
            </p>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Black Friday Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-6 mb-12 text-center shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-2xl font-bold">BLACK FRIDAY EXCLUSIVE</h2>
            <Sparkles className="w-6 h-6" />
          </div>
          <p className="text-lg">
            Join the 100-Day Transformation Challenge • Only 6 Spots Available (2 per plan)
          </p>
          <p className="text-sm mt-2 opacity-90">
            Offer ends December 3rd, 2024
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Transformation Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            All plans include full access to my 100-day transformation journey, personalized coaching, and a 30-day money-back guarantee.
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            🎯 Join me as I drop 22 lbs (10kg) for a competition while you build your own transformation
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">30 Days</div>
              <p className="text-gray-700">Money-Back Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">6 Spots</div>
              <p className="text-gray-700">2 Per Plan • Limited Availability</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100 Days</div>
              <p className="text-gray-700">Live Transformation Journey</p>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What You Get in the 100-Day Challenge
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">My Complete Playbook</p>
                <p className="text-sm text-gray-600">Daily meals, training logs, real-time updates</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Exclusive Study Materials</p>
                <p className="text-sm text-gray-600">What I'm learning about nutrition & behavior</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Therapy Insights</p>
                <p className="text-sm text-gray-600">Mental health strategies (ADHD, motivation, etc.)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Group Q&A Lives</p>
                <p className="text-sm text-gray-600">Weekly sessions to share, motivate, connect</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Private 1-on-1 Check-ins</p>
                <p className="text-sm text-gray-600">Individual adjustments tailored to you</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Athlete's Perspective</p>
                <p className="text-sm text-gray-600">See how someone who started obese trains today</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What happens after I purchase?
              </h3>
              <p className="text-gray-700">
                You'll receive a confirmation email with instructions to schedule your first 1-on-1 consultation. 
                You'll also get immediate access to the private community and resources.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                When does the 100-Day Challenge start?
              </h3>
              <p className="text-gray-700">
                The challenge officially starts on December 10th, 2024. If you join before then, you'll get early access to preparation materials and community.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-700">
                Yes! You can upgrade at any time during the first 30 days, and we'll credit what you've already paid toward the higher tier.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I'm not satisfied?
              </h3>
              <p className="text-gray-700">
                All plans include a 30-day money-back guarantee. If you're not satisfied, request a full refund—no questions asked.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why only 6 spots?
              </h3>
              <p className="text-gray-700">
                I'm closing my coaching to all new clients for the next 100 days. My entire focus will be on my own transformation challenge and these 6 individuals. This is about quality, not quantity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/553299871422" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              Message on WhatsApp
            </a>
            <a 
              href="https://instagram.com/adriano.nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;
