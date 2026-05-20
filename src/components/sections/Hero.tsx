import heroBg from '../../assets/hero-bg.jpg'
import { useTranslation } from '../../hooks/useTranslation'
import Button from '../ui/Button'

export default function Hero() {
  const t = useTranslation()

  function scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  function scrollToApnea() {
    document.getElementById('apnea')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen pt-16 flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
          Otolor Klinikasi
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {t.hero.headline}
        </h1>

        <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
          {t.hero.subtext}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={scrollToContact}>
            {t.hero.ctaPrimary}
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToApnea} className="border-white text-white hover:bg-white hover:text-brand-primary">
            {t.hero.ctaSecondary}
          </Button>
        </div>

      </div>

      {/* Wave divider */}
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
