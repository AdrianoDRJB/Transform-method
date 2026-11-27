import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const TeamCancelPage = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | error

  const submit = async (e) => {
    e.preventDefault();
    setState('sending');
    try {
      const r = await fetch('/api/team-cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setState(r.ok ? 'done' : 'error');
    } catch {
      setState('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b140f] text-white py-16">
      <div className="max-w-xl mx-auto px-5">
        <h1 className="text-3xl sm:text-4xl font-black mb-3 text-center">Cancel Anytime</h1>
        <p className="text-lg text-white/80 text-center mb-8">
          Enter the email you used at checkout. If you are still in your free days, you pay nothing. If you were already charged, your plan will not renew. No questions asked.
        </p>

        {state === 'done' ? (
          <div className="bg-[#12201a] border border-white/10 rounded-2xl p-6 text-center">
            <CheckCircle className="w-12 h-12 text-[#49c274] mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">Done. Your plan is cancelled.</h2>
            <p className="text-white/80 text-lg">
              If that email has a plan or a saved card with us, it is now cancelled and will not charge you again. You will get a confirmation email. Questions or a refund request? Email
              {' '}<a className="underline" href="mailto:adrianonutrition@adrianonutrition.com">adrianonutrition@adrianonutrition.com</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-[#12201a] border border-white/10 rounded-2xl p-6">
            <label htmlFor="cancel-email" className="block text-lg font-bold mb-2">Email used at checkout</label>
            <input
              id="cancel-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl bg-white text-black text-lg px-4 py-3 mb-4"
            />
            <button
              type="submit"
              disabled={state === 'sending'}
              className="w-full bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-black text-lg py-4 rounded-xl disabled:opacity-60"
            >
              {state === 'sending' ? 'Cancelling...' : 'Cancel my plan'}
            </button>
            {state === 'error' && (
              <p className="text-red-300 mt-4 text-lg">
                Something went wrong. Please email adrianonutrition@adrianonutrition.com or message @adriano.nutrition on Instagram and I will cancel it for you.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default TeamCancelPage;
