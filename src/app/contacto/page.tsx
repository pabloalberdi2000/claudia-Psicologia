'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    motivo: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la integración con un servicio de email (Formspree, SendGrid, etc.)
    console.log('Formulario enviado:', formData)
    setEnviado(true)
    setTimeout(() => {
      setFormData({ nombre: '', correo: '', telefono: '', motivo: '', mensaje: '' })
      setEnviado(false)
    }, 3000)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Contacta conmigo
          </h1>
          <p className="text-xl text-brand-dark text-opacity-70">
            Estoy aquí para ayudarte. Elige tu forma de contacto preferida.
          </p>
        </div>
      </section>

      {/* Opciones de Contacto Directo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Formas de Contacto Directas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="p-8 bg-brand-light rounded-lg text-center border-2 border-brand-gold border-opacity-50 hover:border-brand-gold transition-all duration-300">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-3">WhatsApp</h3>
              <p className="text-brand-dark text-opacity-70 mb-6">
                La forma más rápida de contactarme. Respondo generalmente en menos de 24 horas.
              </p>
              <a
                href="https://wa.me/34666666666?text=Hola%20CG%20Psicología,%20me%20gustaría%20agendar%20una%20sesión%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 font-semibold transition-all duration-300"
              >
                Enviar WhatsApp
              </a>
            </div>

            {/* Teléfono */}
            <div className="p-8 bg-brand-light rounded-lg text-center border-2 border-brand-gold border-opacity-50 hover:border-brand-gold transition-all duration-300">
              <div className="text-5xl mb-4">☎️</div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-3">Teléfono</h3>
              <p className="text-brand-dark text-opacity-70 mb-6">
                Llamada directa. Disponible de lunes a viernes, 10h-20h.
              </p>
              <a
                href="tel:+34666666666"
                className="inline-block px-6 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300"
              >
                Llamar Ahora
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-brand-light rounded-lg text-center border-2 border-brand-gold border-opacity-50 hover:border-brand-gold transition-all duration-300">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-3">Email</h3>
              <p className="text-brand-dark text-opacity-70 mb-6">
                Para consultas más formales o documentación. Respondo en 24-48h.
              </p>
              <a
                href="mailto:contacto@cgapsicologia.es"
                className="inline-block px-6 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300"
              >
                Enviar Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-2 text-center">
            Formulario de Contacto
          </h2>
          <p className="text-center text-brand-dark text-opacity-70 mb-12">
            También puedes escribirme por aquí. Responderé lo antes posible.
          </p>

          {!enviado ? (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-brand-dark mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-brand-gold border-opacity-30 rounded focus:outline-none focus:border-brand-gold focus:border-opacity-100 bg-brand-light text-brand-dark"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="correo" className="block text-sm font-semibold text-brand-dark mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-brand-gold border-opacity-30 rounded focus:outline-none focus:border-brand-gold focus:border-opacity-100 bg-brand-light text-brand-dark"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-brand-dark mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-brand-gold border-opacity-30 rounded focus:outline-none focus:border-brand-gold focus:border-opacity-100 bg-brand-light text-brand-dark"
                  placeholder="+34 666 666 666"
                />
              </div>

              {/* Motivo de Consulta */}
              <div>
                <label htmlFor="motivo" className="block text-sm font-semibold text-brand-dark mb-2">
                  Motivo de Consulta *
                </label>
                <select
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-brand-gold border-opacity-30 rounded focus:outline-none focus:border-brand-gold focus:border-opacity-100 bg-brand-light text-brand-dark"
                >
                  <option value="">Selecciona un motivo...</option>
                  <option value="adultos">Terapia Individual Adultos</option>
                  <option value="familiar">Asesoramiento Familiar</option>
                  <option value="infantil">Terapia Infanto-Juvenil</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-brand-dark mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-brand-gold border-opacity-30 rounded focus:outline-none focus:border-brand-gold focus:border-opacity-100 bg-brand-light text-brand-dark resize-none"
                  placeholder="Cuéntame un poco sobre lo que te trae aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Enviar Mensaje
              </button>

              <p className="text-center text-xs text-brand-dark text-opacity-60">
                * Campos obligatorios. Tu información es completamente confidencial.
              </p>
            </form>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-brand-dark mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-brand-dark text-opacity-70 mb-6">
                Gracias por contactarme. Responderé lo antes posible, generalmente en 24-48 horas.
              </p>
              <p className="text-sm text-brand-dark text-opacity-60">
                Si prefieres contacto más inmediato, usa WhatsApp.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Horarios y Disponibilidad */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Horarios y Disponibilidad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-brand-light rounded-lg">
              <h3 className="text-xl font-semibold text-brand-gold mb-6">Atención de Consultas</h3>
              <ul className="space-y-4 text-brand-dark text-opacity-80">
                <li className="flex justify-between">
                  <span className="font-semibold">Lunes a Viernes:</span>
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
                <li className="pt-4 border-t border-brand-gold border-opacity-30 text-sm">
                  Respondo mensajes generalmente en menos de 24 horas.
                </li>
              </ul>
            </div>

            <div className="p-8 bg-brand-light rounded-lg">
              <h3 className="text-xl font-semibold text-brand-gold mb-6">Sesiones Online</h3>
              <ul className="space-y-4 text-brand-dark text-opacity-80">
                <li className="flex justify-between">
                  <span className="font-semibold">Lunes a Viernes:</span>
                  <span>Flexible</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Horario Laboral:</span>
                  <span>13:00 - 21:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">Sábados:</span>
                  <span>Bajo demanda</span>
                </li>
                <li className="pt-4 border-t border-brand-gold border-opacity-30 text-sm">
                  Agendo sesiones de lunes a viernes con flexibilidad.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-light mb-4">
            Estoy lista para ayudarte
          </h2>
          <p className="text-gray-200 mb-6">
            Elige el método de contacto que prefieras. La primera sesión es completamente gratuita.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-brand-gold text-brand-dark rounded hover:bg-white font-semibold transition-all duration-300"
          >
            Volver al Inicio
          </Link>
        </div>
      </section>
    </>
  )
}
