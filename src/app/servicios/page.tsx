import Link from 'next/link'

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Terapia Individual Adultos',
      descripcion: 'Acompañamiento profesional personalizado para adultos',
      temas: [
        'Ansiedad y ataques de pánico',
        'Depresión y tristeza prolongada',
        'Baja autoestima y autosabotaje',
        'Dependencia emocional y relaciones tóxicas',
        'Estrés laboral y burnout',
        'Inseguridad y timidez social',
        'Gestión de emociones intensas',
        'Crecimiento personal y autoconocimiento',
        'Duelo y pérdida',
        'Conflictos de identidad',
      ],
    },
    {
      titulo: 'Asesoramiento Familiar',
      descripcion: 'Mejora de dinámicas y comunicación en la familia',
      temas: [
        'Conflictos entre padres e hijos',
        'Comunicación familiar mejora',
        'Dinámicas disfuncionales',
        'Orientación y apoyo parental',
        'Gestión de límites y normas',
        'Problemas de conducta en hijos',
        'Preparación para cambios familiares',
        'Separación y divorcio',
        'Mala convivencia y enojo recurrente',
        'Creación de vínculos más seguros',
      ],
    },
    {
      titulo: 'Terapia Infanto-Juvenil',
      descripcion: 'Apoyo especializado para niños y adolescentes',
      temas: [
        'Ansiedad y miedos infantiles',
        'Problemas de conducta',
        'Bajo rendimiento académico',
        'Inseguridad y baja autoestima',
        'Dificultades en relaciones escolares (bullying)',
        'Transiciones de vida (cambios escolares)',
        'Duelo infantil y pérdida',
        'Hiperactividad y falta de concentración',
        'Mutismo selectivo',
        'Problemas de sueño y regulación emocional',
      ],
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Servicios de Psicología
          </h1>
          <p className="text-xl text-brand-dark text-opacity-70">
            Tres áreas de intervención especializada para acompañarte en tu proceso de bienestar
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="mb-16 pb-16 border-b border-brand-gold border-opacity-20 last:border-b-0">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{idx === 0 ? '👤' : idx === 1 ? '👨‍👩‍👧' : '👧'}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark mb-2">
                    {servicio.titulo}
                  </h2>
                  <p className="text-lg text-brand-dark text-opacity-70">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-22">
                {servicio.temas.map((tema, temaIdx) => (
                  <div key={temaIdx} className="flex items-start gap-3 p-4 bg-brand-light rounded-lg">
                    <span className="text-brand-gold font-semibold mt-1">+</span>
                    <span className="text-brand-dark">{tema}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Cómo funciona el proceso terapéutico
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                numero: '1',
                titulo: 'Primera Sesión Gratuita',
                desc: 'Nos conocemos, evalúo tus necesidades y creamos un plan personalizado',
              },
              {
                numero: '2',
                titulo: 'Establecer Objetivos',
                desc: 'Definimos metas claras y realistas para tu terapia',
              },
              {
                numero: '3',
                titulo: 'Intervención Continua',
                desc: 'Sesiones regulares adaptadas a tu ritmo y progreso',
              },
              {
                numero: '4',
                titulo: 'Evaluación y Cierre',
                desc: 'Revisamos logros y preparamos herramientas para la autonomía',
              },
            ].map((paso, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg text-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{paso.numero}</span>
                </div>
                <h3 className="font-semibold text-brand-dark mb-3">
                  {paso.titulo}
                </h3>
                <p className="text-sm text-brand-dark text-opacity-70">
                  {paso.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Metodología y Técnicas</h2>

          <div className="space-y-6">
            <div className="p-6 border-l-4 border-brand-gold bg-brand-light rounded-r-lg">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Teoría del Apego</h3>
              <p className="text-brand-dark text-opacity-70">
                Entendemos cómo tus experiencias relacionales tempranas influyen en tus patrones actuales
                y trabajamos para desarrollar relaciones más seguras y auténticas.
              </p>
            </div>

            <div className="p-6 border-l-4 border-brand-gold bg-brand-light rounded-r-lg">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Terapia de Tercera Generación</h3>
              <p className="text-brand-dark text-opacity-70">
                Integramos técnicas de Terapia de Aceptación y Compromiso (ACT), Mindfulness y técnicas
                basadas en compasión para una transformación más profunda y duradera.
              </p>
            </div>

            <div className="p-6 border-l-4 border-brand-gold bg-brand-light rounded-r-lg">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Enfoque Integrativo</h3>
              <p className="text-brand-dark text-opacity-70">
                Combinamos elementos de diferentes corrientes psicológicas (cognitivo-conductual, humanista,
                psicodinámica) adaptados a las necesidades específicas de cada persona.
              </p>
            </div>

            <div className="p-6 border-l-4 border-brand-gold bg-brand-light rounded-r-lg">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Sin Juicio</h3>
              <p className="text-brand-dark text-opacity-70">
                Mi rol no es juzgar sino acompañar. Creamos un espacio completamente seguro y confidencial
                donde puedas ser auténtico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duración y Formato */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Duración y Formato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Sesiones</h3>
              <ul className="space-y-3 text-brand-dark text-opacity-70">
                <li className="flex gap-3">
                  <span className="font-bold text-brand-dark">▸</span>
                  <span><strong>Duración:</strong> 50 minutos</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand-dark">▸</span>
                  <span><strong>Frecuencia:</strong> Flexible (semanal, quincenal o mensual)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand-dark">▸</span>
                  <span><strong>Horario:</strong> De lunes a viernes, adaptado a tu disponibilidad</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-white rounded-lg">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Modalidad Online</h3>
              <ul className="space-y-3 text-brand-dark text-opacity-70">
                <li className="flex gap-3">
                  <span className="font-bold text-brand-dark">▸</span>
                  <span><strong>Plataforma:</strong> Zoom, Teams o similar</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand-dark">▸</span>
                  <span><strong>Requisitos:</strong> Solo conexión a internet y dispositivo</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-brand-dark">▸</span>
                  <span><strong>Confidencialidad:</strong> Completamente garantizada</span>
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
            ¿Alguno de estos servicios te resuena?
          </h2>
          <p className="text-gray-200 mb-6">
            La primera sesión es gratuita. Conoceremos tus necesidades y crearemos un plan personalizado.
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
