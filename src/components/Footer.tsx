import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-brand-light mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/cgapsicologia.png"
                alt="cgapsicologia Logo"
                width={60}
                height={50}
                className="h-12 w-auto rounded"
              />
              <h3 className="text-xl font-semibold text-brand-gold">cgapsicologia</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Psicóloga General Sanitaria especializada en terapia online para adultos, familias e infancia-adolescencia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-gold">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-mi" className="hover:text-brand-gold transition-colors">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-brand-gold transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/terapia-online" className="hover:text-brand-gold transition-colors">
                  Terapia Online
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-gold">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/34666666666" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="tel:+34666666666" className="hover:text-brand-gold transition-colors">
                  +34 666 666 666
                </a>
              </li>
              <li>
                <a href="mailto:contacto@cgapsicologia.es" className="hover:text-brand-gold transition-colors">
                  contacto@cgapsicologia.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-gold border-opacity-30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} cgapsicologia. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="hover:text-brand-gold transition-colors">
                Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-brand-gold transition-colors">
                Términos
              </Link>
              <Link href="/cookies" className="hover:text-brand-gold transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
