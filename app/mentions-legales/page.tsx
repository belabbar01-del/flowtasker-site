import type { Metadata } from 'next'
import { SITE_EMAIL, SITE_URL } from '@/lib/constants'

const LEGAL_ENTITY = 'AIFLOWTASKER LLC'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales de ${LEGAL_ENTITY}, éditeur du site Flowtasker.`,
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28" style={{ background: '#060b18' }}>
      <div className="container-main max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Mentions légales</h1>
        <p className="text-sm text-slate-500 mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-sm text-slate-400 leading-relaxed">
          <section aria-labelledby="editeur-heading">
            <h2 id="editeur-heading" className="text-xl font-semibold text-white mb-4">
              1. Éditeur du site
            </h2>
            <p className="mb-4">
              Le site Flowtasker est édité par {LEGAL_ENTITY}, Limited Liability Company enregistrée aux États-Unis.
            </p>
            <div className="space-y-1.5">
              <p><strong className="text-slate-300">Nom commercial :</strong> Flowtasker</p>
              <p><strong className="text-slate-300">Société éditrice :</strong> {LEGAL_ENTITY}</p>
              <p><strong className="text-slate-300">Forme juridique :</strong> Limited Liability Company (LLC)</p>
              <p><strong className="text-slate-300">Pays d&apos;enregistrement :</strong> États-Unis</p>
              <p>
                <strong className="text-slate-300">Email de contact :</strong>{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-brand-400 hover:text-brand-300 hover:underline transition-colors">
                  {SITE_EMAIL}
                </a>
              </p>
              <p>
                <strong className="text-slate-300">Site web :</strong>{' '}
                <a href={SITE_URL} className="text-brand-400 hover:text-brand-300 hover:underline transition-colors">
                  {SITE_URL}
                </a>
              </p>
            </div>
            <p className="mt-4">
              L&apos;adresse postale de la société peut être communiquée sur demande légitime adressée à{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-brand-400 hover:text-brand-300 hover:underline transition-colors">
                {SITE_EMAIL}
              </a>.
            </p>
          </section>

          <section aria-labelledby="hebergement-heading">
            <h2 id="hebergement-heading" className="text-xl font-semibold text-white mb-4">
              2. Hébergement
            </h2>
            <p className="mb-2">Le site est hébergé par :</p>
            <div className="space-y-1.5">
              <p><strong className="text-slate-300">Hébergeur :</strong> Vercel Inc.</p>
              <p>
                <strong className="text-slate-300">Site web :</strong>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 hover:underline transition-colors">
                  https://vercel.com
                </a>
              </p>
            </div>
          </section>

          <section aria-labelledby="propriete-heading">
            <h2 id="propriete-heading" className="text-xl font-semibold text-white mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur le site, incluant notamment les textes,
              éléments graphiques, interfaces, logos, icônes, visuels, structures de pages et
              éléments de marque, est protégé et appartient à {LEGAL_ENTITY}, sauf mention contraire.
            </p>
            <p className="mt-3">
              Toute reproduction, modification, diffusion, représentation ou exploitation, totale
              ou partielle, sans autorisation écrite préalable de {LEGAL_ENTITY} est interdite.
            </p>
          </section>

          <section aria-labelledby="responsabilite-heading">
            <h2 id="responsabilite-heading" className="text-xl font-semibold text-white mb-4">
              4. Responsabilité
            </h2>
            <p>
              {LEGAL_ENTITY} s&apos;efforce de fournir des informations fiables, claires et
              régulièrement mises à jour. Toutefois, les informations présentes sur le site sont
              fournies à titre indicatif et ne constituent pas, à elles seules, un engagement
              contractuel.
            </p>
            <p className="mt-3">
              {LEGAL_ENTITY} ne peut être tenue responsable des erreurs, omissions, interruptions
              temporaires du site, indisponibilités ou conséquences liées à l&apos;utilisation des
              informations présentes sur le site.
            </p>
          </section>

          <section aria-labelledby="donnees-heading">
            <h2 id="donnees-heading" className="text-xl font-semibold text-white mb-4">
              5. Données personnelles
            </h2>
            <p>
              Les données transmises via les formulaires du site sont utilisées uniquement pour
              répondre aux demandes, gérer les échanges commerciaux, préparer les audits gratuits et
              proposer les services Flowtasker.
            </p>
            <p className="mt-3">
              Ces données ne sont pas revendues à des tiers.
            </p>
            <p className="mt-3">
              Pour toute demande relative aux données personnelles, l&apos;utilisateur peut
              contacter :{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-brand-400 hover:text-brand-300 hover:underline transition-colors">
                {SITE_EMAIL}
              </a>
            </p>
          </section>

          <section aria-labelledby="contact-legal-heading">
            <h2 id="contact-legal-heading" className="text-xl font-semibold text-white mb-4">
              6. Contact
            </h2>
            <p>
              Pour toute question relative aux présentes mentions légales, contactez-nous à
              l&apos;adresse suivante :{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-brand-400 hover:text-brand-300 hover:underline transition-colors">
                {SITE_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
