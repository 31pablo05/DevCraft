"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/Button"
import { Menu, X, Download } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  // Efecto de scroll para cambiar apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto']
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const bottom = top + element.offsetHeight
          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll con offset
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const top = element.offsetTop - headerHeight
      window.scrollTo({
        top,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('header')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'contacto', label: 'Contacto' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect-strong border-b border-purple-500/50 backdrop-blur-xl' 
        : 'glass-effect border-b border-purple-800/30'
    }`}>
      <div className="mx-auto px-3 sm:px-4 py-4 w-full max-w-7xl">
        <div className="flex items-center justify-between w-full">
          {/* Logo con efecto typing */}
          <div className="flex items-center space-x-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent flex-shrink-0">
            <img 
              src="/assets/logo/logonuevo.svg" 
              alt="Pablo Proboste Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse"
            />
            <span className="typing-animation">Pablo Proboste</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-shrink-0" role="navigation" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm lg:text-base whitespace-nowrap transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-cyan-400 scale-105'
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
            <Button 
              className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 text-sm px-3 lg:px-4 flex-shrink-0 card-glow transform hover:scale-105 transition-all duration-300"
              aria-label="Descargar currículum vitae"
            >
              <Download className="w-4 h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Descargar CV</span>
              <span className="lg:hidden">CV</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-purple-800/30 transition-all duration-300 flex-shrink-0 transform hover:scale-110" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 text-slate-300 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              <X className={`w-6 h-6 text-slate-300 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <nav 
            className="pb-4 border-t border-purple-800/30 pt-4 glass-effect rounded-lg mx-1"
            id="mobile-menu"
            role="navigation"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col space-y-2 px-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left transition-all duration-300 py-3 px-3 rounded-md group relative overflow-hidden ${
                    activeSection === item.id
                      ? 'text-cyan-400 bg-purple-800/40 transform scale-105'
                      : 'text-slate-300 hover:text-cyan-400 hover:bg-purple-800/30'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-pink-400 rounded-r-full" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
              <div className="pt-2 px-2">
                <Button 
                  className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 w-full card-glow transform hover:scale-105 transition-all duration-300"
                  style={{ 
                    animationDelay: `${navItems.length * 100}ms`,
                    animation: isMenuOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                  aria-label="Descargar currículum vitae"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
