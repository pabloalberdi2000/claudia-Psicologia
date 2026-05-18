import { Document } from '@contentful/rich-text-types'

export interface BlogPost {
  sys: {
    id: string
  }
  fields: {
    title: string
    slug: string
    excerpt: string
    content: Document
    publishedAt: string
    author: string
  }
}

export interface BlogPostEntry {
  items: BlogPost[]
  total: number
  skip: number
  limit: number
}
