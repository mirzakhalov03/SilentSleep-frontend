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

Six routes defined in `App.tsx`:

| Path | Page |
|---|---|
| `/` | `Home` — landing page composing Hero, LocationContact, ApneaInfo, Blog, SleepTest |
| `/treatment` | `Treatment` — placeholder (renders `t.placeholders.treatment`) |
| `/about` | `About` — composes `AboutMission` + `DoctorsTeam` |
| `/sleeptrack` | `SleepTrack` — hero + tabbed layout |
| `/blog` | `Blog` — post listing with grid/list view toggle |
| `/blog/:slug` | `BlogPostPage` — full article, looked up by `slug` from `mockBlogPosts` |

`Navbar` and `Footer` are rendered outside `<Routes>` and appear on every page.

### Component layers

```
src/components/
  layout/     — Navbar, Footer (app shell)
  sections/   — full-width page sections (Hero, ApneaInfo, Blog, SleepTest,
                LocationContact, AboutMission, DoctorsTeam)
    sleeptrack/  — SleepTrackHero, SleepTrackLayout + tabs/ (Doctors,
                   Equipments, Services, Benefits)
  ui/         — primitives: Button, BlogCard, QuestionCard, Logo
src/data/     — mock content (mockBlogPosts.ts) backing the blog routes
```

Pages (`src/pages/`) are thin composers that assemble section components.

**SleepTrack tabs** use a registry pattern in `SleepTrackLayout.tsx`: `SleepTrackTab`
union → `TAB_COMPONENTS` record. Adding a tab = add the key to the union, the record,
and a `t.sleeptrack.tabs.*` label — no conditional rendering.

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

`Navbar` uses `scrollToSection(id)` to smooth-scroll to section IDs on the home page. Sections that are scroll targets must have a matching `id` attribute. Navbar links target `id="apnea"` and `id="test"` (an `id="contact"` section also exists but is not linked from the Navbar).

### Types

Shared types live in `src/types/index.ts`: `Lang`, `BlogPost`, `RichBlogPost` (extends `BlogPost` with `author`/`readTime`/`content[]` for full articles), `TestQuestion`, `TestOption`, `RiskLevel`.
