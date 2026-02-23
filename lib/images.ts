// Product images from Sunlite Signs
// Base URL for the reference site images
const BASE = 'https://sls-five.vercel.app'

export const images = {
  hero: '/images/hero-tagheuer.jpeg',

  // Product hero images (used in cards, catalog)
  products: {
    'edgeluxe-lp1': `${BASE}/images/hero-lp1.jpg`,
    'edgeluxe-lp31': `${BASE}/images/hero-lp31.jpg`,
    'edgeluxe-lp32': `${BASE}/images/hero-lp32.jpg`,
    'edgeluxe-lp5': `${BASE}/images/hero-lp5.jpg`,
    'edgeluxe-lp11-f': `${BASE}/images/hero-lp11-f.jpg`,
    'edgeluxe-lp11-b': `${BASE}/images/hero-lp11-b.jpg`,
    'edgeluxe-lp11-fb': `${BASE}/images/hero-lp11-fb.jpg`,
    'edgeluxe-lp11-bs': `${BASE}/images/hero-lp11-bs.jpg`,
    'edgeluxe-lp11-fs': `${BASE}/images/hero-lp11-fs.jpg`,
    'edgeluxe-lp11-s': `${BASE}/images/hero-lp11-s.jpg`,
    'edgeluxe-lp11-n': `${BASE}/images/hero-lp11-n.jpg`,
    'edgeluxe-lp11-c': `${BASE}/images/hero-lp11-c.jpg`,
  } as Record<string, string>,

  // Day/night image pairs for hover effect
  dayNight: {
    'edgeluxe-lp1': {
      day: `${BASE}/images/products/lp1-day.jpg`,
      night: `${BASE}/images/products/lp1-night.jpg`,
    },
    'edgeluxe-lp31': {
      day: `${BASE}/images/products/lp31-day.jpg`,
      night: `${BASE}/images/products/lp31-night.jpg`,
    },
    'edgeluxe-lp32': {
      day: `${BASE}/images/products/lp32-day.jpg`,
      night: `${BASE}/images/products/lp32-night.jpg`,
    },
    'edgeluxe-lp5': {
      day: `${BASE}/images/products/lp5-day.jpg`,
      night: `${BASE}/images/products/lp5-night.jpg`,
    },
    'edgeluxe-lp11-f': {
      day: `${BASE}/images/products/lp11-f-day.jpg`,
      night: `${BASE}/images/products/lp11-f-night.jpg`,
    },
    'edgeluxe-lp11-b': {
      day: `${BASE}/images/products/lp11-b-day.jpg`,
      night: `${BASE}/images/products/lp11-b-night.jpg`,
    },
    'edgeluxe-lp11-fb': {
      day: `${BASE}/images/products/lp11-fb-day.jpg`,
      night: `${BASE}/images/products/lp11-fb-night.jpg`,
    },
    'edgeluxe-lp11-bs': {
      day: `${BASE}/images/products/lp11-bs-day.jpg`,
      night: `${BASE}/images/products/lp11-bs-night.jpg`,
    },
    'edgeluxe-lp11-fs': {
      day: `${BASE}/images/products/lp11-fs-day.jpg`,
      night: `${BASE}/images/products/lp11-fs-night.jpg`,
    },
    'edgeluxe-lp11-s': {
      day: `${BASE}/images/products/lp11-s-day.jpg`,
      night: `${BASE}/images/products/lp11-s-night.jpg`,
    },
    'edgeluxe-lp11-n': {
      day: `${BASE}/images/products/lp11-n-day.jpg`,
      night: `${BASE}/images/products/lp11-n-night.jpg`,
    },
    'edgeluxe-lp11-c': {
      day: `${BASE}/images/products/lp11-c-day.jpg`,
      night: `${BASE}/images/products/lp11-c-night.jpg`,
    },
  } as Record<string, { day: string; night: string }>,

  // Showcase images (larger, more dramatic)
  showcase: [
    `${BASE}/images/hero-lp5.jpg`,
    `${BASE}/images/hero-lp31.jpg`,
    `${BASE}/images/hero-lp11-f.jpg`,
    `${BASE}/images/hero-lp11-fb.jpg`,
  ],

  // Project gallery images
  projects: [
    `${BASE}/images/products/lp5-night.jpg`,
    `${BASE}/images/products/lp31-night.jpg`,
    `${BASE}/images/products/lp32-night.jpg`,
    `${BASE}/images/products/lp11-f-night.jpg`,
    `${BASE}/images/products/lp11-b-night.jpg`,
    `${BASE}/images/products/lp11-fb-night.jpg`,
    `${BASE}/images/products/lp11-n-night.jpg`,
    `${BASE}/images/products/lp11-s-night.jpg`,
    `${BASE}/images/products/lp1-day.jpg`,
  ],

  // About page
  about: {
    engineering: `${BASE}/images/hero-lp5.jpg`,
  },

  // Comparison images
  comparison: {
    traditional: `${BASE}/images/products/lp5-day.jpg`,
    trimless: `${BASE}/images/products/lp5-night.jpg`,
  },

  // Cabinet & Flag Signs images
  cabinet: {
    hero: '/images/cabinet/cabinet-hero.jpg',
  },

  // SEG Lightbox images (extracted from brochure)
  seg: {
    hero: '/images/seg/seg-hero-install.jpg',
    cube: '/images/seg/seg-cube-tradeshow.jpg',
    cover: '/images/seg/seg-cover.jpg',
    renders: {
      'snl-h30': '/images/seg/seg-snl-h30-render.jpg',
      'snl30': '/images/seg/seg-snl30-render.jpg',
      'sl-eco45': '/images/seg/seg-sl-eco45-render.jpg',
      'sl50': '/images/seg/seg-sl50-render.jpg',
      'sl75': '/images/seg/seg-sl75-render.jpg',
      'sl-eco80': '/images/seg/seg-sl-eco80-render.jpg',
      'sl80': '/images/seg/seg-sl80-render.jpg',
      'sl100': '/images/seg/seg-sl100-render.jpg',
      'dnl30': '/images/seg/seg-dnl30-render.jpg',
      'dnl40': '/images/seg/seg-dnl40-render.jpg',
      'dl60': '/images/seg/seg-dl60-render.jpg',
      'dl100': '/images/seg/seg-dl100-render.jpg',
      'dl-eco120': '/images/seg/seg-dl-eco120-render.jpg',
      'dl-aj120': '/images/seg/seg-dl-aj120-render.jpg',
      'dl160': '/images/seg/seg-dl160-render.jpg',
      'cube': '/images/seg/seg-cube-render.jpg',
    } as Record<string, string>,
  },
}
