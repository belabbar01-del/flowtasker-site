'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between h-16 md:h-18" aria-label="Navigation principale">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 rounded"
            aria-label="Flowtasker — Retour à l'accueil"
          >
            <span className="flex items-center justify-center w-8 h-8 bg-brand-600 rounded-lg">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </span>
            <span className={cn('transition-colors', isScrolled ? 'text-slate-900' : 'text-white')}>
              Flowtasker
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-brand-600 bg-brand-50'
                        : isScrolled
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              variant={isScrolled ? 'primary' : 'outline'}
            >
              Audit gratuit
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors',
              isScrolled
                ? 'text-slate-600 hover:bg-slate-100'
                : 'text-white hover:bg-white/10'
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!isOpen}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-brand-50 text-brand-600'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="pt-2 pb-1">
            <Button href="/contact" size="sm" className="w-full">
              Demander un audit gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
