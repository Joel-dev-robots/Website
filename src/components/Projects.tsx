import React from 'react'
import Image from 'next/image'

const projects = [
  {
    title: 'Spare Parts Finder',
    description: 'App para encontrar repuestos en sistemas industriales.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/spare-parts.jpg',
    githubLink: 'https://github.com/yourusername/spare-parts-finder'
  },
  {
    title: 'Twitter Feed Summarizer',
    description: 'Proyecto React + API para filtrar y resumir tweets.',
    technologies: ['React', 'TypeScript', 'Twitter API'],
    image: '/twitter-summarizer.jpg',
    githubLink: 'https://github.com/yourusername/twitter-summarizer'
  },
  {
    title: 'Automatización de pruebas',
    description: 'Sistema embebido para testear equipos de impresión.',
    technologies: ['Python', 'Raspberry Pi', 'IoT'],
    image: '/test-automation.jpg',
    githubLink: 'https://github.com/yourusername/test-automation'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Proyectos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Ver en GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 