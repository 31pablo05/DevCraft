"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "./ui/Card"
import { Badge } from "./ui/Badge"
import { Code2, Palette, Wrench, Layers, Smartphone, Monitor, Github, Database, Award, ExternalLink, X, ChevronRight } from "lucide-react"

export default function SkillsSection() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const sectionRef = useRef(null)

  // Datos de certificaciones
  const certifications = [
    {
      id: 1,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issued: "may. 2024",
      image: "/assets/certificates/freecodecamp_responsive.webp",
      credentialId: "fcc7b1c0ecb-abad-4a57-a4fe-1a804fa0cc10-rwd",
      url: "https://www.freecodecamp.org/certification/fcc7b1c0ecb-abad-4a57-a4fe-1a804fa0cc10-rwd",
      description: "Certificación en Responsive Web Design que avala la capacidad de crear sitios web adaptativos."
    },
    {
      id: 2,
      title: "Advanced React",
      issuer: "Meta",
      issued: "abr. 2024",
      image: "/assets/certificates/advanced_react.webp",
      credentialId: "2TBWR2JXYLJZ",
      url: "https://www.coursera.org/account/accomplishments/certificate/2TBWR2JXYLJZ",
      description: "Certificación que valida conocimientos avanzados en React para el desarrollo de aplicaciones web."
    },
    {
      id: 3,
      title: "React Basics",
      issuer: "Meta",
      issued: "mar. 2024",
      image: "/assets/certificates/react_basics.webp",
      credentialId: "LEZPFP9TYHQT",
      url: "https://www.coursera.org/account/accomplishments/certificate/LEZPFP9TYHQT",
      description: "Introducción a React y sus fundamentos para el desarrollo de interfaces de usuario."
    },
    {
      id: 4,
      title: "HTML and CSS in depth",
      issuer: "Meta",
      issued: "feb. 2024",
      image: "/assets/certificates/html_css_in_depth.webp",
      credentialId: "VJ7HAKMBMMFM",
      url: "https://www.coursera.org/account/accomplishments/certificate/VJ7HAKMBMMFM",
      description: "Certificación que profundiza en HTML y CSS para construir sitios web robustos y estilizados."
    },
    {
      id: 5,
      title: "IBM Front-End Developer Specialization",
      issuer: "IBM",
      issued: "ene. 2024",
      image: "/assets/certificates/ibm_cert.webp",
      credentialId: "NQWYVW7C6QBR",
      url: "https://www.coursera.org/account/accomplishments/specialization/NQWYVW7C6QBR",
      description: "Especialización que avala habilidades avanzadas en el desarrollo Front-End, impartida por IBM."
    },
    {
      id: 6,
      title: "Programming with JavaScript",
      issuer: "Meta",
      issued: "dic. 2023",
      image: "/assets/certificates/programming_js.webp",
      credentialId: "YWH2FVE53MB6",
      url: "https://www.coursera.org/account/accomplishments/certificate/YWH2FVE53MB6",
      description: "Certificación que demuestra competencias en programación con JavaScript."
    },
    {
      id: 7,
      title: "Intermediate Web and Front-End Development",
      issuer: "Coursera",
      issued: "nov. 2023",
      image: "/assets/certificates/intermediate_web_frontend.webp",
      credentialId: "PZGX7VMRVAXZ",
      url: "https://www.coursera.org/account/accomplishments/certificate/PZGX7VMRVAXZ",
      description: "Curso intermedio que cubre aspectos clave del desarrollo web y front-end."
    },
    {
      id: 8,
      title: "Designing User Interfaces and Experiences (UI/UX)",
      issuer: "Coursera",
      issued: "oct. 2023",
      image: "/assets/certificates/ui_ux_design.webp",
      credentialId: "CEAYHVLTBTX2",
      url: "https://www.coursera.org/account/accomplishments/certificate/CEAYHVLTBTX2",
      description: "Certificación que valida habilidades en el diseño de interfaces y experiencias de usuario."
    },
    {
      id: 9,
      title: "Developing Front-End Apps with React",
      issuer: "Coursera",
      issued: "oct. 2023",
      image: "/assets/certificates/front_end_apps_react.webp",
      credentialId: "HN8JXQQHUZME",
      url: "https://www.coursera.org/account/accomplishments/certificate/HN8JXQQHUZME",
      description: "Certificación enfocada en el desarrollo de aplicaciones Front-End con React."
    },
    {
      id: 10,
      title: "Version Control",
      issuer: "Meta",
      issued: "oct. 2023",
      image: "/assets/certificates/version_control_meta.webp",
      credentialId: "VFUUQAT7LFV7",
      url: "https://www.coursera.org/account/accomplishments/certificate/VFUUQAT7LFV7",
      description: "Certificación en el uso de herramientas de control de versiones para proyectos colaborativos."
    },
    {
      id: 11,
      title: "Version Control",
      issuer: "Meta",
      issued: "oct. 2023",
      image: "/assets/certificates/version_control_meta2.webp",
      credentialId: "WFY8U5YE47K5",
      url: "https://www.coursera.org/account/accomplishments/certificate/WFY8U5YE47K5",
      description: "Certificación adicional que respalda mis habilidades en manejo de control de versiones."
    },
    {
      id: 12,
      title: "Developing Cloud Native Applications",
      issuer: "Coursera",
      issued: "sept. 2023",
      image: "/assets/certificates/cloud_native_apps.webp",
      credentialId: "4X2X6N2GCGV9",
      url: "https://www.coursera.org/account/accomplishments/certificate/4X2X6N2GCGV9",
      description: "Curso que enseña a desarrollar aplicaciones nativas en la nube."
    },
    {
      id: 13,
      title: "Introduction to Front-End Development",
      issuer: "Meta",
      issued: "sept. 2023",
      image: "/assets/certificates/intro_frontend.webp",
      credentialId: "JUQ7H944DSRV",
      url: "https://www.coursera.org/account/accomplishments/certificate/JUQ7H944DSRV",
      description: "Certificación introductoria a los fundamentos del desarrollo Front-End."
    },
    {
      id: 14,
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "Coursera",
      issued: "ago. 2023",
      image: "/assets/certificates/intro_web_dev.webp",
      credentialId: "9VNJKRNLTAPZ",
      url: "https://www.coursera.org/account/accomplishments/certificate/9VNJKRNLTAPZ",
      description: "Curso básico para aprender desarrollo web utilizando HTML, CSS y JavaScript."
    },
    {
      id: 15,
      title: "Getting Started with Git and GitHub",
      issuer: "IBM",
      issued: "ago. 2023",
      image: "/assets/certificates/git_github.webp",
      credentialId: "U6M6LRNJF4SJ",
      url: "https://www.coursera.org/account/accomplishments/certificate/U6M6LRNJF4SJ",
      description: "Certificación que muestra los fundamentos para usar Git y GitHub en proyectos colaborativos."
    },
    {
      id: 16,
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      issued: "ago. 2023",
      image: "/assets/certificates/software_engineering.webp",
      credentialId: "8TLR46FAFKKB",
      url: "https://www.coursera.org/account/accomplishments/certificate/8TLR46FAFKKB",
      description: "Certificación introductoria a los principios de la ingeniería de software."
    },
    {
      id: 17,
      title: "Introduction to Android Mobile Application Development",
      issuer: "Meta",
      issued: "jul. 2023",
      image: "/assets/certificates/android_dev.webp",
      credentialId: "VXACWL9XVQ98",
      url: "https://www.coursera.org/account/accomplishments/certificate/VXACWL9XVQ98",
      description: "Curso que enseña los fundamentos para el desarrollo de aplicaciones móviles en Android."
    },
    {
      id: 18,
      title: "cloud computing",
      issuer: "Google Actívate",
      issued: "jun. 2023",
      image: "/assets/certificates/cloud_computing.webp",
      credentialId: "FUR DGC 34T",
      url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
      description: "Certificación que avala conocimientos en computación en la nube."
    },
    {
      id: 19,
      title: "Digitaliza paso a paso tu negocio con herramientas de Google",
      issuer: "Google Actívate",
      issued: "may. 2023",
      image: "/assets/certificates/digitaliza_negocio.webp",
      credentialId: "FAK 37N NMU",
      url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
      description: "Curso que enseña a digitalizar y potenciar negocios utilizando herramientas de Google."
    },
    {
      id: 20,
      title: "Protege tu Negocio: Ciberseguridad en el Teletrabajo",
      issuer: "Google",
      issued: "may. 2023",
      image: "/assets/certificates/ciberseguridad.webp",
      credentialId: "KSR 5EM N8C",
      url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
      description: "Certificación en ciberseguridad enfocada en proteger negocios en modalidad de teletrabajo."
    },
    {
      id: 21,
      title: "curso de introducion :html y css 1/2",
      issuer: "Google",
      issued: "may. 2022",
      image: "/assets/certificates/html_css_intro1.webp",
      credentialId: "9QC WF7 MBM",
      url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
      description: "Curso introductorio de HTML y CSS (parte 1)."
    },
    {
      id: 22,
      title: "Curso de Desarrollo de Apps Móviles",
      issuer: "Google Actívate",
      issued: "",
      image: "/assets/certificates/apps_moviles.webp",
      credentialId: "VWQ EZE YTA",
      url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
      description: "Curso enfocado en el desarrollo de aplicaciones móviles."
    },
    {
      id: 23,
      title: "Curso de Introducción al desarrollo web:Html y css 2/2",
      issuer: "Google Actívate",
      issued: "",
      image: "/assets/certificates/html_css_intro2.webp",
      credentialId: "CPJ PF4 8JX",
      url: "https://learndigital.withgoogle.com/activate/validate-certificate-code",
      description: "Curso de continuación en desarrollo web con HTML y CSS (parte 2)."
    }
  ]

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
  <div className="absolute inset-0 overflow-hidden z-0">
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

  <div className="container mx-auto max-w-full relative z-20">
        {/* Enhanced Header - Mobile responsive */}
  <div className="text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 opacity-100 translate-y-0">
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
  <div className="mb-12 sm:mb-16 transition-all duration-1000 delay-300 opacity-100 translate-y-0">
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Habilidades Principales</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            {coreSkills.map((skill) => (
              <div 
                key={skill.name} 
                className="glass-effect p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl card-glow-intense group cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 opacity-100"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}></div>
                      <h4 className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base truncate">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium flex-shrink-0 ml-2">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms Section - Mobile responsive */}
  <div className="mb-12 sm:mb-16 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Herramientas & Plataformas</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            {tools.map((tool) => (
              <div 
                key={tool.name} 
                className="glass-effect p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl card-glow group cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 opacity-100"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-r ${tool.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}></div>
                      <h4 className="font-semibold text-slate-100 group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base truncate">
                        {tool.name}
                      </h4>
                    </div>
                    <span className="text-xs sm:text-sm text-slate-300 font-medium flex-shrink-0 ml-2">{tool.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1500 ease-out relative overflow-hidden`}
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technologies Section - Mobile optimized */}
  <div className="text-center transition-all duration-1000 delay-700 opacity-100 translate-y-0">
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Otras Tecnologías</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
            {["Vite", "Bootstrap", "Framer Motion", "Helmet", "Electron"].map((tech) => (
              <Badge 
                key={tech} 
                variant="tech" 
                className="animate-slide-up text-xs sm:text-sm"
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
            {["Canva", "GitHub Copilot"].map((tool) => (
              <Badge 
                key={tool} 
                variant="skill" 
                className="animate-slide-up text-xs sm:text-sm"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Certifications Section - Mobile optimized */}
  <div className="mb-12 sm:mb-16 transition-all duration-1000 delay-900 opacity-100 translate-y-0">
          <div className="flex items-center justify-center mb-6 sm:mb-8 px-4">
            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mr-2 sm:mr-3" />
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-100">Certificaciones</h3>
          </div>
          
          <div className="glass-effect p-6 sm:p-8 rounded-xl sm:rounded-2xl card-glow-intense max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-slate-300 text-sm sm:text-base mb-4">
                Formación continua en desarrollo web a través de plataformas como Coursera, Google, freeCodeCamp y Meta.
              </p>
            </div>
            
            {/* Featured Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {certifications.slice(0, 3).map((cert) => (
                <div 
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="glass-effect p-4 rounded-lg cursor-pointer group hover:card-glow-intense transition-all duration-300 transform hover:scale-105 animate-slide-up"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-100 text-sm mb-1 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-1">{cert.issuer}</p>
                      <p className="text-xs text-slate-500">{cert.issued}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-400 transition-colors duration-300 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Ver todas las certificaciones */}
            <div className="text-center">
              <button 
                onClick={() => setShowAllCerts(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 px-6 py-3 rounded-full font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-glow-intense text-sm sm:text-base"
              >
                Ver todas las certificaciones ({certifications.length})
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Mobile optimized */}
  <div className="text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 opacity-100 translate-y-0">
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

      {/* Modal de certificación individual */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <div className="glass-effect bg-slate-900/95 p-6 sm:p-8 rounded-2xl relative max-w-md w-full shadow-2xl border border-cyan-400/30 max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedCert(null)} 
              className="absolute top-4 right-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-100 pr-8">
                {selectedCert.title}
              </h3>
              <div className="mb-4">
                <p className="text-cyan-400 font-semibold">{selectedCert.issuer}</p>
                {selectedCert.issued && (
                  <p className="text-slate-400 text-sm">Expedición: {selectedCert.issued}</p>
                )}
                <p className="text-slate-500 text-xs mt-1">ID: {selectedCert.credentialId}</p>
              </div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {selectedCert.description}
              </p>
              {selectedCert.url && (
                <a
                  href={selectedCert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-3 px-6 rounded-full font-medium transform hover:scale-105 transition-all duration-300 card-glow-intense"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver Credencial
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal de todas las certificaciones */}
      {showAllCerts && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <div className="glass-effect bg-slate-900/95 p-6 sm:p-8 rounded-2xl relative max-w-4xl w-full shadow-2xl border border-cyan-400/30 max-h-[80vh] overflow-y-auto">
            <button 
              onClick={() => setShowAllCerts(false)} 
              className="absolute top-4 right-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-2 pr-8">
                Todas las Certificaciones
              </h3>
              <p className="text-slate-400">Mi formación continua en desarrollo web</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => {
                    setShowAllCerts(false)
                    setSelectedCert(cert)
                  }}
                  className="glass-effect p-4 rounded-lg cursor-pointer group hover:card-glow-intense transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-100 text-sm mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-400 mb-1">{cert.issuer}</p>
                      {cert.issued && (
                        <p className="text-xs text-slate-500">{cert.issued}</p>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-yellow-400 transition-colors duration-300 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
