const ProjectStats = ({ projects }) => (
  <div className="mb-4 sm:mb-6 z-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">
          {projects.length}
        </div>
        <div className="text-slate-300 text-sm">Proyectos Totales</div>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-green-400/50 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">
          {projects.filter(p => p.status === 'Producción').length}
        </div>
        <div className="text-slate-300 text-sm">En Producción</div>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-yellow-400/50 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
          {projects.filter(p => p.status === 'Desarrollo').length}
        </div>
        <div className="text-slate-300 text-sm">En Desarrollo</div>
      </div>
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-purple-400/50 transition-all duration-300">
        <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
          {Math.round(projects.reduce((acc, p) => acc + p.progress, 0) / projects.length)}%
        </div>
        <div className="text-slate-300 text-sm">Progreso Promedio</div>
      </div>
    </div>
  </div>
)

export default ProjectStats
