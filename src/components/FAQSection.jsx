import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is this method for me?",
      answer: "This method is for everyone. In nutrition, there's no 'one size fits all'. Wake up without hunger? Don't force yourself to eat breakfast. Love carbs? Why cut bread if you're not celiac? Like milk? Why eliminate it if you're not intolerant? The Transform Method adapts to YOUR life, not the other way around. We build a plan that works for you, with foods you enjoy, in the routine you have."
    },
    {
      question: "I've tried everything and failed. Why would this work?",
      answer: "The three success examples above are 3 people with completely different routines, completely different tastes, different sports. It will work because YOU create the method with me. I don't give you a ready-made diet. I give you the knowledge and support to build a system that works for YOUR reality. You didn't fail before. The method they offered you just wasn't right for you."
    },
    {
      question: "I'm over 30 and heard it gets harder with age. True?",
      answer: "Again, look at the 3 examples above: 2 clients and me (the method's creator) all started over 30 years old. Actually, from 30 to 35, I went through several ups and downs, learning so you can apply it without difficulty. Age isn't an obstacle. It's experience. You know your body better now than at 20. That's an advantage, not a disadvantage."
    },
    {
      question: "What if I start and don't like it?",
      answer: "The process is risk-free. You have my full support for 30 days, and if you don't like it, request your money back—no questions, no obstacles. That's how confident I am in what I'm doing."
    },
    {
      question: "Do I need to go to the gym or do intense workouts?",
      answer: "No. Movement is important, but you don't need to become an athlete. Walking, climbing stairs, playing with kids—it all counts. We'll find the type of movement you enjoy and that fits your routine. If you already train, great. If you don't, also great. We'll start from where you are."
    },
    {
      question: "Do I need to live near you?",
      answer: "No. All follow-up can be done online—video calls, WhatsApp, email. I work with clients in different cities and countries. Distance isn't a problem."
    },
    {
      question: "I don't know how to cook. Is that a problem?",
      answer: "It's not a problem at all. Actually, before becoming a nutritionist, I was a professional chef. As a bonus, you'll receive cooking tips and recipes that are simple, quick, and delicious. We'll start from where you are. If you don't have time to cook, we'll find practical alternatives. The method adapts to your skill level and availability."
    },
    {
      question: "Can I still go out with friends and eat out?",
      answer: "Yes! Social life is important. I'll teach you to make smart choices in restaurants, bars, parties—without seeming like 'that annoying diet person'. Transformation doesn't mean social isolation. It means learning to navigate social situations intelligently."
    },
    {
      question: "Will I have to give up my favorite foods?",
      answer: "No. Prohibition creates compulsion. We'll find ways to include your favorite foods in a way that doesn't sabotage your results. Flexibility is part of the method. If you love chocolate, I won't forbid you from eating chocolate. I'll teach you to eat chocolate consciously and in a controlled way. Plus, with my chef background, I can show you how to make healthier versions of your favorite dishes that are just as delicious."
    },
    {
      question: "How do I know if I'm ready to start?",
      answer: "You're ready when: You're tired of trying and failing, You want a real solution, not another temporary diet, You're willing to invest in yourself, You understand that transformation takes time and consistency. If you've read this far, you're already ready. The next step is simple: click the button below and let's talk."
    }
  ];

  const FAQItem = ({ faq, index }) => {
    const isOpen = openIndex === index;
    
    return (
      <div className="border-b border-gray-200 last:border-0">
        <button
          onClick={() => toggleFAQ(index)}
          className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900 pr-8">
            {faq.question}
          </h3>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
          )}
        </button>
        
        {isOpen && (
          <div className="px-6 pb-5">
            <p className="text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600">
            Here are answers to the most common questions
          </p>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-0">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </CardContent>
        </Card>

        {/* CTA after FAQ */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't wait for the "perfect moment". It doesn't exist. The best time to start is now. 
            In 100 days, you could be 10kg lighter, with more energy, more confidence, and a completely different life.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Or you could be exactly where you are today, wondering "what if I had started?"
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-8">
            The choice is yours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/plans"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
            >
              Choose Your Plan Now
            </Link>
            <a 
              href="https://wa.me/553299871422" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
            >
              Message on WhatsApp
            </a>
            <a 
              href="https://instagram.com/adriano.nutrition" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all"
            >
              Follow on Instagram
            </a>
          </div>
          
          <p className="mt-8 text-sm text-gray-500">
            Your transformation starts with a message. 👇
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
