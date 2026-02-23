import Link from 'next/link'

const productLinks = [
  { name: 'Channel Letters & Letterforms', href: '/products#letterforms' },
  { name: 'Trimless Face-Lit (LP5)', href: '/products/edgeluxe-lp5' },
  { name: 'Halo-Lit Letters (LP3)', href: '/products/edgeluxe-lp31' },
  { name: 'Cast Acrylic Letters (LP11)', href: '/products/edgeluxe-lp11-f' },
  { name: 'Cabinet & Flag Signs', href: '/products/cabinet-flag-signs' },
  { name: 'SEG Lightboxes', href: '/products/seg-lightboxes' },
]

const companyLinks = [
  { name: 'Our Story', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Resources', href: '/resources' },
]

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-heading text-xl font-bold tracking-tight text-brand-warm-white">
                SUNLITE
              </span>
              <span className="font-heading text-xl font-light tracking-widest text-brand-steel-light">
                SIGNS
              </span>
            </div>
            <p className="text-sm text-brand-steel leading-relaxed max-w-xs">
              Trade-only wholesale sign fabrication. Channel letters, cabinet signs,
              and SEG lightboxes for sign companies across USA &amp; Canada.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-5">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-steel hover:text-brand-warm-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-steel hover:text-brand-warm-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-brand-warm-white mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-brand-steel uppercase tracking-wider mb-1">East Coast</p>
                <a
                  href="tel:+16892940912"
                  className="text-sm text-brand-steel-light hover:text-brand-gold transition-colors duration-200"
                >
                  (689) 294-0912
                </a>
              </li>
              <li>
                <p className="text-xs text-brand-steel uppercase tracking-wider mb-1">West Coast</p>
                <a
                  href="tel:+16512302827"
                  className="text-sm text-brand-steel-light hover:text-brand-gold transition-colors duration-200"
                >
                  (651) 230-2827
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:info@sunlitesigns.com"
                  className="text-sm text-brand-steel-light hover:text-brand-gold transition-colors duration-200"
                >
                  info@sunlitesigns.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-steel">
            &copy; {new Date().getFullYear()} Sunlite Signs LLC. All rights reserved.
          </p>
          <p className="text-xs text-brand-steel">
            Trade Only &mdash; Serving sign companies exclusively across USA &amp; Canada
          </p>
        </div>
      </div>
    </footer>
  )
}
