import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'blue' | 'slate' | 'green' | 'amber'
  className?: string
}

const variantClasses = {
  blue: 'bg-brand-50 text-brand-700 border border-brand-100',
  slate: 'bg-slate-100 text-slate-600 border border-slate-200',
  green: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  amber: 'bg-amber-50 text-amber-700 border border-amber-100',
}

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
