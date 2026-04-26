# DEFINE: Step 1 — Add Buzzsprout Embedded Audio Player to Learn Article Pages

## 1. Change Request

When a Learn article in the GCS feed includes a non-empty `buzzsproutEmbedUrl` field, the Learn article detail page renders an embedded Buzzsprout audio player, and when that field is absent or empty the page renders with no player present.

## 2. Objective

The `Article` type in `lib/learn.ts` must support an optional `buzzsproutEmbedUrl` field. The Learn article detail page at `app/[lang]/learn/[slug]/page.tsx` must conditionally render a new `BuzzsproutPlayer` component when the field is non-empty. The player heading must display "Listen to the Episode" for English and "Escucha el Episodio" for Spanish. Existing tests in `tests/learn.test.ts` must be extended to cover the new field.

## 3. Background

CoFirstTimeBuyerGrants is a Next.js App Router site deployed on Netlify. Article content is fetched at runtime from a GCS bucket as `articles.json`. The site is bilingual with route-based i18n using `lang` path segment. The `Article` interface is defined in `lib/learn.ts`. Learn article pages are rendered at `app/[lang]/learn/[slug]/page.tsx`. Tests run via `pnpm run test` using Vitest.

## 4. Implementation Instructions

No specific implementation approach is prescribed. Implement to satisfy all Acceptance Criteria using existing project conventions.

## 5. Acceptance Criteria

1. The file `lib/learn.ts` contains the declaration `buzzsproutEmbedUrl?: string` within the `Article` interface.
2. The file `components/sections/buzzsprout-player.tsx` exists in the repository.
3. When the article data contains a non-empty `buzzsproutEmbedUrl`, the rendered page HTML contains an `<iframe>` element whose `src` attribute equals that value exactly.
4. When the article data does not contain `buzzsproutEmbedUrl` or it is an empty string, the rendered page HTML contains no `<iframe>` element.
5. When the page is rendered with `lang` equal to `en`, the page HTML contains the text "Listen to the Episode" in the player section.
6. When the page is rendered with `lang` equal to `es`, the page HTML contains the text "Escucha el Episodio" in the player section.
7. The `<iframe>` element has `width` equal to `100%`, `height` equal to `200`, `frameBorder` equal to `0`, and `scrolling` equal to `no`.
8. The file `tests/learn.test.ts` contains at least one test case that asserts `buzzsproutEmbedUrl` is accessible on an article object returned by `getArticle` or `getArticles` when the mock data includes that field.
9. Running `pnpm run test` exits with code 0, with all tests passing including the new test added in criterion 8.

## 6. Expected File Scope

- `lib/learn.ts`
- `app/[lang]/learn/[slug]/page.tsx`
- `components/sections/buzzsprout-player.tsx`
- `tests/learn.test.ts`

## 7. Constraints

- Do not modify `lib/translations/en.ts` or `lib/translations/es.ts`.
- Do not add any npm packages.
- Do not modify any file outside the Expected File Scope.

## 8. Non-Goals

- Adding audio or media badges to the Learn index page at `app/[lang]/learn/page.tsx`.
- Publishing audio to Buzzsprout or modifying `articles.json` in GCS.
- Adding any embed type other than Buzzsprout.
- Modifying any page other than the Learn article detail page at `app/[lang]/learn/[slug]/page.tsx`.
