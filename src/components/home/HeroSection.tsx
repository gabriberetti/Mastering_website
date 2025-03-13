import React from 'react'

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center relative overflow-hidden bg-gray-900">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/video back 3.mov" type="video/mp4" />
      </video>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]"></div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-light tracking-tighter leading-[1.1] text-white">
            <span className="block blur-load">Bring</span>
            <span className="block blur-load delay-200">Clarity</span>
            <span className="block blur-load delay-400">to your Music.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed blur-load delay-400 max-w-2xl">
            With years of experience in the electronic music industry, we specialize in high-quality mixdowns, mastering, and sound design for advertising and audio branding. We also offer personal consulting and masterclasses to help artists and brands achieve their unique sonic identity.
          </p>
        </div>
      </div>
    </section>
  )
} 