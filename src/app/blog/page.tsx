import Link from 'next/link'
import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/contentful'

export const metadata: Metadata = {
  title: 'Blog de Psicología | Artículos sobre Terapia, Ansiedad y Bienestar',
  description: 'Lee artículos educativos sobre psicología, terapia online, manejo de ansiedad, estrés, relaciones y crecimiento personal. Consejos de una psicóloga general sanitaria.',
  keywords: 'blog psicología, artículos terapia, ansiedad, estrés, relaciones, crecimiento personal, mindfulness, bienestar emocional',
  openGraph: {
    title: 'Blog de Psicología | Claudia González',
    description: 'Artículos educativos sobre terapia, ansiedad, estrés y bienestar emocional',
    type: 'website',
  },
}

const POSTS_PER_PAGE = 5

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const allPosts = await getBlogPosts(100)

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const paginatedPosts = allPosts.slice(startIndex, endIndex)

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-sm">
        <div className="space-y-stack-sm text-center">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Blog de Psicología
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Artículos educativos sobre terapia, salud mental y bienestar emocional
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {paginatedPosts.map((post) => (
                <Link
                  key={post.sys.id}
                  href={`/blog/${post.fields.slug}`}
                  className="tonal-card p-stack-md rounded-xl hover:shadow-lg transition-shadow group"
                >
                  <div className="flex flex-col h-full">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-label-sm font-bold">
                        {post.fields.category || 'Artículo'}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                      {post.fields.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-on-surface-variant font-body-md mb-4 flex-grow line-clamp-3">
                      {post.fields.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20">
                      <time className="text-label-sm text-on-surface-variant">
                        {new Date(post.fields.publishedAt).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="text-label-sm text-secondary">
                        {post.fields.readTime || '5 min'} lectura
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-stack-lg">
                {/* Previous Button */}
                {currentPage > 1 && (
                  <Link
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    ← Anterior
                  </Link>
                )}

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      page === currentPage
                        ? 'bg-secondary text-on-secondary font-bold'
                        : 'border border-outline-variant text-on-surface-variant hover:border-secondary'
                    }`}
                  >
                    {page}
                  </Link>
                ))}

                {/* Next Button */}
                {currentPage < totalPages && (
                  <Link
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-4 py-2 border border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-colors"
                  >
                    Siguiente →
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="tonal-card p-stack-md rounded-xl text-center py-16">
            <p className="text-on-surface-variant font-body-md mb-4">
              Próximamente habrá artículos disponibles sobre psicología y bienestar.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-secondary text-on-secondary rounded-full font-label-md hover:scale-105 transition-transform"
            >
              Volver al inicio
            </Link>
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Categorías</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-4xl mx-auto">
            <Link href="/blog" className="tonal-card p-stack-md rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🧠</div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Salud Mental</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-2">Artículos sobre ansiedad, depresión y bienestar</p>
            </Link>
            <Link href="/blog" className="tonal-card p-stack-md rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💑</div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Relaciones</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-2">Consejos para mejorar relaciones personales</p>
            </Link>
            <Link href="/blog" className="tonal-card p-stack-md rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Crecimiento Personal</h3>
              <p className="text-on-surface-variant font-body-md text-sm mt-2">Desarrollo personal y autoconocimiento</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">
            ¿Tienes dudas o necesitas ayuda?
          </h2>
          <p className="font-body-md text-on-primary-container mb-4">
            Contacta conmigo para agendar tu sesión gratuita.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-md hover:bg-secondary-fixed-dim transition-colors"
          >
            Reservar sesión
          </Link>
        </div>
      </section>
    </>
  )
}
