import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 mt-20 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Beretti Audio
          </div>
          <div className="flex flex-wrap gap-8">
            {[
              ['Imprint', '/imprint'],
              ['Cookie Policy', '/cookie-policy'],
              ['Privacy Policy', '/privacy-policy']
            ].map(([label, path]) => (
              <Link
                key={path}
                href={path}
                className="text-sm text-gray-400 hover:text-[rgb(56,189,248)] transition-colors touch-target"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 