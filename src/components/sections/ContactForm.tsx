import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import Button from '../ui/Button'

export default function ContactForm() {
  const t = useTranslation()
  const c = t.contact
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-content-base outline-none transition-colors focus:border-brand-primary'

  return (
    <section className="bg-white py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">{c.formTitle}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="block text-sm font-semibold text-brand-dark mb-1.5">{c.nameLabel}</span>
              <input type="text" required onChange={() => setSent(false)} className={inputClass} />
            </label>
            <label className="block">
              <span className="block text-sm font-semibold text-brand-dark mb-1.5">{c.phoneLabel}</span>
              <input
                type="tel"
                required
                placeholder={c.phonePlaceholder}
                onChange={() => setSent(false)}
                className={inputClass}
              />
            </label>
            <label className="block">
              <span className="block text-sm font-semibold text-brand-dark mb-1.5">{c.commentLabel}</span>
              <textarea rows={3} className={`${inputClass} resize-y`} />
            </label>
            <Button type="submit" size="md" className="w-full justify-center">
              {c.submit}
            </Button>
            {sent && (
              <p className="text-center text-sm font-medium text-brand-primary">{c.success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
