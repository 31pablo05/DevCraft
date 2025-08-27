const TechnologyStats = ({ projects }) => {
  const techs = Array.from(new Set(projects.flatMap(p => p.technologies)))
    .slice(0, 12)
  return (
  <div className="mb-4 sm:mb-6 transition-all duration-1000 delay-500">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-6 text-center">
          Tecnologías Más Utilizadas
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {techs.map((tech) => {
            const count = projects.filter(p => p.technologies.includes(tech)).length
            const percentage = (count / projects.length) * 100
            return (
              <div key={tech} className="text-center group">
                <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300 mb-2">
                  <div className="text-slate-100 font-medium text-sm mb-1">{tech}</div>
                  <div className="text-xs text-slate-400">{count} proyecto{count > 1 ? 's' : ''}</div>
                  <div className="w-full bg-slate-600 rounded-full h-1 mt-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TechnologyStats
