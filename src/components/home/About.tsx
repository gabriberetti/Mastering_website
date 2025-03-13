import React from 'react'
import Image from 'next/image'
// import Testimonials from './Testimonials'

export default function About() {
  return (
    <>
      <section id="about" className="py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative w-full h-[600px]">
              <Image
                src="/images/AVANT.OCS (2 of 1).jpg"
                alt="Professional mastering engineer at work"
                fill
                priority
                className="object-contain bg-transparent"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="max-w-xl space-y-8">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">About The Engineer</h2>
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Gabriele Beretti is a Berlin-based mastering engineer specializing in electronic music, with a focus on Techno, House, Electronica, and Ambient. His love for music production led him to found{' '}
                  <a 
                    href="https://soundcloud.com/oecusmusic" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-300 underline"
                  >
                    OECUS
                  </a>
                  , a music platform deeply rooted in the underground electronic scene.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  He has organized events in Berlin and internationally, releasing music on his label and is actively collaborating with major artists and labels in the electronic music panorama.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  Having recently graduated from the Mastering Academy, Gabriele has developed a deep proficiency in the art of mastering across all musical genres. His training provided a strong foundation in the fundamentals of loudness standards, sonic balance, and advanced mastering techniques, ensuring that every track meets industry-leading quality.
                </p>

                <p className="text-gray-300 leading-relaxed text-lg">
                  With years of experience in the music industry, Gabriele combines state-of-the-art equipment with a meticulous approach to refine and enhance each production. He values close collaboration and transparent communication, ensuring that every artist's vision is fully realized while delivering a polished, impactful, and release-ready master.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
    </>
  )
} 