// =====================================================
// Site-wide configuration — edit before deploying
// =====================================================

export const SITE_CONFIG = {
  // --- Basic info ---
  name:        'NZ Economy Insights',
  tagline:     '뉴질랜드 경제의 흐름을 읽는 블로그',
  description: '뉴질랜드 경제, 부동산, 금리, 환율, 노동시장, 무역 최신 분석 및 인사이트를 제공합니다.',
  url:         'https://nz-economy.vercel.app', // ← 배포 후 실제 URL로 교체

  // --- Author ---
  author: {
    name:  'NZ Economy Team',
    email: 'contact@nz-economy.vercel.app',
    bio:   '뉴질랜드 경제·금융을 전문으로 분석하는 리서치 블로그입니다.',
  },

  // --- Google ---
  googleAnalyticsId:  '',            // e.g. 'G-XXXXXXXXXX'
  googleAdSenseId:    '',            // e.g. 'ca-pub-XXXXXXXXXXXXXXXX'
  googleVerification: '',            // Google Search Console verification code

  // --- Social ---
  social: {
    twitter: '',
    linkedin: '',
  },

  // --- Pagination ---
  postsPerPage: 10,

  // --- Locale ---
  locale:   'ko-KR',
  language: 'ko',
  timezone: 'Pacific/Auckland',
}
