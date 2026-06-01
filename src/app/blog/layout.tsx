import type { Metadata } from 'next'

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

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
