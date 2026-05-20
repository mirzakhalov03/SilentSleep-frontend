# SleepTrack Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the SleepTrack selling page — a full-width hero banner + a sidebar-tab layout with four tabs (Doctors, Equipments, Services, Benefits), each with its own content shape and renderer, fully bilingual (uz/ru).

**Architecture:** Locale-driven content — all tab data lives in `uz.ts`/`ru.ts` under a `sleeptrack` key. `SleepTrack.tsx` owns `activeTab` state and passes it to `SleepTrackLayout`, which renders the sidebar and the matching tab component. Each tab component is a self-contained renderer that reads its own locale slice.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, custom i18n via `useTranslation()`

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `src/locales/uz.ts` | Add `sleeptrack` key with placeholder data |
| Modify | `src/locales/ru.ts` | Add matching `sleeptrack` key in Russian |
| Create | `src/components/sections/sleeptrack/SleepTrackHero.tsx` | Full-width banner |
| Create | `src/components/sections/sleeptrack/SleepTrackLayout.tsx` | Sidebar + tab panel shell; exports `SleepTrackTab` type |
| Create | `src/components/sections/sleeptrack/tabs/DoctorsTab.tsx` | Horizontal doctor profile cards |
| Create | `src/components/sections/sleeptrack/tabs/EquipmentsTab.tsx` | Horizontal device cards with optional CTA |
| Create | `src/components/sections/sleeptrack/tabs/ServicesTab.tsx` | Numbered icon list |
| Create | `src/components/sections/sleeptrack/tabs/BenefitsTab.tsx` | 2-column icon+text grid |
| Rewrite | `src/pages/SleepTrack.tsx` | Page shell, owns `activeTab` state |

---

## Task 1: Add `sleeptrack` locale data

**Files:**
- Modify: `src/locales/uz.ts`
- Modify: `src/locales/ru.ts`

- [ ] **Step 1: Add to `src/locales/uz.ts`**

Insert the `sleeptrack` key at the end of the `uz` object, just before the final closing `}`:

```ts
  sleeptrack: {
    hero: {
      headline: "Uyqu sifatingizni uydan turib aniqlang",
      subtext:
        "SleepTrack — zamonaviy qurilma yordamida uyda uxlagan holda uyqu diagnostikasi. Klinikaga kelmasdan tashxis qo'ying.",
    },
    tabs: {
      doctors: "Shifokorlar",
      equipments: "Uskunalar",
      services: "Xizmatlar",
      benefits: "Afzalliklar",
    },
    doctors: [
      {
        name: "Dr. [Ism Familiya]",
        title: "Uyqu tibbiyoti mutaxassisi",
        bio: "SleepTrack diagnostikasi bo'yicha 8 yillik tajribaga ega.",
        imageUrl: "",
      },
      {
        name: "Dr. [Ism Familiya]",
        title: "Pulmonolog",
        bio: "Nafas yo'llari kasalliklarini uyqu monitoringi orqali davolash mutaxassisi.",
        imageUrl: "",
      },
    ],
    equipments: [
      {
        title: "WatchPAT One",
        description:
          "Bir martalik foydalanish uchun mo'ljallangan qurilma. Barmoqqa, bilakka va ko'krakka biriktiriladi. Uyda ishlatish juda qulay.",
        imageUrl: "",
        cta: { label: "Batafsil", href: "#" },
      },
      {
        title: "WatchPAT 300",
        description:
          "Qayta ishlatish mumkin bo'lgan model. Klinikalar va diagnostika markazlari uchun ideal.",
        imageUrl: "",
      },
    ],
    services: [
      {
        icon: "device",
        title: "Qurilmani ijaraga olish",
        description: "WatchPAT qurilmasini klinikadan oling va uyingizda bir kecha uxlang.",
      },
      {
        icon: "data",
        title: "Ma'lumotlarni yuborish",
        description: "Qurilmadagi ma'lumotlar avtomatik ravishda shifokorga uzatiladi.",
      },
      {
        icon: "report",
        title: "Tezkor hisobot",
        description: "Shifokor 5–10 daqiqa ichida hisobotni tahlil qiladi va tashxis qo'yadi.",
      },
      {
        icon: "followup",
        title: "Davolash rejasi",
        description: "Natijaga qarab individual davolash taktikasi ishlab chiqiladi.",
      },
    ],
    benefits: [
      {
        icon: "home",
        title: "Uydan turib",
        description: "Klinikaga kelishning hojati yo'q — o'z to'shagingizda uxlaysiz.",
      },
      {
        icon: "fast",
        title: "Tez natija",
        description: "Tashxis 24 soat ichida tayyorlanadi.",
      },
      {
        icon: "accurate",
        title: "Yuqori aniqlik",
        description: "Avtomatik hisobot 90% ishonchlilik darajasiga ega.",
      },
      {
        icon: "affordable",
        title: "Qulay narx",
        description: "Klinikadagi uyqu laboratoriyasiga nisbatan ancha arzonroq.",
      },
    ],
  },
```

- [ ] **Step 2: Add to `src/locales/ru.ts`**

Insert the matching `sleeptrack` key into the `ru` object (same position, Russian content). TypeScript will error if this is missing or mismatched:

```ts
  sleeptrack: {
    hero: {
      headline: "Диагностика сна не выходя из дома",
      subtext:
        "SleepTrack — домашняя диагностика сна с помощью современного устройства. Получите точный диагноз без визита в клинику.",
    },
    tabs: {
      doctors: "Врачи",
      equipments: "Оборудование",
      services: "Услуги",
      benefits: "Преимущества",
    },
    doctors: [
      {
        name: "Dr. [Имя Фамилия]",
        title: "Специалист по медицине сна",
        bio: "8 лет опыта в диагностике SleepTrack.",
        imageUrl: "",
      },
      {
        name: "Dr. [Имя Фамилия]",
        title: "Пульмонолог",
        bio: "Специалист по лечению заболеваний дыхательных путей с помощью мониторинга сна.",
        imageUrl: "",
      },
    ],
    equipments: [
      {
        title: "WatchPAT One",
        description:
          "Одноразовое устройство. Крепится на палец, запястье и грудь. Очень удобно для домашнего использования.",
        imageUrl: "",
        cta: { label: "Подробнее", href: "#" },
      },
      {
        title: "WatchPAT 300",
        description:
          "Многоразовая модель. Идеально подходит для клиник и диагностических центров.",
        imageUrl: "",
      },
    ],
    services: [
      {
        icon: "device",
        title: "Аренда устройства",
        description: "Возьмите устройство WatchPAT в клинике и проведите одну ночь дома.",
      },
      {
        icon: "data",
        title: "Передача данных",
        description: "Данные с устройства автоматически передаются врачу.",
      },
      {
        icon: "report",
        title: "Быстрый отчёт",
        description: "Врач анализирует отчёт за 5–10 минут и ставит диагноз.",
      },
      {
        icon: "followup",
        title: "План лечения",
        description: "На основе результатов разрабатывается индивидуальная тактика лечения.",
      },
    ],
    benefits: [
      {
        icon: "home",
        title: "Из дома",
        description: "Не нужно приезжать в клинику — спите в своей кровати.",
      },
      {
        icon: "fast",
        title: "Быстрый результат",
        description: "Диагноз готов в течение 24 часов.",
      },
      {
        icon: "accurate",
        title: "Высокая точность",
        description: "Автоматический отчёт имеет 90% уровень достоверности.",
      },
      {
        icon: "affordable",
        title: "Доступная цена",
        description: "Значительно дешевле, чем лабораторное исследование сна в клинике.",
      },
    ],
  },
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
npm run build
```

Expected: no type errors. If `ru.ts` is missing any key that `uz.ts` has, TypeScript will report it here.

---

## Task 2: Create SleepTrackHero

**Files:**
- Create: `src/components/sections/sleeptrack/SleepTrackHero.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { useTranslation } from '../../../hooks/useTranslation'

export default function SleepTrackHero() {
  const t = useTranslation()

  return (
    <section
      className="relative min-h-[420px] pt-16 flex items-center overflow-hidden bg-brand-dark"
      // Replace backgroundImage value when the real asset is provided
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/90 to-brand-primary/40" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          SleepTrack
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
          {t.sleeptrack.hero.headline}
        </h1>
        <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
          {t.sleeptrack.hero.subtext}
        </p>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" fill="#F4F8FD" />
      </svg>
    </section>
  )
}
```

> When the real hero image is ready, add `style={{ backgroundImage: \`url(\${heroImg})\`, backgroundSize: 'cover', backgroundPosition: 'center' }}` to the `<section>` and remove the gradient `<div>`, same as the home `Hero`.

---

## Task 3: Create DoctorsTab

**Files:**
- Create: `src/components/sections/sleeptrack/tabs/DoctorsTab.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { useTranslation } from '../../../../hooks/useTranslation'

export default function DoctorsTab() {
  const t = useTranslation()

  return (
    <div className="flex flex-col gap-6">
      {t.sleeptrack.doctors.map((doctor) => (
        <div
          key={doctor.name}
          className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="shrink-0 w-28 h-28 rounded-xl bg-brand-secondary overflow-hidden flex items-center justify-center">
            {doctor.imageUrl ? (
              <img src={doctor.imageUrl} alt={doctor.name} className="w-full h-full object-cover" />
            ) : (
              <svg className="w-10 h-10 text-brand-primary/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-brand-dark text-lg">{doctor.name}</h3>
            <p className="text-brand-primary text-sm font-medium mt-0.5">{doctor.title}</p>
            <p className="text-content-muted text-sm mt-2 leading-relaxed">{doctor.bio}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

---

## Task 4: Create EquipmentsTab

**Files:**
- Create: `src/components/sections/sleeptrack/tabs/EquipmentsTab.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { useTranslation } from '../../../../hooks/useTranslation'

export default function EquipmentsTab() {
  const t = useTranslation()

  return (
    <div className="flex flex-col gap-6">
      {t.sleeptrack.equipments.map((item) => (
        <div
          key={item.title}
          className="flex gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="shrink-0 w-40 h-32 rounded-xl bg-brand-secondary overflow-hidden flex items-center justify-center">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            ) : (
              <svg className="w-10 h-10 text-brand-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
              </svg>
            )}
          </div>
          <div className="flex flex-col justify-between min-w-0">
            <div>
              <h3 className="font-semibold text-brand-dark text-lg">{item.title}</h3>
              <p className="text-content-muted text-sm mt-2 leading-relaxed">{item.description}</p>
            </div>
            {item.cta && (
              <a
                href={item.cta.href}
                className="mt-4 self-start inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors"
              >
                {item.cta.label}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
```

---

## Task 5: Create ServicesTab

**Files:**
- Create: `src/components/sections/sleeptrack/tabs/ServicesTab.tsx`

- [ ] **Step 1: Create the file**

`icon` is a string key from the locale. The map below matches the keys used in Task 1 locale data.

```tsx
import { useTranslation } from '../../../../hooks/useTranslation'

const ICON_MAP: Record<string, React.ReactNode> = {
  device: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  data: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  report: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  followup: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export default function ServicesTab() {
  const t = useTranslation()

  return (
    <div className="flex flex-col gap-4">
      {t.sleeptrack.services.map((item, index) => (
        <div
          key={item.title}
          className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="shrink-0 flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center">
              {ICON_MAP[item.icon] ?? <span className="text-brand-primary font-bold text-sm">{index + 1}</span>}
            </div>
            {index < t.sleeptrack.services.length - 1 && (
              <div className="w-px flex-1 bg-brand-secondary min-h-[16px]" />
            )}
          </div>
          <div className="pb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-brand-primary tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-semibold text-brand-dark">{item.title}</h3>
            </div>
            <p className="text-content-muted text-sm mt-1 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
```

---

## Task 6: Create BenefitsTab

**Files:**
- Create: `src/components/sections/sleeptrack/tabs/BenefitsTab.tsx`

- [ ] **Step 1: Create the file**

```tsx
import { useTranslation } from '../../../../hooks/useTranslation'

const ICON_MAP: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  fast: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  accurate: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  affordable: (
    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export default function BenefitsTab() {
  const t = useTranslation()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {t.sleeptrack.benefits.map((item) => (
        <div
          key={item.title}
          className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center mb-3">
            {ICON_MAP[item.icon] ?? (
              <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <h3 className="font-semibold text-brand-dark">{item.title}</h3>
          <p className="text-content-muted text-sm mt-1 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  )
}
```

---

## Task 7: Create SleepTrackLayout

**Files:**
- Create: `src/components/sections/sleeptrack/SleepTrackLayout.tsx`

- [ ] **Step 1: Create the file**

`SleepTrackTab` is defined and exported here so `SleepTrack.tsx` can import it.

```tsx
import { useTranslation } from '../../../hooks/useTranslation'
import DoctorsTab from './tabs/DoctorsTab'
import EquipmentsTab from './tabs/EquipmentsTab'
import ServicesTab from './tabs/ServicesTab'
import BenefitsTab from './tabs/BenefitsTab'

export type SleepTrackTab = 'doctors' | 'equipments' | 'services' | 'benefits'

const TAB_KEYS: SleepTrackTab[] = ['doctors', 'equipments', 'services', 'benefits']

const TAB_COMPONENTS: Record<SleepTrackTab, React.ComponentType> = {
  doctors: DoctorsTab,
  equipments: EquipmentsTab,
  services: ServicesTab,
  benefits: BenefitsTab,
}

interface Props {
  activeTab: SleepTrackTab
  setActiveTab: (tab: SleepTrackTab) => void
}

export default function SleepTrackLayout({ activeTab, setActiveTab }: Props) {
  const t = useTranslation()
  const ActiveComponent = TAB_COMPONENTS[activeTab]

  return (
    <section className="bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar — horizontal scroll on mobile, vertical stack on desktop */}
          <aside className="md:w-56 shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {TAB_KEYS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 px-5 py-3 rounded-xl text-sm font-semibold text-left transition-colors ${
                    activeTab === tab
                      ? 'bg-brand-primary text-white shadow-sm'
                      : 'bg-white text-brand-dark hover:bg-brand-secondary border border-gray-100'
                  }`}
                >
                  {t.sleeptrack.tabs[tab]}
                </button>
              ))}
            </div>
          </aside>

          {/* Main panel */}
          <div className="flex-1 min-w-0">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

## Task 8: Rewrite SleepTrack.tsx

**Files:**
- Rewrite: `src/pages/SleepTrack.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import { useState } from 'react'
import SleepTrackHero from '../components/sections/sleeptrack/SleepTrackHero'
import SleepTrackLayout, { type SleepTrackTab } from '../components/sections/sleeptrack/SleepTrackLayout'

export default function SleepTrack() {
  const [activeTab, setActiveTab] = useState<SleepTrackTab>('doctors')

  return (
    <>
      <SleepTrackHero />
      <SleepTrackLayout activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  )
}
```

---

## Task 9: Verify in browser

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Open `/sleeptrack` and check**

- Hero renders with headline and subtext
- All four sidebar tabs are visible
- Clicking each tab swaps the content panel
- Doctors tab shows profile cards
- Equipments tab shows device cards; first card has a CTA link
- Services tab shows a numbered icon list with connecting lines
- Benefits tab shows a 2-column grid
- Switch language (UZ ↔ RU) — all content updates

- [ ] **Step 3: Check mobile layout**

Resize browser to < 768px. Sidebar should collapse to a horizontal scrollable row of buttons above the content.

- [ ] **Step 4: Run type check**

```bash
npm run build
```

Expected: zero TypeScript errors.
