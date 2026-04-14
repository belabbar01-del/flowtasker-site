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
                ? 'border-brand-200 shadow-sm'
                : 'border-slate-200 hover:border-slate-300'
            )}
            role="listitem"
          >
            <button
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              <span className="font-semibold text-slate-900 text-base leading-snug">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-brand-600 shrink-0 transition-transform duration-300',
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
              <div className="px-6 pb-5 bg-white">
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
