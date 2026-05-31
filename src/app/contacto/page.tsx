import Link from 'next/link'
import type { Metadata } from 'next'
import ContactoForm from '@/components/ContactoForm'

export const metadata: Metadata = {
  title: 'Contacto | Psicóloga Online - Claudia González',
  description: 'Contacta con Claudia González para agendar tu sesión gratuita. WhatsApp, teléfono, email o formulario. Disponible de lunes a sábados.',
  keywords: 'contacto psicóloga, agendar sesión, WhatsApp terapia, consulta psicológica, contactar psicóloga',
}

export default function Contacto() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-sm">
        <div className="space-y-stack-sm text-center">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Contacta conmigo
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Estoy aquí para ayudarte. Elige tu forma de contacto preferida.
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* Direct Contact Options */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Formas de contacto directas</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* WhatsApp */}
          <div className="tonal-card p-stack-md rounded-xl text-center border-l-4 border-[#25D366] flex flex-col">
            <span className="material-symbols-outlined text-5xl text-[#25D366] flex justify-center mb-4">chat</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">WhatsApp</h3>
            <p className="text-on-surface-variant font-body-md mb-4 flex-grow">
              La forma más rápida de contactarme. Respondo generalmente en menos de 24 horas.
            </p>
            <a
              href="https://wa.me/34682638679?text=Hola%20Claudia,%20me%20gustaría%20agendar%20una%20sesión%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3 bg-[#25D366] text-white rounded-full font-label-md hover:scale-105 transition-transform w-full text-center"
            >
              Enviar WhatsApp
            </a>
          </div>

          {/* Phone */}
          <div className="tonal-card p-stack-md rounded-xl text-center border-l-4 border-secondary flex flex-col">
            <span className="material-symbols-outlined text-5xl text-secondary flex justify-center mb-4">call</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Teléfono</h3>
            <p className="text-on-surface-variant font-body-md mb-4 flex-grow">
              Llamada directa. Disponible de lunes a viernes, 10h-20h.
            </p>
            <a
              href="tel:+34682638679"
              className="block px-6 py-3 bg-secondary text-on-secondary rounded-full font-label-md hover:scale-105 transition-transform w-full text-center"
            >
              Llamar ahora
            </a>
          </div>

          {/* Email */}
          <div className="tonal-card p-stack-md rounded-xl text-center border-l-4 border-secondary flex flex-col">
            <span className="material-symbols-outlined text-5xl text-secondary flex justify-center mb-4">mail</span>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Email</h3>
            <p className="text-on-surface-variant font-body-md mb-4 flex-grow">
              Para cualquier consulta o información adicional. Respondo en 24-48h.
            </p>
            <a
              href="mailto:info@cgapsicologia.com"
              className="block px-6 py-3 bg-secondary text-on-secondary rounded-full font-label-md hover:scale-105 transition-transform w-full text-center"
            >
              Enviar email
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactoForm />

      {/* Hours and Availability */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Horarios y disponibilidad</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
          <div className="tonal-card p-stack-md rounded-xl">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Atención de consultas</h3>
            <ul className="space-y-3 text-on-surface-variant font-body-md">
              <li className="flex justify-between">
                <span className="font-semibold">Lunes a viernes:</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Sábados:</span>
                <span>10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Domingos:</span>
                <span>Cerrado</span>
              </li>
              <li className="pt-3 border-t border-outline-variant/30 text-label-sm">
                Respondo mensajes generalmente en menos de 24 horas.
              </li>
            </ul>
          </div>

          <div className="tonal-card p-stack-md rounded-xl">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Sesiones online</h3>
            <ul className="space-y-3 text-on-surface-variant font-body-md">
              <li className="flex justify-between">
                <span className="font-semibold">Lunes a viernes:</span>
                <span>Flexible</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Horario laboral:</span>
                <span>13:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Sábados:</span>
                <span>Bajo demanda</span>
              </li>
              <li className="pt-3 border-t border-outline-variant/30 text-label-sm">
                Agendo sesiones de lunes a viernes con flexibilidad.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">
            Estoy lista para ayudarte
          </h2>
          <p className="font-body-md text-on-primary-container mb-4">
            Elige el método de contacto que prefieras. La primera sesión es completamente gratuita.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-md hover:bg-secondary-fixed-dim transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    </>
  )
}
