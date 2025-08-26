const ProjectsHeader = ({ isVisible }) => (
  <div className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-4 sm:mb-6">
      Mis Proyectos
    </h2>
    <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-4 sm:mb-6 px-4 leading-relaxed">
      Una colección de proyectos reales que he desarrollado, desde e-commerce hasta aplicaciones especializadas
    </p>
    <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto mb-6 sm:mb-8"></div>
  </div>
);

export default ProjectsHeader;
