'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const productOptions = [
  'EdgeLuxe LP5 - Trimless Face-Lit',
  'EdgeLuxe LP3.1 - Halo-Lit Standoff',
  'EdgeLuxe LP3.2 - Halo-Lit Flush',
  'EdgeLuxe LP1 - Flat Cutout (FCO)',
  'EdgeLuxe LP11-F - Face-Lit Acrylic',
  'EdgeLuxe LP11-B - Back-Lit Acrylic',
  'EdgeLuxe LP11-FB - Face & Halo Combo',
  'EdgeLuxe LP11-BS - Back & Side-Lit',
  'EdgeLuxe LP11-FS - Front & Side-Lit',
  'EdgeLuxe LP11-S - Full Side-Lit',
  'EdgeLuxe LP11-N - Faux Neon',
  'EdgeLuxe LP11-C - Conical Profile',
  'Other',
]

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-sm border border-brand-gold/20 bg-brand-gold/5 p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 mb-4">
          <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-semibold text-brand-warm-white">
          Quote Request Received
        </h3>
        <p className="mt-2 text-brand-steel-light">
          We&apos;ll get back to you within 24&ndash;48 hours with production drawings and a
          detailed quote.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-brand-steel-light mb-2">
            Company Name <span className="text-brand-gold">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white placeholder-brand-steel focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors"
            placeholder="Your sign company"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-steel-light mb-2">
            Contact Name <span className="text-brand-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white placeholder-brand-steel focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-steel-light mb-2">
            Email <span className="text-brand-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white placeholder-brand-steel focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors"
            placeholder="email@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-steel-light mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white placeholder-brand-steel focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors"
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-brand-steel-light mb-2">
          Product Interest
        </label>
        <select
          id="product"
          name="product"
          className="w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors appearance-none"
        >
          <option value="">Select a product type</option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-steel-light mb-2">
          Project Details / Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white placeholder-brand-steel focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors resize-y"
          placeholder="Tell us about your project — dimensions, quantity, timeline, or anything else that helps us prepare an accurate quote."
        />
      </div>

      <div>
        <label htmlFor="files" className="block text-sm font-medium text-brand-steel-light mb-2">
          Attach Artwork / Specs (optional)
        </label>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          accept=".pdf,.ai,.eps,.svg,.png,.jpg,.jpeg,.dxf,.dwg"
          className="w-full text-sm text-brand-steel file:mr-4 file:py-2.5 file:px-4 file:rounded-sm file:border file:border-brand-border file:bg-brand-charcoal file:text-brand-steel-light file:text-sm file:font-medium file:cursor-pointer hover:file:bg-brand-dark hover:file:border-brand-steel-dark transition-colors"
        />
        <p className="mt-1.5 text-xs text-brand-steel">
          PDF, AI, EPS, SVG, PNG, JPG, DXF, DWG accepted
        </p>
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
          Send Quote Request
        </Button>
      </div>
    </form>
  )
}
