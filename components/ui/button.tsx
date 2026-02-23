'use client'

import Link from 'next/link'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

function trackCTAClick(label: string) {
  window.gtag?.('event', 'wholesale_cta_click', {
    event_category: 'engagement',
    event_label: label,
  })
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-sm'

  const variants = {
    primary:
      'bg-brand-gold text-brand-black hover:bg-brand-gold-light glow-gold-subtle hover:glow-gold',
    secondary:
      'bg-brand-dark text-brand-warm-white border border-brand-border hover:border-brand-steel hover:bg-brand-charcoal',
    outline:
      'bg-transparent text-brand-gold border border-brand-gold hover:bg-brand-gold hover:text-brand-black',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    const label = typeof children === 'string' ? children : ''
    return (
      <Link
        href={href}
        className={classes}
        onClick={href === '/contact' ? () => trackCTAClick(label) : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
