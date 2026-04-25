import { useState, useRef } from "react"
import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Code2, Palette, Wrench, Layers, Smartphone, Monitor, Github, Database, Award, ExternalLink, X, ChevronRight, Sparkles, Zap, TrendingUp } from "lucide-react"

export default function SkillsSection() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const sectionRef = useRef(null)

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

  const coreSkills = [
    { name: "HTML5", level: 95, color: "from-[#3e6cde] via-[#550c83] to-[#2a045a]", icon: <Code2 className="w-5 h-5" />, description: "Estructura semántica moderna" },
    { name: "CSS3", level: 90, color: "from-[#3e6cde] to-[#550c83]", icon: <Palette className="w-5 h-5" />, description: "Diseño avanzado y animaciones" },
    { name: "React", level: 88, color: "from-[#550c83] via-[#3e6cde] to-[#2a045a]", icon: <Code2 className="w-5 h-5" />, description: "Componentes y hooks avanzados" },
    { name: "JSX", level: 87, color: "from-[#2a045a] to-[#550c83]", icon: <Code2 className="w-5 h-5" />, description: "Sintaxis de React optimizada" },
    { name: "Tailwind CSS", level: 92, color: "from-[#3e6cde] to-[#2a045a]", icon: <Layers className="w-5 h-5" />, description: "Utility-first CSS framework" },
    { name: "Responsive Design", level: 90, color: "from-[#550c83] to-[#3e6cde]", icon: <Smartphone className="w-5 h-5" />, description: "Diseños adaptativos perfectos" },
  ]

  const tools = [
    { name: "Git", level: 85, color: "from-[#3e6cde] to-[#550c83]", icon: <Github className="w-5 h-5" />, description: "Control de versiones" },
    { name: "VS Code", level: 95, color: "from-[#550c83] to-[#2a045a]", icon: <Code2 className="w-5 h-5" />, description: "Editor principal" },
    { name: "GitHub", level: 80, color: "from-[#2a045a] to-[#3e6cde]", icon: <Github className="w-5 h-5" />, description: "Colaboración y repositorios" },
    { name: "Vercel", level: 75, color: "from-[#550c83] to-[#3e6cde]", icon: <Monitor className="w-5 h-5" />, description: "Deployment automático" },
    { name: "Node.js", level: 70, color: "from-[#3e6cde] to-[#2a045a]", icon: <Database className="w-5 h-5" />, description: "Backend JavaScript" },
    { name: "MongoDB", level: 65, color: "from-[#2a045a] via-[#550c83] to-[#3e6cde]", icon: <Database className="w-5 h-5" />, description: "Base de datos NoSQL" },
  ]



  return (
    <section 
      ref={sectionRef}
      id="habilidades" 
      className="relative py-20 px-4 w-full overflow-hidden bg-gradient-to-br from-slate-950 via-[#2a045a]/30 to-slate-950"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(62,108,222,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(62,108,222,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        
        {/* Gradient Orbs with Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3e6cde]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#550c83]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2a045a]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles eliminadas para optimizar rendimiento */}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header with Enhanced Animation */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3e6cde]/10 to-[#550c83]/10 backdrop-blur-sm border border-[#3e6cde]/20 rounded-full px-6 py-3 mb-6">
            
            <span className="text-[#fcfdff] font-medium">Stack Tecnológico</span>
            
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3e6cde] via-[#550c83] to-[#3e6cde] mb-6 skills-animate-gradient bg-[length:200%_auto]">
            Habilidades & Experiencias
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#3e6cde] to-transparent rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-[#550c83] animate-pulse"></div>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#550c83] to-transparent rounded-full"></div>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Tecnologías de vanguardia para crear experiencias web{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e6cde] to-[#550c83] font-semibold">
              excepcionales y escalables
            </span>
          </p>
        </div>

        {/* Core Skills with Enhanced Cards */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <TrendingUp className="w-7 h-7 text-[#3e6cde]" />
            <h3 className="text-3xl font-bold text-[#fcfdff]">Habilidades Principales</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSkills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3e6cde] to-[#550c83] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative bg-slate-900/90 backdrop-blur-xl border border-[#3e6cde]/20 rounded-2xl p-6 hover:border-[#550c83]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  {/* Icon Badge */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-[#3e6cde]/50`}>
                    {skill.icon}
                  </div>
                  
                  {/* Skill Info */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-[#fcfdff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3e6cde] group-hover:to-[#550c83] transition-all duration-300">
                        {skill.name}
                      </h4>
                      <span className="text-2xl font-bold text-[#3e6cde]">{skill.level}%</span>
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-700/50 rounded-full">
                    <div className="h-full bg-gradient-to-r from-[#3e6cde] to-[#550c83] rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Wrench className="w-7 h-7 text-[#550c83]" />
            <h3 className="text-3xl font-bold text-[#fcfdff]">Herramientas & Plataformas</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#550c83] to-[#3e6cde] rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative bg-slate-900/90 backdrop-blur-xl border border-[#550c83]/20 rounded-2xl p-6 hover:border-[#3e6cde]/50 transition-all duration-500 hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-[#550c83]/50`}>
                    {tool.icon}
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-[#fcfdff]">{tool.name}</h4>
                      <span className="text-xl font-bold text-[#550c83]">{tool.level}%</span>
                    </div>
                    <p className="text-xs text-slate-400">{tool.description}</p>
                  </div>
                  
                  <div className="relative h-2.5 bg-slate-800/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${tool.level}%` }}
                    >
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Layers className="w-7 h-7 text-[#3e6cde]" />
              <h3 className="text-3xl font-bold text-[#fcfdff]">Stack Completo</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-3">
                {["Vite", "Bootstrap", "Framer Motion", "Helmet", "Electron"].map((tech, i) => (
                  <div 
                    key={tech}
                    className="group relative px-6 py-3 bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-xl border border-[#3e6cde]/30 rounded-full hover:border-[#550c83]/70 transition-all duration-300 hover:scale-110 cursor-pointer"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#3e6cde]/0 via-[#550c83]/20 to-[#3e6cde]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-[#fcfdff] font-semibold">{tech}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-[#550c83]" />
                <h4 className="text-xl font-semibold text-[#fcfdff]">Herramientas de Diseño</h4>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {["Canva", "GitHub Copilot"].map((tool, i) => (
                  <div 
                    key={tool}
                    className="group relative px-6 py-3 bg-gradient-to-r from-slate-900/80 to-slate-900/80 backdrop-blur-xl border border-[#550c83]/30 rounded-full hover:border-[#3e6cde]/70 transition-all duration-300 hover:scale-110 cursor-pointer"
                    style={{ animationDelay: `${(i + 5) * 50}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#550c83]/0 via-[#3e6cde]/20 to-[#550c83]/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative text-[#fcfdff] font-semibold">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Award className="w-7 h-7 text-[#3e6cde]" />
              <h3 className="text-3xl font-bold text-[#fcfdff]">Certificaciones Profesionales</h3>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {certifications.length}+ certificaciones de instituciones líderes en tecnología
            </p>
          </div>
          
          <div className="relative">
            {/* Featured Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {certifications.slice(0, 3).map((cert, index) => (
                <div 
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative cursor-pointer"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3e6cde] to-[#550c83] rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
                  
                  <div className="relative bg-slate-900/90 backdrop-blur-xl border border-[#3e6cde]/20 rounded-xl p-6 hover:border-[#550c83]/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3e6cde]/20 to-[#550c83]/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 text-[#3e6cde]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-[#fcfdff] text-sm mb-2 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3e6cde] group-hover:to-[#550c83] transition-all duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[#3e6cde] font-semibold mb-1">{cert.issuer}</p>
                        <p className="text-xs text-slate-400">{cert.issued}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#3e6cde] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#3e6cde]/30 to-transparent"></div>
                      <span>Ver detalles</span>
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#550c83]/30 to-transparent"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View All Button */}
            <div className="text-center">
              <button 
                onClick={() => setShowAllCerts(true)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#3e6cde] to-[#550c83] text-[#fcfdff] rounded-full font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-[#3e6cde]/50 transition-all duration-500 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#550c83] to-[#3e6cde] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Award className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Ver todas las certificaciones ({certifications.length})</span>
                <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3e6cde] via-[#550c83] to-[#3e6cde] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-900/95 backdrop-blur-2xl border border-[#3e6cde]/30 rounded-3xl p-12 text-center overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(62,108,222,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(85,12,131,0.3)_1px,transparent_1px)] bg-[size:30px_30px] skills-animate-grid-flow"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3e6cde]/20 to-[#550c83]/20 backdrop-blur-sm border border-[#3e6cde]/30 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#3e6cde] animate-pulse" />
                <span className="text-sm text-[#fcfdff] font-semibold">¿Listo para empezar?</span>
              </div>
              
              <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3e6cde] via-[#550c83] to-[#3e6cde] mb-4 skills-animate-gradient bg-[length:200%_auto]">
                Llevemos tu proyecto al siguiente nivel
              </h3>
              
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Combinando tecnología de vanguardia con diseño excepcional para crear experiencias web que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e6cde] to-[#550c83] font-bold">
                  impulsan resultados
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/542804389134?text=Hola%2C%20me%20gustar%C3%ADa%20hablarte%20sobre%20un%20proyecto%20de%20una%20web%20que%20tengo%20en%20mente.%20%F0%9F%91%8B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#3e6cde] to-[#550c83] text-[#fcfdff] rounded-full font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-[#3e6cde]/50 transition-all duration-500 hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#550c83] to-[#3e6cde] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Iniciar Proyecto
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </a>

                <button
                  className="group px-8 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-[#3e6cde]/50 hover:border-[#550c83] text-[#fcfdff] rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 hover:bg-slate-900/80"
                  onClick={() => {
                    const projectsSection = document.getElementById('proyectos')
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  <span className="flex items-center gap-2">
                    Ver Proyectos
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-50 p-4 skills-animate-fadeIn">
          <div className="relative max-w-lg w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3e6cde] to-[#550c83] rounded-3xl blur-xl opacity-75"></div>
            
            <div className="relative bg-slate-900/95 backdrop-blur-2xl border border-[#3e6cde]/30 rounded-3xl p-8 shadow-2xl">
              <button 
                onClick={() => setSelectedCert(null)} 
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-[#fcfdff] rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#3e6cde]/20 to-[#550c83]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 skills-animate-bounce-slow">
                  <Award className="w-10 h-10 text-[#3e6cde]" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3e6cde] to-[#550c83] pr-8">
                  {selectedCert.title}
                </h3>
                
                <div className="mb-6 space-y-2">
                  <p className="text-xl text-[#3e6cde] font-bold">{selectedCert.issuer}</p>
                  {selectedCert.issued && (
                    <p className="text-slate-400">Expedición: {selectedCert.issued}</p>
                  )}
                  <div className="inline-block px-4 py-2 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-500 text-sm">ID: <span className="text-slate-300 font-mono">{selectedCert.credentialId}</span></p>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                  {selectedCert.description}
                </p>
                
                {selectedCert.url && (
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#3e6cde] to-[#550c83] hover:from-[#550c83] hover:to-[#3e6cde] text-[#fcfdff] py-4 px-8 rounded-full font-bold transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-[#3e6cde]/50"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Ver Credencial
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* All Certifications Modal */}
      {showAllCerts && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-50 p-4 skills-animate-fadeIn">
          <div className="relative max-w-6xl w-full max-h-[85vh] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3e6cde] via-[#550c83] to-[#3e6cde] rounded-3xl blur-xl opacity-75 skills-animate-gradient bg-[length:200%_auto]"></div>
            
            <div className="relative bg-slate-900/95 backdrop-blur-2xl border border-[#3e6cde]/30 rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[85vh]">
              <button 
                onClick={() => setShowAllCerts(false)} 
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-[#fcfdff] rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 z-10"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3e6cde]/20 to-[#550c83]/20 backdrop-blur-sm border border-[#3e6cde]/30 rounded-full px-6 py-3 mb-6">
                  <Award className="w-5 h-5 text-[#3e6cde] animate-pulse" />
                  <span className="text-sm text-[#fcfdff] font-semibold">{certifications.length} Certificaciones</span>
                </div>
                
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3e6cde] via-[#550c83] to-[#3e6cde] mb-3 skills-animate-gradient bg-[length:200%_auto] pr-12">
                  Formación Continua
                </h3>
                <p className="text-slate-400 text-lg">Mi trayectoria de aprendizaje en desarrollo web</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.id}
                    onClick={() => {
                      setShowAllCerts(false)
                      setSelectedCert(cert)
                    }}
                    className="group relative cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3e6cde] to-[#550c83] rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    
                    <div className="relative bg-slate-800/50 backdrop-blur-xl border border-[#3e6cde]/10 hover:border-[#550c83]/50 rounded-xl p-4 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#3e6cde]/20 to-[#550c83]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Award className="w-6 h-6 text-[#3e6cde]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#fcfdff] text-sm mb-1 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3e6cde] group-hover:to-[#550c83] transition-all duration-300">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-[#3e6cde] mb-1">{cert.issuer}</p>
                          {cert.issued && (
                            <p className="text-xs text-slate-500">{cert.issued}</p>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#3e6cde] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    {/* Ensure section closes properly */}
    </section>
  )
}