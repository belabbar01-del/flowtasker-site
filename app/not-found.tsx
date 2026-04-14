import type { Metadata } from 'next'
import { ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page introuvable — 404',
  description: 'Cette page n\'existe pas ou a été déplacée.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-hero flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-brand-600 mb-4 leading-none">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Cette page n'existe pas
        </h1>
        <p className="text-slate-300 mb-10 leading-relaxed">
          La page que vous cherchez a peut-être été déplacée, supprimée, ou l'URL est incorrecte.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg" variant="primary">
            <Home className="w-4 h-4" />
            Retour à l'accueil
          </Button>
          <Button href="/contact" size="lg" variant="outline">
            <ArrowLeft className="w-4 h-4" />
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  )
}
