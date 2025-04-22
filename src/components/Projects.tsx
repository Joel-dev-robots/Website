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
      isConfidential: true
    },
    {
      titleKey: 'projects.project2Title',
      descriptionKey: 'projects.project2Description',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      image: '/twitter-summarizer.jpg',
      isConfidential: true
    },
    {
      titleKey: 'projects.project3Title',
      descriptionKey: 'projects.project3Description',
      technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL'],
      image: '/test-automation.jpg',
      isConfidential: true
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
          
          <div className="text-center mb-8">
            <p className="text-muted-foreground italic">
              {t('projects.confidentialityMessage') as string}
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
                  {project.isConfidential && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 backdrop-blur-sm p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                  )}
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