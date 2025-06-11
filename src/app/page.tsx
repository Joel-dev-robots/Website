"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import CvDownloadButton from '@/components/CvDownloadButton'
import LanguageSelector from '@/components/LanguageSelector'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
              JS
            </span>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="#projects" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {t('nav.projects')}
            </Link>
            <Link 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {t('nav.contact')}
            </Link>
            
            {/* Language Selector */}
            <LanguageSelector />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative mx-auto h-82 w-72 rounded-full overflow-hidden mb-12 shadow-xl ring-4 ring-primary/20 bg-gradient-to-br from-primary/10 to-secondary/20 animate-fade-in">
              <Image
                src="/profile.jpg"
                alt="Joel Sánchez"
                width={288}
                height={288}
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in [animation-delay:200ms]">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in [animation-delay:400ms]">
              <a
                href="https://github.com/Joel-dev-robots"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span>{t('hero.github')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="mailto:joelschzmrtz@gmail.com"
                className="btn-secondary group"
              >
                <span>Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Joel Sánchez. {t('footer.rights')}.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Joel-dev-robots"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:joelschzmrtz@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('contact.getInTouch')}
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating CV Download Button */}
      <div className="fixed bottom-12 right-8 z-50 animate-bounce-slow">
        <CvDownloadButton floating={true} />
      </div>
    </div>
  )
} 