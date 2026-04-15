'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/lib/types'

interface FAQAccordionProps {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const headingId = `faq-heading-${index}`

        return (
          <div
            key={headingId}
            className={cn(
              'border rounded-2xl overflow-hidden transition-all duration-200',
              isOpen
                ? 'border-brand-500/30'
                : 'border-white/[0.07] hover:border-white/[0.12]'
            )}
            role="listitem"
          >
            <button
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={cn(
                'w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors',
                isOpen
                  ? 'bg-brand-500/[0.06]'
                  : 'bg-white/[0.02] hover:bg-white/[0.04]'
              )}
            >
              <span className="font-semibold text-white text-base leading-snug">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-brand-400 shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-6 pb-5 bg-white/[0.01]">
                <div className="border-t border-white/[0.06] pt-4">
                  <p className="text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
