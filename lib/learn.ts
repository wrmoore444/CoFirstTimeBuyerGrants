export interface ArticleSection {
  heading: string
  body: string
}

export interface ArticleFaq {
  question: string
  answer: string
}

export interface ArticleContent {
  metaTitle: string
  metaDescription: string
  title: string
  shortDesc: string
  heroSubtitle: string
  sections: ArticleSection[]
  faqs: ArticleFaq[]
}

export interface Article {
  slug: string
  buzzsproutEmbedUrl?: string
  en: ArticleContent
  es: ArticleContent
}

export async function getArticles(): Promise<Article[]> {
  const url = process.env.GCS_ARTICLES_URL
  if (!url) return []
  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return []
    return (await res.json()) as Article[]
  } catch {
    return []
  }
}

export async function getArticle(slug: string): Promise<Article | undefined> {
  const articles = await getArticles()
  return articles.find((a) => a.slug === slug)
}

export async function getArticleSlugs(): Promise<string[]> {
  const articles = await getArticles()
  return articles.map((a) => a.slug)
}

export function getEmbedUrl(article: Article): string | null {
  return article.buzzsproutEmbedUrl?.trim() || null
}
