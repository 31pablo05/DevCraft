import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, RotateCcw } from "lucide-react"

const VideoPlayer = ({ videoSrc, posterSrc, onLoadStart, onCanPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }
  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }
  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      setIsPlaying(true)
    }
  }
  const handleLoadStart = () => {
    setIsLoading(true)
    onLoadStart && onLoadStart()
  }
  const handleCanPlay = () => {
    setIsLoading(false)
    onCanPlay && onCanPlay()
  }

  // Genera srcSet para el poster (WebP recomendado, PNG/JPG fallback)
  const posterSrcSet = posterSrc
    ? `${posterSrc.replace('.webp', '-256.webp')} 256w, ${posterSrc.replace('.webp', '-515.webp')} 515w, ${posterSrc} 1024w`
    : undefined;
  const posterSizes = "(max-width: 640px) 256px, 515px";

  return (
    <div 
      className="relative w-full h-full group cursor-pointer"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={posterSrc}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop
        playsInline
        muted={isMuted}
        width="515"
        height="256"
        loading="lazy"
        fetchpriority="low"
        // srcSet y sizes para el poster (solo navegadores que lo soportan)
        {...(posterSrcSet ? { poster: posterSrc, 'data-poster-srcset': posterSrcSet, 'data-poster-sizes': posterSizes } : {})}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800/50 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white text-sm">Cargando video...</span>
          </div>
        </div>
      )}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePlay}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={handleMute}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={handleRestart}
                className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
