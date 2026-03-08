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
