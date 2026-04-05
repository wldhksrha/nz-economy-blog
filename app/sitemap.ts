import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { SITE_CONFIG } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url:              SITE_CONFIG.url,
      lastModified:     new Date(),
      changeFrequency:  'daily',
      priority:         1.0,
    },
    {
      url:              `${SITE_CONFIG.url}/blog`,
      lastModified:     new Date(),
      changeFrequency:  'daily',
      priority:         0.9,
    },
    {
      url:              `${SITE_CONFIG.url}/about`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.7,
    },
    {
      url:              `${SITE_CONFIG.url}/contact`,
      lastModified:     new Date(),
      changeFrequency:  'monthly',
      priority:         0.6,
    },
    {
      url:              `${SITE_CONFIG.url}/privacy`,
      lastModified:     new Date(),
      changeFrequency:  'yearly',
      priority:         0.3,
    },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map(post => ({
    url:             `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified:    new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority:        0.8,
  }))

  return [...staticRoutes, ...postRoutes]
}
