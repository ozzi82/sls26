'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/motion'
import { images } from '@/lib/images'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Premium wholesale channel letters illuminated on a luxury storefront"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlays — dark left for text, fully transparent right to show storefront */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/50 via-35% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
        {/* Warm gold ambient glow */}
        <div className="absolute top-1/4 right-1/6 w-[500px] h-[500px] bg-brand-gold/8 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 lg:pt-36 lg:pb-28 px-5 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <FadeIn direction="left" delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-brand-gold" />
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.25em]">
                Trade Only &mdash; Wholesale Sign Fabrication
              </p>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn direction="left" delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-brand-warm-white">
              Wholesale Channel Letter
              <br />
              &amp; <span className="text-gradient-gold">Sign Fabrication</span>
              <br />
              Partner.
            </h1>
          </FadeIn>

          {/* Subheadline */}
          <FadeIn direction="left" delay={0.35}>
            <p className="mt-7 text-lg md:text-xl text-brand-steel-light/90 leading-relaxed max-w-lg">
              Built for sign companies, fabricators &amp; agencies.
              Fast quotes. Reliable production. Private label shipping.
            </p>
          </FadeIn>

          {/* CTAs */}
          <FadeIn direction="left" delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Request Wholesale Pricing
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                View Product Catalog
              </Button>
            </div>
            <p className="mt-4 text-xs text-brand-steel italic">
              Trade-only manufacturer. We do not sell to end customers.
            </p>
          </FadeIn>

          {/* Quick proof — small inline stats */}
          <FadeIn direction="left" delay={0.6}>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="font-heading text-2xl font-bold text-brand-warm-white">24hr</p>
                <p className="text-xs text-brand-steel uppercase tracking-wider">Quote Turnaround</p>
              </div>
              <div className="h-8 w-px bg-brand-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-brand-warm-white">21</p>
                <p className="text-xs text-brand-steel uppercase tracking-wider">Day Production</p>
              </div>
              <div className="h-8 w-px bg-brand-border" />
              <div>
                <p className="font-heading text-2xl font-bold text-brand-warm-white">Blind</p>
                <p className="text-xs text-brand-steel uppercase tracking-wider">Ship Included</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-brand-steel/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-brand-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
