'use client'

import { Container } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/motion'

// EDITABLE: Update these numbers as your business grows
const kpis = [
  { value: '5,000+', label: 'Channel Letters Produced' },
  { value: '99%', label: 'On-Time Delivery Rate' },
  { value: '20+', label: 'States Served' },
]

export function KpiRow() {
  return (
    <section className="bg-brand-surface border-y border-brand-border">
      <Container>
        <div className="py-10 md:py-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {kpis.map((kpi, i) => (
            <FadeIn key={kpi.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-bold text-brand-gold">
                  {kpi.value}
                </p>
                <p className="mt-1 text-sm text-brand-steel uppercase tracking-wider">
                  {kpi.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
