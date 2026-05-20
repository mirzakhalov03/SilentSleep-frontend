import { useTranslation } from '../../../../hooks/useTranslation'

export default function DoctorsTab() {
  const t = useTranslation()
  const { slogan, paragraphs, optionsIntro, options, afterOptions } = t.sleeptrack.doctors

  return (
    <div className="max-w-3xl">
      {/* Slogan */}
      <div className="border-l-4 border-brand-primary pl-5 mb-8">
        <p className="text-base font-bold text-brand-primary leading-snug uppercase tracking-wide">
          {slogan}
        </p>
      </div>

      {/* Main paragraphs */}
      <div className="space-y-4">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-content-base leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* Options intro + numbered list */}
      <div className="mt-6 space-y-4">
        <p className="text-content-base leading-relaxed">{optionsIntro}</p>
        <ol className="space-y-3 ml-1">
          {options.map((option, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span className="text-content-base leading-relaxed">{option}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* After-options paragraphs */}
      <div className="mt-6 space-y-4">
        {afterOptions.map((para, i) => (
          <p key={i} className="text-content-base leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}
