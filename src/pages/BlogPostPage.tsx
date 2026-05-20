import { Link, useParams } from 'react-router-dom'
import { mockBlogPosts } from '../data/mockBlogPosts'

const PlaceholderHero = () => (
  <svg viewBox="0 0 1200 500" className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice">
    <rect width="1200" height="500" fill="#E8F1FB" />
    <circle cx="200" cy="250" r="200" fill="#1B5EC9" opacity="0.06" />
    <circle cx="1000" cy="150" r="180" fill="#1B5EC9" opacity="0.05" />
    <circle cx="700" cy="400" r="150" fill="#0D1F3C" opacity="0.04" />
    <path d="M0 380 Q300 320 600 380 Q900 440 1200 380 L1200 500 L0 500Z" fill="#1B5EC9" opacity="0.06" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#1B5EC9" opacity="0.15" fontSize="28" fontFamily="Inter, sans-serif" fontWeight="700">
      SilentSleep Blog
    </text>
  </svg>
)

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = mockBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-light flex flex-col items-center justify-center gap-4 pt-16">
        <p className="text-xl font-semibold text-brand-dark">Maqola topilmadi</p>
        <Link to="/blog" className="text-sm text-brand-primary hover:underline">← Blogga qaytish</Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-white">

      {/* Hero image */}
      <div className="w-full aspect-[21/9] max-h-[480px] overflow-hidden bg-brand-secondary">
        {post.imageUrl ? (
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <PlaceholderHero />
        )}
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">

        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-content-muted hover:text-brand-primary transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Blogga qaytish
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center shrink-0">
            <svg className="w-4 h-4 text-brand-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold text-brand-dark">{post.author}</span>
            <div className="flex items-center gap-2 text-xs text-content-muted">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-brand-dark leading-tight mb-8">
          {post.title}
        </h1>

        {/* Body */}
        <div className="space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base text-content-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

      </div>
    </article>
  )
}
