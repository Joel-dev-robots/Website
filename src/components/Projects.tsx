"use client"

import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Projects() {
  const { language, t } = useLanguage();
  
  const projects = [
    {
      titleKey: 'projects.project1Title',
      descriptionKey: 'projects.project1Description',
      technologies: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
      image: '/spare-parts.jpg',
      githubLink: 'https://github.com/Joel-dev-robots/remote-monitoring-system'
    },
    {
      titleKey: 'projects.project2Title',
      descriptionKey: 'projects.project2Description',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      image: '/twitter-summarizer.jpg',
      githubLink: 'https://github.com/Joel-dev-robots/productivity-dashboard'
    },
    {
      titleKey: 'projects.project3Title',
      descriptionKey: 'projects.project3Description',
      technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
      image: '/test-automation.jpg',
      githubLink: 'https://github.com/Joel-dev-robots/incident-management'
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute left-0 bottom-1/4 w-56 h-56 bg-secondary/20 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="container relative">
        <div className="max-w-6xl mx-auto">
          <div className="section-title">
            <h2 className="font-bold">
              {t('projects.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-2">
              {t('projects.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.titleKey}
                className="card overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-primary transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      {t('projects.viewRepo')}
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{t(project.titleKey)}</h3>
                  <p className="mb-4">{t(project.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center animate-fade-in [animation-delay:600ms]">
            <a
              href="https://github.com/Joel-dev-robots"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <span>{t('projects.viewMore')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 