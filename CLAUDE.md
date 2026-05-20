# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite HMR)
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # serve the dist/ build locally
```

## Stack

- **React 19** + **TypeScript** + **Vite 8**
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin; **no `tailwind.config.js`**
- **React Router v7** (BrowserRouter, client-side only)
- No state management library; no test suite

## Architecture

### Entry & Providers

`main.tsx` wraps the app in `<BrowserRouter>` → `<LanguageProvider>` → `<App>`. All providers are here.

### Routing

Four routes defined in `App.tsx`:

| Path | Page |
|---|---|
| `/` | `Home` — full landing page with section components |
| `/treatment` | `Treatment` |
| `/about` | `About` |
| `/sleeptrack` | `SleepTrack` |

`Navbar` and `Footer` are rendered outside `<Routes>` and appear on every page.

### Component layers

```
src/components/
  layout/     — Navbar, Footer (app shell)
  sections/   — full-width page sections used by pages (Hero, ApneaInfo, Blog, SleepTest, LocationContact)
  ui/         — primitives: Button, BlogCard, QuestionCard
```

Pages (`src/pages/`) are thin composers that assemble section components.

### i18n

Custom, no external library:

- `src/contexts/LanguageContext.tsx` — holds `lang: 'uz' | 'ru'` state and `setLang`
- `src/hooks/useTranslation.ts` — returns the active locale object via `useLanguage()`
- `src/locales/uz.ts` — source of truth; exports `Translations` type
- `src/locales/ru.ts` — must satisfy `Translations`; TypeScript will catch gaps

In any component: `const t = useTranslation()` then `t.nav.apnea`, `t.hero.headline`, etc.

### Design tokens (Tailwind v4)

All color tokens are declared in the `@theme {}` block in `src/index.css`. Use them as Tailwind utilities:

| Token | Class |
|---|---|
| `--color-brand-primary` | `text-brand-primary`, `bg-brand-primary`, etc. |
| `--color-brand-secondary` | `bg-brand-secondary` |
| `--color-brand-dark` | `text-brand-dark` |
| `--color-brand-light` | `bg-brand-light` |
| `--color-content-base` | `text-content-base` |
| `--color-content-muted` | `text-content-muted` |

Do not add new colors outside `@theme {}`.

### Scroll navigation

`Navbar` uses `scrollToSection(id)` to smooth-scroll to section IDs on the home page. Sections that are scroll targets must have a matching `id` attribute. Current targets: `id="apnea"`, `id="test"`.

### Types

Shared types (`Lang`, `BlogPost`, `TestQuestion`, `TestOption`, `RiskLevel`) live in `src/types/index.ts`.
