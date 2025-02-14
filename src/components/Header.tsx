import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="fixed w-full bg-[rgba(22,22,22,0.5)] backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[64px]">
          <Link 
            href="/" 
            className="text-xl tracking-wide px-6 py-3 min-h-[44px] min-w-[44px] flex items-center text-white nav-link"
          >
            Beretti Audio 
          </Link>
          <div className="flex gap-2">
            {[
              ['HOME', '/'],
              ['SERVICES', '#services'],
              ['ABOUT', '#about']
            ].map(([label, path]) => (
              <a
                key={path}
                href={path}
                className="px-6 py-3 min-h-[44px] min-w-[44px] flex items-center text-sm tracking-wider text-gray-200 nav-link"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
} 