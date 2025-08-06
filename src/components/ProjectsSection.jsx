"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"
import { Badge } from "./ui/Badge"
import PlaceholderImage from "./ui/PlaceholderImage"
import { Github, ExternalLink, ArrowRight, Filter, Grid, List, Play, Eye, Code2, Palette, ShoppingCart, Camera, Utensils, Heart, Music, GraduationCap } from "lucide-react"

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [projectsAnimated, setProjectsAnimated] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [particles, setParticles] = useState([])
  const sectionRef = useRef(null)

  // Tus proyectos reales organizados por categorías
  const projects = [
    {
      id: 1,
      title: "Maestra Patagónica",
      subtitle: "Tienda de Recursos Educativos",
      description: "Plataforma e-commerce especializada en recursos educativos para docentes. Incluye sistema de compras, catálogo interactivo y área de usuario.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      category: "ecommerce",
      github: "#",
      demo: "#",
      image: "Maestra Patagónica",
      featured: true,
      status: "Completado",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      id: 2,
      title: "SPA Chacra Pichirayen",
      subtitle: "Sitio Web de Spa y Bienestar",
      description: "Sitio web elegante para spa con sistema de reservas, galería de servicios y información detallada de tratamientos.",
      technologies: ["React", "Tailwind", "Framer Motion", "EmailJS"],
      category: "wellness",
      github: "#",
      demo: "#",
      image: "SPA Chacra Pichirayen",
      featured: true,
      status: "Completado",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Web App Nutricionista",
      subtitle: "Aplicación de Nutrición",
      description: "Aplicación web para consultorio nutricional con calculadoras de IMC, planes alimentarios y gestión de pacientes.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js"],
      category: "health",
      github: "#",
      demo: "#",
      image: "Web App Nutricionista",
      featured: true,
      status: "Completado",
      icon: <Utensils className="w-5 h-5" />
    },
    {
      id: 4,
      title: "Web App Prepizzas",
      subtitle: "Sistema de Pedidos de Pizzería",
      description: "Sistema de pedidos online para pizzería con menú interactivo, carrito de compras y seguimiento de pedidos en tiempo real.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "food",
      github: "#",
      demo: "#",
      image: "Web App Prepizzas",
      featured: false,
      status: "Completado",
      icon: <Utensils className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Federico Fotografía y Video",
      subtitle: "Portfolio Creativo",
      description: "Portfolio profesional para fotógrafo y videomaker con galería dinámica, efectos visuales y formulario de contacto.",
      technologies: ["React", "GSAP", "Lightbox", "Tailwind"],
      category: "portfolio",
      github: "#",
      demo: "#",
      image: "Federico Foto",
      featured: true,
      status: "Completado",
      icon: <Camera className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Web App Osteopatía",
      subtitle: "Aplicación Médica",
      description: "Plataforma para consultorio de osteopatía con sistema de turnos, historial de pacientes y información de tratamientos.",
      technologies: ["Vue.js", "Express", "MySQL", "Calendar API"],
      category: "health",
      github: "#",
      demo: "#",
      image: "Web App Osteopatía",
      featured: false,
      status: "Completado",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 7,
      title: "Aplicación de Escritorio - Tareas Diarias",
      subtitle: "App de Productividad",
      description: "Aplicación de escritorio para gestión de tareas diarias con drag & drop, notificaciones y análisis de rendimiento.",
      technologies: ["Electron", "React", "TypeScript", "SQLite"],
      category: "productivity",
      github: "#",
      demo: "#",
      image: "Tareas Diarias",
      featured: true,
      status: "En desarrollo",
      icon: <Code2 className="w-5 h-5" />
    },
    {
      id: 8,
      title: "Web App Convertidor de Videos a MP3",
      subtitle: "Herramienta de Conversión",
      description: "Aplicación web para convertir videos a formato MP3 con interfaz intuitiva, progreso en tiempo real y descarga directa.",
      technologies: ["React", "FFmpeg.js", "Web Workers", "File API"],
      category: "tools",
      github: "#",
      demo: "#",
      image: "Convertidor Videos MP3",
      featured: true,
      status: "Completado",
      icon: <Music className="w-5 h-5" />
    },
    {
      id: 9,
      title: "MyBeautyStudy - Estética de Cejas y Pestañas",
      subtitle: "Centro de Estética",
      description: "Sitio web profesional para centro de estética especializado en tratamientos de cejas y pestañas con sistema de citas.",
      technologies: ["React", "Tailwind", "Netlify Forms", "AOS"],
      category: "beauty",
      github: "#",
      demo: "#",
      image: "MyBeautyStudy",
      featured: false,
      status: "Completado",
      icon: <Palette className="w-5 h-5" />
    },
    {
      id: 10,
      title: "Landing Page - Curso de Micropigmentación de Cejas",
      subtitle: "Página Educativa",
      description: "Landing page optimizada para curso de micropigmentación con formularios de inscripción y testimonios de estudiantes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Intersection Observer"],
      category: "education",
      github: "#",
      demo: "#",
      image: "Curso Micropigmentación",
      featured: false,
      status: "Completado",
      icon: <GraduationCap className="w-5 h-5" />
    }
  ]

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'health', name: 'Salud', count: projects.filter(p => p.category === 'health').length },
    { id: 'portfolio', name: 'Portfolio', count: projects.filter(p => p.category === 'portfolio').length },
    { id: 'tools', name: 'Herramientas', count: projects.filter(p => p.category === 'tools').length },
    { id: 'beauty', name: 'Belleza', count: projects.filter(p => p.category === 'beauty').length }
  ]

  // Generar partículas para el fondo
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          moveX: (Math.random() - 0.5) * 0.3,
          moveY: (Math.random() - 0.5) * 0.3,
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setTimeout(() => setProjectsAnimated(true), 300)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animar partículas
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: Math.max(5, Math.min(95, particle.x + particle.moveX)),
        y: Math.max(5, Math.min(95, particle.y + particle.moveY)),
        moveX: particle.x <= 5 || particle.x >= 95 ? -particle.moveX : particle.moveX,
        moveY: particle.y <= 5 || particle.y >= 95 ? -particle.moveY : particle.moveY,
      })))
    }

    const interval = setInterval(animateParticles, 150)
    return () => clearInterval(interval)
  }, [])

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section 
      ref={sectionRef}
      id="proyectos" 
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 w-full max-w-full overflow-x-hidden section-light"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"></div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full opacity-20 sm:opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}

        {/* Background blobs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-full relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-3 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-2 sm:mb-6">
            Mis Proyectos
          </h2>
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-2 sm:mb-6 px-4 leading-relaxed">
            Una colección de proyectos reales que he desarrollado, desde e-commerce hasta aplicaciones especializadas
          </p>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto mb-1 sm:mb-8"></div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'glass-effect text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                activeFilter === category.id ? 'bg-white/20' : 'bg-slate-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className={`flex justify-center mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect rounded-lg p-1 flex">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 sm:p-3 rounded-md transition-all duration-300 ${
                viewMode === 'grid' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 sm:p-3 rounded-md transition-all duration-300 ${
                viewMode === 'list' 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        } gap-6 sm:gap-8 mb-12 transition-all duration-500`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`glass-effect rounded-2xl card-glow-intense group cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                projectsAnimated ? 'animate-slide-up opacity-100' : 'opacity-0'
              } ${viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''}`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.4) 100%)'
              }}
            >
              {/* Project Image */}
              <div className={`relative overflow-hidden ${
                viewMode === 'list' 
                  ? 'sm:w-1/3 h-48 sm:h-auto' 
                  : 'h-48 sm:h-56 rounded-t-2xl'
              }`}>
                <PlaceholderImage 
                  width={400} 
                  height={250} 
                  text={project.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completado' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>Destacado</span>
                    </div>
                  </div>
                )}

                {/* Overlay with action buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300">
                      <Play className="w-4 h-4" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className={`p-6 ${viewMode === 'list' ? 'sm:w-2/3 flex flex-col justify-between' : ''}`}>
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-400">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gradient-to-r from-slate-800/50 to-slate-700/50 text-slate-300 rounded-full text-xs border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-auto">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-cyan-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span className="truncate">Código</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white card-glow transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="truncate">Ver Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto card-glow-intense">
            <h3 className="text-2xl font-bold text-slate-100 mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-slate-300 mb-6">
              Me especializo en crear soluciones web personalizadas que impulsan tu negocio
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-glow-intense"
            >
              <span className="truncate">Hablemos de tu proyecto</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
