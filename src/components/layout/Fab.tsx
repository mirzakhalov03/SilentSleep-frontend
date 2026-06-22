import { SITE } from '../../config/site'

// Fixed quick-contact buttons (Telegram + phone) — mirrors the static HTML's .fab.
export default function Fab() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={SITE.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#229ED9] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M9.8 15.6l-.4 4c.5 0 .7-.2 1-.5l2.4-2.3 5 3.6c.9.5 1.6.2 1.8-.8l3.3-15.4c.3-1.2-.5-1.8-1.4-1.5L1.2 9.6c-1.2.5-1.2 1.1-.2 1.4l5 1.6L17.6 5c.5-.3 1-.2.6.2" />
        </svg>
      </a>
      <a
        href={`tel:${SITE.phoneTel}`}
        aria-label={SITE.phoneDisplay}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20 15.5c-1.2 0-2.4-.2-3.5-.6-.4-.1-.8 0-1 .3l-2.2 2.2a15 15 0 01-6.6-6.6l2.2-2.2c.3-.3.4-.7.3-1-.4-1.1-.6-2.3-.6-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
        </svg>
      </a>
    </div>
  )
}
