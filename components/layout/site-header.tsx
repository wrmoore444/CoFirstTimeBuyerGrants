'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { buildAlternatePath, type Lang } from '@/lib/i18n'
import type { Dictionary } from '@/lib/translations'

const NAV_ITEMS = [
  { key: 'home' as const, href: '' },
  { key: 'howItWorks' as const, href: '/how-it-works' },
  { key: 'whoMayQualify' as const, href: '/who-qualifies' },
  { key: 'counties' as const, href: '/counties' },
  { key: 'learn' as const, href: '/learn' },
  { key: 'about' as const, href: '/about' },
  { key: 'faq' as const, href: '/faq' },
  { key: 'contact' as const, href: '/contact' },
]

interface Props {
  dict: Dictionary
  lang: Lang
}

export function SiteHeader({ dict, lang }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const nav = dict.nav
  const alternatePath = buildAlternatePath(pathname, lang === 'en' ? 'es' : 'en')

  function isActive(href: string) {
    const full = `/${lang}${href}`
    if (href === '') return pathname === `/${lang}` || pathname === `/${lang}/`
    return pathname.startsWith(full)
  }

  function navClass(href: string) {
    return isActive(href)
      ? 'text-sm font-semibold text-primary'
      : 'text-sm font-medium text-background/70 transition-colors hover:text-primary'
  }

  function mobileNavClass(href: string) {
    return isActive(href)
      ? 'rounded-md px-3 py-2 text-sm font-semibold text-primary bg-background/10'
      : 'rounded-md px-3 py-2 text-sm font-medium text-background/70 hover:bg-background/10 hover:text-background'
  }

  return (
    <header className="sticky top-0 z-50 bg-foreground border-b border-background/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">CO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-background">CoFirstTimeBuyer</span>
              <span className="text-xs font-medium leading-tight text-primary">Grants</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {NAV_ITEMS.map(({ key, href }) => (
              <Link key={key} href={`/${lang}${href}`} className={navClass(href)}>
                {nav[key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              href={alternatePath}
              className="rounded-md border border-background/30 px-2.5 py-1 text-xs font-semibold text-background/70 transition-colors hover:border-primary hover:text-primary"
            >
              {nav.switchLang}
            </Link>
            <a href="tel:3039521569" className="flex items-center gap-1.5 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" />
              <span>303.952.1569</span>
            </a>
            <Button asChild>
              <Link href={`/${lang}/contact`}>{nav.contact}</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-background md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-background/10 bg-foreground md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {NAV_ITEMS.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${lang}${href}`}
                className={mobileNavClass(href)}
                onClick={() => setMobileOpen(false)}
              >
                {nav[key]}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-background/10 pt-3">
              <Link
                href={alternatePath}
                className="w-fit rounded-md border border-background/30 px-2.5 py-1 text-xs font-semibold text-background/70 hover:border-primary hover:text-primary ml-3"
                onClick={() => setMobileOpen(false)}
              >
                {nav.switchLang === 'ES' ? 'Español' : 'English'}
              </Link>
              <a href="tel:3039521569" className="flex items-center gap-1.5 px-3 text-sm font-medium text-primary">
                <Phone className="h-4 w-4" />
                <span>303.952.1569</span>
              </a>
              <Button asChild className="w-full">
                <Link href={`/${lang}/contact`} onClick={() => setMobileOpen(false)}>
                  {nav.contact}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
