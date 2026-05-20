# SleepTrack Page — Design Spec

**Date:** 2026-05-20
**Status:** Approved

---

## Overview

SleepTrack is a home sleep monitoring service offered by SilentSleep. Patients rent a WatchPAT-style device, sleep at home, and the recorded data is sent to a doctor who generates a diagnosis report in 5–10 minutes — no clinic visit required. The page serves as a selling page targeting both patients and doctors, with a demo-first focus on patients.

---

## Page Structure

Two vertical sections:

1. **Hero** — full-width background image banner with headline and subtext. Stays static regardless of active tab.
2. **Tab layout** — two-column section below the hero: left sidebar with tab navigation, right main panel with tab content.

---

## Hero

- Full-width, `min-h-[420px]`
- Background image (placeholder asset for now; real image to be provided later)
- Dark overlay for text contrast — same pattern as the home page `Hero`
- Content: `t.sleeptrack.hero.headline` + `t.sleeptrack.hero.subtext`
- Component: `src/components/sections/sleeptrack/SleepTrackHero.tsx`

---

## Tab Layout

**Component:** `src/components/sections/sleeptrack/SleepTrackLayout.tsx`

- Receives `activeTab` and `setActiveTab` from `SleepTrack.tsx`
- Renders the sidebar and the active tab component

### Desktop (md+)
- Sidebar: ~220px wide, vertical stack of tab buttons
- Content panel: fills remaining width

### Mobile
- Sidebar collapses to a horizontally scrollable pill-row above the content

### Tab button styling
- Active: `bg-brand-primary text-white`
- Inactive: `bg-brand-secondary text-brand-dark`

### Tab switching
- Instant state swap — no animation
- Active tab lives in component state only (no URL param)

---

## Tabs

### Doctors
- **Layout:** horizontal cards — image left, name / title / bio right
- **No per-card CTA** — doctors are trust signals
- **Locale shape:**
  ```ts
  doctors: Array<{ name: string; title: string; bio: string; imageUrl: string }>
  ```

### Equipments
- **Layout:** horizontal cards — image left, text right
- **Optional per-card CTA**
- **Locale shape:**
  ```ts
  equipments: Array<{ title: string; description: string; imageUrl: string; cta?: { label: string; href: string } }>
  ```

### Services
- **Layout:** numbered / icon list — no device images
- **Locale shape:**
  ```ts
  services: Array<{ icon: string; title: string; description: string }>
  ```
  > `icon` is a string key mapped to an SVG/component in the renderer — same pattern as `apnea.types[].icon`.

### Benefits
- **Layout:** 2-column icon+text grid
- **Locale shape:**
  ```ts
  benefits: Array<{ icon: string; title: string; description: string }>
  ```

---

## i18n

All content lives under a `sleeptrack` key in `src/locales/uz.ts` and `src/locales/ru.ts`. Placeholder data used during implementation; real content to be filled in later.

Structure:
```ts
sleeptrack: {
  hero: { headline: string; subtext: string }
  tabs: { doctors: string; equipments: string; services: string; benefits: string }
  doctors: [...]
  equipments: [...]
  services: [...]
  benefits: [...]
}
```

---

## File Map

| File | Purpose |
|------|---------|
| `src/pages/SleepTrack.tsx` | Page shell, owns `activeTab` state |
| `src/components/sections/sleeptrack/SleepTrackHero.tsx` | Full-width hero banner |
| `src/components/sections/sleeptrack/SleepTrackLayout.tsx` | Sidebar + panel shell |
| `src/components/sections/sleeptrack/tabs/DoctorsTab.tsx` | Doctors renderer |
| `src/components/sections/sleeptrack/tabs/EquipmentsTab.tsx` | Equipments renderer |
| `src/components/sections/sleeptrack/tabs/ServicesTab.tsx` | Services renderer |
| `src/components/sections/sleeptrack/tabs/BenefitsTab.tsx` | Benefits renderer |
| `src/locales/uz.ts` | Add `sleeptrack` key |
| `src/locales/ru.ts` | Add `sleeptrack` key |
