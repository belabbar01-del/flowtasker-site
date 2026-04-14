import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Zap,
  FileText,
  Mail,
  ShoppingCart,
  BarChart2,
  Share2,
  Clock,
  TrendingUp,
  Shield,
  ShoppingBag,
  Briefcase,
  Lightbulb,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TrustBand } from '@/components/sections/TrustBand'
import { CTASection } from '@/components/sections/CTASection'
import { PricingCard } from '@/components/sections/PricingCard'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { SERVICES, PROCESS_STEPS, PRICING_PLANS, FAQ_ITEMS, USE_CASES } from '@/lib/constants'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Automatisation business clé en main avec n8n`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  FileText,
  Mail,
  ShoppingCart,
  Zap,
  BarChart2,
  Share2,
}

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  ShoppingBag,
  Briefcase,
  Lightbulb,
}

const BENEFITS = [
  {
    icon: Clock,
    title: 'Récupérez des heures chaque semaine',
    description:
      "Nos clients économisent en moyenne 15h par semaine en éliminant les tâches manuelles répétitives. Ces heures reviennent au cœur de leur business.",
  },
  {
    icon: TrendingUp,
    title: 'Scalez sans recruter',
    description:
      "Un workflow bien conçu fait le travail de plusieurs personnes. Augmentez votre volume d'activité sans proportionner vos coûts RH.",
  },
  {
    icon: Shield,
    title: 'Zéro erreur humaine',
    description:
      "Les processus automatisés éliminent les erreurs de saisie, les oublis et les incohérences. Vos données restent propres et fiables.",
  },
  {
    icon: Zap,
    title: 'Déployé en jours, pas en mois',
    description:
      "Premier workflow en production sous 5 jours ouvrés. Architecture sur mesure, intégration dans vos outils existants. Aucune migration.",
  },
]

const FAQ_HOME = FAQ_ITEMS.slice(0, 4)

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-hero text-white relative overflow-hidden" aria-labelledby="hero-heading">
        {/* Background grid */}
        <div
          className="absolute inset-0 bg-hero-grid opacity-100 pointer-events-none"
          aria-hidden="true"
        />
        {/* Glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-main relative pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="blue" className="bg-brand-900/60 text-brand-300 border-brand-800">
                <Zap className="w-3 h-3" />
                Propulsé par n8n
              </Badge>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Automatisez votre business.{' '}
              <span className="text-gradient">
                Multipliez vos résultats.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Nous concevons et déployons des workflows intelligents avec n8n pour éliminer vos
              tâches répétitives, connecter vos outils et faire tourner votre activité — même
              quand vous dormez.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg" variant="primary">
                Demander un audit gratuit
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/comment-ca-marche" size="lg" variant="outline">
                Comment ça marche
              </Button>
            </div>

            {/* Social proof micro-line */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              {[
                '✓ Audit gratuit sans engagement',
                '✓ Premier workflow livré en 5 jours',
                '✓ Vous restez propriétaire du code',
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Band ───────────────────────────────────────────────────── */}
      <TrustBand />

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="benefits-heading">
        <div className="container-main">
          <SectionHeader
            id="benefits-heading"
            eyebrow="Pourquoi Flowtasker"
            title="Moins de friction. Plus de croissance."
            description="L'automatisation n'est plus réservée aux grandes entreprises. Nos workflows n8n sur mesure s'adaptent à votre taille, vos outils et votre ambition."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="flex flex-col gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-brand-50 rounded-2xl shrink-0">
                  <benefit.icon className="w-6 h-6 text-brand-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services overview ────────────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="services-heading">
        <div className="container-main">
          <SectionHeader
            id="services-heading"
            eyebrow="Nos services"
            title="Ce que nous automatisons pour vous"
            description="De la génération de contenu à la gestion e-commerce, en passant par les emails et le reporting — nous couvrons l'ensemble de vos flux métier."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <div
                  key={service.title}
                  className="card p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl shrink-0">
                    {Icon && <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge bg-slate-100 text-slate-500 border border-slate-200 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" size="md" variant="secondary">
              Voir tous les services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="process-heading">
        <div className="container-main">
          <SectionHeader
            id="process-heading"
            eyebrow="Notre méthode"
            title="De l'idée à la production en 4 étapes"
            description="Un processus structuré pour des workflows fiables, documentés et opérationnels dès le premier jour."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-4">
                {/* Connector line for desktop */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-5 left-[calc(50%+28px)] w-full h-px bg-slate-200"
                    aria-hidden="true"
                  />
                )}
                <div className="flex items-center justify-center w-11 h-11 bg-brand-600 text-white rounded-xl font-bold text-sm shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/comment-ca-marche" variant="secondary" size="md">
              En savoir plus sur notre méthode
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="usecases-heading">
        <div className="container-main">
          <SectionHeader
            id="usecases-heading"
            eyebrow="Cas d'usage concrets"
            title="Ce que nos clients automatisent réellement"
            description="Des exemples précis par secteur, avec l'impact mesuré sur leur activité."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => {
              const Icon = USE_CASE_ICONS[uc.icon]
              return (
                <article key={uc.title} className="card p-7 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />}
                    </div>
                    <span className="badge bg-brand-50 text-brand-700 border-brand-100 text-xs">
                      {uc.sector}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{uc.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{uc.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-slate-100">
                    {uc.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
                        <span className="text-xs font-medium text-slate-700">{m}</span>
                      </div>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" id="pricing" aria-labelledby="pricing-heading">
        <div className="container-main">
          <SectionHeader
            id="pricing-heading"
            eyebrow="Tarifs"
            title="Un investissement, pas un coût"
            description="Des prix transparents pour un ROI mesurable dès les premières semaines. Pas d'abonnement caché, pas de lock-in."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Tous les projets incluent un audit gratuit, la documentation complète et un support
            post-déploiement. Paiement sécurisé par virement ou carte.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="faq-heading">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              id="faq-heading"
              eyebrow="FAQ"
              title="Questions fréquentes"
              description="Tout ce que vous devez savoir avant de nous contacter."
            />
            <div className="mt-10">
              <FAQAccordion items={FAQ_HOME} />
            </div>
            <div className="mt-8 text-center">
              <Button href="/faq" variant="secondary" size="md">
                Toutes les questions
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
