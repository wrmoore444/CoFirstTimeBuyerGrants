# Pivot Site — Status

## Current State

Demo-ready scaffold. EN/ES language toggle is functional. All page sections are built.
Content is placeholder (based on cohomegrant.com structure) — needs client replacement.

## Completed

- [x] Next.js 16 + React 19 + Tailwind v4 + shadcn/ui scaffold
- [x] All page sections: Hero, Welcome, Features, WhyChooseUs, Testimonials, Contact, Header, Footer
- [x] EN/ES language toggle — React context, all strings in `lib/translations.ts`
- [x] Git initialized, initial commits in place
- [x] Dev server running (`pnpm dev` → http://localhost:3000)

## Waiting on Client

- [ ] Public-facing brand/site name (NOT "Pivot Lending Group")
- [ ] Domain name
- [ ] Logo + brand colors
- [ ] Phone number(s)
- [ ] Email address
- [ ] Grant program details (amount, eligibility, counties served)
- [ ] About/welcome copy
- [ ] Testimonials
- [ ] Hero image (or approval to use existing Colorado imagery)
- [ ] Spanish copy review by native speaker

## Next Technical Tasks (after client content arrives)

- [ ] Replace all placeholder content in `lib/translations.ts`
- [ ] Update branding in header/footer (logo, colors, site name)
- [ ] Wire contact form to lead storage (email, Airtable, or database TBD)
- [ ] Blog infrastructure — bilingual (EN + ES), CMS TBD
- [ ] GitHub repo creation
- [ ] Vercel deployment + domain connection
- [ ] NMLS disclosure / legal footer (required for mortgage lead gen)

## Notes

- Blog: client wants bilingual blog posts (EN + ES). CMS approach TBD pending client discussion.
- Lead routing: client wants flexibility to route leads to multiple lenders in future — do not hardwire to Pivot.
