const INTEGRATIONS = [
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Stripe', category: 'Paiement' },
  { name: 'Notion', category: 'Productivité' },
  { name: 'Airtable', category: 'Base de données' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Google Sheets', category: 'Tableur' },
  { name: 'Mailchimp', category: 'Email' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'ActiveCampaign', category: 'CRM' },
  { name: 'LinkedIn', category: 'Réseaux sociaux' },
]

export function IntegrationBand() {
  return (
    <section className="bg-white border-b border-slate-100" aria-label="Intégrations disponibles">
      <div className="container-main py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
          Compatible avec vos outils existants
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl hover:border-brand-200 hover:bg-brand-50 transition-colors duration-200"
            >
              <span className="text-sm font-medium text-slate-700">{integration.name}</span>
              <span className="text-xs text-slate-400 hidden sm:block">· {integration.category}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 bg-brand-600 rounded-xl">
            <span className="text-sm font-semibold text-white">+400 autres</span>
          </div>
        </div>
      </div>
    </section>
  )
}
