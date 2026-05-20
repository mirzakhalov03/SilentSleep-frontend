import { Link } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../contexts/LanguageContext'
import Logo from '../ui/Logo'

export default function Footer() {
  const t = useTranslation()
  const { lang, setLang } = useLanguage()

  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Logo variant="white" className="mb-2" />
            <p className="text-sm text-white/60">{t.footer.tagline}</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t.footer.nav}
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link to="/treatment" className="hover:text-white transition-colors">
                  {t.nav.treatment}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/sleeptrack" className="hover:text-white transition-colors">
                  {t.nav.cta}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              {t.footer.contact}
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{t.location.address}</li>
              <li>
                <a href={`tel:${t.location.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {t.location.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">{t.footer.rights}</p>
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setLang('uz')}
              className={lang === 'uz' ? 'text-white font-semibold' : 'text-white/40 hover:text-white/70 transition-colors'}
            >
              UZ
            </button>
            <span className="text-white/20 select-none">|</span>
            <button
              onClick={() => setLang('ru')}
              className={lang === 'ru' ? 'text-white font-semibold' : 'text-white/40 hover:text-white/70 transition-colors'}
            >
              RU
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
