"use client"

import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface CvDownloadButtonProps {
  floating?: boolean;
}

export default function CvDownloadButton({ floating = false }: CvDownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className={floating 
          ? "group relative flex items-center justify-center" 
          : "btn-primary flex items-center"}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {floating ? (
          <div className="relative flex flex-col items-center">
            <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="absolute -bottom-6 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
              CV
            </span>
          </div>
        ) : (
          <>
            {t('nav.downloadCV')}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>
      
      {isOpen && (
        <div className={`${floating ? 'absolute bottom-full right-0 mb-2' : 'absolute right-0 mt-2'} w-48 bg-background rounded-lg shadow-lg border border-border/40 py-2 z-50`}>
          <a
            href="/CV 2025.pdf"
            download
            className="block px-4 py-2 text-foreground hover:bg-secondary/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('lang.spanish')}
          </a>
          <a
            href="/CV 2025 ENG.pdf"
            download
            className="block px-4 py-2 text-foreground hover:bg-secondary/20 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t('lang.english')}
          </a>
        </div>
      )}
    </div>
  )
} 