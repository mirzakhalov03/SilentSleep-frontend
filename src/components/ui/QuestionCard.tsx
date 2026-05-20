import type { TestQuestion, TestOption } from '../../types'

interface QuestionCardProps {
  question: TestQuestion
  selectedScore: number | null
  onSelect: (option: TestOption) => void
}

export default function QuestionCard({ question, selectedScore, onSelect }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <p className="text-lg font-bold text-brand-dark mb-6 leading-snug">{question.question}</p>
      <ul className="space-y-3">
        {question.options.map((option, i) => {
          const selected = selectedScore === option.score
          return (
            <li key={i}>
              <button
                onClick={() => onSelect(option)}
                className={`w-full text-left px-5 py-4 rounded-2xl border-2 text-sm font-medium transition-all duration-150 flex items-center gap-3 ${
                  selected
                    ? 'border-brand-primary bg-brand-secondary text-brand-primary'
                    : 'border-gray-100 bg-brand-light text-content-base hover:border-brand-primary/40 hover:bg-brand-secondary/50'
                }`}
              >
                <span className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                  selected ? 'border-brand-primary bg-brand-primary' : 'border-gray-300'
                }`}>
                  {selected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  )}
                </span>
                {option.label}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
