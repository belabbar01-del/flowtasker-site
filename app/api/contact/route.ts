import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// ─── Validation schema (server-side, mirrors client schema) ────────────────
const contactSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  phone: z
    .string()
    .regex(/^[\d\s\+\-\(\)]{0,20}$/)
    .optional()
    .or(z.literal('')),
  subject: z.string().min(5).max(100),
  message: z.string().min(20).max(2000),
  consent: z.boolean().refine((v) => v === true),
})

// Rate limiting: naive in-memory counter (replace with Redis/KV in production)
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3
const requestCounts = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = requestCounts.get(ip)

  if (!entry || now > entry.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) return true

  entry.count += 1
  return false
}

// ─── Send email helper ─────────────────────────────────────────────────────
async function sendContactEmail(data: z.infer<typeof contactSchema>): Promise<void> {
  /**
   * Plug in your email provider here.
   * All credentials are sourced from environment variables — never hardcoded.
   *
   * Example with Resend (recommended):
   *   const { Resend } = await import('resend')
   *   const resend = new Resend(process.env.RESEND_API_KEY)
   *   await resend.emails.send({ ... })
   *
   * Example with Nodemailer / SMTP:
   *   const nodemailer = await import('nodemailer')
   *   const transporter = nodemailer.createTransport({
   *     host: process.env.SMTP_HOST,
   *     port: Number(process.env.SMTP_PORT ?? 465),
   *     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
   *   })
   *   await transporter.sendMail({ ... })
   *
   * For now the route validates, logs (server-side only), and returns success.
   * Wire up the transport before going to production.
   */

  const destination = process.env.CONTACT_DESTINATION_EMAIL
  if (!destination) {
    // In production this should throw; in dev we warn and continue
    console.warn(
      '[contact] CONTACT_DESTINATION_EMAIL is not set. Configure .env.local to receive emails.'
    )
    return
  }

  // ── Placeholder: replace with real transport ────────────────────────────
  // Server-side log only — no sensitive data exposed to client
  console.info('[contact] New contact form submission', {
    from: data.email,
    subject: data.subject,
    company: data.company ?? '—',
  })
}

// ─── Route handler ─────────────────────────────────────────────────────────
export async function POST(request: NextRequest): Promise<NextResponse> {
  // Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { message: 'Trop de demandes. Veuillez patienter avant de réessayer.' },
      { status: 429 }
    )
  }

  // Parse body
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Corps de requête invalide.' }, { status: 400 })
  }

  // Validate
  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { message: 'Données invalides.', errors: result.error.flatten() },
      { status: 422 }
    )
  }

  // Send
  try {
    await sendContactEmail(result.data)
  } catch (err) {
    console.error('[contact] Failed to send email', err)
    return NextResponse.json(
      { message: "Erreur lors de l'envoi. Veuillez réessayer ultérieurement." },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: 'Message envoyé avec succès.' }, { status: 200 })
}
