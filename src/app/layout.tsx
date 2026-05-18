import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'cgapsicologia | Psicóloga General Sanitaria',
  description: 'Psicóloga General Sanitaria especializada en terapia online para adultos, familias e infancia-adolescencia. Primera sesión gratuita de 30 minutos.',
  keywords: 'psicología, terapia online, psicóloga, asesoramiento familiar, terapia infantil',
  authors: [{ name: 'cgapsicologia' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/cgapsicologia.png',
  },
  openGraph: {
    title: 'cgapsicologia | Psicóloga General Sanitaria',
    description: 'Terapia online especializada en adultos, familias e infancia-adolescencia',
    type: 'website',
    images: [
      {
        url: '/cgapsicologia.png',
        width: 1040,
        height: 781,
        alt: 'cgapsicologia Logo',
      },
    ],
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
