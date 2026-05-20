import { useTranslation } from '../../../../hooks/useTranslation'

export default function ServicesTab() {
  const t = useTranslation()
  const { title, packages, packageLabel, priceLabel, saleLabel, paymentTitle, paymentCash, paymentCard } = t.sleeptrack.services

  return (
    <div className="max-w-3xl space-y-10">
      {/* Section title */}
      <div className="border-l-4 border-brand-primary pl-5">
        <h2 className="text-lg font-bold text-brand-primary uppercase tracking-wide">{title}</h2>
      </div>

      {/* Pricing packages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
            <div>
              <p className="text-xs text-content-muted font-medium uppercase tracking-wide mb-1">
                {packageLabel}
              </p>
              <h3 className="font-bold text-brand-dark text-base leading-snug">{pkg.name}</h3>
            </div>

            {/* Price badges */}
            <div className="flex flex-wrap gap-2 items-center">
              {pkg.salePrice ? (
                <>
                  <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-content-muted text-sm font-semibold line-through">
                    {pkg.price}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-sm font-semibold">
                    {saleLabel}: {pkg.salePrice}
                  </span>
                </>
              ) : (
                <span className="px-3 py-1.5 rounded-lg bg-brand-primary text-white text-sm font-semibold">
                  {priceLabel}: {pkg.price}
                </span>
              )}
            </div>

            {/* Feature list */}
            <ul className="space-y-2">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex gap-2 items-start text-sm text-content-base leading-relaxed">
                  <svg className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Payment options */}
      <div>
        <h3 className="font-bold text-brand-dark mb-4">{paymentTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Cash */}
          <div>
            <p className="text-xs font-bold text-content-muted uppercase tracking-widest mb-2">
              {paymentCash.title}
            </p>
            <ol className="space-y-1 list-decimal list-inside">
              {paymentCash.items.map((item, i) => (
                <li key={i} className="text-sm text-content-base leading-relaxed">{item}</li>
              ))}
            </ol>
          </div>
          {/* Card / online */}
          <div>
            <p className="text-xs font-bold text-content-muted uppercase tracking-widest mb-2">
              {paymentCard.title}
            </p>
            <ol className="space-y-1 list-decimal list-inside">
              {paymentCard.items.map((item, i) => (
                <li key={i} className="text-sm text-content-base leading-relaxed">{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
