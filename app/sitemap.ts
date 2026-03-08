import type { MetadataRoute } from 'next'
import { COUNTIES } from '@/lib/counties'
import { ARTICLES } from '@/lib/learn'

const BASE_URL = 'https://cofirsttimebuyergrants.com'
const LANGS = ['en', 'es']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '', priority: 1.0 },
    { path: '/counties', priority: 0.9 },
    { path: '/learn', priority: 0.9 },
    { path: '/faq', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/how-it-works', priority: 0.7 },
    { path: '/who-qualifies', priority: 0.7 },
    { path: '/about', priority: 0.6 },
  ]

  const staticEntries: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    staticRoutes.map(({ path, priority }) => ({
      url: `${BASE_URL}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority,
    }))
  )

  const countyEntries: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    COUNTIES.map((county) => ({
      url: `${BASE_URL}/${lang}/counties/${county.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  )

  const articleEntries: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    ARTICLES.map((article) => ({
      url: `${BASE_URL}/${lang}/learn/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )

  return [...staticEntries, ...countyEntries, ...articleEntries]
}
