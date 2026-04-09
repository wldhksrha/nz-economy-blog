export const dynamic = 'force-static';
export const revalidate = false;
import type { Metadata } from 'next'
import "@/app/globals.css" 
import { SITE_CONFIG } from '../lib/config' 
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:  `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    '뉴질랜드 경제', '뉴질랜드 부동산', '뉴질랜드 금리',
    '뉴질랜드 환율', '뉴질랜드 이민', 'NZ economy',
    'Reserve Bank of New Zealand', 'RBNZ', 'NZ GDP',
  ],
  authors: [{ name: SITE_CONFIG.author.name }],
  creator:  SITE_CONFIG.author.name,
  openGraph: {
    type:        'website',
    locale:      'ko_KR',
    url:         SITE_CONFIG.url,
    siteName:    SITE_CONFIG.name,
    title:       `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card:  'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  ...(SITE_CONFIG.googleVerification && {
    verification: { google: SITE_CONFIG.googleVerification },
  }),
  robots: {
    index:            true,
    follow:           true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
  alternates: { canonical: SITE_CONFIG.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE_CONFIG.language} suppressHydrationWarning>
      <head>
        {SITE_CONFIG.googleAdSenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE_CONFIG.googleAdSenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      {/* antialiased 클래스를 추가하여 글꼴을 더 부드럽게 만들고, Hydration 방지 속성을 유지합니다. */}
      <body className="min-h-screen flex flex-col bg-[#fafaf9] antialiased" suppressHydrationWarning>
        {SITE_CONFIG.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="ga" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${SITE_CONFIG.googleAnalyticsId}');
            `}</Script>
          </>
        )}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}