import { useState } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import BlogCard from '../components/ui/BlogCard'
import { mockBlogPosts } from '../data/mockBlogPosts'

type View = 'grid' | 'list'

function GridIcon({ active }: { active: boolean }) {
  return (
    <svg className={`w-5 h-5 transition-colors ${active ? 'text-brand-primary' : 'text-content-muted'}`} fill="currentColor" viewBox="0 0 20 20">
      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )
}

function ListIcon({ active }: { active: boolean }) {
  return (
    <svg className={`w-5 h-5 transition-colors ${active ? 'text-brand-primary' : 'text-content-muted'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export default function Blog() {
  const t = useTranslation()
  const [view, setView] = useState<View>('grid')

  return (
    <div className="min-h-screen bg-brand-light pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
              SilentSleep
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-brand-dark">
              {t.blog.title}
            </h1>
          </div>

          {/* View toggle */}
          <div className="flex items-center gap-1 bg-white border border-gray-100 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg transition-colors ${view === 'grid' ? 'bg-brand-secondary' : 'hover:bg-gray-50'}`}
              aria-label="Grid view"
            >
              <GridIcon active={view === 'grid'} />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg transition-colors ${view === 'list' ? 'bg-brand-secondary' : 'hover:bg-gray-50'}`}
              aria-label="List view"
            >
              <ListIcon active={view === 'list'} />
            </button>
          </div>
        </div>

        {/* Posts */}
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} readMoreLabel={t.blog.readMore} view="grid" />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {mockBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} readMoreLabel={t.blog.readMore} view="list" />
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
