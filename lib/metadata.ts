import type { Product } from './products'

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sunlitesigns.com/#business',
    name: 'Sunlite Signs LLC',
    alternateName: 'Sunlite Signs',
    description:
      'Trade-only wholesale manufacturer of German-engineered trimless LED channel letters, halo-lit channel letters, cast block acrylic letters, and custom signage. EdgeLuxe product line. Blind shipping and private label programs for sign companies across USA and Canada.',
    url: 'https://sunlitesigns.com',
    telephone: ['+1-689-294-0912', '+1-651-230-2827'],
    email: 'info@sunlitesigns.com',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
    ],
    priceRange: '$$',
    knowsAbout: [
      'Trimless channel letter manufacturing',
      'Wholesale channel letters',
      'Halo-lit channel letters',
      'Cast block acrylic letters',
      'Face-lit channel letters',
      'FCO flat cut out letters',
      'Blade signs',
      'Push-through cabinet signs',
      'LED signage manufacturing',
      'UL listed channel letters',
      'German-engineered signage',
      'EdgeLuxe channel letters',
      'Wholesale signage manufacturer',
      'IP67 waterproof channel letters',
      'Trade-only sign fabrication',
      'Blind shipping signage',
      'White label channel letters',
      'OEM sign manufacturing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'EdgeLuxe Wholesale Signage Products',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'EdgeLuxe LP5 - Trimless Face-Lit Channel Letters',
          description: 'Premium trimless fabricated stainless steel channel letters with step-router acrylic face. Best seller.',
        },
        {
          '@type': 'OfferCatalog',
          name: 'EdgeLuxe LP3 - Halo-Lit Channel Letters',
          description: 'Fabricated stainless steel letters with halo illumination. Available in standoff mount (LP3.1) and flush mount (LP3.2).',
        },
        {
          '@type': 'OfferCatalog',
          name: 'EdgeLuxe LP1 - Flat Cutout Letters (FCO)',
          description: 'Non-illuminated flat cut-out letters in wood, aluminum, stainless steel, and acrylic.',
        },
        {
          '@type': 'OfferCatalog',
          name: 'EdgeLuxe LP11 - Cast Block Acrylic Letters',
          description: '30mm cast block acrylic with embedded LEDs. 8 configurations: face-lit, halo, combo, side-lit, faux neon, and conical profile. IP67 waterproof.',
        },
      ],
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sunlitesigns.com/#organization',
    name: 'Sunlite Signs LLC',
    url: 'https://sunlitesigns.com',
    description:
      'Trade-only wholesale manufacturer of premium EdgeLuxe trimless channel letters and LED signage. German-engineered in partnership with LKF Lichtwerbung, Nuremberg. Blind shipping and private label programs available.',
    brand: {
      '@type': 'Brand',
      name: 'EdgeLuxe',
      description: 'German-engineered wholesale channel letters and signage by Sunlite Signs',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-689-294-0912',
        contactType: 'sales',
        areaServed: ['US', 'CA'],
        availableLanguage: 'English',
        description: 'East Coast wholesale channel letter sales',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+1-651-230-2827',
        contactType: 'sales',
        areaServed: ['US', 'CA'],
        availableLanguage: 'English',
        description: 'West Coast wholesale channel letter sales',
      },
    ],
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sunlitesigns.com/#website',
    name: 'Sunlite Signs - Trade-Only Wholesale Channel Letter Fabrication',
    url: 'https://sunlitesigns.com',
    description:
      'Trade-only wholesale manufacturer of trimless channel letters, halo-lit letters, cast block acrylic, and LED signage. German-engineered, UL listed. 24hr quotes, 21-day production, blind shipping. USA & Canada.',
    publisher: { '@id': 'https://sunlitesigns.com/#organization' },
  }
}

export function generateProductSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://sunlitesigns.com${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'EdgeLuxe by Sunlite Signs',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Sunlite Signs LLC',
      url: 'https://sunlitesigns.com',
    },
    category: product.category === 'fabricated-channel-letters'
      ? 'Wholesale Channel Letters'
      : product.category === 'cast-block-acrylic'
        ? 'Cast Block Acrylic Letters'
        : 'Specialty Signage',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'Sunlite Signs LLC',
      },
      eligibleRegion: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
      ],
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'UL Listed', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'IP Rating', value: 'IP67 Waterproof' },
      { '@type': 'PropertyValue', name: 'Warranty', value: '3 Years' },
      { '@type': 'PropertyValue', name: 'Production Time', value: '5-7 days' },
      { '@type': 'PropertyValue', name: 'Sales Model', value: 'Wholesale Only' },
    ],
    ...(product.modelNumber && { sku: product.modelNumber }),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(
  questions: { q: string; a: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}
