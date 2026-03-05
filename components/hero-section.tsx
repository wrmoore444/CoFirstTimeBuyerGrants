import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Beautiful Colorado neighborhood with mountain views"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative mx-auto flex min-h-[580px] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-block rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground backdrop-blur-sm">
          Home Buying Assistance Program
        </span>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
          Curious if You Qualify for the Colorado Grant?
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Receive up to $29,048 in home buying assistance &mdash; and you never have to pay it back. Let us help you achieve the dream of homeownership in Colorado.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" asChild className="text-base px-8">
            <Link href="#contact">
              Find Out Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base px-8">
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
