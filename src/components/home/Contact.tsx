import React from 'react'

export default function Contact() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-5xl font-light mb-8 text-white">Ready to Get Started?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's work together to make your music sound its absolute best. 
          Contact me for a free consultation.
        </p>
        <a 
          href="mailto:gabri.beretti@gmail.com?subject=Audio Service Inquiry" 
          className="btn min-h-[44px] min-w-[44px] flex items-center justify-center mx-auto"
        >
          Contact
        </a>
      </div>
    </section>
  )
} 