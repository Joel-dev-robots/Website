import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Spare Parts Finder',
    description: 'App para encontrar repuestos en sistemas industriales. Optimiza el proceso de búsqueda y reduce tiempos de mantenimiento.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/spare-parts.jpg',
    githubLink: 'https://github.com/Joel-dev-robots/spare-parts-finder'
  },
  {
    title: 'Twitter Feed Summarizer',
    description: 'Herramienta que utiliza IA para filtrar y resumir tweets según temas específicos, ideal para monitorizar tendencias.',
    technologies: ['React', 'TypeScript', 'Twitter API'],
    image: '/twitter-summarizer.jpg',
    githubLink: 'https://github.com/Joel-dev-robots/twitter-summarizer'
  },
  {
    title: 'Automatización de Pruebas',
    description: 'Sistema embebido para testear equipos de impresión industrial con generación de informes automáticos.',
    technologies: ['Python', 'Raspberry Pi', 'IoT'],
    image: '/test-automation.jpg',
    githubLink: 'https://github.com/Joel-dev-robots/test-automation'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-bold relative inline-block pb-2 mb-4">
            Proyectos
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selección de proyectos que combinan mis conocimientos técnicos y habilidades de desarrollo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-muted rounded-xl overflow-hidden shadow-subtle border border-border/40 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white font-medium hover:underline"
                    >
                      Ver en GitHub 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 