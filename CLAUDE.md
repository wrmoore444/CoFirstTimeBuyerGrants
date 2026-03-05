# Pivot — Claude Code Project Instructions

## What This Is

Lead generation website for a Colorado mortgage broker client (Pivot Lending Group).
The public-facing brand name is TBD — the site will NOT be branded as "Pivot Lending Group."

Competitor reference: https://www.cohomegrant.com/

## How to Run

```bash
cd "C:\BillStuff2\AIJoe\pivot"
pnpm dev
```

Opens at http://localhost:3000

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind v4 + shadcn/ui (Radix-based)
- pnpm (not npm or yarn)

## Key Architecture Decisions

### Language Toggle (EN/ES)
- All copy lives in `lib/translations.ts` — one object for `en`, one for `es`
- `context/language-context.tsx` provides `useLanguage()` hook: `{ lang, t, toggleLang }`
- Every content component is `"use client"` and calls `useLanguage()`
- Toggle button is in `site-header.tsx` — shows "ES" when in English, "EN" when in Spanish
- **To update content**: edit `lib/translations.ts` only — both languages update everywhere

### Page Structure
Single-page layout assembled in `app/page.tsx`:
`SiteHeader` → `HeroSection` → `WelcomeSection` → `FeaturesSection` → `WhyChooseUsSection` → `TestimonialsSection` → `ContactSection` → `SiteFooter`

### Contact Form
Currently submits locally (no backend). Needs to be wired to a lead storage solution before launch.

## What's Pending from Client

See STATUS.md for full list.

## Deployment

Target: Vercel (`@vercel/analytics` already installed).
Domain: TBD — client has not purchased yet.
