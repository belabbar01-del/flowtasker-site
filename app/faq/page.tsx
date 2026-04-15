import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { FAQ_ITEMS } from '@/lib/constants'
import { JsonLd } from '@/components/ui/JsonLd'
import { FadeUp } from '@/components/ui/FadeUp'

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur l'automatisation avec Flowtasker",
  description:
    'Toutes les réponses à vos questions sur nos workflows n8n, la sécurité, les délais, le pricing, la propriété du code et les intégrations disponibles.',
  alternates: { canonical: '/faq' },
}

const FAQ_CATEGORIES = [
  {
    title: 'Général & n8n',
    items: FAQ_ITEMS.slice(0, 3),
  },
  {
    title: 'Sécurité & données',
    items: FAQ_ITEMS.slice(3, 5),
  },
  {
    title: 'Délais & livrables',
    items: FAQ_ITEMS.slice(5, 8),
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="bg-hero text-white pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        aria-labelledby="faq-hero-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden />
        <div className="container-main relative text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 text-xs font-semibold text-brand-300 mb-6">
            FAQ
          </div>
          <h1
            id="faq-hero-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Toutes vos questions,{' '}
            <span className="text-gradient">des réponses claires</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Avant de nous contacter, consultez les réponses aux questions les plus fréquentes sur
            nos services, notre méthode et notre approche de la sécurité.
          </p>
        </div>
      </section>

      {/* ── FAQ by category ──────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="faq-content-heading"
      >
        <div className="container-main max-w-3xl mx-auto">
          <h2 id="faq-content-heading" className="sr-only">
            Questions fréquentes par catégorie
          </h2>

          <div className="space-y-14">
            {FAQ_CATEGORIES.map((category, i) => (
              <FadeUp key={category.title} delay={i * 80}>
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-white/[0.07]">
                    {category.title}
                  </h3>
                  <FAQAccordion items={category.items} />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Still have questions */}
          <FadeUp delay={200}>
            <div className="mt-16 text-center p-10 card-dark rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Vous n'avez pas trouvé votre réponse ?
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Contactez-nous directement. Nous répondons en moins de 24h ouvrées. Et si vous
                souhaitez discuter de votre projet, l'audit initial est gratuit et sans engagement.
              </p>
              <Button href="/contact" size="lg" variant="primary">
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
