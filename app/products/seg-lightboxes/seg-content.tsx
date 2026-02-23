'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ImageLightbox } from '@/components/ui/image-lightbox'
import { images } from '@/lib/images'

const singleSidedFrames = [
  { model: 'SNL-H30', depth: '30mm', profile: '7.3mm', illumination: 'Illuminated / Non-Illuminated', notes: 'Hanging frame, usable for alcove areas' },
  { model: 'SNL-15', depth: '15mm', profile: '25mm', illumination: 'Non-Illuminated', notes: 'Ultra-slim wall mount' },
  { model: 'SNL18', depth: '18mm', profile: '45.1mm', illumination: 'Non-Illuminated', notes: 'Wall mount' },
  { model: 'SNL-M30', depth: '30mm', profile: '24.9mm', illumination: 'Non-Illuminated', notes: 'Modular profile, usable for modular displays' },
  { model: 'SNL30', depth: '30mm', profile: '36mm', illumination: 'Non-Illuminated', notes: 'Wall mount' },
  { model: 'SL45', depth: '45mm', profile: '43.9mm', illumination: 'Backlit Illuminated', notes: 'Wall mount' },
  { model: 'SL-ECO45', depth: '45mm', profile: '37.5mm', illumination: 'Backlit Illuminated', notes: 'Economy profile, wall mount' },
  { model: 'SL-DIAMOND', depth: '\u2014', profile: '9.17mm', illumination: 'Backlit Illuminated', notes: 'Diamond profile, usable for column covering' },
  { model: 'SL50', depth: '50mm', profile: '\u2014', illumination: 'Backlit Illuminated', notes: 'Wall mount' },
  { model: 'SL75', depth: '75mm', profile: '\u2014', illumination: 'Edgelit Illuminated', notes: 'Wall mount, radius corners available' },
  { model: 'SL-ECO80', depth: '80mm', profile: '21.4mm', illumination: 'Edgelit / Backlit', notes: 'Economy profile, wall mount' },
  { model: 'SL80', depth: '80mm', profile: '37.1mm', illumination: 'Edgelit / Backlit', notes: 'Wall mount' },
  { model: 'SL100', depth: '100mm', profile: '35.6mm', illumination: 'Edgelit / Backlit', notes: 'Wall mount' },
]

const doubleSidedFrames = [
  { model: 'DNL30', depth: '30mm', profile: '30mm', illumination: 'Plexi Illuminated', notes: 'Radius corners available' },
  { model: 'DNL40', depth: '40mm', profile: '40mm', illumination: 'Non-Illuminated', notes: '\u2014' },
  { model: 'DNL47', depth: '47.5mm', profile: '47.49mm', illumination: 'Non-Illuminated', notes: 'Big size modular display, radius corners' },
  { model: 'DL60', depth: '60mm', profile: '60mm', illumination: 'Edgelit Illuminated', notes: 'Radius corners available' },
  { model: 'DL80', depth: '80mm', profile: '80mm', illumination: 'Edgelit Illuminated', notes: 'Radius corners available' },
  { model: 'DL100', depth: '100mm', profile: '20.8mm', illumination: 'Edgelit Illuminated', notes: '\u2014' },
  { model: 'DL-M100', depth: '100mm', profile: '100mm', illumination: 'Edgelit Illuminated', notes: '\u2014' },
  { model: 'DL-ECO120', depth: '120mm', profile: '\u2014', illumination: 'Edgelit Illuminated', notes: 'Economy profile, radius corners' },
  { model: 'DL120', depth: '120mm', profile: '\u2014', illumination: 'Edgelit Illuminated', notes: 'Radius corners available' },
  { model: 'DL-AJ120', depth: '120mm', profile: '\u2014', illumination: 'Edgelit Illuminated', notes: 'Easy Connector option' },
  { model: 'DL130', depth: '130mm', profile: '130mm', illumination: 'Edgelit Illuminated', notes: 'For shop windows \u2014 Not in Stock' },
  { model: 'DL160', depth: '160mm', profile: '164.1mm', illumination: 'Edgelit Illuminated', notes: 'Radius corners available' },
  { model: 'CUBE', depth: '\u2014', profile: '44.2 \u00d7 19.9mm', illumination: 'Edgelit Illuminated', notes: '3D freestanding cube display' },
]

const specs = [
  { label: 'Frame Type', value: 'Silicone-edged graphic (SEG) tension fabric system' },
  { label: 'Configurations', value: 'Single-sided (13 profiles) and double-sided (13 profiles)' },
  { label: 'Frame Depths', value: '15mm to 160mm depending on profile' },
  { label: 'Materials', value: 'Extruded aluminum frame with anodized finish' },
  { label: 'Illumination', value: 'Non-lit, backlit, edgelit, and plexi illuminated options' },
  { label: 'Graphic System', value: 'Silicone-edged fabric graphic, tension-mounted into channel' },
  { label: 'Graphic Material', value: 'Dye-sublimation printed SEG fabric' },
  { label: 'Finish Options', value: 'Anodised aluminum or any RAL color' },
  { label: 'Mounting', value: 'Wall mount, ceiling hang, freestanding, column covering, or recessed' },
  { label: 'Corner Options', value: 'Standard or radius corners (select profiles)' },
  { label: 'Sizes', value: 'Custom sizes \u2014 any width and height within profile limits' },
  { label: 'Specialty Profiles', value: 'Diamond (column), Economy (ECO), Adjustable (AJ), Modular (M), Cube, Hanging (H)' },
  { label: 'Warranty', value: '3 Years' },
  { label: 'Certification', value: 'UL Listed' },
]

const features = [
  'Silicone-edged fabric graphics for seamless, frameless appearance',
  '25+ frame profiles \u2014 single-sided and double-sided',
  'Non-lit and LED-illuminated options across all depths',
  'Snap-in fabric graphics for fast changeouts',
  'Custom sizes to fit any wall or display space',
  'Extruded aluminum frames \u2014 lightweight yet rigid',
  'Edge-lit and backlit LED configurations for uniform illumination',
  'Economy (ECO) profiles for budget-conscious projects',
  'Freestanding cube and hanging options for retail displays',
  'Tool-free graphic installation and replacement',
]

const applications = [
  'Retail point-of-purchase and in-store displays',
  'Trade show booths and exhibition graphics',
  'Hotel and hospitality lobby signage',
  'Corporate reception and conference rooms',
  'Restaurant and QSR menu boards',
  'Airport and transit advertising displays',
  'Medical and dental office branding',
  'Museum and gallery exhibition graphics',
  'Real estate and property marketing',
  'Window displays and backlit storefront graphics',
]

const galleryImages = [
  images.seg.hero,
  images.seg.cube,
  images.seg.cover,
  images.seg.renders['sl100'],
  images.seg.renders['dl160'],
  images.seg.renders['cube'],
]

function getRenderImage(model: string): string | null {
  const key = model.toLowerCase()
  return images.seg.renders[key] || null
}

export function SEGLightboxesContent() {
  const [activeGalleryImage, setActiveGalleryImage] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-brand-steel">
          <Link href="/products" className="hover:text-brand-warm-white transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-brand-steel-light">EdgeLuxe Frame SEG Lightboxes</span>
        </nav>

        {/* Top Section: Image Gallery + Summary */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 lg:mb-24">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image — clickable to open lightbox */}
            <button
              onClick={() =>
                setLightboxImage({
                  src: galleryImages[activeGalleryImage],
                  alt: `EdgeLuxe Frame SEG Lightbox`,
                })
              }
              className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border w-full cursor-zoom-in"
            >
              <Image
                src={galleryImages[activeGalleryImage]}
                alt="EdgeLuxe Frame SEG Lightboxes"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </button>

            {/* Thumbnails — click to swap into main image */}
            <div className="grid grid-cols-5 gap-3">
              {galleryImages.slice(1).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGalleryImage(i + 1)}
                  className={`relative aspect-square rounded-sm bg-brand-charcoal overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeGalleryImage === i + 1
                      ? 'border-2 border-brand-gold/50'
                      : 'border border-brand-border hover:border-brand-steel'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`SEG Lightbox - View ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 20vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="gold">EdgeLuxe Frame</Badge>
              <Badge variant="steel">SEG Lightbox</Badge>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-brand-warm-white">
              SEG Lightboxes
            </h1>

            <p className="mt-2 text-lg text-brand-gold font-medium">
              Silicone-edged graphic light boxes &mdash; 25+ profiles, single and double-sided.
            </p>

            <p className="mt-5 text-brand-steel-light leading-relaxed">
              The EdgeLuxe Frame system is a complete line of silicone-edged graphic (SEG) lightboxes
              for retail, hospitality, corporate, and exhibition applications. Choose from 13 single-sided
              and 13 double-sided aluminum frame profiles ranging from ultra-slim 15mm non-lit frames
              to deep 160mm illuminated displays. Fabric graphics snap into the frame channel for a
              seamless, borderless appearance &mdash; and swap out in minutes for seasonal or campaign updates.
              Available in non-lit, edge-lit, and backlit LED configurations.
            </p>

            {/* Key Features */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {features.slice(0, 8).map((feature) => (
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

        {/* Single-Sided Frames */}
        <div className="mb-16 lg:mb-24">
          <h2 className="font-heading text-2xl font-semibold text-brand-warm-white mb-2">
            Single-Sided Frames
          </h2>
          <p className="text-brand-steel mb-6">
            13 profiles from ultra-slim 15mm non-lit to deep 100mm backlit &mdash; wall mount, ceiling hang, or recessed.
          </p>
          <div className="rounded-sm border border-brand-border overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-brand-charcoal border-b border-brand-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold w-16">
                    Profile
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Depth
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Illumination
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {singleSidedFrames.map((frame, i) => {
                  const renderImg = getRenderImage(frame.model)
                  return (
                    <tr
                      key={frame.model}
                      className={i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-charcoal'}
                    >
                      <td className="px-4 py-2">
                        {renderImg ? (
                          <button
                            onClick={() =>
                              setLightboxImage({
                                src: renderImg,
                                alt: `EdgeLuxe ${frame.model} — ${frame.depth} ${frame.illumination}`,
                              })
                            }
                            className="relative w-12 h-12 rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border hover:border-brand-gold/50 transition-colors cursor-zoom-in"
                          >
                            <Image
                              src={renderImg}
                              alt={`${frame.model} profile`}
                              fill
                              className="object-contain"
                              sizes="48px"
                            />
                          </button>
                        ) : (
                          <div className="w-12 h-12 rounded-sm bg-brand-charcoal border border-brand-border" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-brand-warm-white whitespace-nowrap">
                        EdgeLuxe {frame.model}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-steel-light whitespace-nowrap">
                        {frame.depth}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-steel-light">
                        {frame.illumination}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-steel-light">
                        {frame.notes}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Double-Sided Frames */}
        <div className="mb-16 lg:mb-24">
          <h2 className="font-heading text-2xl font-semibold text-brand-warm-white mb-2">
            Double-Sided Frames
          </h2>
          <p className="text-brand-steel mb-6">
            13 profiles for hanging, freestanding, shop windows, and displays &mdash; visible from both sides.
          </p>
          <div className="rounded-sm border border-brand-border overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-brand-charcoal border-b border-brand-border">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold w-16">
                    Profile
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Model
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Depth
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Illumination
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {doubleSidedFrames.map((frame, i) => {
                  const renderImg = getRenderImage(frame.model)
                  return (
                    <tr
                      key={frame.model}
                      className={i % 2 === 0 ? 'bg-brand-surface' : 'bg-brand-charcoal'}
                    >
                      <td className="px-4 py-2">
                        {renderImg ? (
                          <button
                            onClick={() =>
                              setLightboxImage({
                                src: renderImg,
                                alt: `EdgeLuxe ${frame.model} — ${frame.depth} ${frame.illumination}`,
                              })
                            }
                            className="relative w-12 h-12 rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border hover:border-brand-gold/50 transition-colors cursor-zoom-in"
                          >
                            <Image
                              src={renderImg}
                              alt={`${frame.model} profile`}
                              fill
                              className="object-contain"
                              sizes="48px"
                            />
                          </button>
                        ) : (
                          <div className="w-12 h-12 rounded-sm bg-brand-charcoal border border-brand-border" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-brand-warm-white whitespace-nowrap">
                        EdgeLuxe {frame.model}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-steel-light whitespace-nowrap">
                        {frame.depth}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-steel-light">
                        {frame.illumination}
                      </td>
                      <td className="px-4 py-3 text-sm text-brand-steel-light">
                        {frame.notes}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical Specifications */}
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
            SEG lightboxes are versatile across a wide range of environments:
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
            Send us your specs or artwork and we&apos;ll return production drawings, renderings, and a detailed quote within 24&ndash;48 hours.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Request a Quote
          </Button>
        </div>
      </Container>

      {/* Image Lightbox */}
      <ImageLightbox
        src={lightboxImage?.src || null}
        alt={lightboxImage?.alt}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  )
}
