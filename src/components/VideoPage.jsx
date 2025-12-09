import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'

function VideoPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Watch <span className="text-red-500">The Offer</span>
          </h1>
          <p className="text-xl text-gray-400">
            See exactly what you're getting and how this transformation works
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.loom.com/embed/YOUR_VIDEO_ID_HERE?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
            frameBorder="0"
            allowFullScreen
            allow="autoplay"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-6 h-auto font-bold"
            onClick={() => window.location.href = '/identity#pricing'}
          >
            START YOUR TRANSFORMATION
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            ⚡ Only 15 spots available • 30-day trial for $1
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoPage
