'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Section, Container, SectionHeader } from '@/components/ui/section'
import { FadeIn, ScaleOnHover } from '@/components/ui/motion'
import { images } from '@/lib/images'

const projects = [
  { type: 'Retail Storefront', location: 'Tampa, FL' },
  { type: 'Restaurant', location: 'Toronto, ON' },
  { type: 'Medical Office', location: 'Orlando, FL' },
  { type: 'Corporate Campus', location: 'Austin, TX' },
]

export function GalleryPreview() {
  return (
    <Section>
      <Container>
        <FadeIn>
          <SectionHeader title="Recent Projects" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <ScaleOnHover scale={1.02}>
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-brand-charcoal border border-brand-border group cursor-pointer">
                  <Image
                    src={images.projects[i]}
                    alt={`${project.type} signage project in ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-sm font-medium text-brand-warm-white">
                      {project.type}
                    </p>
                    <p className="text-xs text-brand-steel mt-0.5">
                      {project.location}
                    </p>
                  </div>
                </div>
              </ScaleOnHover>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-brand-gold font-medium hover:text-brand-gold-light transition-colors group"
            >
              <span>See More Projects</span>
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
