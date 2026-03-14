import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { notFound } from 'next/navigation'
import { isValidLang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { Button } from '@/components/ui/button'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { BenefitsGrid } from '@/components/sections/benefits-grid'
import { TwoColumnSection } from '@/components/sections/two-column-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CountyPreviewSection } from '@/components/sections/county-preview-section'
import { FaqPreviewSection } from '@/components/sections/faq-preview-section'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'
import { ContactForm } from '@/components/layout/contact-form'

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
      {/* 1. HERO */}
      <HeroSection minHeight="min-h-[600px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {h.hero.badge}
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          {h.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          {h.hero.subtitle}
        </p>
        <p className="mt-3 max-w-xl text-sm text-primary-foreground/60">
          {h.hero.microTrust}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
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
            <Link href={`/${lang}/contact`}>{h.hero.ctaSecondary}</Link>
          </Button>
        </div>

        {lang === 'en' && (
          <div className="mt-4">
            <Link
              href="/es"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              ¿Prefiere español? Cambiar a Español →
            </Link>
          </div>
        )}

        {/* Stats strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-primary-foreground/20 pt-8">
          {h.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-10">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-primary-foreground/60">
                  {stat.label}
                </p>
              </div>
              {i < h.stats.length - 1 && (
                <div className="hidden h-10 w-px bg-primary-foreground/20 sm:block" />
              )}
            </div>
          ))}
        </div>
      </HeroSection>

      {/* 2. PROGRAM OVERVIEW */}
      <ContentSection background="white">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.programOverview.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.programOverview.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{h.programOverview.body}</p>
          <Button asChild className="mt-8">
            <Link href={`/${lang}/how-it-works`}>{h.programOverview.cta}</Link>
          </Button>
        </div>
      </ContentSection>

      {/* 3. HOW THE PROCESS WORKS */}
      <ContentSection background="light">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.process.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.process.title}
          </h2>
        </div>
        <BenefitsGrid
          items={h.process.steps.map((step, i) => ({
            title: `${i + 1}. ${step.title}`,
            description: step.description,
          }))}
          columns={3}
          variant="card"
        />
      </ContentSection>

      {/* 4. BENEFITS — TWO COLUMN */}
      <ContentSection background="white">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.benefits.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.benefits.title}
          </h2>
        </div>
        <TwoColumnSection
          align="top"
          left={
            <div className="rounded-xl border border-border bg-card p-8 h-full">
              <h3 className="text-xl font-semibold text-foreground mb-3">{h.benefits.left.title}</h3>
              <p className="text-muted-foreground mb-6">{h.benefits.left.body}</p>
              <ul className="space-y-3">
                {h.benefits.left.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
          right={
            <div className="rounded-xl border border-border bg-card p-8 h-full">
              <h3 className="text-xl font-semibold text-foreground mb-3">{h.benefits.right.title}</h3>
              <p className="text-muted-foreground mb-6">{h.benefits.right.body}</p>
              <ul className="space-y-3">
                {h.benefits.right.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </ContentSection>

      {/* 5. COLORADO SERVICE AREA */}
      <ContentSection background="light">
        <div className="text-center mb-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.counties.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.counties.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{h.counties.subtitle}</p>
        </div>
        <CountyPreviewSection
          counties={h.counties.preview}
          cta={
            <Button asChild variant="outline">
              <Link href={`/${lang}/counties`}>{h.counties.viewAll}</Link>
            </Button>
          }
        />
      </ContentSection>

      {/* 6. TESTIMONIALS */}
      <ContentSection background="dark">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.testimonials.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-background sm:text-4xl">
            {h.testimonials.title}
          </h2>
          <p className="mt-3 text-background/70">{h.testimonials.subtitle}</p>
        </div>
        <TestimonialsSection items={h.testimonials.items} />
      </ContentSection>

      {/* 7. LEAD CAPTURE FORM */}
      <ContentSection background="white" id="eligibility">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.eligibilityForm.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.eligibilityForm.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{h.eligibilityForm.subtitle}</p>
        </div>
        <div className="mx-auto max-w-xl">
          <ContactForm form={dict.contact.form} showMessage={false} />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {h.eligibilityForm.reassurance}
          </p>
        </div>
      </ContentSection>

      {/* 8. FAQ PREVIEW */}
      <ContentSection background="light">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.homeFaq.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.homeFaq.title}
          </h2>
        </div>
        <div className="mx-auto max-w-3xl">
          <FaqPreviewSection items={h.homeFaq.items} />
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href={`/${lang}/faq`}>{h.homeFaq.viewAll}</Link>
            </Button>
          </div>
        </div>
      </ContentSection>

      {/* 9. FINAL CTA BANNER */}
      <CtaBannerSection
        title={h.finalCta.title}
        subtitle={h.finalCta.subtitle}
        cta={h.finalCta.primary}
        ctaHref={`/${lang}/contact`}
        ctaSecondary={h.finalCta.secondary}
        ctaSecondaryHref={`/${lang}/contact`}
        background="dark"
      />
    </>
  )
}
