import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md py-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="space-y-4">
          <span className="font-headline-sm text-headline-sm text-primary">Claudia González Álvarez</span>
          <p className="font-body-md text-on-surface-variant pr-8">Acompañando procesos de bienestar desde la profesionalidad, la cercanía y la flexibilidad de la terapia online.</p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-primary font-bold mb-2">Enlaces rápidos</h4>
          <Link href="/" className="text-on-surface-variant hover:text-secondary transition-colors duration-300">
            Inicio
          </Link>
          <Link href="/sobre-mi" className="text-on-surface-variant hover:text-secondary transition-colors duration-300">
            Sobre mí
          </Link>
          <Link href="/servicios" className="text-on-surface-variant hover:text-secondary transition-colors duration-300">
            Servicios
          </Link>
          <Link href="/terapia-online" className="text-on-surface-variant hover:text-secondary transition-colors duration-300">
            Terapia Online
          </Link>
          <Link href="/contacto" className="text-on-surface-variant hover:text-secondary transition-colors duration-300">
            Contacto
          </Link>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-md text-primary font-bold mb-2">Información de contacto</h4>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary">mail</span>
            <span>info@cgapsicologia.com</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="material-symbols-outlined text-secondary">call</span>
            <span>+34 682 638 679</span>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-6 border-t border-outline-variant/10 text-center">
        <p className="text-label-sm text-outline">© {currentYear} Claudia González Álvarez Psicóloga. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
