import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

interface Props {
  post: PostMeta
  featured?: boolean
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ko-KR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export default function PostCard({ post, featured = false }: Props) {
  if (featured) {
    return (
      <article className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-brand-400 hover:shadow-md transition-all duration-200">
        <Link href={`/blog/${post.slug}`} className="block p-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
              {post.category}
            </span>
            {post.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <h2 className="font-serif font-bold text-xl text-stone-900 group-hover:text-brand-700 transition-colors leading-snug mb-3">
            {post.title}
          </h2>

          <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-5">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-stone-400">
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime}분 읽기</span>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group flex gap-5 py-5 border-b border-stone-100 last:border-0">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-xs font-medium text-brand-600">{post.category}</span>
          <span className="text-stone-300">·</span>
          <span className="text-xs text-stone-400">{formatDate(post.date)}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-brand-700 transition-colors leading-snug mb-1.5 line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-2">
          {post.excerpt}
        </p>

        <span className="text-xs text-stone-400">{post.readingTime}분 읽기</span>
      </div>
    </article>
  )
}
