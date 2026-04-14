import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Flowtasker — Automatisation business avec n8n'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0f1b3d 60%, #0a0f1e 100%)',
          padding: '80px',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(37,99,235,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(37,99,235,0.1) 0%, transparent 50%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              background: '#2563eb',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span style={{ color: '#e2e8f0', fontSize: '28px', fontWeight: '700' }}>
            Flowtasker
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
          <span
            style={{
              color: '#60a5fa',
              fontSize: '18px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Automatisation business avec n8n
          </span>
          <h1
            style={{
              color: 'white',
              fontSize: '60px',
              fontWeight: '800',
              lineHeight: '1.1',
              margin: '0',
            }}
          >
            Automatisez vos tâches.
            <br />
            Multipliez vos résultats.
          </h1>
          <p
            style={{
              color: '#94a3b8',
              fontSize: '22px',
              margin: '0',
              lineHeight: '1.5',
            }}
          >
            Workflows n8n sur mesure · Déployés en 5 jours · Audit gratuit
          </p>
        </div>

        {/* CTA badge */}
        <div
          style={{
            marginTop: '48px',
            background: '#2563eb',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '12px',
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          flowtasker.com
        </div>
      </div>
    ),
    { ...size }
  )
}
