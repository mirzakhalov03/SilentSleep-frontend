import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from '../../hooks/useTranslation'
import { useLanguage } from '../../contexts/LanguageContext'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar() {
  const t = useTranslation()
  const { lang, setLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function scrollToSection(id: string) {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function navLinkClass(path: string) {
    const isActive = location.pathname === path ||
      (path.length > 1 && location.pathname.startsWith(path))
    return `text-sm font-medium transition-colors ${
      isActive ? 'text-brand-primary' : 'text-content-base hover:text-brand-primary'
    }`
  }

  const linkClass = 'text-sm font-medium transition-colors text-content-base hover:text-brand-primary'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo variant="blue" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button onClick={() => scrollToSection('apnea')} className={linkClass}>
              {t.nav.apnea}
            </button>
          </li>
          <li>
            <Link to="/treatment" className={navLinkClass('/treatment')}>{t.nav.treatment}</Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClass('/about')}>{t.nav.about}</Link>
          </li>
          <li>
            <Link to="/blog" className={navLinkClass('/blog')}>{t.nav.blog}</Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('test')} className={linkClass}>
              {t.nav.test}
            </button>
          </li>
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm font-medium">
            <button
              onClick={() => setLang('uz')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'uz' ? 'text-brand-primary font-semibold' : 'text-content-muted hover:text-content-base'
              }`}
            >
              UZ
            </button>
            <span className="text-content-muted select-none">|</span>
            <button
              onClick={() => setLang('ru')}
              className={`px-2 py-1 rounded transition-colors ${
                lang === 'ru' ? 'text-brand-primary font-semibold' : 'text-content-muted hover:text-content-base'
              }`}
            >
              RU
            </button>
          </div>
          <Link to="/sleeptrack">
            <Button size="sm">{t.nav.cta}</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-content-base hover:text-brand-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection('apnea')} className="text-left text-sm font-medium text-content-base hover:text-brand-primary">
            {t.nav.apnea}
          </button>
          <Link to="/treatment" onClick={() => setMenuOpen(false)} className={navLinkClass('/treatment')}>
            {t.nav.treatment}
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass('/about')}>
            {t.nav.about}
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className={navLinkClass('/blog')}>
            {t.nav.blog}
          </Link>
          <button onClick={() => scrollToSection('test')} className="text-left text-sm font-medium text-content-base hover:text-brand-primary">
            {t.nav.test}
          </button>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1 text-sm font-medium">
              <button onClick={() => setLang('uz')} className={lang === 'uz' ? 'text-brand-primary font-semibold' : 'text-content-muted'}>UZ</button>
              <span className="text-content-muted">|</span>
              <button onClick={() => setLang('ru')} className={lang === 'ru' ? 'text-brand-primary font-semibold' : 'text-content-muted'}>RU</button>
            </div>
            <Link to="/sleeptrack" onClick={() => setMenuOpen(false)}>
              <Button size="sm">{t.nav.cta}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
