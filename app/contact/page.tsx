import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title:       '문의',
  description: `${SITE_CONFIG.name}에 문의하세요.`,
  alternates:  { canonical: `${SITE_CONFIG.url}/contact` },
}

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 animate-fadeUp">
      <h1 className="font-serif text-3xl font-bold text-stone-900 mb-2">문의하기</h1>
      <div className="w-12 h-1 bg-brand-600 rounded mb-10" />

      <p className="text-stone-600 mb-8 leading-relaxed">
        기사 제보, 협업 제안, 오류 신고 등 무엇이든 환영합니다.
        아래 양식을 작성하시거나 직접 이메일을 보내주세요.
      </p>

      {/* Static form — connects to Formspree / Netlify Forms / etc. */}
      {/* Replace action URL with your own Formspree endpoint */}
      <form
        action={`https://formspree.io/f/YOUR_FORM_ID`}
        method="POST"
        className="space-y-5"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1.5">
            이름
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="홍길동"
            className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1.5">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1.5">
            제목
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="문의 제목"
            className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1.5">
            내용
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="문의 내용을 입력해 주세요..."
            className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-700 hover:bg-brand-600 text-white text-sm font-semibold py-3 rounded-lg transition-colors"
        >
          메시지 보내기
        </button>
      </form>

      <div className="mt-10 pt-8 border-t border-stone-200 text-sm text-stone-500 space-y-1">
        <p>또는 직접 이메일로 연락하세요:</p>
        <a
          href={`mailto:${SITE_CONFIG.author.email}`}
          className="text-brand-600 hover:text-brand-700 font-medium"
        >
          {SITE_CONFIG.author.email}
        </a>
      </div>
    </div>
  )
}
