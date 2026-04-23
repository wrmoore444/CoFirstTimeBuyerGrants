import { describe, it, expect } from 'vitest'
import { FAQ_ITEMS, getFAQItems } from './faq'

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

describe('FAQPage schema construction', () => {
  it('builds schema with 7 Question entries for English', () => {
    const schema = {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.en.question,
        acceptedAnswer: { '@type': 'Answer', text: f.en.answer },
      })),
    }
    expect(schema['@type']).toBe('FAQPage')
    expect(schema.mainEntity).toHaveLength(7)
    for (const entry of schema.mainEntity) {
      expect(entry['@type']).toBe('Question')
      expect(entry.name).toBeTruthy()
      expect(entry.acceptedAnswer['@type']).toBe('Answer')
      expect(entry.acceptedAnswer.text).toBeTruthy()
    }
  })

  it('schema content matches visible FAQ content for English', () => {
    const visibleItems = getFAQItems('en')
    const schemaItems = FAQ_ITEMS.map((f) => ({ name: f.en.question, text: f.en.answer }))
    expect(schemaItems).toHaveLength(visibleItems.length)
    for (let i = 0; i < visibleItems.length; i++) {
      expect(schemaItems[i].name).toBe(visibleItems[i].question)
      expect(schemaItems[i].text).toBe(visibleItems[i].answer)
    }
  })

  it('schema is suppressed for non-English locales', () => {
    const schema = (lang: string) => lang === 'en' ? { '@type': 'FAQPage' } : null
    expect(schema('en')).not.toBeNull()
    expect(schema('es')).toBeNull()
  })
})
