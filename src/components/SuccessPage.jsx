import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';

const SuccessPage = () => {
  const [plan, setPlan] = useState('');

  useEffect(() => {
    // Get plan from URL parameter
    const params = new URLSearchParams(window.location.search);
    const planParam = params.get('plan');
    if (planParam) {
      setPlan(planParam.charAt(0).toUpperCase() + planParam.slice(1));
    }
  }, []);

  const getPlanDetails = () => {
    switch(plan.toLowerCase()) {
      case 'foundation':
        return {
          meetings: '3 monthly check-ins',
          ebooks: '3 Premium eBooks',
          support: 'Email support'
        };
      case 'transform':
        return {
          meetings: '6-7 bi-weekly sessions',
          ebooks: '5 Premium eBooks + Training Plan',
          support: 'WhatsApp, Email & Phone support'
        };
      case 'mastery':
        return {
          meetings: '14+ weekly 1:1 sessions',
          ebooks: 'Complete library (7 eBooks)',
          support: 'Priority support + VIP community'
        };
      default:
        return {
          meetings: 'Regular check-ins',
          ebooks: 'Premium eBooks',
          support: 'Full support'
        };
    }
  };

  const details = getPlanDetails();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎉 Payment Successful!
          </h1>
          
          {plan && (
            <p className="text-xl text-gray-700 mb-2">
              Welcome to the <span className="font-bold text-green-600">{plan} Plan</span>
            </p>
          )}
          
          <p className="text-lg text-gray-600">
            Your transformation journey starts now!
          </p>
        </div>

        {/* Next Steps */}
        <Card className="shadow-xl mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📋 Your Next Steps
            </h2>
            
            <div className="space-y-6">
              {/* Step 1: Schedule Call */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    Schedule Your First 1:1 Consultation
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Book your initial video call to discuss your goals, routine, and create your personalized action plan.
                  </p>
                  <a
                    href="https://calendly.com/adriano-nutrition/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-md transition-all shadow-lg"
                  >
                    Schedule Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Step 2: Check Email */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-gray-600" />
                    Check Your Email
                  </h3>
                  <p className="text-gray-700">
                    You'll receive your payment receipt and welcome email with:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>• Download links for your eBooks</li>
                    <li>• Access to training materials</li>
                    <li>• Community invitation</li>
                    <li>• Getting started guide</li>
                  </ul>
                </div>
              </div>

              {/* Step 3: Join Community */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-600" />
                    Join Our Community
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Connect with other members on their transformation journey. Share wins, ask questions, and stay motivated!
                  </p>
                  <p className="text-sm text-gray-600">
                    Community link will be sent to your email
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan Details */}
        <Card className="shadow-lg mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              What's Included in Your Plan
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 mb-1">{details.meetings}</div>
                <p className="text-sm text-gray-600">Coaching Sessions</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">{details.ebooks}</div>
                <p className="text-sm text-gray-600">Resources</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600 mb-1">{details.support}</div>
                <p className="text-sm text-gray-600">Support Level</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Questions? I'm Here to Help!
          </h3>
          <p className="mb-6">
            Don't hesitate to reach out if you need anything
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/553299871422" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition-all"
            >
              WhatsApp: +55 32 99871422
            </a>
            <a 
              href="https://instagram.com/adriano.nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-gray-100 transition-all"
            >
              @adriano.nutrition
            </a>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-8">
          <p className="text-gray-600 italic">
            "Your transformation starts with a decision. You just made it. Now let's make it happen together."
          </p>
          <p className="text-gray-800 font-semibold mt-2">
            - Adriano Monteiro
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
