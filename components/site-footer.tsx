"use client"

import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function SiteFooter() {
  const { t } = useLanguage()
  const nav = t.nav
  const f = t.footer

  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">CO</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-tight text-background">CoFirstTimeBuyer</span>
                <span className="text-xs font-medium leading-tight text-accent">Grants</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              {f.description}
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-background">{f.quickLinks}</h3>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer navigation">
              <Link href="#home" className="text-sm text-background/60 hover:text-accent">{nav.home}</Link>
              <Link href="#about" className="text-sm text-background/60 hover:text-accent">{nav.about}</Link>
              <Link href="#program" className="text-sm text-background/60 hover:text-accent">{nav.theGrant}</Link>
              <Link href="#testimonials" className="text-sm text-background/60 hover:text-accent">{nav.testimonials}</Link>
              <Link href="#contact" className="text-sm text-background/60 hover:text-accent">{nav.contact}</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-background">{f.contactInfo}</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:TBD" className="flex items-center gap-2 text-sm text-background/60 hover:text-accent">
                <Phone className="h-4 w-4" />
                [Phone TBD]
              </a>
              <a href="mailto:info@cofirsttimebuyergrants.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-accent">
                <Mail className="h-4 w-4" />
                info@cofirsttimebuyergrants.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
