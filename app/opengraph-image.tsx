import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/lib/config'

export const runtime = 'edge'
export const alt     = SITE_CONFIG.name
export const size    = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:    'linear-gradient(135deg, #1b3c33 0%, #2d6f5c 60%, #3d8a73 100%)',
          width:         '100%',
          height:        '100%',
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'flex-start',
          justifyContent:'flex-end',
          padding:       '72px 80px',
          fontFamily:    'serif',
        }}
      >
        <div
          style={{
            background:   'rgba(255,255,255,0.12)',
            borderRadius: '9999px',
            padding:      '6px 18px',
            color:        '#a7f3d0',
            fontSize:     18,
            marginBottom: 24,
            letterSpacing:'0.08em',
          }}
        >
          NZ ECONOMY INSIGHTS
        </div>
        <p style={{ fontSize: 64, fontWeight: 700, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
          {SITE_CONFIG.tagline}
        </p>
        <p style={{ fontSize: 24, color: '#d1fae5', marginTop: 20 }}>
          {SITE_CONFIG.url.replace('https://', '')}
        </p>
      </div>
    ),
    { ...size }
  )
}
