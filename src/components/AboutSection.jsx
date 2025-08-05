"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Palette, Zap, Award, Coffee, Target, Heart } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "Proyectos Completados", value: "25+", color: "text-cyan-400" },
    { icon: <Coffee className="w-6 h-6" />, title: "Tazas de Café", value: "1.2K+", color: "text-orange-400" },
    { icon: <Target className="w-6 h-6" />, title: "Clientes Satisfechos", value: "15+", color: "text-pink-400" },
    { icon: <Heart className="w-6 h-6" />, title: "Años de Pasión", value: "3+", color: "text-purple-400" }
  ]
  return (
    <section 
      ref={sectionRef}
      id="sobre-mi" 
      className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-4 w-full max-w-full overflow-x-hidden section-light"
    >
      {/* Animated Background Elements - Smaller on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-pink-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-full relative z-10">
        {/* Section Header - Better mobile spacing */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100 mb-3 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Sobre mí
            </span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto mb-3 sm:mb-4"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            Transformando ideas en experiencias digitales excepcionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center w-full">
          {/* Enhanced Image Section - Mobile optimized */}
          <div className={`relative order-2 lg:order-1 w-full max-w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="max-w-xs sm:max-w-sm lg:max-w-md mx-auto w-full group px-4 sm:px-0">
              {/* Multiple Image Layers for 3D Effect */}
              <div className="relative">
                <img 
                  src="/assets/1.png"
                  alt="Pablo Proboste - Desarrollador Full Stack"
                  width={400} 
                  height={400} 
                  className="w-full rounded-xl sm:rounded-2xl shadow-2xl max-w-full card-glow-intense transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-500 relative z-10"
                />
                
                {/* Floating Elements Around Image - Smaller on mobile */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center floating-slow card-glow z-20">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center floating-medium card-glow z-20">
                  <Palette className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center floating-fast card-glow z-20">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
              
              {/* Background Layers - Adjusted for mobile */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-4 lg:left-4 w-full h-full bg-gradient-to-br from-orange-400/20 to-cyan-400/20 rounded-xl sm:rounded-2xl -z-10 transform rotate-2 sm:rotate-3 group-hover:rotate-4 sm:group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-full h-full bg-gradient-to-br from-pink-400/10 to-purple-400/10 rounded-xl sm:rounded-2xl -z-20 transform rotate-4 sm:rotate-6 group-hover:rotate-8 sm:group-hover:rotate-12 transition-transform duration-700"></div>
            </div>
          </div>

          {/* Enhanced Content Section - Mobile optimized */}
          <div className={`space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left w-full max-w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Story Section - Better mobile readability */}
            <div className="space-y-4 sm:space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
              <p className="text-base sm:text-lg relative">
                <span className="absolute -left-2 sm:-left-4 top-0 text-3xl sm:text-6xl text-cyan-400/20 font-serif hidden sm:block">"</span>
                <span className="sm:ml-0">Soy un <span className="font-semibold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">desarrollador frontend apasionado</span> con más de 3 años de experiencia creando interfaces web modernas y funcionales.</span>
              </p>
              <p>
                Mi enfoque se centra en escribir <span className="text-cyan-400 font-semibold">código limpio</span>, crear experiencias de usuario excepcionales y mantenerme actualizado con las últimas tendencias del desarrollo web.
              </p>
              <p className="hidden sm:block">
                Disfruto transformando <span className="text-pink-400 font-semibold">diseños complejos</span> en aplicaciones web intuitivas, eficientes y visualmente impactantes.
              </p>
              <blockquote className="text-slate-400 italic border-l-2 sm:border-l-4 border-cyan-400/30 pl-3 sm:pl-4 mt-4 sm:mt-6 text-sm sm:text-base bg-slate-800/20 py-3 sm:py-4 rounded-r-lg">
                "La programación no es solo escribir código, es crear experiencias que conecten con las personas y resuelvan problemas reales."
              </blockquote>
            </div>

            {/* Achievements Grid - Mobile responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 px-2 sm:px-0">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className={`glass-effect p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl card-glow group cursor-pointer transform hover:scale-105 transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${600 + index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-slate-800 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 ${achievement.color}`}>
                      <div className="scale-75 sm:scale-90 lg:scale-100">
                        {achievement.icon}
                      </div>
                    </div>
                    <div className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.value}
                    </div>
                    <div className="text-slate-400 text-xs sm:text-sm leading-tight px-1">
                      {achievement.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Mobile optimized */}
        <div className={`text-center mt-12 sm:mt-16 px-2 sm:px-0 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect p-6 sm:p-8 rounded-xl sm:rounded-2xl card-glow max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100 mb-3 sm:mb-4">
              ¿Listo para crear algo increíble juntos?
            </h3>
            <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Transformemos tus ideas en realidad digital
            </p>
            <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-glow-intense text-sm sm:text-base w-full sm:w-auto">
              Trabajemos Juntos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
