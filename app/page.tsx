import type { Metadata } from 'next'
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
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { TrustBand } from '@/components/sections/TrustBand'
import { CTASection } from '@/components/sections/CTASection'
import { PricingCard } from '@/components/sections/PricingCard'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { IntegrationBand } from '@/components/sections/IntegrationBand'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { WorkflowVisual } from '@/components/sections/WorkflowVisual'
import { JsonLd } from '@/components/ui/JsonLd'
import { SERVICES, PROCESS_STEPS, PRICING_PLANS, FAQ_ITEMS, USE_CASES } from '@/lib/constants'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: `${SITE_NAME} — Automatisation business clé en main avec n8n`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  FileText, Mail, ShoppingCart, Zap, BarChart2, Share2,
}

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  ShoppingBag, Briefcase, Lightbulb,
}

const BENEFITS = [
  {
    icon: Clock,
    title: "Récupérez des heures chaque semaine",
    description: "Nos clients économisent en moyenne 15h par semaine en éliminant les tâches manuelles répétitives. Ces heures reviennent au cœur de leur business.",
    iconBg: 'bg-brand-500/10 border-brand-500/20',
    iconColor: 'text-brand-400',
  },
  {
    icon: TrendingUp,
    title: "Scalez sans recruter",
    description: "Un workflow bien conçu fait le travail de plusieurs personnes. Augmentez votre volume sans proportionner vos coûts RH.",
    iconBg: 'bg-violet-500/10 border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Shield,
    title: "Zéro erreur humaine",
    description: "Les processus automatisés éliminent les erreurs de saisie, les oublis et les incohérences. Vos données restent propres et fiables.",
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Zap,
    title: "Déployé en jours, pas en mois",
    description: "Premier workflow en production sous 5 jours ouvrés. Architecture sur mesure, intégration dans vos outils existants. Aucune migration.",
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconColor: 'text-amber-400',
  },
]

const COMPARISON = [
  {
    label: "Zapier / Make",
    features: ["Coût par opération", "Plafonds d'usage", "Infrastructure mutualisée", "Peu de personnalisation", "Dépendant des intégrations natives"],
    highlight: false,
  },
  {
    label: "n8n avec Flowtasker",
    features: ["Coût fixe au projet", "Volume illimité", "Hébergement au choix", "Logique métier sur mesure", "N'importe quelle API connectée"],
    highlight: true,
  },
  {
    label: "Développement custom",
    features: ["Budget élevé", "Délais longs", "Maintenabilité complexe", "Dépendance développeur", "Risque sur le long terme"],
    highlight: false,
  },
]

const FAQ_HOME = FAQ_ITEMS.slice(0, 4)

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Automatisation business avec n8n",
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  description: SITE_DESCRIPTION,
  serviceType: 'Business Process Automation',
  areaServed: 'Worldwide',
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '297', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Growth', price: '697', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Enterprise', description: 'Sur devis' },
  ],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-hero text-white relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden />

        <div className="container-main relative pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 text-xs font-semibold text-brand-300 mb-6">
                <Zap className="w-3.5 h-3.5" aria-hidden />
                Propulsé par n8n
              </div>

              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
              >
                Automatisez votre business.{' '}
                <span className="text-gradient">Multipliez vos résultats.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
                Nous concevons et déployons des workflows intelligents avec n8n pour éliminer vos
                tâches répétitives, connecter vos outils et faire tourner votre activité — même
                quand vous dormez.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" variant="primary">
                  Demander un audit gratuit
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/comment-ca-marche" size="lg" variant="outline">
                  Comment ça marche
                </Button>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                {[
                  "✓ Audit gratuit sans engagement",
                  "✓ Premier workflow en 5 jours",
                  "✓ Vous restez propriétaire",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            {/* Right — animated workflow visual */}
            <div className="hidden lg:block">
              <WorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Band ───────────────────────────────────────────────────── */}
      <TrustBand />

      {/* ── Integration Band ─────────────────────────────────────────────── */}
      <IntegrationBand />

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="benefits-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="benefits-heading"
              eyebrow="Pourquoi Flowtasker"
              title="Moins de friction. Plus de croissance."
              description="L'automatisation n'est plus réservée aux grandes entreprises. Nos workflows n8n sur mesure s'adaptent à votre taille, vos outils et votre ambition."
              light
            />
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit, i) => (
              <FadeUp key={benefit.title} delay={i * 80}>
                <div className="card-dark p-6 flex flex-col gap-4 h-full">
                  <div className={`w-11 h-11 flex items-center justify-center rounded-xl border ${benefit.iconBg}`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.iconColor}`} aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services overview ────────────────────────────────────────────── */}
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="services-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="services-heading"
              eyebrow="Nos services"
              title="Ce que nous automatisons pour vous"
              description="De la génération de contenu à la gestion e-commerce, en passant par les emails et le reporting — nous couvrons l'ensemble de vos flux métier."
              light
            />
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <FadeUp key={service.title} delay={i * 60}>
                  <div className="card-dark p-6 flex flex-col gap-4 h-full">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-brand-400" aria-hidden />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge bg-white/[0.04] text-slate-400 border border-white/[0.07] text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <Button href="/services" size="md" variant="outline">
              Voir tous les services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="process-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="process-heading"
              eyebrow="Notre méthode"
              title="De l'idée à la production en 4 étapes"
              description="Un processus structuré pour des workflows fiables, documentés et opérationnels dès le premier jour."
              light
            />
          </FadeUp>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <FadeUp key={step.number} delay={index * 100}>
                <div className="relative flex flex-col gap-4">
                  {index < PROCESS_STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-5 left-[calc(50%+28px)] w-full h-px bg-white/[0.06]"
                      aria-hidden
                    />
                  )}
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-brand-600 text-white font-bold text-sm shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/comment-ca-marche" variant="outline" size="md">
              En savoir plus sur notre méthode
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="usecases-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="usecases-heading"
              eyebrow="Cas d'usage concrets"
              title="Ce que nos clients automatisent réellement"
              description="Des exemples précis par secteur, avec l'impact mesuré sur leur activité."
              light
            />
          </FadeUp>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => {
              const Icon = USE_CASE_ICONS[uc.icon]
              return (
                <FadeUp key={uc.title} delay={i * 100}>
                  <article className="card-dark p-7 flex flex-col gap-5 h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-brand-500/10 border border-brand-500/20 rounded-xl shrink-0">
                        {Icon && <Icon className="w-5 h-5 text-brand-400" aria-hidden />}
                      </div>
                      <span className="badge bg-brand-500/10 text-brand-300 border-brand-500/20 text-xs">
                        {uc.sector}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{uc.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{uc.description}</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/[0.06]">
                      {uc.metrics.map((m) => (
                        <div key={m} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden />
                          <span className="text-xs font-medium text-slate-300">{m}</span>
                        </div>
                      ))}
                    </div>
                  </article>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        id="pricing"
        aria-labelledby="pricing-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="pricing-heading"
              eyebrow="Tarifs"
              title="Un investissement, pas un coût"
              description="Des prix transparents pour un ROI mesurable dès les premières semaines. Pas d'abonnement caché, pas de lock-in."
              light
            />
          </FadeUp>
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

      {/* ── Pourquoi n8n ─────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="diff-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="diff-heading"
              eyebrow="Pourquoi n8n ?"
              title="Plus puissant que Zapier. Plus abordable que Make."
              description="n8n n'a pas de limite d'opérations, pas de coût variable qui explose avec le volume, et s'auto-héberge sur votre infrastructure si vous le souhaitez."
              light
            />
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {COMPARISON.map((col, i) => (
              <FadeUp key={col.label} delay={i * 80}>
                <div
                  className={cn(
                    'rounded-2xl p-6 border h-full',
                    col.highlight
                      ? 'bg-brand-600 border-brand-500 shadow-xl shadow-brand-600/20'
                      : 'bg-white/[0.02] border-white/[0.07]'
                  )}
                >
                  <p className={`text-base font-bold mb-5 ${col.highlight ? 'text-white' : 'text-slate-300'}`}>
                    {col.label}
                  </p>
                  <ul className="space-y-3">
                    {col.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        {col.highlight ? (
                          <CheckCircle2 className="w-4 h-4 text-brand-200 shrink-0" aria-hidden />
                        ) : (
                          <span className="w-4 h-4 flex items-center justify-center text-slate-600 shrink-0 leading-none text-base" aria-hidden>×</span>
                        )}
                        <span className={`text-sm ${col.highlight ? 'text-brand-50' : 'text-slate-500'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="faq-heading"
      >
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <SectionHeader
                id="faq-heading"
                eyebrow="FAQ"
                title="Questions fréquentes"
                description="Tout ce que vous devez savoir avant de nous contacter."
                light
              />
            </FadeUp>
            <div className="mt-10">
              <FAQAccordion items={FAQ_HOME} />
            </div>
            <div className="mt-8 text-center">
              <Button href="/faq" variant="outline" size="md">
                Toutes les questions
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
