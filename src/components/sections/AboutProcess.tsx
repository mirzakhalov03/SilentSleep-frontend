import { useTranslation } from '../../hooks/useTranslation'

export default function AboutProcess() {
  const t = useTranslation()

  return (
    <section id="process" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
          {t.process.eyebrow}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">{t.process.title}</h2>
        <p className="mt-5 max-w-3xl text-content-muted leading-relaxed">{t.process.lead}</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.process.steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-secondary text-brand-primary font-bold text-lg">
                {step.num}
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-dark">{step.title}</h3>
              <p className="mt-2 text-sm text-content-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
