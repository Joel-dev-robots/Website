import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold relative inline-block pb-2 mb-4">
              Sobre mí
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground text-lg mb-2">
              Mi trayectoria profesional
            </p>
          </div>
          
          <div className="bg-background rounded-2xl shadow-subtle p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Experiencia técnica</h3>
                <p className="mb-6">
                  Con años de experiencia en robótica, reparación de sistemas y automatización industrial, he desarrollado una sólida base técnica que ahora aplico en el desarrollo de software.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Automatización</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Robótica</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Sistemas industriales</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Mi transición</h3>
                <p className="mb-6">
                  Tras años trabajando en automatización industrial, he comenzado una transición profesional hacia el desarrollo de software, uniendo mis habilidades técnicas con herramientas modernas de programación.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center italic">
                "Esta combinación única me permite crear soluciones innovadoras que conectan el mundo físico con el digital."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 