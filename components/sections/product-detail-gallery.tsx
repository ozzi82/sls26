'use client'

import { useState } from 'react'
import Image from 'next/image'
import { images } from '@/lib/images'

interface ProductDetailGalleryProps {
  slug: string
  name: string
  modelNumber: string
}

export function ProductDetailGallery({ slug, name, modelNumber }: ProductDetailGalleryProps) {
  const dayNight = images.dayNight[slug]
  const heroImg = images.products[slug] || images.showcase[0]

  // null = default day→night hover mode, string = show a specific static image
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="group/main relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border">
        {selectedImage ? (
          /* Static view — user clicked a thumbnail */
          <Image
            src={selectedImage}
            alt={`${modelNumber} - ${name}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : dayNight ? (
          /* Default: Day→Night hover */
          <>
            <Image
              src={dayNight.day}
              alt={`${modelNumber} - ${name} - Day view`}
              fill
              className="object-cover transition-opacity duration-700 ease-in-out group-hover/main:opacity-0"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <Image
              src={dayNight.night}
              alt={`${modelNumber} - ${name} - Night view (illuminated)`}
              fill
              className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover/main:opacity-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Day/Night indicator */}
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-black/70 backdrop-blur-sm border border-white/10 transition-all duration-500">
              <svg className="w-3.5 h-3.5 text-brand-gold/70 block group-hover/main:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
              <svg className="w-3.5 h-3.5 text-brand-gold hidden group-hover/main:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wider text-brand-steel-light group-hover/main:text-brand-gold transition-colors duration-500">
                <span className="inline group-hover/main:hidden">Day View</span>
                <span className="hidden group-hover/main:inline">Night View</span>
              </span>
            </div>
          </>
        ) : (
          <Image
            src={heroImg}
            alt={`${modelNumber} - ${name}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        )}
      </div>

      {/* Bottom thumbnails: 2 customer images + 1 with hover effect */}
      <div className="grid grid-cols-3 gap-3">
        {/* Thumbnail 1: Customer/product hero image */}
        <button
          onClick={() => setSelectedImage(heroImg)}
          className={`relative aspect-[4/3] rounded-sm bg-brand-charcoal overflow-hidden cursor-pointer transition-all duration-300 ${
            selectedImage === heroImg
              ? 'border-2 border-brand-gold/50'
              : 'border border-brand-border hover:border-brand-steel'
          }`}
        >
          <Image
            src={heroImg}
            alt={`${name} - Product shot`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 33vw, 17vw"
          />
        </button>

        {/* Thumbnail 2: Customer/product day image */}
        <button
          onClick={() => setSelectedImage(dayNight ? dayNight.day : heroImg)}
          className={`relative aspect-[4/3] rounded-sm bg-brand-charcoal overflow-hidden cursor-pointer transition-all duration-300 ${
            selectedImage === (dayNight ? dayNight.day : heroImg)
              ? 'border-2 border-brand-gold/50'
              : 'border border-brand-border hover:border-brand-steel'
          }`}
        >
          <Image
            src={dayNight ? dayNight.day : heroImg}
            alt={`${name} - Installed`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 33vw, 17vw"
          />
        </button>

        {/* Thumbnail 3: Day→Night hover effect (clicking resets to hover mode) */}
        <button
          onClick={() => setSelectedImage(null)}
          className={`group/thumb relative aspect-[4/3] rounded-sm bg-brand-charcoal overflow-hidden cursor-pointer transition-all duration-300 ${
            selectedImage === null
              ? 'border-2 border-brand-gold/50'
              : 'border border-brand-border hover:border-brand-steel'
          }`}
        >
          {dayNight ? (
            <>
              <Image
                src={dayNight.day}
                alt={`${name} - Day`}
                fill
                className="object-cover transition-opacity duration-700 ease-in-out group-hover/thumb:opacity-0"
                sizes="(max-width: 1024px) 33vw, 17vw"
              />
              <Image
                src={dayNight.night}
                alt={`${name} - Night`}
                fill
                className="object-cover transition-opacity duration-700 ease-in-out opacity-0 group-hover/thumb:opacity-100"
                sizes="(max-width: 1024px) 33vw, 17vw"
              />
              <div className="absolute bottom-1.5 left-1.5 text-[9px] font-medium uppercase tracking-wider bg-brand-black/60 px-1.5 py-0.5 rounded transition-colors duration-500 text-brand-steel-light group-hover/thumb:text-brand-gold">
                <span className="inline group-hover/thumb:hidden">Day</span>
                <span className="hidden group-hover/thumb:inline">Night</span>
              </div>
            </>
          ) : (
            <Image
              src={heroImg}
              alt={`${name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 33vw, 17vw"
            />
          )}
        </button>
      </div>
    </div>
  )
}
