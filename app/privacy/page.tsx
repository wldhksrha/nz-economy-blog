import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title:       '개인정보처리방침',
  description: `${SITE_CONFIG.name} 개인정보처리방침`,
  alternates:  { canonical: `${SITE_CONFIG.url}/privacy` },
  robots:      { index: true, follow: false },
}

export default function PrivacyPage() {
  const today = new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 animate-fadeUp">
      <h1 className="font-serif text-3xl font-bold text-stone-900 mb-2">개인정보처리방침</h1>
      <div className="w-12 h-1 bg-brand-600 rounded mb-3" />
      <p className="text-xs text-stone-400 mb-10">최종 업데이트: {today}</p>

      <div className="prose-article space-y-8 text-stone-700">

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">1. 개요</h2>
          <p>
            <strong>{SITE_CONFIG.name}</strong>（이하 "본 블로그"）는 방문자의 개인정보를 소중히 여기며,
            「개인정보 보호법」 등 관련 법령을 준수합니다.
            본 방침은 본 블로그가 수집하는 정보, 사용 방법, 보호 방법을 설명합니다.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">2. 수집하는 정보</h2>
          <p>본 블로그는 다음과 같은 정보를 자동으로 수집할 수 있습니다:</p>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>IP 주소 및 브라우저 정보</li>
            <li>방문한 페이지 및 체류 시간</li>
            <li>유입 경로(리퍼러)</li>
            <li>기기 종류 및 운영체제</li>
          </ul>
          <p className="text-sm text-stone-500 mt-3">
            문의 양식을 통해 이메일 주소, 이름 등을 자발적으로 제공하실 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">3. 쿠키 및 광고</h2>
          <p>
            본 블로그는 <strong>Google AdSense</strong> 및 <strong>Google Analytics</strong>를 사용합니다.
            이 서비스들은 쿠키를 사용하여 방문자에게 맞춤화된 광고를 제공하거나
            트래픽을 분석합니다.
          </p>
          <p className="text-sm text-stone-500">
            Google의 광고 쿠키 사용 방식에 대한 자세한 내용은{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline"
            >
              Google 광고 정책
            </a>
            을 참고하세요. 브라우저 설정에서 쿠키를 비활성화할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">4. 정보 이용 목적</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>서비스 개선 및 콘텐츠 최적화</li>
            <li>방문자 문의 응대</li>
            <li>관련 법령 준수</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">5. 제3자 제공</h2>
          <p>
            본 블로그는 법령에 의한 경우를 제외하고, 방문자의 개인정보를
            제3자에게 판매하거나 임의로 제공하지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">6. 방침 변경</h2>
          <p>
            본 방침은 관련 법령 또는 서비스 변경에 따라 수정될 수 있으며,
            변경 시 본 페이지를 통해 공지합니다.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-stone-900">7. 문의</h2>
          <p>
            개인정보 관련 문의는{' '}
            <a href="/contact" className="text-brand-600 underline hover:text-brand-700">
              문의 페이지
            </a>{' '}
            또는 이메일{' '}
            <a
              href={`mailto:${SITE_CONFIG.author.email}`}
              className="text-brand-600 underline hover:text-brand-700"
            >
              {SITE_CONFIG.author.email}
            </a>
            로 연락해 주세요.
          </p>
        </section>
      </div>
    </div>
  )
}
