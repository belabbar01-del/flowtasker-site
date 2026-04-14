import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// ─── Validation schema (server-side, mirrors client) ──────────────────────
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

// ─── Rate limiting (in-memory, replace with Redis/KV in production) ────────
const RATE_LIMIT_WINDOW_MS = 60_000
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

// ─── Email sender ──────────────────────────────────────────────────────────
async function sendContactEmail(data: z.infer<typeof contactSchema>): Promise<void> {
  const destination = process.env.CONTACT_DESTINATION_EMAIL
  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const smtpPort = Number(process.env.SMTP_PORT ?? 465)

  if (!destination || !smtpHost || !smtpUser || !smtpPass) {
    // Dev environment: log and continue
    console.warn(
      '[contact] Email env vars not configured. Configure SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_DESTINATION_EMAIL in .env.local'
    )
    console.info('[contact] Submission received:', {
      from: data.email,
      subject: data.subject,
      company: data.company ?? '—',
    })
    return
  }

  // Dynamically import nodemailer to avoid bundling in edge runtimes
  const nodemailer = await import('nodemailer')

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  })

  const fullName = `${data.firstName} ${data.lastName}`
  const companyLine = data.company ? `\nEntreprise : ${data.company}` : ''
  const phoneLine = data.phone ? `\nTéléphone : ${data.phone}` : ''

  await transporter.sendMail({
    from: `"${fullName}" <${smtpUser}>`,
    replyTo: data.email,
    to: destination,
    subject: `[Flowtasker] ${data.subject} — ${fullName}`,
    text: `
Nouvelle demande via flowtasker.com

Nom       : ${fullName}
Email     : ${data.email}${companyLine}${phoneLine}
Sujet     : ${data.subject}

Message
-------
${data.message}
    `.trim(),
    html: `
<!DOCTYPE html>
<html lang="fr">
<body style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;color:#1e293b">
  <div style="background:#2563eb;padding:16px 24px;border-radius:8px 8px 0 0">
    <h1 style="color:white;margin:0;font-size:18px">Flowtasker — Nouvelle demande</h1>
  </div>
  <div style="border:1px solid #e2e8f0;border-top:none;padding:24px;border-radius:0 0 8px 8px">
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:6px 0;color:#64748b;width:120px">Nom</td><td style="padding:6px 0;font-weight:600">${fullName}</td></tr>
      <tr><td style="padding:6px 0;color:#64748b">Email</td><td style="padding:6px 0"><a href="mailto:${data.email}" style="color:#2563eb">${data.email}</a></td></tr>
      ${data.company ? `<tr><td style="padding:6px 0;color:#64748b">Entreprise</td><td style="padding:6px 0">${data.company}</td></tr>` : ''}
      ${data.phone ? `<tr><td style="padding:6px 0;color:#64748b">Téléphone</td><td style="padding:6px 0">${data.phone}</td></tr>` : ''}
      <tr><td style="padding:6px 0;color:#64748b">Sujet</td><td style="padding:6px 0"><strong>${data.subject}</strong></td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0">
    <p style="color:#64748b;margin:0 0 8px 0;font-size:13px;text-transform:uppercase;letter-spacing:.05em">Message</p>
    <p style="margin:0;line-height:1.7;white-space:pre-wrap">${data.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
  </div>
  <p style="color:#94a3b8;font-size:12px;text-align:center;margin-top:16px">flowtasker.com — Automatisation business avec n8n</p>
</body>
</html>
    `.trim(),
  })
}

// ─── Route handler ─────────────────────────────────────────────────────────
export async function POST(request: NextRequest): Promise<NextResponse> {
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

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Corps de requête invalide.' }, { status: 400 })
  }

  const result = contactSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json(
      { message: 'Données invalides.', errors: result.error.flatten() },
      { status: 422 }
    )
  }

  try {
    await sendContactEmail(result.data)
  } catch (err) {
    console.error('[contact] Failed to send email:', err)
    return NextResponse.json(
      { message: "Erreur lors de l\'envoi. Veuillez réessayer ultérieurement." },
      { status: 500 }
    )
  }

  return NextResponse.json({ message: 'Message envoyé avec succès.' }, { status: 200 })
}
