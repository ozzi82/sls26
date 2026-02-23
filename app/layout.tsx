import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/metadata'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sunlitesigns.com'),
  title: {
    default: 'Wholesale Channel Letter Fabrication | Trade-Only Sign Manufacturer | Sunlite Signs',
    template: '%s | Sunlite Signs',
  },
  description:
    'Trade-only wholesale manufacturer of trimless channel letters, cast block acrylic, and LED signage. German-engineered, UL listed. 24hr quotes, 21-day production, blind shipping. USA & Canada.',
  keywords: [
    'wholesale channel letters',
    'trimless channel letters',
    'wholesale sign manufacturer',
    'channel letter manufacturer',
    'cast block acrylic letters',
    'halo lit channel letters wholesale',
    'UL listed channel letters',
    'wholesale LED signs',
    'German engineered signage',
    'EdgeLuxe channel letters',
    'EdgeLuxe letters',
    'wholesale signage',
    'wholesale LED channel letters',
    'trimless LED signs',
    'channel letter supplier USA',
    'channel letter supplier Canada',
    'face lit channel letters wholesale',
    'halo lit signs wholesale',
    'wholesale sign fabricator',
    'trade only channel letters',
    'blind ship channel letters',
    'white label channel letters',
    'sign company supplier',
    'OEM channel letter manufacturer',
  ],
  authors: [{ name: 'Sunlite Signs LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sunlitesigns.com',
    siteName: 'Sunlite Signs',
    title: 'Trade-Only Wholesale Channel Letter Fabrication | Sunlite Signs',
    description:
      'Trade-only wholesale channel letters, German-engineered with UL listed components. 24hr quotes, 21-day production, blind shipping across USA & Canada.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
