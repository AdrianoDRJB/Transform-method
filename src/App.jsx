import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, Dumbbell } from 'lucide-react'
import HomePage from './components/HomePage'
import MacroTracker from './components/MacroTracker'
import AboutMethod from './components/AboutMethod'
import CalorieCalculator from './components/CalorieCalculator'
import EbooksPage from './components/EbooksPage'
import PlansPage from './components/PlansPage'
import SuccessPage from './components/SuccessPage'
import BlackFridayOffer from './components/BlackFridayOffer'
import TheIdentity from './components/TheIdentity'
import './App.css'

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isIdentityPage = location.pathname === '/identity' || location.pathname === '/transform2026'

  // If identity or transform2026 page, render ONLY the component without any wrapper
  if (location.pathname === '/identity') {
    return <TheIdentity />
  }
  if (location.pathname === '/transform2026') {
    return <TheIdentity />
  }

  // Normal pages with navbar and footer
  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        {/* Navigation */}
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TRANSFORM
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  Home
                </Link>
                <Link to="/method" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                  The Method
                </Link>
              <Link to="/calculator" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Calculator
              </Link>
              <Link to="/tracker" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                Macro Tracker
              </Link>
              <Link to="/ebooks" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                eBooks
              </Link>
                <Link to="/identity">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Choose a Plan
                  </Button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="px-4 py-3 space-y-3">
                <Link
                  to="/"
                  className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/method"
                  className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  The Method
                </Link>
                <Link
                  to="/calculator"
                  className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calculator
                </Link>
                <Link
                  to="/tracker"
                  className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Macro Tracker
                </Link>
                <Link
                  to="/ebooks"
                  className="block text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  eBooks
                </Link>
                <Link to="/plans" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Choose a Plan
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/method" element={<AboutMethod />} />
          <Route path="/calculator" element={<CalorieCalculator />} />
          <Route path="/tracker" element={<MacroTracker />} />
          <Route path="/ebooks" element={<EbooksPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/offer" element={<TheIdentity />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-slate-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Dumbbell className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">TRANSFORM</span>
                </div>
                <p className="text-slate-400 text-sm">
                  A science-based system for total life transformation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/method" className="hover:text-white transition-colors">The Method</Link></li>
                  <li><Link to="/calculator" className="hover:text-white transition-colors">Calculator</Link></li>
                  <li><Link to="/tracker" className="hover:text-white transition-colors">Macro Tracker</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="#" className="hover:text-white transition-colors">Get the Book</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
              <p>&copy; 2025 The Transform Method. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/identity" element={<TheIdentity />} />
        <Route path="/transform2026" element={<TheIdentity />} />
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  )
}

export default App
