"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Get In Touch</span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Contact Us Today
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Ready to take the first step toward homeownership? Schedule your personalized consultation now and find out if you qualify for the Colorado Home Grant.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:720-735-2832" className="text-sm text-muted-foreground hover:text-primary">720-735-2832</a>
                  <span className="mx-2 text-muted-foreground/40">|</span>
                  <a href="tel:720-735-2890" className="text-sm text-muted-foreground hover:text-primary">720-735-2890</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:info@cohomegrant.com" className="text-sm text-muted-foreground hover:text-primary">info@cohomegrant.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Serving</p>
                  <p className="text-sm text-muted-foreground">Multiple counties across Colorado</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="mt-3 max-w-sm text-muted-foreground leading-relaxed">
                  We&apos;ve received your request. A member of our team will reach out to you shortly.
                </p>
                <Button className="mt-6" onClick={() => setSubmitted(false)}>
                  Send Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-xl font-bold text-foreground">Request More Information</h3>
                <p className="text-sm text-muted-foreground">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(720) 555-0100" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your home buying goals..." rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Submit Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
