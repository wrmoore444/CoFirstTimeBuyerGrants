import Image from "next/image"
import Link from "next/link"
import { Home, Users, FileCheck, DollarSign } from "lucide-react"

const features = [
  {
    icon: Home,
    title: "CO Home Grant",
    description: "Up to $29,048 in assistance for your home purchase.",
    href: "#program",
  },
  {
    icon: Users,
    title: "About Us",
    description: "Learn more about our mission and our team.",
    href: "#about",
  },
  {
    icon: FileCheck,
    title: "How It Works",
    description: "Simple, fast, and secure application process.",
    href: "#program",
  },
  {
    icon: DollarSign,
    title: "Request Info",
    description: "Schedule your personalized consultation today.",
    href: "#contact",
  },
]

export function FeaturesSection() {
  return (
    <section id="program" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
            Colorado Home Grant
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
            Helping Colorado residents access the support they need to make homeownership a reality.
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

          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group flex items-start gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
