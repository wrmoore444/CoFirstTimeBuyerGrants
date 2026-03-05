import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Ryan made everything quick and easy. He answered questions we had and was available when we needed it as well. Highly recommend!",
    author: "Rebecca G.H.",
    location: "Aurora",
    heading: "Highly recommend!",
  },
  {
    quote: "Professional, available, and informative with any questions we had throughout the process.",
    author: "Isaac C.",
    location: "Aurora",
    heading: "Professional and available.",
  },
  {
    quote: "Ryan was very sweet, and I really felt like I could trust him. I would recommend him to anyone looking to buy a home!",
    author: "Alyssa D.",
    location: "Lakewood",
    heading: "Ryan was very sweet.",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            See What Our Happy Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            We take pride in helping families across Colorado achieve their dream of homeownership.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
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
