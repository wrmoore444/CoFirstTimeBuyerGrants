"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const NAV_SECTIONS = ["home", "about", "program", "testimonials", "contact"] as const

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("home")
  const { t, lang, toggleLang } = useLanguage()
  const nav = t.nav

  useEffect(() => {
    const HEADER_HEIGHT = 68
    const handleScroll = () => {
      const scrollY = window.scrollY + HEADER_HEIGHT + 8
      let current = "home"
      for (const id of NAV_SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function navClass(section: string) {
    return activeSection === section
      ? "text-sm font-semibold text-primary"
      : "text-sm font-medium text-background/70 transition-colors hover:text-primary"
  }

  function mobileNavClass(section: string) {
    return activeSection === section
      ? "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-background/10"
      : "rounded-md px-3 py-2 text-sm font-medium text-background/70 hover:bg-background/10 hover:text-background"
  }

  return (
    <header className="sticky top-0 z-50 bg-foreground border-b border-background/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">CO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-background">CoFirstTimeBuyer</span>
              <span className="text-xs font-medium leading-tight text-primary">Grants</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <Link href="#home" className={navClass("home")}>{nav.home}</Link>
            <Link href="#about" className={navClass("about")}>{nav.about}</Link>
            <Link href="#program" className={navClass("program")}>{nav.theGrant}</Link>
            <Link href="#testimonials" className={navClass("testimonials")}>{nav.testimonials}</Link>
            <Link href="#contact" className={navClass("contact")}>{nav.contact}</Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleLang}
              className="rounded-md border border-background/30 px-2.5 py-1 text-xs font-semibold text-background/70 transition-colors hover:border-primary hover:text-primary"
              aria-label="Switch language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <a href="tel:TBD" className="flex items-center gap-1.5 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" />
              <span>[Phone TBD]</span>
            </a>
            <Button asChild>
              <Link href="#contact">{nav.requestInfo}</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-background md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-background/10 bg-foreground md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            <Link href="#home" className={mobileNavClass("home")} onClick={() => setMobileMenuOpen(false)}>{nav.home}</Link>
            <Link href="#about" className={mobileNavClass("about")} onClick={() => setMobileMenuOpen(false)}>{nav.about}</Link>
            <Link href="#program" className={mobileNavClass("program")} onClick={() => setMobileMenuOpen(false)}>{nav.theGrant}</Link>
            <Link href="#testimonials" className={mobileNavClass("testimonials")} onClick={() => setMobileMenuOpen(false)}>{nav.testimonials}</Link>
            <Link href="#contact" className={mobileNavClass("contact")} onClick={() => setMobileMenuOpen(false)}>{nav.contact}</Link>
            <div className="mt-2 flex flex-col gap-2 border-t border-background/10 pt-3">
              <button
                onClick={toggleLang}
                className="w-fit rounded-md border border-background/30 px-2.5 py-1 text-xs font-semibold text-background/70 hover:border-primary hover:text-primary ml-3"
              >
                {lang === "en" ? "Español" : "English"}
              </button>
              <a href="tel:TBD" className="flex items-center gap-1.5 px-3 text-sm font-medium text-primary">
                <Phone className="h-4 w-4" />
                <span>[Phone TBD]</span>
              </a>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>{nav.requestInfo}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
