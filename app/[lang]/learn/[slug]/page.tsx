import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isValidLang, type Lang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { ARTICLES, getArticle } from '@/lib/learn'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { FaqPreviewSection } from '@/components/sections/faq-preview-section'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'
import { ContactForm } from '@/components/layout/contact-form'
import { Button } from '@/components/ui/button'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  const article = getArticle(slug)
  if (!article || !isValidLang(lang)) return {}
  const content = article[lang as Lang]
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  }
}

export function generateStaticParams() {
  return ARTICLES.flatMap((article) =>
    ['en', 'es'].map((lang) => ({ lang, slug: article.slug }))
  )
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  if (!isValidLang(lang)) notFound()

  const article = getArticle(slug)
  if (!article) notFound()

  const dict = getDictionary(lang)
  const lp = dict.learnPage
  const content = article[lang as Lang]

  return (
    <>
      {/* 1. ARTICLE HERO */}
      <HeroSection minHeight="min-h-[380px]">
        <Link
          href={`/${lang}/learn`}
          className="mb-4 inline-block text-sm text-primary-foreground/60 hover:text-primary transition-colors"
        >
          {lp.backToLearn}
        </Link>
        <h1 className="max-w-4xl text-balance font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          {content.heroSubtitle}
        </p>
      </HeroSection>

      {/* 2. ARTICLE CONTENT SECTIONS */}
      {content.sections.map((section, i) => (
        <ContentSection key={section.heading} background={i % 2 === 0 ? 'white' : 'light'}>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl mb-4">
              {section.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">{section.body}</p>
          </div>
        </ContentSection>
      ))}

      {/* 3. LOCAL RELEVANCE */}
      <ContentSection background={content.sections.length % 2 === 0 ? 'white' : 'light'}>
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {lp.localEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl">
            {lp.localTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lp.localBody}</p>
          <Button asChild variant="outline" className="mt-6">
            <Link href={`/${lang}/counties`}>{lp.localCta}</Link>
          </Button>
        </div>
      </ContentSection>

      {/* 4. CTA + LEAD FORM */}
      <ContentSection background="white" id="eligibility">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {lp.ctaEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {lp.ctaSectionTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{lp.ctaSectionBody}</p>
        </div>
        <div className="mx-auto max-w-xl">
          <ContactForm form={dict.contact.form} showMessage={false} />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {lp.formReassurance}
          </p>
        </div>
      </ContentSection>

      {/* 5. FAQ */}
      <ContentSection background="light">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {lp.faqEyebrow}
          </span>
        </div>
        <div className="mx-auto max-w-3xl">
          <FaqPreviewSection items={content.faqs} />
        </div>
      </ContentSection>

      {/* 6. FINAL CTA BANNER */}
      <CtaBannerSection
        title={lp.ctaBannerTitle}
        subtitle={lp.ctaBannerSubtitle}
        cta={lp.ctaBannerPrimary}
        ctaHref={`/${lang}/contact`}
        ctaSecondary={lp.ctaBannerSecondary}
        ctaSecondaryHref={`/${lang}/contact`}
        background="dark"
      />
    </>
  )
}
