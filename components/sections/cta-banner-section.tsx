import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Background = 'primary' | 'dark' | 'light'

interface Props {
  title: string
  subtitle?: string
  cta: string
  ctaHref: string
  ctaSecondary?: string
  ctaSecondaryHref?: string
  background?: Background
}

const bgMap: Record<Background, { section: string; title: string; subtitle: string }> = {
  primary: { section: 'bg-primary', title: 'text-primary-foreground', subtitle: 'text-primary-foreground/80' },
  dark: { section: 'bg-accent', title: 'text-accent-foreground', subtitle: 'text-accent-foreground/80' },
  light: { section: 'bg-muted', title: 'text-foreground', subtitle: 'text-muted-foreground' },
}

export function CtaBannerSection({
  title,
  subtitle,
  cta,
  ctaHref,
  ctaSecondary,
  ctaSecondaryHref,
  background = 'primary',
}: Props) {
  const colors = bgMap[background]
  return (
    <section className={`py-16 lg:py-20 ${colors.section}`}>
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className={`font-serif text-3xl font-bold sm:text-4xl ${colors.title}`}>{title}</h2>
        {subtitle && (
          <p className={`mt-4 text-lg ${colors.subtitle}`}>{subtitle}</p>
        )}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            variant={background === 'primary' ? 'outline' : 'default'}
            className={
              background === 'primary'
                ? 'border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8'
                : 'text-base px-8'
            }
          >
            <Link href={ctaHref}>
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {ctaSecondary && ctaSecondaryHref && (
            <Button asChild size="lg" variant="ghost" className={`text-base px-8 ${colors.subtitle}`}>
              <Link href={ctaSecondaryHref}>{ctaSecondary}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
