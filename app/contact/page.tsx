import type { Metadata } from 'next'
import { Container } from '@/components/ui/section'
import { WholesaleForm } from '@/components/forms/wholesale-form'

export const metadata: Metadata = {
  title: 'Contact Us | Wholesale Pricing & Trade Support',
  description:
    'Request wholesale pricing for channel letters, cabinet signs, and SEG lightboxes. Trade-only — available to licensed sign companies. 24-hour quotes, 21-day production, blind shipping nationwide.',
}

const steps = [
  { number: '01', title: 'Send Artwork', text: 'Email us artwork, dimensions, and specs in any format.' },
  { number: '02', title: 'Quote in 24h', text: 'Receive production drawings, renderings, and pricing.' },
  { number: '03', title: 'Approve & Build', text: 'We manufacture with UL listed components. 21-day turnaround.' },
  { number: '04', title: 'Blind Ship', text: 'Direct to your client site, your brand on the box.' },
]

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16 max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-brand-gold" />
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                Trade Only
              </p>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-warm-white leading-tight">
              Get in Touch
            </h1>

            <p className="mt-5 text-lg text-brand-steel-light leading-relaxed">
              Request wholesale pricing, ask a question, or reach out by phone.
              We respond within 24 hours.
            </p>
          </div>

          {/* Direct Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            <div className="rounded-sm border border-brand-border bg-brand-surface p-5">
              <p className="text-xs text-brand-steel uppercase tracking-wider mb-2">East Coast</p>
              <a
                href="tel:+16892940912"
                className="font-heading text-lg font-semibold text-brand-warm-white hover:text-brand-gold transition-colors"
              >
                (689) 294-0912
              </a>
            </div>
            <div className="rounded-sm border border-brand-border bg-brand-surface p-5">
              <p className="text-xs text-brand-steel uppercase tracking-wider mb-2">West Coast</p>
              <a
                href="tel:+16512302827"
                className="font-heading text-lg font-semibold text-brand-warm-white hover:text-brand-gold transition-colors"
              >
                (651) 230-2827
              </a>
            </div>
            <div className="rounded-sm border border-brand-border bg-brand-surface p-5">
              <p className="text-xs text-brand-steel uppercase tracking-wider mb-2">Email</p>
              <a
                href="mailto:info@sunlitesigns.com"
                className="font-heading text-lg font-semibold text-brand-warm-white hover:text-brand-gold transition-colors"
              >
                info@sunlitesigns.com
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
            {/* Left: How It Works + Production Capacity */}
            <div className="space-y-12">
              {/* How It Works */}
              <div>
                <h2 className="font-heading text-xl font-semibold text-brand-warm-white mb-6">
                  How It Works
                </h2>
                <div className="space-y-6">
                  {steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <span className="font-heading text-2xl font-bold text-brand-gold/20 leading-none mt-0.5">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-brand-warm-white">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-sm text-brand-steel-light leading-relaxed">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Capacity */}
              <div className="rounded-sm border border-brand-border bg-brand-surface p-6">
                <h2 className="font-heading text-lg font-semibold text-brand-warm-white mb-4">
                  Production Capacity
                </h2>
                <ul className="space-y-3 text-sm text-brand-steel-light">
                  <li className="flex items-center gap-2.5">
                    <span className="text-brand-gold">&bull;</span>
                    {/* EDITABLE: Update capacity number as needed */}
                    Weekly Production Capacity: <span className="text-brand-warm-white font-medium">200+ Letters</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-brand-gold">&bull;</span>
                    Serving Clients Nationwide (USA &amp; Canada)
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-brand-gold">&bull;</span>
                    Multi-Location Rollout Support Available
                  </li>
                </ul>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-brand-steel">
                  <svg className="w-5 h-5 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  UL Listed
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-steel">
                  <svg className="w-5 h-5 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  IP67 Waterproof
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-steel">
                  <svg className="w-5 h-5 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  German-Engineered
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-steel">
                  <svg className="w-5 h-5 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  3-Year Warranty
                </div>
              </div>
            </div>

            {/* Right: Sticky Form */}
            <div className="lg:sticky lg:top-28 self-start">
              <div className="rounded-sm border border-brand-border bg-brand-surface p-6 md:p-8">
                <h2 className="font-heading text-xl font-semibold text-brand-warm-white mb-1">
                  Request Wholesale Pricing
                </h2>
                <p className="text-sm text-brand-steel mb-6">
                  Or call us directly &mdash; we&apos;re happy to talk.
                </p>
                <WholesaleForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
