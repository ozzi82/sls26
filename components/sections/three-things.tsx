'use client'

import { Section, Container } from '@/components/ui/section'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="20" className="stroke-brand-gold/30" />
        <path d="M24 14v10l6 6" className="stroke-brand-gold" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: 'Quoted in 48 Hours. Delivered in 21 Days.',
    body: 'Send us your artwork or specs. You\u2019ll have production drawings, day/night renderings, and a detailed quote within 24\u201348 hours. After approval, your order ships in approximately 21 days \u2014 anywhere in the US or Canada.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4l4 8 8 1-6 5.5 1.5 8.5L24 22l-7.5 5 1.5-8.5L12 13l8-1z" className="stroke-brand-gold" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 34h24M16 40h16" className="stroke-brand-gold/30" strokeLinecap="round" />
      </svg>
    ),
    headline: 'German-Engineered. UL Listed. 3-Year Warranty.',
    body: 'Every product is designed in partnership with LKF Lichtwerbung in Nuremberg, Germany. All electrical components are UL listed. Every order ships with full documentation. And we back it all with a 3-year comprehensive warranty \u2014 because we don\u2019t cut corners.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 20a8 8 0 1116 0" className="stroke-brand-gold/30" />
        <path d="M24 4v4M4 24h4M40 24h4M10 10l3 3M35 10l-3 3" className="stroke-brand-gold/30" strokeLinecap="round" />
        <path d="M18 28h12v6a6 6 0 01-12 0v-6z" className="stroke-brand-gold" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 28v-2a4 4 0 018 0v2" className="stroke-brand-gold" strokeLinecap="round" />
      </svg>
    ),
    headline: 'Wholesale Only. We Never Compete With You.',
    body: 'We sell exclusively to sign companies. We don\u2019t take retail orders, we don\u2019t undercut you, and we don\u2019t put our name on your project. Your client sees your brand. You keep the margin. That\u2019s how it should work.',
  },
]

export function ThreeThings() {
  return (
    <Section className="bg-brand-black">
      <Container>
        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.headline}>
              <div className="group">
                <div className="mb-6">{pillar.icon}</div>
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-brand-warm-white leading-snug mb-4">
                  {pillar.headline}
                </h3>
                <p className="text-brand-steel-light leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
