import { describe, it, expect } from 'vitest'
import { FAQ_ITEMS, getFAQItems, buildFaqPageSchema } from './faq'

describe('FAQ_ITEMS', () => {
  it('contains exactly 7 items', () => {
    expect(FAQ_ITEMS).toHaveLength(7)
  })

  it('each item has en and es question and answer', () => {
    for (const item of FAQ_ITEMS) {
      expect(item.en.question).toBeTruthy()
      expect(item.en.answer).toBeTruthy()
      expect(item.es.question).toBeTruthy()
      expect(item.es.answer).toBeTruthy()
    }
  })
})

describe('buildFaqPageSchema', () => {
  it('returns null for non-English locales', () => {
    expect(buildFaqPageSchema('es')).toBeNull()
    expect(buildFaqPageSchema('fr')).toBeNull()
  })

  it('returns a FAQPage schema for English', () => {
    const schema = buildFaqPageSchema('en') as Record<string, unknown>
    expect(schema).not.toBeNull()
    expect(schema['@type']).toBe('FAQPage')
  })

  it('mainEntity contains exactly 7 Question entries', () => {
    const schema = buildFaqPageSchema('en') as { mainEntity: unknown[] }
    expect(schema.mainEntity).toHaveLength(7)
  })

  it('each Question entry has correct structure', () => {
    const schema = buildFaqPageSchema('en') as {
      mainEntity: Array<{ '@type': string; name: string; acceptedAnswer: { '@type': string; text: string } }>
    }
    for (const entry of schema.mainEntity) {
      expect(entry['@type']).toBe('Question')
      expect(entry.name).toBeTruthy()
      expect(entry.acceptedAnswer['@type']).toBe('Answer')
      expect(entry.acceptedAnswer.text).toBeTruthy()
    }
  })

  it('schema Question names match visible English FAQ content', () => {
    const schema = buildFaqPageSchema('en') as {
      mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>
    }
    const visibleItems = getFAQItems('en')
    expect(schema.mainEntity).toHaveLength(visibleItems.length)
    for (let i = 0; i < visibleItems.length; i++) {
      expect(schema.mainEntity[i].name).toBe(visibleItems[i].question)
      expect(schema.mainEntity[i].acceptedAnswer.text).toBe(visibleItems[i].answer)
    }
  })
})
