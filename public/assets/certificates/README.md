# Certificaciones - Imágenes

## Instrucciones para agregar las imágenes de tus certificaciones:

### 📁 Estructura de archivos necesaria:

```
DevCraft/public/assets/certificates/
├── freecodecamp_responsive.webp
├── advanced_react.webp
├── react_basics.webp
├── html_css_in_depth.webp
├── ibm_cert.webp
├── programming_js.webp
└── [más certificaciones...]
```

### 🖼️ Especificaciones de imágenes:

- **Formato recomendado**: `.webp` (mejor compresión)
- **Formatos alternativos**: `.jpg`, `.png`
- **Tamaño recomendado**: 400x300px (o similar)
- **Peso máximo**: 200KB por imagen

### 📋 Lista completa de imágenes necesarias:

1. `freecodecamp_responsive.webp` - Responsive Web Design (freeCodeCamp)
2. `advanced_react.webp` - Advanced React (Meta)
3. `react_basics.webp` - React Basics (Meta) 
4. `html_css_in_depth.webp` - HTML and CSS in depth (Meta)
5. `ibm_cert.webp` - IBM Front-End Developer Specialization
6. `programming_js.webp` - Programming with JavaScript (Meta)
7. `intermediate_web_frontend.webp` - Intermediate Web and Front-End Development (Coursera)
8. `ui_ux_design.webp` - Designing User Interfaces and Experiences (UI/UX) (Coursera)
9. `front_end_apps_react.webp` - Developing Front-End Apps with React (Coursera)
10. `version_control_meta.webp` - Version Control (Meta) - Primera certificación
11. `version_control_meta2.webp` - Version Control (Meta) - Segunda certificación
12. `cloud_native_apps.webp` - Developing Cloud Native Applications (Coursera)
13. `intro_frontend.webp` - Introduction to Front-End Development (Meta)
14. `intro_web_dev.webp` - Introduction to Web Development with HTML, CSS, JavaScript (Coursera)
15. `git_github.webp` - Getting Started with Git and GitHub (IBM)
16. `software_engineering.webp` - Introduction to Software Engineering (IBM)
17. `android_dev.webp` - Introduction to Android Mobile Application Development (Meta)
18. `cloud_computing.webp` - Cloud Computing (Google Actívate)
19. `digitaliza_negocio.webp` - Digitaliza paso a paso tu negocio con herramientas de Google (Google Actívate)
20. `ciberseguridad.webp` - Protege tu Negocio: Ciberseguridad en el Teletrabajo (Google)
21. `html_css_intro1.webp` - Curso de Introducción: HTML y CSS 1/2 (Google)
22. `apps_moviles.webp` - Curso de Desarrollo de Apps Móviles (Google Actívate)
23. `html_css_intro2.webp` - Curso de Introducción al desarrollo web: HTML y CSS 2/2 (Google Actívate)

### 🔧 Cómo agregar más certificaciones:

1. **Agrega la imagen** en esta carpeta
2. **Actualiza el array `certifications`** en `SkillsSection.jsx`
3. **Usa este formato**:

```javascript
{
  id: 7,
  title: "Nombre de la certificación",
  issuer: "Institución",
  issued: "mes. año",
  image: "/assets/certificates/nombre_imagen.webp",
  credentialId: "ID_CREDENCIAL",
  url: "https://url-de-verificacion.com",
  description: "Descripción de la certificación"
}
```

### ✨ Características implementadas:

- ✅ **Vista previa** de 3 certificaciones principales
- ✅ **Modal individual** con detalles completos
- ✅ **Modal de lista completa** con todas las certificaciones
- ✅ **Enlaces verificables** a las credenciales
- ✅ **Responsive design** optimizado para móvil
- ✅ **Animaciones** suaves y profesionales
- ✅ **Cerrar con ESC** en modales
- ✅ **Efectos hover** y transiciones

### 🎨 Estilo integrado:

- Usa el mismo sistema de colores (`glass-effect`, `card-glow`)
- Iconos coherentes con Lucide React
- Animaciones `animate-slide-up` del resto del sitio
- Breakpoints responsive (`sm:`, `lg:`)

**Nota**: Si no tienes las imágenes aún, puedes usar placeholders temporales o capturas de pantalla de tus certificaciones.
