import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="fixed w-full bg-[rgba(22,22,22,0.5)] backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-[64px]">
          <Link 
            href="/" 
            className="text-sm md:text-xl tracking-wide px-4 md:px-6 py-3 min-h-[44px] min-w-[44px] flex flex-col md:flex-row items-start md:items-center text-white nav-link"
          >
            <span className="block leading-none mb-1 md:mb-0 md:inline">Beretti</span>
            <span className="block leading-none md:inline md:ml-1">Audio</span>
          </Link>
          <div className="flex gap-2 ml-auto">
            {[
              ['HOME', '/'],
              ['SERVICES', '#services'],
              ['ABOUT', '#about']
            ].map(([label, path]) => (
              <a
                key={path}
                href={path}
                className="px-4 md:px-6 py-3 min-h-[44px] min-w-[44px] flex items-center text-xs md:text-sm tracking-wider text-gray-200 nav-link"
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