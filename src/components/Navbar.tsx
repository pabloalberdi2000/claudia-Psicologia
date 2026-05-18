'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-brand-light border-b border-brand-gold border-opacity-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-bold text-brand-dark hover:text-brand-gold transition-colors">
          CG Psicología
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-brand-dark hover:text-brand-gold transition-colors">
            Inicio
          </Link>
          <Link href="/sobre-mi" className="text-brand-dark hover:text-brand-gold transition-colors">
            Sobre mí
          </Link>
          <Link href="/servicios" className="text-brand-dark hover:text-brand-gold transition-colors">
            Servicios
          </Link>
          <Link href="/terapia-online" className="text-brand-dark hover:text-brand-gold transition-colors">
            Terapia Online
          </Link>
          <Link href="/contacto" className="px-6 py-2 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark transition-colors">
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brand-dark"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-brand-light border-b border-brand-gold border-opacity-20 md:hidden">
            <div className="flex flex-col gap-4 px-6 py-4">
              <Link
                href="/"
                className="text-brand-dark hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/sobre-mi"
                className="text-brand-dark hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              <Link
                href="/servicios"
                className="text-brand-dark hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/terapia-online"
                className="text-brand-dark hover:text-brand-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Terapia Online
              </Link>
              <Link
                href="/contacto"
                className="px-6 py-2 bg-brand-dark text-brand-light rounded hover:bg-brand-gold hover:text-brand-dark transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
