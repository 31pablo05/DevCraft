"use client"

import { forwardRef } from "react"

const Badge = forwardRef(({ className = "", variant = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer transform hover:scale-105 hover:-translate-y-1"
  
  const variants = {
    default: "border-transparent bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg hover:shadow-cyan-500/25",
    secondary: "border-transparent bg-gradient-to-r from-slate-700 to-slate-800 text-slate-200 hover:from-slate-600 hover:to-slate-700 shadow-lg hover:shadow-slate-500/25",
    outline: "text-slate-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 backdrop-blur-sm",
    skill: "border-transparent bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-400 hover:to-purple-500 shadow-lg hover:shadow-pink-500/25",
    tool: "border-transparent bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-400 hover:to-red-500 shadow-lg hover:shadow-orange-500/25",
    tech: "border-transparent bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-400 hover:to-teal-500 shadow-lg hover:shadow-green-500/25",
  }
  
  const variantStyles = variants[variant] || variants.default
  
  return (
    <div 
      ref={ref} 
      className={`${baseStyles} ${variantStyles} ${className} group relative overflow-hidden`} 
      {...props}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      
      {/* Content */}
      <span className="relative z-10">
        {props.children}
      </span>
    </div>
  )
})
Badge.displayName = "Badge"

export { Badge }
