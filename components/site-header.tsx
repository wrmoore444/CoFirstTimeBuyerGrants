"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">CO</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-foreground">Colorado</span>
              <span className="text-xs font-medium leading-tight text-primary">Home Grant</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            <Link href="#home" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#program" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              The Grant
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:720-735-2832" className="flex items-center gap-1.5 text-sm font-medium text-primary">
              <Phone className="h-4 w-4" />
              <span>720-735-2832</span>
            </a>
            <Button asChild>
              <Link href="#contact">Request Info</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            <Link href="#home" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link href="#about" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="#program" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary" onClick={() => setMobileMenuOpen(false)}>
              The Grant
            </Link>
            <Link href="#testimonials" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a href="tel:720-735-2832" className="flex items-center gap-1.5 px-3 text-sm font-medium text-primary">
                <Phone className="h-4 w-4" />
                <span>720-735-2832</span>
              </a>
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Request Info</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
