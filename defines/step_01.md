# DEFINE: Step 1 — Fix: Add Buzzsprout embedded audio player to Learn article pages (attempt 1)

## 1. Change Request
Fix: Add Buzzsprout embedded audio player to Learn article pages (attempt 1)

## 2. Objective
Fix block reasons:
- Files detected but not claimed: ['PIPELINE_BLOCKED.md', 'defines/step_01.md', 'pipeline_state.json']

Original:
Add an optional `buzzsproutEmbedUrl` field to the Article interface and render an embedded Buzzsprout audio player on Learn article pages when the field is present.

The change must:
- Add `buzzsproutEmbedUrl?: string` to the `Article` interface in `lib/learn.ts`
- Create a new server component `components/sections/buzzsprout-player.tsx` that renders a Buzzsprout iframe. The iframe uses the `buzzsproutEmbedUrl` as `src`, width 100%, height 200px, no border, no scrolling
- The component accepts `url: string` and `lang: string` props
- The component renders a heading: "Listen to the Episode" when `lang === 'en'`, "Escucha el Episodio" when `lang === 'es'`
- The component is wrapped in a `ContentSection` with `background="light"`
- In `app/[lang]/learn/[slug]/page.tsx`, render `BuzzsproutPlayer` between the hero section and the first content section only when `article.buzzsproutEmbedUrl` is present and non-empty
- Articles without `buzzsproutEmbedUrl` render identically to before — no layout change
- Do NOT modify any translation dictionary files
- Update `tests/learn.test.ts` to add a test verifying that `buzzsproutEmbedUrl` is present and passed through when included in mock article data

Rough acceptance criteria:
- `Article` interface in `lib/learn.ts` has `buzzsproutEmbedUrl?: string`
- `BuzzsproutPlayer` component exists at `components/sections/buzzsprout-player.tsx`
- Article page renders the player between hero and first content section when `buzzsproutEmbedUrl` is set
- Article page renders no player when `buzzsproutEmbedUrl` is absent
- Player shows correct heading for `en` and `es` lang
- iframe `src` equals the `buzzsproutEmbedUrl` value verbatim
- `pnpm run test` passes including the new test in `tests/learn.test.ts`
- No translation dictionary files are modified

Estimated files: lib/learn.ts, app/[lang]/learn/[slug]/page.tsx, components/sections/buzzsprout-player.tsx (new), tests/learn.test.ts

## 3. Background
Part of automated pipeline for CoFirstTimeBuyerGrants.

## 4. Implementation Instructions
Implement as described in the outline above.

## 5. Acceptance Criteria
- `Article` interface in `lib/learn.ts` has `buzzsproutEmbedUrl?: string`

## 6. Expected File Scope
lib/learn.ts, app/[lang]/learn/[slug]/page.tsx, components/sections/buzzsprout-player.tsx (new), tests/learn.test.ts

## 7. Constraints
Follow all engineering rules in ENGINEERING_RULES.md.

## 8. Non-Goals
Do not extend scope beyond what is specified above.
