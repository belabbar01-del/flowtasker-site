import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, Clock, FileCheck, Rocket, Settings2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeUp } from '@/components/ui/FadeUp'
import { CTASection } from '@/components/sections/CTASection'
import { PROCESS_STEPS, USE_CASES } from '@/lib/constants'

export const metadata: Metadata = {
  title: "Comment ça marche — De l'audit à la production",
  description:
    "Découvrez notre méthode en 4 étapes : audit de vos process, conception du workflow n8n, tests et mise en production. Résultat opérationnel en moins de 5 jours.",
  alternates: { canonical: '/comment-ca-marche' },
}

const STEP_ICONS = [Clock, Settings2, FileCheck, Rocket]

const STEP_COLORS = [
  { bg: 'bg-brand-500/10 border-brand-500/20', text: 'text-brand-400' },
  { bg: 'bg-violet-500/10 border-violet-500/20', text: 'text-violet-400' },
  { bg: 'bg-emerald-500/10 border-emerald-500/20', text: 'text-emerald-400' },
  { bg: 'bg-amber-500/10 border-amber-500/20', text: 'text-amber-400' },
]

const FULL_EXAMPLE = [
  { step: '1', action: "Un article est rédigé automatiquement par l'IA depuis votre brief Notion" },
  { step: '2', action: 'Une image de couverture est générée et ajoutée automatiquement' },
  { step: '3', action: "L'article est publié sur WordPress avec SEO et métadonnées" },
  { step: '4', action: 'Un post LinkedIn est rédigé et programmé depuis le même contenu' },
  { step: '5', action: 'Un email résumé est envoyé à votre équipe sur Slack' },
  { step: '6', action: 'Les analytics sont mis à jour dans votre dashboard Airtable' },
]

const COMMITMENT_POINTS = [
  'Vous recevez la documentation complète de chaque workflow',
  'Vous pouvez reprendre la main à tout moment',
  'Aucune dépendance à nos outils internes',
  'Monitoring et alertes inclus dès le premier jour',
  'Support actif pendant toute la période post-livraison',
]

export default function HowItWorksPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="bg-hero text-white pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        aria-labelledby="how-hero-heading"
      >
        <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden />
        <div className="container-main relative text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-1.5 text-xs font-semibold text-brand-300 mb-6">
            Notre méthode
          </div>
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
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="process-detail-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="process-detail-heading"
              eyebrow="Le processus"
              title="4 étapes. 0 surprise."
              description="Chaque étape est structurée pour minimiser le risque, maximiser la fiabilité et vous garder informé à chaque jalon."
              light
            />
          </FadeUp>

          <div className="mt-16 space-y-8">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = STEP_ICONS[index]
              const color = STEP_COLORS[index]
              const isEven = index % 2 === 1

              return (
                <FadeUp key={step.number} delay={index * 80}>
                  <div
                    className={`flex flex-col md:flex-row gap-8 items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Text */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-brand-600 text-white rounded-xl font-bold text-base shrink-0">
                          {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed ml-16">{step.description}</p>
                    </div>

                    {/* Visual card */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className={`w-full max-w-xs card-dark p-8 flex flex-col items-center gap-4 border ${color.bg}`}>
                        {Icon && (
                          <div className={`w-14 h-14 flex items-center justify-center rounded-2xl border ${color.bg}`}>
                            <Icon className={`w-7 h-7 ${color.text}`} aria-hidden />
                          </div>
                        )}
                        <p className="text-sm text-slate-400 text-center font-medium">
                          Étape {step.number}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Live Example ─────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="example-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="example-heading"
              eyebrow="Exemple concret"
              title="Un article publié automatiquement en 6 actions"
              description="Depuis un brief dans Notion jusqu'au post LinkedIn, en passant par WordPress — tout se déclenche en quelques secondes, sans intervention humaine."
              light
            />
          </FadeUp>

          <FadeUp delay={100}>
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="glass rounded-2xl overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono ml-1">pipeline-contenu.workflow</span>
                </div>

                <div className="p-6 md:p-8 font-mono text-sm space-y-0">
                  {FULL_EXAMPLE.map((item, i) => (
                    <div
                      key={item.step}
                      className={`flex items-start gap-4 py-3 ${
                        i < FULL_EXAMPLE.length - 1 ? 'border-b border-white/[0.05]' : ''
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
          </FadeUp>
        </div>
      </section>

      {/* ── Use Cases ───────────────────────────────────────────────── */}
      <section
        className="section-padding bg-grid-dark"
        style={{ background: '#060b18' }}
        aria-labelledby="usecases2-heading"
      >
        <div className="container-main">
          <FadeUp>
            <SectionHeader
              id="usecases2-heading"
              eyebrow="Secteurs"
              title="Ce que nos clients automatisent par secteur"
              light
            />
          </FadeUp>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <FadeUp key={uc.title} delay={i * 80}>
                <article className="card-dark p-7 h-full">
                  <span className="badge bg-brand-500/10 text-brand-300 border-brand-500/20 mb-4 inline-block">
                    {uc.sector}
                  </span>
                  <h3 className="font-semibold text-white mb-3">{uc.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{uc.description}</p>
                  <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-4">
                    {uc.metrics.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden />
                        <span className="text-xs font-medium text-slate-300">{m}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitment ──────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: '#090e1c' }}
        aria-labelledby="commitment-heading"
      >
        <div className="container-main max-w-3xl mx-auto text-center">
          <FadeUp>
            <SectionHeader
              id="commitment-heading"
              eyebrow="Engagement"
              title="Votre business, votre workflow"
              description="Nous construisons pour vous, pas pour nous. Chaque livraison respecte ces engagements non négociables."
              light
            />
          </FadeUp>

          <FadeUp delay={100}>
            <ul className="mt-10 text-left space-y-4">
              {COMMITMENT_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-brand-400 shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/contact" size="lg" variant="primary">
                Démarrer mon premier workflow
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection />
    </>
  )
}
