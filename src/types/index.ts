export type Lang = 'uz' | 'ru'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  imageUrl: string
  slug: string
}

export interface RichBlogPost extends BlogPost {
  author: string
  readTime: string
  content: string[]
}

export interface TestQuestion {
  id: number
  question: string
  options: TestOption[]
}

export interface TestOption {
  label: string
  score: number
}

export type RiskLevel = 'low' | 'medium' | 'high'
