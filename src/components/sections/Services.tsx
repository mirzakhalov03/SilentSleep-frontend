import { useTranslation } from '../../hooks/useTranslation'
import { SITE } from '../../config/site'

export default function Services() {
  const t = useTranslation()
  const { columns, rows, footnotePre, footnoteLink, footnotePost } = t.services

  return (
    <section id="services" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
          {t.services.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">{t.services.title}</h2>
        <p className="mt-5 max-w-3xl text-content-muted leading-relaxed">{t.services.lead}</p>

        {/* Table — tablet / desktop */}
        <div className="mt-10 hidden md:block overflow-hidden rounded-3xl shadow-sm border border-gray-100">
          <table className="w-full border-collapse text-left bg-white">
            <thead>
              <tr className="bg-brand-primary text-white">
                <th className="px-6 py-4 text-sm font-semibold">{columns.service}</th>
                <th className="px-6 py-4 text-sm font-semibold">{columns.price}</th>
                <th className="px-6 py-4 text-sm font-semibold">{columns.note}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.service} className="border-b border-gray-100 last:border-0">
                  <td className="px-6 py-3.5 text-sm text-content-base">{row.service}</td>
                  <td className="px-6 py-3.5 text-sm font-semibold text-brand-primary whitespace-nowrap">{row.price}</td>
                  <td className="px-6 py-3.5 text-sm text-content-muted">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Stacked cards — mobile */}
        <div className="mt-8 grid gap-3 md:hidden">
          {rows.map((row) => (
            <div key={row.service} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-medium text-content-base">{row.service}</span>
                <span className="text-sm font-semibold text-brand-primary whitespace-nowrap">{row.price}</span>
              </div>
              <p className="mt-1 text-xs text-content-muted">{row.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-content-muted leading-relaxed">
          {footnotePre}
          <a
            href={SITE.uyqulab}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-primary hover:underline"
          >
            {footnoteLink}
          </a>
          {footnotePost}
        </p>
      </div>
    </section>
  )
}
