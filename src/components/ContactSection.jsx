import { Mail, Phone, MessageCircle, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* CTA Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Life?
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Take the first step towards lasting change. Get in touch and let's build your transformation journey together.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Email */}
          <a
            href="mailto:adriano.nutrition@gmail.com"
            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 text-white group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Email</div>
              <div className="text-white/80 text-sm">adriano.nutrition@gmail.com</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5532984900823" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 text-white group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">WhatsApp</div>
              <div className="text-white/80 text-sm">Click to message</div>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+5532984900823"
            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 text-white group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Phone</div>
              <div className="text-white/80 text-sm">+55 32 98490-0823</div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/adriano.nutrition"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 rounded-xl p-6 text-white group"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Instagram</div>
              <div className="text-white/80 text-sm">Follow & DM</div>
            </div>
          </a>
        </div>

        {/* Additional CTA */}
        <div className="mt-12">
          <Link to="/identity">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              Choose Your Plan
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <p className="text-white/80 text-lg mt-6">
            Your transformation starts with a single decision.
          </p>
        </div>
      </div>
    </section>
  );
}
