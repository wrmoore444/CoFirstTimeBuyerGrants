import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLang, type Lang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { COUNTIES, getCounty } from '@/lib/counties'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { BenefitsGrid } from '@/components/sections/benefits-grid'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { FaqPreviewSection } from '@/components/sections/faq-preview-section'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'
import { ContactForm } from '@/components/layout/contact-form'
import { Button } from '@/components/ui/button'

export function generateStaticParams() {
  return COUNTIES.flatMap((county) =>
    ['en', 'es'].map((lang) => ({ lang, county: county.slug }))
  )
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ lang: string; county: string }>
}) {
  const { lang, county: countySlug } = await params
  if (!isValidLang(lang)) notFound()

  const countyData = getCounty(countySlug)
  if (!countyData) notFound()

  const dict = getDictionary(lang)
  const cp = dict.countyPage
  const content = countyData[lang as Lang]

  return (
    <>
      {/* 1. HERO */}
      <HeroSection minHeight="min-h-[400px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {cp.heroBadge}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {lang === 'en'
            ? `First-Time Homebuyer Assistance in ${content.name}`
            : `Asistencia para Compradores por Primera Vez en ${content.name}`}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          {content.heroSubtitle}
        </p>
      </HeroSection>

      {/* 2. LOCAL MARKET CONTEXT */}
      <ContentSection background="white">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {content.marketEyebrow}
          </span>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {content.marketBody}
          </p>
        </div>
      </ContentSection>

      {/* 3. ASSISTANCE PROGRAM EXPLANATION */}
      <ContentSection background="light">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {cp.programEyebrow}
          </span>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {content.programBody}
          </p>
          <p className="mt-4 text-xs text-muted-foreground italic">{cp.infoDisclaimer}</p>
        </div>
      </ContentSection>

      {/* 4. HOW IT WORKS */}
      <ContentSection background="white">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {cp.processEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {cp.processTitle}
          </h2>
        </div>
        <BenefitsGrid items={cp.processSteps} columns={3} variant="card" />
      </ContentSection>

      {/* 5. TESTIMONIALS */}
      <ContentSection background="dark">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {cp.testimonialsEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-background sm:text-4xl">
            {cp.testimonialsTitle}
          </h2>
        </div>
        <TestimonialsSection items={cp.testimonialsItems} />
      </ContentSection>

      {/* 6. LEAD CAPTURE */}
      <ContentSection background="white" id="eligibility">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {cp.formEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {cp.formTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{cp.formSubtitle}</p>
        </div>
        <div className="mx-auto max-w-xl">
          <ContactForm
            form={dict.contact.form}
            showMessage={false}
            defaultCounty={content.name}
          />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {cp.formReassurance}
          </p>
        </div>
      </ContentSection>

      {/* 7. FAQ PREVIEW */}
      <ContentSection background="light">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {cp.faqEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {cp.faqTitle}
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <FaqPreviewSection items={cp.faqItems} />
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href={`/${lang}/faq`}>{cp.faqViewAll}</Link>
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* 8. FINAL CTA */}
      <CtaBannerSection
        title={cp.ctaTitle}
        subtitle={cp.ctaSubtitle}
        cta={cp.ctaPrimary}
        ctaHref={`/${lang}/contact`}
        ctaSecondary={cp.ctaSecondary}
        ctaSecondaryHref={`/${lang}/contact`}
        background="dark"
      />
    </>
  )
}
