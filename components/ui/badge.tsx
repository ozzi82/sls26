interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'steel' | 'cert'
  className?: string
}

export function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const variants = {
    gold: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
    steel: 'bg-brand-steel/10 text-brand-steel-light border-brand-steel/20',
    cert: 'bg-brand-cert-blue/10 text-brand-cert-blue border-brand-cert-blue/20',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
