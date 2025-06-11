"use client"

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="bg-muted relative overflow-hidden">
      <div className="container relative z-10">
        <div className="section-title">
          <h2 className="font-bold">
            {t('contact.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto animate-fade-in [animation-delay:100ms]">
          <div className="card p-8 md:p-12 text-center">
            <p className="text-muted-foreground mb-8 font-medium text-lg">
              {t('contact.directContact')}
            </p>
            
            <a
              href="mailto:joelschzmrtz@gmail.com"
              className="group inline-flex items-center justify-center p-6 rounded-lg hover:bg-background transition-colors duration-200 border border-border/20 hover:border-primary/40"
            >
              <div className="mr-4 bg-secondary p-4 rounded-full text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{t('contact.emailMe')}</h4>
                <p className="text-muted-foreground">joelschzmrtz@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-1">Escríbeme y estamos en contacto</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  )
} 