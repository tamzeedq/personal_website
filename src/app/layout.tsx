import './globals.css'
import type { Metadata } from 'next'
import { Big_Shoulders, Hanken_Grotesk, DM_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Google Fonts merged "Big Shoulders Display" into the variable "Big Shoulders"
// family; the Display look is opsz 72, pinned via the `font-display` utility.
const display = Big_Shoulders({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-display',
})

const sans = Hanken_Grotesk({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const mono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Tamzeed Quazi',
  description: 'Tamzeed Quazi Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <div className="min-h-screen bg-bg text-ink font-sans overflow-x-clip">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
