import type { Metadata } from 'next'
import {
  FileText,
  Mail,
  ShoppingCart,
  Zap,
  BarChart2,
  Share2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PricingCard } from '@/components/sections/PricingCard'
import { CTASection } from '@/components/sections/CTASection'
import { SERVICES, PRICING_PLANS } from '@/lib/constants'
import { SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services d\'automatisation — Workflows n8n sur mesure',
  description:
    'Découvrez toutes nos prestations d\'automatisation : contenu SEO, e-commerce, CRM, emails, reporting, réseaux sociaux et bien plus. Clé en main avec n8n.',
  alternates: { canonical: '/services' },
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  FileText,
  Mail,
  ShoppingCart,
  Zap,
  BarChart2,
  Share2,
}

const STACK_ITEMS = [
  'n8n (moteur d\'automatisation)',
  'OpenAI / Claude API',
  'Webhooks & REST API',
  'WordPress / Webflow',
  'Shopify / WooCommerce',
  'Stripe / Mollie',
  'HubSpot / Salesforce',
  'Airtable / Notion / Google Sheets',
  'Mailchimp / ActiveCampaign / Brevo',
  'Slack / Teams / Discord',
  'LinkedIn / Instagram / Twitter/X',
  'Google Analytics / Search Console',
]

const GUARANTEES = [
  'Audit gratuit avant tout devis',
  'Documentation complète livrée',
  'Vous restez propriétaire du code',
  'Tests et validation avant mise en prod',
  'Support inclus après livraison',
  'Aucun lock-in, aucun abonnement forcé',
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────────────────── */}
      <section className="bg-hero text-white pt-36 pb-20 md:pt-44 md:pb-28" aria-labelledby="services-hero-heading">
        <div className="container-main text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-4">
            Nos services
          </p>
          <h1
            id="services-hero-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Tout ce que nous{' '}
            <span className="text-gradient">automatisons pour vous</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Des workflows clé en main adaptés à votre secteur, vos outils et votre niveau
            d'ambition. Conçus sur n8n, déployés en production, documentés et supportés.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Demander un audit gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ── All Services ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="all-services-heading">
        <div className="container-main">
          <SectionHeader
            id="all-services-heading"
            eyebrow="Ce qu'on livre"
            title="Nos domaines d'automatisation"
            description="Chaque service est conçu sur mesure. Nous analysons vos process, concevons le workflow adapté et le déployons sur votre infrastructure."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <article key={service.title} className="card p-7 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-11 h-11 bg-brand-50 rounded-2xl shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-brand-600" aria-hidden="true" />}
                    </div>
                    <h3 className="font-semibold text-slate-900">{service.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
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
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Tech stack ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="stack-heading">
        <div className="container-main">
          <SectionHeader
            id="stack-heading"
            eyebrow="Intégrations"
            title="Plus de 400 outils connectables"
            description={`${SITE_NAME} s'intègre nativement avec les outils que vous utilisez déjà. Si votre outil dispose d'une API, on peut le connecter.`}
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {STACK_ITEMS.map((item) => (
              <span
                key={item}
                className="badge bg-white text-slate-600 border border-slate-200 shadow-sm px-4 py-2 rounded-xl text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Et des centaines d'autres via API personnalisée ou Webhook.
          </p>
        </div>
      </section>

      {/* ── Guarantees ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="guarantees-heading">
        <div className="container-main">
          <div className="bg-brand-600 rounded-3xl p-10 md:p-14 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-200 mb-3">
                  Notre engagement
                </p>
                <h2
                  id="guarantees-heading"
                  className="text-2xl md:text-3xl font-bold mb-4"
                >
                  Ce que vous êtes en droit d'attendre
                </h2>
                <p className="text-brand-100 leading-relaxed">
                  Chaque mission est réalisée avec transparence, rigueur et un seul objectif : un
                  système qui fonctionne en production, pas seulement en démo.
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GUARANTEES.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-brand-200 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-brand-50">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-section-alt"
        id="pricing"
        aria-labelledby="pricing-section-heading"
      >
        <div className="container-main">
          <SectionHeader
            id="pricing-section-heading"
            eyebrow="Tarifs"
            title="Investissement clair, ROI mesuré"
            description="Pas d'abonnement mensuel caché. Vous payez le projet, vous restez propriétaire. Audit gratuit inclus."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Besoin d'un devis personnalisé ? Contactez-nous directement.
          </p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
