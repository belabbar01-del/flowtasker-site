import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'max-w-3xl', centered && 'mx-auto', className)}>
      {eyebrow && (
        <p
          className={cn(
            'text-sm font-semibold uppercase tracking-widest mb-3',
            light ? 'text-brand-300' : 'text-brand-600'
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight',
          light ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            light ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
