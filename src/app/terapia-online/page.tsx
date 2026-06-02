import Link from 'next/link'
import type { Metadata } from 'next'
import TerapiaOnlineFAQ from '@/components/TerapiaOnlineFAQ'

export const metadata: Metadata = {
  title: 'Terapia Online | Cómo funciona, requisitos y FAQs',
  description: 'Descubre cómo funciona la terapia online con Google Meet. Requisitos técnicos, ventajas, proceso en 4 pasos y respuestas a preguntas frecuentes sobre sesiones virtuales de psicología.',
  keywords: 'terapia online, videoconferencia, Google Meet, psicología virtual, sesiones online, cómo funciona terapia online, requisitos técnicos',
}

export default function TerapiaOnline() {

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
              descripcion: 'Me cuentas qué te preocupa y agendamos tu sesión gratuita para valorar cómo puedo ayudarte. Respondo en menos de 24 horas.',
              detalles: [
                'Sin compromisos previos',
                'Conocemos tus expectativas',
                'Respuesta rápida garantizada',
              ]
            },
            {
              paso: 2,
              titulo: 'Primera sesión gratuita (30 min)',
              descripcion: 'Un espacio seguro para conocernos. Me cuentas tu situación actual, resolvemos tus dudas sobre cómo trabajo y definimos los primeros objetivos, sin presiones.',
              detalles: [
                'Conversación abierta y sin presión',
                'Evaluación de necesidades',
                'Definición de objetivos terapéuticos',
              ]
            },
            {
              paso: 3,
              titulo: 'Sesiones regulares (50 min)',
              descripcion: 'Iniciamos el proceso terapéutico propiamente dicho. Trabajamos de forma personalizada en tus objetivos, dotándote de herramientas prácticas adaptadas a tu ritmo.',
              detalles: [
                'Frecuencia flexible (semanal, quincenal, mensual)',
                'Horarios adaptados a tu disponibilidad',
                'Revisión periódica del progreso',
              ]
            },
            {
              paso: 4,
              titulo: 'Prevención de recaídas y seguimiento',
              descripcion: 'Cuando alcances tus objetivos o decidas parar, evaluaremos el proceso y consolidaremos herramientas para tu autonomía.',
              detalles: [
                'Consolidación de herramientas aprendidas',
                'Plan de prevención de recaídas',
                'Seguimiento flexible a largo plazo',
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
      <TerapiaOnlineFAQ />

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
                  <span>Minimiza las distracciones: apaga las notificaciones y busca un lugar tranquilo.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Conéctate 5 minutos antes para comprobar audio y vídeo sin prisas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Cuida la iluminación, preferiblemente con luz natural o de frente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Ponte cómoda con ropa que te haga sentir a gusto.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary flex-shrink-0 text-lg">lightbulb</span>
                  <span>Prepara un vaso de agua y un cuaderno por si quieres tomar notas durante la sesión.</span>
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
