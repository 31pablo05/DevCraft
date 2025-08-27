"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/Button"
import { Mail, Linkedin, Github, Instagram, Facebook, MessageCircle, ArrowUp, Heart, Code, Coffee, Sparkles, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())
  const footerRef = useRef(null)

  // Datos de contacto reales
  const contactInfo = {
    email: "pabloproboste64@gmail.com",
    phone: "+54 280 438-9134",
    whatsapp: "5492804389134",
    location: "Trelew, Chubut, Argentina",
    social: {
      linkedin: "https://www.linkedin.com/in/pablo-proboste/",
      github: "https://github.com/31pablo05",
      instagram: "https://www.instagram.com/probostepablo67/",
      facebook: "https://www.facebook.com/pablo.proboste.7"
    }
  }

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer 
      ref={footerRef}
      className="relative border-t border-purple-500/20 section-light"
    >
      <div className="container mx-auto max-w-6xl relative z-10 py-12 sm:py-16 px-6 sm:px-8">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Brand Section */}
          <div className="lg:col-span-2 text-center md:text-left px-2">
            <div className="mb-6 mt-8">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 mr-3 animate-pulse" />
                <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Pablo Proboste
                </h3>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-4">
                Desarrollador Frontend especializado en crear experiencias web modernas, funcionales y escalables con las últimas tecnologías.
              </p>
              <div className="flex items-center justify-center md:justify-start text-slate-400 text-sm space-x-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1 text-pink-400" />
                  <span>{contactInfo.location}</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="w-4 h-4 mr-1 text-orange-400" />
                  <span>Disponible para proyectos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left px-2 mt-8">
            <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-6 flex items-center justify-center md:justify-start">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              Enlaces rápidos
            </h4>
            <div className="space-y-3">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Sobre mí', href: '#sobre-mi' },
                { name: 'Proyectos', href: '#proyectos' },
                { name: 'Habilidades', href: '#habilidades' },
                { name: 'Contacto', href: '#contacto' }
              ].map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left px-2 overflow-visible mt-8">
            <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-6 flex items-center justify-center md:justify-start">
              <Heart className="w-5 h-5 mr-2 text-pink-400" />
              Conecta conmigo
            </h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-center md:justify-start text-slate-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center justify-center md:justify-start text-slate-300 hover:text-orange-400 transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start space-x-3 overflow-visible">
              <Button
                onClick={() => window.open(contactInfo.social.linkedin, '_blank')}
                size="sm"
                variant="ghost"
                className="glass-effect hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500 text-slate-300 p-3 rounded-xl card-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex-shrink-0"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open(contactInfo.social.github, '_blank')}
                size="sm"
                variant="ghost"
                className="glass-effect hover:bg-gray-600/20 hover:text-gray-300 hover:border-gray-500 text-slate-300 p-3 rounded-xl card-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex-shrink-0"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open(contactInfo.social.instagram, '_blank')}
                size="sm"
                variant="ghost"
                className="glass-effect hover:bg-pink-600/20 hover:text-pink-400 hover:border-pink-500 text-slate-300 p-3 rounded-xl card-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex-shrink-0"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open(contactInfo.social.facebook, '_blank')}
                size="sm"
                variant="ghost"
                className="glass-effect hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500 text-slate-300 p-3 rounded-xl card-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex-shrink-0"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=¡Hola Pablo! Me interesa conocer más sobre tus servicios 👋`, '_blank')}
                size="sm"
                variant="ghost"
                className="glass-effect hover:bg-green-600/20 hover:text-green-400 hover:border-green-500 text-slate-300 p-3 rounded-xl card-glow transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex-shrink-0"
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-12 sm:my-16 mx-2"></div>

        {/* Bottom Section */}
        <div className={`flex flex-col items-center text-center space-y-4 transition-all duration-1000 delay-500 px-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div>
            <p className="text-slate-400 text-sm">
              © {currentYear} Pablo Proboste. Todos los derechos reservados.
            </p>
            <p className="text-slate-500 text-xs mt-1 flex items-center justify-center">
              Hecho con <Heart className="w-3 h-3 mx-1 text-red-400 animate-pulse" /> y <Code className="w-3 h-3 mx-1 text-cyan-400" /> React + Tailwind CSS
            </p>
          </div>
          
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="glass-effect bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 hover:from-cyan-500/30 hover:via-blue-600/30 hover:to-purple-600/30 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/50 px-4 py-2 rounded-xl card-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1 flex-shrink-0"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Volver arriba
          </Button>
        </div>
      </div>
    </footer>
  )
}
