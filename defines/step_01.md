# DEFINE — Hreflang Alternates for CoFirstTimeBuyerGrants

**Target Repository:** `C:\BillStuff2\AIJoe\pivot`

---

## 1. Change Objective

Every page in the CoFirstTimeBuyerGrants Next.js site that has a `generateMetadata` export will render correct `<link rel="alternate" hreflang>` and `<link rel="canonical">` tags in its HTML `<head>`, enabling Google to identify English and Spanish URL pairs as language alternates rather than duplicate content.

---

## 2. Acceptance Criteria

1. A `buildAlternates(lang, path)` function is exported from `lib/i18n.ts` and returns an object with a `canonical` string and a `languages` object containing keys `'en'`, `'es'`, and `'x-default'`.
2. All URLs returned by `buildAlternates` use the absolute base `https://cofirsttimebuyergrants.com`.
3. The `'x-default'` language value always resolves to the English URL (`https://cofirsttimebuyergrants.com/en${path}`).
4. The homepage (`app/[lang]/page.tsx`) `generateMetadata` includes an `alternates` property produced by calling `buildAlternates(lang, '')`.
5. The FAQ page (`app/[lang]/faq/page.tsx`) `generateMetadata` includes an `alternates` property produced by calling `buildAlternates(lang, '/faq')`.
6. The Learn index page (`app/[lang]/learn/page.tsx`) `generateMetadata` includes an `alternates` property produced by calling `buildAlternates(lang, '/learn')`.
7. The article detail page (`app/[lang]/learn/[slug]/page.tsx`) `generateMetadata` includes an `alternates` property produced by calling `buildAlternates(lang, '/learn/' + resolvedSlug)` where `resolvedSlug` is the value from `params`.
8. The county detail page (`app/[lang]/counties/[county]/page.tsx`) `generateMetadata` includes an `alternates` property produced by calling `buildAlternates(lang, '/counties/' + resolvedCounty)` where `resolvedCounty` is the value from `params`.
9. No existing `title`, `description`, `openGraph`, `twitter`, or JSON-LD values on any page are modified.
10. No files outside the Expected File Scope are modified.

---

## 3. Constraints

- Do not modify any file that is not listed in the Expected File Scope.
- Do not change any routing, redirect, or middleware behavior.
- Do not modify any component, layout, or translation file.
- Do not add, remove, or rename any exported functions in `lib/i18n.ts` other than the new `buildAlternates` function.
- The `x-default` URL must always resolve to the English version of the page.
- All canonical and alternate URLs must use the absolute base `https://cofirsttimebuyergrants.com`.

---

## 4. Expected File Scope

- `lib/i18n.ts`
- `app/[lang]/page.tsx`
- `app/[lang]/faq/page.tsx`
- `app/[lang]/learn/page.tsx`
- `app/[lang]/learn/[slug]/page.tsx`
- `app/[lang]/counties/[county]/page.tsx`

---

## 5. Non-Goals

- Adding hreflang to pages that do not currently have `generateMetadata` (how-it-works, who-qualifies, about, contact, privacy-policy, terms-conditions).
- Adding FAQPage schema to the FAQ page.
- Adding LocalBusiness, Article, or BreadcrumbList schema to any page.
- Modifying sitemap generation.
- Any content or copy changes.
- Any visual or layout changes.

---

## 6. Invariants

- All existing page titles, descriptions, and Open Graph metadata remain unchanged.
- All existing JSON-LD schema blocks on any page remain unchanged.
- The middleware redirect behavior from non-lang URLs to `/en` is unchanged.
- The `generateStaticParams` output on each page is unchanged.
- All existing exports from `lib/i18n.ts` remain unchanged and behaviorally identical.

---

## 7. Implementation Notes

- The `alternates` property must be added to the return value of `generateMetadata` in each file — not to a shared layout.
- For dynamic routes (`[slug]`, `[county]`), the path segment passed to `buildAlternates` must use the resolved param value from `await params`, not the bracket placeholder literal.
- The homepage path argument to `buildAlternates` should be an empty string `''` so the canonical resolves to `https://cofirsttimebuyergrants.com/en` without a trailing slash.

---

## 8. Definition Approval

> This DEFINE artifact fully captures the intended change.
> Implementation must be evaluated strictly against this document.

Approved by: **Bill**
