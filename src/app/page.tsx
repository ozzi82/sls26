import Link from "next/link";
import {
  Shield,
  Truck,
  Clock,
  Globe,
  Send,
  FileText,
  Package,
  ArrowRight,
  Lock,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PlaceholderImage from "@/components/PlaceholderImage";

const products = [
  {
    name: "Front Lit Channel Letters",
    description: "Classic illuminated letters with front-facing LED glow. Wholesale pricing for sign shops.",
    href: "/products/channel-letters/front-lit",
  },
  {
    name: "Halo Lit Channel Letters",
    description: "Elegant backlit glow for a premium architectural look. Trade accounts only.",
    href: "/products/channel-letters/halo-lit",
  },
  {
    name: "Trimless / EdgeLuxe",
    description: "Our flagship innovation — seamless letters with zero trim cap. Exclusive to the trade.",
    href: "/products/channel-letters/trimless",
  },
  {
    name: "Flat Cut Letters",
    description: "Precision-cut metal letters for a clean, dimensional look. Wholesale direct.",
    href: "/products/flat-cut-letters",
  },
  {
    name: "Blade Signs",
    description: "Projecting signs for maximum storefront visibility. Trade pricing available.",
    href: "/products/blade-signs",
  },
  {
    name: "Lightboxes",
    description: "Illuminated cabinet signs for bold brand presence. Wholesale to sign companies only.",
    href: "/products/lightboxes",
  },
];

const whyBlocks = [
  {
    title: "German Engineering, American Wholesale",
    description:
      "Our partnership with LKF Lichtwerbung in Nuremberg brings decades of German precision engineering to every sign we produce — and we pass it direct to you at wholesale pricing. No middlemen. No retail markup. Just German-engineered quality at trade prices.",
    image: "LKF facility or German precision equipment",
  },
  {
    title: "UL Listed — Every Single Sign",
    description:
      "Every illuminated sign that leaves our facility carries UL certification. As a wholesale partner, you get signs your clients can trust and inspectors will approve. Your reputation is protected.",
    image: "UL certification badge or testing process",
  },
  {
    title: "We Never Compete With You. Period.",
    description:
      "Sunlite sells exclusively to the trade. We do not have a retail storefront. We do not sell direct to end users. Your clients are YOUR clients. We are your silent manufacturing partner.",
    image: "Crated signs ready for wholesale shipping",
  },
  {
    title: "EdgeLuxe Trimless — Only Through the Trade",
    description:
      "The hottest trend in architectural signage — trimless channel letters with zero visible trim cap. Clean. Modern. Seamless. And only available through authorized sign shops like you.",
    image: "EdgeLuxe trimless channel letter detail shot",
  },
];

const steps = [
  {
    icon: Send,
    title: "Submit Your Project",
    description: "Send drawings, specs, or even a napkin sketch. We work with whatever you have. Trade accounts only.",
  },
  {
    icon: FileText,
    title: "Wholesale Quote in 48 Hrs",
    description: "Detailed trade pricing with full material specs. No retail markup. No obligation. No games.",
  },
  {
    icon: Package,
    title: "We Build, You Profit",
    description: "UL-listed, German-engineered, crated and shipped direct. Your brand, your margin, our craftsmanship.",
  },
];

const testimonials = [
  {
    quote:
      "Finally a wholesale manufacturer that stays in their lane. They build, we sell, everybody wins.",
    company: "[Sign Shop]",
    location: "[City, State]",
  },
  {
    quote:
      "48-hour wholesale quotes and they never undercut us with retail clients. That is a real partner.",
    company: "[Sign Shop]",
    location: "[City, State]",
  },
  {
    quote:
      "The EdgeLuxe trimless letters are the cleanest product we have ever installed. Our margins are excellent.",
    company: "[Sign Shop]",
    location: "[City, State]",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sunlite Signs LLC",
    url: "https://sunlitesigns.com",
    description:
      "German-engineered wholesale channel letters and illuminated signs for sign shops across the USA and Canada. Trade accounts only.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-890",
      contactType: "sales",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION — Full-width background image with overlay */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image placeholder — replace with real image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-navy to-primary-dark">
          {/* When you have a real image, use next/image with fill + objectCover here */}
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-primary-dark/40" />
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark to-transparent" />
        </div>

        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 rounded-sm px-4 py-1.5 mb-8">
              <Lock className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-brand-gold text-xs font-heading font-bold uppercase tracking-widest">
                Wholesale Only — Trade Accounts
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.05] mb-6">
              Wholesale
              <br />
              Channel Letters
              <br />
              <span className="text-brand-gold">&amp; Illuminated Signs</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
              German-engineered. UL listed. Built exclusively for sign shops
              across the USA &amp; Canada. We never sell retail.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
                Request Wholesale Pricing
              </Link>
              <a href="tel:+1234567890" className="btn-secondary text-base px-10 py-5 gap-2 border-white/30 hover:border-brand-gold">
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {[
                { value: "48hr", label: "Trade Quotes" },
                { value: "4 wk", label: "Production" },
                { value: "UL", label: "Listed" },
                { value: "100%", label: "Wholesale" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-brand-gold">{stat.value}</div>
                  <div className="text-xs text-white/50 font-heading uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Bar — bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-primary-dark/80 backdrop-blur-sm">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-heading uppercase tracking-wider text-white/50">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-gold" /> Wholesale Only
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-gold" /> UL Listed
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-gold" /> German Engineering
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" /> 48-Hour Quotes
              </span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-gold" /> USA &amp; Canada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES — Big image grid, product-forward */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="gold-line mb-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light">
                Wholesale Product Catalog
              </h2>
            </div>
            <Link href="/products" className="text-brand-gold font-heading font-medium text-sm uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Link key={product.name} href={product.href} className="group block">
                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-brand-gold/40 transition-all duration-300">
                  <PlaceholderImage
                    label={product.name}
                    className="rounded-none border-0"
                    aspectRatio="aspect-[16/10]"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-heading font-semibold text-text-light group-hover:text-brand-gold transition-colors mb-1">
                      {product.name}
                    </h3>
                    <p className="text-text-light/40 text-sm mb-3">{product.description}</p>
                    <span className="text-brand-gold text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5">
                      View Trade Specs
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALE ONLY BANNER */}
      <section className="bg-brand-gold py-5">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Lock className="w-6 h-6 text-white" />
            <p className="text-center md:text-left text-white font-heading font-bold text-sm md:text-base uppercase tracking-wider">
              We sell exclusively to sign companies, sign shops, and trade professionals.
            </p>
            <Link href="/why-sunlite/wholesale-only" className="text-white border-2 border-white/40 hover:border-white hover:bg-white/10 font-heading font-bold text-xs uppercase tracking-wider px-5 py-2 rounded transition-colors">
              Learn Why
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SIGN SHOPS CHOOSE SUNLITE */}
      <section className="section-padding bg-light-bg">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
                Built for the Trade. Never Sold Retail.
              </h2>
              <p className="text-text-dark/60 max-w-2xl mx-auto">
                We exist for one reason: to be the best wholesale sign manufacturer your shop has ever worked with.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyBlocks.map((block) => (
              <AnimatedSection key={block.title}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5">
                  <PlaceholderImage
                    label={block.image}
                    className="rounded-none border-0"
                    aspectRatio="aspect-[16/9]"
                  />
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-heading font-bold text-text-dark mb-3">
                      {block.title}
                    </h3>
                    <p className="text-text-dark/60 text-sm leading-relaxed">{block.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/why-sunlite" className="btn-primary">
              Why Sign Shops Choose Sunlite
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4">
                Installed by Our Trade Partners
              </h2>
              <p className="text-text-light/60">Products we manufactured. Installed by sign shops like yours.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                "Front lit channel letters — night installation",
                "Halo lit letters on brick facade",
                "EdgeLuxe trimless installation",
                "Blade sign — street view",
              ].map((label, i) => (
                <PlaceholderImage
                  key={i}
                  label={label}
                  className="rounded-lg"
                  aspectRatio="aspect-square"
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/gallery" className="btn-secondary">
                View Full Project Gallery
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-navy">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4">
                Your Wholesale Partner in 3 Steps
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6">
                    <step.icon className="w-7 h-7 text-brand-gold" />
                  </div>
                  <div className="text-brand-gold font-heading font-bold text-sm mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-light/60 text-sm">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/get-a-quote" className="btn-primary">
              Request Wholesale Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-light-bg">
        <div className="container-max">
          <AnimatedSection>
            <div className="text-center mb-12">
              <div className="gold-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-dark mb-4">
                Trusted by Sign Shops Nationwide
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-black/5">
                  <div className="text-brand-gold text-4xl font-heading mb-4">&ldquo;</div>
                  <p className="text-text-dark/80 leading-relaxed mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div className="text-sm">
                    <p className="font-heading font-semibold text-text-dark">
                      {testimonial.company}
                    </p>
                    <p className="text-text-dark/50">{testimonial.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-padding bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,89,12,0.06),transparent_70%)]" />
        <div className="container-max relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded px-4 py-1.5 mb-6">
                <Lock className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-brand-gold text-xs font-heading font-bold uppercase tracking-widest">
                  Trade Accounts Only
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-light mb-4">
                Ready to Add Sunlite to Your Supply Chain?
              </h2>
              <p className="text-text-light/60 max-w-xl mx-auto mb-8">
                Request wholesale pricing for your next project. Detailed trade quotes within 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link href="/get-a-quote" className="btn-primary text-base px-10 py-5">
                  Request Wholesale Pricing
                </Link>
                <Link href="/why-sunlite/wholesale-only" className="btn-secondary text-base px-10 py-5">
                  Why We Sell Wholesale Only
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-light/50">
                <a href="tel:+1234567890" className="hover:text-brand-gold transition-colors">
                  (123) 456-7890
                </a>
                <a href="mailto:info@sunlitesigns.com" className="hover:text-brand-gold transition-colors">
                  info@sunlitesigns.com
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </>
  );
}
