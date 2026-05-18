# 🧠 CG Psicología - Web Corporativa

Página web profesional para la psicóloga online **CG Psicología**, especializada en terapia online para adultos, familias e infancia-adolescencia.

## 🎨 Descripción del Proyecto

Sitio web moderno y minimalista que transmite **calma, confianza, profesionalidad y cercanía**. Diseñado con una estrategia clara de conversión: incentivar que los usuarios contacten para agendar una primera sesión gratuita de 30 minutos.

### Características Principales

✅ **Diseño Responsive y Accesible** - Optimizado para todos los dispositivos  
✅ **Identidad Visual Personalizada** - Basada en los colores del logotipo original  
✅ **Minimalismo Elegante** - Mucho aire blanco y tipografía clara  
✅ **CTA Estratégica** - Múltiples puntos de contacto (WhatsApp, teléfono, formulario)  
✅ **Terapia Online Destacada** - FAQs, proceso paso a paso, ventajas claras  
✅ **Integración Contentful** - Preparado para blog dinámico con Rich Text  
✅ **Performance Optimizado** - Next.js 14 con bundle minimal  

---

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| **Next.js 14** | Framework React con App Router y SSR |
| **Tailwind CSS** | Estilos responsive y totalmente customizado |
| **TypeScript** | Seguridad de tipos en todo el código |
| **Contentful API** | CMS Headless para blog y contenido dinámico |
| **React 19** | Librería UI moderna |

### Por qué estas tecnologías

- **Next.js 14**: App Router limpio, SSG/SSR automático, optimización de imágenes
- **Tailwind CSS**: Utility-first, customizable al máximo, excelente para diseños minimalistas
- **Contentful**: Flexible, API-first, perfecto para contenido editorial (blog)
- **Sin UI Library**: Bundle muy ligero, control total del diseño, sin dependencias innecesarias

---

## 📁 Estructura del Proyecto

```
cgapsicologia/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Layout global con Navbar y Footer
│   │   ├── page.tsx                # Página de inicio (hero + 5 secciones)
│   │   ├── sobre-mi/
│   │   │   └── page.tsx            # Página con biografía y formación
│   │   ├── servicios/
│   │   │   └── page.tsx            # Desglose de servicios por especialidad
│   │   ├── terapia-online/
│   │   │   └── page.tsx            # Proceso, ventajas y FAQs
│   │   └── contacto/
│   │       └── page.tsx            # Contacto directo + formulario
│   ├── components/
│   │   ├── Navbar.tsx              # Navegación responsive
│   │   ├── Footer.tsx              # Pie de página con info legal
│   │   ├── WhatsAppButton.tsx       # Botón flotante de WhatsApp
│   │   └── RichTextRenderer.tsx     # Renderizador Contentful Rich Text
│   └── styles/
│       └── globals.css             # Estilos globales
├── tailwind.config.ts              # Tema personalizado (colores brand)
├── next.config.js                  # Configuración Next.js
├── package.json                    # Dependencias
└── README.md                       # Este archivo
```

---

## 🎯 Páginas Incluidas

### 1️⃣ **Página de Inicio** (`/`)
- **Hero Potente**: Título principal + subtexto reconfortante + CTA clara
- **En qué puedo ayudarte**: 3 tarjetas (adultos, familia, infantil)
- **Sobre mí (Preview)**: Breve extracto + link a página completa
- **Beneficios de terapia online**: 6 iconos con ventajas
- **Tarifas**: 3 tarjetas (sesión gratis, individual, bono 4 sesiones)
- **CTA Final**: "Listo para empezar tu viaje"

### 2️⃣ **Sobre Mí** (`/sobre-mi`)
- Formación académica (UAM, UAX)
- Experiencia profesional (Álava Reyes, Clínica Elesebe)
- Áreas de especialización detalladas (4 columnas)
- Mi enfoque terapéutico basado en apego
- Colegiación profesional

### 3️⃣ **Servicios** (`/servicios`)
- Desglose de 3 servicios principales
- Motivos de consulta específicos para cada área (10 cada una)
- Proceso terapéutico en 4 pasos
- Metodología y técnicas usadas
- Duración y formato de sesiones

### 4️⃣ **Terapia Online** (`/terapia-online`)
- Cómo funciona en 4 pasos claros
- 6 ventajas de la terapia online
- **FAQs desplegables** (10 preguntas comunes)
- Requisitos técnicos y recomendaciones
- CTA a contacto

### 5️⃣ **Contacto** (`/contacto`)
- 3 opciones de contacto directo (WhatsApp, teléfono, email)
- **Formulario web completo** (nombre, email, teléfono, motivo, mensaje)
- Horarios y disponibilidad
- Integración futura con Formspree o SendGrid

---

## 🎨 Identidad Visual (Colores Brand)

Extraídos directamente del logotipo de CG Psicología:

```javascript
colors: {
  brand: {
    dark: '#1A3F49',   // Azul/verdoso profundo (encabezados, texto principal)
    gold: '#C5A85A',   // Dorado/ocre suave (acentos, detalles)
    light: '#F9F9F7',  // Blanco roto/crema (fondo principal)
  }
}
```

### Aplicación

- **brand-dark**: H1, H2, H3, texto principal, botones primarios
- **brand-gold**: Acentos, bordes finos, iconos, precios, enlaces hover
- **brand-light**: Fondo de página, tarjetas de contenido

---

## 🛠️ Instalación y Desarrollo

### Requisitos Previos

- Node.js 18+ (o superior)
- npm o yarn

### Instalación

```bash
# Clonar o descargar el proyecto
cd cgapsicologia

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Desarrollar
npm run dev
```

El servidor de desarrollo estará en `http://localhost:3000`

---

## 📝 Configuración de Contentful

Para habilitar el blog con Rich Text dinámico:

1. **Crear una cuenta en Contentful** (https://www.contentful.com)

2. **Crear un espacio** (o usar uno existente)

3. **Crear un Content Model llamado "BlogPost"** con campos:
   - `title` (Text)
   - `slug` (Text, único)
   - `excerpt` (Text)
   - `content` (Rich Text)
   - `publishedAt` (Date)
   - `author` (Text)

4. **Copiar credenciales** en `.env.local`:
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=tu_space_id
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=tu_access_token
   ```

5. **Crear un hook de fetch en `lib/contentful.ts`**:
   ```typescript
   import { createClient } from 'contentful'

   export const contentful = createClient({
     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
   })
   ```

6. **Usar RichTextRenderer** en páginas blog:
   ```typescript
   import RichTextRenderer from '@/components/RichTextRenderer'
   
   export default function BlogPost({ post }) {
     return <RichTextRenderer document={post.content} />
   }
   ```

---

## 🔌 Integración de Formulario de Contacto

El formulario está listo para conectar con servicios de email. Opciones:

### Opción 1: Formspree (Recomendado - Gratis)

```typescript
// En src/app/contacto/page.tsx, reemplazar handleSubmit:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  })
  if (response.ok) {
    setEnviado(true)
  }
}
```

### Opción 2: SendGrid

```typescript
// Instalar: npm install @sendgrid/mail
// Usar endpoint API en Next.js
```

### Opción 3: Resend (Email para Next.js)

```bash
npm install resend
```

---

## 📦 Build y Despliegue

### Build para Producción

```bash
npm run build
npm run start
```

### Despliegue en Vercel (Recomendado)

```bash
npm install -g vercel
vercel login
vercel
```

Vercel detectará automáticamente que es un proyecto Next.js y lo configurará correctamente.

### Despliegue en Netlify

1. Conectar repositorio GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## 🚀 Optimizaciones y Performance

✅ **Next.js Image Optimization** - Imágenes automáticamente optimizadas  
✅ **CSS Purging** - Tailwind elimina CSS sin usar  
✅ **Code Splitting** - Componentes cargados bajo demanda  
✅ **Static Generation** - Páginas pre-generadas en build  
✅ **Cache Headers** - Configurado para máximo rendimiento  

**Métricas esperadas:**
- Lighthouse Score: 95+
- Core Web Vitals: Green
- Bundle Size: ~60KB gzipped (sin imágenes)

---

## 🔐 Variables de Entorno

Crear archivo `.env.local` (copiar de `.env.example`):

```env
# Contentful (para blog)
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=xxxxx
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=xxxxx

# Contacto
NEXT_PUBLIC_WHATSAPP_NUMBER=34666666666
NEXT_PUBLIC_PHONE_NUMBER=+34 666 666 666
NEXT_PUBLIC_EMAIL=contacto@cgapsicologia.es

# Formspree (para formulario)
NEXT_PUBLIC_FORMSPREE_ID=xxxxx
```

> ⚠️ Variables con `NEXT_PUBLIC_` se envían al cliente. No incluir secretos ahí.

---

## 📱 Responsive Design

Breakpoints Tailwind usados:

- **Mobile**: < 768px (320px a 767px)
- **Tablet**: 768px a 1024px
- **Desktop**: > 1024px

Todas las páginas son 100% responsive con navegación móvil desplegable.

---

## ♿ Accesibilidad

- Alt text en imágenes (placeholders)
- ARIA labels en botones y formularios
- Contraste de colores WCAG AA
- Navegación por teclado funcional
- Sem-Semántica HTML5 correcta

---

## 📊 Componentes Principales

### **Navbar** (`src/components/Navbar.tsx`)
- Logo/marca clickeable
- Menú desktop horizontal
- Menú mobile desplegable
- Link destacado a contacto
- Sticky posicionamiento

### **Footer** (`src/components/Footer.tsx`)
- 3 columnas (marca, nav, contacto)
- Copyright dinámico
- Links legales (privacidad, términos, cookies)
- Fondo brand-dark

### **WhatsAppButton** (`src/components/WhatsAppButton.tsx`)
- Botón flotante fijo inferior derecha
- Ícono SVG WhatsApp
- Link pre-formateado a número
- Transiciones smooth

### **RichTextRenderer** (`src/components/RichTextRenderer.tsx`)
- Renderiza Rich Text de Contentful
- Estilos Tailwind personalizados
- Soporta: bold, italic, headings, listas, blockquotes, code
- Blog profesional sin configuración extra

---

## 🎯 Conversión y CTA

El diseño está optimizado para conversión:

1. **Hero inmediato** - Mensaje claro en primeros 300px
2. **Botón flotante WhatsApp** - Siempre accesible
3. **Múltiples CTAs** - En cada página, diferentes formatos
4. **Social Proof** - Beneficios, áreas de experiencia, formación
5. **Fácil contacto** - 4 formas (WhatsApp, tel, email, formulario)
6. **Sesión gratuita** - Eliminado barrera de entrada

---

## 🐛 Troubleshooting

### "Module not found" error
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Build lento
```bash
# Limpiar cache de Next.js
rm -rf .next
npm run build
```

### Estilos Tailwind no se aplican
- Verificar que `tailwind.config.ts` incluya rutas correctas en `content:`
- Ejecutar: `npm run dev` para hot-reload

---

## 📚 Documentación Útil

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Contentful JavaScript SDK](https://www.contentful.com/developers/docs/javascript/)
- [React Docs](https://react.dev)

---

## 📄 Licencia

Este proyecto es propiedad de CG Psicología. Uso exclusivamente autorizado para el sitio web de la psicóloga.

---

## 👨‍💻 Soporte y Cambios Futuros

### Mejoras Planeadas

- [ ] Blog dinámico con Contentful
- [ ] Sistema de reservas automático (Calendly integration)
- [ ] Testimonios de pacientes (sección dinámica)
- [ ] Página de recursos (artículos, guías en PDF)
- [ ] Newsletter subscription
- [ ] Analytics avanzado (GA4, Hotjar)
- [ ] Multi-idioma (EN, FR)

### Para Modificaciones

1. Datos de contacto: Editar en componentes `Navbar`, `Footer`, `WhatsAppButton`
2. Tarifas: Actualizar en `src/app/page.tsx` sección "Tarifas"
3. Contenido: Reemplazar en componentes respectivos (Sobre mí, Servicios, etc.)
4. Colores: Editar `tailwind.config.ts` en `colors.brand`
5. Tipografía: Editar `tailwind.config.ts` en `fontFamily`

---

## ✨ Hecho con amor por un frontend experto en Next.js y Tailwind CSS

**Última actualización:** Mayo 2026  
**Versión:** 1.0.0  
**Estado:** Producción-Ready
