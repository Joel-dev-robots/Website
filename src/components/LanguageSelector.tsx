"use client"

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const changeLang = (lang: 'ES' | 'EN') => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {language}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-background rounded-lg shadow-lg border border-border/40 py-2 z-50">
          <button
            className={`block w-full text-left px-4 py-2 ${language === 'ES' ? 'text-primary' : 'text-foreground hover:bg-secondary/20'} transition-colors`}
            onClick={() => changeLang('ES')}
          >
            Español
          </button>
          <button
            className={`block w-full text-left px-4 py-2 ${language === 'EN' ? 'text-primary' : 'text-foreground hover:bg-secondary/20'} transition-colors`}
            onClick={() => changeLang('EN')}
          >
            English
          </button>
        </div>
      )}
    </div>
  )
} 