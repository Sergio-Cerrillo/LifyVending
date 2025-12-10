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
      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`glass rounded-2xl p-12 md:p-20 text-center relative overflow-hidden border border-primary/10 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
        >
          <div className="relative z-10">
            <div
              className={`inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 border border-primary/10 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary dark:text-accent">Únete a 500+ Empresas</span>
            </div>

            <h2
              className={`text-4xl sm:text-5xl font-semibold mb-6 leading-tight tracking-tight ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-2">
                ¿Listo para el Futuro?
              </span>
            </h2>

            <p
              className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
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
                className="touch-feedback group text-base px-10 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
              >
                <span className="flex items-center gap-2">
                  Solicitar Presupuesto
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </span>
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-border/50">
              {[
                { icon: Phone, label: "Teléfono", value: "+34 692 129 851" },
                { icon: Mail, label: "Email", value: "info@lifyvending.com" },
                { icon: Clock, label: "Horario", value: "24/7 Todo el año" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`glass glass-hover rounded-xl p-6 group touch-feedback border border-primary/10 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                  style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                >
                  <item.icon
                    className="text-primary mx-auto mb-3 group-hover:scale-105 transition-transform"
                    size={28}
                  />
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-primary/10">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                <span className="text-primary dark:text-accent font-semibold">70+</span> empresas confían en nosotros
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
