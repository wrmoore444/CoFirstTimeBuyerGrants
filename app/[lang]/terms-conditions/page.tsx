import { notFound } from 'next/navigation'
import { isValidLang } from '@/lib/i18n'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function TermsConditionsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()

  return (
    <>
      <HeroSection minHeight="min-h-[360px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          Legal
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Last Updated: March 11, 2026
        </p>
      </HeroSection>

      <ContentSection background="white" narrow>
        {lang === 'es' && (
          <div className="mb-8 rounded-lg border border-primary/30 bg-primary/5 px-6 py-4 text-sm text-muted-foreground">
            <p>Este documento está en inglés. La versión en inglés prevalece.</p>
            <p className="mt-1">This document is provided in English. The English version governs.</p>
          </div>
        )}

        <div className="mb-8 rounded-lg border border-amber-300 bg-amber-50 px-6 py-4 text-sm text-amber-800">
          <strong>Notice:</strong> These Terms &amp; Conditions are currently pending review by our compliance team. They will be updated before the site launches publicly.
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-foreground">

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">General Terms of Use</h2>
            <p>This website (&ldquo;Site&rdquo;) is operated by CoFirstTimeBuyerGrants in connection with Pivot Lending Group (&ldquo;Pivot Lending Group&rdquo;). This Site and any services provided by Pivot Lending Group in connection with this Site (the &ldquo;Services&rdquo;) are provided to you subject to these Terms of Use, which govern your use of the Site. Please read these Terms of Use carefully. By accessing this Site you agree to be bound by these Terms of Use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Copyrights, Trademarks, and Restrictions on Use</h2>
            <p>All pages and content on this Site are owned and controlled by CoFirstTimeBuyerGrants and Pivot Lending Group, except as otherwise expressly stated, and are protected by U.S. copyright laws and international treaties.</p>
            <p className="mt-4">You are authorized to view the information available on the Site for your personal, informational purposes only. You may not copy, display, distribute, transfer, reproduce, license, alter, create derivative works of, or republish all or any portion of the Site for any commercial or public purpose without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">No Commitment to Lend</h2>
            <p>Nothing on this Site constitutes a commitment to lend or an offer to extend credit. All loans are subject to credit approval, underwriting review, program availability, and borrower eligibility. Homebuyer assistance programs, interest rates, and loan terms are subject to change without notice. Contact Pivot Lending Group directly for current program details and eligibility requirements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">TCPA Consent &amp; Contact Authorization</h2>
            <p>By submitting any form on this Site, you expressly consent to be contacted by Pivot Lending Group and its representatives by telephone (including mobile phone), text/SMS message, and email, including through the use of automated telephone dialing systems and pre-recorded messages, regarding mortgage products, homebuyer assistance programs, and related financial services, even if your telephone number is on a federal, state, or local do-not-call registry.</p>
            <p className="mt-4">Your consent to be contacted is not a condition of purchase or receiving any service. You may opt out at any time by contacting us at memrich@pivotlending.com or 303.952.1569.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Links</h2>
            <p>This Site may contain links to websites controlled by third parties. Pivot Lending Group disclaims liability for any third-party website content, products, privacy policies, or security. Your use of any linked site is at your own risk and subject to that site&rsquo;s terms and policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
            <p className="uppercase text-sm">THE SITE AND SERVICES ARE OFFERED ON AN &ldquo;AS IS&rdquo; AND &ldquo;WHERE AVAILABLE&rdquo; BASIS, WITH NO WARRANTY OF ANY KIND — WHETHER EXPRESS, IMPLIED, OR STATUTORY — INCLUDING BUT NOT LIMITED TO WARRANTIES OF TITLE OR THE IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. PIVOT LENDING GROUP DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, NOR DOES IT MAKE ANY WARRANTY AS TO THE ACCURACY, COMPLETENESS, OR TIMELINESS OF INFORMATION PROVIDED.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="uppercase text-sm">TO THE MAXIMUM EXTENT PERMISSIBLE UNDER APPLICABLE LAW, PIVOT LENDING GROUP WILL NOT BE RESPONSIBLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THIS SITE OR ITS SERVICES.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Indemnification</h2>
            <p>You agree to indemnify and hold harmless Pivot Lending Group, its officers, directors, employees, and agents from and against any claims, actions, or demands arising from your use of this Site or your violation of these Terms of Use.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
            <p>Pivot Lending Group reserves the right to modify these Terms of Use at any time without notice. The most current version will always be available on this page. Your continued use of the Site after any modification constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p>These Terms of Use are governed by the laws of the State of Colorado. Any disputes arising from your use of this Site shall be resolved in the courts of Colorado.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <div className="mt-4 space-y-1 text-muted-foreground">
              <p><strong className="text-foreground">Pivot Lending Group</strong></p>
              <p>Phone: 303.952.1569</p>
              <p>Email: memrich@pivotlending.com</p>
              <p>Licensed in the State of Colorado</p>
              <p>NMLS# [TBD]</p>
            </div>
          </section>

        </div>
      </ContentSection>
    </>
  )
}
