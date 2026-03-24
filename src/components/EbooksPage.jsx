import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Lock, Download, CheckCircle, Star, Gift, Mail } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

const EbooksPage = () => {
  const [purchasedEbooks, setPurchasedEbooks] = useState([]);

  // Free ebook form state
  const [freeEmail, setFreeEmail] = useState('');
  const [freeSubmitting, setFreeSubmitting] = useState(false);
  const [freeSuccess, setFreeSuccess] = useState(false);
  const [freeError, setFreeError] = useState('');

  // Load purchased ebooks from localStorage
  useEffect(() => {
    const purchased = localStorage.getItem('purchasedEbooks');
    if (purchased) {
      setPurchasedEbooks(JSON.parse(purchased));
    }
  }, []);

  const freeEbooks = [
    {
      id: 'late-night-cravings',
      title: 'Late Night Cravings',
      description: 'Why they happen and how to stop. The real reason you eat at night has nothing to do with willpower.',
      file: '/late-night-cravings.pdf',
      topics: ['Root causes of night cravings', 'The biology behind it', 'What actually works', 'Evidence-based habits']
    }
  ];

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
    window.location.href = stripeLink;
  };

  const handleDownload = (ebook) => {
    const link = document.createElement('a');
    link.href = ebook.file;
    link.download = `${ebook.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFreeDownload = async (e, ebook) => {
    e.preventDefault();
    if (!freeEmail || !freeEmail.includes('@')) {
      setFreeError('Please enter a valid email address.');
      return;
    }
    setFreeSubmitting(true);
    setFreeError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: freeEmail })
      });
      if (!res.ok) throw new Error('Subscription failed');
      setFreeSuccess(true);
      // Trigger download after successful subscription
      setTimeout(() => handleDownload(ebook), 500);
    } catch (err) {
      setFreeError('Something went wrong. Please try again.');
    } finally {
      setFreeSubmitting(false);
    }
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

      {/* FREE EBOOKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Gift className="w-7 h-7 text-green-600" />
          <h2 className="text-3xl font-bold text-gray-900">Free eBooks</h2>
          <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">No credit card required</span>
        </div>
        <p className="text-gray-600 mb-8 text-lg">Enter your email to download instantly. You'll also receive practical, no-bullshit nutrition content directly to your inbox.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {freeEbooks.map((ebook) => (
            <Card key={ebook.id} className="flex flex-col border-2 border-green-400 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 w-fit">
                  <Gift className="w-4 h-4" />
                  FREE
                </div>
                <CardTitle className="text-2xl mb-2">{ebook.title}</CardTitle>
                <CardDescription className="text-base">{ebook.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">What you'll learn:</h4>
                  <ul className="space-y-1 mb-6">
                    {ebook.topics.map((topic, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>

                  {freeSuccess ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-green-800">You're in! Your download is starting.</p>
                        <p className="text-sm text-green-700">Check your inbox for more free content.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleFreeDownload(e, ebook)} className="space-y-3">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            value={freeEmail}
                            onChange={(e) => setFreeEmail(e.target.value)}
                            placeholder="Your email address"
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={freeSubmitting}
                          className="bg-green-600 hover:bg-green-700 text-white whitespace-nowrap"
                        >
                          {freeSubmitting ? 'Sending...' : (
                            <>
                              <Download className="w-4 h-4 mr-1" />
                              Download Free
                            </>
                          )}
                        </Button>
                      </div>
                      {freeError && (
                        <p className="text-red-500 text-sm">{freeError}</p>
                      )}
                      <p className="text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
                    </form>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Main eBook - Featured */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Premium eBooks</h2>
          <p className="text-lg text-gray-600">In-depth guides for serious transformation</p>
        </div>
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

    </div>

    {/* Contact Section */}
    <ContactSection />
    </>
  );
};

export default EbooksPage;
