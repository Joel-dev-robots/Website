"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'ES' | 'EN'

type TranslationValue = string | string[]

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => TranslationValue
}

// Definimos traducciones para toda la aplicación
const translations: Record<string, Record<Language, TranslationValue>> = {
  // Navegación
  'nav.about': {
    ES: 'Sobre mí',
    EN: 'About me',
  },
  'nav.projects': {
    ES: 'Proyectos',
    EN: 'Projects',
  },
  'nav.contact': {
    ES: 'Contacto',
    EN: 'Contact',
  },
  'nav.downloadCV': {
    ES: 'Descargar CV',
    EN: 'Download CV',
  },
  
  // Idiomas
  'lang.spanish': {
    ES: 'Español',
    EN: 'Spanish',
  },
  'lang.english': {
    ES: 'Inglés',
    EN: 'English',
  },
  
  // Hero Section
  'hero.title': {
    ES: 'Joel Sánchez',
    EN: 'Joel Sánchez',
  },
  'hero.description': {
    ES: 'Especialista en Sistemas de Codificación Industrial & Desarrollador Full Stack. Combinando conocimientos técnicos en electrónica y automatización con habilidades avanzadas en desarrollo de software.',
    EN: 'Industrial Coding Systems Specialist & Full Stack Developer. Combining technical knowledge in electronics and automation with advanced software development skills.',
  },
  'hero.github': {
    ES: 'GitHub',
    EN: 'GitHub',
  },
  
  // About Section
  'about.title': {
    ES: 'Sobre mí',
    EN: 'About me',
  },
  'about.subtitle': {
    ES: 'Mi trayectoria profesional',
    EN: 'My professional journey',
  },
  'about.technicalProfile': {
    ES: 'Perfil técnico',
    EN: 'Technical profile',
  },
  'about.technicalDescription': {
    ES: 'Especialista en Robótica Industrial con amplia experiencia en sistemas de automatización avanzada. Experto en programación, mantenimiento y optimización de robots industriales, sistemas de control y tecnologías de visión artificial para entornos de producción de alta precisión.',
    EN: 'Specialist in Industrial Robotics with extensive experience in advanced automation systems. Expert in programming, maintenance, and optimization of industrial robots, control systems, and machine vision technologies for high-precision production environments.',
  },
  'about.automation': {
    ES: 'Automatización',
    EN: 'Automation',
  },
  'about.electronics': {
    ES: 'Electrónica',
    EN: 'Electronics',
  },
  'about.industrialSystems': {
    ES: 'Sistemas de Codificación',
    EN: 'Coding Systems',
  },
  'about.softwareDev': {
    ES: 'Desarrollo de software',
    EN: 'Software development',
  },
  'about.softwareDescription': {
    ES: 'Desarrollador Full Stack con enfoque en la creación de aplicaciones web integrales utilizando tecnologías modernas. Diseño e implemento soluciones end-to-end que conectan interfaces atractivas con robustas arquitecturas backend, garantizando óptimo rendimiento y escalabilidad.',
    EN: 'Full Stack Developer focused on creating comprehensive web applications using modern technologies. I design and implement end-to-end solutions that connect attractive interfaces with robust backend architectures, ensuring optimal performance and scalability.',
  },
  'about.experience': {
    ES: 'Experiencia laboral',
    EN: 'Work experience',
  },
  'about.jobTitle1': {
    ES: 'Especialista en Sistemas de Codificación',
    EN: 'Coding Systems Specialist',
  },
  'about.jobPeriod1': {
    ES: 'United Barcode Systems, 2024-Presente',
    EN: 'United Barcode Systems, 2024-Present',
  },
  'about.jobDescription1': {
    ES: 'Soporte técnico avanzado para sistemas de etiquetado industrial. Resolución de incidencias complejas para clientes internacionales. Configuración remota y diagnóstico de equipos de impresión industrial. Desarrollo de soluciones para optimizar procesos de etiquetado.',
    EN: 'Advanced technical support for industrial labeling systems. Resolution of complex incidents for international clients. Remote configuration and diagnostics of industrial printing equipment. Development of solutions to optimize labeling processes.',
  },
  'about.jobTitle2': {
    ES: 'Técnico Electrónico',
    EN: 'Electronic Technician',
  },
  'about.jobPeriod2': {
    ES: 'Sicma21, 2022-2024',
    EN: 'Sicma21, 2022-2024',
  },
  'about.jobDescription2': {
    ES: 'Reparación y mantenimiento de sistemas electrónicos industriales. Implementación de mejoras técnicas y resolución de problemas en entornos de producción.',
    EN: 'Repair and maintenance of industrial electronic systems. Implementation of technical improvements and troubleshooting in production environments.',
  },
  'about.skills': {
    ES: 'Habilidades técnicas',
    EN: 'Technical skills',
  },
  'about.frontendDev': {
    ES: 'Desarrollo Frontend',
    EN: 'Frontend Development',
  },
  'about.backendDev': {
    ES: 'Desarrollo Backend',
    EN: 'Backend Development',
  },
  'about.tools': {
    ES: 'Herramientas y Tecnologías',
    EN: 'Tools & Technologies',
  },
  'about.languages': {
    ES: 'Idiomas',
    EN: 'Languages',
  },
  'about.spanish': {
    ES: 'Español (Nativo)',
    EN: 'Spanish (Native)',
  },
  'about.catalan': {
    ES: 'Catalán (Nativo)',
    EN: 'Catalan (Native)',
  },
  'about.english': {
    ES: 'Inglés (C1)',
    EN: 'English (C1)',
  },
  
  // Projects Section
  'projects.title': {
    ES: 'Proyectos',
    EN: 'Projects',
  },
  'projects.subtitle': {
    ES: 'Mis trabajos destacados',
    EN: 'My featured work',
  },
  'projects.viewRepo': {
    ES: 'Ver repositorio',
    EN: 'View repository',
  },
  'projects.viewMore': {
    ES: 'Ver más proyectos',
    EN: 'See more projects',
  },
  'projects.project1Title': {
    ES: 'Sistema de Control de Robots Colaborativos',
    EN: 'Collaborative Robotics Control System',
  },
  'projects.project1Description': {
    ES: 'Desarrollo de una interfaz avanzada para la programación y control de robots colaborativos en entornos industriales, mejorando la eficiencia productiva y reduciendo los tiempos de configuración.',
    EN: 'Development of an advanced interface for programming and controlling collaborative robots in industrial environments, improving production efficiency and reducing setup times.',
  },
  'projects.project2Title': {
    ES: 'Plataforma de Monitorización para Células Robotizadas',
    EN: 'Robotics Cell Monitoring Platform',
  },
  'projects.project2Description': {
    ES: 'Interfaz para visualizar y analizar en tiempo real el rendimiento de células robotizadas, incluyendo estadísticas de producción, diagnóstico predictivo y alertas automatizadas.',
    EN: 'Interface for real-time visualization and analysis of robotic cell performance, including production statistics, predictive diagnostics, and automated alerts.',
  },
  'projects.project3Title': {
    ES: 'Sistema de Visión Artificial para Control de Calidad',
    EN: 'Machine Vision System for Quality Control',
  },
  'projects.project3Description': {
    ES: 'Aplicación que integra cámaras industriales y algoritmos de visión artificial para la detección automatizada de defectos en líneas de producción, aumentando la precisión del control de calidad.',
    EN: 'Application integrating industrial cameras and machine vision algorithms for automated defect detection in production lines, increasing quality control accuracy.',
  },
  'projects.confidentialityMessage': {
    ES: 'Algunos proyectos son privados debido a la confidencialidad del cliente, otros están disponibles en GitHub o desplegados en vivo.',
    EN: 'Some projects are private due to client confidentiality, others available on GitHub or deployed live.',
  },
  
  // Skills Section
  'skills.title': {
    ES: 'Habilidades',
    EN: 'Skills',
  },
  'skills.subtitle': {
    ES: 'Tecnologías con las que trabajo',
    EN: 'Technologies I work with',
  },
  'skills.robotics.title': {
    ES: 'Sistemas Industriales',
    EN: 'Industrial Systems',
  },
  'skills.robotics.description': {
    ES: 'Configuración y soporte de sistemas de codificación industrial y equipos de etiquetado.',
    EN: 'Configuration and support of industrial coding systems and labeling equipment.',
  },
  'skills.robotics.technologies': {
    ES: ['Automatización', 'Electrónica', 'Sistemas de Codificación', 'IoT', 'Control de Equipos'],
    EN: ['Automation', 'Electronics', 'Coding Systems', 'IoT', 'Equipment Control'],
  },
  'skills.frontend.title': {
    ES: 'Desarrollo Frontend',
    EN: 'Frontend Development',
  },
  'skills.frontend.description': {
    ES: 'Creación de interfaces modernas, responsivas y con óptima experiencia de usuario.',
    EN: 'Creation of modern, responsive interfaces with optimal user experience.',
  },
  'skills.frontend.technologies': {
    ES: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    EN: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  },
  'skills.backend.title': {
    ES: 'Desarrollo Backend',
    EN: 'Backend Development',
  },
  'skills.backend.description': {
    ES: 'Implementación de APIs robustas y sistemas de gestión de datos eficientes.',
    EN: 'Implementation of robust APIs and efficient data management systems.',
  },
  'skills.backend.technologies': {
    ES: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
    EN: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs'],
  },
  'skills.tools.title': {
    ES: 'Herramientas y Sistemas',
    EN: 'Tools and Systems',
  },
  'skills.tools.description': {
    ES: 'Utilización de herramientas para optimizar el desarrollo y despliegue de proyectos.',
    EN: 'Use of tools to optimize project development and deployment.',
  },
  'skills.tools.technologies': {
    ES: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux'],
    EN: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux'],
  },
  
  // Contact Section
  'contact.title': {
    ES: 'Contacto',
    EN: 'Contact',
  },
  'contact.subtitle': {
    ES: '¿Interesado en trabajar juntos?',
    EN: 'Interested in working together?',
  },
  'contact.directContact': {
    ES: 'Ponte en contacto conmigo directamente:',
    EN: 'Get in touch with me directly:',
  },
  'contact.emailMe': {
    ES: 'Correo electrónico',
    EN: 'Email me',
  },
  'contact.getInTouch': {
    ES: 'Escríbeme y estamos en contacto',
    EN: 'Write me and let\'s get in touch',
  },
  
  // Footer
  'footer.rights': {
    ES: 'Todos los derechos reservados',
    EN: 'All rights reserved',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ES')

  // Función de traducción simple
  const t = (key: string): TranslationValue => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 