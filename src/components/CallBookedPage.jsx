import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, BookOpen } from 'lucide-react'
import { trackCallBooked } from '@/lib/tracking'

// Pagina para onde o Calendly redireciona depois que a pessoa agenda a call.
function CallBookedPage() {
  useEffect(() => {
    // Evita contar duas vezes se a pessoa atualizar a pagina
    try {
      if (sessionStorage.getItem('call_booked_tracked')) return
      sessionStorage.setItem('call_booked_tracked', '1')
    } catch (e) {}
    trackCallBooked()
  }, [])

  return (
    <div className="min-h-screen bg-[#0b140f]">
      <div className="bg-gradient-to-r from-[#1b5e3a] to-[#0f3f26] text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Your call is booked.</h1>
          <p className="text-lg text-white/80 mb-6">
            Check your email for the confirmation and the meeting link. While you wait, start with the free guides.
          </p>
          <Link
            to="/ebooks"
            className="inline-flex items-center gap-2 bg-white text-[#1b5e3a] font-bold py-3 px-6 rounded-xl hover:bg-white/90 transition-all"
          >
            <BookOpen className="w-5 h-5" />
            Get the free eBooks
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallBookedPage
