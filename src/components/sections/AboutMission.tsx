import { useTranslation } from '../../hooks/useTranslation'

const VALUE_ICONS: Record<string, React.ReactNode> = {
  diagnosis: (
    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  treatment: (
    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  care: (
    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
}

export default function AboutMission() {
  const t = useTranslation()

  return (
    <section className="bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
            {t.about.badge}
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-brand-dark leading-tight">
            {t.about.headline}
          </h1>
          <div className="mt-6 space-y-4">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-content-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Value pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {t.about.values.map((v) => (
            <div key={v.icon} className="bg-brand-light rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-brand-secondary flex items-center justify-center mb-4">
                {VALUE_ICONS[v.icon]}
              </div>
              <p className="font-semibold text-brand-dark mb-1">{v.title}</p>
              <p className="text-sm text-content-muted leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
