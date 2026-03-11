import { notFound } from 'next/navigation'
import { isValidLang } from '@/lib/i18n'
import { HeroSection } from '@/components/sections/hero-section'
import { ContentSection } from '@/components/sections/content-section'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isValidLang(lang)) notFound()

  return (
    <>
      <HeroSection minHeight="min-h-[360px]">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          Legal
        </span>
        <h1 className="max-w-3xl font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          Privacy Policy
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
          <strong>Notice:</strong> This Privacy Policy is currently pending review by our compliance team. It will be updated before the site launches publicly.
        </div>

        <div className="prose prose-slate max-w-none space-y-8 text-base leading-relaxed text-foreground">

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p>At CoFirstTimeBuyerGrants, operated by Pivot Lending Group (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit this website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
            <p className="mt-4">This policy applies to information we collect on this website, in email, text, and other electronic messages between you and this website, and when you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.</p>
            <p className="mt-4">Please read this policy carefully. If you do not agree with our policies and practices, your choice is not to use our website. By accessing or using this website, you agree to this privacy policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children Under the Age of 13</h2>
            <p>Our website is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on the website. We do not knowingly collect personal information from children under 13. If you believe we might have any information from or about a child under 13, please contact us.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p>We collect several types of information from and about users of our website, including:</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Information by which you may be personally identified, such as name, postal address, email address, and telephone number (&ldquo;personal information&rdquo;)</li>
              <li>Information about your internet connection, the equipment you use to access our website, and usage details</li>
              <li>Information you provide by filling in forms on our website, including information provided when requesting homebuyer assistance information or submitting a contact request</li>
              <li>Records and copies of your correspondence, if you contact us</li>
            </ul>
            <p className="mt-4">We also collect information automatically as you navigate through the site, including usage details, IP addresses, and information collected through cookies and other tracking technologies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies and Tracking Technologies</h2>
            <p>We may use cookies, web beacons, and similar technologies to collect information about your equipment, browsing actions, and patterns. This helps us improve our website and deliver a better, more personalized service. You may refuse to accept browser cookies by activating the appropriate setting on your browser, though some parts of the site may then be inaccessible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us to:</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>Present our website and its contents to you</li>
              <li>Provide you with information about homebuyer assistance programs and mortgage services</li>
              <li>Connect you with licensed mortgage professionals at Pivot Lending Group</li>
              <li>Fulfill any other purpose for which you provide it</li>
              <li>Notify you about changes to our website or services</li>
              <li>Comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">TCPA Consent &amp; Communications</h2>
            <p>By submitting a contact or lead form on this website, you expressly consent to be contacted by Pivot Lending Group and its representatives by telephone (including mobile phone), text/SMS message, and email, including through the use of automated telephone dialing systems and pre-recorded messages, regarding mortgage products, homebuyer assistance programs, and related services, even if your telephone number is on a federal, state, or local do-not-call registry.</p>
            <p className="mt-4">Your consent is not a condition of purchase. You may opt out of communications at any time by contacting us at the information provided below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclosure of Your Information</h2>
            <p>We may disclose personal information that we collect or you provide:</p>
            <ul className="mt-4 list-disc pl-6 space-y-2">
              <li>To Pivot Lending Group and its affiliated mortgage professionals to fulfill the purpose for which you provided it</li>
              <li>To service providers we use to support our business and website operations</li>
              <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request</li>
              <li>To enforce or apply our terms of service</li>
              <li>If we believe disclosure is necessary to protect the rights, property, or safety of our company, customers, or others</li>
            </ul>
            <p className="mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, the transmission of information via the internet is not completely secure, and we cannot guarantee the security of your personal information transmitted to our website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">California Consumer Privacy Rights</h2>
            <p>If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to request deletion of your personal information, and the right to opt out of the sale of your personal information. We do not sell personal information. To exercise your rights, please contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. The date the policy was last revised is identified at the top of the page. You are responsible for periodically visiting this page to check for any changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
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
