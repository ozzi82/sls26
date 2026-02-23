'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

const volumeOptions = [
  '1–10 signs/month',
  '11–25 signs/month',
  '26–50 signs/month',
  '50+ signs/month',
  'Not sure yet',
]

const signTypeOptions = [
  'Channel Letters',
  'Cabinet Signs',
  'SEG Lightboxes',
  'All of the above',
  'Other',
]

const inputClass =
  'w-full rounded-sm border border-brand-border bg-brand-charcoal px-4 py-3 text-sm text-brand-warm-white placeholder-brand-steel focus:border-brand-gold/50 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-colors'

export function WholesaleForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (submitted) {
    return (
      <div className="rounded-sm border border-brand-gold/20 bg-brand-gold/5 p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold/10 mb-4">
          <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-semibold text-brand-warm-white">
          Request Received
        </h3>
        <p className="mt-2 text-brand-steel-light">
          Thanks &mdash; we received your request. We&apos;ll respond within 24 hours.
        </p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      volume: (form.elements.namedItem('volume') as HTMLSelectElement).value,
      signType: (form.elements.namedItem('signType') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      window.gtag?.('event', 'wholesale_lead_submit', {
        event_category: 'lead',
        event_label: 'wholesale_form',
      })
    } catch {
      setError('Something went wrong. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="ws-company" className="block text-sm font-medium text-brand-steel-light mb-2">
          Company Name <span className="text-brand-gold">*</span>
        </label>
        <input
          type="text"
          id="ws-company"
          name="company"
          required
          className={inputClass}
          placeholder="Your sign company"
        />
      </div>

      <div>
        <label htmlFor="ws-name" className="block text-sm font-medium text-brand-steel-light mb-2">
          Contact Name <span className="text-brand-gold">*</span>
        </label>
        <input
          type="text"
          id="ws-name"
          name="name"
          required
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="ws-email" className="block text-sm font-medium text-brand-steel-light mb-2">
          Email <span className="text-brand-gold">*</span>
        </label>
        <input
          type="email"
          id="ws-email"
          name="email"
          required
          className={inputClass}
          placeholder="email@company.com"
        />
      </div>

      <div>
        <label htmlFor="ws-phone" className="block text-sm font-medium text-brand-steel-light mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="ws-phone"
          name="phone"
          className={inputClass}
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label htmlFor="ws-volume" className="block text-sm font-medium text-brand-steel-light mb-2">
          Estimated Monthly Volume
        </label>
        <select
          id="ws-volume"
          name="volume"
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select volume</option>
          {volumeOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ws-signType" className="block text-sm font-medium text-brand-steel-light mb-2">
          Type of Signs Needed
        </label>
        <select
          id="ws-signType"
          name="signType"
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select sign type</option>
          {signTypeOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="ws-message" className="block text-sm font-medium text-brand-steel-light mb-2">
          Message
        </label>
        <textarea
          id="ws-message"
          name="message"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your project — dimensions, quantity, timeline..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}

      <div className="pt-1">
        <Button type="submit" variant="primary" size="lg" className="w-full">
          {loading ? 'Submitting...' : 'Request Wholesale Pricing'}
        </Button>
      </div>
    </form>
  )
}
