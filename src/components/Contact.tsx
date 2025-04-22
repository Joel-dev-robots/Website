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
        
        <div className="max-w-4xl mx-auto animate-fade-in [animation-delay:100ms]">
          <div className="card p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    placeholder={`${t('contact.name')}...`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    placeholder={`${t('contact.email')}...`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder={`${t('contact.subject')}...`}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                  placeholder={`${t('contact.message')}...`}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full group"
                >
                  <span>{t('contact.send')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </form>
            
            <div className="mt-10 pt-10 border-t border-border/40">
              <p className="text-muted-foreground mb-4 font-medium">
                {t('contact.alternateContact')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="mailto:joelschzmrtz@gmail.com"
                  className="group flex items-start p-4 rounded-lg hover:bg-background transition-colors duration-200"
                >
                  <div className="mr-4 mt-1 bg-secondary p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{t('contact.emailMe')}</h4>
                    <p className="text-muted-foreground">joelschzmrtz@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/joel-sanchez-martinez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start p-4 rounded-lg hover:bg-background transition-colors duration-200"
                >
                  <div className="mr-4 mt-1 bg-secondary p-3 rounded-full text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">LinkedIn</h4>
                    <p className="text-muted-foreground">{t('contact.linkedinConnect')}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-40 h-40 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  )
} 