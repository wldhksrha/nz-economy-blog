import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { SITE_CONFIG } from '@/lib/config'

interface Props {
  params: { slug: string }
}

// ── Static generation ──────────────────────────────────
export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

// ── Per-post metadata ──────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}

  const url = `${SITE_CONFIG.url}/blog/${post.slug}`

  return {
    title:       post.title,
    description: post.excerpt,
    keywords:    post.tags,
    authors:     [{ name: post.author }],
    alternates:  { canonical: url },

    openGraph: {
      type:        'article',
      url,
      title:       post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors:     [post.author],
      tags:        post.tags,
      ...(post.coverImage && { images: [{ url: post.coverImage }] }),
    },

    twitter: {
      card:        'summary_large_image',
      title:       post.title,
      description: post.excerpt,
      ...(post.coverImage && { images: [post.coverImage] }),
    },
  }
}

// ── JSON-LD structured data ────────────────────────────
function ArticleJsonLd({ post }: { post: any }) {
  const jsonLd = {
    '@context':         'https://schema.org',
    '@type':            'Article',
    headline:           post.title,
    description:        post.excerpt,
    author:             { '@type': 'Person', name: post.author },
    datePublished:      post.date,
    dateModified:       post.date,
    publisher: {
      '@type': 'Organization',
      name:    SITE_CONFIG.name,
      url:     SITE_CONFIG.url,
    },
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    ...(post.coverImage && { image: post.coverImage }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// ── Page component ─────────────────────────────────────
export default async function PostPage({ params }: Props) {
  // params를 안전하게 await 하거나 직접 참조합니다. (Next.js 버전에 따라 다를 수 있음)
  const { slug } = params;
  const post = await getPostBySlug(slug)
  
  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <>
      <ArticleJsonLd post={post} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav className="text-xs text-stone-400 mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-brand-600 transition-colors">홈</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-brand-600 transition-colors">블로그</Link>
          <span>/</span>
          <Link
            href={`/blog?category=${encodeURIComponent(post.category)}`}
            className="hover:text-brand-600 transition-colors"
          >
            {post.category}
          </Link>
        </nav>

        <div className="grid lg:grid-cols-[1fr_260px] gap-12">

          {/* Article */}
          <article className="min-w-0 animate-fadeUp">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-stone-400">{formattedDate}</span>
              <span className="text-xs text-stone-400">{post.readingTime}분 읽기</span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <hr className="border-stone-200 mb-8" />

            {/* Body: prose 클래스를 추가하여 Tailwind 타이포그래피 플러그인을 강제 적용합니다. */}
            <div
              className="prose-article prose prose-stone lg:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author card */}
            <div className="mt-14 pt-8 border-t border-stone-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-sm text-stone-900">{post.author}</p>
                <p className="text-xs text-stone-500 mt-0.5">{SITE_CONFIG.author.bio}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                  목차
                </p>
                <div
                  id="toc"
                  className="text-sm text-stone-600 space-y-2 leading-relaxed"
                  data-content-selector=".prose-article"
                />
                <p className="text-xs text-stone-400 italic">
                  (이 섹션은 JS로 자동 생성됩니다)
                </p>
              </div>

              <div className="bg-stone-50 rounded-xl border border-dashed border-stone-200 p-4 text-center">
                <p className="text-xs text-stone-400">광고 영역</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Back link */}
        <div className="mt-14">
          <Link href="/blog" className="text-sm text-brand-600 hover:text-brand-700 font-medium">
            ← 전체 글 목록으로
          </Link>
        </div>
      </div>
    </>
  )
}