import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/section'
import { FadeIn, ScaleOnHover } from '@/components/ui/motion'
import { images } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Projects | Installed Signage Gallery',
  description:
    'Browse our gallery of installed channel letters, halo-lit signs, and custom signage projects across the USA and Canada.',
}

const projects = [
  { type: 'Retail Storefront', location: 'Tampa, FL', category: 'Trimless Channel Letters' },
  { type: 'Restaurant', location: 'Toronto, ON', category: 'Halo-Lit Letters' },
  { type: 'Medical Office', location: 'Orlando, FL', category: 'Cast Acrylic Letters' },
  { type: 'Corporate Campus', location: 'Austin, TX', category: 'Face & Halo Combo' },
  { type: 'Boutique Hotel', location: 'Miami, FL', category: 'Halo-Lit Letters' },
  { type: 'Shopping Center', location: 'Dallas, TX', category: 'Trimless Channel Letters' },
  { type: 'Dental Practice', location: 'Atlanta, GA', category: 'Cast Acrylic Letters' },
  { type: 'Entertainment Venue', location: 'Nashville, TN', category: 'Face & Halo Combo' },
  { type: 'Café', location: 'Vancouver, BC', category: 'Blade Signs' },
]

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <div className="mb-14 md:mb-18 max-w-2xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white">
            Our Projects
          </h1>
          <p className="mt-4 text-lg text-brand-steel-light">
            A selection of installed signage projects from sign companies across
            the USA and Canada.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <ScaleOnHover scale={1.02}>
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border group cursor-pointer">
                  <Image
                    src={images.projects[i % images.projects.length]}
                    alt={`${project.type} signage project in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-medium text-brand-warm-white">
                      {project.type}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-brand-steel">{project.location}</p>
                      <p className="text-xs text-brand-gold">{project.category}</p>
                    </div>
                  </div>
                </div>
              </ScaleOnHover>
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  )
}
