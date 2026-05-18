# SilentSleep Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (Uzbek/Russian) React SPA landing page for the SilentSleep medical clinic.

**Architecture:** Vite + React + TypeScript + Tailwind CSS with centralized color tokens. Custom LanguageContext for i18n. React Router v6 for page routing. All sections are isolated components composed in Home.tsx.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS v3, React Router v6

---

## ⚠️ Phase Gates

Each phase ends with a **STOP — get user approval before continuing**. Do not start Phase 2 until Phase 1 is approved. Do not start Phase 3 until Phase 2 is approved.

---

## Phase 1: Foundation & Shell

Covers: project scaffold, Tailwind color tokens, i18n system, routing skeleton, Navbar, Footer.

---

### Task 1.1: Scaffold project

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`

- [ ] **Step 1: Scaffold Vite + React + TS project**

```bash
cd /Users/mn.afridi/Desktop/SilentSleep-frontend
npm create vite@latest . -- --template react-ts
npm install
```

- [ ] **Step 2: Install dependencies**

```bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 3: Configure Tailwind to scan source files**

Edit `tailwind.config.js` — replace content array:
```js
content: ["./index.html", "./src/**/*.{ts,tsx}"],
```

- [ ] **Step 4: Add Tailwind directives to `src/index.css`**

Replace file contents:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```
Expected: Vite dev server running at `http://localhost:5173`

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Vite + React + TS + Tailwind"
```

---

### Task 1.2: Centralize color tokens in Tailwind config

**Files:**
- Modify: `tailwind.config.js`

- [ ] **Step 1: Replace `tailwind.config.js` with full typed config**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1B5EC9",      // main blue — buttons, links, accents
          secondary: "#E8F1FB",    // light blue — section backgrounds, hover states
          dark: "#0D1F3C",         // dark navy — navbar, footer, headings
          light: "#F4F8FD",        // very light blue-gray — alternating section bg
        },
        content: {
          base: "#1A202C",         // default body text
          muted: "#64748B",        // secondary / caption text
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Add Inter font to `index.html` `<head>`**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.js index.html
git commit -m "feat: centralize Tailwind color tokens and add Inter font"
```

---

### Task 1.3: Shared TypeScript types

**Files:**
- Create: `src/types/index.ts`

- [ ] **Step 1: Create types file**

```ts
// src/types/index.ts

export type Lang = 'uz' | 'ru'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
  slug: string
}

export interface TestQuestion {
  id: number
  question: string
  options: TestOption[]
}

export interface TestOption {
  label: string
  score: number
}

export type RiskLevel = 'low' | 'medium' | 'high'
```

- [ ] **Step 2: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: add shared TypeScript types"
```

---

### Task 1.4: i18n — locale files

**Files:**
- Create: `src/locales/uz.ts`
- Create: `src/locales/ru.ts`

- [ ] **Step 1: Create Uzbek locale**

```ts
// src/locales/uz.ts

const uz = {
  nav: {
    apnea: "Xurrak va Apnoe",
    treatment: "Davolash",
    about: "Biz Haqimizda",
    test: "Uyqu testi",
    cta: "SleepTrack",
  },
  hero: {
    headline: "Xurrak va uyqudagi nafas to'xtashi sizni bezovta qiladimi?",
    subtext:
      "SilentSleep klinikasi zamonaviy usullar yordamida xurrak va uyqu apnoesini samarali davolaydi. Birinchi qadamni bugun qo'ying.",
    ctaPrimary: "Bog'lanish",
    ctaSecondary: "Ko'proq bilish",
  },
  location: {
    title: "Bizning manzil",
    address: "Qashqar dahasi, 24A, 100017, Toshkent",
    phone: "77 113 38 83",
    hoursTitle: "Ish vaqti",
    hours: [
      { day: "Dushanba", time: "09:00 – 20:00" },
      { day: "Seshanba", time: "09:00 – 20:00" },
      { day: "Chorshanba", time: "09:00 – 20:00" },
      { day: "Payshanba", time: "09:00 – 20:00" },
      { day: "Juma", time: "09:00 – 20:00" },
      { day: "Shanba", time: "09:00 – 17:00" },
      { day: "Yakshanba", time: "Dam olish kuni" },
    ],
  },
  apnea: {
    title: "Apnoe nima?",
    body: [
      "Uyqu apnoesi — uyqu paytida nafas olishning vaqtincha to'xtab qolishi bilan tavsiflanadigan tibbiy holat. Bu to'xtashlar bir necha soniyadan bir necha daqiqagacha davom etishi mumkin va tun davomida ko'p marta takrorlanishi mumkin.",
      "Eng keng tarqalgan turi — obstruktiv uyqu apnoesi (OSA), bu holda tomoqdagi mushaklarning bo'shashishi nafas yo'llarini to'sib qo'yadi. Natijada miyaga va organizmga yetarli kislorod yetib bormaydi.",
      "Davolanmagan apnoe yurak-qon tomir kasalliklari, qandli diabet va boshqa jiddiy muammolarga olib kelishi mumkin. O'z vaqtida tashxis va davolash sog'liqni sezilarli darajada yaxshilaydi.",
    ],
    symptoms: [
      { icon: "snore", label: "Xurrak" },
      { icon: "pause", label: "Nafas to'xtashi" },
      { icon: "tired", label: "Kunduzgi charchoq" },
    ],
  },
  blog: {
    title: "Blogimiz",
    viewAll: "Barchasini ko'rish",
    readMore: "Ko'proq o'qish",
    posts: [
      {
        id: "1",
        title: "Uyqu apnoesining 7 ta asosiy belgilari",
        excerpt:
          "Ko'pchilik xurrakni oddiy holat deb hisoblaydi. Ammo ba'zi belgilar apnoe mavjudligini ko'rsatishi mumkin.",
        date: "12 May, 2026",
        imageUrl: "",
        slug: "apnoe-belgilari",
      },
      {
        id: "2",
        title: "CPAP terapiyasi: nima va qanday ishlaydi?",
        excerpt:
          "CPAP — uyqu apnoesini davolashda oltin standart. Qurilma qanday ishlashini va undan qanday foydalanishni bilib oling.",
        date: "5 May, 2026",
        imageUrl: "",
        slug: "cpap-terapiyasi",
      },
      {
        id: "3",
        title: "Sog'lom uyqu uchun 10 ta maslahat",
        excerpt:
          "Uyqu gigienasi — sifatli uyquning asosi. Har kuni amal qilishingiz mumkin bo'lgan oddiy ko'rsatmalar.",
        date: "28 Aprel, 2026",
        imageUrl: "",
        slug: "soglom-uyqu-maslahatlari",
      },
    ],
  },
  test: {
    title: "Uyqu testini o'ting",
    subtitle: "5 ta savolga javob bering va uyqu sog'lig'ingiz haqida darhol natija oling.",
    next: "Keyingisi",
    result: "Natija",
    restart: "Qaytadan boshlash",
    contact: "Shifokor bilan bog'lanish",
    progress: (current: number, total: number) => `${current} / ${total}`,
    questions: [
      {
        id: 1,
        question: "Siz qanchalik tez-tez xurrak qilasiz?",
        options: [
          { label: "Hech qachon", score: 0 },
          { label: "Kamdan-kam (haftada 1-2 marta)", score: 1 },
          { label: "Tez-tez (haftada 3-4 marta)", score: 2 },
          { label: "Deyarli har kuni", score: 3 },
        ],
      },
      {
        id: 2,
        question: "Uyqu paytida nafasingiz to'xtab qolganini kuzatganmisiz (yoki yaqinlaringiz aytganmi)?",
        options: [
          { label: "Yo'q, hech qachon", score: 0 },
          { label: "1-2 marta bo'lgan", score: 1 },
          { label: "Ba'zida sodir bo'ladi", score: 2 },
          { label: "Tez-tez sodir bo'ladi", score: 3 },
        ],
      },
      {
        id: 3,
        question: "Kunduzgi vaqtda o'zingizni qanchalik charchagan his qilasiz?",
        options: [
          { label: "Umuman charchamayman", score: 0 },
          { label: "Ozgina charchoq sezaman", score: 1 },
          { label: "Ko'pincha charchagan bo'laman", score: 2 },
          { label: "Doimo uyqum kelib turadi", score: 3 },
        ],
      },
      {
        id: 4,
        question: "Ertalab bosh og'rig'i yoki og'ir his bilan uyg'onasizmi?",
        options: [
          { label: "Yo'q", score: 0 },
          { label: "Kamdan-kam", score: 1 },
          { label: "Haftada bir necha marta", score: 2 },
          { label: "Deyarli har kuni", score: 3 },
        ],
      },
      {
        id: 5,
        question: "Uyquingiz sifatini qanday baholaysiz?",
        options: [
          { label: "Juda yaxshi", score: 0 },
          { label: "Yaxshi", score: 1 },
          { label: "Qoniqarsiz", score: 2 },
          { label: "Juda yomon", score: 3 },
        ],
      },
    ],
    results: {
      low: {
        level: "low" as const,
        title: "Past xavf",
        message:
          "Sizning natijalaringiz uyqu apnoesi xavfining past ekanligini ko'rsatmoqda. Sog'lom uyqu odatlarini saqlab boring.",
      },
      medium: {
        level: "medium" as const,
        title: "O'rtacha xavf",
        message:
          "Sizda uyqu apnoesiga xos ba'zi belgilar mavjud. Shifokor bilan maslahatlashish tavsiya etiladi.",
      },
      high: {
        level: "high" as const,
        title: "Yuqori xavf",
        message:
          "Natijalaringiz uyqu apnoesining yuqori xavfini ko'rsatmoqda. Tezroq shifokorga murojaat qilishni tavsiya etamiz.",
      },
    },
  },
  footer: {
    tagline: "Sog'lom uyqu — sog'lom hayot.",
    rights: "© 2026 SilentSleep. Barcha huquqlar himoyalangan.",
    contact: "Aloqa",
    nav: "Sahifalar",
  },
  placeholders: {
    treatment: {
      title: "Davolash",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
    about: {
      title: "Biz Haqimizda",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
    sleeptrack: {
      title: "SleepTrack",
      body: "Bu sahifa tez orada tayyorlanadi.",
    },
  },
}

export default uz
export type Translations = typeof uz
```

- [ ] **Step 2: Create Russian locale**

```ts
// src/locales/ru.ts
import type { Translations } from './uz'

const ru: Translations = {
  nav: {
    apnea: "Храп и Апноэ",
    treatment: "Лечение",
    about: "О нас",
    test: "Тест сна",
    cta: "SleepTrack",
  },
  hero: {
    headline: "Вас беспокоит храп и остановки дыхания во сне?",
    subtext:
      "Клиника SilentSleep эффективно лечит храп и апноэ сна современными методами. Сделайте первый шаг уже сегодня.",
    ctaPrimary: "Связаться",
    ctaSecondary: "Узнать больше",
  },
  location: {
    title: "Наш адрес",
    address: "Кашкарская дача, 24A, 100017, Ташкент",
    phone: "77 113 38 83",
    hoursTitle: "Часы работы",
    hours: [
      { day: "Понедельник", time: "09:00 – 20:00" },
      { day: "Вторник", time: "09:00 – 20:00" },
      { day: "Среда", time: "09:00 – 20:00" },
      { day: "Четверг", time: "09:00 – 20:00" },
      { day: "Пятница", time: "09:00 – 20:00" },
      { day: "Суббота", time: "09:00 – 17:00" },
      { day: "Воскресенье", time: "Выходной" },
    ],
  },
  apnea: {
    title: "Что такое апноэ?",
    body: [
      "Апноэ сна — это медицинское состояние, при котором дыхание временно останавливается во время сна. Эти остановки могут длиться от нескольких секунд до нескольких минут и повторяться много раз за ночь.",
      "Наиболее распространённый тип — обструктивное апноэ сна (ОАС), при котором расслабление мышц горла блокирует дыхательные пути. В результате мозг и организм не получают достаточного количества кислорода.",
      "Нелечённое апноэ может привести к сердечно-сосудистым заболеваниям, диабету и другим серьёзным осложнениям. Своевременная диагностика и лечение значительно улучшают качество жизни.",
    ],
    symptoms: [
      { icon: "snore", label: "Храп" },
      { icon: "pause", label: "Остановки дыхания" },
      { icon: "tired", label: "Дневная усталость" },
    ],
  },
  blog: {
    title: "Наш блог",
    viewAll: "Смотреть все",
    readMore: "Читать далее",
    posts: [
      {
        id: "1",
        title: "7 главных признаков апноэ сна",
        excerpt:
          "Многие считают храп обычным явлением. Но некоторые симптомы могут указывать на апноэ.",
        date: "12 мая 2026",
        imageUrl: "",
        slug: "apnoe-belgilari",
      },
      {
        id: "2",
        title: "CPAP-терапия: что это и как работает?",
        excerpt:
          "CPAP — золотой стандарт лечения апноэ сна. Узнайте, как работает аппарат и как им пользоваться.",
        date: "5 мая 2026",
        imageUrl: "",
        slug: "cpap-terapiyasi",
      },
      {
        id: "3",
        title: "10 советов для здорового сна",
        excerpt:
          "Гигиена сна — основа качественного отдыха. Простые рекомендации, которые можно применять каждый день.",
        date: "28 апреля 2026",
        imageUrl: "",
        slug: "soglom-uyqu-maslahatlari",
      },
    ],
  },
  test: {
    title: "Пройдите тест сна",
    subtitle: "Ответьте на 5 вопросов и получите мгновенный результат о здоровье вашего сна.",
    next: "Далее",
    result: "Результат",
    restart: "Начать заново",
    contact: "Связаться с врачом",
    progress: (current: number, total: number) => `${current} / ${total}`,
    questions: [
      {
        id: 1,
        question: "Как часто вы храпите?",
        options: [
          { label: "Никогда", score: 0 },
          { label: "Редко (1–2 раза в неделю)", score: 1 },
          { label: "Часто (3–4 раза в неделю)", score: 2 },
          { label: "Почти каждую ночь", score: 3 },
        ],
      },
      {
        id: 2,
        question: "Вы замечали (или вам говорили), что дыхание останавливается во сне?",
        options: [
          { label: "Нет, никогда", score: 0 },
          { label: "Было 1–2 раза", score: 1 },
          { label: "Иногда случается", score: 2 },
          { label: "Происходит часто", score: 3 },
        ],
      },
      {
        id: 3,
        question: "Насколько сонным и усталым вы чувствуете себя днём?",
        options: [
          { label: "Совсем не устаю", score: 0 },
          { label: "Немного устаю", score: 1 },
          { label: "Часто чувствую усталость", score: 2 },
          { label: "Постоянно хочу спать", score: 3 },
        ],
      },
      {
        id: 4,
        question: "Просыпаетесь ли вы с головной болью или тяжестью?",
        options: [
          { label: "Нет", score: 0 },
          { label: "Редко", score: 1 },
          { label: "Несколько раз в неделю", score: 2 },
          { label: "Почти каждый день", score: 3 },
        ],
      },
      {
        id: 5,
        question: "Как бы вы оценили качество своего сна?",
        options: [
          { label: "Отличное", score: 0 },
          { label: "Хорошее", score: 1 },
          { label: "Неудовлетворительное", score: 2 },
          { label: "Очень плохое", score: 3 },
        ],
      },
    ],
    results: {
      low: {
        level: "low" as const,
        title: "Низкий риск",
        message:
          "Ваши результаты показывают низкий риск апноэ сна. Продолжайте поддерживать здоровые привычки сна.",
      },
      medium: {
        level: "medium" as const,
        title: "Средний риск",
        message:
          "У вас есть некоторые признаки апноэ сна. Рекомендуем проконсультироваться с врачом.",
      },
      high: {
        level: "high" as const,
        title: "Высокий риск",
        message:
          "Ваши результаты указывают на высокий риск апноэ сна. Рекомендуем обратиться к врачу как можно скорее.",
      },
    },
  },
  footer: {
    tagline: "Здоровый сон — здоровая жизнь.",
    rights: "© 2026 SilentSleep. Все права защищены.",
    contact: "Контакты",
    nav: "Страницы",
  },
  placeholders: {
    treatment: {
      title: "Лечение",
      body: "Эта страница скоро будет готова.",
    },
    about: {
      title: "О нас",
      body: "Эта страница скоро будет готова.",
    },
    sleeptrack: {
      title: "SleepTrack",
      body: "Эта страница скоро будет готова.",
    },
  },
}

export default ru
```

- [ ] **Step 3: Commit**

```bash
git add src/locales/
git commit -m "feat: add Uzbek and Russian locale files"
```

---

### Task 1.5: i18n context + hook

**Files:**
- Create: `src/contexts/LanguageContext.tsx`
- Create: `src/hooks/useTranslation.ts`

- [ ] **Step 1: Create LanguageContext**

```tsx
// src/contexts/LanguageContext.tsx
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from '../types'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'uz',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('uz')
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
```

- [ ] **Step 2: Create useTranslation hook**

```ts
// src/hooks/useTranslation.ts
import { useLanguage } from '../contexts/LanguageContext'
import uz from '../locales/uz'
import ru from '../locales/ru'

export function useTranslation() {
  const { lang } = useLanguage()
  return lang === 'uz' ? uz : ru
}
```

- [ ] **Step 3: Commit**

```bash
git add src/contexts/ src/hooks/
git commit -m "feat: add LanguageContext and useTranslation hook"
```

---

### Task 1.6: Routing skeleton + App shell

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Create: `src/pages/Home.tsx`
- Create: `src/pages/Treatment.tsx`
- Create: `src/pages/About.tsx`
- Create: `src/pages/SleepTrack.tsx`

- [ ] **Step 1: Update `src/main.tsx`**

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)
```

- [ ] **Step 2: Update `src/App.tsx`**

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Treatment from './pages/Treatment'
import About from './pages/About'
import SleepTrack from './pages/SleepTrack'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/about" element={<About />} />
          <Route path="/sleeptrack" element={<SleepTrack />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 3: Create placeholder pages (Treatment, About, SleepTrack)**

```tsx
// src/pages/Treatment.tsx
import { useTranslation } from '../hooks/useTranslation'

export default function Treatment() {
  const t = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-brand-dark">{t.placeholders.treatment.title}</h1>
        <p className="text-content-muted mt-2">{t.placeholders.treatment.body}</p>
      </div>
    </div>
  )
}
```

```tsx
// src/pages/About.tsx
import { useTranslation } from '../hooks/useTranslation'

export default function About() {
  const t = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-brand-dark">{t.placeholders.about.title}</h1>
        <p className="text-content-muted mt-2">{t.placeholders.about.body}</p>
      </div>
    </div>
  )
}
```

```tsx
// src/pages/SleepTrack.tsx
import { useTranslation } from '../hooks/useTranslation'

export default function SleepTrack() {
  const t = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-brand-dark">{t.placeholders.sleeptrack.title}</h1>
        <p className="text-content-muted mt-2">{t.placeholders.sleeptrack.body}</p>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Create Home.tsx stub (will fill in Phase 2)**

```tsx
// src/pages/Home.tsx
export default function Home() {
  return <div />
}
```

- [ ] **Step 5: Commit**

```bash
git add src/
git commit -m "feat: add routing skeleton and placeholder pages"
```

---

### Task 1.7: Button UI component

**Files:**
- Create: `src/components/ui/Button.tsx`

- [ ] **Step 1: Create Button component**

```tsx
// src/components/ui/Button.tsx
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2'

  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-dark',
    secondary: 'bg-brand-secondary text-brand-primary hover:bg-brand-primary hover:text-white',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/Button.tsx
git commit -m "feat: add reusable Button component"
```

---

### Task 1.8: Navbar component

**Files:**
- Create: `src/components/layout/Navbar.tsx`

- [ ] **Step 1: Create Navbar**

```tsx
// src/components/layout/Navbar.tsx
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../ui/Button'

export default function Navbar() {
  const t = useTranslation()
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function scrollToSection(id: string) {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-brand-dark tracking-tight">
          Silent<span className="text-brand-primary">Sleep</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection('apnea')}
              className="text-content-base hover:text-brand-primary transition-colors text-sm font-medium"
            >
              {t.nav.apnea}
            </button>
          </li>
          <li>
            <Link
              to="/treatment"
              className="text-content-base hover:text-brand-primary transition-colors text-sm font-medium"
            >
              {t.nav.treatment}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-content-base hover:text-brand-primary transition-colors text-sm font-medium"
            >
              {t.nav.about}
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('test')}
              className="text-content-base hover:text-brand-primary transition-colors text-sm font-medium"
            >
              {t.nav.test}
            </button>
          </li>
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setLang('uz')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'uz'
                  ? 'text-brand-primary font-semibold'
                  : 'text-content-muted hover:text-content-base'
              }`}
            >
              UZ
            </button>
            <span className="text-content-muted">|</span>
            <button
              onClick={() => setLang('ru')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'ru'
                  ? 'text-brand-primary font-semibold'
                  : 'text-content-muted hover:text-content-base'
              }`}
            >
              RU
            </button>
          </div>
          <Link to="/sleeptrack">
            <Button size="sm">{t.nav.cta}</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-content-base hover:text-brand-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection('apnea')} className="text-left text-content-base hover:text-brand-primary text-sm font-medium">
            {t.nav.apnea}
          </button>
          <Link to="/treatment" onClick={() => setMenuOpen(false)} className="text-content-base hover:text-brand-primary text-sm font-medium">
            {t.nav.treatment}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-content-base hover:text-brand-primary text-sm font-medium">
            {t.nav.about}
          </Link>
          <button onClick={() => scrollToSection('test')} className="text-left text-content-base hover:text-brand-primary text-sm font-medium">
            {t.nav.test}
          </button>
          <div className="flex items-center gap-4 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1 text-sm font-medium">
              <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'text-brand-primary font-semibold' : 'text-content-muted'}>UZ</button>
              <span className="text-content-muted">|</span>
              <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-brand-primary font-semibold' : 'text-content-muted'}>RU</button>
            </div>
            <Link to="/sleeptrack" onClick={() => setMenuOpen(false)}>
              <Button size="sm">{t.nav.cta}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Navbar.tsx
git commit -m "feat: add Navbar with language toggle and mobile menu"
```

---

### Task 1.9: Footer component

**Files:**
- Create: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Create Footer**

```tsx
// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
  const t = useTranslation()
  const { lang, setLang } = useLanguage()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold tracking-tight mb-2">
              Silent<span className="text-brand-primary">Sleep</span>
            </p>
            <p className="text-sm text-white/60">{t.footer.tagline}</p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t.footer.nav}
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/treatment" className="hover:text-white transition-colors">{t.nav.treatment}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/sleeptrack" className="hover:text-white transition-colors">{t.nav.cta}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t.footer.contact}
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{t.location.address}</li>
              <li>{t.location.phone}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">{t.footer.rights}</p>
          <div className="flex items-center gap-1 text-sm font-medium">
            <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'text-white font-semibold' : 'text-white/40 hover:text-white/70'}>UZ</button>
            <span className="text-white/20">|</span>
            <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-white font-semibold' : 'text-white/40 hover:text-white/70'}>RU</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat: add Footer component"
```

---

### ✅ PHASE 1 CHECKPOINT

Verify:
- Dev server runs (`npm run dev`) with no TypeScript errors
- Navbar renders with all links, language toggle, and mobile menu
- Footer renders with correct colors
- Navigating to `/treatment`, `/about`, `/sleeptrack` shows placeholder text
- Language toggle switches between UZ and RU in navbar and footer

**STOP — show the user what's been built and get approval before starting Phase 2.**

---

## Phase 2: Core Landing Sections

Covers: Hero, LocationContact, ApneaInfo, Blog sections composed into Home.tsx.

---

### Task 2.1: Hero section

**Files:**
- Create: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Create Hero component**

```tsx
// src/components/sections/Hero.tsx
import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import Button from '../ui/Button'

interface HeroProps {
  imageSrc?: string
}

export default function Hero({ imageSrc }: HeroProps) {
  const t = useTranslation()

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToApnea() {
    document.getElementById('apnea')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen pt-16 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
              {t.hero.headline}
            </h1>
            <p className="mt-6 text-lg text-content-muted leading-relaxed max-w-lg">
              {t.hero.subtext}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact}>
                {t.hero.ctaPrimary}
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToApnea}>
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-brand-secondary flex items-center justify-center">
            {imageSrc ? (
              <img src={imageSrc} alt="SilentSleep clinic" className="w-full h-full object-cover" />
            ) : (
              <div className="text-brand-primary/30 text-sm">Image coming soon</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: add Hero section"
```

---

### Task 2.2: LocationContact section

**Files:**
- Create: `src/components/sections/LocationContact.tsx`

- [ ] **Step 1: Create LocationContact component**

```tsx
// src/components/sections/LocationContact.tsx
import { useTranslation } from '../../hooks/useTranslation'

export default function LocationContact() {
  const t = useTranslation()

  return (
    <section id="contact" className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-8">{t.location.title}</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-brand-primary">📍</span>
                <p className="text-content-base">{t.location.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-primary">📞</span>
                <a
                  href={`tel:${t.location.phone.replace(/\s/g, '')}`}
                  className="text-content-base hover:text-brand-primary transition-colors font-medium"
                >
                  {t.location.phone}
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-content-muted mb-4">
                {t.location.hoursTitle}
              </h3>
              <ul className="space-y-2">
                {t.location.hours.map((row) => (
                  <li key={row.day} className="flex justify-between text-sm">
                    <span className="text-content-muted">{row.day}</span>
                    <span className={`font-medium ${row.time.includes('Dam') || row.time.includes('Выходной') ? 'text-red-400' : 'text-content-base'}`}>
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-80 lg:h-full min-h-64 rounded-2xl overflow-hidden shadow-md">
            <iframe
              title="SilentSleep location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1000000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/LocationContact.tsx
git commit -m "feat: add LocationContact section with map embed"
```

---

### Task 2.3: ApneaInfo section

**Files:**
- Create: `src/components/sections/ApneaInfo.tsx`

- [ ] **Step 1: Create ApneaInfo component**

```tsx
// src/components/sections/ApneaInfo.tsx
import { useTranslation } from '../../hooks/useTranslation'

const SYMPTOM_ICONS: Record<string, string> = {
  snore: '😮',
  pause: '⏸️',
  tired: '😴',
}

export default function ApneaInfo() {
  const t = useTranslation()

  return (
    <section id="apnea" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
          {t.apnea.title}
        </h2>

        <div className="space-y-5 text-content-base leading-relaxed">
          {t.apnea.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {t.apnea.symptoms.map((symptom) => (
            <div
              key={symptom.icon}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-brand-light text-center"
            >
              <span className="text-4xl">{SYMPTOM_ICONS[symptom.icon]}</span>
              <span className="text-sm font-semibold text-brand-dark">{symptom.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/ApneaInfo.tsx
git commit -m "feat: add ApneaInfo section"
```

---

### Task 2.4: BlogCard UI + Blog section

**Files:**
- Create: `src/components/ui/BlogCard.tsx`
- Create: `src/components/sections/Blog.tsx`

- [ ] **Step 1: Create BlogCard component**

```tsx
// src/components/ui/BlogCard.tsx
import type { BlogPost } from '../../types'

interface BlogCardProps {
  post: BlogPost
  readMoreLabel: string
}

export default function BlogCard({ post, readMoreLabel }: BlogCardProps) {
  return (
    <article className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-full aspect-video bg-brand-secondary flex items-center justify-center">
        {post.imageUrl ? (
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-brand-primary/30 text-xs">Image</span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs text-content-muted mb-2">{post.date}</p>
        <h3 className="text-base font-bold text-brand-dark mb-2 leading-snug">{post.title}</h3>
        <p className="text-sm text-content-muted leading-relaxed flex-1">{post.excerpt}</p>
        <button className="mt-4 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors text-left">
          {readMoreLabel} →
        </button>
      </div>
    </article>
  )
}
```

- [ ] **Step 2: Create Blog section**

```tsx
// src/components/sections/Blog.tsx
import { useTranslation } from '../../hooks/useTranslation'
import BlogCard from '../ui/BlogCard'

export default function Blog() {
  const t = useTranslation()

  return (
    <section className="bg-brand-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-brand-dark">{t.blog.title}</h2>
          <button className="text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors">
            {t.blog.viewAll} →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.blog.posts.map((post) => (
            <BlogCard key={post.id} post={post} readMoreLabel={t.blog.readMore} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/BlogCard.tsx src/components/sections/Blog.tsx
git commit -m "feat: add BlogCard and Blog section with mocked posts"
```

---

### Task 2.5: Compose Home.tsx

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Update Home.tsx to compose all Phase 2 sections**

```tsx
// src/pages/Home.tsx
import Hero from '../components/sections/Hero'
import LocationContact from '../components/sections/LocationContact'
import ApneaInfo from '../components/sections/ApneaInfo'
import Blog from '../components/sections/Blog'

export default function Home() {
  return (
    <>
      <Hero />
      <LocationContact />
      <ApneaInfo />
      <Blog />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: compose Home page with all Phase 2 sections"
```

---

### ✅ PHASE 2 CHECKPOINT

Verify:
- Home page shows Hero, LocationContact, ApneaInfo, Blog in correct order
- Language toggle updates all section text instantly
- Map iframe loads
- Blog cards render mocked data correctly
- All sections are visually consistent (colors use only Tailwind tokens, no hardcoded hex)
- No TypeScript errors (`npm run build` should pass)

**STOP — show the user what's been built and get approval before starting Phase 3.**

---

## Phase 3: Sleep Test + Polish

Covers: QuestionCard, SleepTest section, result logic, final Home.tsx update.

---

### Task 3.1: QuestionCard UI component

**Files:**
- Create: `src/components/ui/QuestionCard.tsx`

- [ ] **Step 1: Create QuestionCard**

```tsx
// src/components/ui/QuestionCard.tsx
import type { TestQuestion, TestOption } from '../../types'

interface QuestionCardProps {
  question: TestQuestion
  selectedScore: number | null
  onSelect: (option: TestOption) => void
}

export default function QuestionCard({ question, selectedScore, onSelect }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <p className="text-lg font-semibold text-brand-dark mb-6">{question.question}</p>
      <ul className="space-y-3">
        {question.options.map((option) => {
          const selected = selectedScore === option.score
          return (
            <li key={option.label}>
              <button
                onClick={() => onSelect(option)}
                className={`w-full text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                  selected
                    ? 'border-brand-primary bg-brand-secondary text-brand-primary'
                    : 'border-gray-200 text-content-base hover:border-brand-primary hover:bg-brand-light'
                }`}
              >
                {option.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/QuestionCard.tsx
git commit -m "feat: add QuestionCard UI component"
```

---

### Task 3.2: SleepTest section

**Files:**
- Create: `src/components/sections/SleepTest.tsx`

- [ ] **Step 1: Create SleepTest component**

```tsx
// src/components/sections/SleepTest.tsx
import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import QuestionCard from '../ui/QuestionCard'
import Button from '../ui/Button'
import type { TestOption, RiskLevel } from '../../types'

function getRiskLevel(score: number): RiskLevel {
  if (score <= 5) return 'low'
  if (score <= 10) return 'medium'
  return 'high'
}

const RESULT_STYLES: Record<RiskLevel, { bg: string; border: string; badge: string }> = {
  low: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    badge: 'bg-green-100 text-green-700',
  },
  medium: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-700',
  },
  high: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-700',
  },
}

export default function SleepTest() {
  const t = useTranslation()
  const questions = t.test.questions
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<TestOption | null>(null)
  const [done, setDone] = useState(false)

  const totalScore = answers.reduce((sum, s) => sum + s, 0)
  const riskLevel = getRiskLevel(totalScore)
  const result = t.test.results[riskLevel]
  const styles = RESULT_STYLES[riskLevel]

  function handleSelect(option: TestOption) {
    setSelectedOption(option)
  }

  function handleNext() {
    if (!selectedOption) return
    const newAnswers = [...answers, selectedOption.score]
    if (step + 1 >= questions.length) {
      setAnswers(newAnswers)
      setDone(true)
    } else {
      setAnswers(newAnswers)
      setStep(step + 1)
      setSelectedOption(null)
    }
  }

  function handleRestart() {
    setStep(0)
    setAnswers([])
    setSelectedOption(null)
    setDone(false)
  }

  return (
    <section id="test" className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-dark">{t.test.title}</h2>
          <p className="mt-3 text-content-muted">{t.test.subtitle}</p>
        </div>

        {!done ? (
          <div>
            {/* Progress */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 bg-brand-secondary rounded-full h-1.5">
                <div
                  className="bg-brand-primary h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>
              <span className="text-xs font-medium text-content-muted whitespace-nowrap">
                {t.test.progress(step + 1, questions.length)}
              </span>
            </div>

            <QuestionCard
              question={questions[step]}
              selectedScore={selectedOption?.score ?? null}
              onSelect={handleSelect}
            />

            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={selectedOption === null ? 'opacity-40 cursor-not-allowed' : ''}
              >
                {t.test.next}
              </Button>
            </div>
          </div>
        ) : (
          <div className={`rounded-2xl border-2 p-8 text-center ${styles.bg} ${styles.border}`}>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${styles.badge}`}>
              {result.title}
            </span>
            <p className="text-content-base leading-relaxed mb-8">{result.message}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`tel:${t.location.phone.replace(/\s/g, '')}`}>
                <Button>{t.test.contact}</Button>
              </a>
              <Button variant="outline" onClick={handleRestart}>
                {t.test.restart}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/sections/SleepTest.tsx
git commit -m "feat: add SleepTest section with scoring and result card"
```

---

### Task 3.3: Add SleepTest to Home page

**Files:**
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Add SleepTest import and render it after Blog**

```tsx
// src/pages/Home.tsx
import Hero from '../components/sections/Hero'
import LocationContact from '../components/sections/LocationContact'
import ApneaInfo from '../components/sections/ApneaInfo'
import Blog from '../components/sections/Blog'
import SleepTest from '../components/sections/SleepTest'

export default function Home() {
  return (
    <>
      <Hero />
      <LocationContact />
      <ApneaInfo />
      <Blog />
      <SleepTest />
    </>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/Home.tsx
git commit -m "feat: add SleepTest section to Home page"
```

---

### Task 3.4: Final build verification

- [ ] **Step 1: Run TypeScript build and confirm zero errors**

```bash
npm run build
```
Expected: build completes with no TypeScript errors and no warnings about missing modules.

- [ ] **Step 2: Check dev server for visual regressions**

```bash
npm run dev
```

Manually verify:
- All 4 routes render (`/`, `/treatment`, `/about`, `/sleeptrack`)
- Language toggle updates every section simultaneously
- Sleep test flows through all 5 questions and shows correct result tier
- Navbar smooth-scrolls to `#apnea` and `#test` from any page
- Mobile layout looks clean (check at 375px wide)
- No hardcoded hex colors anywhere in `src/` (only `brand-*` and `content-*` tokens)

- [ ] **Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete SilentSleep landing page Phase 3"
```

---

### ✅ PHASE 3 COMPLETE

Full site is built. Hand off to user for:
- Providing hero image
- Confirming working hours for all days
- Replacing Google Maps embed with exact iframe URL for the clinic address
- Wiring blog section to the real API when ready
