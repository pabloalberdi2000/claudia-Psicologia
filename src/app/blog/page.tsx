'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getBlogPosts } from '@/lib/contentful'

const CATEGORIES = [
  { label: 'Todos', value: 'todos', icon: '📚' },
  { label: 'Salud Mental', value: 'Salud Mental', icon: '🧠' },
  { label: 'Relaciones', value: 'Relaciones', icon: '💑' },
  { label: 'Crecimiento Personal', value: 'Crecimiento Personal', icon: '🌱' },
]

export default function BlogIndex() {
  const [posts, setPosts] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true)
      const allPosts = await getBlogPosts(100)
      setPosts(allPosts)
      setIsLoading(false)
    }
    loadPosts()
  }, [])

  const filteredPosts = selectedCategory === 'todos'
    ? posts
    : posts.filter(post => post.fields.category === selectedCategory)

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

      {/* Category Filter */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Filtra por categoría</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full font-label-md transition-all flex items-center gap-2 ${
                  selectedCategory === category.value
                    ? 'bg-secondary text-on-secondary shadow-md'
                    : 'bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-surface-container hover:border-secondary'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-on-surface-variant font-body-md mb-stack-md">
          {filteredPosts.length === 0
            ? 'No hay artículos en esta categoría'
            : `${filteredPosts.length} artículo${filteredPosts.length !== 1 ? 's' : ''} encontrado${filteredPosts.length !== 1 ? 's' : ''}`
          }
        </p>

        {/* Blog Posts Grid */}
        {!isLoading && filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {filteredPosts.map((post) => (
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
        ) : isLoading ? (
          <div className="tonal-card p-stack-md rounded-xl text-center py-16">
            <p className="text-on-surface-variant font-body-md">Cargando artículos...</p>
          </div>
        ) : (
          <div className="tonal-card p-stack-md rounded-xl text-center py-16">
            <p className="text-on-surface-variant font-body-md mb-4">
              No hay artículos disponibles en esta categoría.
            </p>
            <button
              onClick={() => setSelectedCategory('todos')}
              className="inline-block px-6 py-3 bg-secondary text-on-secondary rounded-full font-label-md hover:scale-105 transition-transform"
            >
              Ver todos los artículos
            </button>
          </div>
        )}
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
