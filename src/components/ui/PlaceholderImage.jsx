"use client"

import { useState } from "react"

export default function PlaceholderImage({ width = 400, height = 300, text = "Imagen", className = "" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative overflow-hidden rounded-lg group cursor-pointer transition-all duration-500 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background with Modern Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-pink-400/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-500/10 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"></div>
      </div>
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-orange-500/10 opacity-50 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
      
      {/* Holographic Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Moving Light Effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 transform group-hover:scale-105 transition-all duration-300">
        <div className="text-center p-4">
          <div className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 transition-all duration-300 filter drop-shadow-lg">
            {text.includes("Desarrollador") ? "👨‍💻" : text.includes("Pablo") ? "👤" : "🖼️"}
          </div>
          <div className="text-slate-200 font-semibold text-base sm:text-lg mb-2 group-hover:text-white transition-colors duration-300">
            {text}
          </div>
          <div className="text-slate-400 text-xs sm:text-sm opacity-75 group-hover:opacity-100 transition-all duration-300">
            {width} x {height}
          </div>
          
          {/* Floating Particles */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500"></div>
          <div className="absolute top-8 right-6 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300 transition-all duration-500"></div>
          <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-500 transition-all duration-500"></div>
        </div>
      </div>
      
      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-lg border border-slate-600 group-hover:border-cyan-400/50 transition-all duration-500"></div>
      <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-pink-400/30 transition-all duration-700 delay-200"></div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300"></div>
    </div>
  )
}
