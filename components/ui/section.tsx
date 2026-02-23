interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className = '', id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 lg:py-32 ${
        dark ? 'bg-brand-black' : 'bg-brand-surface'
      } ${className}`}
    >
      {children}
    </section>
  )
}

export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  )
}

export function SectionHeader({
  title,
  subtitle,
  className = '',
  align = 'center',
}: {
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}) {
  return (
    <div
      className={`mb-14 md:mb-18 lg:mb-20 ${
        align === 'center' ? 'text-center' : ''
      } ${className}`}
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-warm-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-brand-steel-light md:text-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
