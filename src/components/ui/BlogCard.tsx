import { Link } from 'react-router-dom'
import type { BlogPost } from '../../types'

interface BlogCardProps {
  post: BlogPost
  readMoreLabel: string
  view?: 'grid' | 'list'
}

const Placeholder = () => (
  <svg viewBox="0 0 320 180" className="w-full h-full" fill="none">
    <rect width="320" height="180" fill="#E8F1FB" />
    <circle cx="80" cy="90" r="55" fill="#1B5EC9" opacity="0.08" />
    <circle cx="240" cy="60" r="40" fill="#1B5EC9" opacity="0.06" />
    <circle cx="200" cy="140" r="30" fill="#0D1F3C" opacity="0.05" />
    <path d="M0 130 Q80 100 160 130 Q240 160 320 130 L320 180 L0 180Z" fill="#1B5EC9" opacity="0.06" />
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#1B5EC9" opacity="0.2" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">
      Sokin Uyqu Blog
    </text>
  </svg>
)

export default function BlogCard({ post, readMoreLabel, view = 'grid' }: BlogCardProps) {
  if (view === 'list') {
    return (
      <Link to={`/blog/${post.slug}`} className="group flex gap-5 rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 p-4">
        <div className="shrink-0 w-36 sm:w-48 aspect-video rounded-xl overflow-hidden bg-brand-secondary">
          {post.imageUrl ? (
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <Placeholder />
          )}
        </div>
        <div className="flex flex-col justify-center min-w-0 py-1">
          <span className="text-xs text-content-muted font-medium mb-1.5">{post.date}</span>
          <h3 className="text-[15px] font-bold text-brand-dark leading-snug mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-content-muted leading-relaxed line-clamp-2 hidden sm:block">{post.excerpt}</p>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
            {readMoreLabel}
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative w-full aspect-video bg-brand-secondary overflow-hidden">
        {post.imageUrl ? (
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <Placeholder />
        )}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-content-muted text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {post.date}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[15px] font-bold text-brand-dark leading-snug mb-2 group-hover:text-brand-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-content-muted leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-dark transition-colors group/btn">
          {readMoreLabel}
          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
