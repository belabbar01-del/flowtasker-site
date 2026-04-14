'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to monitoring service in production
    console.error('[page-error]', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" aria-hidden />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Une erreur s&apos;est produite
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Une erreur inattendue s&apos;est produite sur cette page. Elle a été enregistrée
          automatiquement. Vous pouvez réessayer ou retourner à l&apos;accueil.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={reset} variant="primary" size="md">
            <RefreshCw className="w-4 h-4" />
            Réessayer
          </Button>
          <Button href="/" variant="secondary" size="md">
            <Home className="w-4 h-4" />
            Accueil
          </Button>
        </div>
      </div>
    </div>
  )
}
