import { useTranslation } from '../../hooks/useTranslation'

const TYPE_ICONS: Record<string, React.ReactNode> = {
  obstructive: (
    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  central: (
    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12h2l2-7 4 14 3-9 2 5 2-3h3" />
    </svg>
  ),
  complex: (
    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="8" cy="12" r="4" strokeWidth={1.8} />
      <circle cx="16" cy="12" r="4" strokeWidth={1.8} />
    </svg>
  ),
}

export default function ApneaInfo() {
  const t = useTranslation()

  return (
    <section id="apnea" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: title + description + AHI callout */}
          <div>
            <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">
              {t.apnea.subtitle}
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-brand-dark leading-tight">
              {t.apnea.title}
            </h2>
            <p className="mt-6 text-content-muted leading-relaxed">
              {t.apnea.description}
            </p>

            {/* AHI callout */}
            <div className="mt-8 border-l-4 border-teal-400 bg-teal-50 rounded-r-2xl px-6 py-5">
              <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">
                {t.apnea.ahiTitle}
              </p>
              <p className="text-sm text-teal-900 leading-relaxed">
                {t.apnea.ahiBody}
              </p>
            </div>
          </div>

          {/* Right: apnea type cards */}
          <div className="space-y-4">
            {t.apnea.types.map((type) => (
              <div
                key={type.icon}
                className="flex items-start gap-4 border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                  {TYPE_ICONS[type.icon]}
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-1">{type.title}</p>
                  <p className="text-sm text-content-muted leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
