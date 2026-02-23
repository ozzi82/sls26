import type { Metadata } from 'next'
import Image from 'next/image'
import { Container, Section } from '@/components/ui/section'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'About | German-Engineered Wholesale Signage',
  description:
    'Sunlite Signs is a wholesale-only manufacturer of premium LED channel letters, built on a German engineering partnership with LKF Lichtwerbung in Nuremberg. 25+ years of industry experience.',
}

const qualityPoints = [
  {
    title: 'UL Listed',
    description: 'All electrical components are UL listed and UL 48 compliant for safe, code-approved installations.',
  },
  {
    title: 'IP67 Waterproof',
    description: 'Every product is IP67 sealed for complete protection against dust and water ingress.',
  },
  {
    title: '3-Year Warranty',
    description: 'We stand behind every product with a comprehensive 3-year warranty covering materials and workmanship.',
  },
  {
    title: 'Full Documentation',
    description: 'Every order ships with production drawings, wiring diagrams, 1:1 mounting patterns, and UL documentation.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-0 md:pt-36">
      {/* Hero Section */}
      <Container>
        <div className="max-w-3xl mb-20 md:mb-28">
          <FadeIn>
            <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.2em] mb-4">
              About Sunlite Signs
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white leading-[1.15]">
              Precision Signage, Engineered in Germany
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-brand-steel-light leading-relaxed">
              Sunlite Signs was founded on a simple premise: sign companies deserve
              a wholesale partner that delivers genuine quality, not just low prices.
              Our founder, a German materials science engineer with over 25 years in
              the signage industry, built this company around engineering precision
              and a commitment to the sign professionals who trust us with their
              projects.
            </p>
          </FadeIn>
        </div>
      </Container>

      {/* Engineering Partnership */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-warm-white">
                  The Nuremberg Engineering Partnership
                </h2>
                <div className="mt-6 space-y-4 text-brand-steel-light leading-relaxed">
                  <p>
                    Every Sunlite Signs product is designed in partnership with LKF
                    Lichtwerbung, a precision signage engineering firm based in
                    Nuremberg, Germany. This isn&apos;t a branding exercise &mdash; it&apos;s
                    an active R&amp;D collaboration that shapes every product we
                    manufacture.
                  </p>
                  <p>
                    LKF brings decades of German engineering discipline to our
                    product development process. From material selection to LED
                    circuit design to weatherproofing standards, every technical
                    decision is made with engineering rigor that goes well beyond
                    industry norms.
                  </p>
                  <p>
                    The result is a product line that looks better, lasts longer, and
                    installs cleaner than what you&apos;ll find from typical wholesale
                    suppliers. Your clients may not know the engineering behind the
                    letters &mdash; but they&apos;ll see the difference.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border">
                <Image
                  src={images.about.engineering}
                  alt="Engineering and precision manufacturing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Wholesale Only */}
      <Section dark>
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-warm-white">
                Wholesale Only. By Design.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-lg text-brand-steel-light leading-relaxed">
                <p>
                  We exist to make sign companies more profitable. That means we
                  sell exclusively to sign professionals &mdash; never to their
                  clients, never to the public.
                </p>
                <p>
                  We don&apos;t take retail orders. We don&apos;t undercut you on projects.
                  We don&apos;t put our name on your work. When your client sees the
                  finished sign, they see your company &mdash; not ours. You keep the
                  margin, you build the relationship, and you come back to us for
                  the next project.
                </p>
                <p>
                  That&apos;s the partnership model we believe in, and it&apos;s why the sign
                  companies that work with us stay with us.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Quality Standards */}
      <Section>
        <Container>
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-warm-white text-center mb-14">
              Quality Standards
            </h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point) => (
              <StaggerItem key={point.title}>
                <div className="rounded-sm border border-brand-border bg-brand-surface p-6 h-full">
                  <h3 className="font-heading text-lg font-semibold text-brand-gold mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-brand-steel-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-brand-black">
        <Container>
          <div className="text-center">
            <FadeIn>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-warm-white">
                Ready to Work Together?
              </h2>
              <p className="mt-3 text-brand-steel-light">
                Get a wholesale quote in 24&ndash;48 hours. No minimums on your first order.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Request a Quote
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  )
}
