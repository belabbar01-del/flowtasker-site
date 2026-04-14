import type { Metadata } from 'next'
import { Shield, Lock, Eye, Key, Server, FileCheck, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Sécurité & Autorisation — Protection de vos données',
  description:
    'Découvrez nos engagements en matière de sécurité : chiffrement, accès contrôlés, absence de stockage de données sensibles et transparence totale sur chaque automatisation.',
  alternates: { canonical: '/securite' },
}

const SECURITY_PRINCIPLES = [
  {
    icon: Lock,
    title: 'Connexions chiffrées',
    description:
      'Toutes les communications entre n8n et vos outils utilisent HTTPS/TLS. Aucune donnée ne transite en clair. Les credentials sont stockés dans les secrets managers, jamais en dur dans le code.',
  },
  {
    icon: Key,
    title: 'Accès au minimum nécessaire',
    description:
      'Chaque intégration ne reçoit que les permissions strictement requises (principe du moindre privilège). Nous ne demandons jamais un accès complet quand un accès en lecture seule suffit.',
  },
  {
    icon: Eye,
    title: 'Transparence totale',
    description:
      'Avant tout déploiement, vous validez exactement ce que fait le workflow : quels outils sont accédés, quelles données sont lues ou écrites, et dans quel ordre. Aucune boîte noire.',
  },
  {
    icon: Server,
    title: 'Infrastructure sécurisée',
    description:
      'Vos workflows tournent sur une infrastructure isolée (VPS sécurisé ou votre propre infrastructure). Accès SSH par clés uniquement, pare-feu configuré, mises à jour de sécurité automatiques.',
  },
  {
    icon: FileCheck,
    title: 'Aucun stockage de données sensibles',
    description:
      'Flowtasker ne stocke pas vos données clients, commandes ou contenus. Les workflows sont des tuyaux, pas des entrepôts. Vos données restent dans vos outils.',
  },
  {
    icon: AlertTriangle,
    title: 'Monitoring & alertes',
    description:
      'Chaque workflow est supervisé en temps réel. En cas d\'erreur, d\'anomalie ou d\'interruption, vous recevez une alerte immédiate. Aucune défaillance silencieuse.',
  },
]

const AUTHORIZATION_STEPS = [
  {
    number: '01',
    title: 'Vous listez les outils concernés',
    description:
      'Avant tout, vous nous indiquez exactement quels outils, comptes et données seront impliqués dans l\'automatisation.',
  },
  {
    number: '02',
    title: 'Nous documentons les accès demandés',
    description:
      'Pour chaque outil, nous listons précisément les scopes d\'accès OAuth nécessaires et justifions chaque permission demandée.',
  },
  {
    number: '03',
    title: 'Vous validez et accordez les accès',
    description:
      'Vous accordez vous-même les accès via les interfaces officielles des outils (OAuth, API key). Nous ne récupérons jamais vos mots de passe.',
  },
  {
    number: '04',
    title: 'Revue et révocation à tout moment',
    description:
      'Vous pouvez révoquer les accès à tout moment depuis les paramètres de chaque outil. La documentation livrée vous explique exactement comment procéder.',
  },
]

const CERTIFICATIONS_NOTES = [
  'n8n est open-source et auditable',
  'Données hébergées en Europe disponible sur demande',
  'Respect du RGPD dans la conception des workflows',
  "Aucune revente ni partage de vos données",
  'Logs de workflow disponibles sur demande',
  'Processus d\'offboarding propre et documenté',
]

export default function SecurityPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="bg-hero text-white pt-36 pb-20 md:pt-44 md:pb-28"
        aria-labelledby="security-hero-heading"
      >
        <div className="container-main text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center bg-brand-600/20 rounded-2xl border border-brand-500/30">
              <Shield className="w-8 h-8 text-brand-400" />
            </div>
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-4">
            Sécurité & Autorisation
          </p>
          <h1
            id="security-hero-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Vos données sont{' '}
            <span className="text-gradient">votre propriété</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed">
            Nous construisons des systèmes fiables, transparents et sécurisés. Vous savez exactement
            ce qui se passe, quand ça se passe, et vous gardez le contrôle à chaque instant.
          </p>
        </div>
      </section>

      {/* ── Security Principles ──────────────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="principles-heading">
        <div className="container-main">
          <SectionHeader
            id="principles-heading"
            eyebrow="Principes"
            title="La sécurité intégrée dès la conception"
            description="Chaque workflow que nous concevons respecte ces 6 principes non négociables de sécurité."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECURITY_PRINCIPLES.map((principle) => (
              <div key={principle.title} className="card p-7 flex flex-col gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-brand-50 rounded-2xl shrink-0">
                  <principle.icon
                    className="w-5 h-5 text-brand-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{principle.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Authorization Process ────────────────────────────────────── */}
      <section className="section-padding bg-section-alt" aria-labelledby="auth-process-heading">
        <div className="container-main">
          <SectionHeader
            id="auth-process-heading"
            eyebrow="Autorisation"
            title="Comment nous obtenons vos accès"
            description="Chaque autorisation est explicite, documentée et révocable. Nous n'avons jamais accès à vos mots de passe."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {AUTHORIZATION_STEPS.map((step) => (
              <div key={step.number} className="card p-7 flex gap-5">
                <div className="flex items-center justify-center w-10 h-10 bg-brand-600 text-white rounded-xl font-bold text-sm shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RGPD / Certifications notes ─────────────────────────────── */}
      <section className="section-padding bg-white" aria-labelledby="compliance-heading">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              id="compliance-heading"
              eyebrow="Conformité"
              title="Nos engagements supplémentaires"
            />
            <ul className="mt-10 space-y-4">
              {CERTIFICATIONS_NOTES.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-brand-600 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700">{note}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="font-semibold text-amber-900 mb-1">
                    Vous avez des exigences de sécurité spécifiques ?
                  </p>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Nous adaptons nos pratiques à vos contraintes : infra on-premise, chiffrement de
                    bout en bout, SLA personnalisé ou audit de sécurité tiers. Contactez-nous pour en
                    discuter.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button href="/contact" size="lg" variant="primary">
                Discuter de vos besoins de sécurité
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        title="Prêt à automatiser en toute confiance ?"
        description="Audit gratuit inclus. On analyse vos process et on vous explique exactement comment fonctionne chaque automatisation avant de déployer quoi que ce soit."
      />
    </>
  )
}
