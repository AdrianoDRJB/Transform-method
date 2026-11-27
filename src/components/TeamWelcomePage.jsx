import React from 'react';
import { CheckCircle, Calendar, ShieldCheck } from 'lucide-react';

const BOOK_LINK = 'https://calendly.com/adriano-nutrition/new-meeting';

const TeamWelcomePage = () => (
  <div className="min-h-screen bg-[#0b140f] text-white py-16">
    <div className="max-w-2xl mx-auto px-5">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2e9e4f]/15 rounded-full mb-5">
          <CheckCircle className="w-12 h-12 text-[#49c274]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black mb-3">Welcome to the Transform Method</h1>
        <p className="text-lg text-white/80">
          I am glad you are here. I hope I can really help you. Your card is saved and nothing is charged today.
        </p>
      </div>

      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-5 mb-4">
        <h2 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2">
          <Calendar className="w-5 h-5" />Book your kickoff call
        </h2>
        <p className="text-white/85 text-lg mb-4">
          Pick a time that fits your time zone. Before the call, think about your schedule, your training and what has derailed you before.
        </p>
        <a
          href={BOOK_LINK}
          className="block w-full text-center bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 rounded-xl transition-all"
        >
          Book a call
        </a>
      </div>

      <div className="bg-[#12201a] border border-white/10 rounded-2xl p-5 mb-6">
        <h2 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5" />You are in control
        </h2>
        <p className="text-white/85 text-lg">
          Nothing was charged today. When your free days end, your card is charged one time for the amount you saw at checkout, and it never renews. If it is not for you, cancel before then and you pay nothing.
        </p>
      </div>

      <div className="text-center">
        <a
          href="/team/cancel"
          className="inline-block border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-semibold text-base py-3 px-8 rounded-xl transition-all"
        >
          Cancel Anytime
        </a>
        <p className="text-white/50 text-sm mt-5">Results vary. This is not medical advice.</p>
      </div>
    </div>
  </div>
);

export default TeamWelcomePage;
