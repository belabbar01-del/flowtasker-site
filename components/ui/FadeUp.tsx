'use client'

import { useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  /** Delay in ms before the transition starts once visible */
  delay?: number
  /** IntersectionObserver threshold (0–1) */
  threshold?: number
}

/**
 * Scroll-reveal wrapper.
 * Fades children up once they enter the viewport.
 * No external dependencies — pure CSS transition + IntersectionObserver.
 */
export function FadeUp({
  children,
  className,
  delay = 0,
  threshold = 0.08,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn('fade-up', visible && 'visible', className)}
    >
      {children}
    </div>
  )
}
