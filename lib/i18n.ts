export const SUPPORTED_LANGS = ['en', 'es'] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

export function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang)
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'es' : 'en'
}

export function buildAlternatePath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/')
  segments[1] = targetLang
  return segments.join('/') || `/${targetLang}`
}

const BASE = 'https://cofirsttimebuyergrants.com'

export function buildAlternates(lang: string, path: string) {
  return {
    canonical: `${BASE}/${lang}${path}`,
    languages: {
      en: `${BASE}/en${path}`,
      es: `${BASE}/es${path}`,
      'x-default': `${BASE}/en${path}`,
    },
  }
}
