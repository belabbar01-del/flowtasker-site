import Link from 'next/link'
import { Zap, Mail, ArrowRight } from 'lucide-react'
import { SITE_NAME, SITE_EMAIL } from '@/lib/constants'

const FOOTER_LINKS = {
  produit: [
    { label: 'Services', href: '/services' },
    { label: 'Comment ça marche', href: '/comment-ca-marche' },
    { label: 'Tarifs', href: '/services#pricing' },
    { label: 'FAQ', href: '/faq' },
  ],
  entreprise: [
    { label: 'Sécurité & autorisation', href: '/securite' },
    { label: 'Contact', href: '/contact' },
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  ],
}

const USE_CASES_LINKS = [
  { label: 'Automatisation e-commerce', href: '/services' },
  { label: 'Contenu SEO automatisé', href: '/services' },
  { label: 'CRM & emails', href: '/services' },
  { label: 'Reporting automatique', href: '/services' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-slate-400" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>

      {/* Top CTA banner */}
      <div className="border-b border-white/10">
        <div className="container-main py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400 mb-1">
              Prêt à automatiser ?
            </p>
            <h3 className="text-2xl font-bold text-white">
              Obtenez votre audit gratuit en 24h.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-700 transition-colors shrink-0"
          >
            Démarrer maintenant
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-main py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-brand-600 rounded-lg">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </span>
              {SITE_NAME}
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
              Nous automatisons vos processus métier avec n8n pour libérer votre équipe des tâches répétitives et vous permettre de scaler sereinement.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                aria-label="Envoyer un email"
              >
                <Mail className="w-4 h-4" />
                {SITE_EMAIL}
              </a>
            </div>
            {/* Réseaux sociaux — à activer quand les profils sont créés */}
          </div>

          {/* Produit */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Produit
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.produit.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cas d'usage */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Cas d'usage
            </h3>
            <ul className="space-y-3">
              {USE_CASES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.entreprise.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} {SITE_NAME}. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/mentions-legales" className="hover:text-slate-300 transition-colors">
              Mentions légales
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-slate-300 transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
