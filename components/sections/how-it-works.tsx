'use client'

import { Section, Container, SectionHeader } from '@/components/ui/section'
import { StaggerContainer, StaggerItem } from '@/components/ui/motion'

const steps = [
  {
    number: '01',
    title: 'Send Your Specs',
    description:
      'Email us your artwork, dimensions, and specs. Or just tell us what you need \u2014 we\u2019ll figure out the rest.',
  },
  {
    number: '02',
    title: 'Review Drawings',
    description:
      'Within 24\u201348 hours, you\u2019ll receive production drawings with day and night renderings for client approval.',
  },
  {
    number: '03',
    title: 'We Manufacture',
    description:
      'Your order goes into production with German-engineered quality standards and UL listed components.',
  },
  {
    number: '04',
    title: 'You Install',
    description:
      'Your order arrives in ~21 days, ready to install. Full documentation, wiring diagrams, and 1:1 patterns included.',
  },
]

export function HowItWorks() {
  return (
    <Section dark>
      <Container>
        <SectionHeader
          title="How It Works"
          subtitle="From first contact to installation, we make it straightforward."
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
