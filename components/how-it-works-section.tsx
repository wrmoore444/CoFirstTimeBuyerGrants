"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function HowItWorksSection() {
  const { t } = useLanguage()
  const h = t.howItWorks

  return (
    <section id="program" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{h.eyebrow}</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {h.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {h.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-0">
          {h.steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center px-6">
              {/* Connector line between steps */}
              {i < h.steps.length - 1 && (
                <div className="absolute top-8 left-1/2 hidden h-0.5 w-full bg-border md:block" aria-hidden />
              )}
              {/* Number circle */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-4 ring-background">
                <span className="font-serif text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="text-base px-10">
            <Link href="#contact">{h.cta}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
