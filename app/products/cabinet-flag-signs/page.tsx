import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { generateBreadcrumbSchema } from '@/lib/metadata'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Cabinet & Flag Signs | Wholesale Blade Signs & Illuminated Cabinets | Sunlite Signs',
  description:
    'Wholesale illuminated cabinet signs and blade signs for sign professionals. German-engineered, UL listed, 3-year warranty. Custom shapes, double-sided illumination, push-through options. Ships across USA & Canada.',
  openGraph: {
    title: 'Cabinet & Flag Signs | Wholesale EdgeLuxe Signage | Sunlite Signs',
    description:
      'Wholesale illuminated cabinet signs and blade signs. German-engineered, UL listed, 3-year warranty. For sign companies only.',
  },
}

const specs = [
  { label: 'Sign Types', value: 'Blade signs, projecting signs, wall-mounted cabinets, monument inserts' },
  { label: 'Materials', value: 'Fabricated aluminum with stainless steel or aluminum face' },
  { label: 'Illumination', value: 'Internal LED illumination, push-through acrylic options' },
  { label: 'Sides', value: 'Single-sided or double-sided configurations' },
  { label: 'Shape', value: 'Custom shapes — rectangular, round, oval, contoured to logo' },
  { label: 'Mounting', value: 'Wall bracket, projecting arm, or flush mount' },
  { label: 'Customization', value: 'Any PMS color, vinyls, digital print, push-through letters' },
  { label: 'Weatherproofing', value: 'Sealed construction for outdoor installations' },
  { label: 'Maintenance', value: 'Serviceable LEDs with hinged or removable face' },
  { label: 'Warranty', value: '3 Years' },
  { label: 'Certification', value: 'UL Listed' },
  { label: 'Production', value: '10–15 days' },
]

const features = [
  'Single-sided or double-sided illumination',
  'Custom shapes and sizes to match any brand',
  'Push-through acrylic letter option for dimensional look',
  'Internal LED modules for even light distribution',
  'Fabricated aluminum construction for durability',
  'Hinged or removable face for easy LED servicing',
  'Wall bracket and projecting arm mounting options',
  'PMS color matching and digital print available',
]

const applications = [
  'Retail storefronts and shopping plazas',
  'Restaurants, cafes, and bars',
  'Hotels and hospitality',
  'Multi-tenant building directories',
  'Street-level blade signs for pedestrian visibility',
  'Monument sign inserts',
  'Mixed-use and urban commercial developments',
  'Corporate campus wayfinding',
]

// Placeholder images — replace with actual cabinet/blade sign images
const galleryImages = [
  images.projects[8], // blade sign reference from projects
  images.projects[0],
  images.projects[1],
]

export default function CabinetFlagSignsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://sunlitesigns.com' },
              { name: 'Products', url: 'https://sunlitesigns.com/products' },
              { name: 'Cabinet & Flag Signs', url: 'https://sunlitesigns.com/products/cabinet-flag-signs' },
            ])
          ),
        }}
      />
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-brand-steel">
          <Link href="/products" className="hover:text-brand-warm-white transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-brand-steel-light">Cabinet & Flag Signs</span>
        </nav>

        {/* Top Section: Image Gallery + Summary */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border">
              <Image
                src={galleryImages[0]}
                alt="EdgeLuxe Cabinet & Flag Signs"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] rounded-sm bg-brand-charcoal overflow-hidden border border-brand-border"
                >
                  <Image
                    src={img}
                    alt={`Cabinet & Flag Signs - View ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 17vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="steel">Cabinet Signs</Badge>
              <Badge variant="steel">Blade Signs</Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-brand-warm-white">
              Cabinet & Flag Signs
            </h1>

            <p className="mt-2 text-lg text-brand-gold font-medium">
              Illuminated cabinet signs and projecting blade signs built for impact.
            </p>

            <p className="mt-5 text-brand-steel-light leading-relaxed">
              Custom-fabricated illuminated cabinet signs and blade signs for retail, hospitality, and commercial projects.
              Available in single-sided or double-sided configurations with internal LED illumination.
              Push-through acrylic letter options for a dimensional, high-end look.
              Built from fabricated aluminum with serviceable LED access — designed for sign professionals
              who need a quality product that installs clean and lasts.
            </p>

            {/* Key Features */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-brand-steel-light"
                  >
                    <svg
                      className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button href="tel:+16892940912" variant="outline" size="md">
                Call: (689) 294-0912
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-16 lg:mb-24">
          <h2 className="font-heading text-2xl font-semibold text-brand-warm-white mb-6">
            Technical Specifications
          </h2>
          <div className="rounded-sm border border-brand-border overflow-hidden">
            <table className="w-full">
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-charcoal'}
                  >
                    <td className="px-5 py-3.5 text-sm font-medium text-brand-steel-light w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-brand-warm-white">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications */}
        <div className="mb-16 lg:mb-24">
          <h2 className="font-heading text-2xl font-semibold text-brand-warm-white mb-4">
            Ideal Applications
          </h2>
          <p className="text-brand-steel-light leading-relaxed max-w-3xl">
            Cabinet and blade signs are ideal for:
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {applications.map((app) => (
              <li
                key={app}
                className="flex items-start gap-2.5 text-sm text-brand-steel-light"
              >
                <span className="text-brand-gold mt-0.5">&#8226;</span>
                {app}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="rounded-sm border border-brand-border bg-brand-surface p-8 sm:p-12 text-center">
          <h2 className="font-heading text-2xl font-semibold text-brand-warm-white mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-brand-steel-light mb-6 max-w-2xl mx-auto">
            Send us your specs or artwork and we&apos;ll return production drawings, renderings, and a detailed quote within 24–48 hours.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Request a Quote
          </Button>
        </div>
      </Container>
    </div>
  )
}
