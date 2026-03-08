import Link from 'next/link'
import type { Dictionary } from '@/lib/translations'
import type { Lang } from '@/lib/i18n'

const QUICK_LINKS = [
  { key: 'home' as const, href: '' },
  { key: 'howItWorks' as const, href: '/how-it-works' },
  { key: 'whoMayQualify' as const, href: '/who-qualifies' },
  { key: 'counties' as const, href: '/counties' },
  { key: 'about' as const, href: '/about' },
  { key: 'faq' as const, href: '/faq' },
  { key: 'contact' as const, href: '/contact' },
]

interface Props {
  dict: Dictionary
  lang: Lang
}

export function SiteFooter({ dict, lang }: Props) {
  const f = dict.footer
  const nav = dict.nav
  const contact = dict.contact.info

  return (
    <footer className="bg-foreground text-background/70">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-base font-bold text-primary-foreground">CO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight text-background">CoFirstTimeBuyer</span>
                <span className="text-xs font-medium leading-tight text-primary">Grants</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{f.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background mb-4">{f.quickLinks}</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link href={`/${lang}${href}`} className="text-sm hover:text-primary transition-colors">
                    {nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background mb-4">{f.contactInfo}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium text-background/60">{contact.phoneLabel}: </span>
                <span>{contact.phoneValue}</span>
              </li>
              <li>
                <span className="font-medium text-background/60">{contact.emailLabel}: </span>
                <span>{contact.emailValue}</span>
              </li>
              <li>
                <span className="font-medium text-background/60">{contact.servingLabel}: </span>
                <span>{contact.servingText}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-background mb-4">{f.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-background/60">{f.nmls}</span></li>
              <li><span className="text-background/60">{f.equalHousing}</span></li>
              <li><span className="text-background/60">{f.licensed}</span></li>
              <li><span className="text-background/40">{f.privacyPolicy}</span></li>
              <li><span className="text-background/40">{f.terms}</span></li>
            </ul>
          </div>
        </div>

        {/* Compliance disclosure */}
        <div className="mt-10 border-t border-background/10 pt-6">
          <p className="text-xs text-background/40 leading-relaxed max-w-3xl">{f.disclosure}</p>
          <p className="mt-4 text-xs text-background/40">
            &copy; {new Date().getFullYear()} {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
