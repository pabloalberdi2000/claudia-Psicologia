import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPostBySlug } from '@/lib/contentful'
import RichTextRenderer from '@/components/RichTextRenderer'
import MarkdownRenderer from '@/components/MarkdownRenderer'

/**
 * Fuerza a que SIEMPRE consulte Contentful sin caché
 * revalidate: 0 = Server-Side Rendering (fresco cada vez)
 */
export const revalidate = 0

interface Props {
  params: {
    slug: string
  }
}

/**
 * Generar metadata dinámicamente para SEO
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
      description: 'El artículo que buscas no existe',
    }
  }

  return {
    title: `${post.fields.title} | Blog de Psicología`,
    description: post.fields.excerpt,
    keywords: post.fields.keywords || `psicología, ${post.fields.category}`,
    authors: [{ name: post.fields.author }],
    openGraph: {
      title: post.fields.title,
      description: post.fields.excerpt,
      type: 'article',
      publishedTime: post.fields.publishedAt,
      authors: [post.fields.author],
    },
    alternates: {
      canonical: `https://cgapsicologia.com/blog/${post.fields.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const {
    title,
    excerpt,
    author,
    category,
    publishedAt,
    readTime,
    content,
  } = post.fields

  // Calcular fecha formateada
  const publishDate = new Date(publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 bg-brand-gold/20 text-brand-gold rounded-full text-sm font-semibold">
              {category || 'Artículo'}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-brand-dark mb-6 leading-tight">
            {title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-brand-dark/70 text-sm">
            <div className="flex items-center gap-2">
              <span>✍️</span>
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <time dateTime={publishedAt}>{publishDate}</time>
            </div>
            {readTime && (
              <div className="flex items-center gap-2">
                <span>⏱️</span>
                <span>{readTime} lectura</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          <p className="mt-6 text-xl text-brand-dark/80 italic border-l-4 border-brand-gold pl-6">
            {excerpt}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Rich Text Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {typeof content === 'string' ? (
              // Si es markdown plano (de defaultBlogPosts)
              <MarkdownRenderer content={content} />
            ) : (
              // Si es Rich Text de Contentful
              <RichTextRenderer document={content} />
            )}
          </div>

          {/* Author Bio Section */}
          <div className="bg-brand-light p-8 rounded-lg border-l-4 border-brand-gold mt-16 mb-12">
            <h3 className="text-xl font-bold text-brand-dark mb-2">
              Sobre el autor
            </h3>
            <p className="text-brand-dark/80">
              <strong>{author}</strong> es una psicóloga general sanitaria especializada en terapia online.
              Ofrece sesiones de psicoterapia para adultos, adolescentes y familias.
            </p>
          </div>

          {/* Tags */}
          {post.fields.tags && (
            <div className="mb-12">
              <h3 className="text-lg font-bold text-brand-dark mb-4">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(post.fields.tags)
                  ? post.fields.tags
                  : post.fields.tags.split(',').map((t: string) => t.trim())
                ).map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-brand-gold/20 text-brand-gold rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-brand-dark text-white p-12 rounded-lg text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas ayuda profesional?
            </h3>
            <p className="mb-6 text-gray-100">
              Si resonaste con este artículo, te invito a contactarme para una sesión de terapia gratuita.
            </p>
            <Link
              href="/contacto"
              className="inline-block px-8 py-3 bg-brand-gold text-brand-dark rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Reservar sesión gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts Section (Optional) */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Más artículos
          </h2>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-brand-gold text-brand-dark rounded-full font-bold hover:scale-105 transition-transform"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
