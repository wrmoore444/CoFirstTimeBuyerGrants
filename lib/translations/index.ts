import { en } from './en'
import { es } from './es'

export const dictionaries = { en, es }
export type Lang = keyof typeof dictionaries
export type { Dictionary } from './en'

export function getDictionary(lang: string) {
  return dictionaries[lang as Lang] ?? dictionaries.en
}
