import type { Metadata } from 'next'
import { Mail, Clock, MessageSquare, CheckCircle2 } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'
import { SITE_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — Demandez votre audit gratuit',
  description:
    'Contactez Flowtasker pour un audit gratuit de vos process. Réponse sous 24h. Parlez-nous de vos outils, de vos tâches répétitives et de ce que vous souhaitez automatiser.',
  alternates: { canonical: '/contact' },
}

const CONTACT_BENEFITS = [
  'Audit de 30 min gratuit et sans engagement',
  'Feuille de route personnalisée après l\'appel',
  'Réponse garantie sous 24h ouvrées',
  'Aucun argumentaire commercial agressif',
]

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`,
  },
  {
    icon: Clock,
    label: 'Délai de réponse',
    value: '< 24h ouvrées',
    href: null,
  },
  {
    icon: MessageSquare,
    label: 'Audit initial',
    value: 'Gratuit & sans engagement',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <section
      className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left column — context */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 mb-4">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6"
            >
              Parlez-nous de vos{' '}
              <span className="text-gradient">besoins d'automatisation</span>
            </h1>
            <p className="text-slate-600 leading-relaxed mb-8">
              Décrivez vos outils, vos tâches répétitives et ce que vous souhaitez automatiser.
              Nous vous répondons sous 24h avec une première analyse et, si c'est pertinent, un
              rendez-vous pour l'audit gratuit.
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {CONTACT_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-brand-600 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-slate-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact methods */}
            <div className="space-y-4">
              {CONTACT_METHODS.map((method) => (
                <div key={method.label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl shrink-0">
                    <method.icon
                      className="w-5 h-5 text-brand-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{method.label}</p>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm font-medium text-slate-800 hover:text-brand-600 transition-colors"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-800">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 md:p-10">
            <h2 className="text-lg font-bold text-slate-900 mb-1">Envoyer un message</h2>
            <p className="text-sm text-slate-500 mb-8">
              Tous les champs marqués{' '}
              <span className="text-red-500" aria-hidden="true">*</span>{' '}
              sont obligatoires.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
