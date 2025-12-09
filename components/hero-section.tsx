"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <div
          className={`inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-8 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary dark:text-accent">Tu negocio sin inversión ni riesgos</span>
        </div>

        <h1
          className={`text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-none ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <span className="block mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
            MÁQUINAS VENDING
          </span>
          <span className="block text-foreground relative">
            <span className="absolute inset-0 blur-3xl bg-primary/30 transform scale-110"></span>
            <span className="relative">SOLO BENEFICIOS</span>
          </span>
        </h1>

        <p
          className={`text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          Nosotros instalamos, mantenemos y reponemos. Tú solo recibes tu <span className="text-primary font-bold">comisión</span> sin preocupaciones
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center gap-6 mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          {[
            { value: "0€", label: "Inversión", icon: "💰" },
            { value: "100%", label: "Mantenimiento", icon: "🔧" },
            { value: "24/7", label: "Soporte", icon: "🚀" },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl px-8 py-6 min-w-40 group touch-feedback"
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-2 transform group-hover:scale-125 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
          style={{ animationDelay: "0.7s" }}
        >
          <Link href="#contacto">
            <Button
              size="lg"
              className="touch-feedback text-lg px-10 py-7 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/50 hover:shadow-primary/80 active:scale-95 transform hover:scale-105 transition-all duration-300 font-bold relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>Solicitar Información</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity" />
            </Button>
          </Link>
        </div>

        <div className={`text-sm text-muted-foreground font-light ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: "0.9s" }}>
          🏆 Más de 500 clientes confían en nosotros • 🔧 Mantenimiento incluido • 📞 Soporte 24/7
        </div>
      </div>
    </section>
  )
}
