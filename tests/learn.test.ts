import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getArticles, getArticle, getArticleSlugs, getEmbedUrl } from '../lib/learn'

const MOCK_URL = 'https://storage.googleapis.com/pivot-lending-content/articles/articles.json'

const MOCK_ARTICLES = [
  {
    slug: 'test-article',
    en: {
      metaTitle: 'Test Title',
      metaDescription: 'Test description',
      title: 'Test Article',
      shortDesc: 'Short description',
      heroSubtitle: 'Hero subtitle',
      sections: [{ heading: 'Section One', body: 'Body text here.' }],
      faqs: [{ question: 'What is this?', answer: 'A test.' }],
    },
    es: {
      metaTitle: 'Título de Prueba',
      metaDescription: 'Descripción de prueba',
      title: 'Artículo de Prueba',
      shortDesc: 'Descripción corta',
      heroSubtitle: 'Subtítulo héroe',
      sections: [{ heading: 'Sección Uno', body: 'Texto del cuerpo.' }],
      faqs: [{ question: '¿Qué es esto?', answer: 'Una prueba.' }],
    },
  },
  {
    slug: 'second-article',
    en: {
      metaTitle: 'Second Title',
      metaDescription: 'Second description',
      title: 'Second Article',
      shortDesc: 'Second short desc',
      heroSubtitle: 'Second hero',
      sections: [{ heading: 'Section', body: 'Body.' }],
      faqs: [{ question: 'Q?', answer: 'A.' }],
    },
    es: {
      metaTitle: 'Segundo Título',
      metaDescription: 'Segunda descripción',
      title: 'Segundo Artículo',
      shortDesc: 'Segunda desc corta',
      heroSubtitle: 'Segundo héroe',
      sections: [{ heading: 'Sección', body: 'Cuerpo.' }],
      faqs: [{ question: '¿P?', answer: 'R.' }],
    },
  },
]

beforeEach(() => {
  process.env.GCS_ARTICLES_URL = MOCK_URL
})

afterEach(() => {
  delete process.env.GCS_ARTICLES_URL
  vi.restoreAllMocks()
})

describe('getArticles', () => {
  it('returns articles when fetch succeeds', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => MOCK_ARTICLES,
    }))
    const result = await getArticles()
    expect(result).toHaveLength(2)
    expect(result[0].slug).toBe('test-article')
  })

  it('fetches from the GCS_ARTICLES_URL env variable', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => MOCK_ARTICLES,
    })
    vi.stubGlobal('fetch', mockFetch)
    await getArticles()
    expect(mockFetch).toHaveBeenCalledWith(MOCK_URL, expect.any(Object))
  })

  it('returns empty array when GCS_ARTICLES_URL is not set', async () => {
    delete process.env.GCS_ARTICLES_URL
    const mockFetch = vi.fn()
    vi.stubGlobal('fetch', mockFetch)
    const result = await getArticles()
    expect(result).toEqual([])
    expect(mockFetch).not.toHaveBeenCalled()
  })

  it('returns empty array when fetch response is not ok', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))
    const result = await getArticles()
    expect(result).toEqual([])
  })

  it('returns empty array when fetch throws a network error', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))
    const result = await getArticles()
    expect(result).toEqual([])
  })

  it('requests revalidation of 60 seconds', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [],
    })
    vi.stubGlobal('fetch', mockFetch)
    await getArticles()
    expect(mockFetch).toHaveBeenCalledWith(
      MOCK_URL,
      expect.objectContaining({ next: { revalidate: 60 } })
    )
  })
})

describe('getArticle', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => MOCK_ARTICLES,
    }))
  })

  it('returns the matching article by slug', async () => {
    const result = await getArticle('test-article')
    expect(result).toBeDefined()
    expect(result!.slug).toBe('test-article')
    expect(result!.en.title).toBe('Test Article')
  })

  it('returns the second article by slug', async () => {
    const result = await getArticle('second-article')
    expect(result).toBeDefined()
    expect(result!.slug).toBe('second-article')
  })

  it('returns undefined for an unknown slug', async () => {
    const result = await getArticle('does-not-exist')
    expect(result).toBeUndefined()
  })

  it('returns undefined when fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('fail')))
    const result = await getArticle('test-article')
    expect(result).toBeUndefined()
  })

  it('preserves buzzsproutEmbedUrl when present in article data', async () => {
    const embedUrl = 'https://www.buzzsprout.com/123/456?client_source=small_player&iframe=true'
    const articlesWithEmbed = [{ ...MOCK_ARTICLES[0], buzzsproutEmbedUrl: embedUrl }]
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => articlesWithEmbed,
    }))
    const result = await getArticle('test-article')
    expect(result?.buzzsproutEmbedUrl).toBe(embedUrl)
  })

  it('returns undefined for buzzsproutEmbedUrl when field is absent', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => MOCK_ARTICLES,
    }))
    const result = await getArticle('test-article')
    expect(result?.buzzsproutEmbedUrl).toBeUndefined()
  })

  it('returns empty string for buzzsproutEmbedUrl when field is empty string', async () => {
    const articlesWithEmpty = [{ ...MOCK_ARTICLES[0], buzzsproutEmbedUrl: '' }]
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => articlesWithEmpty,
    }))
    const result = await getArticle('test-article')
    expect(result?.buzzsproutEmbedUrl).toBe('')
  })

  it('returns whitespace-padded buzzsproutEmbedUrl as-is from feed data', async () => {
    const padded = '  https://www.buzzsprout.com/123/456?client_source=small_player&iframe=true  '
    const articlesWithPadded = [{ ...MOCK_ARTICLES[0], buzzsproutEmbedUrl: padded }]
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => articlesWithPadded,
    }))
    const result = await getArticle('test-article')
    expect(result?.buzzsproutEmbedUrl).toBe(padded)
  })
})

describe('getEmbedUrl', () => {
  const base = MOCK_ARTICLES[0]

  it('returns trimmed URL for a clean embed URL', () => {
    const url = 'https://www.buzzsprout.com/123/456?client_source=small_player&iframe=true'
    expect(getEmbedUrl({ ...base, buzzsproutEmbedUrl: url })).toBe(url)
  })

  it('trims whitespace so padded URLs cannot reach iframe src as-is', () => {
    const padded = '  https://www.buzzsprout.com/123/456  '
    expect(getEmbedUrl({ ...base, buzzsproutEmbedUrl: padded })).toBe(padded.trim())
  })

  it('returns null for whitespace-only buzzsproutEmbedUrl', () => {
    expect(getEmbedUrl({ ...base, buzzsproutEmbedUrl: '   ' })).toBeNull()
  })

  it('returns null when buzzsproutEmbedUrl is empty string', () => {
    expect(getEmbedUrl({ ...base, buzzsproutEmbedUrl: '' })).toBeNull()
  })

  it('returns null when buzzsproutEmbedUrl is absent', () => {
    expect(getEmbedUrl(base)).toBeNull()
  })
})

describe('getArticleSlugs', () => {
  it('returns all slugs from the fetched articles', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => MOCK_ARTICLES,
    }))
    const slugs = await getArticleSlugs()
    expect(slugs).toEqual(['test-article', 'second-article'])
  })

  it('returns empty array when fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('fail')))
    const slugs = await getArticleSlugs()
    expect(slugs).toEqual([])
  })
})
