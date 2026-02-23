import type { Metadata } from 'next'
import { Container } from '@/components/ui/section'
import { FAQAccordion } from '@/components/sections/faq-accordion'
import { Button } from '@/components/ui/button'
import { generateFAQSchema } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'FAQ | Frequently Asked Questions About Wholesale Channel Letters',
  description:
    'Answers to common questions about ordering wholesale channel letters, trimless technology, lead times, UL listing, shipping, and more.',
}

const faqCategories = [
  {
    name: "Ordering & Quotes",
    questions: [
      {
        q: "How do I get a quote?",
        a: "Send us your artwork, dimensions, and specs via our contact form or email. You can also just describe what you need \u2014 we\u2019ll work with you to develop the specs. You\u2019ll receive production drawings, day/night renderings, and a detailed quote within 24\u201348 hours.",
      },
      {
        q: "Is there a minimum order?",
        a: "No minimums on your first order. For ongoing orders, we work with you to find the quantities that make sense for your business. We\u2019re here to support your projects regardless of size.",
      },
      {
        q: "What is the typical lead time?",
        a: "After artwork and quote approval, production and delivery takes approximately 21 days to anywhere in the US or Canada. Rush orders may be available \u2014 contact us to discuss your timeline.",
      },
      {
        q: "How fast do you return quotes?",
        a: "We turn around quotes within 24\u201348 hours. Each quote includes production drawings and day/night renderings so your client can visualize the final result before you commit.",
      },
      {
        q: "Do you sell to end clients or the public?",
        a: "No. Sunlite Signs is wholesale only. We sell exclusively to sign companies and never take retail orders. We don\u2019t compete with our customers \u2014 your client relationship stays yours.",
      },
    ],
  },
  {
    name: "Products & Specs",
    questions: [
      {
        q: "What makes trimless channel letters different?",
        a: "Traditional channel letters have a visible plastic trim cap around the face that holds the acrylic in place. Our trimless (EdgeLuxe) technology eliminates this cap entirely, resulting in a clean, seamless face that looks more premium. The installation process remains the same \u2014 it\u2019s a better-looking result with no additional complexity.",
      },
      {
        q: "What is the minimum stroke width for trimless letters?",
        a: "Our trimless face-lit channel letters (EdgeLuxe LP5) support a minimum stroke width of 1 inch. For very fine fonts, we\u2019ll work with you during the quoting process to recommend the best approach.",
      },
      {
        q: "What materials do you use?",
        a: "Our channel letters use aluminum returns with acrylic faces. FCO letters are available in aluminum, stainless steel, or acrylic. Cast block letters are premium cast acrylic. All LED modules are Samsung or Osram SMD LEDs.",
      },
      {
        q: "What LED brands do you use?",
        a: "We use Samsung and Osram SMD LED modules \u2014 both industry-leading brands known for consistent color output and long lifespan. All LEDs are matched for color temperature consistency across your entire sign set.",
      },
    ],
  },
  {
    name: "Quality & Certification",
    questions: [
      {
        q: "Are your products UL listed?",
        a: "Yes. All illuminated products use UL listed LEDs and power supplies, and our signs are manufactured to UL 48 standards. Full UL documentation is included with every order.",
      },
      {
        q: "What is the IP rating?",
        a: "Our channel letters and illuminated products are IP67 rated, which means they are completely protected against dust ingress and can withstand temporary submersion in water. This ensures long-term performance in any weather condition.",
      },
      {
        q: "What does the 3-year warranty cover?",
        a: "Our 3-year comprehensive warranty covers materials and workmanship, including LED modules, power supplies, and structural components. If something fails under normal use within the warranty period, we\u2019ll make it right.",
      },
      {
        q: "What documentation do you include?",
        a: "Every order ships with production drawings, wiring diagrams, 1:1 mounting patterns, UL listing documentation, and installation guidelines. Everything your installer needs is in the box.",
      },
    ],
  },
  {
    name: "Shipping & Delivery",
    questions: [
      {
        q: "Where do you ship?",
        a: "We ship to all 50 US states and all Canadian provinces. Our logistics team handles customs documentation for Canadian shipments.",
      },
      {
        q: "How are orders packaged?",
        a: "Every order is custom-crated with foam protection sized to each letter set. We take packaging seriously \u2014 your signs arrive in the same condition they left our facility.",
      },
      {
        q: "Can you ship directly to a job site?",
        a: "Yes. We can ship directly to your shop or to a job site. Just provide the shipping address with your order and we\u2019ll coordinate delivery.",
      },
    ],
  },
]

export default function FAQPage() {
  const allQuestions = faqCategories.flatMap((c) => c.questions)

  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(allQuestions)),
        }}
      />
      <Container>
        {/* Header */}
        <div className="mb-14 md:mb-18 max-w-2xl">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-warm-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-brand-steel-light">
            Everything you need to know about working with Sunlite Signs.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl space-y-12">
          {faqCategories.map((category) => (
            <div key={category.name}>
              <h2 className="font-heading text-xl font-semibold text-brand-warm-white mb-6 pb-3 border-b border-brand-border">
                {category.name}
              </h2>
              <FAQAccordion questions={category.questions} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-brand-border max-w-3xl">
          <h3 className="font-heading text-xl font-semibold text-brand-warm-white">
            Still have questions?
          </h3>
          <p className="mt-2 text-brand-steel-light">
            We&apos;re here to help. Reach out and we&apos;ll get back to you within 24
            hours.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
