import React, { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

const VideoPlayer = React.memo(({ videoSrc, posterSrc, title }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef(null)

  const handlePlayClick = () => {
    if (!showVideo) {
      // Primera vez: mostrar video y empezar a cargarlo
      setShowVideo(true)
      setIsLoading(true)
    } else {
      // Video ya cargado: play/pause
      if (isPlaying) {
        videoRef.current?.pause()
      } else {
        videoRef.current?.play()
      }
    }
  }

  const handleVideoReady = () => {
    setIsLoading(false)
    // Auto-play cuando el video esté listo
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  return (
    <div className="relative w-full h-full group cursor-pointer overflow-hidden">
      {/* Poster Image - Siempre visible hasta que se active el video */}
      {!showVideo && (
        <>
          <img
            src={posterSrc}
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay con botón de play grande */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={handlePlayClick}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-xl"
              aria-label="Ver demo del proyecto"
            >
              <Play className="w-8 h-8 ml-1" />
            </button>
          </div>
          {/* Indicador de demo */}
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
            <Play className="w-3 h-3" />
            <span>Ver Demo</span>
          </div>
        </>
      )}

      {/* Video - Solo se carga cuando es necesario */}
      {showVideo && (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            onLoadedData={handleVideoReady}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            preload="none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          {/* Loading state solo cuando se está cargando */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3 mx-auto"></div>
                <p className="text-sm">Cargando demo...</p>
              </div>
            </div>
          )}

          {/* Controles del video */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePlayClick}
                    className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                    aria-label={isPlaying ? "Pausar" : "Reproducir"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
})

VideoPlayer.displayName = 'VideoPlayer'
export default VideoPlayer
