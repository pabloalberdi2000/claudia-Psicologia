import Link from 'next/link'

export default function SobreMi() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Sobre mí
          </h1>
          <p className="text-xl text-brand-dark text-opacity-70">
            Mi formación, experiencia y enfoque terapéutico
          </p>
        </div>
      </section>

      {/* Formación */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Formación Académica</h2>

          <div className="space-y-8">
            <div className="pb-8 border-b border-brand-gold border-opacity-20">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Grado en Psicología
              </h3>
              <p className="text-brand-gold font-semibold mb-3">Universidad Autónoma de Madrid (UAM)</p>
              <p className="text-brand-dark text-opacity-70">
                Formación integral en psicología clínica, social, del desarrollo y del aprendizaje.
              </p>
            </div>

            <div className="pb-8 border-b border-brand-gold border-opacity-20">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Máster en Psicología Clínica
              </h3>
              <p className="text-brand-gold font-semibold mb-3">Universidad Autónoma Extensa (UAX)</p>
              <p className="text-brand-dark text-opacity-70">
                Especialización en evaluación, diagnóstico y tratamiento de trastornos mentales.
                Enfoque en terapias de tercera generación y psicoterapia basada en evidencia.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Colegiación Profesional
              </h3>
              <p className="text-brand-gold font-semibold mb-3">Psicóloga General Sanitaria</p>
              <p className="text-brand-dark text-opacity-70">
                Colegiada y habilitada para el ejercicio de la psicología clínica y salud mental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia Profesional */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Experiencia Profesional</h2>

          <div className="space-y-8">
            <div className="p-6 bg-white rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Clínica Álava Reyes
              </h3>
              <p className="text-sm text-brand-gold font-semibold mb-3">Especializada en infancia y adolescencia</p>
              <p className="text-brand-dark text-opacity-70">
                Más de 5 años trabajando con niños y adolescentes en áreas como TDAH, ansiedad,
                autoestima y dificultades de aprendizaje. Experiencia en evaluación psicoeducativa
                y orientación a familias.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Clínica Elesebe
              </h3>
              <p className="text-sm text-brand-gold font-semibold mb-3">Centro multidisciplinario de salud mental</p>
              <p className="text-brand-dark text-opacity-70">
                Intervención integral con adultos y familias. Terapia individual, terapia de pareja
                y asesoramiento familiar. Manejo de trastornos de ansiedad, depresión y problemas
                relacionales.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border-l-4 border-brand-gold">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                Terapia Online
              </h3>
              <p className="text-sm text-brand-gold font-semibold mb-3">Práctica privada especializada</p>
              <p className="text-brand-dark text-opacity-70">
                Desde hace 3 años ofrezco sesiones de terapia online, aprovechando las ventajas
                de la flexibilidad y accesibilidad. Misma calidad profesional que la terapia presencial,
                adaptada a las necesidades modernas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Especialización */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Áreas de Especialización</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4 text-brand-gold border-b pb-2">
                Adultos
              </h3>
              <ul className="space-y-3 text-brand-dark text-opacity-70">
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Ansiedad y ataques de pánico</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Depresión y baja autoestima</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Dependencia emocional</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Problemas de relaciones</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Estrés y manejo emocional</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Crecimiento personal y autoconocimiento</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4 text-brand-gold border-b pb-2">
                Infancia y Adolescencia
              </h3>
              <ul className="space-y-3 text-brand-dark text-opacity-70">
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Ansiedad y miedos infantiles</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Problemas de conducta</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Autoestima en adolescentes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Dificultades escolares y académicas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Duelo y pérdida</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Transiciones de vida (cambios escolares, etc.)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4 text-brand-gold border-b pb-2">
                Asesoramiento Familiar
              </h3>
              <ul className="space-y-3 text-brand-dark text-opacity-70">
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Conflictos familiares</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Comunicación familiar</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Dinámicas relacionales disfuncionales</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Orientación parental</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Separaciones y divorcios</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Duelo familiar</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-brand-dark mb-4 text-brand-gold border-b pb-2">
                Enfoque Terapéutico
              </h3>
              <ul className="space-y-3 text-brand-dark text-opacity-70">
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Basado en Teoría del Apego</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Enfoque Integrativo</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Técnicas de Tercera Generación</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Mindfulness y regulación emocional</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Sin juicio y con total confidencialidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-gold">▸</span>
                  <span>Respeto por el ritmo personal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mi Enfoque Terapéutico */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Mi Enfoque Terapéutico</h2>

          <div className="bg-white p-8 rounded-lg">
            <p className="text-brand-dark text-opacity-80 mb-6 leading-relaxed">
              Creo profundamente que cada persona tiene dentro de sí los recursos necesarios para crecer y cambiar.
              Mi rol como psicóloga es acompañarte en el descubrimiento de esos recursos y ayudarte a utilizarlos
              de forma consciente.
            </p>

            <p className="text-brand-dark text-opacity-80 mb-6 leading-relaxed">
              Mi enfoque se fundamenta en la <strong>Teoría del Apego</strong>, reconociendo que nuestras
              experiencias relacionales tempranas configuran cómo nos vinculamos con otros. Desde ahí, trabajamos
              para desarrollar relaciones más seguras, auténticas y libres de juicio.
            </p>

            <p className="text-brand-dark text-opacity-80 leading-relaxed">
              Integro técnicas de psicoterapia de tercera generación (mindfulness, ACT, compasión) con un
              profundo respeto por tu ritmo y necesidades. <strong>Sin presiones, sin moralismos.</strong> Solo
              un espacio seguro donde puedas ser tú mismo mientras crecemos juntos.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-light mb-4">
            ¿Quieres conocerme mejor?
          </h2>
          <p className="text-gray-200 mb-6">
            Agenda tu primera sesión gratuita y conoce mi forma de trabajar.
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
