import { notFound } from 'next/navigation'
import { isValidLang, type Lang } from '@/lib/i18n'
import { getDictionary } from '@/lib/translations'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()
  const dict = getDictionary(lang)
  return (
    <div lang={lang} className="flex min-h-screen flex-col">
      <SiteHeader dict={dict} lang={lang as Lang} />
      <main className="flex-1">{children}</main>
      <SiteFooter dict={dict} lang={lang as Lang} />
    </div>
  )
}
