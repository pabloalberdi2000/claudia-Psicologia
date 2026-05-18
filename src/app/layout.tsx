import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'CG Psicología | Terapia Online Profesional',
  description: 'Psicóloga General Sanitaria especializada en terapia online para adultos, familias e infancia-adolescencia. Primera sesión gratuita.',
  keywords: 'psicología, terapia online, psicóloga, asesoramiento familiar, terapia infantil',
  authors: [{ name: 'CG Psicología' }],
  openGraph: {
    title: 'CG Psicología | Terapia Online Profesional',
    description: 'Terapia online especializada en adultos, familias e infancia-adolescencia',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-brand-light text-brand-dark">
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
