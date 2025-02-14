import React from 'react'
import SpotlightCard from '../SpotlightCard'

const services = [
  {
    title: 'Mixdown',
    description: 'Your work needs to be as clean and clear as it can be before it reaches the final mastering phase. Using your references and direction, we will process and balance the various tracks of your audio project, resulting in a polished and cohesive final mix.',
    details: [
      'Expected turnaround for a track is 1-2 days',
      'Stems should be WAV Audio Files in 32bit 44100Hz without clipping',
      'Including 1 full revision',
      'Discount available for regular collaborations'
    ],
    spotlightColor: 'rgba(56, 189, 248, 0.2)' as const
  },
  {
    title: 'Mastering',
    description: 'With our range of digital and analog equipment, we are ready to bring your work to an industry standard while giving it color and life. Our mastering service is designed to make your audio sound great on all playback systems.',
    details: [
      'Audio Files should be WAV format in 32bit 44100Hz',
      'Premasters should be on -6db without master channel processing',
      'Expected turnaround for a 4-5 track EP is 1-2 days',
      'Revision until satisfaction without additional charge'
    ],
    spotlightColor: 'rgba(168, 85, 247, 0.2)' as const
  },
  {
    title: 'Sound Design',
    description: 'We specialize in creating custom soundscapes, sound effects, and music compositions for commercials, audio branding, TV, fashion, and film. Using analog and digital instruments to create high-quality and engaging audio experiences.',
    details: [],
    spotlightColor: 'rgba(236, 72, 153, 0.2)' as const
  },
  {
    title: 'Masterclasses',
    description: 'Personalized classes and guidance to help you improve your skills and worklow in music production, mixing, and creative approaches. The course is tailored for each participant. Available in person or online with flexible scheduling.',
    details: [],
    spotlightColor: 'rgba(34, 197, 94, 0.2)' as const
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6 md:px-8">
        <h6 className="text-sm uppercase tracking-wider mb-12 text-gray-300">Our Services</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SpotlightCard 
              key={index} 
              spotlightColor={service.spotlightColor}
              className="flex flex-col h-full"
            >
              <div className="flex flex-col h-full">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-white">{service.title}</h2>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-grow">
                  {service.description}
                </p>
                {service.details.length > 0 && (
                  <ul className="list-disc pl-8 space-y-4 text-gray-300 mb-8 text-lg">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
                <a 
                  href={`mailto:gabri.beretti@gmail.com?subject=Request for ${service.title} Service`}
                  className="btn mt-auto self-start"
                >
                  Request {service.title}
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
} 