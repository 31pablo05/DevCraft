"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "./ui/Card"
import { Badge } from "./ui/Badge"
import { Code2, Palette, Wrench, Layers, Smartphone, Monitor, Github, Database } from "lucide-react"

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [skillsAnimated, setSkillsAnimated] = useState(false)
  const sectionRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setSkillsAnimated(true), 500)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Tus habilidades reales organizadas por categorías
  const coreSkills = [
    { name: "HTML5", level: 95, color: "from-orange-400 to-orange-600", icon: <Code2 className="w-5 h-5" /> },
    { name: "CSS3", level: 90, color: "from-blue-400 to-cyan-600", icon: <Palette className="w-5 h-5" /> },
    { name: "React", level: 88, color: "from-cyan-400 to-blue-600", icon: <Code2 className="w-5 h-5" /> },
    { name: "JSX", level: 87, color: "from-purple-400 to-pink-600", icon: <Code2 className="w-5 h-5" /> },
    { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-green-600", icon: <Layers className="w-5 h-5" /> },
    { name: "Responsive Design", level: 90, color: "from-pink-400 to-purple-600", icon: <Smartphone className="w-5 h-5" /> },
  ]

  const tools = [
    { name: "Git", level: 85, color: "from-red-400 to-orange-500", icon: <Github className="w-5 h-5" /> },
    { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-500", icon: <Code2 className="w-5 h-5" /> },
    { name: "GitHub", level: 80, color: "from-gray-400 to-gray-600", icon: <Github className="w-5 h-5" /> },
    { name: "Vercel", level: 75, color: "from-black to-gray-800", icon: <Monitor className="w-5 h-5" /> },
    { name: "Node.js", level: 70, color: "from-green-400 to-green-600", icon: <Database className="w-5 h-5" /> },
    { name: "MongoDB", level: 65, color: "from-green-500 to-teal-600", icon: <Database className="w-5 h-5" /> },
  ]

  // Floating particles for background effect
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3
  }))

  return (
    <section 
      ref={sectionRef}
      id="habilidades" 
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4 w-full max-w-full overflow-x-hidden section-dark"
    >
      {/* Animated Background with Particles - Mobile optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"></div>
        
        {/* Floating Code Particles - Smaller on mobile */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full opacity-20 sm:opacity-30 animate-bounce"
            style={{
              left: `${Math.max(8, Math.min(92, particle.x))}%`,
              top: `${Math.max(15, Math.min(80, particle.y))}%`,
              width: `${Math.max(2, particle.size * 0.8)}px`,
              height: `${Math.max(2, particle.size * 0.8)}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Background Gradient Blobs - Responsive sizing */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-full relative z-10">
        {/* Enhanced Header - Mobile responsive */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Habilidades & Tecnologías
            </span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto px-4 sm:px-0">
            Las tecnologías que domino para crear experiencias web modernas y funcionales
          </p>
        </div>

        {/* Core Skills Section - Mobile responsive */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Habilidades Principales</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            {coreSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={`glass-effect p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl card-glow-intense group cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${skillsAnimated ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <div className="scale-75 sm:scale-100">
                          {skill.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base truncate">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium flex-shrink-0 ml-2">{skill.level}%</span>
                  </div>
                  
                  {/* Animated Progress Bar - Mobile optimized */}
                  <div className="w-full bg-slate-800/50 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                      style={{ 
                        width: skillsAnimated ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200 + 500}ms`
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms Section - Mobile responsive */}
        <div className={`mb-12 sm:mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Herramientas & Plataformas</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            {tools.map((tool, index) => (
              <div 
                key={tool.name} 
                className={`glass-effect p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl card-glow group cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 ${skillsAnimated ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + coreSkills.length) * 150}ms` }}
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${tool.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <div className="scale-75 sm:scale-100">
                          {tool.icon}
                        </div>
                      </div>
                      <h4 className="font-semibold text-slate-100 group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base truncate">
                        {tool.name}
                      </h4>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium flex-shrink-0 ml-2">{tool.level}%</span>
                  </div>
                  
                  {/* Animated Progress Bar - Mobile optimized */}
                  <div className="w-full bg-slate-800/50 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                      style={{ 
                        width: skillsAnimated ? `${tool.level}%` : '0%',
                        transitionDelay: `${(index + coreSkills.length) * 200 + 500}ms`
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technologies Section - Mobile optimized */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Otras Tecnologías</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            {["Vite", "Bootstrap", "Framer Motion", "Helmet", "Electron"].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="tech" 
                className={`${skillsAnimated ? 'animate-slide-up' : 'opacity-0'} text-xs sm:text-sm`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-center mb-4 sm:mb-6 px-4">
            <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
            <h4 className="text-base sm:text-lg font-semibold text-slate-200">Herramientas de Diseño</h4>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {["Canva", "GitHub Copilot"].map((tool, index) => (
              <Badge 
                key={tool} 
                variant="skill" 
                className={`${skillsAnimated ? 'animate-slide-up' : 'opacity-0'} text-xs sm:text-sm`}
                style={{ animationDelay: `${1000 + index * 100}ms` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Mobile optimized */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect p-6 sm:p-8 rounded-xl sm:rounded-2xl card-glow-intense max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 sm:mb-4">
              ¿Necesitas estas tecnologías en tu proyecto?
            </h3>
            <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Estoy siempre aprendiendo y adaptándome a nuevas tecnologías
            </p>
            <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-glow-intense text-sm sm:text-base">
              Hablemos de tu proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
