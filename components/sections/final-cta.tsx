'use client'

import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/motion'
import { Container } from '@/components/ui/section'

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-brand-black noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-brand-black to-brand-black" />
        {/* Subtle gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-gold/3 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white">
              Ready to Elevate Your Next Project?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-5 text-lg text-brand-steel-light">
              Get a wholesale quote in 24&ndash;48 hours. No minimums on your first
              order.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button
                href="tel:+16892940912"
                variant="outline"
                size="lg"
              >
                Call Us: (689) 294-0912
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
