import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title:       SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  alternates:  { canonical: SITE_CONFIG.url },
}

export default function HomePage() {
  const allPosts    = getAllPosts()
  const featured    = allPosts.slice(0, 3)
  const recent      = allPosts.slice(3, 13)
  const categories  = getAllCategories()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Hero */}
      <section className="mb-14 animate-fadeUp">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
          뉴질랜드 경제 인사이트
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight mb-3">
          {SITE_CONFIG.tagline}
        </h1>
        <p className="text-stone-500 text-base max-w-2xl leading-relaxed">
          {SITE_CONFIG.description}
        </p>
      </section>

      {/* Category pills */}
      {categories.length > 0 && (
        <section className="mb-10">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat)}`}
                className="text-sm px-4 py-1.5 rounded-full border border-stone-200 text-stone-600 hover:border-brand-400 hover:text-brand-700 transition-colors bg-white"
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured posts */}
      {featured.length > 0 && (
        <section className="mb-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
            최신 분석
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((post, i) => (
              <div
                key={post.slug}
                className="animate-fadeUp"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <PostCard post={post} featured />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent posts list */}
      {recent.length > 0 && (
        <section className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">
              전체 글
            </h2>
            <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
              더보기 →
            </Link>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 px-6 divide-y divide-stone-100">
            {recent.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Empty state */}
      {allPosts.length === 0 && (
        <div className="text-center py-24 text-stone-400">
          <p className="text-5xl mb-4">📝</p>
          <p className="text-lg font-medium">아직 게시물이 없습니다.</p>
          <p className="text-sm mt-2">
            <code className="bg-stone-100 px-2 py-1 rounded text-xs">posts/</code> 폴더에 마크다운 파일을 추가해 주세요.
          </p>
        </div>
      )}
    </div>
  )
}
