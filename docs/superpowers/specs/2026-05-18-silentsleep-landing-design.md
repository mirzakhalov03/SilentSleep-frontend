# SilentSleep Landing Page — Design Spec

**Date:** 2026-05-18  
**Project:** SilentSleep — medical SPA for sleep apnea and snoring treatment  
**Stack:** React + TypeScript + Vite + Tailwind CSS + React Router v6

---

## 1. Overview

A single-page application marketing site for SilentSleep, a Tashkent-based clinic treating sleep apnea and snoring. The site is bilingual (Uzbek default, Russian toggle). Design direction: clinical and trustworthy — white/blue palette, clean typography, no clutter.

---

## 2. Tech Stack & Architecture

| Concern | Solution |
|---|---|
| Framework | React 18 + TypeScript (Vite) |
| Styling | Tailwind CSS with centralized color tokens in `tailwind.config.ts` |
| Routing | React Router v6 |
| i18n | Custom `LanguageContext` + `useTranslation()` hook, locale files `uz.ts` / `ru.ts` |
| State | Local component state only (no external store needed) |
| Data | Mocked blog posts and sleep test questions; blog API integration deferred |

### Color System (centralized in `tailwind.config.ts`)

All colors are defined as custom tokens — no hardcoded hex values in components.

| Token | Role |
|---|---|
| `brand-primary` | Main blue — buttons, links, accents |
| `brand-secondary` | Lighter blue — hover states, backgrounds |
| `brand-dark` | Dark navy — navbar, footer, headings |
| `brand-light` | Very light blue/gray — section backgrounds |
| `text-base` | Default body text |
| `text-muted` | Secondary/caption text |

---

## 3. Routes

| Path | Page | Notes |
|---|---|---|
| `/` | Home | All main sections live here |
| `/treatment` | Treatment | Placeholder for now |
| `/about` | About Us | Placeholder for now |
| `/sleeptrack` | SleepTrack | Placeholder for now |

---

## 4. File Structure

```
src/
  components/
    layout/
      Navbar.tsx          # Fixed top navbar
      Footer.tsx          # Dark footer
    sections/
      Hero.tsx            # Hero with image slot + CTAs
      LocationContact.tsx # Map + contact info
      ApneaInfo.tsx       # What is sleep apnea?
      Blog.tsx            # 3 mocked blog cards
      SleepTest.tsx       # Multi-step questionnaire
    ui/
      Button.tsx          # Reusable button variants
      BlogCard.tsx        # Single blog post card
      QuestionCard.tsx    # Single test question card
  pages/
    Home.tsx              # Composes all sections
    Treatment.tsx         # Placeholder
    About.tsx             # Placeholder
    SleepTrack.tsx        # Placeholder
  contexts/
    LanguageContext.tsx   # Lang state + provider
  hooks/
    useTranslation.ts     # Returns active locale object
  locales/
    uz.ts                 # All Uzbek strings
    ru.ts                 # All Russian strings
  types/
    index.ts              # Shared TS types
  App.tsx                 # Router setup
  main.tsx
  index.css               # Tailwind directives
```

---

## 5. Section Designs

### 5.1 Navbar

- Fixed to top, `z-50`, white background, subtle bottom shadow
- **Left:** SilentSleep logo/wordmark
- **Center:** Nav links
  - `Xurrak va Apnoe` → `/#apnea` (smooth scroll)
  - `Davolash` → `/treatment`
  - `Biz Haqimizda` → `/about`
  - `Uyqu testi` → `/#test` (smooth scroll)
- **Right:** Language toggle (`UZ | RU`) + `SleepTrack` CTA button (primary blue, pill shape)
- **Mobile:** Hamburger menu, all links stack vertically in a dropdown

### 5.2 Hero

- Full viewport height (`min-h-screen`)
- Two-column layout: left = text, right = image slot
- **Left:**
  - Headline: `Xurrak va uyqudagi nafas to'xtashi sizni bezovta qiladimi?`
  - 2-line subtext describing the clinic's mission
  - Two CTA buttons: primary (`Bog'lanish`) and secondary (`Ko'proq bilish`)
- **Right:** Image placeholder (`<img>` with `src` prop for easy swap later)
- Background: white with a subtle light-blue gradient or soft wave SVG divider at bottom

### 5.3 Location & Contact

- Two-column layout (left = info, right = map)
- **Left:**
  - Clinic name + icon
  - Address: Qashqar dahasi, 24A, 100017, Toshkent
  - Phone: 77 113 38 83
  - Working hours: full week grid (mocked — user to confirm)
- **Right:**
  - Google Maps `<iframe>` embed for the Tashkent address
  - Rounded corners, full height of section

### 5.4 Apnea Info (`id="apnea"`)

- Centered single-column layout
- Section title: `Apnoe nima?` / `Что такое апноэ?`
- 2–3 paragraphs of explanation (what it is, symptoms, why it's dangerous)
- 3-icon row below text: Snoring / Breathing pause / Daytime fatigue

### 5.5 Blog

- Section title + "View all" link
- Three `BlogCard` components in a responsive grid (3 cols desktop, 1 col mobile)
- **BlogCard props:** `title`, `excerpt`, `date`, `imageUrl`, `slug`
- Mocked data: 3 realistic Uzbek/Russian medical blog posts
- "Read more" link on each card (non-functional for now)

### 5.6 Sleep Test (`id="test"`)

- Section title + short instruction text
- One `QuestionCard` visible at a time (no scrolling through all)
- **Progress bar:** `2 / 5` style indicator at top
- **Each question:** question text + 4 radio-style option buttons
- **Next button** activates after an option is selected
- After question 5: result card appears
  - **Low risk:** Green — reassuring message + optional "Learn more" CTA
  - **Medium risk:** Yellow — recommendation to consult a doctor + contact CTA
  - **High risk:** Red — strong recommendation + contact CTA
- Scoring: each option carries 0–3 points; total determines risk tier

**Questions (mocked, user to revise):**

1. Siz qanchalik tez-tez xurrak qilasiz? *(How often do you snore?)*
2. Uyqu paytida nafasingiz to'xtab qolganini kuzatganmisiz? *(Have you noticed breathing pauses during sleep?)*
3. Kunduzgi vaqtda o'zingizni qanchalik charchagan his qilasiz? *(How tired do you feel during the day?)*
4. Ertalab bosh og'rig'i bilan uyg'onasizmi? *(Do you wake up with headaches?)*
5. Uyquingiz sifati qanday? *(How would you rate your sleep quality?)*

### 5.7 Footer

- Dark navy background (`brand-dark`)
- Three columns: Logo + tagline | Nav links | Contact info
- Language toggle bottom-left
- Copyright line bottom-center

---

## 6. i18n Design

```ts
// contexts/LanguageContext.tsx
type Lang = 'uz' | 'ru'
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>

// hooks/useTranslation.ts
export function useTranslation() {
  const { lang } = useContext(LanguageContext)
  return lang === 'uz' ? uz : ru
}
```

All translatable strings live in `uz.ts` and `ru.ts` as flat or nested objects keyed by section. No string literals in components.

---

## 7. Sleep Test Data Flow

```
SleepTest
  state: { step: 0–4, answers: number[], done: boolean }
  → renders QuestionCard(question, options, onAnswer)
  → on final answer: compute score → show ResultCard(level)
```

Score tiers:
- 0–5: Low risk
- 6–10: Medium risk
- 11–15: High risk

---

## 8. Out of Scope (deferred)

- Blog API integration (backend ready, to be wired later)
- Real images for Hero and blog cards (user to provide)
- Full content for Treatment and About pages
- SleepTrack app functionality
- SEO / meta tags
- Form submission / booking flow
