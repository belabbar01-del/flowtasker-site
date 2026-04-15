import type { Metadata } from 'next'
import { SITE_EMAIL } from '@/lib/constants'

const LEGAL_ENTITY = 'Autom8Flow LLC'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité et traitement des données personnelles de ${LEGAL_ENTITY}.`,
  robots: { index: false, follow: false },
  alternates: { canonical: '/politique-de-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
      <div className="container-main max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-slate-400 mb-12">Dernière mise à jour : avril 2025</p>

        <div className="space-y-10 text-sm text-slate-600 leading-relaxed">
          <section aria-labelledby="intro-heading">
            <h2 id="intro-heading" className="text-xl font-semibold text-slate-900 mb-4">
              1. Introduction
            </h2>
            <p>
              {LEGAL_ENTITY} (&ldquo;nous&rdquo;, &ldquo;notre&rdquo;, &ldquo;nos&rdquo;)
              s&apos;engage à protéger la vie privée des personnes qui utilisent ce site web. Cette
              politique explique comment nous collectons, utilisons et protégeons vos données
              personnelles lorsque vous interagissez avec notre site.
            </p>
          </section>

          <section aria-labelledby="collecte-heading">
            <h2 id="collecte-heading" className="text-xl font-semibold text-slate-900 mb-4">
              2. Données collectées
            </h2>
            <p className="mb-3">
              Nous collectons uniquement les données que vous nous transmettez volontairement, via :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Le formulaire de contact : prénom, nom, email, entreprise, téléphone (optionnel),
                sujet et message.
              </li>
              <li>Les échanges par email : données contenues dans votre correspondance.</li>
            </ul>
            <p className="mt-3">
              Nous ne collectons pas de données de navigation, n&apos;utilisons pas de cookies de
              traçage tiers et n&apos;installons aucun outil de tracking publicitaire.
            </p>
          </section>

          <section aria-labelledby="finalites-heading">
            <h2 id="finalites-heading" className="text-xl font-semibold text-slate-900 mb-4">
              3. Finalités du traitement
            </h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3">
              <li>Répondre à votre demande de contact ou d&apos;audit</li>
              <li>Établir un devis ou une proposition commerciale</li>
              <li>Assurer le suivi de notre relation commerciale</li>
            </ul>
            <p className="mt-3">
              <strong>Base légale :</strong> consentement (formulaire de contact) et intérêt
              légitime (suivi commercial).
            </p>
          </section>

          <section aria-labelledby="retention-heading">
            <h2 id="retention-heading" className="text-xl font-semibold text-slate-900 mb-4">
              4. Conservation des données
            </h2>
            <p>
              Vos données de contact sont conservées pendant 3 ans à compter du dernier échange,
              puis supprimées. Les données liées à une relation contractuelle sont conservées
              conformément aux obligations légales applicables (généralement 5 à 10 ans).
            </p>
          </section>

          <section aria-labelledby="partage-heading">
            <h2 id="partage-heading" className="text-xl font-semibold text-slate-900 mb-4">
              5. Partage des données
            </h2>
            <p>
              Nous ne vendons, ne louons et ne partageons vos données personnelles avec aucun tiers
              à des fins commerciales. Vos données peuvent être transmises à des prestataires
              techniques strictement nécessaires à notre activité (ex : hébergeur email) sous des
              conditions de confidentialité équivalentes aux nôtres.
            </p>
          </section>

          <section aria-labelledby="droits-heading">
            <h2 id="droits-heading" className="text-xl font-semibold text-slate-900 mb-4">
              6. Vos droits
            </h2>
            <p className="mb-3">
              Conformément au RGPD (pour les résidents européens) et aux lois applicables, vous
              disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement (&ldquo;droit à l&apos;oubli&rdquo;)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-brand-600 hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
          </section>

          <section aria-labelledby="securite-data-heading">
            <h2 id="securite-data-heading" className="text-xl font-semibold text-slate-900 mb-4">
              7. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, modification, divulgation ou
              destruction. Toutes les communications entre votre navigateur et notre serveur sont
              chiffrées via HTTPS/TLS.
            </p>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2 id="cookies-heading" className="text-xl font-semibold text-slate-900 mb-4">
              8. Cookies
            </h2>
            <p>
              Ce site n&apos;utilise pas de cookies de traçage tiers ni de cookies publicitaires.
              Des cookies techniques strictement nécessaires au fonctionnement du site (session,
              sécurité) peuvent être utilisés. Ils ne nécessitent pas votre consentement.
            </p>
          </section>

          <section aria-labelledby="contact-privacy-heading">
            <h2 id="contact-privacy-heading" className="text-xl font-semibold text-slate-900 mb-4">
              9. Contact & réclamations
            </h2>
            <p>
              Pour toute question relative à cette politique ou pour exercer vos droits, contactez
              notre responsable de traitement à :{' '}
              <a href={`mailto:${SITE_EMAIL}`} className="text-brand-600 hover:underline">
                {SITE_EMAIL}
              </a>
            </p>
            <p className="mt-3">
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de l&apos;autorité de contrôle compétente dans votre pays (en
              France : la CNIL — www.cnil.fr).
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
