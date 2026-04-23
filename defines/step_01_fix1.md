# DEFINE: Step 1 — Fix: Add buildAlternates helper and wire hreflang into all generateMetadata exports (attempt 1)

## 1. Change Request
Fix: Add buildAlternates helper and wire hreflang into all generateMetadata exports (attempt 1)

## 2. Objective
Fix block reasons:
- Files detected but not claimed: ['PIPELINE_BLOCKED.md', 'articles.json', 'ce-reviews/2026-03-08_commit_ff9a01f.json', 'ce-reviews/2026-04-18_commit_ae189b0.json', 'ce-reviews/2026-04-18_commit_bc803d2.json', 'defines/step_01.md', 'images/Marc2_cx840.png', 'images/Marc2_cx896.png', 'images/Marc2_cx950.png', 'images/MarcClaymation.png', 'images/MarcClaymation2.png', 'images/MarcClaymation_cx1300.png', 'images/MarcClaymation_cx1400.png', 'images/MarcClaymation_cx1500.png', 'images/MarcClaymation_portrait.png', 'images/backgroundMusic/Breeze de Palma.mp3', 'images/marcSquare.png', 'images/marc_test_audio.mp3', 'images/marc_test_short.mp4', 'images/marc_test_v2.mp4', 'images/marc_test_v3.mp4', 'images/marc_test_v4.mp4', 'images/me 21-2.JPG', 'images/me new.jpg', 'images/watermark.png', 'next-env.d.ts', 'pipeline_state.json', 'site-canon.md', 'tsconfig.tsbuildinfo']

Original:
Add a `buildAlternates(lang, path)` function to `lib/i18n.ts` that returns a Next.js `alternates` metadata object with canonical, and language alternates for `en`, `es`, and `x-default`. Then add the `alternates` property to the `generateMetadata` export in each of the five pages that currently have one: the homepage, the FAQ page, the Learn index, the article detail page, and the county detail page.

Rough acceptance criteria:
- `buildAlternates` is exported from `lib/i18n.ts` and returns `{ canonical, languages: { en, es, 'x-default' } }`
- All URLs constructed by `buildAlternates` use the absolute base `https://cofirsttimebuyergrants.com`
- `x-default` always points to the English URL
- `app/[lang]/page.tsx` generateMetadata includes `alternates` using path `''`
- `app/[lang]/faq/page.tsx` generateMetadata includes `alternates` using path `/faq`
- `app/[lang]/learn/page.tsx` generateMetadata includes `alternates` using path `/learn`
- `app/[lang]/learn/[slug]/page.tsx` generateMetadata includes `alternates` using the resolved slug value
- `app/[lang]/counties/[county]/page.tsx` generateMetadata includes `alternates` using the resolved county slug value
- No existing title, description, or JSON-LD values are changed
- No files outside the claimed list are modified

Estimated files: lib/i18n.ts, app/[lang]/page.tsx, app/[lang]/faq/page.tsx, app/[lang]/learn/page.tsx, app/[lang]/learn/[slug]/page.tsx, app/[lang]/counties/[county]/page.tsx

## 3. Background
Part of automated pipeline for CoFirstTimeBuyerGrants — Hreflang Alternates.

## 4. Implementation Instructions
Implement as described in the outline above.

## 5. Acceptance Criteria
- `buildAlternates` is exported from `lib/i18n.ts` and returns `{ canonical, languages: { en, es, 'x-default' } }`

## 6. Expected File Scope
lib/i18n.ts, app/[lang]/page.tsx, app/[lang]/faq/page.tsx, app/[lang]/learn/page.tsx, app/[lang]/learn/[slug]/page.tsx, app/[lang]/counties/[county]/page.tsx

## 7. Constraints
Follow all engineering rules in ENGINEERING_RULES.md.

## 8. Non-Goals
Do not extend scope beyond what is specified above.
