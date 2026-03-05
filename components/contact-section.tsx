"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const { t } = useLanguage()
  const c = t.contact

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{c.eyebrow}</span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {c.title}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {c.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{c.phoneLabel}</p>
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
                  <p className="font-semibold text-foreground">{c.emailLabel}</p>
                  <a href="mailto:info@cohomegrant.com" className="text-sm text-muted-foreground hover:text-primary">info@cohomegrant.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{c.servingLabel}</p>
                  <p className="text-sm text-muted-foreground">{c.servingText}</p>
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
                <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">{c.thankYouHeading}</h3>
                <p className="mt-3 max-w-sm text-muted-foreground leading-relaxed">
                  {c.thankYouMessage}
                </p>
                <Button className="mt-6" onClick={() => setSubmitted(false)}>
                  {c.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-serif text-xl font-bold text-foreground">{c.formTitle}</h3>
                <p className="text-sm text-muted-foreground">{c.formSubtitle}</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">{c.firstName}</Label>
                    <Input id="firstName" placeholder={c.firstNamePlaceholder} required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName">{c.lastName}</Label>
                    <Input id="lastName" placeholder={c.lastNamePlaceholder} required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">{c.email}</Label>
                  <Input id="email" type="email" placeholder={c.emailPlaceholder} required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">{c.phone}</Label>
                  <Input id="phone" type="tel" placeholder={c.phonePlaceholder} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">{c.message}</Label>
                  <Textarea id="message" placeholder={c.messagePlaceholder} rows={4} />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {c.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
