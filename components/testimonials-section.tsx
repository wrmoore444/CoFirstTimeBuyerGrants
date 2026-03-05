"use client"

import { Quote } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const s = t.testimonials

  return (
    <section id="testimonials" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">{s.eyebrow}</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {s.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {s.items.map((testimonial) => (
            <article
              key={testimonial.author}
              className="flex flex-col rounded-xl border border-border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {testimonial.heading}
              </h3>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
