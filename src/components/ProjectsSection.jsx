import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { Button } from "./ui/Button";
import { Grid, List, ArrowRight, Github, ExternalLink, GraduationCap, Heart, Utensils, Camera, Code2, Music } from "lucide-react";
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
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'health', name: 'Salud', count: projects.filter(p => p.category === 'health').length },
    { id: 'portfolio', name: 'Portfolio', count: projects.filter(p => p.category === 'portfolio').length },
    { id: 'tools', name: 'Herramientas', count: projects.filter(p => p.category === 'tools').length },
    { id: 'wellness', name: 'Bienestar', count: projects.filter(p => p.category === 'wellness').length },
    { id: 'food', name: 'Comida', count: projects.filter(p => p.category === 'food').length },
    { id: 'productivity', name: 'Productividad', count: projects.filter(p => p.category === 'productivity').length }
  ]

  // Generar partículas para el fondo
  const [particles, setParticles] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [isVisible, setIsVisible] = useState(false);
  const [projectsAnimated, setProjectsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 8; i++) {
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

  // Map icon string to component for each project
  const projectsWithIcons = filteredProjects.map(project => ({
    ...project,
    icon: iconMap[project.icon] || null
  }));

  return (
    <section 
      ref={sectionRef}
      id="proyectos" 
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 w-full max-w-full overflow-x-hidden bg-slate-900 relative"
    >
      {/* Animated Background optimizado */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"></div>
        {/* Floating particles (menos cantidad) */}
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
        {/* Blobs solo en desktop */}
        <div className="hidden sm:block absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
  <div className="container mx-auto max-w-full relative z-20">
    <ProjectsHeader isVisible={isVisible} />
  <FilterTabs categories={categories} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
  <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
        {/* Projects Grid */}
        <Suspense fallback={<div className="text-center text-slate-400 py-8">Cargando proyectos...</div>}>
          <div className={`grid ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1 max-w-5xl mx-auto'
          } gap-2 sm:gap-3 mt-1 mb-2 transition-all duration-500`}>
            {projectsWithIcons.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} viewMode={viewMode} animated={projectsAnimated} />
            ))}
          </div>
        </Suspense>
  {/* Statistics Section */}
  <Suspense fallback={<div className="text-center text-slate-400 py-8">Cargando estadísticas...</div>}>
    <ProjectStats projects={projects} />
  </Suspense>

  <Suspense fallback={<div className="text-center text-slate-400 py-8">Cargando contacto...</div>}>
    <BottomCTA isVisible={isVisible} />
  </Suspense>
      </div>
 {/* Custom Styles */}
  <style>{`
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
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Loading animation for video */
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

export default ProjectsSection;

