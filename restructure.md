# UyquLab SPA — Restructure & Extraction Guide

This document is a **complete build spec** for extracting the current `/sleeptrack`
page out of the SilentSleep marketing site and into its own standalone SPA served at
**`uyqulab.uz`**.

Hand this file to a fresh chat (or follow it yourself). It assumes you start with an
empty Vite project and have the SilentSleep repo available as a reference for copying
files.

---

## 1. Goal & context

- **Today:** `/sleeptrack` is a route inside the SilentSleep React app. It renders a
  hero + a tabbed layout (Doctors / Equipments / Services / Benefits).
- **Target:** That experience becomes its own product site at `uyqulab.uz`, free to
  grow (booking flow, dashboard, auth, etc.) without bloating the clinic site.
- **Already done on the SilentSleep side:** the navbar's "UyquLab" CTA no longer routes
  internally — it now redirects to `https://uyqulab.uz` (`UYQULAB_URL` constant in
  `src/components/layout/Navbar.tsx`). The old `/sleeptrack` page + components still
  exist there **only as reference** and can be deleted once this SPA is live (see §9).

---

## 2. Stack — mirror the parent

Keep the toolchain identical so copied components work unchanged:

- **React 19** + **TypeScript**
- **Vite** (latest) with `@vitejs/plugin-react`
- **Tailwind CSS v4** via `@tailwindcss/vite` — **no `tailwind.config.js`**; tokens live
  in an `@theme {}` block in CSS
- **React Router v7** (`BrowserRouter`) — needed even for a single page so future routes
  (e.g. `/booking`, `/result`) drop in cleanly
- No state library, no test suite (matches house style)

```bash
npm create vite@latest uyqulab -- --template react-ts
cd uyqulab
npm i react-router-dom
npm i -D @tailwindcss/vite
```

`vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

## 3. Design tokens — copy the `@theme` block

The sleeptrack components use brand utility classes (`bg-brand-primary`,
`text-content-muted`, `bg-brand-light`, `animate-*`, etc.). **None of these exist
unless the `@theme` block is present.** Copy this into `src/index.css` (it's the parent's
`src/index.css`, minus the navbar-CTA animations you won't need):

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #1B5EC9;
  --color-brand-secondary: #E8F1FB;
  --color-brand-dark: #0D1F3C;
  --color-brand-light: #F4F8FD;

  --color-content-base: #1A202C;
  --color-content-muted: #64748B;

  --font-family-sans: "Inter", system-ui, sans-serif;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: "Inter", system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#root { min-height: 100vh; }
```

> Rule carried over from the parent: **do not add colors outside `@theme {}`.**

---

## 4. i18n — bring the custom system along

The components call `useTranslation()` and read `t.sleeptrack.*`. There is no i18n
library; it's a tiny custom context. Copy these four files verbatim, then **trim the
locale objects** down to what UyquLab actually needs.

| Copy from parent | To | Notes |
|---|---|---|
| `src/contexts/LanguageContext.tsx` | same path | holds `lang: 'uz' \| 'ru'` + `setLang` |
| `src/hooks/useTranslation.ts` | same path | returns active locale object |
| `src/locales/uz.ts` | same path | **source of truth**; exports `Translations` type |
| `src/locales/ru.ts` | same path | must satisfy `Translations` (TS enforces parity) |

**Trim the locales** to the keys UyquLab uses: keep the entire `sleeptrack: { ... }`
object (hero, tabs, doctors, equipments, services, benefits). Drop `nav`, `hero`,
`blog`, `apnea`, `placeholders`, etc. — unless you reuse them. After trimming `uz.ts`,
fix `ru.ts` to match (TypeScript will flag every gap).

The full `sleeptrack` locale shape you must preserve:

```
sleeptrack: {
  hero:    { headline, subtext }
  tabs:    { doctors, equipments, services, benefits }   // sidebar labels
  doctors: { slogan, paragraphs[], optionsIntro, options[], afterOptions[] }
  equipments: [ { title, description, imageUrl, cta?: { label, href } } ]
  services: {
    title, packageLabel, priceLabel, saleLabel, paymentTitle,
    packages: [ { name, price, salePrice: string|null, features[] } ],
    paymentCash: { title, items[] },
    paymentCard: { title, items[] },
  }
  benefits: [ { icon, title, description } ]   // icon ∈ home|fast|accurate|affordable
}
```

Wrap the app in the provider in `main.tsx`:

```tsx
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
)
```

---

## 5. Components to move

Copy the whole sleeptrack subtree. Suggested flattening since it's now the *whole app*,
not a "section":

| From parent | To (new SPA) |
|---|---|
| `src/components/sections/sleeptrack/SleepTrackHero.tsx` | `src/components/Hero.tsx` |
| `src/components/sections/sleeptrack/SleepTrackLayout.tsx` | `src/components/Layout.tsx` |
| `src/components/sections/sleeptrack/tabs/DoctorsTab.tsx` | `src/components/tabs/DoctorsTab.tsx` |
| `src/components/sections/sleeptrack/tabs/EquipmentsTab.tsx` | `src/components/tabs/EquipmentsTab.tsx` |
| `src/components/sections/sleeptrack/tabs/ServicesTab.tsx` | `src/components/tabs/ServicesTab.tsx` |
| `src/components/sections/sleeptrack/tabs/BenefitsTab.tsx` | `src/components/tabs/BenefitsTab.tsx` |
| `src/pages/SleepTrack.tsx` | becomes `src/pages/Home.tsx` (the landing page) |

**Fix the relative import depths after moving.** Each tab currently reaches the hook via
`../../../../hooks/useTranslation` (4 levels). At the flattened depth
`src/components/tabs/` it becomes `../../hooks/useTranslation`. Easiest fix: configure a
`@/` path alias and import `@/hooks/useTranslation` everywhere so depth no longer matters.

> Optional but recommended — add to `vite.config.ts` + `tsconfig.json`:
> ```ts
> resolve: { alias: { '@': '/src' } }
> ```
> ```jsonc
> "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["src/*"] } }
> ```

Rename the components if you like (`SleepTrackHero` → `Hero`), but it's purely cosmetic.

---

## 6. The tab registry pattern (keep it)

`Layout.tsx` (formerly `SleepTrackLayout.tsx`) uses a **registry**, not conditional
rendering. To add a tab you touch three things and nothing else:

1. Add the key to the `SleepTrackTab` union (rename the type to `Tab` if you wish).
2. Add `key: Component` to the `TAB_COMPONENTS` record **and** the key to `TAB_KEYS`
   (controls sidebar order).
3. Add a `t.sleeptrack.tabs.<key>` label in both locales.

```ts
export type Tab = 'doctors' | 'equipments' | 'services' | 'benefits'
const TAB_KEYS: Tab[] = ['doctors', 'equipments', 'services', 'benefits']
const TAB_COMPONENTS: Record<Tab, React.ComponentType> = {
  doctors: DoctorsTab, equipments: EquipmentsTab,
  services: ServicesTab, benefits: BenefitsTab,
}
```

`activeTab` state currently lives in the page (`SleepTrack.tsx`) and is passed down. If
the tab becomes URL-addressable later, lift it to a route param
(`/lab/:tab`) instead of `useState` — good for deep links and the back button.

---

## 7. Routing for the standalone app

`App.tsx`:

```tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* future: /booking, /result/:id, etc. */}
    </Routes>
  )
}
```

You'll likely want this SPA's **own** Navbar/Footer (the parent's are NOT copied — they
contain clinic links). Build a minimal shell: logo → links back to `silentsleep` site +
the UZ/RU language switcher (lift the switcher markup straight out of the parent navbar).

---

## 8. Shared UI primitives

The sleeptrack components themselves only depend on Tailwind classes and inline SVGs —
**no `ui/Button` or `ui/Logo` import inside the tabs/hero/layout.** So you don't strictly
need to copy `src/components/ui/`. You *will* want them for the new app shell:

- `src/components/ui/Button.tsx` — copy as-is (variants: primary/secondary/outline; sizes sm/md/lg).
- `src/components/ui/Logo.tsx` — copy, then swap text/asset to "UyquLab".

---

## 9. Cleanup on the SilentSleep side (after uyqulab.uz is live)

Once this SPA is deployed and the CTA redirect is verified, delete the now-dead
reference code from the **parent** repo:

- `src/pages/SleepTrack.tsx`
- `src/components/sections/sleeptrack/` (whole folder)
- the `/sleeptrack` `<Route>` and the `SleepTrack` import in `src/App.tsx`
- the `sleeptrack: { ... }` block in `src/locales/uz.ts` and `ru.ts`
- (keep `nav.cta` — the redirect button stays)

Leave the `UYQULAB_URL` constant + CTA in `Navbar.tsx` exactly as is.

> Don't delete any of this until the new site works — it's your only reference copy.

---

## 10. Build checklist

- [ ] Vite + React-TS scaffold created
- [ ] `@tailwindcss/vite` wired in `vite.config.ts`
- [ ] `@theme` block copied into `src/index.css` (brand + content tokens)
- [ ] i18n: `LanguageContext`, `useTranslation`, `uz.ts`, `ru.ts` copied
- [ ] Locales trimmed to the `sleeptrack` slice; `ru.ts` satisfies `Translations`
- [ ] `LanguageProvider` + `BrowserRouter` wrap the app in `main.tsx`
- [ ] Hero + Layout + 4 tabs copied; import paths fixed (or `@/` alias added)
- [ ] Tab registry intact (union + `TAB_KEYS` + `TAB_COMPONENTS` + labels)
- [ ] App shell (own Navbar/Footer with language switcher + back-link to SilentSleep)
- [ ] `npm run build` passes (`tsc -b && vite build`)
- [ ] Deploy to `uyqulab.uz`; verify the SilentSleep CTA lands here
- [ ] Then run §9 cleanup on the parent repo
