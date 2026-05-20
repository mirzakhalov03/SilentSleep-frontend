import { useTranslation } from '../../hooks/useTranslation'
import BlogCard from '../ui/BlogCard'

export default function Blog() {
  const t = useTranslation()

  return (
    <section className="relative bg-brand-light py-24 overflow-hidden">

      {/* Abstract mesh background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Horizontal lines */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1440" y2={i * 100} stroke="#0D1F3C" strokeWidth="1" />
        ))}
        {/* Vertical lines */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
          <line key={`v${i}`} x1={i * 200} y1="0" x2={i * 200} y2="500" stroke="#0D1F3C" strokeWidth="1" />
        ))}
        {/* Intersection dots */}
        {[0, 1, 2, 3, 4, 5].flatMap(row =>
          [0, 1, 2, 3, 4, 5, 6, 7].map(col => (
            <circle key={`d${row}-${col}`} cx={col * 200} cy={row * 100} r="3" fill="#0D1F3C" />
          ))
        )}
      </svg>

      {/* Large faint blob — top left */}
      <svg
        className="absolute -top-20 -left-20 w-80 h-80 opacity-[0.06] pointer-events-none"
        viewBox="0 0 320 320"
        fill="none"
      >
        <path
          d="M160 30 C220 20 290 70 300 140 C310 210 260 280 195 295 C130 310 60 270 40 205 C20 140 50 50 115 32 C132 27 146 32 160 30Z"
          fill="#1B5EC9"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">
              Yangiliklar
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">{t.blog.title}</h2>
          </div>
          <button className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors group">
            {t.blog.viewAll}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.blog.posts.map((post) => (
            <BlogCard key={post.id} post={post} readMoreLabel={t.blog.readMore} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors">
            {t.blog.viewAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
