'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/motion'
import { images } from '@/lib/images'

interface CategoryBlockProps {
  title: string
  description: string
  image: string
  imageAlt: string
  href?: string
  ctaLabel?: string
  reversed?: boolean
  dark?: boolean
}

function CategoryBlock({
  title,
  description,
  image,
  imageAlt,
  href,
  ctaLabel,
  reversed = false,
  dark = true,
}: CategoryBlockProps) {
  return (
    <section className={dark ? 'bg-brand-black' : 'bg-brand-surface'}>
      <Container>
        <div
          className={`py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center`}
        >
          {/* Text */}
          <FadeIn
            direction={reversed ? 'right' : 'left'}
            className={reversed ? 'md:order-2' : 'md:order-1'}
          >
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-warm-white">
                {title}
              </h2>
              <p className="mt-4 text-brand-steel-light leading-relaxed text-base md:text-lg">
                {description}
              </p>
              {href && ctaLabel && (
                <div className="mt-8">
                  <Button href={href} variant="outline" size="md">
                    {ctaLabel}
                  </Button>
                </div>
              )}
            </div>
          </FadeIn>

          {/* Image */}
          <FadeIn
            direction={reversed ? 'left' : 'right'}
            className={reversed ? 'md:order-1' : 'md:order-2'}
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/10 via-transparent to-transparent" />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

export function CategoryBlocks() {
  return (
    <>
      {/* Social Proof Strip */}
      <section className="bg-brand-surface border-y border-brand-border">
        <Container>
          <div className="py-5 md:py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <FadeIn delay={0.1}>
              <span className="text-sm text-brand-steel-light font-medium tracking-wide">
                Trusted by <span className="text-brand-warm-white font-semibold">200+</span> Sign Professionals Nationwide
              </span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="hidden md:flex items-center gap-8">
                <span className="flex items-center gap-2 text-xs text-brand-steel">
                  <svg className="w-4 h-4 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  UL Listed
                </span>
                <span className="flex items-center gap-2 text-xs text-brand-steel">
                  <svg className="w-4 h-4 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  IP67 Waterproof
                </span>
                <span className="flex items-center gap-2 text-xs text-brand-steel">
                  <svg className="w-4 h-4 text-brand-gold/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ships USA &amp; Canada
                </span>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Complimentary Engineering Services */}
      <CategoryBlock
        title="Complimentary Engineering Services"
        description="Every order includes production drawings, day and night renderings, wiring diagrams, and 1:1 mounting patterns — at no extra charge. Our German engineering partnership with LKF Lichtwerbung in Nuremberg means your projects get the precision and documentation that makes permitting, client approval, and installation smoother."
        image={images.about.engineering}
        imageAlt="German-engineered signage production drawings and technical documentation"
        href="/about#services"
        ctaLabel="Learn More"
        dark={true}
      />

      {/* EdgeLuxe LP Letterforms */}
      <CategoryBlock
        title="Channel Letters & Letterforms"
        description="Our flagship EdgeLuxe LP product line — trimless face-lit, halo-lit, cast acrylic, faux neon, and flat cutout letters. 12 illumination styles from fabricated stainless steel and cast block acrylic. German-engineered, UL listed, IP67 waterproof. The channel letters your clients will remember."
        image="/images/hero-breitling.jpeg"
        imageAlt="Breitling storefront with illuminated channel letters"
        href="/products"
        ctaLabel="EdgeLuxe Letterforms"
        reversed={true}
        dark={false}
      />

      {/* Cabinet & Flag Signs */}
      <CategoryBlock
        title="Cabinet & Flag Signs"
        description="Custom-fabricated illuminated cabinet signs and projecting blade signs for retail, hospitality, and commercial projects. Single-sided or double-sided with internal LED illumination and push-through acrylic letter options. Built from fabricated aluminum with serviceable LED access."
        image={images.cabinet.hero}
        imageAlt="Illuminated cabinet sign with push-through acrylic letters"
        href="/products/cabinet-flag-signs"
        ctaLabel="Cabinet & Flag Signs"
        dark={true}
      />

      {/* SEG Lightboxes */}
      <CategoryBlock
        title="SEG Lightboxes"
        description="The EdgeLuxe Frame system — 25+ silicone-edged graphic lightbox profiles in single-sided and double-sided configurations. From ultra-slim 15mm non-lit frames to deep 160mm backlit displays. Snap-in fabric graphics for fast changeouts. Perfect for retail, hospitality, exhibitions, and corporate environments."
        image={images.seg.hero}
        imageAlt="EdgeLuxe Frame SEG lightbox display with backlit fabric graphic"
        href="/products/seg-lightboxes"
        ctaLabel="SEG Light Boxes"
        reversed={true}
        dark={false}
      />

      {/* Our Story CTA Bar — moved to bottom as transition to Final CTA */}
      <section className="bg-brand-gold">
        <Container>
          <div className="py-6 md:py-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-brand-black">
                Our Story.
              </h2>
              <p className="mt-1 text-sm text-brand-black/70 max-w-lg">
                Born from a German engineering partnership with LKF Lichtwerbung in Nuremberg — bringing European precision signage to North American sign companies since 2022.
              </p>
            </div>
            <Button
              href="/about"
              variant="primary"
              size="md"
              className="bg-brand-black text-brand-warm-white hover:bg-brand-charcoal flex-shrink-0"
            >
              Read Our Story
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
