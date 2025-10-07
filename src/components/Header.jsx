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

  // Función para descargar CV
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV/CV-PabloProboste DesarrolladorFrontend.pdf'
    link.download = 'CV-PabloProboste-DesarrolladorFrontend.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'header-glass-header-scrolled border-b-2' 
          : 'header-glass-header border-b'
      } header-border-gradient`}>
        <div className="mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 w-full max-w-7xl">
          <div className="flex items-center justify-between w-full">
            {/* Logo con efecto flotante y resplandor */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-lg sm:text-xl md:text-2xl font-bold flex-shrink-0">
              <div className="logo-container relative group cursor-pointer">
                <img 
                  width="48" 
                  height="48" 
                  src="/assets/logo/logomejorado.webp" 
                  alt="Pablo Proboste Logo" 
                  className="header-logo-float w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transform transition-all duration-300 hover:scale-110"
                  fetchpriority="high"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{
                       background: 'radial-gradient(circle, rgba(62, 112, 224, 0.3) 0%, transparent 70%)',
                       filter: 'blur(20px)'
                     }}
                />
              </div>
              <span className="header-gradient-text font-extrabold tracking-tight whitespace-nowrap text-sm sm:text-base md:text-xl lg:text-2xl">
                Pablo Proboste
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-shrink-0" role="navigation" aria-label="Navegación principal">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm xl:text-base font-medium whitespace-nowrap transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'header-nav-link-active scale-105'
                      : 'text-slate-200 hover:text-[#3e70e0]'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                  <span className={`header-nav-underline absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </button>
              ))}
              <Button 
                onClick={downloadCV}
                className="header-button-glow text-sm xl:text-base px-4 xl:px-6 py-2 flex-shrink-0 font-semibold transform transition-all duration-300 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #3e70e0 0%, #610593 50%, #290258 100%)',
                  border: '1px solid rgba(62, 112, 224, 0.3)'
                }}
                aria-label="Descargar currículum vitae"
              >
                <Download className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Descargar CV</span>
                <span className="xl:hidden">CV</span>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg transition-all duration-300 flex-shrink-0 transform hover:scale-110 hover:bg-[#290258]/50" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              style={{
                border: '1px solid rgba(62, 112, 224, 0.3)'
              }}
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
                      style={{ color: '#fdfeff' }} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
                   style={{ color: '#fdfeff' }} />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'max-h-[500px] opacity-100 mt-4' 
              : 'max-h-0 opacity-0 mt-0'
          }`}>
            <nav 
              className={`pb-4 pt-4 rounded-xl mx-1 transition-all duration-300 ${
                isMenuOpen ? 'header-mobile-menu-bg' : ''
              }`}
              style={{
                border: isMenuOpen ? '1px solid rgba(62, 112, 224, 0.3)' : 'none'
              }}
              id="mobile-menu"
              role="navigation"
              aria-label="Navegación móvil"
            >
              <div className="flex flex-col space-y-2 px-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left transition-all duration-300 py-3 px-4 rounded-lg group relative overflow-hidden ${
                      activeSection === item.id
                        ? 'text-[#3e70e0] transform scale-105'
                        : 'text-slate-200 hover:text-[#3e70e0]'
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: isMenuOpen ? 'header-slideInFromRight 0.5s ease-out forwards' : 'none',
                      background: activeSection === item.id 
                        ? 'linear-gradient(135deg, rgba(62, 112, 224, 0.2) 0%, rgba(97, 5, 147, 0.2) 100%)'
                        : 'transparent',
                      border: activeSection === item.id 
                        ? '1px solid rgba(62, 112, 224, 0.4)'
                        : '1px solid transparent'
                    }}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    <span className="relative z-10 font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="absolute left-0 top-0 h-full w-1 rounded-r-full"
                           style={{
                             background: 'linear-gradient(180deg, #3e70e0, #610593)'
                           }}
                      />
                    )}
                    <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"
                         style={{
                           background: 'linear-gradient(90deg, rgba(62, 112, 224, 0.1) 0%, rgba(97, 5, 147, 0.1) 100%)'
                         }}
                    />
                  </button>
                ))}
                <div className="pt-2 px-1">
                  <Button 
                    onClick={downloadCV}
                    className="header-button-glow w-full font-semibold transform transition-all duration-300 rounded-lg"
                    style={{ 
                      animationDelay: `${navItems.length * 100}ms`,
                      animation: isMenuOpen ? 'header-slideInFromRight 0.5s ease-out forwards' : 'none',
                      background: 'linear-gradient(135deg, #3e70e0 0%, #610593 50%, #290258 100%)',
                      border: '1px solid rgba(62, 112, 224, 0.3)'
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
    </>
  )
}