"use client"

import { Suspense, lazy } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'

// Lazy loading para componentes no críticos
const AboutSection = lazy(() => import('./components/AboutSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

import './App.css'

// Componente de loading optimizado
const SectionLoader = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-2 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin"></div>
  </div>
)

function App() {
  // Eliminar useEffect que puede interferir con el scroll natural

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <HeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <AboutSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <SkillsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
