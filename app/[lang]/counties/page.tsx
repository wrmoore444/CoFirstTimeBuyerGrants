import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { isValidLang, type Lang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { COUNTIES } from '@/lib/counties'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function CountiesPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  const c = dict.countiesOverview

  return (
    <>
      {/* Hero */}
      <HeroSection minHeight="min-h-[360px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {c.heroBadge}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {c.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          {c.heroSubtitle}
        </p>
      </HeroSection>

      {/* County Grid */}
      <ContentSection background="white">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {c.gridEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {c.gridTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{c.gridSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTIES.map((county) => {
            const content = county[lang as Lang]
            return (
              <Link
                key={county.slug}
                href={`/${lang}/counties/${county.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {content.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                  {content.shortDesc}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  {c.learnMore}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </ContentSection>

      {/* Info Section */}
      <ContentSection background="light" narrow>
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {c.infoEyebrow}
        </span>
        <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          {c.infoTitle}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.infoBody}</p>
      </ContentSection>

      {/* CTA Banner */}
      <CtaBannerSection
        title={c.ctaTitle}
        subtitle={c.ctaSubtitle}
        cta={c.ctaPrimary}
        ctaHref={`/${lang}/contact`}
        ctaSecondary={c.ctaSecondary}
        ctaSecondaryHref={`/${lang}/contact`}
        background="dark"
      />
    </>
  )
}
