'use client'

import { Section, Container, SectionHeader } from '@/components/ui/section'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion'

const steps = [
  {
    number: '01',
    title: 'Send Artwork',
    description:
      'Email us your artwork, dimensions, and specs. AI files, PDFs, napkin sketches \u2014 whatever you have, we\u2019ll work with it.',
  },
  {
    number: '02',
    title: 'Get Your Quote in 24h',
    description:
      'Within 24 hours you receive production drawings, day/night renderings, and a detailed line-item wholesale quote.',
  },
  {
    number: '03',
    title: 'Approve & Manufacture',
    description:
      'Approve the drawings and we begin production. German-engineered quality, UL listed components, 21-day turnaround.',
  },
  {
    number: '04',
    title: 'Blind Ship to Job Site',
    description:
      'We ship direct to your client\u2019s job site in your name. No Sunlite branding. Your client sees only your company.',
  },
]

export function HowItWorks() {
  return (
    <Section dark>
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="From artwork to installation \u2014 here is how wholesale works."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-border to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <span className="font-heading text-4xl lg:text-5xl font-bold text-brand-gold/20">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-brand-warm-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-steel-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  )
}
