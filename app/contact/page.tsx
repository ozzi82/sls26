import type { Metadata } from 'next'
import { QuoteForm } from '@/components/forms/quote-form'
import { Container } from '@/components/ui/section'

export const metadata: Metadata = {
  title: 'Get a Wholesale Quote | Contact Sunlite Signs',
  description:
    'Request a wholesale quote for trimless channel letters, halo-lit letters, cast acrylic, and more. 24-48 hour response with production drawings and renderings.',
}

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white">
              Get a Wholesale Quote
            </h1>
            <p className="mt-4 text-lg text-brand-steel-light max-w-2xl">
              Tell us about your project and we&apos;ll send you production drawings,
              day/night renderings, and a detailed quote within 24&ndash;48 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
            {/* Form */}
            <QuoteForm />

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <div className="rounded-sm border border-brand-border bg-brand-surface p-6">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-brand-steel uppercase tracking-wider mb-1">
                      East Coast
                    </p>
                    <a
                      href="tel:+16892940912"
                      className="text-sm text-brand-steel-light hover:text-brand-gold transition-colors"
                    >
                      (689) 294-0912
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-brand-steel uppercase tracking-wider mb-1">
                      West Coast
                    </p>
                    <a
                      href="tel:+16512302827"
                      className="text-sm text-brand-steel-light hover:text-brand-gold transition-colors"
                    >
                      (651) 230-2827
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-brand-steel uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:info@sunlitesigns.com"
                      className="text-sm text-brand-steel-light hover:text-brand-gold transition-colors"
                    >
                      info@sunlitesigns.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Response Note */}
              <div className="rounded-sm border border-brand-gold/20 bg-brand-gold/5 p-6">
                <h3 className="font-heading text-sm font-semibold text-brand-gold mb-2">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-sm text-brand-steel-light">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">&#8226;</span>
                    Response within 24&ndash;48 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">&#8226;</span>
                    Production drawings included
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">&#8226;</span>
                    Day and night renderings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">&#8226;</span>
                    Detailed line-item quote
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-gold mt-0.5">&#8226;</span>
                    No minimums on first order
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
