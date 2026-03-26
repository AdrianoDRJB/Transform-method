import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowRight, Brain, Target, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react'
import ContactSection from './ContactSection.jsx'
import TransformationsSection from './TransformationsSection.jsx'
import FAQSection from './FAQSection.jsx'

function HomePage() {
  const [viewMode, setViewMode] = useState('detailed') // 'detailed' or 'phases'
  const [email, setEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState('idle') // idle | loading | success | error

  const handlePDFDownload = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setEmailStatus('error')
      return
    }
    setEmailStatus('loading')
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
    } catch (_) {}
    setEmailStatus('success')
    setTimeout(() => {
      window.open('/TRANSFORM_Method_Full_Corrected_eBook.pdf', '_blank')
    }, 300)
  }

  const transformSteps = [
    { letter: 'T', title: 'Track Your Reality', description: 'Understand where you are before you can change where you\'re going.' },
    { letter: 'R', title: 'Redesign Your Environment', description: 'Shape your surroundings to support your desired habits.' },
    { letter: 'A', title: 'Act in Micro-Steps', description: 'Build momentum through tiny, consistent actions.' },
    { letter: 'N', title: 'Navigate Obstacles', description: 'Learn from challenges and bounce back stronger.' },
    { letter: 'S', title: 'Stack Habits', description: 'Leverage existing routines to build new ones.' },
    { letter: 'F', title: 'Focus on Systems', description: 'Prioritize the process that creates the outcomes.' },
    { letter: 'O', title: 'Optimize Continuously', description: 'Make healthy behaviors automatic and sustainable.' },
    { letter: 'R', title: 'Reframe Your Mindset', description: 'Cultivate a growth mindset that embraces challenges.' },
    { letter: 'M', title: 'Master Your Identity', description: 'Become the person you aspire to be.' },
  ]

  const transformPhases = [
    {
      phase: 'DISCOVER',
      title: 'Understand Your Current Reality',
      description: 'Complete assessment, identify patterns, and analyze data',
      steps: ['T'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      phase: 'DESIGN',
      title: 'Create Your Personalized Plan',
      description: 'Environment redesign, obstacle strategies, and custom action plan',
      steps: ['R', 'N'],
      color: 'from-green-600 to-green-700'
    },
    {
      phase: 'IMPLEMENT',
      title: 'Put Systems Into Practice',
      description: 'Daily micro-habits, habit stacking, and systems focus',
      steps: ['A', 'S', 'F'],
      color: 'from-orange-600 to-orange-700'
    },
    {
      phase: 'TRANSFORM',
      title: 'Evolve and Consolidate Changes',
      description: 'Continuous optimization, identity shift, and permanent maintenance',
      steps: ['O', 'R', 'M'],
      color: 'from-purple-600 to-purple-700'
    }
  ]

  const scrollToTransformations = () => {
    const element = document.getElementById('proven-transformations')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const benefits = [
    { icon: Brain, title: 'Science-Based', description: 'Nutrition Student (3rd year) • Precision Nutrition Certified • Change Psychology Specialist' },
    { icon: Target, title: 'Proven Results', description: 'Real transformations: 30kg+ lost, sobriety achieved, lives changed', clickable: true },
    { icon: TrendingUp, title: 'Sustainable Change', description: 'Build habits that last a lifetime' },
    { icon: Users, title: 'Community Support', description: 'Join others on their transformation journey' },
  ]

  return (
    <>
      {/* Hero Section - Full width with photo background */}
      <div
        className="relative w-full min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/antesdepois.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 65%',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-20 text-center text-white">
          <span className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            Science-Based Transformation
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            I lost <span className="text-yellow-400">84 lbs of fat.</span><br />
            Rebuilt my body.<br />
            Rebuilt my life.
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-xl mx-auto">
            3 years sober. National CrossFit competitor. ADHD overcomer.<br />
            This is the exact system I used — and now I teach it.
          </p>

          <p className="text-sm text-white/60 mb-10">
            Nutrition Student (3rd year) • Precision Nutrition Certified • Change Psychology Specialist
          </p>

          {/* PDF Capture Box */}
          <div className="bg-black/50 backdrop-blur-md border-2 border-yellow-400 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Free eBook</p>
            <h3 className="text-white font-bold text-xl mb-2">The TRANSFORM Method Guide</h3>
            <p className="text-white/70 text-sm mb-4">The exact system I used to lose 84 lbs and transform my life. Free download.</p>
            {emailStatus === 'success' ? (
              <div className="text-center">
                <p className="text-green-400 font-bold mb-3">✓ Check your email — PDF is opening now!</p>
                <a
                  href="/TRANSFORM_Method_Full_Corrected_eBook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl transition-all text-center"
                >
                  Download Again
                </a>
              </div>
            ) : (
              <form onSubmit={handlePDFDownload} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setEmailStatus('idle') }}
                  placeholder="Enter your email to get free access"
                  className="w-full px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-500 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                {emailStatus === 'error' && (
                  <p className="text-red-400 text-xs">Please enter a valid email address.</p>
                )}
                <button
                  type="submit"
                  disabled={emailStatus === 'loading'}
                  className="block w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl transition-all text-center disabled:opacity-60"
                >
                  {emailStatus === 'loading' ? 'Sending...' : 'Download Free PDF'}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plans">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-5 h-auto w-full sm:w-auto">
                Choose a Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://calendly.com/adriano-nutrition/new-meeting" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-10 py-5 h-auto w-full sm:w-auto">
                Book a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

    {/* Paula Testimonial - Quick Social Proof */}
    <div className="bg-black py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-yellow-400 text-center text-sm font-bold uppercase tracking-widest mb-8">Real Results. Real People.</p>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src="/paula-rosto.jpg"
              alt="Paula's transformation"
              className="w-full rounded-xl object-cover"
            />
          </div>
          <div className="flex-1 text-white">
            <h3 className="text-2xl font-black mb-1">Paula, 38</h3>
            <p className="text-yellow-400 text-sm font-semibold mb-4">Mom of 2 · Esthetician · Entrepreneur</p>
            <p className="text-white/80 text-base leading-relaxed">
              She used a busy life as an excuse for years. Two kids, a business, no time — sound familiar?
              <br /><br />
              Then she stopped making excuses and started learning the process. Today Paula does CrossFit and strength training consistently. Not because she has more time. Because she finally understood how it works.
            </p>
            <p className="mt-6 text-white/40 text-xs italic">"I stopped waiting for the perfect moment. I just started."</p>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Benefits Section */}
      <div className="flex flex-col gap-4 mb-20">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className={`border-2 hover:border-blue-500 transition-all hover:shadow-lg ${
              benefit.clickable ? 'cursor-pointer' : ''
            }`}
            onClick={benefit.clickable ? scrollToTransformations : undefined}
          >
            <CardContent className="flex items-center gap-5 py-5">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-lg flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-bold text-base text-gray-900 dark:text-white">{benefit.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* TRANSFORM Method Section */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            The TRANSFORM Method
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
            A complete system designed to guide you through your transformation journey
          </p>
          
          {/* View Switcher */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'detailed'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              9 Detailed Steps
            </button>
            <button
              onClick={() => setViewMode('phases')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'phases'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              4 Implementation Phases
            </button>
          </div>
        </div>

        {/* Detailed View (9 Steps) */}
        {viewMode === 'detailed' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transformSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-2xl w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      {step.letter}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Phases View (4 Phases) */}
        {viewMode === 'phases' && (
          <div className="space-y-6">
            {transformPhases.map((phase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all border-l-4">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    {/* Phase Number & Letters */}
                    <div className="flex-shrink-0">
                      <div className={`bg-gradient-to-r ${phase.color} text-white px-6 py-3 rounded-lg mb-3`}>
                        <div className="text-sm font-semibold opacity-90">Phase {index + 1}</div>
                        <div className="text-2xl font-bold">{phase.phase}</div>
                      </div>
                      <div className="flex gap-2 justify-center">
                        {phase.steps.map((letter, i) => (
                          <div key={i} className={`bg-gradient-to-r ${phase.color} text-white font-bold text-lg w-10 h-10 rounded flex items-center justify-center`}>
                            {letter}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Phase Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

    </div>

    {/* Transformations Section - Moved here */}
    <TransformationsSection />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Macro Tracker CTA */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-20">
        <CardContent className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="h-6 w-6" />
                <h3 className="text-2xl font-bold">Free Macro Tracker</h3>
              </div>
              <p className="text-blue-50 text-lg mb-4">
                Track your nutrition with our integrated USDA food database. Start building better eating habits today.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-200" />
                  <span>Access to 350,000+ foods from USDA database</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-200" />
                  <span>Track macros, calories, and nutrients</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-200" />
                  <span>100% free, no registration required</span>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/tracker">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Try Macro Tracker <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonial Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          A Journey of Transformation
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <blockquote className="text-lg text-slate-700 dark:text-slate-300 italic mb-4">
              "Eight years ago, I was 30 years old, hungover, and couldn't catch my breath tying my shoes. 
              Today, I'm sober, a consistent athlete, and competing at a national level. This method saved my life, 
              and it's built on science, not motivation."
            </blockquote>
            <p className="font-semibold text-slate-900 dark:text-white">— The Author</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">3 years sober • National CrossFit competitor • ADHD advocate</p>
          </CardContent>
        </Card>
      </div>

    </div>

    {/* FAQ Section */}
    <FAQSection />

    {/* Contact Section */}
    <ContactSection />
    </>
  )
}

export default HomePage

