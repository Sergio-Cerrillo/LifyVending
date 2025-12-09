"use client"

import { ArrowRight, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function CallToAction() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`glass rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden group ${isVisible ? "animate-scale-in" : "opacity-0"}`}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-[100px] animate-float-slow" />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-accent/30 to-primary/30 rounded-full blur-[100px] animate-float-slow"
            style={{ animationDelay: "2s" }}
          />

          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary/50 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-secondary/50 rounded-br-3xl" />

          <div className="relative z-10">
            <div
              className={`inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary dark:text-accent">Únete a 500+ Empresas</span>
            </div>

            <h2
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient mb-2">
                ¿Listo para
              </span>
              <span className="block text-foreground text-shadow-glow animate-text-glow">el Futuro?</span>
            </h2>

            <p
              className={`text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              Da el salto a la tecnología de vending más avanzada de Mallorca
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="touch-feedback group text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/50 hover:shadow-primary/70 active:scale-95 transform hover:scale-105 transition-all duration-300 font-black relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar Presupuesto
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>


            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-border/50">
              {[
                { icon: Phone, label: "Teléfono", value: "+34 692 129 851", color: "primary" },
                { icon: Mail, label: "Email", value: "info@lifyvending.com", color: "secondary" },
                { icon: Clock, label: "Horario", value: "24/7 Todo el año", color: "accent" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`glass glass-hover rounded-2xl p-6 group touch-feedback ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <item.icon
                    className={`text-${item.color} mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`}
                    size={32}
                  />
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{item.label}</p>
                  <p className={`font-bold text-${item.color}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                <span className="text-primary dark:text-accent font-bold">70+</span> empresas confían en nosotros
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
