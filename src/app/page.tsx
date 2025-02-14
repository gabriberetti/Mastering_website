import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import Services from '@/components/home/Services'
import About from '@/components/home/About'
// import References from '@/components/home/References'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <About />
      {/* <References /> */}
      <Contact />
    </main>
  )
} 