'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/sobre-mi', label: 'Sobre mí' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/terapia-online', label: 'Terapia Online' },
    { href: '/contacto', label: 'Contacto' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="bg-surface border-b border-outline-variant/30 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
        {/* Logo/Brand */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Image
            src="/cgapsicologia.jpeg"
            alt="Claudia González Álvarez - Psicóloga"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <div className="flex flex-col gap-0.5">
            <span className="font-cursive text-primary text-xl leading-tight font-light">Claudia González Álvarez</span>
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">Psicóloga</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-label-md text-label-md transition-colors duration-300 relative ${
                isActive(link.href)
                  ? 'text-secondary font-bold after:content-[\'\'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-secondary after:rounded-full'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-surface border-b border-outline-variant/30 md:hidden">
            <div className="flex flex-col gap-4 px-margin-mobile py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label-md text-label-md transition-colors ${
                    isActive(link.href) ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="btn-primary px-6 py-2 rounded-full w-full" onClick={() => setIsOpen(false)}>
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
