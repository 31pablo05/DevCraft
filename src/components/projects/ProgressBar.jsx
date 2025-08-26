const ProgressBar = ({ percentage, status }) => {
  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-300">Progreso</span>
        <span className={`font-medium ${
          percentage === 100 ? 'text-green-400' : 'text-yellow-400'
        }`}>
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            percentage === 100 
              ? 'bg-gradient-to-r from-green-400 to-green-500' 
              : 'bg-gradient-to-r from-yellow-400 to-orange-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs text-slate-400 text-center">
        {status}
      </div>
    </div>
  )
}

export default ProgressBar
