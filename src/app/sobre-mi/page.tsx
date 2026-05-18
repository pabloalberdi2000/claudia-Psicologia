import Image from 'next/image'
import Link from 'next/link'

export default function SobreMi() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-sm">
        <div className="space-y-stack-sm text-center">
          <h1 className="font-display-lg text-display-lg text-primary leading-tight">
            Sobre mí
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Conoce mi trayectoria y enfoque terapéutico
          </p>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg flex flex-col md:flex-row gap-stack-lg items-center">
        <div className="w-full md:w-5/12">
          <div className="rounded-2xl overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/psicologa.png"
              alt="Claudia - Psicóloga General Sanitaria"
              width={400}
              height={500}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-stack-sm">
          <h2 className="font-headline-md text-headline-md text-primary">Claudia García Psicóloga</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant font-semibold mb-4">
            Psicóloga General Sanitaria
          </p>
          <div className="space-y-4 font-body-md text-on-surface-variant leading-relaxed">
            <p>
              Soy una psicóloga apasionada por el bienestar mental y emocional de las personas. Mi vocación surge de la creencia de que el cuidado mental es tan importante como el cuidado físico, y que todos merecemos un espacio seguro para explorar nuestras emociones y crecer como personas.
            </p>
            <p>
              Mi formación académica en Psicología General Sanitaria me ha proporcionado una sólida base en la evaluación, diagnóstico e intervención psicológica. A lo largo de mi carrera, he trabajado con diversos colectivos y problemáticas, lo que me ha permitido desarrollar una visión integradora y flexible de la práctica clínica.
            </p>
            <p>
              Creo firmemente en la importancia de la relación terapéutica como herramienta de cambio. Mi objetivo es crear un espacio de respeto, confianza y confidencialidad donde puedas expresarte sin temor a ser juzgado, sintiéndote verdaderamente escuchado y comprendido.
            </p>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="bg-surface-container-low py-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-stack-md text-center">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Áreas de especialización</h2>
            <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="tonal-card p-stack-md rounded-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-headline-sm flex-shrink-0 mt-2">psychology</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Terapia individual adultos</h3>
                  <p className="text-on-surface-variant font-body-md">
                    Acompañamiento personalizado para gestionar ansiedad, estrés, depresión, fobias, procesos de duelo y otros desafíos emocionales en la etapa adulta.
                  </p>
                </div>
              </div>
            </div>

            <div className="tonal-card p-stack-md rounded-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-headline-sm flex-shrink-0 mt-2">family_restroom</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Asesoramiento familiar</h3>
                  <p className="text-on-surface-variant font-body-md">
                    Herramientas prácticas para mejorar la comunicación familiar, resolver conflictos y fortalecer los vínculos en el núcleo del hogar.
                  </p>
                </div>
              </div>
            </div>

            <div className="tonal-card p-stack-md rounded-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-headline-sm flex-shrink-0 mt-2">child_care</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Terapia infantojuvenil</h3>
                  <p className="text-on-surface-variant font-body-md">
                    Intervención especializada para niños y adolescentes, centrada en su bienestar emocional, desarrollo saludable y adaptación a los cambios.
                  </p>
                </div>
              </div>
            </div>

            <div className="tonal-card p-stack-md rounded-xl">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-headline-sm flex-shrink-0 mt-2">sentiment_satisfied</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">Crecimiento personal</h3>
                  <p className="text-on-surface-variant font-body-md">
                    Acompañamiento en procesos de autoconocimiento, desarrollo de habilidades sociales y emocionales, y construcción de una vida más plena.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="mb-stack-md text-center">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Mi enfoque terapéutico</h2>
          <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Mi práctica se fundamenta en la integración de diferentes corrientes terapéuticas, priorizando siempre la evidencia científica y la adaptación a las necesidades únicas de cada persona. Combino técnicas de terapia cognitivo-conductual con un enfoque humanista que valora la calidez, la empatía y la autenticidad.
          </p>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Entiendo la terapia como un proceso colaborativo donde tú eres el experto en tu propia vida. Mi rol es guiarte, ofrecer nuevas perspectivas y facilitar herramientas prácticas que te permitan tomar decisiones más conscientes y vivir de manera más alineada con tus valores.
          </p>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            La terapia online no es una versión "inferior" de la terapia presencial. Es una modalidad que, gracias a la tecnología, nos permite trabajar desde el confort y la privacidad de tu espacio, reduciendo barreras de acceso y permitiendo una mayor flexibilidad. La conexión genuina entre terapeuta y cliente trasciende la pantalla.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-on-primary py-stack-md">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-primary mb-2">¿Listo para empezar?</h2>
            <p className="font-body-md text-on-primary-container">
              La primera sesión es completamente gratuita. Sin compromisos, solo un espacio seguro.
            </p>
          </div>
          <Link
            href="/contacto"
            className="btn-primary px-8 py-4 rounded-full font-label-md hover:scale-[0.98] whitespace-nowrap bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim"
          >
            Reservar sesión
          </Link>
        </div>
      </section>
    </>
  )
}
