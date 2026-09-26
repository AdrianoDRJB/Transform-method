import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Brain, Target, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, Gift } from 'lucide-react'
import TransformationsSection from './TransformationsSection.jsx'
import FAQSection from './FAQSection.jsx'
import ContactSection from './ContactSection.jsx'

function HomePage() {
  const [viewMode, setViewMode] = useState('detailed') // 'detailed' or 'phases'

  const homePlans = [
    { name: 'Quick Fix', tag: 'Single Session', price: '$259', period: 'one-time payment', cta: 'Buy Now', link: 'https://buy.stripe.com/4gMdR80Zh3QP1Pxbxz1Jm0L' },
    { name: 'TRANSFORM START', tag: '3 Months', price: '$559', period: 'billed every 3 months', cta: 'Get Started', link: 'https://buy.stripe.com/bJe7sK0Zhevt0Lt1WZ1Jm0I' },
    { name: 'TRANSFORM EVOLVE', tag: '6 Months', price: '$1,159', period: 'billed every 6 months', cta: 'Get Started', link: 'https://buy.stripe.com/8x28wO23l3QP3XF59b1Jm0J', highlight: true },
    { name: 'TRANSFORM ELITE', tag: '12 Months', price: '$2,219', period: 'billed annually', cta: 'Get Started', link: 'https://buy.stripe.com/6oUdR89vN3QP9hZdFH1Jm0K' },
  ]

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
      color: 'from-[#2e9e4f] to-[#1b5e3a]'
    },
    {
      phase: 'DESIGN',
      title: 'Create Your Personalized Plan',
      description: 'Environment redesign, obstacle strategies, and custom action plan',
      steps: ['R', 'N'],
      color: 'from-emerald-600 to-[#1b5e3a]'
    },
    {
      phase: 'IMPLEMENT',
      title: 'Put Systems Into Practice',
      description: 'Daily micro-habits, habit stacking, and systems focus',
      steps: ['A', 'S', 'F'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      phase: 'TRANSFORM',
      title: 'Evolve and Consolidate Changes',
      description: 'Continuous optimization, identity shift, and permanent maintenance',
      steps: ['O', 'R', 'M'],
      color: 'from-[#1b5e3a] to-[#0f3f26]'
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
            I lost <span className="text-[#49c274]">84 lbs of fat.</span><br />
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

          {/* Free eBooks CTA - THE ONLY CTA */}
          <div className="bg-black/50 backdrop-blur-md border-2 border-[#49c274] rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <p className="text-[#49c274] font-bold text-sm uppercase tracking-wider mb-1">Free eBooks</p>
            <h3 className="text-white font-bold text-xl mb-2">5 Free TRANSFORM Method Guides</h3>
            <p className="text-white/70 text-sm mb-5">The exact system I used to lose 84 lbs and transform my life. Free download — no credit card required.</p>
            <Link
              to="/ebooks"
              className="block w-full bg-[#49c274] hover:bg-[#5dcf85] text-[#06140b] font-bold py-3 px-6 rounded-xl transition-all text-center text-lg"
            >
              <span className="inline-flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Get the Free eBooks
              </span>
            </Link>
            <p className="text-white/40 text-xs mt-3">100% free. Instant download.</p>
          </div>

          {/* Secondary CTA - Path to paid coaching, for people who already know they want a coach */}
          <p className="text-white/80 text-sm">
            Already know you want a coach?{' '}
            <Link to="/plans" className="underline underline-offset-4 font-semibold text-[#49c274] hover:text-[#5dcf85]">
              See coaching plans &amp; book a free call →
            </Link>
          </p>
        </div>
      </div>

    {/* Paula Testimonial - Quick Social Proof */}
    <div className="bg-black py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#49c274] text-center text-sm font-bold uppercase tracking-widest mb-8">Real Results. Real People.</p>
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
            <p className="text-[#49c274] text-sm font-semibold mb-4">Mom of 2 · Esthetician · Entrepreneur</p>
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
            className={`border-2 hover:border-[#2e9e4f] transition-all hover:shadow-lg ${
              benefit.clickable ? 'cursor-pointer' : ''
            }`}
            onClick={benefit.clickable ? scrollToTransformations : undefined}
          >
            <CardContent className="flex items-center gap-5 py-5">
              <div className="bg-[#2e9e4f]/15 p-3 rounded-lg flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-[#49c274]" />
              </div>
              <div>
                <p className="font-bold text-base text-white">{benefit.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* TRANSFORM Method Section */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-white">
            The TRANSFORM Method
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            A complete system designed to guide you through your transformation journey
          </p>
          
          {/* View Switcher */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setViewMode('detailed')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'detailed'
                  ? 'bg-gradient-to-r from-[#2e9e4f] to-[#1b5e3a] text-white shadow-lg'
                  : 'bg-white/10 text-gray-200 hover:bg-white/15'
              }`}
            >
              9 Detailed Steps
            </button>
            <button
              onClick={() => setViewMode('phases')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                viewMode === 'phases'
                  ? 'bg-gradient-to-r from-[#2e9e4f] to-[#1b5e3a] text-white shadow-lg'
                  : 'bg-white/10 text-gray-200 hover:bg-white/15'
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
                    <div className="bg-gradient-to-br from-[#2e9e4f] to-[#1b5e3a] text-white font-bold text-2xl w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">
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

    {/* Transformations Section */}
    <TransformationsSection />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Free Tools CTA - Secondary, subtle */}
      <div className="mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Free Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start building better habits today with our free nutrition tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 hover:border-[#2e9e4f] transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-[#49c274]" />
                <h3 className="text-xl font-bold text-white">Macro Tracker</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Track your nutrition with our integrated USDA food database. Access 350,000+ foods.
              </p>
              <a href="/tracker" className="text-[#49c274] hover:text-[#3fae67] font-medium inline-flex items-center gap-1">
                Try it free <ArrowRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
          <Card className="border-2 hover:border-[#2e9e4f] transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-6 w-6 text-[#49c274]" />
                <h3 className="text-xl font-bold text-white">Calorie Calculator</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Calculate your daily calorie needs based on your goals, activity level, and body composition.
              </p>
              <a href="/calculator" className="text-[#49c274] hover:text-[#3fae67] font-medium inline-flex items-center gap-1">
                Calculate now <ArrowRight className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8 text-white">
          A Journey of Transformation
        </h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <blockquote className="text-lg text-slate-300 italic mb-4">
              "Eight years ago, I was 30 years old, hungover, and couldn't catch my breath tying my shoes. 
              Today, I'm sober, a consistent athlete, and competing at a national level. This method saved my life, 
              and it's built on science, not motivation."
            </blockquote>
            <p className="font-semibold text-white">— The Author</p>
            <p className="text-sm text-muted-foreground">3 years sober • National CrossFit competitor • ADHD advocate</p>
          </CardContent>
        </Card>
      </div>

      {/* Inline eBooks CTA - Reinforcement */}
      <div className="mb-20">
        <Card className="bg-gradient-to-r from-[#2e9e4f] to-[#1b5e3a] text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Get the Free TRANSFORM Method eBooks</h3>
            <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
              The exact 9-step system used to lose 84 lbs and rebuild a life from scratch. No fluff, just science.
            </p>
            <Link
              to="/ebooks"
              className="bg-white hover:bg-white/90 text-[#1b5e3a] font-bold py-3 px-8 rounded-xl transition-all text-lg inline-flex items-center gap-2"
            >
              <Gift className="h-5 w-5" />
              Get Your Free eBooks
            </Link>
            <p className="mt-4 text-white/80 text-sm">
              Prefer to skip straight to coaching?{' '}
              <Link to="/plans" className="underline underline-offset-4 font-semibold text-white hover:text-white/70">
                See plans & book a free strategy call →
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>

    </div>

    {/* Plans Preview Section */}
    <div className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Choose Your <span className="text-[#49c274]">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From a single assessment to a full year of coaching — pick the level of support that fits you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {homePlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 bg-[#12201a] border flex flex-col ${
                plan.highlight ? 'border-2 border-[#2e9e4f] shadow-xl shadow-[#2e9e4f]/20' : 'border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2e9e4f] text-[#06140b] px-3 py-1 rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <span className="text-xs uppercase tracking-wider text-[#49c274] font-semibold mb-2">{plan.tag}</span>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-white mb-1">{plan.price}</div>
              <p className="text-sm text-muted-foreground mb-6">{plan.period}</p>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full text-center py-2.5 px-4 rounded-xl bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-bold transition-all"
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/plans" className="text-[#49c274] hover:text-[#5dcf85] font-semibold inline-flex items-center gap-1">
            See full plan details &amp; FAQ <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
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
