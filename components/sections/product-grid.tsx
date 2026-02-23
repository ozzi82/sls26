'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products, categories } from '@/lib/products'
import { Badge } from '@/components/ui/badge'
import { FadeIn, ScaleOnHover } from '@/components/ui/motion'
import { images } from '@/lib/images'

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-brand-gold text-brand-black'
                : 'bg-brand-charcoal text-brand-steel-light border border-brand-border hover:border-brand-steel-dark hover:text-brand-warm-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product, i) => {
          const heroImg = images.products[product.slug] || images.showcase[0]

          return (
            <FadeIn key={product.slug} delay={i * 0.05}>
              <ScaleOnHover scale={1.02}>
                <Link
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <div className="h-full rounded-sm border border-brand-border hover:border-brand-gold/30 bg-brand-surface overflow-hidden transition-colors duration-300">
                    {/* Product hero image */}
                    <div className="relative aspect-[4/3] bg-brand-charcoal overflow-hidden">
                      <Image
                        src={heroImg}
                        alt={`${product.modelNumber} - ${product.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-brand-gold/10 via-transparent to-transparent" />
                      {product.isBestSeller && (
                        <div className="absolute top-3 left-3 z-10">
                          <Badge variant="gold">Best Seller</Badge>
                        </div>
                      )}
                      {product.isQuickShip && (
                        <div className="absolute top-3 left-3 z-10">
                          <Badge variant="steel">Quick Ship</Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-brand-gold/70 mb-1">
                        {product.modelNumber}
                      </p>
                      <h3 className="font-heading text-lg font-semibold text-brand-warm-white group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm text-brand-steel leading-relaxed line-clamp-2">
                        {product.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-brand-gold">
                        <span>View Details</span>
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScaleOnHover>
            </FadeIn>
          )
        })}
      </div>
    </>
  )
}
