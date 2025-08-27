import React from "react";
import VideoPlayer from "./VideoPlayer"
import ProgressBar from "./ProgressBar"
import { Button } from "../ui/Button"
import { Github, ExternalLink, Eye } from "lucide-react"

const ProjectCard = ({ project, viewMode }) => (
  <div 
    key={project.id} 
    className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden group hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 animate-slide-up opacity-100 ${viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''}`}
  >
    <div className={`${viewMode === 'list' ? 'lg:w-2/5' : ''} h-64 sm:h-72 relative overflow-hidden`}>
      <VideoPlayer
        videoSrc={project.videoSrc}
        posterSrc={project.posterSrc}
        title={project.title}
      />
      <div className="absolute top-3 left-3">
        <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
          project.status === 'Producción' 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
            : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
        }`}>
          {project.status}
        </span>
      </div>
      {project.featured && (
        <div className="absolute top-3 right-3">
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 backdrop-blur-sm">
            <Eye className="w-3 h-3" />
            <span>Destacado</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-3 right-3">
        <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
          project.progress === 100 
            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
        }`}>
          {project.progress}%
        </div>
      </div>
    </div>
  <div className={`${viewMode === 'list' ? 'lg:w-3/5' : ''} pt-2 pb-6 px-6 flex flex-col`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 flex-shrink-0">
            {project.icon ? React.createElement(project.icon, { className: "w-5 h-5" }) : null}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 truncate">
              {project.title}
            </h3>
            <p className="text-sm text-slate-400 truncate">{project.subtitle}</p>
          </div>
        </div>
      </div>
      <p className="text-slate-300 text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed">
        {project.description}
      </p>
      <div className="mb-4">
        <ProgressBar percentage={project.progress} status={project.detailedStatus} />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs border border-slate-600/30 hover:border-cyan-400/50 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
        <div className="space-y-1">
          <p className="text-slate-400">Período:</p>
          <p className="text-slate-300">{project.startDate} - {project.endDate}</p>
        </div>
        <div className="space-y-1">
          <p className="text-slate-400">Tipo:</p>
          <p className="text-slate-300">{project.clientType}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button 
            size="sm" 
            variant="outline" 
            className="w-full bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white hover:border-cyan-400 transition-all duration-300"
          >
            <Github className="w-4 h-4 mr-2" />
            <span className="truncate">Ver Código</span>
          </Button>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button 
            size="sm" 
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            <span className="truncate">Ver Demo</span>
          </Button>
        </a>
      </div>
    </div>
  </div>
)

export default ProjectCard
