import { notFound } from 'next/navigation'
import { isValidLang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function HowItWorksPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  const h = dict.howItWorks

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
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {h.steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-xl font-bold">
                  {step.number}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">{step.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
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
