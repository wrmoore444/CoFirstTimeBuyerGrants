import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { FeaturesSection } from "@/components/features-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WelcomeSection />
        <FeaturesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
