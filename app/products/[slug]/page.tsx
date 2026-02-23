import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { products, getProductBySlug, getRelatedProducts } from '@/lib/products'
import { Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/metadata'
import { images } from '@/lib/images'
import { ProductDetailGallery } from '@/components/sections/product-detail-gallery'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  const categoryLabel = product.category === 'fabricated-channel-letters'
    ? 'Channel Letters'
    : product.category === 'cast-block-acrylic'
    ? 'Cast Block Acrylic Letters'
    : 'Signage'

  return {
    title: `${product.modelNumber} - ${product.name} | Wholesale ${categoryLabel} | Sunlite Signs`,
    description: `${product.shortDescription} German-engineered, UL listed, IP67 waterproof. Wholesale only \u2014 24-48hr quotes, 5-7 day production across USA & Canada. ${product.modelNumber} by Sunlite Signs.`,
    openGraph: {
      title: `${product.modelNumber} - ${product.name} | Wholesale EdgeLuxe Signage | Sunlite Signs`,
      description: `${product.shortDescription} German-engineered, UL listed, 3-year warranty. Wholesale only for sign companies.`,
      images: [{ url: product.image, width: 1200, height: 630 }],
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const related = getRelatedProducts(product)

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: 'Home', url: 'https://sunlitesigns.com' },
              { name: 'Products', url: 'https://sunlitesigns.com/products' },
              { name: product.name, url: `https://sunlitesigns.com/products/${product.slug}` },
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
          <span className="text-brand-steel-light">{product.modelNumber} - {product.name}</span>
        </nav>

        {/* Top Section: Image Gallery + Summary */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-24">
          {/* Interactive Image Gallery with glow hover */}
          <ProductDetailGallery
            slug={product.slug}
            name={product.name}
            modelNumber={product.modelNumber}
          />

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {product.isBestSeller && <Badge variant="gold">Best Seller</Badge>}
              {product.isQuickShip && <Badge variant="steel">Quick Ship</Badge>}
              <Badge variant="steel">{product.modelNumber}</Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-brand-warm-white">
              {product.name}
            </h1>

            <p className="mt-2 text-lg text-brand-gold font-medium">
              {product.tagline}
            </p>

            <p className="mt-5 text-brand-steel-light leading-relaxed">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature) => (
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
                {product.specs.map((spec, i) => (
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
            This product works particularly well for:
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {product.applications.map((app) => (
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

        {/* Related Products with glow hover */}
        {related.length > 0 && (
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-warm-white mb-6">
              Related Products
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className="group block rounded-sm border border-brand-border hover:border-brand-gold/30 bg-brand-surface overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,168,83,0.12)]"
                >
                  <div className="relative aspect-[4/3] bg-brand-charcoal overflow-hidden">
                    <Image
                      src={images.products[rp.slug] || images.showcase[0]}
                      alt={`${rp.modelNumber} - ${rp.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Glow overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/15 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-brand-gold/10 rounded-full blur-[40px]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-brand-gold/60 mb-1">
                      {rp.modelNumber}
                    </p>
                    <h3 className="font-heading text-base font-semibold text-brand-warm-white group-hover:text-brand-gold transition-colors leading-snug">
                      {rp.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-brand-steel line-clamp-2">
                      {rp.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
