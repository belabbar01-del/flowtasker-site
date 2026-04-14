import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import type { PricingPlan } from '@/lib/types'

interface PricingCardProps {
  plan: PricingPlan
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-2xl p-8 transition-all duration-200',
        plan.highlighted
          ? 'bg-brand-600 text-white shadow-2xl shadow-brand-600/30 scale-[1.02] border border-brand-500'
          : 'bg-white border border-slate-200 hover:border-brand-200 hover:shadow-md'
      )}
      aria-label={`Plan ${plan.name}`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-amber-400 text-amber-900 uppercase tracking-wider shadow">
            Le plus populaire
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            'text-lg font-bold mb-1',
            plan.highlighted ? 'text-white' : 'text-slate-900'
          )}
        >
          {plan.name}
        </h3>
        <p
          className={cn(
            'text-sm leading-relaxed',
            plan.highlighted ? 'text-brand-100' : 'text-slate-500'
          )}
        >
          {plan.description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span
            className={cn(
              'text-4xl font-bold tracking-tight',
              plan.highlighted ? 'text-white' : 'text-slate-900'
            )}
          >
            {plan.price}
          </span>
          {plan.period && (
            <span
              className={cn(
                'text-sm mb-1.5',
                plan.highlighted ? 'text-brand-200' : 'text-slate-400'
              )}
            >
              {plan.period}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={cn(
                'w-4 h-4 mt-0.5 shrink-0',
                plan.highlighted ? 'text-brand-200' : 'text-brand-600'
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                'text-sm',
                plan.highlighted ? 'text-brand-50' : 'text-slate-600'
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={plan.highlighted ? 'secondary' : 'primary'}
        size="md"
        className="w-full justify-center"
      >
        {plan.cta}
      </Button>
    </article>
  )
}
