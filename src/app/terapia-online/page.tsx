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
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-sm">
        <div className="space-y-stack-sm text-center">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Terapia Online
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestras sesiones
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-md">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Cómo funciona el proceso en 4 pasos</h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            {
              paso: 1,
              titulo: 'Primer contacto',
              descripcion: 'Nos contactas por WhatsApp, teléfono o formulario. Conversamos brevemente sobre tus necesidades y agendamos la sesión gratuita.',
              detalles: [
                'Sin compromisos previos',
                'Conocemos tus expectativas',
                'Respondo generalmente en 24 horas',
              ]
            },
            {
              paso: 2,
              titulo: 'Primera sesión gratuita (30 min)',
              descripcion: 'Sesión de evaluación donde nos conocemos. Exploras cómo trabajo, hago preguntas sobre tu situación y definimos objetivos.',
              detalles: [
                'Conversación abierta y sin presión',
                'Evaluación de necesidades',
                'Definición de objetivos terapéuticos',
              ]
            },
            {
              paso: 3,
              titulo: 'Sesiones regulares (50 min)',
              descripcion: 'Comenzamos el proceso terapéutico. Trabajamos en los objetivos definidos con técnicas adaptadas a ti.',
              detalles: [
                'Frecuencia flexible (semanal, quincenal, mensual)',
                'Horarios adaptados a tu disponibilidad',
                'Revisión periódica del progreso',
              ]
            },
            {
              paso: 4,
              titulo: 'Cierre y seguimiento',
              descripcion: 'Cuando alcanzes tus objetivos o decidas parar, evaluamos el proceso y consolidamos herramientas para la autonomía.',
              detalles: [
                'Revisión de logros',
                'Plan de mantenimiento',
                'Seguimiento opcional',
              ]
            },
          ].map((paso) => (
            <div key={paso.paso} className="tonal-card p-stack-md rounded-xl border-l-4 border-secondary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-on-secondary font-bold text-lg">{paso.paso}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{paso.titulo}</h3>
                  <p className="text-on-surface-variant font-body-md mb-3">{paso.descripcion}</p>
                  <ul className="space-y-2">
                    {paso.detalles.map((detalle, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-secondary text-base flex-shrink-0">check</span>
                        <span>{detalle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Ventajas de la terapia online</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {[
              { icon: 'schedule', titulo: 'Flexibilidad horaria', desc: 'Sesiones adaptadas a tu agenda, incluso fuera del horario laboral tradicional' },
              { icon: 'home', titulo: 'Comodidad', desc: 'Desde tu hogar o lugar seguro, sin estrés de desplazamientos' },
              { icon: 'savings', titulo: 'Económico', desc: 'Sin costos de transporte, tarifas competitivas y bonos asequibles' },
              { icon: 'public', titulo: 'Accesible', desc: 'Desde cualquier lugar, sin barreras geográficas' },
              { icon: 'lock', titulo: 'Privacidad', desc: 'Confidencialidad garantizada en tu propio espacio' },
              { icon: 'verified', titulo: 'Eficacia comprobada', desc: 'Mismos resultados que terapia presencial, según investigaciones' },
            ].map((ventaja, idx) => (
              <div key={idx} className="tonal-card p-stack-md rounded-xl">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-headline-sm flex-shrink-0">{ventaja.icon}</span>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{ventaja.titulo}</h3>
                    <p className="text-on-surface-variant font-body-md">{ventaja.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Preguntas frecuentes</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="tonal-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 hover:bg-outline/5 transition-colors text-left flex justify-between items-center gap-4"
              >
                <h3 className="font-headline-sm text-headline-sm text-primary pr-4 flex-1 text-left">
                  {faq.pregunta}
                </h3>
                <span className="material-symbols-outlined text-secondary flex-shrink-0 transition-transform" style={{
                  transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0)'
                }}>
                  expand_more
                </span>
              </button>

              {openFaq === idx && (
                <div className="p-4 border-t border-outline-variant/20">
                  <p className="text-on-surface-variant font-body-md leading-relaxed">
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Requisitos técnicos</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
            <div className="tonal-card p-stack-md rounded-xl">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Necesitas</h3>
              <ul className="space-y-3 text-on-surface-variant font-body-md">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">check_circle</span>
                  <span>Dispositivo con cámara (PC, tablet, móvil)</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">check_circle</span>
                  <span>Micrófono (generalmente integrado)</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">check_circle</span>
                  <span>Conexión a internet estable</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">check_circle</span>
                  <span>Espacio privado y tranquilo</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">check_circle</span>
                  <span>Navegador moderno actualizado</span>
                </li>
              </ul>
            </div>

            <div className="tonal-card p-stack-md rounded-xl">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Recomendaciones</h3>
              <ul className="space-y-3 text-on-surface-variant font-body-md">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Apaga notificaciones y distracciones</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Vuelve unos 5 minutos antes</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Luz natural o adecuada para la cámara</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Ropa cómoda (es terapia, no una entrevista)</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Ten agua y un cuaderno a mano</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">¿Listo para empezar?</h2>
            <p className="font-body-md text-on-primary-container">
              Reserva tu sesión gratuita y comienza tu camino hacia el bienestar.
            </p>
          </div>
          <Link
            href="/contacto"
            className="btn-primary px-8 py-4 rounded-full font-label-md hover:scale-[0.98] whitespace-nowrap bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim"
          >
            Agendar sesión
          </Link>
        </div>
      </section>
    </>
  )
}
