import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/section'
import { ProductGrid } from '@/components/sections/product-grid'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Wholesale Signage Products | Channel Letters, Cabinet Signs, SEG Lightboxes | Sunlite Signs',
  description:
    'Browse our full catalog of wholesale signage: EdgeLuxe LP channel letters, cabinet & blade signs, and SEG lightboxes. German-engineered, UL listed, 3-year warranty. 24-48hr quotes across USA & Canada.',
  openGraph: {
    title: 'Wholesale Signage Products | EdgeLuxe by Sunlite Signs',
    description:
      'German-engineered wholesale signage: channel letters, cabinet signs, blade signs, and SEG lightboxes. UL listed, 3-year warranty.',
  },
}

const productCategories = [
  {
    title: 'Channel Letters & Letterforms',
    description:
      'Trimless face-lit, halo-lit, cast acrylic, faux neon, and flat cutout letters. 12 illumination styles across fabricated stainless steel and cast block acrylic.',
    image: images.showcase[0],
    href: '#letterforms',
    hasGrid: true,
  },
  {
    title: 'Cabinet & Flag Signs',
    description:
      'Illuminated cabinet signs and projecting blade signs. Single-sided or double-sided with internal LED illumination and push-through options.',
    image: images.projects[8],
    href: '/products/cabinet-flag-signs',
    hasGrid: false,
  },
  {
    title: 'SEG Lightboxes',
    description:
      '25+ silicone-edged graphic lightbox profiles. Single-sided and double-sided frames from 15mm to 160mm. Snap-in fabric graphics for fast changeouts.',
    image: images.seg.hero,
    href: '/products/seg-lightboxes',
    hasGrid: false,
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <div className="mb-14 md:mb-18 max-w-3xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white">
            Wholesale Signage Products
          </h1>
          <p className="mt-4 text-lg text-brand-steel-light">
            The complete EdgeLuxe product line — channel letters, cabinet signs, and SEG lightboxes.
            German-engineered for sign professionals. Every product is UL listed and backed by a 3-year warranty.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {productCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group block rounded-sm border border-brand-border hover:border-brand-gold/30 bg-brand-surface overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,168,83,0.12)]"
            >
              <div className="relative aspect-[4/3] bg-brand-charcoal overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/15 via-transparent to-transparent" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-brand-warm-white group-hover:text-brand-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-brand-steel line-clamp-3">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Channel Letters Grid */}
        <div id="letterforms">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-brand-warm-white mb-2">
            Channel Letters & Letterforms
          </h2>
          <p className="text-brand-steel-light mb-10">
            Browse all EdgeLuxe LP products — fabricated channel letters and cast block acrylic letters.
          </p>
          <ProductGrid />
        </div>

        {/* Bottom SEO content */}
        <div className="mt-16 pt-12 border-t border-brand-border max-w-3xl">
          <h2 className="font-heading text-xl font-semibold text-brand-warm-white mb-4">
            About Our Wholesale Signage Products
          </h2>
          <div className="space-y-3 text-sm text-brand-steel leading-relaxed">
            <p>
              Sunlite Signs manufactures the EdgeLuxe line of wholesale signage exclusively for sign
              companies. Our product catalog includes channel letters and letterforms (EdgeLuxe LP),
              illuminated cabinet and blade signs, and SEG lightboxes (EdgeLuxe Frame) — covering the
              full range of commercial signage needs.
            </p>
            <p>
              All products are designed through our German engineering partnership with
              LKF Lichtwerbung in Nuremberg and manufactured with Samsung/Osram SMD LEDs,
              UL listed power supplies, and IP67 waterproof construction. We deliver
              wholesale signage anywhere in the USA and Canada with quotes returned in
              24-48 hours including production drawings and day/night renderings.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
