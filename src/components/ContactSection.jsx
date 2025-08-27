"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "./ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle, Instagram, Facebook, Copy, CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formAnimated, setFormAnimated] = useState(false)
  const [particles, setParticles] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const sectionRef = useRef(null)

  // Datos de contacto reales
  const contactInfo = {
    email: "pabloproboste64@gmail.com",
    phone: "+54 280 438-9134",
    whatsapp: "5492804389134",
    location: "Trelew, Chubut, Argentina",
    social: {
      linkedin: "https://www.linkedin.com/in/pablo-proboste/",
      github: "https://github.com/31pablo05",
      instagram: "https://www.instagram.com/probostepablo67/",
      facebook: "https://www.facebook.com/pablo.proboste.7"
    }
  }

  // Generar partículas para el fondo
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          moveX: (Math.random() - 0.5) * 0.4,
          moveY: (Math.random() - 0.5) * 0.4,
        })
      }
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setTimeout(() => setFormAnimated(true), 500)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animar partículas
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: Math.max(3, Math.min(97, particle.x + particle.moveX)),
        y: Math.max(3, Math.min(97, particle.y + particle.moveY)),
        moveX: particle.x <= 3 || particle.x >= 97 ? -particle.moveX : particle.moveX,
        moveY: particle.y <= 3 || particle.y >= 97 ? -particle.moveY : particle.moveY,
      })))
    }

    const interval = setInterval(animateParticles, 100)
    return () => clearInterval(interval)
  }, [])

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Enviar mensaje por WhatsApp
  const sendWhatsAppMessage = () => {
    const message = `¡Hola Pablo! 👋

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}

---
Enviado desde tu portfolio web 🌐`

    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Copiar al portapapeles
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'email') {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      } else if (type === 'phone') {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      }
    } catch (err) {
      console.error('Error copying to clipboard:', err)
    }
  }

  // Validar formulario
  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="pt-2 sm:py-16 lg:py-20 px-3 sm:px-4 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900"></div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
            }}
          />
        ))}

        {/* Background gradients */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-gradient-to-r from-pink-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Header */}
  <div className={`text-center mb-0 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <div className="flex items-center justify-center mb-0 sm:mb-3">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Contacto
            </h2>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 ml-3" />
          </div>
        <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-0 sm:mb-4 px-4 leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
          </p>
        <div className=" w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto mt-0"></div>
  </div>
  {/* Elimina margen inferior del header en mobile */}

        {/* WhatsApp CTA Destacado */}
        <div className={`text-center mb-4 sm:mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-effect p-2 sm:p-6 rounded-2xl max-w-2xl mx-auto card-glow-intense mt-1 mb-0">
            <div className="flex items-center justify-center mb-3">
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400 mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100">¡Hablemos por WhatsApp!</h3>
            </div>
            <p className="text-slate-300 mb-4">
              La forma más rápida de contactarme. Te respondo en minutos 🚀
            </p>
            <Button
              onClick={() => window.open(`https://wa.me/${contactInfo.whatsapp}?text=¡Hola Pablo! Me interesa conocer más sobre tus servicios de desarrollo web 👋`, '_blank')}
              size="lg"
              className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-400 hover:via-green-500 hover:to-green-600 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 card-glow-intense"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Contactar por WhatsApp</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

  <div className="grid lg:grid-cols-2 gap-2 lg:gap-12 mb-0">
          {/* Contact Information */}
          <div className={`space-y-6 sm:space-y-8 order-2 lg:order-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-6 text-center lg:text-left flex items-center">
                <Mail className="w-6 h-6 mr-2 text-cyan-400" />
                Información de contacto
              </h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="group glass-effect rounded-xl p-4 sm:p-5 card-glow hover:card-glow-intense transition-all duration-300 cursor-pointer"
                     onClick={() => copyToClipboard(contactInfo.email, 'email')}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-100 text-sm sm:text-base">Email</p>
                      <p className="text-slate-300 text-sm sm:text-base break-all group-hover:text-cyan-400 transition-colors duration-300">
                        {contactInfo.email}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {copiedEmail ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group glass-effect rounded-xl p-4 sm:p-5 card-glow hover:card-glow-intense transition-all duration-300 cursor-pointer"
                     onClick={() => copyToClipboard(contactInfo.phone, 'phone')}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-100 text-sm sm:text-base">Teléfono</p>
                      <p className="text-slate-300 text-sm sm:text-base group-hover:text-orange-400 transition-colors duration-300">
                        {contactInfo.phone}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {copiedPhone ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5 text-slate-400 group-hover:text-orange-400 transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-effect rounded-xl p-4 sm:p-5 card-glow group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-100 text-sm sm:text-base">Ubicación</p>
                      <p className="text-slate-300 text-sm sm:text-base group-hover:text-pink-400 transition-colors duration-300">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-slate-100 mb-6 flex items-center justify-center lg:justify-start">
                <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                Sígueme en redes sociales
              </h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Button
                  onClick={() => window.open(contactInfo.social.linkedin, '_blank')}
                  size="sm"
                  variant="outline"
                  className="glass-effect hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500 bg-transparent border-slate-600 text-slate-300 card-glow transition-all duration-300 h-12"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => window.open(contactInfo.social.github, '_blank')}
                  size="sm"
                  variant="outline"
                  className="glass-effect hover:bg-gray-600/20 hover:text-gray-300 hover:border-gray-500 bg-transparent border-slate-600 text-slate-300 card-glow transition-all duration-300 h-12"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  onClick={() => window.open(contactInfo.social.instagram, '_blank')}
                  size="sm"
                  variant="outline"
                  className="glass-effect hover:bg-pink-600/20 hover:text-pink-400 hover:border-pink-500 bg-transparent border-slate-600 text-slate-300 card-glow transition-all duration-300 h-12"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button
                  onClick={() => window.open(contactInfo.social.facebook, '_blank')}
                  size="sm"
                  variant="outline"
                  className="glass-effect hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500 bg-transparent border-slate-600 text-slate-300 card-glow transition-all duration-300 h-12"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-effect rounded-2xl p-2 sm:p-8 card-glow-intense mt-0 mb-0">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2 flex items-center justify-center">
                  <Send className="w-6 h-6 mr-2 text-cyan-400" />
                  Envíame un mensaje
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Completa el formulario y lo enviaré directamente a mi WhatsApp
                </p>
              </div>
              
              <div className={`space-y-4 sm:space-y-6 transition-all duration-500 ${formAnimated ? 'opacity-100' : 'opacity-0'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Nombre *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo" 
                      className="glass-effect bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-300 mb-2 block">Email *</label>
                    <Input 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com" 
                      className="glass-effect bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Asunto *</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="¿En qué puedo ayudarte?" 
                    className="glass-effect bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300" 
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300 mb-2 block">Mensaje *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntame sobre tu proyecto, presupuesto, timeline y cualquier detalle importante..." 
                    className="glass-effect bg-slate-800/50 border-slate-600 text-slate-100 placeholder-slate-400 focus:border-cyan-400 focus:ring-cyan-400/20 transition-all duration-300 min-h-[120px] sm:min-h-[140px] resize-none" 
                  />
                </div>
                
                <Button 
                  onClick={sendWhatsAppMessage}
                  disabled={!isFormValid}
                  className={`w-full py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 ${
                    isFormValid
                      ? 'bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-400 hover:via-green-500 hover:to-green-600 text-white card-glow-intense transform hover:scale-105 hover:-translate-y-1'
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isFormValid ? 'Enviar por WhatsApp' : 'Completa todos los campos'}
                  {isFormValid && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>

                <div className="text-center">
                  <p className="text-xs sm:text-sm text-slate-400">
                    Al enviar este formulario, serás redirigido a WhatsApp con tu mensaje pre-cargado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
