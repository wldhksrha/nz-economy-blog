import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMeta {
  slug:        string
  title:       string
  date:        string
  excerpt:     string
  category:    string
  tags:        string[]
  coverImage?: string
  author:      string
  readingTime: number   // minutes
}

export interface Post extends PostMeta {
  content: string   // rendered HTML
}

// ── helpers ──────────────────────────────────────────

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

function ensureArray(val: unknown): string[] {
  if (Array.isArray(val)) return val.map(String)
  if (typeof val === 'string') return val.split(',').map(s => s.trim())
  return []
}

// ── public API ────────────────────────────────────────

/** Return sorted list of all post metadata (newest first) */
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md') || f.endsWith('.mdx'))

  const posts: PostMeta[] = fileNames.map(fileName => {
    const slug = fileName.replace(/\.(mdx?)$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title:       data.title       ?? slug,
      date:        data.date        ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt:     data.excerpt     ?? content.slice(0, 160).replace(/[#*\[\]]/g, '') + '…',
      category:    data.category    ?? '일반',
      tags:        ensureArray(data.tags),
      coverImage:  data.coverImage  ?? undefined,
      author:      data.author      ?? 'NZ Economy Team',
      readingTime: estimateReadingTime(content),
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** Return post by slug with rendered HTML content */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const tryPaths = [
    path.join(postsDirectory, `${slug}.md`),
    path.join(postsDirectory, `${slug}.mdx`),
  ]
  const fullPath = tryPaths.find(p => fs.existsSync(p))
  if (!fullPath) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content)

  const meta: PostMeta = {
    slug,
    title:       data.title       ?? slug,
    date:        data.date        ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt:     data.excerpt     ?? content.slice(0, 160).replace(/[#*\[\]]/g, '') + '…',
    category:    data.category    ?? '일반',
    tags:        ensureArray(data.tags),
    coverImage:  data.coverImage  ?? undefined,
    author:      data.author      ?? 'NZ Economy Team',
    readingTime: estimateReadingTime(content),
  }

  return { ...meta, content: processed.toString() }
}

/** Return all unique categories */
export function getAllCategories(): string[] {
  return Array.from(new Set(getAllPosts().map(p => p.category)))
}

/** Return posts filtered by category */
export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(p => p.category === category)
}
