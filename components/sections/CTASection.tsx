import { Button } from '@/components/ui/Button'
import { ArrowRight, Calendar } from 'lucide-react'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: string
  primaryHref?: string
  secondaryCTA?: string
  secondaryHref?: string
}

export function CTASection({
  title = 'Prêt à libérer votre équipe des tâches répétitives ?',
  description = "Réservez un audit gratuit de 30 minutes. On analyse vos process, on identifie les automatisations à fort impact et on vous propose une feuille de route concrète. Sans engagement.",
  primaryCTA = 'Demander mon audit gratuit',
  primaryHref = '/contact',
  secondaryCTA = 'Voir les services',
  secondaryHref = '/services',
}: CTASectionProps) {
  return (
    <section className="bg-hero text-white" aria-labelledby="cta-heading">
      <div className="container-main py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-4">
            Passez à l'action
          </p>
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} size="lg" variant="primary">
              <Calendar className="w-4 h-4" />
              {primaryCTA}
            </Button>
            <Button href={secondaryHref} size="lg" variant="outline">
              {secondaryCTA}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
