const FilterTabs = ({ categories, activeFilter, setActiveFilter }) => (
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 z-10">
    {categories.map((category) => (
    <button
        key={category.id}
        onClick={() => setActiveFilter(category.id)}
        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base flex items-center space-x-2 ${
          activeFilter === category.id
            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg transform scale-105'
            : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700/50'
        }`}
      >
        <span>{category.name}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          activeFilter === category.id ? 'bg-white/20' : 'bg-slate-600'
        }`}>
          {category.count}
        </span>
      </button>
    ))}
  </div>
);

export default FilterTabs;
