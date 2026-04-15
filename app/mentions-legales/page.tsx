import type { Metadata } from 'next'
import { SITE_EMAIL, SITE_URL } from '@/lib/constants'

// Entité légale distincte de la marque commerciale Flowtasker
const LEGAL_ENTITY = 'Autom8Flow LLC'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales de ${LEGAL_ENTITY}, éditeur du site Flowtasker.`,
  robots: { index: false, follow: false },
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="container-main max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Mentions légales</h1>
        <p className="text-sm text-slate-400 mb-12">Dernière mise à jour : avril 2025</p>

        <div className="prose prose-slate max-w-none space-y-10">
          <section aria-labelledby="editeur-heading">
            <h2 id="editeur-heading" className="text-xl font-semibold text-slate-900 mb-4">
              1. Éditeur du site
            </h2>
            <div className="text-slate-600 space-y-1.5 text-sm leading-relaxed">
              <p>
                <strong>Raison sociale :</strong> {LEGAL_ENTITY}
              </p>
              <p>
                <strong>Forme juridique :</strong> Limited Liability Company (LLC)
              </p>
              <p>
                <strong>Pays :</strong> États-Unis
              </p>
              <p>
                <strong>Adresse :</strong> Paris, France
              </p>
              <p>
                <strong>Email de contact :</strong>{' '}
                <a href={`mailto:${SITE_EMAIL}`} className="text-brand-600 hover:underline">
                  {SITE_EMAIL}
                </a>
              </p>
              <p>
                <strong>Site web :</strong>{' '}
                <a href={SITE_URL} className="text-brand-600 hover:underline">
                  {SITE_URL}
                </a>
              </p>
            </div>
          </section>

          <section aria-labelledby="hebergement-heading">
            <h2 id="hebergement-heading" className="text-xl font-semibold text-slate-900 mb-4">
              2. Hébergement
            </h2>
            <div className="text-slate-600 text-sm leading-relaxed space-y-1.5">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104,
                États-Unis
              </p>
              <p>
                <strong>Site :</strong> vercel.com
              </p>
            </div>
          </section>

          <section aria-labelledby="propriete-heading">
            <h2 id="propriete-heading" className="text-xl font-semibold text-slate-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logos, icônes,
              architecture) est la propriété exclusive de {LEGAL_ENTITY}, sauf mention contraire.
              Toute reproduction, représentation, modification ou exploitation totale ou partielle est
              interdite sans autorisation écrite préalable.
            </p>
          </section>

          <section aria-labelledby="responsabilite-heading">
            <h2 id="responsabilite-heading" className="text-xl font-semibold text-slate-900 mb-4">
              4. Limitation de responsabilité
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {LEGAL_ENTITY} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations publiées sur ce site. Cependant, nous déclinons toute responsabilité pour
              les erreurs, omissions ou résultats obtenus suite à l&apos;utilisation de ces
              informations. Les liens vers des sites tiers ne constituent pas une validation de leur
              contenu.
            </p>
          </section>

          <section aria-labelledby="contact-legal-heading">
            <h2 id="contact-legal-heading" className="text-xl font-semibold text-slate-900 mb-4">
              5. Contact
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pour toute question relative aux présentes mentions légales, contactez-nous à
              l&apos;adresse suivante :{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-brand-600 hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
