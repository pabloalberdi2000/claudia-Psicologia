import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row items-center gap-gutter">
        <div className="w-full md:w-1/2 space-y-stack-sm text-left">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Psicóloga General Sanitaria especializada en terapia online para adultos, familias e infancia-adolescencia.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Un espacio seguro y profesional desde la comodidad de tu hogar, donde la cercanía no entiende de distancias.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/contacto"
              className="btn-primary px-8 py-4 rounded-full font-label-md flex items-center gap-2 hover:scale-[0.98]"
            >
              Reservar primera sesión gratuita
            </Link>
            <a
              href="https://wa.me/34682638679"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 rounded-full font-label-md flex items-center gap-2 hover:bg-secondary/5 hover:scale-[0.98]"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-surface-container-high">
            <Image
              src="/home.png"
              alt="Psicóloga profesional en consultorio"
              width={400}
              height={500}
              className="w-full h-full object-cover grayscale-[20%]"
              priority
            />
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
        </div>
      </section>

      {/* Services Section: En qué puedo ayudarte */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">En qué puedo ayudarte</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Individual */}
            <div className="tonal-card p-stack-md rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-headline-sm">person_search</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Terapia individual adultos</h3>
              <p className="text-on-surface-variant font-body-md">Acompañamiento personalizado para gestionar la ansiedad, el estrés o procesos de duelo en tu etapa adulta.</p>
            </div>
            {/* Familiar */}
            <div className="tonal-card p-stack-md rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-headline-sm">family_restroom</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Asesoramiento familiar</h3>
              <p className="text-on-surface-variant font-body-md">Herramientas prácticas para mejorar la comunicación y resolver conflictos en el núcleo del hogar.</p>
            </div>
            {/* Infantil */}
            <div className="tonal-card p-stack-md rounded-xl flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-headline-sm">child_care</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Terapia infantojuvenil</h3>
              <p className="text-on-surface-variant font-body-md">Intervención especializada para niños y adolescentes, centrada en su bienestar emocional y desarrollo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-stack-lg items-center">
        <div className="w-full md:w-5/12">
          <div className="rounded-2xl overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/psicologa.png"
              alt="Psicóloga profesional"
              width={400}
              height={500}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-stack-sm">
          <h2 className="font-headline-md text-headline-md text-primary">Sobre mí</h2>
          <div className="space-y-4 font-body-lg text-on-surface-variant leading-relaxed">
            <p>Soy Psicóloga General Sanitaria con una profunda vocación por ayudar a las personas a encontrar su equilibrio emocional. Entiendo la terapia como un camino compartido de autodescubrimiento y crecimiento.</p>
            <p>Mi enfoque combina la evidencia científica con una calidez humana que trasciende la pantalla. Mi objetivo es que cada sesión sea un refugio donde puedas expresarte sin juicios, sintiéndote escuchado y comprendido desde el primer momento.</p>
          </div>
          <Link href="/sobre-mi" className="inline-flex items-center gap-2 text-secondary font-label-md hover:gap-4 transition-all duration-300">
            Conóceme mejor <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary-fixed text-headline-sm">schedule</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">Flexibilidad horaria</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary-fixed text-headline-sm">directions_car</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">Ahorro de tiempo</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary-fixed text-headline-sm">lock</span>
            <span className="font-label-md text-label-md uppercase tracking-wider">Máxima confidencialidad</span>
          </div>
        </div>
      </section>

      {/* Pricing Section: Tarifas y Planes */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Tarifas y Planes</h2>
          <p className="font-body-md text-on-surface-variant max-w-md mx-auto text-center">Inversión en tu bienestar emocional con total transparencia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-end">
          {/* Free Session */}
          <div className="tonal-card p-10 rounded-xl flex flex-col h-full">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Sesión Orientativa</h3>
            <p className="font-body-md text-on-surface-variant mb-6">Un primer contacto para conocernos y resolver dudas.</p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-headline-md font-display-lg text-primary">Gratis</span>
                <span className="text-on-surface-variant">/ 30 min</span>
              </div>
              <button className="w-full btn-secondary py-3 rounded-lg font-label-md">Empezar ahora</button>
            </div>
          </div>

          {/* Popular Session */}
          <div className="relative bg-primary text-on-primary p-10 rounded-xl flex flex-col h-full transform md:scale-105 shadow-2xl z-10">
            <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-label-sm font-bold">MÁS POPULAR</div>
            <h3 className="font-headline-sm text-headline-sm text-on-primary mb-2">Sesión Suelta</h3>
            <p className="font-body-md text-on-primary-container mb-6">Terapia individual enfocada en tus necesidades actuales.</p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-headline-md font-display-lg text-on-primary">50€</span>
                <span className="text-on-primary-container">/ 50 min</span>
              </div>
              <button className="w-full bg-secondary-fixed text-on-secondary-fixed py-3 rounded-lg font-label-md hover:bg-secondary-fixed-dim">Reservar sesión</button>
            </div>
          </div>

          {/* Pack Session */}
          <div className="tonal-card p-10 rounded-xl flex flex-col h-full">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Bono 4 Sesiones</h3>
            <p className="font-body-md text-on-surface-variant mb-6">Compromiso a medio plazo para un proceso terapéutico profundo.</p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-headline-md font-display-lg text-primary">180€</span>
                <span className="text-on-surface-variant">/ pack</span>
              </div>
              <button className="w-full btn-secondary py-3 rounded-lg font-label-md">Contratar bono</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg text-center">
        <h2 className="font-headline-md text-headline-md text-primary mb-4">¿Listo para empezar tu viaje hacia el bienestar?</h2>
        <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto mb-8">La primera sesión es completamente gratuita. Sin costos ocultos, sin compromisos. Solo un espacio seguro para que hables de lo que te importa.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contacto" className="btn-primary px-8 py-4 rounded-full font-label-md hover:scale-[0.98]">
            Reservar sesión gratuita
          </Link>
          <a href="https://wa.me/34682638679" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 rounded-full font-label-md hover:bg-secondary/5 hover:scale-[0.98]">
            WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
