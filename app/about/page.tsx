import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title:       '소개',
  description: `${SITE_CONFIG.name}은 뉴질랜드 경제를 분석하는 독립 리서치 블로그입니다.`,
  alternates:  { canonical: `${SITE_CONFIG.url}/about` },
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 animate-fadeUp">

      <h1 className="font-serif text-3xl font-bold text-stone-900 mb-2">블로그 소개</h1>
      <div className="w-12 h-1 bg-brand-600 rounded mb-10" />

      <div className="prose-article space-y-6 text-stone-700 leading-relaxed">
        <p>
          <strong>NZ Economy Insights</strong>는 뉴질랜드 경제의 흐름을 한국어로 쉽고 깊이 있게
          전달하는 독립 리서치 블로그입니다.
        </p>

        <h2 className="font-serif text-xl font-bold text-stone-900 mt-8">다루는 주제</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>RBNZ(뉴질랜드 중앙은행) 금리 및 통화정책</li>
          <li>뉴질랜드 부동산 시장 동향</li>
          <li>NZD 환율 및 외환 분석</li>
          <li>노동시장 · 고용 지표 분석</li>
          <li>뉴질랜드 무역 · 수출 통계</li>
          <li>이민 정책이 경제에 미치는 영향</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-stone-900 mt-8">면책 조항</h2>
        <p className="text-sm text-stone-500 bg-stone-50 p-4 rounded-xl border border-stone-200">
          이 블로그의 모든 내용은 <strong>정보 제공 목적</strong>으로만 작성되었으며,
          투자 조언 또는 금융 자문으로 해석되어서는 안 됩니다.
          투자 결정은 반드시 전문 금융 자문사와 상담 후 내리시기 바랍니다.
        </p>

        <h2 className="font-serif text-xl font-bold text-stone-900 mt-8">연락처</h2>
        <p>
          문의 사항은{' '}
          <a href="/contact" className="text-brand-600 underline hover:text-brand-700">
            문의 페이지
          </a>
          를 이용해 주세요.
        </p>
      </div>
    </div>
  )
}
