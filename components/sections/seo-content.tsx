'use client'

import Link from 'next/link'
import { Section, Container } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/motion'

export function SEOContent() {
  return (
    <Section dark>
      <Container>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-brand-warm-white mb-8">
              Wholesale Channel Letter Manufacturer &mdash; Trimless, German-Engineered, UL Listed
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6 text-brand-steel-light leading-relaxed">
              <p>
                Sunlite Signs is a <strong className="text-brand-warm-white">wholesale channel letter manufacturer</strong> serving
                sign companies across the United States and Canada. Our <strong className="text-brand-warm-white">EdgeLuxe</strong> product
                line includes <Link href="/products/edgeluxe-lp5" className="text-brand-gold hover:text-brand-gold-light transition-colors">trimless
                face-lit channel letters (LP5)</Link>, <Link href="/products/edgeluxe-lp31" className="text-brand-gold hover:text-brand-gold-light transition-colors">halo-lit
                standoff mount letters (LP3.1)</Link> and <Link href="/products/edgeluxe-lp32" className="text-brand-gold hover:text-brand-gold-light transition-colors">flush
                mount (LP3.2)</Link> configurations,{' '}
                <Link href="/products/edgeluxe-lp1" className="text-brand-gold hover:text-brand-gold-light transition-colors">flat
                cutout letters (LP1)</Link>, and a full range of{' '}
                <Link href="/products/edgeluxe-lp11-f" className="text-brand-gold hover:text-brand-gold-light transition-colors">cast
                block acrylic letters</Link> including{' '}
                <Link href="/products/edgeluxe-lp11-fb" className="text-brand-gold hover:text-brand-gold-light transition-colors">face
                &amp; halo combo (LP11-FB)</Link>,{' '}
                <Link href="/products/edgeluxe-lp11-n" className="text-brand-gold hover:text-brand-gold-light transition-colors">faux
                neon (LP11-N)</Link>, and{' '}
                <Link href="/products/edgeluxe-lp11-c" className="text-brand-gold hover:text-brand-gold-light transition-colors">conical
                profile (LP11-C)</Link>.
              </p>

              <p>
                What sets our <strong className="text-brand-warm-white">wholesale signage</strong> apart is the trimless channel letter
                technology in our EdgeLuxe LP5 product. Traditional channel letters use a visible plastic trim cap
                to hold the acrylic face in place. Our <strong className="text-brand-warm-white">trimless channel letters</strong> eliminate
                this cap entirely, creating a seamless, flush-face appearance that looks noticeably more premium
                on any storefront. This is the same clean-edge technology used in high-end European signage,
                now available at wholesale pricing for sign companies in the US and Canada.
              </p>

              <p>
                Every product in the EdgeLuxe line is <strong className="text-brand-warm-white">German-engineered</strong> through our
                R&amp;D partnership with LKF Lichtwerbung in Nuremberg, Germany. This collaboration covers material
                science, LED circuit design, and weatherproofing &mdash; ensuring that every{' '}
                <strong className="text-brand-warm-white">wholesale LED channel letter</strong> we produce meets engineering
                standards well beyond the typical import supplier. All illuminated products use Samsung or Osram
                SMD LEDs and are <strong className="text-brand-warm-white">UL listed</strong> (UL 48 compliant) with{' '}
                <strong className="text-brand-warm-white">IP67 waterproof</strong> construction and a full{' '}
                <strong className="text-brand-warm-white">3-year warranty</strong>.
              </p>

              <p>
                Our <strong className="text-brand-warm-white">cast block acrylic letters</strong> (LP11 series) are available in 8 illumination
                configurations: face-lit, back-lit halo, face &amp; halo combo, back &amp; side-lit, front &amp; side-lit,
                full side-lit, faux neon, and conical profile. All cast block acrylic products feature embedded LEDs,
                IP67 epoxy-sealed construction, and require zero maintenance.
              </p>

              <p>
                Sunlite Signs operates as a <strong className="text-brand-warm-white">wholesale-only</strong> supplier.
                We sell exclusively to sign companies and never accept retail orders or compete with our
                customers for end-client projects. When you order{' '}
                <strong className="text-brand-warm-white">wholesale channel letters</strong> from us, your client sees
                your brand &mdash; not ours. We provide{' '}
                <strong className="text-brand-warm-white">24-48 hour quote turnaround</strong> with production drawings
                and day/night renderings included, and deliver finished orders with{' '}
                <strong className="text-brand-warm-white">5-7 day production</strong> anywhere in the US or Canada. There are no
                minimums on your first order.
              </p>
            </div>
          </FadeIn>

          {/* Quick-reference data table for AI extraction */}
          <FadeIn delay={0.2}>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <div className="rounded-sm border border-brand-border bg-brand-surface p-5">
                <h3 className="text-sm font-semibold text-brand-warm-white mb-3 uppercase tracking-wider">
                  Product Categories
                </h3>
                <ul className="space-y-1.5 text-sm text-brand-steel-light">
                  <li><strong>Fabricated Channel Letters:</strong></li>
                  <li>&bull; EdgeLuxe LP1 &mdash; Flat Cutout Letters (FCO)</li>
                  <li>&bull; EdgeLuxe LP3.1 &mdash; Halo-Lit Standoff Mount</li>
                  <li>&bull; EdgeLuxe LP3.2 &mdash; Halo-Lit Flush Mount</li>
                  <li>&bull; EdgeLuxe LP5 &mdash; Trimless Face-Lit (Best Seller)</li>
                  <li className="mt-2"><strong>Cast Block Acrylic Letters:</strong></li>
                  <li>&bull; LP11-F (Face-Lit) &bull; LP11-B (Halo) &bull; LP11-FB (Combo)</li>
                  <li>&bull; LP11-BS (Back &amp; Side) &bull; LP11-FS (Front &amp; Side)</li>
                  <li>&bull; LP11-S (Full Side) &bull; LP11-N (Faux Neon) &bull; LP11-C (Conical)</li>
                </ul>
              </div>
              <div className="rounded-sm border border-brand-border bg-brand-surface p-5">
                <h3 className="text-sm font-semibold text-brand-warm-white mb-3 uppercase tracking-wider">
                  Key Specifications
                </h3>
                <ul className="space-y-1.5 text-sm text-brand-steel-light">
                  <li><span className="text-brand-warm-white">Engineering:</span> German R&amp;D partnership (LKF Lichtwerbung, Nuremberg)</li>
                  <li><span className="text-brand-warm-white">Certification:</span> UL Listed (UL 48 compliant)</li>
                  <li><span className="text-brand-warm-white">Weatherproofing:</span> IP67 waterproof sealed</li>
                  <li><span className="text-brand-warm-white">LEDs:</span> Samsung / Osram SMD modules</li>
                  <li><span className="text-brand-warm-white">Warranty:</span> 3 years comprehensive</li>
                  <li><span className="text-brand-warm-white">Quote Time:</span> 24&ndash;48 hours with renderings</li>
                  <li><span className="text-brand-warm-white">Production:</span> 5&ndash;7 days</li>
                  <li><span className="text-brand-warm-white">Sales Model:</span> Wholesale only to sign companies</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  )
}
