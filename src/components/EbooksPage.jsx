import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Lock, Download, CheckCircle, Star } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

const EbooksPage = () => {
  const [purchasedEbooks, setPurchasedEbooks] = useState([]);

  // Load purchased ebooks from localStorage
  useEffect(() => {
    const purchased = localStorage.getItem('purchasedEbooks');
    if (purchased) {
      setPurchasedEbooks(JSON.parse(purchased));
    }
  }, []);

  const mainEbook = {
    id: 'transform-method-complete',
    title: 'The Transform Method - Complete Guide',
    description: 'The complete framework for total life transformation. Master all 9 steps of the Transform Method and learn how to integrate nutrition, habits, mindset, and environment for lasting change.',
    file: '/pdfs/Transform_Method_Complete_Guide.pdf',
    price: 19.99,
    stripeLink: 'https://buy.stripe.com/3cIfZg9vNdrpcub8ln1Jm0n',
    pages: '100+ pages',
    topics: [
      'Complete TRANSFORM Framework',
      'Nutrition Fundamentals', 
      'Habit Psychology',
      'Environment Design',
      'Mental Resilience',
      'Sustainable Systems'
    ],
    featured: true
  };

  const deepDiveEbooks = [
    {
      id: 'environment-habits-complete',
      title: 'Environment & Habits Mastery',
      description: 'Master your environment and build lasting habits through science-based strategies and practical exercises.',
      file: '/pdfs/Environment_Habits_Mastery_Complete_Guide.pdf',
      price: 5.99,
      stripeLink: 'https://buy.stripe.com/9B63cubDVbjh9hZ4571Jm0j',
      pages: '21 pages',
      topics: ['Environment Design', 'Habit Formation', 'Behavior Change', 'Practical Exercises']
    },
    {
      id: 'resilient-mind-complete',
      title: 'Building Your Resilient Mind',
      description: 'Comprehensive guide to building lasting mental strength with science-backed methods and actionable strategies.',
      file: '/pdfs/Building_Resilient_Mind_Complete_Guide.pdf',
      price: 5.99,
      stripeLink: 'https://buy.stripe.com/7sYcN4azR5YXcubdFH1Jm0i',
      pages: '34 pages',
      topics: ['Mental Resilience', 'Growth Mindset', 'Neuroscience', 'Stress Management']
    },
    {
      id: 'emotional-mastery',
      title: 'Emotional Mastery Guide',
      description: 'Master your emotions, understand your triggers, and develop emotional intelligence for lasting transformation.',
      file: '/pdfs/Emotional_Mastery_Guide.pdf',
      price: 5.99,
      stripeLink: 'https://buy.stripe.com/28E5kCbDV5YX9hZ6df1Jm0h',
      pages: '52 pages',
      topics: ['Emotional Intelligence', 'Self-Awareness', 'Emotional Regulation', 'Trigger Management']
    }
  ];

  const handlePurchase = (stripeLink) => {
    // Redirect to Stripe Checkout
    window.location.href = stripeLink;
  };

  const handleDownload = (ebook) => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = ebook.file;
    link.download = `${ebook.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isPurchased = (ebookId) => purchasedEbooks.includes(ebookId);

  const EbookCard = ({ ebook, featured = false }) => {
    const purchased = isPurchased(ebook.id);
    
    return (
      <Card className={`flex flex-col hover:shadow-lg transition-shadow ${featured ? 'border-2 border-blue-500' : ''}`}>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {featured && (
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  <Star className="w-4 h-4" />
                  START HERE
                </div>
              )}
              <CardTitle className={`${featured ? 'text-3xl' : 'text-2xl'} mb-2`}>{ebook.title}</CardTitle>
              <CardDescription className="text-base">{ebook.description}</CardDescription>
            </div>
            {purchased ? (
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 ml-4" />
            ) : (
              <Lock className="w-8 h-8 text-gray-400 flex-shrink-0 ml-4" />
            )}
          </div>
        </CardHeader>
        
        <CardContent className="flex-1">
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              <strong>{ebook.pages}</strong>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm text-gray-700 mb-2">What you'll learn:</h4>
              <ul className="space-y-1">
                {ebook.topics.map((topic, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between border-t pt-6">
          <div className={`${featured ? 'text-3xl' : 'text-2xl'} font-bold text-gray-900`}>
            ${ebook.price}
          </div>
          
          {purchased ? (
            <Button 
              onClick={() => handleDownload(ebook)}
              className="bg-green-600 hover:bg-green-700"
              size={featured ? 'lg' : 'default'}
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          ) : (
            <Button 
              onClick={() => handlePurchase(ebook.stripeLink)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size={featured ? 'lg' : 'default'}
            >
              <Lock className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Transform Method eBooks</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Deep-dive guides to master specific areas of your transformation journey
            </p>
          </div>
        </div>
      </div>

      {/* Main eBook - Featured */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <EbookCard ebook={mainEbook} featured={true} />
      </div>

      {/* Deep Dive eBooks Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Deep Dive Guides</h2>
          <p className="text-lg text-gray-600">
            Specialized guides for in-depth mastery of specific topics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deepDiveEbooks.map((ebook) => (
            <EbookCard key={ebook.id} ebook={ebook} />
          ))}
        </div>
      </div>

      {/* Bundle Offer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
          <CardHeader>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
              🔥 LAUNCH SPECIAL - First 10 Clients Only!
            </div>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle className="text-amber-600" />
              Complete Bundle Offer
            </CardTitle>
            <CardDescription className="text-lg">
              Get all 4 eBooks (Complete Method + 3 Deep Dives) for just <span className="font-bold text-red-600">$24.96</span> <span className="line-through text-gray-500">$37.96</span> (Save $13!)
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              onClick={() => handlePurchase('https://buy.stripe.com/00w7sKazRfzxgKrdFH1Jm0o')}
            >
              🚀 Get Launch Special - $24.96
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">What format are the eBooks?</h3>
              <p className="text-gray-600">All eBooks are delivered as PDF files, compatible with any device.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Should I start with the Complete Method or a Deep Dive?</h3>
              <p className="text-gray-600">Start with the Complete Transform Method to understand the full framework, then deepen your knowledge with specialized Deep Dive guides on topics that interest you most.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Can I access them after purchase?</h3>
              <p className="text-gray-600">Yes! Once purchased, you can download and access your eBooks anytime from this page.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
    </div>

    {/* Contact Section */}
    <ContactSection />
    </>
  );
};

export default EbooksPage;
