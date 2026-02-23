import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from '@/lib/metadata'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const GA_ID = 'G-ELNZL9DEE3'
// TODO: Replace with your Hotjar Site ID from https://insights.hotjar.com
const HOTJAR_ID = 'HOTJAR_SITE_ID'

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
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Hotjar — replace HOTJAR_SITE_ID with your actual ID */}
        {HOTJAR_ID !== 'HOTJAR_SITE_ID' && (
          <Script id="hotjar-init" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
