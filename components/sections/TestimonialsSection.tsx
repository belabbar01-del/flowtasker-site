import { Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TESTIMONIALS } from '@/lib/constants'
import type { Testimonial } from '@/lib/types'

const AVATAR_COLORS = [
  'bg-violet-500',
  'bg-emerald-500',
  'bg-amber-500',
]

interface TestimonialCardProps {
  testimonial: Testimonial
  colorClass: string
}

function TestimonialCard({ testimonial, colorClass }: TestimonialCardProps) {
  return (
    <article className="flex flex-col gap-5 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors duration-200">
      {/* Stars */}
      <div className="flex gap-0.5" aria-label="Note 5 étoiles sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" aria-hidden="true" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-slate-200 text-sm leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>

      {/* Author */}
      <footer className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div
          className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white text-sm font-bold shrink-0`}
          aria-hidden="true"
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">{testimonial.name}</p>
          <p className="text-slate-400 text-xs mt-0.5">
            {testimonial.role} &middot; {testimonial.company}
          </p>
        </div>
      </footer>
    </article>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-hero section-padding" aria-labelledby="testimonials-heading">
      <div className="container-main">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Témoignages clients"
          title="Ils ont automatisé avec Flowtasker"
          description="Des équipes de toutes tailles qui ont éliminé leurs tâches répétitives et reconcentré leur énergie sur ce qui compte vraiment."
          light={true}
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              colorClass={AVATAR_COLORS[index % AVATAR_COLORS.length]}
            />
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">
          * Témoignages représentatifs des résultats observés. Les noms ont été partiellement anonymisés.
        </p>
      </div>
    </section>
  )
}
