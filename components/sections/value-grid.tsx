'use client'

import { Section, Container, SectionHeader } from '@/components/ui/section'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion'

const values = [
  {
    title: 'Blind-Ship to Your Job Site',
    description:
      'Your brand on every box. We ship direct to your client site with no Sunlite branding.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="22" height="14" rx="1" />
        <path d="M1 10h22" />
        <path d="M8 14h4" />
      </svg>
    ),
  },
  {
    title: '24-Hour Quote Turnaround',
    description:
      'Send artwork or specs. Receive production drawings, renderings, and pricing within 24 hours.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'German-Engineered Quality',
    description:
      'Designed with LKF Lichtwerbung in Nuremberg. UL listed components, IP67 waterproof, 3-year warranty.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: '21-Day Production',
    description:
      'From approval to delivery in 21 days. Full documentation, wiring diagrams, and 1:1 patterns included.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'We Never Compete With You',
    description:
      'We sell exclusively to sign companies. No retail orders. Your clients, your margin.',
    icon: (
      <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

export function ValueGrid() {
  return (
    <Section>
      <Container>
        <SectionHeader
          title="Why Sign Professionals Choose Us"
          subtitle="Built for the way sign companies actually work."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item) => (
            <StaggerItem key={item.title}>
              <div className="p-6 rounded-sm border border-brand-border bg-brand-surface/50 h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-heading text-base font-semibold text-brand-warm-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-steel-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
