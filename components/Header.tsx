'use client'
import Link from 'next/link'
import { useState } from 'react'
import { SITE_CONFIG } from '@/lib/config'

const NAV = [
  { href: '/',           label: '홈' },
  { href: '/blog',       label: '블로그' },
  { href: '/about',      label: '소개' },
  { href: '/contact',    label: '문의' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded-full bg-brand-700 flex items-center justify-center text-white text-xs font-bold group-hover:bg-brand-600 transition-colors">
            NZ
          </span>
          <span className="font-serif font-bold text-lg text-stone-900 tracking-tight hidden sm:block">
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-stone-600 hover:text-brand-700 transition-colors font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 text-stone-600 hover:text-brand-700"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-stone-200 bg-white">
          {NAV.map(n => (
            <Link
              key={n.href}
              href={n.href}
              className="block px-6 py-3 text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-brand-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
