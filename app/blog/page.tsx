import type { Metadata } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/posts'
import PostCard from '@/components/PostCard'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/config'

export const metadata: Metadata = {
  title:       '블로그',
  description: `뉴질랜드 경제 분석 아티클 전체 목록 — ${SITE_CONFIG.name}`,
  alternates:  { canonical: `${SITE_CONFIG.url}/blog` },
}

interface Props {
  searchParams: { category?: string }
}

export default function BlogPage({ searchParams }: Props) {
  const activeCategory = searchParams.category ?? ''
  const categories     = getAllCategories()
  const allPosts       = getAllPosts()
  const posts          = activeCategory
    ? allPosts.filter(p => p.category === activeCategory)
    : allPosts

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      <header className="mb-10">
        <h1 className="font-serif text-3xl font-bold text-stone-900 mb-2">블로그</h1>
        <p className="text-stone-500 text-sm">총 {allPosts.length}개의 아티클</p>
      </header>

      {/* Category filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/blog"
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              !activeCategory
                ? 'bg-brand-700 text-white border-brand-700'
                : 'border-stone-200 text-stone-600 hover:border-brand-400 bg-white'
            }`}
          >
            전체
          </Link>
          {categories.map(cat => (
            <Link
              key={cat}
              href={`/blog?category=${encodeURIComponent(cat)}`}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'bg-brand-700 text-white border-brand-700'
                  : 'border-stone-200 text-stone-600 hover:border-brand-400 bg-white'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      {/* Post list */}
      {posts.length > 0 ? (
        <div className="bg-white rounded-2xl border border-stone-200 px-6 divide-y divide-stone-100">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-stone-400 text-center py-20">해당 카테고리에 글이 없습니다.</p>
      )}
    </div>
  )
}
