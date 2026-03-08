import { notFound } from 'next/navigation'
import { Phone, Mail, MapPin } from 'lucide-react'
import { isValidLang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'
import { TwoColumnSection } from '@/components/sections/two-column-section'
import { ContactForm } from '@/components/layout/contact-form'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  const h = dict.contact

  return (
    <>
      <HeroSection minHeight="min-h-[300px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          {h.hero.badge}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {h.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{h.hero.subtitle}</p>
      </HeroSection>

      <ContentSection background="light">
        <TwoColumnSection
          align="top"
          left={
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{h.info.phoneLabel}</p>
                  <p className="font-semibold text-foreground">{h.info.phoneValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{h.info.emailLabel}</p>
                  <p className="font-semibold text-foreground">{h.info.emailValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{h.info.servingLabel}</p>
                  <p className="font-semibold text-foreground">{h.info.servingText}</p>
                </div>
              </div>
            </div>
          }
          right={<ContactForm form={h.form} />}
        />
      </ContentSection>
    </>
  )
}
