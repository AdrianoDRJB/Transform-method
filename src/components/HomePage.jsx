import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ArrowRight, Brain, Target, TrendingUp, Users, Zap, CheckCircle2 } from 'lucide-react'

function HomePage() {
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

  const benefits = [
    { icon: Brain, title: 'Science-Based', description: 'Grounded in neuroscience and behavioral psychology' },
    { icon: Target, title: 'Proven Results', description: 'Tested through real-world transformation journeys' },
    { icon: TrendingUp, title: 'Sustainable Change', description: 'Build habits that last a lifetime' },
    { icon: Users, title: 'Community Support', description: 'Join others on their transformation journey' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Science-Based Transformation
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Transform Your Life,<br />One System at a Time
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
          A complete, science-based manual for total life transformation. Learn the proven method that combines neuroscience, 
          behavioral psychology, and real-world experience to create lasting change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8">
            Get the Book <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link to="/method">
            <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
              Learn the Method
            </Button>
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-3 rounded-lg w-fit mb-2">
                <benefit.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="text-lg">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{benefit.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* TRANSFORM Method Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            The TRANSFORM Method
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A nine-step system designed to guide you through your transformation journey
          </p>
        </div>

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
      </div>

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

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Get the complete guide with detailed strategies, scientific insights, and practical tools 
          to create lasting change.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8">
          Get the Book Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

export default HomePage

