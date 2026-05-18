import { createClient } from 'contentful'

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
      limit,
      order: '-fields.publishedAt',
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
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
    return entries.items[0] || null
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error)
    return null
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
