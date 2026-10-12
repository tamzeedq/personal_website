import './globals.css'
import type { Metadata } from 'next'
import { Big_Shoulders_Display, Hanken_Grotesk, DM_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const display = Big_Shoulders_Display({
  weight: ['700', '900'],
  subsets: ['latin'],
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

const DESCRIPTION =
  'Software developer studying Computer Science and Statistics at UBC in Vancouver. Projects, experience and contact.'

export const metadata: Metadata = {
  metadataBase: new URL('https://tamzeedq.netlify.app'),
  title: 'Tamzeed Quazi',
  description: DESCRIPTION,
  openGraph: {
    title: 'Tamzeed Quazi',
    description: DESCRIPTION,
    url: '/',
    siteName: 'Tamzeed Quazi',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamzeed Quazi',
    description: DESCRIPTION,
  },
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
