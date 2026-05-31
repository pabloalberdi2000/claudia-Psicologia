'use client'

import { useState } from 'react'

const faqs = [
  {
    pregunta: '¿Qué necesito para participar en una sesión online?',
    respuesta: 'Solo necesitas un dispositivo con cámara (computadora, tablet o móvil) y conexión a internet estable. Usamos Google Meet, una plataforma segura y confiable.',
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
    respuesta: 'Ofrecemos diferentes métodos: transferencia bancaria o Bizum. El pago se realiza antes de la primera sesión y en caso de contratar bonos sería al inicio de cada mes.',
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
    respuesta: ' Depende de lo que necesites abordar y de tu propio progreso. Puede variar desde procesos breves de 3 a 6 meses hasta acompañamientos a más largo plazo. Evaluaremos los avances de manera continua y conjunta, priorizando siempre tu autonomía y bienestar.',
  },
]

export default function TerapiaOnlineFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
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
  )
}
