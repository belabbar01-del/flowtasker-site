const INTEGRATIONS = [
  { name: 'Shopify',          category: 'E-commerce',    color: 'text-emerald-400' },
  { name: 'WordPress',        category: 'CMS',           color: 'text-sky-400'     },
  { name: 'HubSpot',          category: 'CRM',           color: 'text-orange-400'  },
  { name: 'Stripe',           category: 'Paiement',      color: 'text-violet-400'  },
  { name: 'Notion',           category: 'Productivité',  color: 'text-slate-300'   },
  { name: 'Airtable',         category: 'Data',          color: 'text-amber-400'   },
  { name: 'Slack',            category: 'Communication', color: 'text-rose-400'    },
  { name: 'Google Sheets',    category: 'Tableur',       color: 'text-green-400'   },
  { name: 'OpenAI',           category: 'IA',            color: 'text-emerald-300' },
  { name: 'Mailchimp',        category: 'Email',         color: 'text-yellow-400'  },
  { name: 'WooCommerce',      category: 'E-commerce',    color: 'text-purple-400'  },
  { name: 'ActiveCampaign',   category: 'CRM',           color: 'text-blue-400'    },
  { name: 'LinkedIn',         category: 'Social',        color: 'text-sky-300'     },
  { name: 'Salesforce',       category: 'CRM',           color: 'text-blue-300'    },
  { name: 'Webhooks',         category: 'API',           color: 'text-pink-400'    },
  { name: 'Google Analytics', category: 'Analytics',     color: 'text-amber-300'   },
]

const ITEMS = [...INTEGRATIONS, ...INTEGRATIONS]

export function IntegrationBand() {
  return (
    <section
      className="py-12 border-y border-white/[0.05] overflow-hidden"
      style={{ background: '#04070f' }}
      aria-label="Intégrations compatibles"
    >
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 mb-8 px-4">
        Compatible avec vos outils existants &nbsp;·&nbsp; 400+ intégrations natives
      </p>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #04070f, transparent)' }}
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #04070f, transparent)' }}
          aria-hidden
        />

        <div className="flex animate-marquee gap-2.5 whitespace-nowrap" aria-hidden>
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl flex-shrink-0
                         bg-white/[0.03] border border-white/[0.07]
                         hover:bg-white/[0.06] transition-colors duration-200"
            >
              <span className={`text-sm font-semibold ${item.color}`}>{item.name}</span>
              <span className="text-xs text-slate-600 hidden sm:block">· {item.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
