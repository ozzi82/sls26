'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, SectionHeader } from '@/components/ui/section'
import { FadeIn, ScaleOnHover } from '@/components/ui/motion'
import { Badge } from '@/components/ui/badge'
import { images } from '@/lib/images'

const showcaseProducts = [
  {
    name: 'Trimless Face-Lit Channel Letters',
    modelNumber: 'EdgeLuxe LP5',
    slug: 'edgeluxe-lp5',
    description: 'Our flagship \u2014 seamless trimless face-lit letters with no visible trim cap. German-engineered precision.',
    isBestSeller: true,
  },
  {
    name: 'Halo-Lit Standoff Mount',
    modelNumber: 'EdgeLuxe LP3.1',
    slug: 'edgeluxe-lp31',
    description: 'Dramatic backlit glow with elegant standoff mounting for an upscale, architectural look.',
  },
  {
    name: 'Face-Lit Acrylic',
    modelNumber: 'EdgeLuxe LP11-F',
    slug: 'edgeluxe-lp11-f',
    description: '30mm cast block acrylic with embedded LEDs for uniform face lighting. IP67 waterproof.',
  },
  {
    name: 'Face & Halo Combo',
    modelNumber: 'EdgeLuxe LP11-FB',
    slug: 'edgeluxe-lp11-fb',
    description: 'The ultimate visibility solution \u2014 face and halo illumination combined in cast block acrylic.',
  },
]

export function ProductShowcase() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeader
            title="Built for Sign Professionals"
            subtitle="Every product is German-engineered, UL listed, and backed by a 3-year warranty."
          />
        </FadeIn>

        <div className="space-y-6">
          {showcaseProducts.map((product, i) => {
            const heroImg = images.products[product.slug] || images.showcase[0]

            return (
              <FadeIn key={product.slug} delay={i * 0.1}>
                <ScaleOnHover scale={1.01}>
                  <Link href={`/products/${product.slug}`} className="block group">
                    <div className="relative overflow-hidden rounded-sm border border-brand-border hover:border-brand-gold/30 transition-colors duration-300">
                      <div className="grid md:grid-cols-[1.5fr_1fr] min-h-[280px] lg:min-h-[320px]">
                        {/* Product hero image */}
                        <div className="relative bg-brand-charcoal overflow-hidden">
                          <Image
                            src={heroImg}
                            alt={`${product.modelNumber} - ${product.name}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 60vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-dark/30" />
                          {/* Hover glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-brand-gold/10 via-transparent to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-8 lg:p-12 bg-brand-dark">
                          {product.isBestSeller && (
                            <Badge variant="gold" className="mb-4 w-fit">
                              Best Seller
                            </Badge>
                          )}
                          <p className="text-xs font-medium uppercase tracking-wider text-brand-gold/60 mb-2">
                            {product.modelNumber}
                          </p>
                          <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-brand-warm-white group-hover:text-brand-gold transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="mt-3 text-brand-steel-light leading-relaxed">
                            {product.description}
                          </p>
                          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-brand-gold">
                            <span>Learn More</span>
                            <svg
                              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScaleOnHover>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-brand-gold font-medium hover:text-brand-gold-light transition-colors group"
            >
              <span>View All Products</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}
