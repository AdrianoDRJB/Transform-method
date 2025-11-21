import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Check, Star, Crown } from 'lucide-react';

const PlansPage = () => {
  const plans = [
    {
      id: 'foundation',
      name: 'Foundation',
      tagline: 'Start Your Journey',
      price: '$199',
      duration: '100 days',
      description: 'Basic self-guided transformation - best for highly self-motivated individuals',
      features: [
        'Initial 1:1 video consultation (60 min)',
        'Personalized action plan',
        'Single follow-up check-in on day 45',
        '3 Premium eBooks: Transform Method, Nutrition Myths, Sleep Guide',
        'Macro calculator access',
        '30-day money-back guarantee',
        '❌ No bi-weekly meetings',
        '❌ No training plan',
        '❌ No multi-channel support'
      ],
      stripeLink: 'https://buy.stripe.com/5kQ9ASfUbgDBdyf3131Jm0k',
      badge: null,
      color: 'from-green-600 to-green-700',
      hoverColor: 'hover:from-green-700 hover:to-green-800'
    },
    {
      id: 'transform',
      name: 'Transform',
      tagline: 'Complete Transformation',
      price: '$499',
      duration: '130 days',
      description: 'The complete package with intensive support and premium resources',
      features: [
        'Everything in Foundation Plan, PLUS:',
        'Bi-weekly coaching sessions (6-7 meetings total)',
        '5 Premium eBooks (choose 2 additional)',
        'Foundational training plan (by certified coach)',
        'Multi-channel support: WhatsApp, Email, Phone',
        '+1 MONTH FREE (130 days total)',
        'BONUS: Chef-created recipes & cooking tips'
      ],
      stripeLink: 'https://buy.stripe.com/6oU14m37pcnl9hZ3131Jm0l',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-orange-500',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      id: 'mastery',
      name: 'Mastery',
      tagline: 'Elite 1:1 Experience',
      price: '$999',
      duration: '168 days',
      description: 'Ultimate transformation with weekly 1:1 coaching and complete library',
      features: [
        'Everything in Transform Plan, PLUS:',
        'Weekly 1:1 coaching sessions (14+ meetings)',
        'Complete eBook library (all 7 eBooks)',
        'Real 1:1 personalized attention throughout',
        'Priority support across all channels',
        'Advanced progress tracking',
        '🔥 BLACK FRIDAY: Pay 12 weeks, get 24 weeks!',
        'BONUS: Exclusive recipes & meal prep strategies'
      ],
      stripeLink: 'https://buy.stripe.com/3cI8wO8rJ731fGnfNP1Jm0m',
      badge: 'PREMIUM',
      badgeColor: 'bg-purple-600',
      color: 'from-purple-600 to-purple-700',
      hoverColor: 'hover:from-purple-700 hover:to-purple-800'
    }
  ];

  const PlanCard = ({ plan }) => {
    const isPopular = plan.badge === 'MOST POPULAR';
    
    return (
      <div className={`relative ${isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
        {plan.badge && (
          <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg flex items-center gap-1`}>
            {plan.badge === 'MOST POPULAR' && <Star className="w-4 h-4" />}
            {plan.badge === 'PREMIUM' && <Crown className="w-4 h-4" />}
            {plan.badge}
          </div>
        )}
        
        <Card className={`h-full ${isPopular ? 'border-2 border-orange-500 shadow-2xl' : 'shadow-lg'} hover:shadow-xl transition-all`}>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {plan.name}
            </CardTitle>
            <p className="text-gray-600 text-sm mb-4">{plan.tagline}</p>
            <div className="mb-4">
              <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-600 ml-2">/ {plan.duration}</span>
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
              Limited to first 10 clients - Founding Member pricing!
            </p>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Transformation Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            All plans include personalized nutrition coaching, science-based methods, and a 30-day money-back guarantee.
          </p>
          <p className="text-lg text-gray-700 font-semibold">
            🎯 Goal: Lose 22 lbs (10kg) in 100 days through sustainable habits
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
              <div className="text-4xl font-bold text-blue-600 mb-2">10 Spots</div>
              <p className="text-gray-700">Founding Member Pricing</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-gray-700">Science-Based Methods</p>
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
                You'll receive a confirmation email and be redirected to schedule your first 1:1 consultation. 
                You'll also get immediate access to your eBooks and community.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-700">
                Yes! You can upgrade at any time and we'll credit what you've already paid toward the higher tier.
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
