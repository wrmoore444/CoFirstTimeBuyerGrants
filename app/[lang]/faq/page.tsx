import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isValidLang, type Lang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { getFAQItems } from '@/lib/faq'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { FaqAccordion } from '@/components/sections/faq-accordion'
import { CtaBannerSection } from '@/components/sections/cta-banner-section'
import { ContactForm } from '@/components/layout/contact-form'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isValidLang(lang)) return {}
  if (lang === 'es') {
    return {
      title: 'Preguntas Frecuentes — Asistencia Para Compradores de Casa en Colorado',
      description:
        'Respuestas a preguntas comunes sobre subsidios, pago inicial, puntaje de crédito y programas de asistencia para compradores de casa por primera vez en Colorado.',
    }
  }
  return {
    title: 'FAQ — Colorado First Time Home Buyer Grants and Assistance Programs',
    description:
      'Answers to common questions about first-time homebuyer grants, down payment assistance, credit score requirements, and closing cost help in Colorado.',
  }
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()

  const dict = getDictionary(lang)
  const h = dict.faq
  const faqItems = getFAQItems(lang as Lang)

  return (
    <>
      {/* 1. HERO */}
      <HeroSection minHeight="min-h-[360px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {h.hero.badge}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {h.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          {h.hero.subtitle}
        </p>
      </HeroSection>

      {/* 2. FAQ ACCORDION */}
      <ContentSection background="light">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              {h.listEyebrow}
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {h.listTitle}
            </h2>
          </div>
          <FaqAccordion items={faqItems} />
        </div>
      </ContentSection>

      {/* 3. EDUCATIONAL SECTION */}
      <ContentSection background="white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.educationalEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl">
            {h.educationalTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {h.educationalBody}
          </p>
        </div>
      </ContentSection>

      {/* 4. CTA BANNER */}
      <CtaBannerSection
        title={h.ctaTitle}
        subtitle={h.ctaSubtitle}
        cta={h.ctaPrimary}
        ctaHref={`/${lang}/contact`}
        background="dark"
      />

      {/* 5. LEAD FORM */}
      <ContentSection background="light" id="eligibility">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {h.formEyebrow}
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.formTitle}
          </h2>
          <p className="mt-3 text-muted-foreground">{h.formSubtitle}</p>
        </div>
        <div className="mx-auto max-w-xl">
          <ContactForm form={dict.contact.form} showMessage={false} />
          <p className="mt-4 text-center text-xs text-muted-foreground">{h.formReassurance}</p>
        </div>
      </ContentSection>
    </>
  )
}
