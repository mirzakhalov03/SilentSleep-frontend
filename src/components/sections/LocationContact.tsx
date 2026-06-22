import { useTranslation } from '../../hooks/useTranslation'
import { SITE } from '../../config/site'
import Button from '../ui/Button'

export default function LocationContact() {
  const t = useTranslation()

  // Derive hours summary from locale data
  const weekdayTime = t.location.hours[0].time   // Mon
  const saturdayTime = t.location.hours[5].time  // Sat

  return (
    <section id="contact" className="bg-brand-light py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">

          {/* Info */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark leading-tight mb-10">
              {t.location.title}
            </h2>

            <div className="space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">{t.location.address}</p>
                  <p className="text-sm text-content-muted mt-0.5">Toshkent, O'zbekiston</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href={`tel:+998${t.location.phone.replace(/\s/g, '')}`} className="font-semibold text-brand-dark hover:text-brand-primary transition-colors">
                    +998 {t.location.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Dush – Juma · {weekdayTime}</p>
                  <p className="text-sm text-content-muted mt-0.5">Shanba · {saturdayTime}</p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z M4 8h16" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark mb-2">{t.contact.socialsLabel}</p>
                  <div className="flex gap-3">
                    <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M9.8 15.6l-.4 4c.5 0 .7-.2 1-.5l2.4-2.3 5 3.6c.9.5 1.6.2 1.8-.8l3.3-15.4c.3-1.2-.5-1.8-1.4-1.5L1.2 9.6c-1.2.5-1.2 1.1-.2 1.4l5 1.6L17.6 5c.5-.3 1-.2.6.2" />
                      </svg>
                    </a>
                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-brand-primary text-white flex items-center justify-center hover:scale-105 transition-transform">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1018.6 12 6.6 6.6 0 0012 5.4zm0 10.9A4.3 4.3 0 1116.3 12 4.3 4.3 0 0112 16.3zm6.8-11.2a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="https://yandex.uz/maps/-/CPspZAjD" target="_blank" rel="noopener noreferrer">
                <Button size="md" variant="outline">
                  Yo'lni ko'rsatish →
                </Button>
              </a>
            </div>
          </div>

          {/* Yandex Map + transport info */}
          <div className="flex flex-col">
            <div className="flex-1 min-h-[380px]">
              <iframe
                title="Sokin Uyqu joylashuvi"
                src="https://yandex.uz/map-widget/v1/?ll=69.276312,41.320991&z=17&pt=69.276312,41.320991,pm2rdl"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Transport info */}
            <div className="flex items-center gap-6 px-6 py-4 bg-brand-light border-t border-gray-100 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-content-muted">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-brand-primary text-white text-xs font-bold shrink-0">17</span>
                Avtobus bekatiga yaqin
              </div>
              <div className="flex items-center gap-2 text-sm text-content-muted">
                <svg className="w-4 h-4 text-brand-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Eng yaqin metro — Abdulla Qodiriy
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
