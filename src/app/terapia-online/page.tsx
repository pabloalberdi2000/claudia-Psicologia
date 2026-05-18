'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TerapiaOnline() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      pregunta: '¿Qué necesito para participar en una sesión online?',
      respuesta: 'Solo necesitas un dispositivo con cámara (computadora, tablet o móvil) y conexión a internet estable. Usamos plataformas seguras como Zoom o Teams.',
    },
    {
      pregunta: '¿Es igual de efectiva que la terapia presencial?',
      respuesta: 'Sí. La investigación científica demuestra que la terapia online tiene la misma eficacia que la presencial cuando se realiza correctamente. Lo que importa es la relación terapéutica y el compromiso con el proceso.',
    },
    {
      pregunta: '¿Cómo se garantiza la confidencialidad?',
      respuesta: 'Usamos plataformas de videoconferencia encriptadas. Además, mantenemos total confidencialidad según la ley de protección de datos. Tu privacidad es nuestra prioridad.',
    },
    {
      pregunta: '¿Puedo cambiar la hora de mis sesiones?',
      respuesta: 'Sí, con aviso previo (mínimo 24 horas) podemos cambiar la hora de la sesión. Entiendo que la vida es cambiante y flexible contigo.',
    },
    {
      pregunta: '¿Qué pasa si no puedo asistir a una sesión?',
      respuesta: 'Si cancelas con aviso de 24 horas, podemos reprogramarla. Si cancelas sin aviso, la sesión se cobra. Esto es importante para mantener los espacios disponibles para otros pacientes.',
    },
    {
      pregunta: '¿Cómo funciona el pago?',
      respuesta: 'Ofrecemos diferentes métodos: transferencia bancaria, Bizum o tarjeta de crédito. El pago se realiza antes de la primera sesión y luego al inicio de cada mes.',
    },
    {
      pregunta: '¿Necesito un diagnóstico previo?',
      respuesta: 'No. La terapia es para cualquier persona que quiera mejorar su bienestar emocional, entender mejor sus patrones o trabajar algún aspecto específico de su vida.',
    },
    {
      pregunta: '¿Puedo dejar la terapia cuando quiera?',
      respuesta: 'Por supuesto. No hay contratos vinculantes. Aunque recomendamos evaluar el proceso juntas antes de parar, respeto completamente tu decisión.',
    },
    {
      pregunta: '¿Qué hago si tengo una crisis emocional fuera de sesión?',
      respuesta: 'Si experimentas una crisis grave, contacta con servicios de urgencia (112 en España) o acude al hospital más cercano. Entre sesiones, ofrezco apoyo via email para consultas menores.',
    },
    {
      pregunta: '¿Cuánto tiempo dura típicamente un proceso terapéutico?',
      respuesta: 'Depende de tus objetivos y de cómo progreséis. Algunos procesos son cortos (3-6 meses), otros más largos. Lo evaluaremos juntas regularmente.',
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Terapia Online
          </h1>
          <p className="text-xl text-brand-dark text-opacity-70">
            Cómo funciona el proceso y respuestas a tus preguntas más frecuentes
          </p>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Cómo funciona el proceso en 4 pasos
          </h2>

          <div className="space-y-8">
            {[
              {
                paso: 1,
                titulo: 'Primer Contacto',
                descripcion: 'Nos contactas por WhatsApp, teléfono o formulario. Conversamos brevemente sobre tus necesidades y agendamos la sesión gratuita.',
                detalles: [
                  'Sin compromisos previos',
                  'Conocemos tus expectativas',
                  'Respondo generalmente en 24 horas',
                ]
              },
              {
                paso: 2,
                titulo: 'Primera Sesión Gratuita (30 min)',
                descripcion: 'Sesión de evaluación donde nos conocemos. Exploras cómo trabajo, hago preguntas sobre tu situación y definimos objetivos.',
                detalles: [
                  'Conversación abierta y sin presión',
                  'Evaluación de necesidades',
                  'Definición de objetivos terapéuticos',
                ]
              },
              {
                paso: 3,
                titulo: 'Sesiones Regulares (50 min)',
                descripcion: 'Comenzamos el proceso terapéutico. Trabajamos en los objetivos definidos con técnicas adaptadas a ti.',
                detalles: [
                  'Frecuencia flexible (semanal, quincenal, mensual)',
                  'Horarios adaptados a tu disponibilidad',
                  'Revisión periódica del progreso',
                ]
              },
              {
                paso: 4,
                titulo: 'Cierre y Seguimiento',
                descripcion: 'Cuando alcanzes tus objetivos o decidas parar, evaluamos el proceso y consolidamos herramientas para la autonomía.',
                detalles: [
                  'Revisión de logros',
                  'Plan de mantenimiento',
                  'Seguimiento opcional',
                ]
              },
            ].map((paso) => (
              <div key={paso.paso} className="p-8 bg-brand-light rounded-lg border-l-4 border-brand-gold">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{paso.paso}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">{paso.titulo}</h3>
                    <p className="text-brand-dark text-opacity-80 mb-4">{paso.descripcion}</p>
                    <ul className="space-y-2">
                      {paso.detalles.map((detalle, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-brand-dark text-opacity-70">
                          <span className="text-brand-gold font-bold">✓</span>
                          <span>{detalle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Ventajas de la Terapia Online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🕐', titulo: 'Flexibilidad Horaria', desc: 'Sesiones adaptadas a tu agenda, incluso fuera del horario laboral tradicional' },
              { icon: '🏠', titulo: 'Comodidad', desc: 'Desde tu hogar o lugar seguro, sin estrés de desplazamientos' },
              { icon: '💰', titulo: 'Económico', desc: 'Sin costos de transporte, tarifas competitivas y bonos asequibles' },
              { icon: '🌍', titulo: 'Accesible', desc: 'Desde cualquier lugar, sin barreras geográficas' },
              { icon: '🔒', titulo: 'Privacidad', desc: 'Confidencialidad garantizada en tu propio espacio' },
              { icon: '⚡', titulo: 'Eficacia Comprobada', desc: 'Mismos resultados que terapia presencial, según investigaciones' },
            ].map((ventaja, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg border border-brand-gold border-opacity-30">
                <div className="text-4xl mb-3">{ventaja.icon}</div>
                <h3 className="font-semibold text-brand-dark mb-2">{ventaja.titulo}</h3>
                <p className="text-sm text-brand-dark text-opacity-70">{ventaja.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-brand-gold border-opacity-30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 bg-brand-light hover:bg-brand-gold hover:bg-opacity-10 transition-colors text-left flex justify-between items-center gap-4"
                >
                  <h3 className="font-semibold text-brand-dark text-lg pr-4">
                    {faq.pregunta}
                  </h3>
                  <span className="text-brand-gold flex-shrink-0 text-2xl">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>

                {openFaq === idx && (
                  <div className="p-6 bg-white border-t border-brand-gold border-opacity-30">
                    <p className="text-brand-dark text-opacity-80 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos Técnicos */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
            Requisitos Técnicos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-brand-gold mb-6">Necesitas</h3>
              <ul className="space-y-3 text-brand-dark text-opacity-80">
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Dispositivo con cámara (PC, tablet, móvil)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Micrófono (generalmente integrado)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Conexión a internet estable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Espacio privado y tranquilo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Navegador moderno actualizado</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="text-xl font-bold text-brand-gold mb-6">Recomendaciones</h3>
              <ul className="space-y-3 text-brand-dark text-opacity-80">
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Apaga notificaciones y distracciones</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Vuelve unos 5 minutos antes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Luz natural o adecuada para la cámara</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Ropa cómoda (es terapia, no una entrevista)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Ten agua y un cuaderno a mano</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-light mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-gray-200 mb-6">
            Reserva tu sesión gratuita y comienza tu camino hacia el bienestar.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-3 bg-brand-gold text-brand-dark rounded hover:bg-white font-semibold transition-all duration-300"
          >
            Agendar sesión gratuita
          </Link>
        </div>
      </section>
    </>
  )
}
