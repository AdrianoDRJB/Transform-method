import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Menu, X, Dumbbell } from 'lucide-react'
import HomePage from './components/HomePage'
import MacroTracker from './components/MacroTracker'
import AboutMethod from './components/AboutMethod'
import CalorieCalculator from './components/CalorieCalculator'
import EbooksPage from './components/EbooksPage'
import PlansPage from './components/PlansPage'
import SuccessPage from './components/SuccessPage'
import TheIdentity from './components/TheIdentity'
import ThankYouPage from './components/ThankYouPage'
import './App.css'

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Normal pages with navbar and footer
  return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b140f] to-[#0f1c15]">
        {/* Navigation */}
        <nav className="bg-[#0b140f]/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="bg-gradient-to-br from-[#1b5e3a] to-[#2e9e4f] p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#2e9e4f] to-[#49c274] bg-clip-text text-transparent">
                  TRANSFORM
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="text-slate-300 hover:text-[#49c274] transition-colors font-medium">
                  Home
                </Link>
                <Link to="/method" className="text-slate-300 hover:text-[#49c274] transition-colors font-medium">
                  The Method
                </Link>
                <Link to="/calculator" className="text-slate-300 hover:text-[#49c274] transition-colors font-medium">
                  Calculator
                </Link>
                <Link to="/tracker" className="text-slate-300 hover:text-[#49c274] transition-colors font-medium">
                  Macro Tracker
                </Link>
                <Link to="/ebooks" className="text-slate-300 hover:text-[#49c274] transition-colors font-medium">
                  eBooks
                </Link>
                <Link to="/plans" className="text-slate-300 hover:text-[#49c274] transition-colors font-medium">
                  Plans
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-slate-300 hover:bg-white/10"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Overlay (kept outside <nav> on purpose — that element has
            backdrop-blur, which creates a new containing block for fixed-position
            descendants and was collapsing this overlay to zero height) */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-[#0b140f] flex flex-col overflow-y-auto">
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-10">
              {[
                { to: '/', label: 'Home' },
                { to: '/method', label: 'The Method' },
                { to: '/calculator', label: 'Calculator' },
                { to: '/tracker', label: 'Macro Tracker' },
                { to: '/ebooks', label: 'eBooks' },
                { to: '/plans', label: 'Plans' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-semibold uppercase tracking-wide transition-colors ${
                    location.pathname === item.to ? 'text-[#49c274]' : 'text-slate-200 hover:text-[#49c274]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="pb-12 text-center">
              <Link
                to="/plans"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block bg-[#2e9e4f] hover:bg-[#3fae67] text-[#06140b] font-bold py-3 px-8 rounded-xl transition-all"
              >
                Choose Your Plan
              </Link>
            </div>
          </div>
        )}

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
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/offer" element={<TheIdentity />} />
          <Route path="/identity" element={<TheIdentity />} />
          <Route path="/transform2026" element={<TheIdentity />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-[#0b140f] text-white mt-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-gradient-to-br from-[#1b5e3a] to-[#2e9e4f] p-2 rounded-lg">
                    <Dumbbell className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold">TRANSFORM</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  A science-based system for total life transformation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/method" className="hover:text-white transition-colors">The Method</Link></li>
                  <li><Link to="/calculator" className="hover:text-white transition-colors">Calculator</Link></li>
                  <li><Link to="/tracker" className="hover:text-white transition-colors">Macro Tracker</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/ebooks" className="hover:text-white transition-colors">eBooks</Link></li>
                  <li><Link to="/plans" className="hover:text-white transition-colors">Plans</Link></li>
                  <li><a href="mailto:adriano.nutrition@gmail.com" className="hover:text-white transition-colors">Contact</a></li>
                  <li><a href="https://instagram.com/adriano.nutrition" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
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
