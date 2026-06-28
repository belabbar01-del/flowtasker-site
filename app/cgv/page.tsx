import type { Metadata } from 'next'
import { SITE_EMAIL } from '@/lib/constants'

const LEGAL_ENTITY = 'AIFLOWTASKER LLC'

export const metadata: Metadata = {
  title: 'Conditions générales de vente',
  description: `Conditions générales de vente et de prestation de services de ${LEGAL_ENTITY} (Flowtasker).`,
  robots: { index: false, follow: false },
  alternates: { canonical: '/cgv' },
}

export default function CGVPage() {
  return (
    <div className="pt-28 pb-20 md:pt-36 md:pb-28" style={{ background: '#060b18' }}>
      <div className="container-main max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Conditions générales de vente</h1>
        <p className="text-sm text-slate-500 mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-sm text-slate-400 leading-relaxed">
          <section aria-labelledby="objet-heading">
            <h2 id="objet-heading" className="text-xl font-semibold text-white mb-4">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
              entre {LEGAL_ENTITY}, opérant sous le nom commercial Flowtasker, et tout client
              (ci-après &ldquo;le Client&rdquo;) souhaitant bénéficier des services proposés sur le
              site aiflowtasker.com.
            </p>
            <p className="mt-3">
              Toute commande ou demande de prestation implique l&apos;acceptation pleine et entière
              des présentes CGV.
            </p>
          </section>

          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-xl font-semibold text-white mb-4">
              2. Services proposés
            </h2>
            <p>Flowtasker propose les services suivants :</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3 text-slate-400">
              <li>
                <strong className="text-slate-300">Audit gratuit :</strong> analyse des processus
                métier du Client, identification des tâches automatisables et recommandations
                personnalisées. L&apos;audit est gratuit et sans engagement.
              </li>
              <li>
                <strong className="text-slate-300">Conception et déploiement de workflows :</strong>{' '}
                création de workflows d&apos;automatisation sur mesure avec n8n, connectés aux outils
                existants du Client via API et Webhooks.
              </li>
              <li>
                <strong className="text-slate-300">Intégration d&apos;outils :</strong> connexion de
                logiciels tiers (CRM, e-commerce, emails, reporting, réseaux sociaux, etc.).
              </li>
              <li>
                <strong className="text-slate-300">Support et maintenance :</strong> suivi
                post-déploiement, monitoring, alertes et corrections d&apos;anomalies pendant la
                période de support incluse.
              </li>
              <li>
                <strong className="text-slate-300">Formation :</strong> accompagnement des équipes du
                Client à la compréhension et à la supervision des workflows livrés.
              </li>
            </ul>
          </section>

          <section aria-labelledby="devis-heading">
            <h2 id="devis-heading" className="text-xl font-semibold text-white mb-4">
              3. Devis et commande
            </h2>
            <p>
              Chaque prestation fait l&apos;objet d&apos;un devis personnalisé établi après
              l&apos;audit initial ou l&apos;analyse des besoins du Client. Le devis précise la nature
              des prestations, les délais estimés et le tarif applicable.
            </p>
            <p className="mt-3">
              La commande est considérée comme ferme et définitive dès l&apos;acceptation écrite du
              devis par le Client (email de confirmation, signature électronique ou tout autre moyen
              écrit convenu entre les parties).
            </p>
          </section>

          <section aria-labelledby="tarifs-heading">
            <h2 id="tarifs-heading" className="text-xl font-semibold text-white mb-4">
              4. Tarifs et paiement
            </h2>
            <p>
              Les tarifs indicatifs sont affichés sur le site. Le prix final de chaque prestation est
              celui indiqué dans le devis accepté par le Client. Tous les prix sont exprimés en dollars
              américains (USD), hors taxes applicables.
            </p>
            <p className="mt-3">
              Le paiement s&apos;effectue selon les modalités suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3 text-slate-400">
              <li>
                <strong className="text-slate-300">Acompte de 50 %</strong> à la commande, avant le
                début de la prestation.
              </li>
              <li>
                <strong className="text-slate-300">Solde de 50 %</strong> à la livraison et validation
                du workflow par le Client.
              </li>
            </ul>
            <p className="mt-3">
              Les paiements sont acceptés par virement bancaire, carte de crédit ou tout moyen de
              paiement convenu entre les parties. En cas de retard de paiement, des pénalités pourront
              être appliquées conformément à la législation en vigueur.
            </p>
          </section>

          <section aria-labelledby="obligations-client-heading">
            <h2 id="obligations-client-heading" className="text-xl font-semibold text-white mb-4">
              5. Obligations du Client
            </h2>
            <p>Le Client s&apos;engage à :</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3 text-slate-400">
              <li>Fournir les informations, accès et contenus nécessaires à la réalisation de la
                prestation dans les délais convenus.</li>
              <li>Valider les livrables intermédiaires et finaux dans les délais raisonnables.</li>
              <li>S&apos;assurer que les outils et services tiers utilisés dans les workflows sont
                conformes à leurs propres conditions d&apos;utilisation.</li>
              <li>Utiliser les workflows livrés de manière conforme aux lois et réglementations
                applicables.</li>
            </ul>
            <p className="mt-3">
              Tout retard causé par le Client dans la fourniture des éléments nécessaires pourra
              entraîner un décalage des délais de livraison sans responsabilité de Flowtasker.
            </p>
          </section>

          <section aria-labelledby="responsabilite-heading">
            <h2 id="responsabilite-heading" className="text-xl font-semibold text-white mb-4">
              6. Limitation de responsabilité
            </h2>
            <p>
              Flowtasker s&apos;engage à mettre en œuvre tous les moyens nécessaires pour réaliser les
              prestations avec diligence et professionnalisme (obligation de moyens).
            </p>
            <p className="mt-3">
              Flowtasker ne saurait être tenu responsable :
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 mt-3 text-slate-400">
              <li>Des interruptions, dysfonctionnements ou modifications des services tiers intégrés
                dans les workflows (API, plateformes, hébergeurs).</li>
              <li>Des pertes de données causées par des facteurs extérieurs à la prestation.</li>
              <li>Des dommages indirects (perte de chiffre d&apos;affaires, perte de données, perte
                d&apos;opportunité).</li>
            </ul>
            <p className="mt-3">
              La responsabilité totale de Flowtasker est limitée au montant total des prestations
              facturées au Client pour le projet concerné.
            </p>
          </section>

          <section aria-labelledby="propriete-heading">
            <h2 id="propriete-heading" className="text-xl font-semibold text-white mb-4">
              7. Propriété intellectuelle
            </h2>
            <p>
              À la livraison et au paiement intégral, le Client devient propriétaire des workflows,
              fichiers de configuration et documentation livrés dans le cadre de la prestation.
            </p>
            <p className="mt-3">
              Flowtasker conserve la propriété intellectuelle de ses méthodes, outils internes,
              templates et savoir-faire développés indépendamment de la prestation.
            </p>
            <p className="mt-3">
              Le Client autorise Flowtasker à mentionner le nom du Client comme référence commerciale,
              sauf mention contraire écrite du Client.
            </p>
          </section>

          <section aria-labelledby="support-heading">
            <h2 id="support-heading" className="text-xl font-semibold text-white mb-4">
              8. Support et maintenance
            </h2>
            <p>
              Chaque prestation inclut une période de support post-déploiement dont la durée est
              précisée dans le devis (généralement 30 à 60 jours). Pendant cette période, Flowtasker
              s&apos;engage à corriger les anomalies liées aux workflows livrés sous 24h ouvrées.
            </p>
            <p className="mt-3">
              Au-delà de cette période, des contrats de maintenance peuvent être proposés sur demande.
            </p>
          </section>

          <section aria-labelledby="resiliation-heading">
            <h2 id="resiliation-heading" className="text-xl font-semibold text-white mb-4">
              9. Résiliation
            </h2>
            <p>
              En cas de manquement grave de l&apos;une des parties à ses obligations, le contrat
              pourra être résilié de plein droit après mise en demeure restée sans effet pendant 15
              jours.
            </p>
            <p className="mt-3">
              En cas de résiliation par le Client avant la livraison, l&apos;acompte versé reste
              acquis à Flowtasker au titre des travaux déjà réalisés. Les livrables correspondants
              seront remis au Client.
            </p>
          </section>

          <section aria-labelledby="droit-heading">
            <h2 id="droit-heading" className="text-xl font-semibold text-white mb-4">
              10. Droit applicable et litiges
            </h2>
            <p>
              Les présentes CGV sont soumises au droit de l&apos;État dans lequel {LEGAL_ENTITY} est
              enregistrée. En cas de litige, les parties s&apos;engagent à rechercher une solution
              amiable avant toute action judiciaire.
            </p>
          </section>

          <section aria-labelledby="contact-cgv-heading">
            <h2 id="contact-cgv-heading" className="text-xl font-semibold text-white mb-4">
              11. Contact
            </h2>
            <p>
              Pour toute question relative aux présentes conditions générales de vente, contactez-nous
              à :{' '}
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
