"use client"

import Image from "next/image"
import Link from "next/link"
import { Home, Users, FileCheck, DollarSign } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const icons = [Home, Users, FileCheck, DollarSign]
const hrefs = ["#program", "#about", "#program", "#contact"]

export function FeaturesSection() {
  const { t } = useLanguage()
  const f = t.features

  return (
    <section id="program" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{f.eyebrow}</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {f.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {f.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-xl shadow-lg sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <Image
              src="/images/colorado-homes.jpg"
              alt="Beautiful Colorado home with mountain views"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          {f.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <Link
                key={item.title}
                href={hrefs[i]}
                className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
