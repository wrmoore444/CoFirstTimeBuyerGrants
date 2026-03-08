'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FormSection, FormField, inputClass, textareaClass } from '@/components/sections/form-section'
import type { Dictionary } from '@/lib/translations'

interface Props {
  form: Dictionary['contact']['form']
}

export function ContactForm({ form }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      setSubmitted(true)
    } catch {
      // silent fail for now
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <FormSection>
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">{form.thankYouHeading}</h3>
          <p className="text-muted-foreground mb-6">{form.thankYouMessage}</p>
          <Button variant="outline" onClick={() => setSubmitted(false)}>{form.sendAnother}</Button>
        </div>
      </FormSection>
    )
  }

  return (
    <FormSection title={form.title} subtitle={form.subtitle}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label={form.firstName} required>
            <input name="firstName" type="text" placeholder={form.firstNamePlaceholder} className={inputClass} required />
          </FormField>
          <FormField label={form.lastName} required>
            <input name="lastName" type="text" placeholder={form.lastNamePlaceholder} className={inputClass} required />
          </FormField>
        </div>
        <FormField label={form.email} required>
          <input name="email" type="email" placeholder={form.emailPlaceholder} className={inputClass} required />
        </FormField>
        <FormField label={form.phone}>
          <input name="phone" type="tel" placeholder={form.phonePlaceholder} className={inputClass} />
        </FormField>
        <FormField label={form.message}>
          <textarea name="message" rows={4} placeholder={form.messagePlaceholder} className={textareaClass} />
        </FormField>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? '...' : form.submit}
        </Button>
      </form>
    </FormSection>
  )
}
