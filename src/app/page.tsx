import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">JS</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">Sobre mí</Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900">Proyectos</Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contacto</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mx-auto h-32 w-32 rounded-full overflow-hidden mb-8">
              <Image
                src="/profile.jpg"
                alt="Joel Sánchez"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Joel Sánchez
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Soy Joel Sánchez, técnico especializado en automatización industrial con pasión por el desarrollo web y la programación. Actualmente enfocado en proyectos tecnológicos aplicados a la industria y soluciones digitales remotas.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Joel-dev-robots"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Contact />
    </div>
  )
} 