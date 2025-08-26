import { Grid, List } from "lucide-react";

const ViewModeToggle = ({ viewMode, setViewMode, isVisible }) => (
  <div className={`flex justify-center mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-1 flex">
      <button
        onClick={() => setViewMode('grid')}
        className={`p-2 sm:p-3 rounded-md transition-all duration-300 ${
          viewMode === 'grid' 
            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={() => setViewMode('list')}
        className={`p-2 sm:p-3 rounded-md transition-all duration-300 ${
          viewMode === 'list' 
            ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
            : 'text-slate-400 hover:text-white'
        }`}
      >
        <List className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  </div>
);

export default ViewModeToggle;
