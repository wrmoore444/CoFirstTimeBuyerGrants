import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export function SiteFooter() {
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
                <span className="text-sm font-bold leading-tight text-background">Colorado</span>
                <span className="text-xs font-medium leading-tight text-primary">Home Grant</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Helping Colorado residents achieve their dream of homeownership through our grant assistance program.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-background">Quick Links</h3>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer navigation">
              <Link href="#home" className="text-sm text-background/60 hover:text-primary">Home</Link>
              <Link href="#about" className="text-sm text-background/60 hover:text-primary">About</Link>
              <Link href="#program" className="text-sm text-background/60 hover:text-primary">The Grant</Link>
              <Link href="#testimonials" className="text-sm text-background/60 hover:text-primary">Testimonials</Link>
              <Link href="#contact" className="text-sm text-background/60 hover:text-primary">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-background">Contact Info</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="tel:720-735-2832" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary">
                <Phone className="h-4 w-4" />
                720-735-2832
              </a>
              <a href="tel:720-735-2890" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary">
                <Phone className="h-4 w-4" />
                720-735-2890
              </a>
              <a href="mailto:info@cohomegrant.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-primary">
                <Mail className="h-4 w-4" />
                info@cohomegrant.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} Colorado Home Grant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
