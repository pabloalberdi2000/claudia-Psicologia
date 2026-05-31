'use client'

import { useState } from 'react'

export default function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setEnviado(true)
    setTimeout(() => {
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' })
      setEnviado(false)
    }, 3000)
  }

  return (
    <>
      {/* Contact Form */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-2xl mx-auto">
            <div className="mb-stack-md text-center">
              <h2 className="font-headline-md text-headline-md text-primary mb-2">Formulario de contacto</h2>
              <p className="text-on-surface-variant font-body-md">
                También puedes escribirme por aquí. Responderé lo antes posible.
              </p>
            </div>

            {!enviado ? (
              <form onSubmit={handleSubmit} className="tonal-card p-stack-md rounded-xl space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-label-md font-bold text-primary mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-secondary bg-surface text-on-surface"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="correo" className="block text-label-md font-bold text-primary mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-secondary bg-surface text-on-surface"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="telefono" className="block text-label-md font-bold text-primary mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-secondary bg-surface text-on-surface"
                    placeholder="+34 682 638 679"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="mensaje" className="block text-label-md font-bold text-primary mb-2">
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-outline-variant rounded-lg focus:outline-none focus:border-secondary bg-surface text-on-surface resize-none"
                    placeholder="Cuéntame un poco sobre lo que te trae aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary px-6 py-3 rounded-lg font-label-md hover:scale-[0.98] transition-transform"
                >
                  Enviar mensaje
                </button>

                <p className="text-center text-label-sm text-on-surface-variant">
                  * Campos obligatorios. Tu información es completamente confidencial.
                </p>
              </form>
            ) : (
              <div className="tonal-card p-stack-md rounded-xl text-center">
                <span className="material-symbols-outlined text-5xl text-secondary flex justify-center mb-4">task_alt</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-on-surface-variant font-body-md mb-2">
                  Gracias por contactarme. Responderé lo antes posible, generalmente en 24-48 horas.
                </p>
                <p className="text-on-surface-variant text-label-sm">
                  Si prefieres contacto más inmediato, usa WhatsApp.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
