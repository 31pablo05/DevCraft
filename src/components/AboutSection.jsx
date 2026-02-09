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
      <section 
        ref={sectionRef}
        id="sobre-mi" 
        className="relative py-8 sm:py-10 lg:py-12 px-3 sm:px-4 w-full max-w-full overflow-hidden about-section-bg"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full blur-3xl opacity-20 about-bg-blob-1" />
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full blur-3xl opacity-20 about-bg-blob-2" />
          <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 rounded-full blur-3xl opacity-10 about-bg-blob-3" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Section Header */}
          <div className={`text-center mb-6 sm:mb-7 lg:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center mb-4">
           
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold about-text-gradient-primary">
                Sobre mí
              </h2>
              
            </div>
            <div className="w-20 sm:w-28 lg:w-32 h-1.5 mx-auto rounded-full mb-6 about-bg-animated" />
            <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl px-4 sm:px-0 font-light">
              Transformando ideas en <span className="about-text-gradient-primary font-semibold">experiencias digitales excepcionales</span>
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
                      src="/assets/imagenesPerfil/perfil8.png"
                      alt="Pablo Proboste - Desarrollador Full Stack"
                      className="w-full h-auto rounded-2xl sm:rounded-3xl about-shadow-custom transform group-hover:scale-105 transition-all duration-700 relative z-10 about-image-glow"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 about-image-overlay" />
                  </div>
                  {/* Desktop CTA below image */}
                  <div className="hidden lg:block mt-8">
                    <div className="about-glass-card p-4 rounded-2xl about-shadow-custom hover:scale-105 transition-all duration-500 border-2 border-[#3e70e0] text-center">
                      <h3 className="text-xl font-bold text-[#fdfeff] mb-3">
                        ¿Listo para crear algo <span className="about-text-gradient-primary">increíble</span> juntos?
                      </h3>
                      <p className="text-slate-300 mb-4 text-base max-w-xl mx-auto">
                        Transformemos tus ideas en realidad digital y llevemos tu proyecto al siguiente nivel
                      </p>
                      <a
                        href="https://wa.me/542804389134?text=Hola%2C%20me%20gustar%C3%ADa%20hablarte%20sobre%20un%20proyecto%20de%20una%20web%20que%20tengo%20en%20mente.%20%F0%9F%91%8B"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-bg-animated text-[#fdfeff] px-8 py-3 rounded-full font-semibold text-base transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 about-shadow-custom hover:shadow-2xl w-full lg:w-auto inline-block"
                      >
                        Trabajemos Juntos
                      </a>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center about-floating-slow about-shadow-custom z-20 about-icon-bg-1">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#fdfeff]" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-18 sm:h-18 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center about-floating-medium about-shadow-custom z-20 about-icon-bg-2">
                    <Palette className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 text-[#fdfeff]" />
                  </div>
                  <div className="absolute top-1/2 -right-6 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center about-floating-fast about-shadow-custom z-20 about-icon-bg-3">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#fdfeff]" />
                  </div>
                </div>
                
                {/* Background Layers */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full h-full rounded-2xl sm:rounded-3xl -z-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-500 about-layer-1" />
                <div className="absolute top-8 left-8 sm:top-12 sm:left-12 w-full h-full rounded-2xl sm:rounded-3xl -z-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-700 about-layer-2" />
              </div>
            </div>

            {/* Content Section */}
            <div className={`space-y-3 sm:space-y-4 lg:space-y-5 order-1 lg:order-2 text-center lg:text-left w-full transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Story Section */}
              <div className="space-y-2 sm:space-y-3 leading-relaxed text-sm sm:text-base lg:text-lg px-2 sm:px-0">
                <div className="relative">
                  <div className="absolute -left-4 sm:-left-6 top-0 text-6xl sm:text-8xl font-serif hidden sm:block opacity-20 about-color-primary">
                    "
                  </div>
                  <p className="text-[#fdfeff] text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                    Soy un <span className="about-text-gradient-primary font-bold">desarrollador frontend apasionado</span> con más de 3 años de experiencia creando interfaces web modernas y funcionales.
                  </p>
                </div>
                
                <p className="text-slate-300 text-base sm:text-lg">
                  Mi enfoque se centra en escribir <span className="font-semibold about-color-primary">código limpio</span>, crear experiencias de usuario excepcionales y mantenerme actualizado con las últimas tendencias del desarrollo web.
                </p>
                
                <p className="text-slate-300 text-base sm:text-lg hidden sm:block">
                  Disfruto transformando <span className="font-semibold about-color-secondary">diseños complejos</span> en aplicaciones web intuitivas, eficientes y visualmente impactantes que generan resultados reales.
                </p>
                
                <blockquote className="relative about-glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl mt-2 sm:mt-3 group hover:scale-105 transition-all duration-300">
                  <div className="absolute top-2 left-4 text-4xl sm:text-5xl opacity-20 about-color-primary">"</div>
                  <p className="text-slate-200 italic text-sm sm:text-base lg:text-lg relative z-10 pt-4 sm:pt-6">
                    La programación no es solo escribir código, es crear experiencias que conecten con las personas y resuelvan problemas reales.
                  </p>
                  <div className="absolute bottom-2 right-4 text-4xl sm:text-5xl rotate-180 opacity-20 about-color-secondary">"</div>
                </blockquote>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 pt-2 sm:pt-3 px-2 sm:px-0">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title}
                    className={`about-glass-card p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl group cursor-pointer transform hover:scale-110 transition-all duration-500 hover:-rotate-2 ${isVisible ? 'about-scale-in' : 'opacity-0'}`}
                    style={{ 
                      animationDelay: `${700 + index * 150}ms`
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

          {/* Bottom CTA Section - Mobile Only */}
          <div className="lg:hidden relative z-50 text-center mt-6 sm:mt-8 px-2 sm:px-0 mb-8 sm:mb-10">
            <div className="about-glass-card p-4 sm:p-5 rounded-2xl sm:rounded-3xl max-w-3xl mx-auto about-shadow-custom hover:scale-105 transition-all duration-500 border-2 border-[#3e70e0]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#fdfeff] mb-3 sm:mb-4">
                ¿Listo para crear algo <span className="about-text-gradient-primary">increíble</span> juntos?
              </h3>
              <p className="text-slate-300 mb-4 sm:mb-5 text-sm sm:text-base max-w-xl mx-auto">
                Transformemos tus ideas en realidad digital y llevemos tu proyecto al siguiente nivel
              </p>
              <a
                href="https://wa.me/542804389134?text=Hola%2C%20me%20gustar%C3%ADa%20hablarte%20sobre%20un%20proyecto%20de%20una%20web%20que%20tengo%20en%20mente.%20%F0%9F%91%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="about-bg-animated text-[#fdfeff] px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 about-shadow-custom hover:shadow-2xl w-full sm:w-auto inline-block"
              >
                Trabajemos Juntos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}