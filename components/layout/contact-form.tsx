'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FormSection, FormField, inputClass, selectClass, textareaClass } from '@/components/sections/form-section'
import type { Dictionary } from '@/lib/translations'

const CO_COUNTIES = [
  'Adams', 'Arapahoe', 'Boulder', 'Broomfield', 'Chaffee',
  'Clear Creek', 'Denver', 'Douglas', 'Eagle', 'El Paso',
  'Elbert', 'Fremont', 'Garfield', 'Gilpin', 'Grand',
  'Jefferson', 'Lake', 'Larimer', 'Mesa', 'Moffat',
  'Montrose', 'Morgan', 'Park', 'Pitkin', 'Pueblo',
  'Rio Blanco', 'Routt', 'Saguache', 'Summit', 'Teller',
  'Weld', 'Other',
]

interface Props {
  form: Dictionary['contact']['form']
  showMessage?: boolean
  defaultCounty?: string
}

export function ContactForm({ form, showMessage = true, defaultCounty }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError(true)
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
          <Button variant="outline" onClick={() => setSubmitted(false)}>
            {form.sendAnother}
          </Button>
        </div>
      </FormSection>
    )
  }

  return (
    <FormSection title={form.title} subtitle={form.subtitle}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label={form.firstName} required>
            <input
              name="firstName"
              type="text"
              placeholder={form.firstNamePlaceholder}
              className={inputClass}
              required
            />
          </FormField>
          <FormField label={form.lastName} required>
            <input
              name="lastName"
              type="text"
              placeholder={form.lastNamePlaceholder}
              className={inputClass}
              required
            />
          </FormField>
        </div>
        <FormField label={form.email} required>
          <input
            name="email"
            type="email"
            placeholder={form.emailPlaceholder}
            className={inputClass}
            required
          />
        </FormField>
        <FormField label={form.phone}>
          <input
            name="phone"
            type="tel"
            placeholder={form.phonePlaceholder}
            className={inputClass}
          />
        </FormField>
        <FormField label={form.county}>
          <select name="county" className={selectClass} defaultValue={defaultCounty ?? ''} required>
            <option value="" disabled>{form.countyPlaceholder}</option>
            {CO_COUNTIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </FormField>
        {showMessage && (
          <FormField label={form.message}>
            <textarea
              name="message"
              rows={4}
              placeholder={form.messagePlaceholder}
              className={textareaClass}
            />
          </FormField>
        )}
        {error && (
          <p className="text-sm text-destructive text-center">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? '...' : form.submit}
        </Button>
      </form>
    </FormSection>
  )
}
