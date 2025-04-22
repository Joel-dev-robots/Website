import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="bg-muted relative">
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-bold relative inline-block pb-2 mb-4">
            Contacto
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o quieres hablar sobre posibles colaboraciones? Contáctame.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl shadow-subtle p-8 md:p-10 border border-border/40">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                    placeholder="Tu email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                  placeholder="Asunto del mensaje"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 resize-none"
                  placeholder="Tu mensaje"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex justify-center items-center"
                >
                  <span>Enviar mensaje</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </form>
            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-3">
                También puedes contactarme directamente por email:
              </p>
              <a
                href="mailto:albertonavarro.dev@gmail.com"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                albertonavarro.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-24 h-24 md:w-40 md:h-40 bg-secondary rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 md:w-56 md:h-56 bg-primary/20 rounded-full blur-3xl opacity-40 -z-10"></div>
    </section>
  )
} 