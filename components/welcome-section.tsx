import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function WelcomeSection() {
  return (
    <section id="about" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/family-home.jpg"
                alt="Happy family in front of their new Colorado home"
                width={600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-primary px-6 py-4 text-primary-foreground shadow-lg md:block">
              <p className="text-3xl font-bold font-serif">$29,048</p>
              <p className="text-sm font-medium text-primary-foreground/80">Max Grant Amount</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Welcome</span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Your Path to Homeownership Starts Here
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Buying a home can be a daunting process, especially for first-time buyers. That&apos;s why we&apos;re here to help! The Colorado Home Grant is a home buying assistance program designed to help Colorado residents achieve their dream of homeownership.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Our program is available to both first-time homebuyers and repeat homebuyers throughout Colorado. With a simple, fast application process, we make it easy to get the support you need.
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="#program">Learn More About the Grant</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
