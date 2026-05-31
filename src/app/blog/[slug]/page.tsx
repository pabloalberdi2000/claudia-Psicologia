import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPostBySlug, getBlogPosts } from '@/lib/contentful'
import RichTextRenderer from '@/components/RichTextRenderer'
import MarkdownRenderer from '@/components/MarkdownRenderer'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Artículo no encontrado',
    }
  }

  return {
    title: `${post.fields.title} | Blog de Psicología`,
    description: post.fields.excerpt,
    keywords: post.fields.keywords || post.fields.category,
    authors: [{ name: 'Claudia González Álvarez' }],
    openGraph: {
      title: post.fields.title,
      description: post.fields.excerpt,
      type: 'article',
      publishedTime: post.fields.publishedAt,
      authors: ['Claudia González Álvarez'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.fields.title,
      description: post.fields.excerpt,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts(100)
  return posts.map((post) => ({
    slug: post.fields.slug,
  }))
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const allPosts = await getBlogPosts(100)
  const relatedPosts = allPosts.slice(0, 3).filter((p) => p.fields.slug !== params.slug)

  return (
    <>
      {/* Breadcrumb */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4">
        <div className="flex items-center gap-2 text-label-sm">
          <Link href="/" className="text-secondary hover:underline">
            Inicio
          </Link>
          <span className="text-on-surface-variant">/</span>
          <Link href="/blog" className="text-secondary hover:underline">
            Blog
          </Link>
          <span className="text-on-surface-variant">/</span>
          <span className="text-on-surface-variant">{post.fields.title}</span>
        </div>
      </section>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop py-stack-md">
        <div className="space-y-6 mb-stack-lg">
          {/* Category */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-label-sm font-bold">
              {post.fields.category || 'Artículo'}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            {post.fields.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-body-md border-b border-outline-variant/20 pb-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">calendar_today</span>
              <time>
                {new Date(post.fields.publishedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">schedule</span>
              <span>{post.fields.readTime || '5 min'} de lectura</span>
            </div>
            {post.fields.author && (
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">person</span>
                <span>{post.fields.author}</span>
              </div>
            )}
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-none mb-stack-lg">
          {post.fields.content ? (
            typeof post.fields.content === 'string' ? (
              <MarkdownRenderer content={post.fields.content} />
            ) : (
              <RichTextRenderer document={post.fields.content} />
            )
          ) : (
            <p className="text-on-surface-variant">{post.fields.excerpt}</p>
          )}
        </div>

        {/* Article Footer */}
        <div className="border-t border-outline-variant/20 pt-8 mt-stack-lg">
          {/* Tags */}
          {post.fields.tags && post.fields.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="font-headline-sm text-primary mb-3">Etiquetas</h3>
              <div className="flex flex-wrap gap-2">
                {post.fields.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-label-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="bg-surface-container-low p-6 rounded-xl mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h4 className="font-headline-sm text-primary mb-2">Claudia González Álvarez</h4>
                <p className="text-on-surface-variant font-body-md">
                  Psicóloga General Sanitaria especializada en terapia online. Con enfoque integrativo basado en evidencia científica, combino técnicas de terapia cognitivo-conductual, mindfulness y ACT para acompañar a mis pacientes en su camino hacia el bienestar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-container-low py-stack-lg">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-stack-md">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Artículos relacionados</h2>
              <div className="w-12 h-1 bg-secondary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.sys.id}
                  href={`/blog/${relatedPost.fields.slug}`}
                  className="tonal-card p-stack-md rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-label-sm font-bold mb-3">
                      {relatedPost.fields.category}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {relatedPost.fields.title}
                    </h3>
                    <p className="text-on-surface-variant font-body-md text-sm mb-3 line-clamp-2">
                      {relatedPost.fields.excerpt}
                    </p>
                    <time className="text-label-sm text-on-surface-variant">
                      {new Date(relatedPost.fields.publishedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">
            ¿Te ha resultado útil este artículo?
          </h2>
          <p className="font-body-md text-on-primary-container mb-4">
            Si tienes dudas o quieres profundizar en este tema, puedo ayudarte con una sesión personalizada.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-md hover:bg-secondary-fixed-dim transition-colors"
          >
            Agendar consulta
          </Link>
        </div>
      </section>
    </>
  )
}
