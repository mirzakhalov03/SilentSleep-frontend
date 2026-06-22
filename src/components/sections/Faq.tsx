import { useTranslation } from '../../hooks/useTranslation'

export default function Faq() {
  const t = useTranslation()

  return (
    <section id="faq" className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
            {t.faq.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">{t.faq.title}</h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm px-6"
            >
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden font-semibold text-brand-dark">
                {item.q}
                <svg
                  className="w-5 h-5 shrink-0 text-brand-primary transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-sm text-content-muted leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
