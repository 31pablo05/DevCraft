import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Button } from "./ui/Button";
import { Grid, List, ArrowRight, Github, ExternalLink, GraduationCap, Heart, Utensils, Camera, Code2, Music, Sparkles, Zap, TrendingUp, Eye, Star, Filter } from "lucide-react";
import projects from "./projects/projectsData";
const ProjectCard = lazy(() => import("./projects/ProjectCard"));
const ProjectStats = lazy(() => import("./projects/ProjectStats"));
const BottomCTA = lazy(() => import("./projects/BottomCTA"));
import TechnologyStats from "./projects/TechnologyStats";
import ProjectsHeader from "./projects/ProjectsHeader";
import FilterTabs from "./projects/FilterTabs";
import ViewModeToggle from "./projects/ViewModeToggle";

function ProjectsSection() {
  const categories = [
    { id: 'all', name: 'Todos', count: projects.length, icon: Grid },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length, icon: Code2 },
    { id: 'health', name: 'Salud', count: projects.filter(p => p.category === 'health').length, icon: Heart },
    { id: 'portfolio', name: 'Portfolio', count: projects.filter(p => p.category === 'portfolio').length, icon: Camera },
    { id: 'tools', name: 'Herramientas', count: projects.filter(p => p.category === 'tools').length, icon: Code2 },
    { id: 'wellness', name: 'Bienestar', count: projects.filter(p => p.category === 'wellness').length, icon: Star },
    { id: 'food', name: 'Comida', count: projects.filter(p => p.category === 'food').length, icon: Utensils },
    { id: 'productivity', name: 'Productividad', count: projects.filter(p => p.category === 'productivity').length, icon: TrendingUp }
  ];

  const [particles, setParticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [projectsAnimated, setProjectsAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      // Reducir partículas a 3 para máximo rendimiento
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.2 + 0.05,
          moveX: (Math.random() - 0.5) * 0.2,
          moveY: (Math.random() - 0.5) * 0.2,
          duration: Math.random() * 30 + 25,
          delay: Math.random() * 2
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setProjectsAnimated(true), 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    GraduationCap,
    Heart,
    Utensils,
    Camera,
    Code2,
    Music
  };

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const projectsWithIcons = filteredProjects.map(project => ({
    ...project,
    icon: iconMap[project.icon] || null
  }));

  return (
    <section 
      ref={sectionRef}
      id="proyectos" 
      className="relative py-20 px-4 w-full overflow-hidden bg-gradient-to-br from-black via-[#290359]/40 to-black"
    >
      {/* Advanced Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(42,132,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(42,132,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        
        {/* Gradient Orbs with Enhanced Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2a84eb]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#630898]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#290359]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Dynamic Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `linear-gradient(135deg, #2a84eb, #630898)`,
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: '0 0 25px rgba(42, 132, 235, 0.6)'
            }}
          />
        ))}

        {/* Mouse Follow Gradient */}
        <div 
          className="absolute w-[600px] h-[600px] projects-bg-gradient-radial from-[#2a84eb]/15 via-[#630898]/8 to-transparent rounded-full blur-3xl transition-all duration-500 pointer-events-none"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)'
          }}
        />

        {/* Animated Accent Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2a84eb]/50 to-transparent projects-animate-slide-right"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[#630898]/50 to-transparent projects-animate-slide-left"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2a84eb]/10 to-[#630898]/10 backdrop-blur-sm border border-[#2a84eb]/20 rounded-full px-6 py-3 mb-6 projects-animate-fadeIn">
            <Eye className="w-5 h-5 text-[#2a84eb] animate-pulse" />
            <span className="text-[#fefefe] font-semibold">Portfolio de Proyectos</span>
            <Sparkles className="w-5 h-5 text-[#630898] animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2a84eb] via-[#630898] to-[#2a84eb] mb-6 projects-animate-gradient bg-[length:200%_auto]">
           Mis Proyectos 
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#2a84eb] to-transparent rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-[#630898] animate-pulse"></div>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#630898] to-transparent rounded-full"></div>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explora mi colección de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a84eb] to-[#630898] font-bold">
              {projects.length}+ proyectos web
            </span>
            {" "}desarrollados con tecnologías modernas
          </p>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Filter className="w-6 h-6 text-[#2a84eb]" />
            <h3 className="text-2xl font-bold text-[#fefefe]">Filtrar por Categoría</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-110 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-[#2a84eb] to-[#630898] text-[#fefefe] shadow-lg shadow-[#2a84eb]/50'
                      : 'bg-slate-900/50 backdrop-blur-sm border border-[#2a84eb]/20 text-slate-300 hover:border-[#630898]/50 hover:text-[#fefefe]'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {activeFilter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#630898] to-[#2a84eb] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {category.name}
                    <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                      activeFilter === category.id
                        ? 'bg-white/20'
                        : 'bg-[#2a84eb]/20'
                    }`}>
                      {category.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* View Mode Toggle Enhanced */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-900/50 backdrop-blur-sm border border-[#2a84eb]/20 rounded-full p-1.5">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#2a84eb] to-[#630898] text-[#fefefe] shadow-lg shadow-[#2a84eb]/30'
                  : 'text-slate-400 hover:text-[#fefefe]'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">Vista Grid</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'list'
                  ? 'bg-gradient-to-r from-[#2a84eb] to-[#630898] text-[#fefefe] shadow-lg shadow-[#2a84eb]/30'
                  : 'text-slate-400 hover:text-[#fefefe]'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Vista Lista</span>
            </button>
          </div>
        </div>

        {/* Projects Counter */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-[#630898]/20 rounded-full px-6 py-3">
            <TrendingUp className="w-5 h-5 text-[#630898]" />
            <span className="text-[#fefefe] font-semibold">
              Mostrando {filteredProjects.length} de {projects.length} proyectos
            </span>
          </div>
        </div>

        {/* Projects Grid with Enhanced Loading */}
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 border-3 border-[#2a84eb]/20 rounded-full"></div>
              <div className="absolute inset-0 border-3 border-transparent border-t-[#2a84eb] rounded-full animate-spin"></div>
            </div>
            <p className="text-slate-400 animate-pulse">Cargando proyectos...</p>
          </div>
        }>
          <div className={`grid ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1 max-w-5xl mx-auto'
          } gap-6 mb-16 transition-all duration-500`}>
            {projectsWithIcons.map((project, index) => (
              <div
                key={project.id}
                className="projects-animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard 
                  project={project} 
                  index={index} 
                  viewMode={viewMode} 
                  animated={projectsAnimated} 
                />
              </div>
            ))}
          </div>
        </Suspense>

        {/* Statistics Section Enhanced */}
        <Suspense fallback={
          <div className="text-center py-8 animate-pulse">
            <div className="w-10 h-10 mx-auto mb-2 border-2 border-[#2a84eb]/20 border-t-[#2a84eb] rounded-full animate-spin"></div>
            <p className="text-slate-400">Cargando estadísticas...</p>
          </div>
        }>
          <div className="mb-16">
            <ProjectStats projects={projects} />
          </div>
        </Suspense>

        {/* Bottom CTA Enhanced */}
        <Suspense fallback={
          <div className="text-center py-8 animate-pulse">
            <div className="w-10 h-10 mx-auto mb-2 border-2 border-[#630898]/20 border-t-[#630898] rounded-full animate-spin"></div>
            <p className="text-slate-400">Cargando sección...</p>
          </div>
        }>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2a84eb] via-[#630898] to-[#2a84eb] rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-2xl border border-[#2a84eb]/30 rounded-3xl p-12 text-center overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(42,132,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(99,8,152,0.3)_1px,transparent_1px)] bg-[size:30px_30px] projects-animate-grid-flow"></div>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2a84eb]/20 to-[#630898]/20 backdrop-blur-sm border border-[#2a84eb]/30 rounded-full px-6 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#2a84eb] animate-pulse" />
                  <span className="text-sm text-[#fefefe] font-semibold">¿Te gustó lo que viste?</span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2a84eb] via-[#630898] to-[#2a84eb] mb-4 projects-animate-gradient bg-[length:200%_auto]">
                  Creemos algo increíble juntos
                </h3>
                
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Cada proyecto es una oportunidad para{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2a84eb] to-[#630898] font-bold">
                    innovar y superar expectativas
                  </span>
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/542804389134?text=Hola%2C%20me%20gustar%C3%ADa%20hablarte%20sobre%20un%20proyecto%20de%20una%20web%20que%20tengo%20en%20mente.%20%F0%9F%91%8B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[#2a84eb] to-[#630898] text-[#fefefe] rounded-full font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-[#2a84eb]/50 transition-all duration-500 hover:scale-110"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#630898] to-[#2a84eb] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Iniciar Proyecto
                      <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </a>

                  <button
                    className="group px-8 py-4 bg-slate-900/50 backdrop-blur-sm border-2 border-[#2a84eb]/50 hover:border-[#630898] text-[#fefefe] rounded-full font-bold text-lg transition-all duration-500 hover:scale-110 hover:bg-slate-900/80"
                    onClick={() => {
                      if (sectionRef.current) {
                        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    <span className="flex items-center gap-2">
                      Ver Más Proyectos
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default ProjectsSection;