import type { ReactNode } from 'react'
import { useTranslation } from '../../hooks/useTranslation'

const ICONS: Record<string, ReactNode> = {
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l7 3.5v5c0 4.5-3 7.2-7 8.5-4-1.3-7-4-7-8.5v-5L12 3z M9 12l2 2 4-4.5" />
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12l3 3 5-6" />
    </>
  ),
  pulse: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12h4l2 6 4-12 2 6h6" />
  ),
  pin: (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" strokeWidth={1.8} />
    </>
  ),
}

export default function WhyUs() {
  const t = useTranslation()

  return (
    <section id="why" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
          {t.why.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">{t.why.title}</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.why.items.map((item) => (
            <div
              key={item.title}
              className="text-center border border-gray-100 rounded-3xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-secondary flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {ICONS[item.icon]}
                </svg>
              </div>
              <h3 className="text-base font-bold text-brand-dark mb-1.5">{item.title}</h3>
              <p className="text-sm text-content-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
