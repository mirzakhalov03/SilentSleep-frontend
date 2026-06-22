import { useTranslation } from '../../hooks/useTranslation'
import { SITE } from '../../config/site'

export default function Branches() {
  const t = useTranslation()

  return (
    <section id="branches" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
          {t.branches.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">{t.branches.title}</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.branches.items.map((branch) => (
            <div
              key={branch.city}
              className="flex flex-col bg-white rounded-3xl shadow-sm border border-gray-100 p-7 hover:shadow-md transition-shadow"
            >
              <span className="self-start inline-block rounded-full bg-brand-secondary text-brand-primary text-xs font-semibold px-3 py-1 mb-3">
                {branch.tag}
              </span>
              <h3 className="text-xl font-bold text-brand-primary mb-2">{branch.city}</h3>

              {branch.lines.map((line, i) => (
                <p key={i} className="text-sm text-content-muted leading-relaxed mb-1.5">{line}</p>
              ))}

              <a
                href={`tel:${SITE.phoneTel}`}
                className="mt-1 text-sm font-semibold text-brand-primary hover:underline"
              >
                {SITE.phoneDisplay}
              </a>

              {branch.routeUrl && (
                <a
                  href={branch.routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 self-start inline-flex items-center rounded-full border-2 border-brand-primary px-5 py-2 text-sm font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
                >
                  {t.branches.routeLabel}
                </a>
              )}

              <iframe
                title={branch.mapTitle}
                src={branch.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="mt-4 block w-full h-44 rounded-2xl border-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
