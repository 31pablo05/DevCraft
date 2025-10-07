import { useState, useRef, useEffect } from 'react'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '(max-width: 640px) 256px, 515px',
  priority = false,
  placeholder = 'blur'
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority) // Si es priority, cargar inmediatamente
  const [error, setError] = useState(false)
  const imgRef = useRef(null)
  const containerRef = useRef(null)

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (priority) return // No usar observer si es priority

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  // Generar srcSet para diferentes tamaños
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return ''
    
    const ext = baseSrc.split('.').pop()
    const base = baseSrc.replace(`.${ext}`, '')
    
    // Para imágenes WebP
    if (ext === 'webp') {
      return `${base}-256.webp 256w, ${base}-515.webp 515w, ${baseSrc} 1024w`
    }
    
    // Para otras imágenes, intentar versiones optimizadas
    return `${base}-small.${ext} 256w, ${base}-medium.${ext} 515w, ${baseSrc} 1024w`
  }

  const handleLoad = () => {
    setIsLoaded(true)
    setError(false)
  }

  const handleError = () => {
    setError(true)
    setIsLoaded(true)
  }

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <>
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'low'}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              aspectRatio: width && height ? `${width}/${height}` : 'auto'
            }}
          />
          
          {/* Placeholder mientras carga */}
          {!isLoaded && !error && placeholder === 'blur' && (
            <div 
              className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center"
              style={{ aspectRatio: width && height ? `${width}/${height}` : '16/9' }}
            >
              <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Error fallback */}
          {error && (
            <div 
              className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-400"
              style={{ aspectRatio: width && height ? `${width}/${height}` : '16/9' }}
            >
              <span className="text-sm">Error al cargar imagen</span>
            </div>
          )}
        </>
      )}
      
      {/* Placeholder inicial para lazy loading */}
      {!isInView && !priority && (
        <div 
          className="bg-slate-800 animate-pulse flex items-center justify-center"
          style={{ 
            width: width || '100%', 
            height: height || '200px',
            aspectRatio: width && height ? `${width}/${height}` : '16/9'
          }}
        >
          <div className="w-6 h-6 border-2 border-slate-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage