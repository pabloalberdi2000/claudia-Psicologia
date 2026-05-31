import { createClient } from 'contentful'
import { defaultBlogPosts } from '@/data/defaultBlogPosts'

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || ''
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ''

let contentfulClient: any

function getClient() {
  if (!contentfulClient) {
    contentfulClient = createClient({
      space: spaceId,
      accessToken,
    })
  }
  return contentfulClient
}

export async function getBlogPosts(limit: number = 10): Promise<any[]> {
  try {
    const client = getClient()
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 100,
      order: '-fields.publishedAt',
    })

    // Combina artículos de Contentful con los por defecto
    const allPosts = [...entries.items, ...defaultBlogPosts]

    // Ordena por fecha (más reciente primero)
    const sortedPosts = allPosts.sort((a, b) => {
      const dateA = new Date(a.fields.publishedAt).getTime()
      const dateB = new Date(b.fields.publishedAt).getTime()
      return dateB - dateA
    })

    // Retorna solo la cantidad límite
    return sortedPosts.slice(0, limit)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Si hay error con Contentful, devuelve los artículos por defecto
    return defaultBlogPosts.slice(0, limit)
  }
}

export async function getBlogPostBySlug(slug: string): Promise<any | null> {
  try {
    const client = getClient()
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    if (entries.items.length > 0) {
      return entries.items[0]
    }

    // Si no encuentra en Contentful, busca en los artículos por defecto
    const defaultPost = defaultBlogPosts.find((post) => post.fields.slug === slug)
    return defaultPost || null
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    // Si hay error, busca en los artículos por defecto
    const defaultPost = defaultBlogPosts.find((post) => post.fields.slug === slug)
    return defaultPost || null
  }
}

export async function getBlogPostById(id: string): Promise<any | null> {
  try {
    const client = getClient()
    const entry = await client.getEntry(id)
    return entry
  } catch (error) {
    console.error(`Error fetching blog post with id ${id}:`, error)
    return null
  }
}
