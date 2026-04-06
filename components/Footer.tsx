'use client'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200 bg-white mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

          {/* Brand */}
          <div>
            <p className="font-serif font-bold text-stone-900">{SITE_CONFIG.name}</p>
            <p className="text-sm text-stone-500 mt-1">{SITE_CONFIG.tagline}</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500">
            <Link href="/about"   className="hover:text-brand-700 transition-colors">소개</Link>
            <Link href="/contact" className="hover:text-brand-700 transition-colors">문의</Link>
            <Link href="/privacy" className="hover:text-brand-700 transition-colors">개인정보처리방침</Link>
            <Link href="/blog"    className="hover:text-brand-700 transition-colors">전체 글</Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-stone-400">
          <p>© {year} {SITE_CONFIG.author.name}. All rights reserved.</p>
          <p>
            이 블로그의 내용은 정보 제공 목적이며 투자 조언이 아닙니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
