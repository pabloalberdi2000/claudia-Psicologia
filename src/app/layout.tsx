import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SchemaOrg from '@/components/SchemaOrg'

export const metadata: Metadata = {
  title: 'Psicóloga Online | Terapia Individual, Adolescentes y Familias | Claudia González',
  description: 'Psicóloga General Sanitaria especializada en terapia online para adultos, adolescentes y familias. Atención especializada en ansiedad, estrés, relaciones y crecimiento personal. Primera sesión gratuita.',
  keywords: 'psicóloga online, terapia online, psicología online, terapia adultos, terapia adolescentes, asesoramiento familiar, ansiedad, estrés, terapia emocional, psicóloga general sanitaria, sesión gratuita, terapia cognitivo-conductual, mindfulness, ACT',
  authors: [{ name: 'Claudia González Álvarez' }],
  creator: 'Claudia González Álvarez',
  publisher: 'Claudia González Psicología',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/cgapsicologia.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/cgapsicologia.png',
  },
  openGraph: {
    title: 'Psicóloga Online | Terapia Especializada | Claudia González',
    description: 'Terapia online para adultos, adolescentes y familias. Enfoque integrativo basado en evidencia científica. Primera sesión gratuita.',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: '/cgapsicologia.png',
        width: 1040,
        height: 781,
        alt: 'Claudia González Álvarez - Psicóloga General Sanitaria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psicóloga Online | Claudia González',
    description: 'Terapia especializada para adultos, adolescentes y familias',
  },
  alternates: {
    canonical: 'https://cgapsicologia.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1A3F49" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <SchemaOrg />
      </head>
      <body className="bg-surface text-on-surface font-body-md antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
