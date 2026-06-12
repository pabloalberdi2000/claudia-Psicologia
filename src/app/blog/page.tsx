import Link from 'next/link'
import { getBlogPosts, getBlogCategories } from '@/lib/contentful'
import BlogFilterClient from '@/components/BlogFilterClient'

/**
 * Componente servidor para cargar datos del blog dinámicamente
 */
export default async function BlogIndex() {
  // Obtener todos los posts y categorías del sistema
  const allPosts = await getBlogPosts(100)
  const categories = await getBlogCategories()

  // Crear array de categorías sin iconos
  const categoriesWithIcons = [
    { label: 'Todos', value: 'todos', icon: null },
    ...categories.map((cat) => ({
      label: cat,
      value: cat,
      icon: null,
    })),
  ]

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

      {/* Category Filter - Componente Cliente */}
      <BlogFilterClient posts={allPosts} categories={categoriesWithIcons} />

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
