import { useTranslation } from '../../../hooks/useTranslation'

export default function SleepTrackHero() {
  const t = useTranslation()

  return (
    <section
      className="relative min-h-[420px] pt-16 flex items-center overflow-hidden bg-brand-dark"
      // Replace with: style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      // when the real hero image asset is provided
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/90 to-brand-primary/40" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          SleepTrack
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
          {t.sleeptrack.hero.headline}
        </h1>
        <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-2xl">
          {t.sleeptrack.hero.subtext}
        </p>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" fill="#F4F8FD" />
      </svg>
    </section>
  )
}
