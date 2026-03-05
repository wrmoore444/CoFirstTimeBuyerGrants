import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Available to first-time and repeat homebuyers",
  "Receive up to $29,048 in grant assistance",
  "No repayment required",
  "Fast, easy, and secure application process",
  "Personalized consultation available",
  "Serving multiple Colorado counties",
]

export function WhyChooseUsSection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">Why Choose Us</span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
              A Grant Designed for You
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-primary-foreground/80">
              The Colorado Home Grant is designed to be a home mortgage grant for both first-time homebuyers and repeat homebuyers. Our fast, easy, and secure process allows applicants to receive up to $29,048 without worrying about paying it back.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground" />
                  <span className="text-sm leading-relaxed text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-10 text-base"
            >
              <Link href="#contact">Schedule Your Consultation</Link>
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/images/consultation.jpg"
              alt="Professional consultation for home buying assistance"
              width={600}
              height={450}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
