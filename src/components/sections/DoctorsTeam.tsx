import { useTranslation } from '../../hooks/useTranslation'

function AvatarPlaceholder() {
  return (
    <div className="w-full aspect-square bg-brand-secondary flex items-center justify-center">
      <svg className="w-20 h-20 text-brand-primary/30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
  )
}

export default function DoctorsTeam() {
  const t = useTranslation()

  return (
    <section className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
            {t.about.teamBadge}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-dark">
            {t.about.teamTitle}
          </h2>
          <p className="mt-3 text-content-muted">{t.about.teamSubtitle}</p>
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {t.about.doctors.map((doctor, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              {/* Photo */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                {doctor.imageUrl ? (
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <AvatarPlaceholder />
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="font-bold text-brand-dark text-lg">{doctor.name}</p>
                <p className="text-sm text-brand-primary font-medium mt-0.5">{doctor.title}</p>
                <p className="text-sm text-content-muted mt-3 leading-relaxed">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
