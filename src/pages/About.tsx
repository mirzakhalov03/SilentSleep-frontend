import { useTranslation } from '../hooks/useTranslation'

export default function About() {
  const t = useTranslation()
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-brand-dark">{t.placeholders.about.title}</h1>
        <p className="text-content-muted mt-2">{t.placeholders.about.body}</p>
      </div>
    </div>
  )
}
