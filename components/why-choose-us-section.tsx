"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function WhyChooseUsSection() {
  const { t } = useLanguage()
  const w = t.whyChooseUs

  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{w.eyebrow}</span>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-background/10 bg-background/10">
          {w.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center bg-foreground px-6 py-8 text-center">
              <span className="font-serif text-4xl font-bold text-primary sm:text-5xl">{stat.value}</span>
              <span className="mt-2 text-sm font-medium text-background/60">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Benefits grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {w.benefits.map((benefit) => (
            <div key={benefit} className="flex items-start gap-3 rounded-lg bg-background/5 px-5 py-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-background/80">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="text-base">
            <Link href="#contact">{w.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
