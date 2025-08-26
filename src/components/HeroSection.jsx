"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/Button"
import { ArrowRight, Code2, Palette, Smartphone, Sparkles, Zap, Cpu } from "lucide-react"

const roles = ["Frontend", "React", "JavaScript", "UI/UX"]

export default function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [particles] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }))
  )
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
  }

  // Typing animation effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let currentIndex = 0
    let isDeleting = false
    
    const typeInterval = setInterval(() => {
      if (!isDeleting && currentIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, currentIndex + 1))
        currentIndex++
      } else if (!isDeleting && currentIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentRole.substring(0, currentIndex - 1))
        currentIndex--
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }, isDeleting ? 100 : 150)

    return () => clearInterval(typeInterval)
  }, [currentRoleIndex])

  return (
    <section id="inicio" className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 px-2 sm:px-4 w-full max-w-full overflow-x-hidden section-dark min-h-[calc(100vh-5rem)] flex items-center">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Floating Particles - Contained within bounds */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full opacity-20 animate-bounce"
            style={{
              left: `${Math.max(5, Math.min(95, particle.x))}%`,
              top: `${Math.max(10, Math.min(85, particle.y))}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Morphing Background Blobs - Better positioning */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000 transform -rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-orange-400/10 to-red-600/10 rounded-full blur-3xl animate-pulse delay-2000 transform rotate-90"></div>
      </div>

      <div className="container mx-auto max-w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          {/* Enhanced Content Section */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left w-full order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 w-full">
              {/* Main Heading with Staggered Animation */}
              <div className="overflow-hidden">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight w-full break-words animate-slide-up">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300 cursor-default">
                    Desarrollador
                  </span>
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-gradient-shift">
                      {typedText}
                      <span className="inline-block w-0.5 h-8 sm:h-10 lg:h-12 bg-cyan-400 ml-1 animate-pulse"></span>
                    </span>
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="overflow-hidden">
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-full lg:max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 animate-slide-up delay-200">
                  <span className="inline-block">Especializado en crear</span>{" "}
                  <span className="inline-block font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    interfaces modernas
                  </span>{" "}
                  <span className="inline-block">y funcionales con pasión por el detalle.</span>
                  <br className="hidden sm:block" />
                  <span className="inline-block mt-2">Transformo ideas en</span>{" "}
                  <span className="inline-block font-semibold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                    experiencias web excepcionales
                  </span>
                  <span className="inline-block"> que generan resultados.</span>
                </p>
              </div>
            </div>

            {/* Enhanced Buttons with 3D Effects */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full px-2 sm:px-0 animate-slide-up delay-400">
              <Button
                onClick={() => scrollToSection('proyectos')}
                size="lg"
                className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 w-full sm:w-auto flex-shrink-0 card-glow-intense transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Ver proyectos
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                onClick={() => scrollToSection('contacto')}
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-300 bg-transparent/50 backdrop-blur-sm w-full sm:w-auto flex-shrink-0 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Hablemos
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Enhanced Tech Stack with Icons Animation */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 pt-4 w-full px-2 sm:px-0 animate-slide-up delay-600">
              <div className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-cyan-400 rounded-full opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="text-xs sm:text-sm lg:text-base text-slate-300 whitespace-nowrap group-hover:text-slate-100 transition-colors duration-300">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-pink-400 rounded-full opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="text-xs sm:text-sm lg:text-base text-slate-300 whitespace-nowrap group-hover:text-slate-100 transition-colors duration-300">UI/UX Focus</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-orange-400 rounded-full opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="text-xs sm:text-sm lg:text-base text-slate-300 whitespace-nowrap group-hover:text-slate-100 transition-colors duration-300">Responsive</span>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0 group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="relative">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="text-xs sm:text-sm lg:text-base text-slate-300 whitespace-nowrap group-hover:text-slate-100 transition-colors duration-300">Performance</span>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section with 3D Effects */}
          <div className="relative order-1 lg:order-2 w-full max-w-full flex justify-center lg:justify-end animate-slide-up delay-800 py-8">
            <div className="relative z-10 max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-xl w-full group perspective-1000">
              {/* Floating Tech Icons - Better positioned */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center floating-slow card-glow">
                  <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center floating-medium card-glow">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 z-20">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center floating-fast card-glow">
                  <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>

              {/* Main Image Container with Better Sizing */}
              <div className="relative transform-gpu group-hover:rotate-y-12 group-hover:rotate-x-6 transition-all duration-700 ease-out px-4 sm:px-6 lg:px-8">
                <img 
                  src="/assets/pablo-proboste2.png"
                  alt="Pablo Proboste - Desarrollador Frontend especializado en React y JavaScript"
                  width={500} 
                  height={500} 
                  loading="eager"
                  className="w-full h-auto rounded-2xl shadow-2xl max-w-full card-glow-intense transform group-hover:scale-105 transition-all duration-500 aspect-square object-cover"
                />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm scale-105"></div>
                
                {/* Holographic Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Multiple Background Layers - Adjusted positioning */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[calc(100%-1rem)] h-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-2xl -z-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-[calc(100%-2rem)] h-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] sm:h-[calc(100%-3rem)] bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-2xl -z-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-700"></div>
              
              {/* Glowing Orbs - Better positioned */}
              <div className="absolute top-1/4 -left-8 w-4 h-4 sm:w-6 sm:h-6 bg-cyan-400 rounded-full opacity-60 animate-pulse blur-sm"></div>
              <div className="absolute bottom-1/3 -right-6 w-3 h-3 sm:w-4 sm:h-4 bg-pink-400 rounded-full opacity-40 animate-pulse delay-1000 blur-sm"></div>
              <div className="absolute top-1/2 -left-4 w-2 h-2 sm:w-3 sm:h-3 bg-orange-400 rounded-full opacity-50 animate-pulse delay-2000 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Floating Stats/Metrics - Better positioned */}
        <div className="absolute bottom-2 left-4 sm:bottom-4 sm:left-8 hidden lg:block animate-slide-up delay-1000">
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 sm:p-4 card-glow">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-xs sm:text-sm">Disponible para proyectos</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-8 hidden lg:block animate-slide-up delay-1200">
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 sm:p-4 card-glow">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">2+</div>
              <div className="text-slate-400 text-xs">Años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
