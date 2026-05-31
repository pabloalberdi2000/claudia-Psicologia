export default function Servicios() {
  const servicios = [
    {
      icon: 'person_search',
      titulo: 'Terapia individual adultos',
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
      icon: 'family_restroom',
      titulo: 'Asesoramiento familiar',
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
      icon: 'school',
      titulo: 'Terapia con adolescentes',
      descripcion: 'Intervención especializada para jóvenes en su etapa formativa',
      temas: [
        'Ansiedad y bienestar emocional',
        'Autoestima e identidad',
        'Gestión emocional',
        'Estrés académico',
        'Estado de ánimo',
        'Relaciones sociales',
        'Conflictos familiares',
        'Adaptación al cambio',
        'Pantallas y hábitos',
        'Crecimiento personal',
      ],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-sm">
        <div className="space-y-stack-sm text-center">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Servicios de Psicología
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Tres áreas de intervención especializada para acompañarte en tu proceso de bienestar
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="grid grid-cols-1 gap-gutter">
          {servicios.map((servicio, idx) => (
            <div key={idx} className="tonal-card p-stack-md rounded-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary text-headline-sm">{servicio.icon}</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-2">
                    {servicio.titulo}
                  </h2>
                  <p className="text-on-surface-variant font-body-md">
                    {servicio.descripcion}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {servicio.temas.map((tema, temaIdx) => (
                  <div key={temaIdx} className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-lg leading-none mt-0.5">+</span>
                    <span className="text-on-surface-variant font-body-md">{tema}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Cómo funciona el proceso terapéutico</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {[
              {
                numero: '1',
                titulo: 'Primera sesión gratuita',
                desc: 'Nos conocemos, evalúo tus necesidades y creamos un plan personalizado',
              },
              {
                numero: '2',
                titulo: 'Establecer objetivos',
                desc: 'Definimos metas claras y realistas para tu terapia',
              },
              {
                numero: '3',
                titulo: 'Intervención continua',
                desc: 'Sesiones regulares adaptadas a tu ritmo y progreso',
              },
              {
                numero: '4',
                titulo: 'Prevención de recaídas y seguimiento',
                desc: 'Consolidamos herramientas y diseñamos un plan de seguimiento flexible a largo plazo',
              },
            ].map((paso) => (
              <div key={paso.numero} className="tonal-card p-stack-md rounded-xl text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-on-secondary font-bold text-lg">{paso.numero}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                  {paso.titulo}
                </h3>
                <p className="text-on-surface-variant font-body-md">
                  {paso.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Metodología y técnicas</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="tonal-card p-stack-md rounded-xl border-l-4 border-secondary">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Enfoque Integrativo y Personalizado</h3>
            <p className="text-on-surface-variant font-body-md">
              No creo en soluciones universales. Combino herramientas científicas de distintas corrientes (cognitivo-conductual, humanista y psicodinámica) para adaptar de forma exclusiva cada sesión a tus necesidades, objetivos y ritmo.
            </p>
          </div>

          <div className="tonal-card p-stack-md rounded-xl border-l-4 border-secondary">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Teoría del Apego y Vínculos</h3>
            <p className="text-on-surface-variant font-body-md">
              Analizamos cómo tus primeras experiencias influyen en la forma en que te percibes y te relacionas hoy. Entender tu historia te permitirá sanar patrones y construir vínculos actuales más seguros y sanos.
            </p>
          </div>

          <div className="tonal-card p-stack-md rounded-xl border-l-4 border-secondary">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Terapias de Tercera Generación y ACT</h3>
            <p className="text-on-surface-variant font-body-md">
              Integro Mindfulness, autocompasión y ACT para enseñarte a gestionar tus pensamientos y emociones sin luchar contra ellos, guiándote hacia decisiones alineadas con tus valores y bienestar.
            </p>
          </div>

          <div className="tonal-card p-stack-md rounded-xl border-l-4 border-secondary">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Acompañamiento Humano y Sin Juicio</h3>
            <p className="text-on-surface-variant font-body-md">
              Mi rol no es juzgarte, sino acompañarte desde la empatía y la horizontalidad. Encontrarás un espacio seguro, confidencial y libre donde expresarte tal y como eres, sintiéndote escuchada y validada.
            </p>
          </div>
        </div>
      </section>

      {/* Duración y Formato */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Duración y formato</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
            <div className="tonal-card p-stack-md rounded-xl">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Sesiones</h3>
              <ul className="space-y-2 text-on-surface-variant font-body-md">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span><strong>Duración:</strong> 50 minutos</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span><strong>Frecuencia:</strong> Flexible (semanal, quincenal o mensual)</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span><strong>Horario:</strong> De lunes a viernes, adaptado a tu disponibilidad</span>
                </li>
              </ul>
            </div>

            <div className="tonal-card p-stack-md rounded-xl">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Modalidad online</h3>
              <ul className="space-y-2 text-on-surface-variant font-body-md">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span><strong>Plataforma:</strong> Google Meet</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span><strong>Requisitos:</strong> Solo conexión a internet y dispositivo</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
                  <span><strong>Confidencialidad:</strong> Completamente garantizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">¿Listo para empezar?</h2>
            <p className="font-body-md text-on-primary-container">
              La primera sesión es completamente gratuita. Sin compromisos, conoceremos tus necesidades.
            </p>
          </div>
          <a
            href="/contacto"
            className="btn-primary px-8 py-4 rounded-full font-label-md hover:scale-[0.98] whitespace-nowrap bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim"
          >
            Agendar sesión
          </a>
        </div>
      </section>
    </>
  )
}
