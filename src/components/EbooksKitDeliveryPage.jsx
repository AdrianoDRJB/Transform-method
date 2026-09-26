import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Download, CheckCircle, Sparkles, PhoneCall } from 'lucide-react';

const EbooksKitDeliveryPage = () => {
  const CALENDLY_LINK = 'https://calendly.com/adriano-nutrition/new-meeting';

  const guides = [
    {
      id: 'transform-method',
      title: 'TRANSFORM Method — Complete Guide',
      file: '/ebooks-complete/transform-method-complete-guide.pdf',
    },
    {
      id: 'nutrition-fundamentals',
      title: 'Nutrition Fundamentals — Complete Guide',
      file: '/ebooks-complete/nutrition-fundamentals-complete-guide.pdf',
    },
    {
      id: 'environment-design',
      title: 'Environment Design — Complete Guide',
      file: '/ebooks-complete/environment-design-complete-guide.pdf',
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence — Complete Guide',
      file: '/ebooks-complete/emotional-intelligence-complete-guide.pdf',
    },
    {
      id: 'sleep-recovery-mental-resilience',
      title: 'Sleep, Recovery & Mental Resilience — Complete Guide',
      file: '/ebooks-complete/sleep-recovery-mental-resilience-complete-guide.pdf',
    },
  ];

  const handleDownload = (guide) => {
    const link = document.createElement('a');
    link.href = guide.file;
    link.download = `${guide.title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    guides.forEach((guide, i) => {
      setTimeout(() => handleDownload(guide), i * 400);
    });
  };

  return (
    <div className="min-h-screen bg-[#0b140f] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2e9e4f]/15 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-[#49c274]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Thank You! Your Complete eBooks Kit Is Ready
          </h1>
          <p className="text-lg text-[#9fb6a8] max-w-2xl mx-auto">
            All 5 complete guides are available below — click any title to download it, or grab all 5 at once.
          </p>
          <button
            onClick={handleDownloadAll}
            className="mt-6 inline-flex items-center gap-2 bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-bold py-3 px-8 rounded-xl transition-all"
          >
            <Download className="w-5 h-5" />
            Download All 5 Guides
          </button>
        </div>

        {/* Guides List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guides.map((guide) => (
            <Card key={guide.id} className="flex flex-col bg-[#12201a] border border-white/10">
              <CardHeader>
                <div className="inline-flex items-center gap-1 bg-[#2e9e4f] text-[#06140b] px-3 py-1 rounded-full text-xs font-bold mb-3 w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  COMPLETE
                </div>
                <CardTitle className="text-lg text-white">{guide.title}</CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto">
                <button
                  onClick={() => handleDownload(guide)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-semibold py-2.5 px-4 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Note */}
        <Card className="bg-[#0f1c15] border border-white/10 mb-8">
          <CardContent className="p-6 text-center">
            <p className="text-[#9fb6a8]">
              Bookmark this page or save the guides to your device now — a receipt with this link was also sent to your email.
            </p>
          </CardContent>
        </Card>

        {/* Soft Upsell */}
        <div className="text-center">
          <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-3">Want More?</p>
          <h3 className="text-2xl font-bold text-white mb-4">Ready for Personalized Coaching?</h3>
          <p className="text-[#9fb6a8] text-lg mb-6 max-w-xl mx-auto">
            These guides give you the knowledge. Coaching gives you the accountability and personalization to make it happen.
          </p>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#2e9e4f] text-[#49c274] hover:bg-[#2e9e4f]/10 font-semibold py-3 px-8 rounded-xl transition-all"
          >
            <PhoneCall className="w-5 h-5" />
            Book a Free Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default EbooksKitDeliveryPage;
