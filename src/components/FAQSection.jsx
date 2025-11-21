import React, { useState } from 'react';
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
      question: "How long until I see results?",
      answer: "Most clients see visible changes in 2-4 weeks. But results vary because each person is unique. The important thing: you'll feel the difference in the first 7 days—more energy, better sleep, less food anxiety. Weight loss is a consequence. Real transformation starts before the scale changes."
    },
    {
      question: "Do I need to go to the gym or do intense workouts?",
      answer: "No. Movement is important, but you don't need to become an athlete. Walking, climbing stairs, playing with kids—it all counts. We'll find the type of movement you enjoy and that fits your routine. If you already train, great. If you don't, also great. We'll start from where you are."
    },
    {
      question: "Will I be hungry?",
      answer: "Absolutely not. Hunger isn't sustainable and doesn't work long-term. The Transform Method teaches you to eat in a way that: leaves you satisfied, provides energy, and allows results. You'll eat smarter, not less."
    },
    {
      question: "I have a very busy routine. Will it work for me?",
      answer: "Yes. In fact, the method was created exactly for people with busy routines. I won't ask you to cook 5 meals a day or spend 2 hours at the gym. We'll work with the reality you have—work, family, commitments. Simplicity is the secret. The simpler, the more sustainable."
    },
    {
      question: "Do I need to buy supplements or special products?",
      answer: "No. You don't need to buy anything beyond real food. If supplements make sense for YOUR specific case (deficiencies, specific goals), I'll guide you. But it's not mandatory and I'll never push products on you."
    },
    {
      question: "After reaching my goal, will I regain the weight?",
      answer: "Not if you follow the method. The Transform Method isn't a temporary diet. It's a change in system and identity. You won't 'finish' and go back to old habits. You'll become a different person, with different habits, who naturally maintains results. That's why it works long-term."
    },
    {
      question: "I have health conditions (diabetes, hypertension, etc.). Can I do this?",
      answer: "Yes, but with medical supervision. I work with people with various health conditions. In fact, improving nutrition usually improves these conditions. But it's essential that you maintain follow-up with your doctor and inform me about your conditions so we can customize the plan appropriately."
    },
    {
      question: "What's the difference between you and other nutritionists?",
      answer: "Three main differences: 1) I don't work with ready-made diets. Each plan is 100% personalized for you. 2) Focus on systems, not motivation. I won't give you motivational speeches. I'll give you practical tools that work even when you're not motivated. 3) I lived this. I lost 84 lbs and kept it off for 3 years. It's not theory—it's real experience applied with scientific knowledge."
    },
    {
      question: "How much does it cost?",
      answer: "The investment varies according to the chosen plan. But think about it: How much do you spend per month on: food that harms you? Clothes that don't fit anymore? Medications for problems caused by poor nutrition? Frustrated attempts with diets that don't work? Investing in real transformation costs less than continuing the cycle of trial and error. Contact me to learn about plans and choose what makes sense for you."
    },
    {
      question: "How does the follow-up work?",
      answer: "Depends on the chosen plan, but generally includes: Complete initial assessment (habits, routine, goals), Personalized plan (nutrition + environment + habits), Regular check-ins (weekly or biweekly), WhatsApp support for daily questions, Continuous adjustments based on your results. You're never alone in the process."
    },
    {
      question: "Do I need to live near you?",
      answer: "No. All follow-up can be done online—video calls, WhatsApp, email. I work with clients in different cities and countries. Distance isn't a problem."
    },
    {
      question: "I have a family. Will I have to cook separately?",
      answer: "No. One of the Transform Method rules: what works for you, works for your family. We'll create a plan you can share with your family. Healthy food doesn't have to be 'diet food'. It can (and should) be tasty for everyone."
    },
    {
      question: "I don't know how to cook. Is that a problem?",
      answer: "It's not a problem. We'll start from where you are. If you don't know how to cook, I'll teach you simple and quick recipes. If you don't have time to cook, we'll find practical alternatives. The method adapts to your skill level and availability."
    },
    {
      question: "Can I still go out with friends and eat out?",
      answer: "Yes! Social life is important. I'll teach you to make smart choices in restaurants, bars, parties—without seeming like 'that annoying diet person'. Transformation doesn't mean social isolation. It means learning to navigate social situations intelligently."
    },
    {
      question: "Will I have to give up my favorite foods?",
      answer: "No. Prohibition creates compulsion. We'll find ways to include your favorite foods in a way that doesn't sabotage your results. Flexibility is part of the method. If you love chocolate, I won't forbid you from eating chocolate. I'll teach you to eat chocolate consciously and in a controlled way."
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
