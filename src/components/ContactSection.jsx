import { Mail, MessageCircle, Instagram, ArrowUp } from 'lucide-react';

export default function ContactSection() {
  const scrollToCapture = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* CTA Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Life?
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Start with the free TRANSFORM Method Guide — the exact system used to lose 84 lbs and rebuild a life from scratch.
        </p>

        {/* Primary CTA - Email Capture */}
        <button
          onClick={scrollToCapture}
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-lg hover:shadow-xl mb-12"
        >
          <Mail className="w-5 h-5" />
          Get Your Free Guide
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Secondary Contact Options - Subtle */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 text-sm mb-6">Have a specific question? Reach out directly:</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:adriano.nutrition@gmail.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              adriano.nutrition@gmail.com
            </a>

            <a
              href="https://wa.me/5532984900823" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <a
              href="https://instagram.com/adriano.nutrition"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Instagram className="w-4 h-4" />
              @adriano.nutrition
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
