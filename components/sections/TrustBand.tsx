import { Clock, Zap, Shield, Rocket } from 'lucide-react'

const METRICS = [
  {
    icon: Clock,
    value: '15h',
    unit: '/sem',
    label: 'économisées en moyenne',
    color: 'text-brand-400',
    bg:    'bg-brand-500/10 border-brand-500/20',
  },
  {
    icon: Zap,
    value: '400+',
    unit: '',
    label: 'intégrations natives',
    color: 'text-violet-400',
    bg:    'bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: Shield,
    value: '100%',
    unit: '',
    label: 'des livrables documentés',
    color: 'text-emerald-400',
    bg:    'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Rocket,
    value: '5j',
    unit: '',
    label: 'pour un 1er workflow en prod',
    color: 'text-amber-400',
    bg:    'bg-amber-500/10 border-amber-500/20',
  },
]

export function TrustBand() {
  return (
    <section
      className="py-14 border-b border-white/[0.06]"
      style={{ background: '#090e1c' }}
      aria-label="Chiffres clés"
    >
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className={`w-11 h-11 flex items-center justify-center rounded-xl border ${m.bg}`}>
                <m.icon className={`w-5 h-5 ${m.color}`} aria-hidden />
              </div>
              <div>
                <p className={`text-3xl md:text-4xl font-bold tracking-tight ${m.color}`}>
                  {m.value}
                  {m.unit && <span className="text-lg font-medium ml-0.5 opacity-70">{m.unit}</span>}
                </p>
                <p className="text-sm text-slate-500 mt-1 leading-snug max-w-[130px] mx-auto">
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
