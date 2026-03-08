import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { isValidLang, type Lang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { BenefitsGrid } from '@/components/sections/benefits-grid'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'
import { CountyPreviewSection } from '@/components/sections/county-preview-section'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  const h = dict.home

  return (
    <>
      {/* Hero */}
      <HeroSection>
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {h.hero.badge}
        </span>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          {h.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {h.hero.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="text-base px-8">
            <Link href={`/${lang}/contact`}>
              {h.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8"
          >
            <Link href={`/${lang}/how-it-works`}>{h.hero.ctaSecondary}</Link>
          </Button>
        </div>

        {/* Stats strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-primary-foreground/20 pt-8">
          {h.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-10">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-primary-foreground/60">{stat.label}</p>
              </div>
              {i < h.stats.length - 1 && (
                <div className="hidden h-10 w-px bg-primary-foreground/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </HeroSection>

      {/* Welcome */}
      <ContentSection background="white">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{h.welcome.eyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">{h.welcome.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.welcome.body}</p>
          <Button asChild className="mt-8">
            <Link href={`/${lang}/how-it-works`}>{h.welcome.cta}</Link>
          </Button>
        </div>
      </ContentSection>

      {/* Service preview */}
      <ContentSection background="light">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{h.servicePreview.eyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">{h.servicePreview.title}</h2>
        </div>
        <BenefitsGrid items={h.servicePreview.items} columns={4} variant="card" />
      </ContentSection>

      {/* County preview */}
      <ContentSection background="white">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-bold text-foreground">
            {lang === 'en' ? 'Serving 30+ Colorado Counties' : 'Atendiendo 30+ Condados de Colorado'}
          </h2>
        </div>
        <CountyPreviewSection
          counties={dict.counties.list.slice(0, 12)}
          disclaimer={dict.counties.disclaimer}
          cta={
            <Button asChild variant="outline">
              <Link href={`/${lang}/counties`}>
                {lang === 'en' ? 'See All Counties' : 'Ver Todos los Condados'}
              </Link>
            </Button>
          }
        />
      </ContentSection>

      {/* CTA banner */}
      <CtaBannerSection
        title={dict.cta.checkEligibility}
        subtitle={lang === 'en' ? 'No cost. No obligation. Just answers.' : 'Sin costo. Sin compromiso. Solo respuestas.'}
        cta={dict.cta.checkEligibility}
        ctaHref={`/${lang}/contact`}
        background="primary"
      />
    </>
  )
}
