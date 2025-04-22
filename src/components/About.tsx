"use client"

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" className="bg-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute right-0 bottom-1/3 w-48 h-48 bg-secondary/30 rounded-full blur-3xl opacity-40 -z-10"></div>
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="section-title">
            <h2 className="font-bold">
              {t('about.title')}
            </h2>
            <p className="text-muted-foreground text-lg mb-2">
              {t('about.subtitle')}
            </p>
          </div>
          
          <div className="card p-8 md:p-12 animate-fade-in [animation-delay:100ms]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground relative inline-block">
                  {t('about.technicalProfile')}
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full -mb-2"></span>
                </h3>
                <p className="mb-6">
                  {t('about.technicalDescription')}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{t('about.automation')}</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{t('about.electronics')}</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{t('about.industrialSystems')}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground relative inline-block">
                  {t('about.softwareDev')}
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full -mb-2"></span>
                </h3>
                <p className="mb-6">
                  {t('about.softwareDescription')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-10 border-t border-border/40">
              <h3 className="text-xl font-semibold mb-6 text-foreground relative inline-block">
                {t('about.experience')}
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full -mb-2"></span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary before:ring-4 before:ring-primary/20 before:transition-all group-hover:before:scale-110">
                    <h4 className="text-lg font-medium mb-2">{t('about.jobTitle1')}</h4>
                    <p className="text-muted-foreground mb-1">{t('about.jobPeriod1')}</p>
                    <p>{t('about.jobDescription1')}</p>
                  </div>
                </div>
                
                <div className="group">
                  <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-4 before:w-4 before:rounded-full before:bg-primary before:ring-4 before:ring-primary/20 before:transition-all group-hover:before:scale-110">
                    <h4 className="text-lg font-medium mb-2">{t('about.jobTitle2')}</h4>
                    <p className="text-muted-foreground mb-1">{t('about.jobPeriod2')}</p>
                    <p>{t('about.jobDescription2')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6 text-foreground relative inline-block">
                  {t('about.skills')}
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full -mb-2"></span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  <div>
                    <h4 className="font-medium mb-2">{t('about.frontendDev')}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">HTML/CSS</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">TypeScript</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">React</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">{t('about.backendDev')}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Express</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">MongoDB</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">PostgreSQL</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">API REST</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">{t('about.tools')}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Git</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Docker</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">CI/CD</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Agile</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">{t('about.languages')}</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{t('about.spanish')}</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{t('about.catalan')}</span>
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">{t('about.english')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 