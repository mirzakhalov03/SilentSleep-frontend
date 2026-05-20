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
