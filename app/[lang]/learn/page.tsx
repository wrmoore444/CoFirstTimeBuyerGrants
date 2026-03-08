import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { isValidLang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { ARTICLES } from '@/lib/learn'
import type { Lang } from '@/lib/i18n'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (lang === 'es') {
    return {
      title: 'Centro de Conocimiento | CoFirstTimeBuyerGrants',
      description: 'Explora artículos educativos sobre programas de asistencia para compradores de casa por primera vez en Colorado.',
    }
  }
  return {
    title: 'Learn About Colorado First-Time Homebuyer Programs | CoFirstTimeBuyerGrants',
    description: 'Explore educational articles about Colorado first-time homebuyer assistance programs, down payment help, credit score requirements, and more.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function LearnIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  const l = dict.learnIndex

  return (
    <>
      {/* Hero */}
      <HeroSection minHeight="min-h-[360px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {l.heroBadge}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {l.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          {l.heroSubtitle}
        </p>
      </HeroSection>

      {/* Article Grid */}
      <ContentSection background="white">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {l.gridEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {l.gridTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{l.gridSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => {
            const content = article[lang as Lang]
            return (
              <Link
                key={article.slug}
                href={`/${lang}/learn/${article.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm hover:border-primary hover:shadow-md transition-all flex flex-col"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                  {content.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1 mb-4">
                  {content.shortDesc}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary mt-auto">
                  {l.readMore}
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </ContentSection>

      {/* CTA Banner */}
      <CtaBannerSection
        title={l.ctaTitle}
        subtitle={l.ctaSubtitle}
        cta={l.ctaPrimary}
        ctaHref={`/${lang}/contact`}
        ctaSecondary={l.ctaSecondary}
        ctaSecondaryHref={`/${lang}/contact`}
        background="dark"
      />
    </>
  )
}
