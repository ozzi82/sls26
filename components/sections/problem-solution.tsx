'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/ui/motion'
import { Section, Container, SectionHeader } from '@/components/ui/section'
import { images } from '@/lib/images'

export function ProblemSolution() {
  return (
    <Section dark>
      <Container>
        <FadeIn>
          <SectionHeader title="See the Difference" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <FadeIn delay={0.1}>
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border">
                <Image
                  src={images.comparison.traditional}
                  alt="Traditional channel letter with visible trim cap"
                  fill
                  className="object-cover opacity-70"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-brand-black/40" />
                {/* X overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-black/60 border border-brand-steel-dark/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-steel-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 7l10 10M17 7l-10 10" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-steel border border-brand-border rounded-full">
                  Traditional Trim Cap
                </span>
              </div>
            </div>
          </FadeIn>

          {/* EdgeLuxe Trimless */}
          <FadeIn delay={0.2}>
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-gold/20">
                <Image
                  src={images.comparison.trimless}
                  alt="EdgeLuxe trimless channel letter with clean seamless face"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-brand-black/20" />
                {/* Checkmark overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {/* Subtle glow */}
                <div className="absolute -inset-2 bg-brand-gold/5 rounded-sm blur-md -z-10" />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-brand-gold border border-brand-gold/30 rounded-full">
                  EdgeLuxe Trimless
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-12 text-center text-brand-steel-light leading-relaxed max-w-3xl mx-auto text-lg">
            Traditional channel letters show a visible plastic trim cap around the
            face &mdash; it&apos;s the industry standard, and it looks like the industry
            standard. EdgeLuxe trimless letters eliminate it completely. The result
            is a clean, seamless face that looks premium to your client and makes
            your work stand out. Same installation process. Better result.
          </p>
        </FadeIn>
      </Container>
    </Section>
  )
}
