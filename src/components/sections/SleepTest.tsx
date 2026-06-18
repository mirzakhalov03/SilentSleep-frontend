import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import QuestionCard from '../ui/QuestionCard'
import Button from '../ui/Button'
import type { TestOption, RiskLevel } from '../../types'

// STOP-BANG scoring: 0–2 low · 3–4 medium · 5–8 high
function getRiskLevel(score: number): RiskLevel {
  if (score <= 2) return 'low'
  if (score <= 4) return 'medium'
  return 'high'
}

const RESULT_CONFIG: Record<RiskLevel, {
  bg: string
  border: string
  badge: string
  icon: string
  glow: string
}> = {
  low: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
    icon: '✅',
    glow: 'shadow-emerald-100',
  },
  medium: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    icon: '⚠️',
    glow: 'shadow-amber-100',
  },
  high: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-700',
    icon: '🔴',
    glow: 'shadow-red-100',
  },
}

export default function SleepTest() {
  const t = useTranslation()
  const questions = t.test.questions

  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedOption, setSelectedOption] = useState<TestOption | null>(null)
  const [done, setDone] = useState(false)
  const [animating, setAnimating] = useState(false)

  const totalScore = answers.reduce((sum, s) => sum + s, 0)
  const riskLevel = getRiskLevel(totalScore)
  const result = t.test.results[riskLevel]
  const config = RESULT_CONFIG[riskLevel]
  const progress = ((step + 1) / questions.length) * 100

  function handleNext() {
    if (!selectedOption || animating) return
    setAnimating(true)
    const newAnswers = [...answers, selectedOption.score]

    setTimeout(() => {
      if (step + 1 >= questions.length) {
        setAnswers(newAnswers)
        setDone(true)
      } else {
        setAnswers(newAnswers)
        setStep(step + 1)
        setSelectedOption(null)
      }
      setAnimating(false)
    }, 200)
  }

  function handleRestart() {
    setStep(0)
    setAnswers([])
    setSelectedOption(null)
    setDone(false)
  }

  return (
    <section id="test" className="relative bg-brand-dark py-24 overflow-hidden">

      {/* Abstract background — concentric arcs */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[80, 160, 240, 320, 400, 480].map((r, i) => (
          <circle key={i} cx="720" cy="300" r={r} stroke="white" strokeWidth="1" />
        ))}
      </svg>

      {/* Blob top right */}
      <svg
        className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.05] pointer-events-none"
        viewBox="0 0 384 384"
        fill="none"
      >
        <path
          d="M192 40 C270 30 350 90 360 170 C370 250 310 330 230 345 C150 360 70 310 50 230 C30 150 70 55 150 40 C164 37 178 41 192 40Z"
          fill="white"
        />
      </svg>

      {/* Dot grid bottom left */}
      <svg
        className="absolute bottom-10 left-10 w-32 h-32 opacity-10 pointer-events-none"
        viewBox="0 0 128 128"
        fill="white"
      >
        {[0, 1, 2, 3].flatMap(row =>
          [0, 1, 2, 3].map(col => (
            <circle key={`${row}-${col}`} cx={col * 32 + 16} cy={row * 32 + 16} r="3" />
          ))
        )}
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-brand-primary/80 uppercase tracking-widest mb-3">
            Bepul STOP-BANG Test
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.test.title}</h2>
          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">{t.test.subtitle}</p>
        </div>

        {!done ? (
          <div className={`transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span className="text-white/40">Savol</span>
                <span className="text-white/60">{t.test.progress(step + 1, questions.length)}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div
                  className="bg-brand-primary h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Step indicators */}
              <div className="flex justify-between mt-3">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                      i < step
                        ? 'bg-brand-primary text-white scale-90'
                        : i === step
                        ? 'bg-white text-brand-dark ring-2 ring-brand-primary ring-offset-2 ring-offset-brand-dark'
                        : 'bg-white/10 text-white/30'
                    }`}
                  >
                    {i < step ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      i + 1
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Question card */}
            <QuestionCard
              question={questions[step]}
              selectedScore={selectedOption?.score ?? null}
              onSelect={setSelectedOption}
            />

            {/* Next button */}
            <div className="mt-5 flex justify-end">
              <Button
                onClick={handleNext}
                size="lg"
                disabled={selectedOption === null}
                className={selectedOption === null ? 'opacity-40 cursor-not-allowed' : ''}
              >
                {step + 1 < questions.length ? t.test.next : t.test.result}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        ) : (
          /* Result card */
          <div className={`rounded-3xl border-2 p-8 shadow-2xl ${config.bg} ${config.border} ${config.glow}`}>

            {/* Top decoration */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="text-5xl mb-4">{config.icon}</div>
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${config.badge}`}>
                {result.title}
              </span>
              <p className="text-content-base leading-relaxed max-w-sm">{result.message}</p>
            </div>

            {/* Score display */}
            <div className="bg-white/60 rounded-2xl p-4 mb-6 text-center">
              <p className="text-xs text-content-muted font-semibold uppercase tracking-wider mb-1">Umumiy ball</p>
              <p className="text-4xl font-bold text-brand-dark">
                {totalScore}
                <span className="text-lg font-normal text-content-muted"> / 8</span>
              </p>
              {/* Score bar */}
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2 relative">
                <div
                  className={`h-2 rounded-full transition-all duration-700 ${
                    riskLevel === 'low' ? 'bg-emerald-500' : riskLevel === 'medium' ? 'bg-amber-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${(totalScore / 8) * 100}%` }}
                />
                {/* Tier markers */}
                <div className="absolute top-0 h-2 w-0.5 bg-white/80" style={{ left: `${(2 / 8) * 100}%` }} />
                <div className="absolute top-0 h-2 w-0.5 bg-white/80" style={{ left: `${(4 / 8) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[10px] text-content-muted mt-1 px-0.5">
                <span>Past</span>
                <span>O'rtacha</span>
                <span>Yuqori</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${t.location.phone.replace(/\s/g, '')}`} className="flex-1">
                <Button className="w-full justify-center">{t.test.contact}</Button>
              </a>
              <Button variant="outline" onClick={handleRestart} className="flex-1 justify-center border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white">
                {t.test.restart}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
