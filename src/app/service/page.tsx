import React from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Mixdown',
    description: 'Your work needs to be as clean and clear as it can be before it reaches the final mastering phase. Using your references and direction, we will process and balance the various tracks of your audio project, resulting in a polished and cohesive final mix.',
    details: [
      'Expected turnaround for a track is 2-4 days',
      'Stems should be WAV Audio Files in 32bit 44100Hz without clipping',
      'Including 1 full revision',
    ]
  },
  {
    title: 'Mastering',
    description: 'With our range of digital and analog equipment, we are ready to bring your work to an industry standard while giving it color and life.',
    details: [
      'Premasters should be on -6db without master channel processing',
      'Expected turnaround for a 4-5 track EP is 4-7 days',
      'Revision until satisfaction without additional charge'
    ]
  },
  {
    title: 'Sound Design',
    description: 'We specialize in creating custom soundscapes, sound effects, and music compositions for commercials, audio branding, TV, fashion, and film. Using analog and digital instruments and effects to create high-quality and engaging audio experiences.',
    details: []
  },
  {
    title: 'Masterclasses',
    description: 'We provide personalized instruction and guidance to help you improve your skills in music production, mixing, and creative approaches. The course is tailored for each participant. Available online or in studio, with flexible scheduling. Book a free session to discuss your needs!',
    details: []
  }
]

export default function Service() {
  return (
    <main className="pt-32">
      <div className="container mx-auto px-6 md:px-8">
        <h6 className="text-sm uppercase tracking-wider mb-8 text-gray-300">Our Serivce</h6>
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className="max-w-4xl">
              <h2 className="text-4xl font-light mb-8 text-white">{service.title}</h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              {service.details.length > 0 && (
                <ul className="list-disc pl-8 space-y-4 text-gray-300 mb-12 text-lg">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
              <a 
                href={`mailto:gabri.beretti@gmail.com?subject=Request for ${service.title} Service`}
                className="btn"
              >
                Request {service.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 