import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, Download, Gift, Unlock, Sparkles } from 'lucide-react';
import ContactSection from './ContactSection.jsx';

const EbooksPage = () => {
  const STRIPE_COMPLETE_GUIDES_LINK = 'https://buy.stripe.com/aFa7sKfUb2ML79R9pr1Jm0G';

  const freeEbooks = [
    {
      id: 'transform-method',
      title: 'TRANSFORM Method',
      description: 'The 9-step framework in a nutshell — how nutrition, habits, mindset, and environment fit together.',
      file: '/ebooks-free/transform-method.pdf',
    },
    {
      id: 'nutrition-fundamentals',
      title: 'Nutrition Fundamentals',
      description: 'The science-based basics — no fads, no myths, just what actually moves the needle.',
      file: '/ebooks-free/nutrition-fundamentals.pdf',
    },
    {
      id: 'environment-design',
      title: 'Environment Design',
      description: 'Shape your surroundings so good habits are easy and bad ones are hard.',
      file: '/ebooks-free/environment-design.pdf',
    },
    {
      id: 'adhd-emotional-intelligence',
      title: 'ADHD & Emotional Intelligence',
      description: 'Understand your triggers and build emotional awareness, with ADHD in mind.',
      file: '/ebooks-free/adhd-emotional-intelligence.pdf',
    },
    {
      id: 'sleep-recovery-mental-resilience',
      title: 'Sleep, Recovery & Mental Resilience',
      description: 'Why recovery is where the real transformation happens.',
      file: '/ebooks-free/sleep-recovery-mental-resilience.pdf',
    },
  ];

  const completeGuides = [
    {
      id: 'transform-method-complete',
      title: 'TRANSFORM Method — Complete Guide',
      description: 'The full framework, step by step. Every principle, every phase, every tool.',
    },
    {
      id: 'nutrition-fundamentals-complete',
      title: 'Nutrition Fundamentals — Complete Guide',
      description: 'The deep-dive version: full science, meal strategy, and practical application.',
    },
    {
      id: 'environment-design-complete',
      title: 'Environment Design — Complete Guide',
      description: 'A full system for redesigning your environment around lasting habits.',
    },
    {
      id: 'emotional-intelligence-complete',
      title: 'Emotional Intelligence — Complete Guide',
      description: 'Master your triggers, your self-talk, and your emotional regulation.',
    },
    {
      id: 'sleep-recovery-mental-resilience-complete',
      title: 'Sleep, Recovery & Mental Resilience — Complete Guide',
      description: 'The complete recovery framework — sleep, stress, and mental resilience.',
    },
  ];

  const handleDownload = (ebook) => {
    const link = document.createElement('a');
    link.href = ebook.file;
    link.download = `${ebook.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div className="min-h-screen bg-[#0b140f]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0f3f26] to-[#1b5e3a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-[#49c274]" />
            <h1 className="text-4xl font-bold mb-4">Transform Method eBooks</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Deep-dive guides to master specific areas of your transformation journey
            </p>
          </div>
        </div>
      </div>

      {/* FREE EBOOKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <Gift className="w-7 h-7 text-[#49c274]" />
          <h2 className="text-3xl font-bold text-white">Free eBooks</h2>
          <span className="bg-[#49c274]/15 text-[#49c274] text-sm font-semibold px-3 py-1 rounded-full">Instant download, no email required</span>
        </div>
        <p className="text-[#9fb6a8] mb-8 text-lg">Five free guides — tap any of them to download the PDF right now.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeEbooks.map((ebook) => (
            <Card key={ebook.id} className="flex flex-col bg-[#12201a] border border-white/10 hover:border-[#2e9e4f]/50 transition-colors">
              <CardHeader>
                <div className="inline-flex items-center gap-1 bg-[#2e9e4f] text-[#06140b] px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                  <Gift className="w-3.5 h-3.5" />
                  FREE
                </div>
                <CardTitle className="text-lg text-white mb-1">{ebook.title}</CardTitle>
                <CardDescription className="text-sm text-[#9fb6a8]">{ebook.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button
                  onClick={() => handleDownload(ebook)}
                  className="w-full bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="border-t border-white/10"></div>
      </div>

      {/* Complete Guides Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-[#49c274] font-semibold text-sm uppercase tracking-wide mb-2">
            <Sparkles className="w-4 h-4" />
            For clients &amp; serious transformations
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Complete Guides</h2>
          <p className="text-lg text-[#9fb6a8] max-w-2xl mx-auto">
            The full, in-depth version of every topic — get all 5 Complete Guides in one purchase, delivered instantly as PDFs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completeGuides.map((ebook) => (
            <Card key={ebook.id} className="flex flex-col bg-[#12201a] border border-[#2e9e4f]/25">
              <CardHeader>
                <CardTitle className="text-lg text-white mb-1">{ebook.title}</CardTitle>
                <CardDescription className="text-sm text-[#9fb6a8]">{ebook.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <a
                  href={STRIPE_COMPLETE_GUIDES_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-[#2e9e4f] text-[#49c274] hover:bg-[#2e9e4f]/10 font-semibold py-2.5 px-4 text-sm transition-colors"
                >
                  <Unlock className="w-4 h-4" />
                  Get All 5 Complete Guides
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#0f1c15] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-white">What format are the eBooks?</h3>
              <p className="text-[#9fb6a8]">All eBooks are delivered as PDF files, compatible with any device.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-white">What's the difference between the free and complete versions?</h3>
              <p className="text-[#9fb6a8]">The free guides give you the core framework for each topic. The complete guides go much deeper, with the full system — get all 5 in one purchase for instant access.</p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 text-white">Can I access the free guides again later?</h3>
              <p className="text-[#9fb6a8]">Yes — just come back to this page and download them again anytime.</p>
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
