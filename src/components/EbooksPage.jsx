import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Lock, Download, CheckCircle } from 'lucide-react';
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

  const ebooks = [
    {
      id: 'environment-habits-tips',
      title: 'Environment & Habits Mastery - Practical Tips',
      description: 'Quick, actionable strategies to design your environment and build lasting habits.',
      file: '/Environment_Habits_Mastery_Practical_Tips.pdf',
      price: 4.99,
      pages: '13 pages',
      topics: ['Environment Design', 'Habit Formation', 'Quick Wins']
    },
    {
      id: 'environment-habits-complete',
      title: 'Environment & Habits Mastery - Complete Guide',
      description: 'In-depth guide with science, strategies, and exercises to master your environment and habits.',
      file: '/Environment_Habits_Mastery_Complete_Guide.pdf',
      price: 9.99,
      pages: '20 pages',
      topics: ['Environment Design', 'Habit Formation', 'Behavior Change', 'Deep Dive']
    },
    {
      id: 'resilient-mind-tips',
      title: 'Building Your Resilient Mind - Practical Tips',
      description: 'Essential strategies to develop mental toughness and resilience quickly.',
      file: '/Building_Resilient_Mind_Practical_Tips.pdf',
      price: 4.99,
      pages: '13 pages',
      topics: ['Mental Resilience', 'Stress Management', 'Quick Start']
    },
    {
      id: 'resilient-mind-complete',
      title: 'Building Your Resilient Mind - Complete Guide',
      description: 'Comprehensive guide to building lasting mental strength with science-backed methods.',
      file: '/Building_Resilient_Mind_Complete_Guide.pdf',
      price: 9.99,
      pages: '36 pages',
      topics: ['Mental Resilience', 'Growth Mindset', 'Neuroscience', 'Deep Dive']
    },
    {
      id: 'emotional-mastery',
      title: 'Emotional Mastery Guide',
      description: 'Master your emotions, understand your triggers, and develop emotional intelligence.',
      file: '/ebooks/emotional_mastery_guide.pdf',
      price: 9.99,
      pages: '52 pages',
      topics: ['Emotional Intelligence', 'Self-Awareness', 'Regulation']
    }
  ];

  const handlePurchase = (ebookId) => {
    // In production, this would redirect to Stripe Checkout
    // For now, we'll simulate the purchase
    const stripeUrl = `https://buy.stripe.com/test_XXXXXX?client_reference_id=${ebookId}`;
    
    // TODO: Replace with actual Stripe Payment Link
    alert(`Stripe integration coming soon!\n\nIn production, you'll be redirected to:\n${stripeUrl}\n\nFor demo purposes, clicking OK will unlock this ebook.`);
    
    // Simulate successful purchase (remove this in production)
    const newPurchased = [...purchasedEbooks, ebookId];
    setPurchasedEbooks(newPurchased);
    localStorage.setItem('purchasedEbooks', JSON.stringify(newPurchased));
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

      {/* Bundle Offer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle className="text-amber-600" />
              Special Bundle Offer
            </CardTitle>
            <CardDescription className="text-lg">
              Get all 4 eBooks for just $29.99 (Save $10!)
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              onClick={() => handlePurchase('bundle-all')}
            >
              Buy Complete Bundle - $29.99
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* eBooks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ebooks.map((ebook) => {
            const purchased = isPurchased(ebook.id);
            
            return (
              <Card key={ebook.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{ebook.title}</CardTitle>
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
                  <div className="text-2xl font-bold text-gray-900">
                    ${ebook.price}
                  </div>
                  
                  {purchased ? (
                    <Button 
                      onClick={() => handleDownload(ebook)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handlePurchase(ebook.id)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      Purchase Now
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
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
              <h3 className="font-semibold text-lg mb-2">Can I access them after purchase?</h3>
              <p className="text-gray-600">Yes! Once purchased, you can download and access your eBooks anytime from this page.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2">Do I need the main book to use these?</h3>
              <p className="text-gray-600">No, each eBook is standalone. However, they complement the Transform Method beautifully.</p>
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
