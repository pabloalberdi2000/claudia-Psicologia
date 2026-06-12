'use client'

import Link from 'next/link'
import { useState } from 'react'

interface Category {
  label: string
  value: string
  icon: string | null
}

interface Post {
  sys: { id: string }
  fields: {
    title: string
    slug: string
    excerpt: string
    category?: string
    publishedAt: string
    readTime?: string
  }
}

interface BlogFilterClientProps {
  posts: Post[]
  categories: Category[]
}

/**
 * Componente cliente para filtrado dinámico de blog posts
 * Recibe categorías detectadas automáticamente de los posts
 */
export default function BlogFilterClient({
  posts,
  categories,
}: BlogFilterClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  // Filtrar posts según categoría seleccionada
  const filteredPosts =
    selectedCategory === 'todos'
      ? posts
      : posts.filter((post) => post.fields.category === selectedCategory)

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      {/* Category Filter Buttons */}
      <div className="mb-stack-md">
        <h2 className="font-headline-sm text-headline-sm text-primary mb-4">
          Filtra por categoría
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-full font-label-md transition-all flex items-center gap-2 ${
                selectedCategory === category.value
                  ? 'bg-secondary text-on-secondary shadow-md'
                  : 'bg-surface-container-low text-on-surface-variant border border-outline-variant hover:bg-surface-container hover:border-secondary'
              }`}
              aria-pressed={selectedCategory === category.value}
            >
              {category.icon && <span className="text-lg">{category.icon}</span>}
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="text-on-surface-variant font-body-md mb-stack-md">
        {filteredPosts.length === 0
          ? 'No hay artículos en esta categoría'
          : `${filteredPosts.length} artículo${
              filteredPosts.length !== 1 ? 's' : ''
            } encontrado${filteredPosts.length !== 1 ? 's' : ''}`}
      </p>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {filteredPosts.map((post) => (
            <Link
              key={post.sys.id}
              href={`/blog/${post.fields.slug}`}
              className="tonal-card p-stack-md rounded-xl hover:shadow-lg transition-shadow group"
            >
              <div className="flex flex-col h-full">
                {/* Category Badge */}
                {post.fields.category && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary rounded-full text-label-sm font-bold">
                      {post.fields.category}
                    </span>
                  </div>
                )}

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
                    {new Date(post.fields.publishedAt).toLocaleDateString(
                      'es-ES',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </time>
                  <span className="text-label-sm text-secondary">
                    {post.fields.readTime || '5 min'} lectura
                  </span>
                </div>
              </div>
            </Link>
          ))}
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
  )
}
