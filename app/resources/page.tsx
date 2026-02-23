import type { Metadata } from 'next'
import { Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Resources | Spec Sheets & Installation Guides',
  description:
    'Download spec sheets, installation guides, and technical documentation for Sunlite Signs wholesale LED channel letters and signage products.',
}

const resources = [
  {
    category: 'Spec Sheets',
    items: [
      { name: 'Trimless Face-Lit Channel Letters (EdgeLuxe LP5)', format: 'PDF', size: '2.4 MB' },
      { name: 'Halo-Lit Channel Letters — Standoff Mount', format: 'PDF', size: '1.8 MB' },
      { name: 'Halo-Lit Channel Letters — Flush Mount', format: 'PDF', size: '1.6 MB' },
      { name: 'Face & Halo Combo Channel Letters', format: 'PDF', size: '2.1 MB' },
      { name: 'Cast Block Acrylic Letters', format: 'PDF', size: '1.9 MB' },
      { name: 'FCO Flat Cut Out Letters', format: 'PDF', size: '1.2 MB' },
      { name: 'Blade Signs', format: 'PDF', size: '1.5 MB' },
      { name: 'Push-Through Cabinet Signs', format: 'PDF', size: '1.7 MB' },
    ],
  },
  {
    category: 'Installation Guides',
    items: [
      { name: 'Channel Letter Installation Guide', format: 'PDF', size: '3.2 MB' },
      { name: 'Wiring and Power Supply Guide', format: 'PDF', size: '1.4 MB' },
      { name: 'Mounting Pattern Usage Instructions', format: 'PDF', size: '0.8 MB' },
    ],
  },
  {
    category: 'Technical Documentation',
    items: [
      { name: 'UL Listing Documentation', format: 'PDF', size: '0.5 MB' },
      { name: 'IP67 Certification Details', format: 'PDF', size: '0.3 MB' },
      { name: 'LED Module Specifications (Samsung/Osram)', format: 'PDF', size: '1.1 MB' },
      { name: 'Warranty Terms & Conditions', format: 'PDF', size: '0.2 MB' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <div className="mb-14 md:mb-18 max-w-2xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white">
            Resources
          </h1>
          <p className="mt-4 text-lg text-brand-steel-light">
            Spec sheets, installation guides, and technical documentation for all
            Sunlite Signs products.
          </p>
        </div>

        {/* Resource Sections */}
        <div className="max-w-4xl space-y-12">
          {resources.map((category) => (
            <div key={category.category}>
              <h2 className="font-heading text-xl font-semibold text-brand-warm-white mb-6 pb-3 border-b border-brand-border">
                {category.category}
              </h2>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-sm border border-brand-border bg-brand-surface hover:bg-brand-charcoal transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <svg
                        className="w-5 h-5 text-brand-steel flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm text-brand-warm-white truncate">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span className="text-xs text-brand-steel">
                        {item.format} &middot; {item.size}
                      </span>
                      <span className="text-sm text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Download
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 max-w-4xl">
          <div className="rounded-sm border border-brand-gold/20 bg-brand-gold/5 p-6">
            <h3 className="font-heading text-sm font-semibold text-brand-gold mb-2">
              Need Custom Documentation?
            </h3>
            <p className="text-sm text-brand-steel-light">
              If you need specific documentation for a project, permit
              application, or client presentation, contact us and we&apos;ll
              prepare what you need.
            </p>
            <div className="mt-4">
              <Button href="/contact" variant="outline" size="sm">
                Request Documentation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
