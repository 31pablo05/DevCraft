const ProjectsHeader = ({ isVisible }) => (
  <div className={`text-center mb-2 sm:mb-3 transition-all duration-1000 ${isVisible ? 'sm:opacity-100 sm:translate-y-0' : 'sm:opacity-0 sm:translate-y-8'}`}>
    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-100 bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-1 sm:mb-2">
      <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block">
        Mis Proyectos
      </span>
    </h2>
  <p className="text-slate-300 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto mb-0 sm:mb-1 px-2 sm:px-4 leading-relaxed">
      Una colección de proyectos reales que he desarrollado, desde e-commerce hasta aplicaciones especializadas
    </p>
    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto mb-1 sm:mb-2"></div>
  </div>
);

export default ProjectsHeader;
