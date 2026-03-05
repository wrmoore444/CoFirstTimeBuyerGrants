"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function WhyChooseUsSection() {
  const { t } = useLanguage()
  const w = t.whyChooseUs

  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">{w.eyebrow}</span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">
              {w.title}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-primary-foreground/80">
              {w.body}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {w.benefits.map((benefit) => (
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
              <Link href="#contact">{w.cta}</Link>
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
