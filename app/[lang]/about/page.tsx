import { notFound } from 'next/navigation'
import { isValidLang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { BenefitsGrid } from '@/components/sections/benefits-grid'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  const h = dict.about

  return (
    <>
      <HeroSection minHeight="min-h-[360px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {h.hero.badge}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {h.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{h.hero.subtitle}</p>
      </HeroSection>

      <ContentSection background="white">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{h.mission.eyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">{h.mission.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.mission.body}</p>
        </div>
        <BenefitsGrid items={h.values} columns={2} variant="card" />
      </ContentSection>

      <ContentSection background="light">
        <div className="mx-auto max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{h.compliance.eyebrow}</span>
          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
            <p>{h.compliance.nmls}</p>
            <p>{h.compliance.equalHousing}</p>
            <p>{h.compliance.licensed}</p>
            <p className="mt-4 text-xs italic">{h.compliance.disclosure}</p>
          </div>
        </div>
      </ContentSection>

      <CtaBannerSection
        title={h.cta.title}
        subtitle={h.cta.subtitle}
        cta={h.cta.primary}
        ctaHref={`/${lang}/contact`}
        background="primary"
      />
    </>
  )
}
