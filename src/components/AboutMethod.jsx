import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Brain, Heart, Target, TrendingUp, Users, Zap, BookOpen, ArrowRight } from 'lucide-react'

function AboutMethod() {
  const methodPrinciples = [
    {
      letter: 'T',
      title: 'Track Your Reality',
      icon: Target,
      description: 'Before you can change anything, you need to understand where you are. This isn\'t about judgment; it\'s about objective observation.',
      details: [
        'Track your current habits, thoughts, and emotions without judgment',
        'Use the Hawthorne effect: the act of tracking alone leads to positive changes',
        'Choose specific areas to track (food, sleep, exercise, mood)',
        'Review and reflect on your data to gain insights'
      ]
    },
    {
      letter: 'R',
      title: 'Redesign Your Environment',
      icon: Home,
      description: 'Your environment is a silent architect of your behavior. Design it to make good habits easy and bad habits difficult.',
      details: [
        'Make good habits obvious and easy to perform',
        'Make bad habits invisible and difficult to execute',
        'Remove triggers for undesired behaviors from your environment',
        'Create visual cues for desired behaviors'
      ]
    },
    {
      letter: 'A',
      title: 'Act in Micro-Steps',
      icon: Zap,
      description: 'Break down your desired changes into actions so small, so easy, that you cannot say no to them.',
      details: [
        'Start with the smallest possible action',
        'Anchor new micro-steps to existing habits',
        'Celebrate every win, no matter how small',
        'Prioritize consistency over intensity'
      ]
    },
    {
      letter: 'N',
      title: 'Navigate Obstacles and Setbacks',
      icon: TrendingUp,
      description: 'Setbacks are inevitable. Develop mental and practical tools to learn from challenges and emerge stronger.',
      details: [
        'Acknowledge setbacks without judgment',
        'Identify triggers that led to the setback',
        'Adjust your systems based on what you learned',
        'Re-engage immediately with your positive habits',
        'Practice self-compassion during difficult moments'
      ]
    },
    {
      letter: 'S',
      title: 'Stack Habits for Compound Growth',
      icon: Users,
      description: 'Leverage existing routines to build new, positive habits. Create a compounding effect of small improvements.',
      details: [
        'Use the formula: "After [EXISTING HABIT], I will [NEW HABIT]"',
        'Reduce cognitive load by attaching new habits to established ones',
        'Build powerful morning and evening routines',
        'Create virtuous cycles of positive behaviors'
      ]
    },
    {
      letter: 'F',
      title: 'Focus on Systems, Not Goals',
      icon: Target,
      description: 'Goals provide direction, but systems create progress. Build robust daily practices that lead to desired outcomes.',
      details: [
        'Design systems for your desired outcomes',
        'Fall in love with the process, not just the destination',
        'Embrace continuous improvement over perfection',
        'Build resilience through systematic approaches'
      ]
    },
    {
      letter: 'O',
      title: 'Optimize Through Continuous Improvement',
      icon: TrendingUp,
      description: 'Embrace lifelong learning and adaptation. Continuously refine your systems based on feedback.',
      details: [
        'Adopt the Kaizen philosophy of small, incremental changes',
        'View setbacks as data points for optimization',
        'Approach your life with a scientific mindset',
        'Cultivate antifragility: improve from disorder and adversity'
      ]
    },
    {
      letter: 'R',
      title: 'Reframe Your Mindset',
      icon: Brain,
      description: 'Actively challenge and reshape your internal narratives and beliefs to support your transformation.',
      details: [
        'Identify and question limiting narratives',
        'Create new, empowering stories about yourself',
        'Shift from victimhood to agency',
        'Practice mindfulness to observe thoughts without judgment'
      ]
    },
    {
      letter: 'M',
      title: 'Master Your Identity',
      icon: Heart,
      description: 'The ultimate level of transformation: change the underlying beliefs about yourself that drive your habits.',
      details: [
        'Decide the type of person you want to be',
        'Prove it to yourself with small, consistent actions',
        'Surround yourself with people who embody your desired identity',
        'Make your identity your North Star for decision-making'
      ]
    }
  ]

  const scienceFoundation = [
    {
      title: 'Neuroplasticity',
      description: 'Your brain can change and rewire itself throughout your life. Every action strengthens neural pathways.'
    },
    {
      title: 'Dopamine System',
      description: 'Understanding your brain\'s reward system helps you build sustainable motivation and break addictive patterns.'
    },
    {
      title: 'Growth Mindset',
      description: 'Believing in your ability to change literally alters your brain\'s response to challenges and setbacks.'
    },
    {
      title: 'Habit Formation',
      description: 'Approximately 40% of daily actions are automatic. Building systems leverages this to create lasting change.'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            The Complete System
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          The TRANSFORM Method
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
          A nine-step, science-based system for total life transformation. Each step builds upon the last to create 
          a holistic and sustainable path to lasting change.
        </p>
      </div>

      {/* Science Foundation */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Built on Science</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scienceFoundation.map((item, index) => (
            <Card key={index} className="border-2 hover:border-blue-500 transition-all">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Method Steps */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">The Nine Steps</h2>
        <div className="space-y-8">
          {methodPrinciples.map((principle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 md:p-12 flex items-center justify-center md:w-48">
                  <div className="text-white text-center">
                    <div className="text-6xl font-bold mb-2">{principle.letter}</div>
                    <div className="text-sm opacity-90">Step {index + 1}</div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{principle.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded mt-0.5">
                          <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Why It Works */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-20">
        <CardContent className="p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Why This Method Works</h2>
            <p className="text-lg text-blue-50 mb-6">
              The TRANSFORM Method isn't just theory—it's a proven system built on neuroscience, behavioral psychology, 
              and real-world experience. It combines the latest research on habit formation, neuroplasticity, and 
              identity-based change with practical strategies that have been tested through years of personal transformation.
            </p>
            <p className="text-lg text-blue-50 mb-8">
              Unlike motivation-based approaches that fade over time, this method builds sustainable systems that work 
              with your brain's natural tendencies, making lasting change inevitable rather than impossible.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get the Complete Book <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Real Results */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">Real Transformation</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">8 Years</div>
                <div className="text-slate-600 dark:text-slate-400">Of continuous refinement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">3 Years</div>
                <div className="text-slate-600 dark:text-slate-400">Sober and thriving</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">44 lbs</div>
                <div className="text-slate-600 dark:text-slate-400">Lost in first 100 days</div>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-300 italic">
              "From hungover and unable to tie my shoes without catching my breath at 30 years old, 
              to competing at a national level in CrossFit. This method saved my life."
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Transformation Today</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Get the complete guide with detailed strategies, scientific insights, and practical tools.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8">
          Get the Book <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

// Import Home icon from lucide-react
import { Home } from 'lucide-react'

export default AboutMethod

