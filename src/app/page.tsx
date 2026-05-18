import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-light py-20 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 w-24 h-24 mx-auto bg-gradient-to-br from-brand-dark to-brand-gold rounded-full opacity-10"></div>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Psicóloga General Sanitaria especializada en terapia online
          </h1>

          <p className="text-lg md:text-xl text-brand-dark text-opacity-80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Terapia individual para adultos, asesoramiento familiar y atención especializada para niños y adolescentes. Un espacio seguro y confidencial para tu bienestar emocional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Reservar primera sesión gratuita
            </Link>
            <a
              href="https://wa.me/34666666666"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-brand-dark text-brand-dark rounded hover:bg-brand-dark hover:text-brand-light font-semibold transition-all duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* En qué puedo ayudarte */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">
            En qué puedo ayudarte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-brand-light rounded-lg border-l-4 border-brand-gold hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                Terapia Individual Adultos
              </h3>
              <p className="text-brand-dark text-opacity-70 leading-relaxed">
                Acompañamiento profesional para trabajar ansiedad, autoestima, relaciones y crecimiento personal.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-brand-light rounded-lg border-l-4 border-brand-gold hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                Asesoramiento Familiar
              </h3>
              <p className="text-brand-dark text-opacity-70 leading-relaxed">
                Mejora de comunicación, resolución de conflictos y dinámicas familiares más saludables.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-brand-light rounded-lg border-l-4 border-brand-gold hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">👧</span>
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                Terapia Infanto-Juvenil
              </h3>
              <p className="text-brand-dark text-opacity-70 leading-relaxed">
                Apoyo emocional para niños y adolescentes en diferentes etapas de desarrollo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí - Brief intro */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="w-full h-80 bg-gradient-to-br from-brand-dark to-brand-gold rounded-lg opacity-10 flex items-center justify-center">
              <span className="text-6xl">📸</span>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Sobre mí</h2>
            <p className="text-brand-dark text-opacity-80 mb-4 leading-relaxed">
              Soy Psicóloga General Sanitaria formada en la Universidad Autónoma de Madrid (UAM).
              A lo largo de mi carrera, he trabajado en prestigiosos centros especializados en salud mental
              como Álava Reyes y la Clínica Elesebe, donde he adquirido experiencia especializada en diferentes
              etapas de desarrollo.
            </p>
            <p className="text-brand-dark text-opacity-80 mb-6 leading-relaxed">
              Mi enfoque terapéutico se basa en la teoría del apego y la creencia de que cada persona merece
              un espacio libre de juicio donde expresarse y crecer.
            </p>
            <Link
              href="/sobre-mi"
              className="inline-block px-6 py-3 border-2 border-brand-dark text-brand-dark rounded hover:bg-brand-dark hover:text-brand-light font-semibold transition-all duration-300"
            >
              Conóceme mejor →
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios de la terapia online */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">
            Beneficios de la terapia online
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: '⏰', title: 'Flexibilidad', desc: 'Sesiones adaptadas a tu disponibilidad y ritmo de vida' },
              { icon: '🏠', title: 'Comodidad', desc: 'Terapia desde tu espacio seguro sin desplazamientos' },
              { icon: '🔒', title: 'Confidencialidad', desc: 'Máxima privacidad en un entorno controlado' },
              { icon: '💰', title: 'Accesibilidad', desc: 'Menos costos indirectos y sesiones más asequibles' },
              { icon: '📱', title: 'Disponibilidad', desc: 'Acceso desde cualquier lugar con conexión a internet' },
              { icon: '✨', title: 'Eficacia', desc: 'Terapia basada en evidencia científica igualmente efectiva' },
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-brand-light rounded-lg border border-brand-gold border-opacity-20">
                <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-2">{benefit.title}</h3>
                  <p className="text-brand-dark text-opacity-70 text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarifas */}
      <section className="py-20 px-6 bg-brand-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-4">
            Tarifas
          </h2>
          <p className="text-center text-brand-dark text-opacity-70 mb-16 max-w-2xl mx-auto">
            Inversión clara y transparente en tu bienestar. Flexibilidad para elegir la opción que mejor se adapte a tus necesidades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Session */}
            <div className="p-8 bg-white rounded-lg border-2 border-brand-gold border-opacity-30 hover:border-brand-gold transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Primera Sesión</h3>
                <p className="text-brand-dark text-opacity-60 text-sm">Sesión orientativa</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand-gold">Gratis</span>
                <p className="text-brand-dark text-opacity-60 text-sm mt-2">30 minutos</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-brand-dark text-opacity-70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Conocernos y evaluar necesidades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Sin compromiso</span>
                </li>
              </ul>
              <Link
                href="/contacto"
                className="w-full block text-center px-6 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300"
              >
                Agendar ahora
              </Link>
            </div>

            {/* Single Session */}
            <div className="p-8 bg-white rounded-lg border-2 border-brand-gold hover:border-brand-gold shadow-lg scale-105">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Sesión Individual</h3>
                <p className="text-brand-dark text-opacity-60 text-sm">Sesión única</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-brand-gold">50€</span>
                <p className="text-brand-dark text-opacity-60 text-sm mt-2">50 minutos</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-brand-dark text-opacity-70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Sesión completa de terapia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Flexibilidad de horarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Sin vinculación de permanencia</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300">
                Seleccionar
              </button>
            </div>

            {/* Pack */}
            <div className="p-8 bg-white rounded-lg border-2 border-brand-gold border-opacity-30 hover:border-brand-gold transition-all duration-300">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-brand-gold text-brand-dark rounded-full text-xs font-semibold mb-3">
                  AHORRA 20€
                </span>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Bono 4 Sesiones</h3>
                <p className="text-brand-dark text-opacity-60 text-sm">Más continuidad</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-brand-gold">180€</span>
                <p className="text-brand-dark text-opacity-60 text-sm mt-2">4 sesiones x 50 min</p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-brand-dark text-opacity-70">
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>45€ por sesión (descuento)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Continuidad terapéutica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span>Validez de 2 meses</span>
                </li>
              </ul>
              <button className="w-full px-6 py-3 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark font-semibold transition-all duration-300">
                Seleccionar
              </button>
            </div>
          </div>

          <p className="text-center text-brand-dark text-opacity-60 text-sm mt-12">
            Disponible en modalidad online vía videollamada (Zoom, Teams o plataforma similar).
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-6">
            ¿Listo para empezar tu viaje hacia el bienestar?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            La primera sesión es completamente gratuita. Sin costos ocultos, sin compromisos. Solo un espacio seguro para que hables de lo que te importa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-3 bg-brand-gold text-brand-dark rounded hover:bg-white font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Reservar sesión gratuita
            </Link>
            <a
              href="https://wa.me/34666666666"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-brand-light text-brand-light rounded hover:bg-brand-light hover:text-brand-dark font-semibold transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
