import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

// Load font with all weights for better typography
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Beretti Audio',
  description: 'Professional audio mastering studio in Berlin',
  keywords: ['audio mastering', 'sound design', 'music production', 'mixing', 'berlin studio'],
  authors: [{ name: 'Gabriele Beretti' }],
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  themeColor: '#121212'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col selection:bg-white/20">
        <div className="iridescent-bg" />
        <Header />
        <main className="flex-grow flex flex-col backdrop-blur-[2px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 