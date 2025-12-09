import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { CheckCircle2, Trophy, Users, BookOpen, MessageCircle, Zap, Target, Award } from 'lucide-react'

function TheIdentity() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const deliverables = [
    {
      icon: Target,
      title: "The 100-Day Identity Shift System",
      description: "Your complete roadmap to a new you. This system covers everything from personalized nutrition and smart training to mindset mastery and habit formation."
    },
    {
      icon: Zap,
      title: "Custom Nutrition & Training Blueprint",
      description: "A fully personalized plan that fits your life. No restrictive diets or endless cardio. We build a sustainable plan together that you can actually enjoy."
    },
    {
      icon: MessageCircle,
      title: "Weekly 1-on-1 Identity Coaching Sessions",
      description: "Private, weekly sessions where we go beyond just tracking macros. We work on your mindset, overcome your limiting beliefs, and build your new identity."
    },
    {
      icon: Users,
      title: "The Inner Circle (Private Discord Community)",
      description: "Full access during the program. See my training videos, reading insights, my psychologist's reality checks, how I handle tough days. Live with an athlete who was obese, alcoholic, and a smoker."
    }
  ]

  const bonuses = [
    {
      icon: BookOpen,
      title: "The eBook Starter Pack",
      value: "",
      description: "Complete eBooks distilling 10+ science-based books that would take months to read. Written by someone who read them AND lived them: Emotional Eating, Environment Design, Nutrition Myths, The TRANSFORM Method, and The Science of Sleep."
    },
    {
      icon: Users,
      title: "The Inner Circle Community",
      value: "",
      description: "Full access to my private Discord during the program. See my training videos, reading insights, my psychologist's reality checks, how I handle tough days. Live with an athlete who was obese, alcoholic, and a smoker - so YES, you can too."
    },
    {
      icon: Trophy,
      title: "The 100-Day Transformation Challenge",
      value: "$500+",
      description: "Turn your transformation into a competition. Top 3 win cash prizes (1st: $300, 2nd: $125, 3rd: $75). Prize pool increases to $1,000 with 10+ participants and $2,000 with 15+."
    },
    {
      icon: Award,
      title: "EXCLUSIVE LIFETIME BENEFITS",
      value: "PRICELESS",
      description: "First 3 annual members only: Lifetime access to ALL future challenges, eBooks, courses, PLUS a private 1-on-1 session with me every single month, forever.",
      exclusive: true
    }
  ]

  const valueBreakdown = [
    { item: "Personal Trainer (14 weeks)", value: "$1,120" },
    { item: "Nutrition Coach (14 weeks)", value: "$1,400" },
    { item: "Life/Mindset Coach (14 weeks)", value: "$1,400" },
    { item: "Therapy/Mental Health Support (7 sessions)", value: "$1,050" },
    { item: "eBooks & Community", value: "$694" }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Renato Cariani Style */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image - Zoomed Out */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/hero-bw.jpg)',
            transform: `translateY(${scrollY * 0.5}px) scale(0.85)`,
            transformOrigin: 'center 30%',
            filter: 'grayscale(100%) contrast(1.2)'
          }}
        />
        
        {/* Dark Overlay Only */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="text-red-500 font-bold text-xl tracking-wider">THE IDENTITY</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                In 100 Days,<br />
                You Won't Just<br />
                Change Your Body
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-red-500 mb-8">
                You'll Change Your Identity
              </p>
              <p className="text-xl text-gray-300 mb-8 max-w-xl">
                This is a complete transformation system designed to help you lose up to 20kg of fat, build lean muscle, and develop the mindset of an athlete.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-6 h-auto font-bold"
                  onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  START YOUR TRANSFORMATION
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-200 text-lg px-12 py-6 h-auto font-bold"
                  onClick={() => window.open('https://www.loom.com/share/3201bd36895a4db0b3974394130a2811', '_blank')}
                >
                  WATCH HOW
                </Button>
              </div>
              <p className="mt-6 text-sm text-gray-400">
                ⚡ Only 15 spots available • 30-day trial for $1
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* The Unique Mechanism */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
              Created By Someone Who's<br />
              <span className="text-red-500">Lived Your Struggle</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I lost 38kg, got sober, and competed twice at the in-person stage of the country's biggest CrossFit championship qualifier (registered for the third time). I combine the science of nutrition and training with the real-world psychological strategies that I used to overcome addiction, binge eating, and self-sabotage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-red-500">265 lbs → 220 lbs</CardTitle>
                <CardDescription className="text-gray-400">38kg Fat Lost (Targeting ~200 lbs)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">From obese, alcoholic, and smoker to competing at the country's biggest championship</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-red-500">3 Years Sober</CardTitle>
                <CardDescription className="text-gray-400">Addiction to Athlete</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Overcame alcoholism and substance abuse through identity transformation</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-red-500">Nutrition Student</CardTitle>
                <CardDescription className="text-gray-400">Science-Based Approach</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Combining academic knowledge with real-world experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase">The System</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((item, index) => (
              <Card key={index} className="bg-black border-red-900 hover:border-red-600 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase">Bonuses</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              You Also Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className={`${bonus.exclusive ? 'bg-gradient-to-br from-red-900 to-black border-red-500' : 'bg-gray-900 border-gray-800'}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`${bonus.exclusive ? 'bg-red-500' : 'bg-red-600'} p-3 rounded-lg`}>
                        <bonus.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">{bonus.title}</CardTitle>
                        {bonus.exclusive && (
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full mt-2 inline-block">
                            FIRST 3 ONLY
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-red-500 font-bold text-lg">{bonus.value}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase">The Investment</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              What Would This Cost<br />
              <span className="text-red-500">On Your Own?</span>
            </h2>
          </div>

          <Card className="bg-gray-900 border-red-900">
            <CardContent className="p-8">
              <div className="space-y-4">
                {valueBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="text-gray-300 text-lg">{item.item}</span>
                    <span className="text-white font-bold text-xl">{item.value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-6 border-t-2 border-red-600 mt-6">
                  <span className="text-white font-black text-2xl">TOTAL VALUE</span>
                  <span className="text-red-500 font-black text-3xl">$5,664</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-2xl text-gray-400 mb-4">
              You're getting a complete identity transformation system, worth over <span className="text-white font-bold">$5,600</span>
            </p>
            <p className="text-3xl font-black text-red-500 mb-8">
              For a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* 30-Day Trial */}
      <section id="pricing" className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Try It For 30 Days
          </h2>
          <p className="text-2xl mb-8">
            Join The Identity program for a full 30 days for just <span className="font-black text-5xl">$1</span>
          </p>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If at any point in those 30 days you don't feel like this is the right path for you, you can cancel with one click and you will not be charged another penny.
          </p>
          <p className="text-lg mb-12">
            You only pay the full price if you decide to continue after the 30-day trial.
          </p>
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-900 text-white text-2xl px-16 py-8 h-auto font-black"
            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
          >
            START YOUR $1 TRIAL NOW
          </Button>
          <p className="mt-6 text-sm">
            ⚡ Only 15 spots available • First 3 annual members get lifetime benefits
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="plans" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase">Choose Your Plan</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Start Your Transformation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Quarterly */}
            <Card className="bg-black border-gray-800 hover:border-red-600 transition-all">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Quarterly</CardTitle>
                <CardDescription className="text-gray-400">3 months transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-black text-white mb-1">$499</p>
                  <p className="text-gray-400 text-sm mb-3">3 months</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The 100-Day Identity Shift System</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Custom Nutrition & Training Blueprint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Weekly 1-on-1 Identity Coaching Sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The Inner Circle (Private Discord Community)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The eBook Starter Pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The 100-Day Transformation Challenge</span>
                    </li>
                  </ul>
                </div>
                <a href="https://buy.stripe.com/9B6eVc0Zh4UT8dV59b1Jm0v" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm">
                    START NOW
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Semi-Annual */}
            <Card className="bg-black border-red-600 hover:border-red-500 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-2xl">Semi-Annual</CardTitle>
                <CardDescription className="text-gray-400">6 months transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-black text-white mb-1">$999</p>
                  <p className="text-gray-400 text-sm mb-3">6 months</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The 100-Day Identity Shift System</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Custom Nutrition & Training Blueprint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Weekly 1-on-1 Identity Coaching Sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The Inner Circle (Private Discord Community)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The eBook Starter Pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The 100-Day Transformation Challenge</span>
                    </li>
                  </ul>
                </div>
                <a href="https://buy.stripe.com/cNicN4dM34UTeCjatv1Jm0w" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm">
                    START NOW
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Annual */}
            <Card className="bg-black border-gray-800 hover:border-red-600 transition-all">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Annual</CardTitle>
                <CardDescription className="text-gray-400">12 months + lifetime benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-black text-white mb-1">$1,999</p>
                  <p className="text-gray-400 text-sm mb-1">12 months</p>
                  <p className="text-red-500 text-xs font-bold mb-3">First 3: Lifetime Benefits</p>
                  <ul className="space-y-2 text-xs text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The 100-Day Identity Shift System</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Custom Nutrition & Training Blueprint</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Weekly 1-on-1 Identity Coaching Sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The Inner Circle (Private Discord Community)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The eBook Starter Pack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>The 100-Day Transformation Challenge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="font-bold text-red-400">EXCLUSIVE LIFETIME BENEFITS</span>
                    </li>
                  </ul>
                </div>
                <a href="https://buy.stripe.com/dRmdR88rJ7312TB8ln1Jm0x" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm">
                    START NOW
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Your New Identity<br />
            <span className="text-red-500">Is Waiting</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            The question is, are you ready to claim it?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 h-auto font-bold">
              YES, I'M READY
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-xl px-12 py-6 h-auto font-bold">
              I HAVE QUESTIONS
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TheIdentity
