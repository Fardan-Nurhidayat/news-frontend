# AGENTS.md

Notes for OpenCode sessions working in this repo. Next.js 16 + React 19 + Tailwind v4 + TanStack Query 5 news frontend (Indonesian: "berita" = news).

## Commands

- Package manager is **pnpm**. A stray `package-lock.json` exists locally but is untracked — do not use npm or commit it; use `pnpm-lock.yaml`.
- `pnpm dev` — dev server
- `pnpm build` — production build; this is the only typecheck path (no `typecheck` script)
- `pnpm start` — serve production build
- `pnpm lint` — runs bare `eslint` (flat config in `eslint.config.mjs`). Next 16 dropped `next lint`; do not run `next lint`.
- No test suite is configured. Do not invent test commands.
- Verify changes with: `pnpm lint` then `pnpm build` (build runs TS typecheck).

## Stack / config quirks

- Tailwind v4, CSS-first: there is **no `tailwind.config.js`**. Config lives in `src/app/globals.css` via `@import "tailwindcss"` and `@custom-variant dark`. PostCSS plugin is `@tailwindcss/postcss` (`postcss.config.mjs`).
- Dark mode is **class-based, not `prefers-color-scheme`**: the `.dark` class is toggled on `<html>` by `src/context/ThemeContext.tsx` (accessed via `src/hooks/useTheme.tsx`). The dark variant only works because of the `@custom-variant dark (&:where(.dark, .dark *))` line in `globals.css` — keep it.
- TanStack Query: a single shared `QueryClient` instance lives in `src/utils/queryClient.ts` (5-min staleTime) and is provided by `src/providers/tanstack-provider.tsx` in the root layout. Reuse it; don't create new clients per component.
- TypeScript `strict`. Path aliases in `tsconfig.json`: `@/*`, plus repo-specific `@components/*`, `@providers/*`, `@utils/*`, `@types/*`, `@data/*` (all map to `./src/<dir>/*`).

## Routing / structure

- App Router. Root layout `src/app/layout.tsx` wraps everything in `ThemeProvider` then `TanstackProvider` and renders `Navbar`.
- `src/app/(public)/page.tsx` is the home route and just re-exports `src/app/berita/page.tsx`. The `(public)` segment is a route group (no URL impact).
- `src/app/berita/components/` holds route-colocated components (`NewsCard.tsx`, `NewsList.tsx`); shared components live in `src/components/` and `src/components/layout/`.

## Gotchas

- **Empty placeholder files exist** and have no implementation: `src/components/Button.tsx`, `src/components/Higllight.tsx` (filename typo for "Highlight"), `src/app/berita/components/NewsList.tsx`. Don't assume they work; don't import them expecting behavior.
- `src/components/layout/Navbar.tsx` links to `/about` and `/contact` — those routes do **not** exist yet.
- `src/data/example.json` is the sample Google-News-style payload. Its `authors` field is `string[]`, but `NewsCardProps` in `src/types/data.ts` declares `authors: { name: string }[]`. The type and sample data disagree; reconcile before wiring them together.
- `next.config.ts` is empty (default). No env loading, redirects, or image domains are configured — `next/image` with remote URLs in `example.json` will fail without adding `images.remotePatterns`.

## Conventions

- Commit style is conventional-commit-ish with Indonesian verbs and a space before the colon: `feat : ...`, `refactor : ...`, `setup ...`.
