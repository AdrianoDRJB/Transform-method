import React from 'react';
import { CheckCircle, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

const DM_LINK = 'https://ig.me/m/adriano.nutrition';

const steps = [
  { icon: MessageCircle, title: 'Send me a DM on Instagram', text: 'Message @adriano.nutrition with the word TEAM and the email you used at checkout. I will reply and we book your kickoff.' },
  { icon: Calendar, title: 'Book your kickoff', text: 'We pick a time that fits your time zone. Before it, think about your schedule, your training and what has derailed you before.' },
  { icon: ShieldCheck, title: 'You are in control for 30 days', text: 'Nothing was charged today. If it is not for you, message me before day 31 and you pay nothing.' },
];

const TeamWelcomePage = () => (
  <div className="min-h-screen bg-[#0b140f] text-white py-16">
    <div className="max-w-2xl mx-auto px-5">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#2e9e4f]/15 rounded-full mb-5">
          <CheckCircle className="w-12 h-12 text-[#49c274]" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black mb-3">Welcome to Team TRANSFORM</h1>
        <p className="text-lg text-white/80">Your card is saved. Nothing is charged for 30 days.</p>
      </div>

      <div className="space-y-4 mb-10">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-[#12201a] border border-white/10 rounded-2xl p-5 flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#49c274] text-[#06140b] font-black flex items-center justify-center">{i + 1}</div>
            <div>
              <h2 className="text-[#49c274] font-bold text-lg mb-1 flex items-center gap-2"><s.icon className="w-5 h-5" />{s.title}</h2>
              <p className="text-white/85 text-lg">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a href={DM_LINK} className="inline-block w-full sm:w-auto bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 px-10 rounded-xl transition-all">
          Message me on Instagram
        </a>
        <p className="text-white/60 text-sm mt-4">On day 31 you are charged $259 once, unless you cancel before. Results vary. This is not medical advice.</p>
      </div>
    </div>
  </div>
);

export default TeamWelcomePage;
