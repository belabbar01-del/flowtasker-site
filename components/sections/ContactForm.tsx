'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import type { FormStatus } from '@/lib/types'

const contactSchema = z.object({
  firstName: z.string().min(2, 'Prénom trop court').max(50),
  lastName: z.string().min(2, 'Nom trop court').max(50),
  email: z.string().email('Adresse email invalide'),
  company: z.string().max(100).optional(),
  phone: z
    .string()
    .regex(/^[\d\s\+\-\(\)]{0,20}$/, 'Numéro invalide')
    .optional()
    .or(z.literal('')),
  subject: z.string().min(5, 'Sujet trop court').max(100),
  message: z.string().min(20, 'Message trop court (20 caractères minimum)').max(2000),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter la politique de confidentialité',
  }),
})

type ContactFormValues = z.infer<typeof contactSchema>

const SUBJECT_OPTIONS = [
  "Demande d'audit gratuit",
  'Renseignements sur les services',
  'Demande de devis',
  'Support technique',
  'Partenariat',
  'Autre',
]

const inputBase =
  'w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder:text-slate-500'
const inputNormal = 'bg-white/[0.06] border-white/[0.12] text-white hover:border-white/[0.20]'
const inputError  = 'bg-red-500/10 border-red-500/40 text-white'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(
          (body as { message?: string }).message ?? "Une erreur est survenue. Veuillez réessayer."
        )
      }

      setStatus('success')
      reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Une erreur inattendue s'est produite. Veuillez réessayer."
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
        <div className="w-16 h-16 flex items-center justify-center bg-emerald-500/15 border border-emerald-500/25 rounded-full">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Message envoyé !</h3>
        <p className="text-slate-400 max-w-sm">
          Merci pour votre message. Nous vous répondons sous 24h ouvrées. En attendant,
          n'hésitez pas à explorer nos services.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-brand-400 hover:text-brand-300 font-medium underline underline-offset-2 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6"
      aria-label="Formulaire de contact"
    >
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1.5">
            Prénom <span className="text-red-400" aria-hidden>*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            {...register('firstName')}
            className={cn(inputBase, errors.firstName ? inputError : inputNormal)}
            placeholder="Jean"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1.5">
            Nom <span className="text-red-400" aria-hidden>*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            {...register('lastName')}
            className={cn(inputBase, errors.lastName ? inputError : inputNormal)}
            placeholder="Dupont"
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" className="mt-1 text-xs text-red-400" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email professionnel <span className="text-red-400" aria-hidden>*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email')}
          className={cn(inputBase, errors.email ? inputError : inputNormal)}
          placeholder="jean.dupont@entreprise.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
            Entreprise
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            {...register('company')}
            className={cn(inputBase, inputNormal)}
            placeholder="Mon Entreprise SAS"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={cn(inputBase, errors.phone ? inputError : inputNormal)}
            placeholder="+33 6 00 00 00 00"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-400" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
          Sujet <span className="text-red-400" aria-hidden>*</span>
        </label>
        <select
          id="subject"
          {...register('subject')}
          defaultValue=""
          className={cn(
            inputBase,
            errors.subject ? inputError : inputNormal,
            'bg-[#0d1626]'
          )}
          aria-invalid={!!errors.subject}
        >
          <option value="" disabled className="bg-[#0d1626] text-slate-400">
            Choisissez un sujet…
          </option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0d1626] text-white">
              {opt}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1 text-xs text-red-400" role="alert">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message <span className="text-red-400" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={cn(
            inputBase,
            'resize-y min-h-[120px]',
            errors.message ? inputError : inputNormal
          )}
          placeholder="Décrivez vos besoins, vos outils actuels, les tâches que vous souhaitez automatiser…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          {...register('consent')}
          className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/[0.06] text-brand-600 focus:ring-brand-500 cursor-pointer"
          aria-invalid={!!errors.consent}
        />
        <label htmlFor="consent" className="text-sm text-slate-400 leading-relaxed cursor-pointer">
          J'accepte que mes données soient utilisées pour traiter ma demande conformément à la{' '}
          <a
            href="/politique-de-confidentialite"
            target="_blank"
            className="text-brand-400 hover:text-brand-300 hover:underline transition-colors"
          >
            politique de confidentialité
          </a>
          .{' '}
          <span className="text-red-400" aria-hidden>*</span>
        </label>
      </div>
      {errors.consent && (
        <p className="mt-1 text-xs text-red-400" role="alert">
          {errors.consent.message}
        </p>
      )}

      {/* Error banner */}
      {status === 'error' && (
        <div
          className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/25 rounded-xl"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden />
          <p className="text-sm text-red-300">{errorMessage}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        variant="primary"
        disabled={isSubmitting}
        className="w-full justify-center"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
            Envoi en cours…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden />
            Envoyer le message
          </>
        )}
      </Button>

      <p className="text-xs text-slate-500 text-center">
        Réponse garantie sous 24h ouvrées. Aucun spam.
      </p>
    </form>
  )
}
