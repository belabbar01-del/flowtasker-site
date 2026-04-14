import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Clock, FileCheck, Rocket, Settings2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CTASection } from '@/components/sections/CTASection'
import { PROCESS_STEPS, USE_CASES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Comment ça marche — De l\'audit à la production',
  description:
    'Découvrez notre méthode en 4 étapes : audit de vos process, conception du workflow n8n, tests et mise en production. Résultat opérationnel en moins de 5 jours.',
  alternates: { canonical: '/comment-ca-marche' },
}

const STEP_ICONS = [Clock, Settings2, FileCheck, Rocket]

const FULL_EXAMPLE = [
  { step: '1', action: 'Un article est rédigé automatiquement par l\'IA depuis votre brief Notion' },
  { step: '2', action: 'Une image de couverture est générée et ajoutée automatiquement' },
  { step: '3', action: 'L\'article est publié sur WordPress avec SEO et métadonnées' },
  { step: '4', action: 'Un post LinkedIn est rédigé et programmé depuis le même contenu' },
  { step: '5', action: 'Un email résumé est envoyé à votre équipe sur Slack' },
  { step: '6', action: 'Les analytics sont mis à jour dans votre dashboard Airtable' },
]

const COMMITMENT_POINTS = [
  'Vous recevez la documentation complète de chaque workflow',
  'Vous pouvez reprendre la main à tout moment',
  'Aucune dépendance à nos outils internes',
  "Monitoring et alertes inclus dès le premier jour",
  'Support actif pendant toute la période post-livraison',
]

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="bg-hero text-white pt-36 pb-20 md:pt-44 md:pb-28"
        aria-labelledby="how-hero-heading"
      >
        <div className="container-main text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-4">
            Notre méthode
          </p>
          <h1
            id="how-hero-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            De votre brief à un{' '}
            <span className="text-gradient">workflow en production</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Un processus structuré en 4 étapes pour des automatisations fiables, documentées et
            opérationnelles. Zéro improvisation, zéro surprise.
          </p>
          <Button href="/contact" size="lg" variant="primary">
            Démarrer par un audit gratuit
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* ── Process Steps (detailed) ─────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="process-detail-heading">
        <div className="container-main">
          <SectionHeader
            id="process-detail-heading"
            eyebrow="Le processus"
            title="4 étapes. 0 surprise."
            description="Chaque étape est structurée pour minimiser le risque, maximiser la fiabilité et vous garder informé à chaque jalon."
          />
          <div className="mt-16 space-y-10">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index]
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-brand-600 text-white rounded-xl font-bold text-base shrink-0">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed ml-16">{step.description}</p>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full max-w-xs bg-slate-50 rounded-2xl p-8 flex flex-col items-center gap-4 border border-slate-200">
                      {Icon && (
                        <div className="w-14 h-14 flex items-center justify-center bg-brand-50 rounded-2xl">
                          <Icon className="w-7 h-7 text-brand-600" aria-hidden="true" />
                        </div>
                      )}
                      <p className="text-sm text-slate-500 text-center font-medium">
                        Étape {step.number}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Live Example ─────────────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="example-heading">
        <div className="container-main">
          <SectionHeader
            id="example-heading"
            eyebrow="Exemple concret"
            title="Un article publié automatiquement en 6 actions"
            description="Depuis un brief dans Notion jusqu'au post LinkedIn, en passant par WordPress — tout se déclenche en quelques secondes, sans intervention humaine."
          />
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-dark rounded-2xl p-6 md:p-8 font-mono text-sm space-y-0">
              {FULL_EXAMPLE.map((item, i) => (
                <div
                  key={item.step}
                  className={`flex items-start gap-4 py-3 ${
                    i < FULL_EXAMPLE.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-brand-600 text-white rounded-md text-xs font-bold">
                    {item.step}
                  </span>
                  <span className="text-slate-300 leading-relaxed">{item.action}</span>
                </div>
              ))}
              <div className="pt-4 flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden />
                <span className="text-sm font-medium">
                  Workflow terminé — 0 action manuelle requise
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="usecases2-heading">
        <div className="container-main">
          <SectionHeader
            id="usecases2-heading"
            eyebrow="Secteurs"
            title="Ce que nos clients automatisent par secteur"
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <article key={uc.title} className="card p-7">
                <p className="badge bg-brand-50 text-brand-700 border-brand-100 mb-4">{uc.sector}</p>
                <h3 className="font-semibold text-slate-900 mb-3">{uc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{uc.description}</p>
                <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
                  {uc.metrics.map((m) => (
                    <div key={m} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
                      <span className="text-xs font-medium text-slate-700">{m}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our commitment ──────────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="commitment-heading">
        <div className="container-main max-w-3xl mx-auto text-center">
          <SectionHeader
            id="commitment-heading"
            eyebrow="Engagement"
            title="Votre business, votre workflow"
            description="Nous construisons pour vous, pas pour nous. Chaque livraison respecte ces engagements non négociables."
          />
          <ul className="mt-10 text-left space-y-4">
            {COMMITMENT_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 text-brand-600 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-slate-700">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/contact" size="lg" variant="primary">
              Démarrer mon premier workflow
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
