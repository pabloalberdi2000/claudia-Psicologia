# 🧠 cgapsicologia - Guía de Desarrollo

Este documento contiene instrucciones para futuros desarrollos y mantenimiento del proyecto.

## Índice

1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Convenciones de Código](#convenciones-de-código)
3. [Modificaciones Comunes](#modificaciones-comunes)
4. [Agregar Nuevas Páginas](#agregar-nuevas-páginas)
5. [Integración de Contenido Dinámico](#integración-de-contenido-dinámico)
6. [Testing](#testing)
7. [Deploy](#deploy)

---

## Estructura del Proyecto

### Directorio `src/app/`

Cada carpeta es una **ruta**. Las páginas usan React Server Components por defecto.

```
src/app/
├── layout.tsx              # Layout raíz (Navbar, Footer, WhatsApp)
├── page.tsx                # / (home)
├── sobre-mi/page.tsx       # /sobre-mi
├── servicios/page.tsx      # /servicios
├── terapia-online/page.tsx # /terapia-online
└── contacto/page.tsx       # /contacto
```

### Directorio `src/components/`

Componentes reutilizables. La mayoría usan `'use client'` excepto layouts.

```
src/components/
├── Navbar.tsx              # Menú principal
├── Footer.tsx              # Pie de página
├── WhatsAppButton.tsx      # Botón flotante
└── RichTextRenderer.tsx    # Para Contentful
```

### Directorio `src/styles/`

```
src/styles/
└── globals.css             # Estilos globales (@tailwind, variables)
```

### Directorio `src/lib/` y `src/types/`

```
src/lib/
└── contentful.ts           # Cliente Contentful y funciones fetch

src/types/
└── contentful.ts           # Tipos TypeScript para Contentful
```

---

## Convenciones de Código

### ✅ DO's

- **TypeScript siempre**: Todas las páginas y componentes con `.tsx`
- **Nombres descriptivos**: `WhatsAppButton` no `Button`, `RichTextRenderer` no `Renderer`
- **Components sin lógica compleja**: Logic en custom hooks si necesario
- **Tailwind solo**: Sin CSS módulos ni estilos en línea (excepto `globals.css`)
- **Colores brand**: Usar siempre `brand-dark`, `brand-gold`, `brand-light`
- **Comentarios mínimos**: Solo cuando el **por qué** no es obvio

### ❌ DON'Ts

- No importar from `@/components/ui` (no UI library)
- No agregar `position: absolute` sin antes considerar Tailwind
- No hardcodear números (máximo ancho 1024px → `max-w-6xl`)
- No cambiar `tailwind.config.ts` sin documentar
- No agregar nuevas dependencias sin considerar bundle size

---

## Modificaciones Comunes

### Cambiar el número de WhatsApp

Actualizar en 3 lugares:

1. **`src/components/WhatsAppButton.tsx`**
   ```typescript
   const whatsappNumber = '34666666666' // Cambiar aquí
   ```

2. **`src/components/Footer.tsx`**
   ```tsx
   <a href="https://wa.me/34666666666" ...>
   ```

3. **`src/app/contacto/page.tsx`** (2 lugares)
   ```tsx
   href="https://wa.me/34666666666?text=..."
   ```

### Cambiar teléfono o email

Buscar y reemplazar en:
- `src/components/Footer.tsx`
- `src/app/contacto/page.tsx`
- `.env.example`

### Actualizar tarifas

En `src/app/page.tsx`, sección "Tarifas":

```tsx
<div key={idx} className="p-8 ...">
  <span className="text-5xl font-bold text-brand-gold">50€</span>
  <p>50 minutos</p>
  {/* ... actualizar estos valores ... */}
</div>
```

### Cambiar colores brand

En `tailwind.config.ts`:

```typescript
colors: {
  brand: {
    dark: '#1A3F49',    // Cambiar aquí
    gold: '#C5A85A',    // Cambiar aquí
    light: '#F9F9F7',   // Cambiar aquí
  },
}
```

Luego limpiar cache: `rm -rf .next && npm run dev`

### Agregar nuevos iconos

Las páginas usan emojis string (ej: `👤`, `💬`, etc.). Para cambiar:

```tsx
<div className="text-5xl mb-4">👤</div> {/* Cambiar emoji aquí */}
```

O integrar librería de iconos (ej: `heroicons`):

```bash
npm install @heroicons/react
```

```tsx
import { UserIcon } from '@heroicons/react/24/solid'

<UserIcon className="w-12 h-12 text-brand-gold" />
```

---

## Agregar Nuevas Páginas

### Plantilla Básica

```typescript
// src/app/nueva-pagina/page.tsx

export default function NuevaPagina() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Título
          </h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Tu contenido aquí */}
        </div>
      </section>
    </>
  )
}
```

### Agregar a Navbar

Editar `src/components/Navbar.tsx`:

```tsx
<Link href="/nueva-pagina" className="text-brand-dark hover:text-brand-gold">
  Nueva Página
</Link>
```

---

## Integración de Contenido Dinámico

### Con Contentful

1. **Crear Blog Page** (`src/app/blog/page.tsx`):

```typescript
import { getBlogPosts } from '@/lib/contentful'
import Link from 'next/link'

export default async function BlogIndex() {
  const posts = await getBlogPosts(10)

  return (
    <>
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark mb-12">
            Blog de Psicología
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.sys.id}
                href={`/blog/${post.fields.slug}`}
                className="p-6 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-bold text-brand-dark mb-2">
                  {post.fields.title}
                </h2>
                <p className="text-brand-dark text-opacity-70 text-sm mb-4">
                  {post.fields.excerpt}
                </p>
                <p className="text-xs text-brand-gold">
                  {new Date(post.fields.publishedAt).toLocaleDateString('es-ES')}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
```

2. **Crear Blog Post Detail** (`src/app/blog/[slug]/page.tsx`):

```typescript
import { getBlogPostBySlug } from '@/lib/contentful'
import RichTextRenderer from '@/components/RichTextRenderer'
import { notFound } from 'next/navigation'

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article className="py-20 px-6 bg-brand-light">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            {post.fields.title}
          </h1>
          <p className="text-sm text-brand-gold mb-8">
            Por {post.fields.author} • {new Date(post.fields.publishedAt).toLocaleDateString('es-ES')}
          </p>

          <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg">
            <RichTextRenderer document={post.fields.content} />
          </div>
        </div>
      </article>
    </>
  )
}
```

3. **Actualizar Navbar** para agregar link a blog

---

## Testing

### Instalación

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### Ejemplo: Test de Navbar

```typescript
// src/components/__tests__/Navbar.test.tsx
import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('cgapsicologia')).toBeInTheDocument()
  })
})
```

### Ejecutar tests

```bash
npm test
```

---

## Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel login
vercel
```

Vercel configura automáticamente Next.js.

### Netlify

1. Conectar repo a Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment: Copiar variables `.env.local`

### GitHub Pages (No recomendado para Next.js dinámico)

Si SOLO usas Static Generation:

```bash
npm run build
npm run export
```

---

## 🔒 Variables de Entorno

Crear `.env.local` (NO subir a Git):

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=xxxxx
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=xxxxx
NEXT_PUBLIC_WHATSAPP_NUMBER=34666666666
NEXT_PUBLIC_PHONE_NUMBER=+34 666 666 666
NEXT_PUBLIC_EMAIL=contacto@cgapsicologia.es
```

---

## 📊 Performance Checklist

Antes de deploy:

- [ ] `npm run build` sin errores
- [ ] Lighthouse Score > 90
- [ ] Todos los links internos funcionar
- [ ] Formulario de contacto testear
- [ ] WhatsApp button clickeable en móvil
- [ ] Dark mode (si aplica)

---

## 🆘 Troubleshooting

### Errores comunes

**"Cannot find module '@/components/..."**
→ Verificar ruta y nombres exactos en imports

**Estilos Tailwind no se aplican**
→ `rm -rf .next && npm run dev`

**Build lento**
→ Revisar imports innecesarios, split code mejor

---

**Última actualización:** Mayo 2026  
**Versión:** 1.0.0
