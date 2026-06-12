import { Document } from '@contentful/rich-text-types'

/**
 * BlogPost Content Type desde Contentful
 * Corresponde con el Content Type 'blogPost' en Contentful
 */
export interface BlogPost {
  sys: {
    id: string
    createdAt?: string
    updatedAt?: string
    publishedAt?: string
  }
  fields: {
    title: string
    slug: string
    excerpt: string
    category: 'Salud Mental' | 'Relaciones' | 'Crecimiento Personal' | string
    content: Document | string // Document para Rich Text, string para markdown
    publishedAt: string
    author: string
    readTime?: string // Ej: "8 min"
    keywords?: string
    tags?: string[] | string // Array o string separado por comas
  }
}

export interface BlogPostEntry {
  items: BlogPost[]
  total: number
  skip: number
  limit: number
}

/**
 * Extended BlogPost con metadatos calculados
 * Usado en la UI para tener información completa
 */
export interface BlogPostWithMeta extends BlogPost {
  readingTimeMinutes?: number
  estimatedReadTime?: string
}

