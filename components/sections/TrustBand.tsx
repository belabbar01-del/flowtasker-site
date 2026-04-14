import { Shield, Clock, Zap, Users } from 'lucide-react'

const METRICS = [
  {
    icon: Clock,
    value: '−15h',
    label: 'par semaine économisées en moyenne',
  },
  {
    icon: Zap,
    value: '400+',
    label: 'outils connectables nativement',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'des workflows livrés avec documentation',
  },
  {
    icon: Users,
    value: '48h',
    label: 'délai moyen pour un audit livré',
  },
]

export function TrustBand() {
  return (
    <section className="bg-slate-50 border-y border-slate-200" aria-label="Chiffres clés">
      <div className="container-main py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center text-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-brand-50 rounded-xl mb-1">
                <metric.icon className="w-5 h-5 text-brand-600" aria-hidden="true" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-slate-900">{metric.value}</p>
              <p className="text-sm text-slate-500 leading-snug max-w-[130px]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
