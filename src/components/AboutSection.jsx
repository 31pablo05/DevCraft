"use client"

import { useState, useEffect, useRef } from "react"
import { Code, Palette, Zap, Award, Coffee, Target, Heart, Sparkles } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [countUp, setCountUp] = useState({ projects: 0, hours: 0, clients: 0, years: 0 })
  const sectionRef = useRef(null)
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animated counter
  useEffect(() => {
    if (isVisible) {
      const targets = { projects: 10, hours: 500, clients: 5, years: 3 }
      const duration = 2000
      const steps = 60
      const increment = {
        projects: targets.projects / steps,
        hours: targets.hours / steps,
        clients: targets.clients / steps,
        years: targets.years / steps
      }

      let current = 0
      const timer = setInterval(() => {
        current++
        if (current <= steps) {
          setCountUp({
            projects: Math.min(Math.floor(increment.projects * current), targets.projects),
            hours: Math.min(Math.floor(increment.hours * current), targets.hours),
            clients: Math.min(Math.floor(increment.clients * current), targets.clients),
            years: Math.min(Math.floor(increment.years * current), targets.years)
          })
        } else {
          clearInterval(timer)
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const achievements = [
    { icon: <Award className="w-6 h-6" />, title: "Proyectos Completados", value: countUp.projects, suffix: "+", gradient: "from-[#3e70e0] to-[#610593]" },
    { icon: <Coffee className="w-6 h-6" />, title: "Horas de Código", value: countUp.hours, suffix: "+", gradient: "from-[#610593] to-[#290258]" },
    { icon: <Target className="w-6 h-6" />, title: "Clientes Satisfechos", value: countUp.clients, suffix: "+", gradient: "from-[#3e70e0] to-[#290258]" },
    { icon: <Heart className="w-6 h-6" />, title: "Años de Pasión", value: countUp.years, suffix: "+", gradient: "from-[#290258] to-[#3e70e0]" }
  ]

  return (
    <>
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(62, 112, 224, 0.4),
                        0 0 40px rgba(97, 5, 147, 0.2),
                        inset 0 0 20px rgba(62, 112, 224, 0.1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(62, 112, 224, 0.6),
                        0 0 80px rgba(97, 5, 147, 0.4),
                        inset 0 0 30px rgba(62, 112, 224, 0.2);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .floating-slow { animation: float-slow 6s ease-in-out infinite; }
        .floating-medium { animation: float-medium 5s ease-in-out infinite; }
        .floating-fast { animation: float-fast 4s ease-in-out infinite; }
        
        .glass-card {
          background: linear-gradient(135deg, 
            rgba(62, 112, 224, 0.05) 0%,
            rgba(97, 5, 147, 0.05) 50%,
            rgba(41, 2, 88, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(62, 112, 224, 0.2);
        }

        .glass-card:hover {
          background: linear-gradient(135deg, 
            rgba(62, 112, 224, 0.1) 0%,
            rgba(97, 5, 147, 0.1) 50%,
            rgba(41, 2, 88, 0.1) 100%
          );
          border-color: rgba(62, 112, 224, 0.4);
        }

        .text-gradient-primary {
          background: linear-gradient(135deg, #3e70e0 0%, #610593 50%, #290258 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .border-gradient-primary {
          border-image: linear-gradient(90deg, #3e70e0, #610593, #290258) 1;
        }

        .shadow-custom {
          box-shadow: 
            0 10px 40px rgba(62, 112, 224, 0.3),
            0 5px 20px rgba(97, 5, 147, 0.2),
            inset 0 1px 0 rgba(253, 254, 255, 0.1);
        }

        .image-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .bg-animated {
          background: linear-gradient(135deg, #3e70e0, #610593, #290258, #3e70e0);
          background-size: 300% 300%;
          animation: gradient-shift 8s ease infinite;
        }

        .slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="sobre-mi" 
        className="relative py-8 sm:py-10 lg:py-12 px-3 sm:px-4 w-full max-w-full overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #000000 0%, #290258 50%, #000000 100%)' }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-20"
               style={{ background: 'radial-gradient(circle, #3e70e0 0%, transparent 70%)' }}
          />
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full blur-3xl opacity-20"
               style={{ background: 'radial-gradient(circle, #610593 0%, transparent 70%)' }}
          />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-10"
               style={{ background: 'radial-gradient(circle, #290258 0%, transparent 70%)' }}
          />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-6 sm:mb-7 lg:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 mr-2" style={{ color: '#3e70e0' }} />
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-primary">
                Sobre mí
              </h2>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 ml-2" style={{ color: '#610593' }} />
            </div>
            <div className="w-20 sm:w-28 lg:w-32 h-1.5 mx-auto rounded-full mb-6 bg-animated" />
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4 sm:px-0 font-light">
              Transformando ideas en <span className="text-gradient-primary font-semibold">experiencias digitales excepcionales</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start w-full">
            {/* Image Section */}
            <div className={`relative order-2 lg:order-1 w-full transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 w-full group px-4 sm:px-0 mt-4 sm:mt-6 lg:mt-8">
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
                    <img 
                      loading="lazy" 
                      width="400" 
                      height="400" 
                      src="/assets/imagenesPerfil/perfil3.svg"
                      alt="Pablo Proboste - Desarrollador Full Stack"
                      className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-custom transform group-hover:scale-105 transition-all duration-700 relative z-10 image-glow"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                         style={{
                           background: 'linear-gradient(135deg, rgba(62, 112, 224, 0.2) 0%, rgba(97, 5, 147, 0.2) 50%, rgba(41, 2, 88, 0.2) 100%)'
                         }}
                    />
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center floating-slow shadow-custom z-20"
                       style={{ background: 'linear-gradient(135deg, #3e70e0, #610593)' }}>
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#fdfeff]" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center floating-medium shadow-custom z-20"
                       style={{ background: 'linear-gradient(135deg, #610593, #290258)' }}>
                    <Palette className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 text-[#fdfeff]" />
                  </div>
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center floating-fast shadow-custom z-20"
                       style={{ background: 'linear-gradient(135deg, #290258, #3e70e0)' }}>
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#fdfeff]" />
                  </div>
                </div>
                
                {/* Background Layers */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full h-full rounded-2xl sm:rounded-3xl -z-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"
                     style={{ background: 'linear-gradient(135deg, rgba(62, 112, 224, 0.3), rgba(97, 5, 147, 0.2))' }}
                />
                <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-full h-full rounded-2xl sm:rounded-3xl -z-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-700"
                     style={{ background: 'linear-gradient(135deg, rgba(97, 5, 147, 0.2), rgba(41, 2, 88, 0.2))' }}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-3 sm:space-y-4 lg:space-y-5 order-1 lg:order-2 text-center lg:text-left w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Story Section */}
              <div className="space-y-2 sm:space-y-3 leading-relaxed text-sm sm:text-base lg:text-lg px-2 sm:px-0">
                <div className="relative">
                  <div className="absolute -left-4 sm:-left-6 top-0 text-6xl sm:text-8xl font-serif hidden sm:block opacity-20"
                       style={{ color: '#3e70e0' }}>
                    "
                  </div>
                  <p className="text-[#fdfeff] text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                    Soy un <span className="text-gradient-primary font-bold">desarrollador frontend apasionado</span> con más de 3 años de experiencia creando interfaces web modernas y funcionales.
                  </p>
                </div>
                
                <p className="text-slate-300 text-base sm:text-lg">
                  Mi enfoque se centra en escribir <span className="font-semibold" style={{ color: '#3e70e0' }}>código limpio</span>, crear experiencias de usuario excepcionales y mantenerme actualizado con las últimas tendencias del desarrollo web.
                </p>
                
                <p className="text-slate-300 text-base sm:text-lg hidden sm:block">
                  Disfruto transformando <span className="font-semibold" style={{ color: '#610593' }}>diseños complejos</span> en aplicaciones web intuitivas, eficientes y visualmente impactantes que generan resultados reales.
                </p>
                
                <blockquote className="relative glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl mt-2 sm:mt-3 group hover:scale-105 transition-all duration-300">
                  <div className="absolute top-2 left-4 text-4xl sm:text-5xl opacity-20" style={{ color: '#3e70e0' }}>"</div>
                  <p className="text-slate-200 italic text-sm sm:text-base lg:text-lg relative z-10 pt-4 sm:pt-6">
                    La programación no es solo escribir código, es crear experiencias que conecten con las personas y resuelvan problemas reales.
                  </p>
                  <div className="absolute bottom-2 right-4 text-4xl sm:text-5xl rotate-180 opacity-20" style={{ color: '#610593' }}>"</div>
                </blockquote>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 pt-2 sm:pt-3 px-2 sm:px-0">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title}
                    className={`glass-card p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl group cursor-pointer transform hover:scale-110 transition-all duration-500 hover:-rotate-2 ${isVisible ? 'scale-in' : 'opacity-0'}`}
                    style={{ 
                      animationDelay: `${700 + index * 150}ms`,
                      boxShadow: '0 8px 32px rgba(62, 112, 224, 0.15)'
                    }}
                  >
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 bg-gradient-to-br ${achievement.gradient}`}>
                        <div className="scale-75 sm:scale-90 lg:scale-100 text-[#fdfeff]">
                          {achievement.icon}
                        </div>
                      </div>
                      <div className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1 sm:mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-500`}>
                        {achievement.value}{achievement.suffix}
                      </div>
                      <div className="text-slate-300 text-xs sm:text-sm lg:text-base font-medium leading-tight px-1">
                        {achievement.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="relative z-50 text-center mt-6 sm:mt-8 lg:mt-10 px-2 sm:px-0 mb-8 sm:mb-10">
            <div className="glass-card p-4 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl max-w-3xl mx-auto shadow-custom hover:scale-105 transition-all duration-500 border-2 border-[#3e70e0]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#fdfeff] mb-3 sm:mb-4">
                ¿Listo para crear algo <span className="text-gradient-primary">increíble</span> juntos?
              </h3>
              <p className="text-slate-300 mb-4 sm:mb-5 text-sm sm:text-base lg:text-lg max-w-xl mx-auto">
                Transformemos tus ideas en realidad digital y llevemos tu proyecto al siguiente nivel
              </p>
              <button className="bg-animated text-[#fdfeff] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-custom hover:shadow-2xl w-full sm:w-auto">
                Trabajemos Juntos
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}