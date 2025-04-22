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
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">JS</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="#about" className="text-foreground hover:text-primary transition-colors duration-200">
              Sobre mí
            </Link>
            <Link href="#projects" className="text-foreground hover:text-primary transition-colors duration-200">
              Proyectos
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors duration-200">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative mx-auto h-40 w-40 rounded-full overflow-hidden mb-8 shadow-xl ring-4 ring-primary/20">
              <Image
                src="/profile.jpg"
                alt="Joel Sánchez"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Joel Sánchez
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Técnico especializado en automatización industrial con pasión por el desarrollo web. Enfocado en proyectos tecnológicos aplicados a la industria y soluciones digitales remotas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/Joel-dev-robots"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-white px-6 py-3 rounded-lg hover:opacity-90 shadow-subtle transition-all duration-200 hover:translate-y-[-2px]"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 shadow-subtle transition-all duration-200 hover:translate-y-[-2px]"
              >
                LinkedIn
              </a>
              <a
                href="#contact"
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 shadow-subtle transition-all duration-200 hover:translate-y-[-2px]"
              >
                Contacto
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
      <footer className="py-8 border-t border-border">
        <div className="container text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Joel Sánchez. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
} 