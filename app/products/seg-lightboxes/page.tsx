import type { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/metadata'
import { SEGLightboxesContent } from './seg-content'

export const metadata: Metadata = {
  title: 'EdgeLuxe Frame SEG Lightboxes | Wholesale SEG Light Boxes | Sunlite Signs',
  description:
    'Wholesale silicone-edged graphic (SEG) lightboxes for sign professionals. Single-sided and double-sided frames from 15mm to 160mm depth. Backlit LED fabric light boxes, German-engineered, UL listed. Ships across USA & Canada.',
  openGraph: {
    title: 'EdgeLuxe Frame SEG Lightboxes | Wholesale Signage | Sunlite Signs',
    description:
      'Wholesale SEG lightboxes in single-sided and double-sided configurations. 25+ frame profiles from 15mm to 160mm. For sign companies only.',
  },
}

export default function SEGLightboxesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://sunlitesigns.com' },
              { name: 'Products', url: 'https://sunlitesigns.com/products' },
              { name: 'SEG Lightboxes', url: 'https://sunlitesigns.com/products/seg-lightboxes' },
            ])
          ),
        }}
      />
      <SEGLightboxesContent />
    </>
  )
}
