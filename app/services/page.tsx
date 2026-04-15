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
import { FadeUp } from '@/components/ui/FadeUp'
import { PricingCard } from '@/components/sections/PricingCard'
import { CTASection } from '@/components/sections/CTASection'
import { SERVICES, PRICING_PLANS } from '@/lib/constants'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { JsonLd } from '@/components/ui/JsonLd'

export const metadata: Metadata = {
  title: "Services d'automatisation — Workflows n8n sur mesure",
  description:
    "Découvrez toutes nos prestations d'automatisation : contenu SEO, e-commerce, CRM, emails, reporting, réseaux sociaux et bien plus. Clé en main avec n8n.",
  alternates: { canonical: '/services' },
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  FileText, Mail, ShoppingCart, Zap, BarChart2, Share2,
}

const STACK_ITEMS = [
  "n8n (moteur d'automatisation)",
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

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: `${SITE_NAME} — Services d'automatisation`,
  url: `${SITE_URL}/services`,
  serviceType: 'Business Process Automation',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Automatisation business avec n8n",
    itemListElement: [
      { '@type': 'Offer', name: 'Starter — 1 workflow', price: '297', priceCurrency: 'USD' },
      { '@type': 'Offer', name: "Growth — jusqu'à 5 workflows", price: '697', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Enterprise — sur mesure' },
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />

      {/* ── Page Hero ───────────────────────────────────────────────────── */}
      <section
        className="bg-hero text-white pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        aria-labelledby="services-hero-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden />
        <div className="container-main relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 text-xs font-semibold text-brand-300 mb-6">
            <Zap className="w-3.5 h-3.5" aria-hidden />
            Nos services
          </div>
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
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="all-services-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="all-services-heading"
              eyebrow="Ce qu'on livre"
              title="Nos domaines d'automatisation"
              description="Chaque service est conçu sur mesure. Nous analysons vos process, concevons le workflow adapté et le déployons sur votre infrastructure."
              light
            />
          </FadeUp>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon]
              return (
                <FadeUp key={service.title} delay={i * 60}>
                  <article className="card-dark p-7 flex flex-col gap-4 h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-11 h-11 bg-brand-500/10 border border-brand-500/20 rounded-2xl shrink-0">
                        {Icon && <Icon className="w-5 h-5 text-brand-400" aria-hidden />}
                      </div>
                      <h3 className="font-semibold text-white">{service.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
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
                  </article>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Tech stack ──────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="stack-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="stack-heading"
              eyebrow="Intégrations"
              title="Plus de 400 outils connectables"
              description={`${SITE_NAME} s'intègre nativement avec les outils que vous utilisez déjà. Si votre outil dispose d'une API, on peut le connecter.`}
              light
            />
          </FadeUp>
          <FadeUp delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {STACK_ITEMS.map((item) => (
                <span
                  key={item}
                  className="badge bg-white/[0.04] text-slate-300 border border-white/[0.07] px-4 py-2 rounded-xl text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-slate-500">
              Et des centaines d'autres via API personnalisée ou Webhook.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Guarantees ──────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="guarantees-heading"
      >
        <div className="container-main">
          <FadeUp>
            <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 bg-brand-600/10 border border-brand-500/20">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-brand-600/15 blur-3xl pointer-events-none"
                aria-hidden
              />
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-3">
                    Notre engagement
                  </p>
                  <h2
                    id="guarantees-heading"
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                  >
                    Ce que vous êtes en droit d'attendre
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    Chaque mission est réalisée avec transparence, rigueur et un seul objectif : un
                    système qui fonctionne en production, pas seulement en démo.
                  </p>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {GUARANTEES.map((g) => (
                    <li key={g} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-brand-400 shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span className="text-sm text-slate-300">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        id="pricing"
        aria-labelledby="pricing-section-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="pricing-section-heading"
              eyebrow="Tarifs"
              title="Investissement clair, ROI mesuré"
              description="Pas d'abonnement mensuel caché. Vous payez le projet, vous restez propriétaire. Audit gratuit inclus."
              light
            />
          </FadeUp>
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
