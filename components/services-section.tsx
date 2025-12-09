"use client"

import { Coffee, Droplet, Zap, Wrench } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    id: 1,
    name: "Máquinas Vending",
    description: "Snacks, bebidas y productos frescos de máxima calidad",
    icon: Zap,
    gradient: "from-primary to-secondary",
    features: ["Stock ilimitado", "Pago contactless", "Control remoto"],
    emoji: "⚡",
  },
  {
    id: 2,
    name: "Máquinas de Café",
    description: "Café espresso profesional de barista automático",
    icon: Coffee,
    gradient: "from-secondary to-accent",
    features: ["Granos premium", "12 variedades", "Limpieza automática"],
    emoji: "☕",
  },
  {
    id: 3,
    name: "Máquinas de Agua",
    description: "Agua pura con sistema de filtración de 7 etapas",
    icon: Droplet,
    gradient: "from-accent to-primary",
    features: ["Filtración UV", "Fría y caliente", "Ahorro ecológico"],
    emoji: "💧",
  },
  {
    id: 4,
    name: "Servicio Técnico",
    description: "Mantenimiento preventivo y soporte inmediato",
    icon: Wrench,
    gradient: "from-primary via-secondary to-accent",
    features: ["Respuesta 15min", "Técnicos 24/7", "Repuestos originales"],
    emoji: "🔧",
  },
]

export function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-service-id") || "0")
            setVisibleCards((prev) => new Set(prev).add(id))
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = document.querySelectorAll("[data-service-id]")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary dark:text-accent">Soluciones Premium</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Nuestros
            </span>
            <span className="block text-foreground relative">
              <span className="absolute inset-0 blur-3xl bg-primary/30 transform scale-110"></span>
              <span className="relative">Servicios</span>
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones completas con tecnología de última generación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredId === service.id
            const isVisible = visibleCards.has(service.id)

            return (
              <div
                key={service.id}
                data-service-id={service.id}
                className={`group relative glass glass-hover rounded-3xl p-8 overflow-hidden touch-feedback ${isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 transform ${isHovered ? "scale-110 rotate-6" : ""
                        } active:scale-95 transition-all duration-300`}
                    >
                      <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                        <Icon className="text-primary" size={36} />
                      </div>
                    </div>
                    <div className="text-5xl transform group-hover:scale-125 group-active:scale-110 transition-transform duration-300">
                      {service.emoji}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm font-medium"
                        style={{
                          animation: isHovered ? `slide-up 0.3s ease-out ${i * 0.1}s both` : "none",
                        }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-6 right-6 glass px-3 py-1 rounded-full text-xs font-bold">Premium</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="glass rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <h3 className="text-3xl font-black text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ventajas Competitivas
          </h3>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { value: "100%", label: "Dedicación Total", sublabel: "A tu proyecto", icon: "🎯" },
              { value: "<15min", label: "Reposición Express", sublabel: "Tiempo récord", icon: "⚡" },
              { value: "24/7/365", label: "Disponibilidad", sublabel: "Sin interrupciones", icon: "🚀" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 ">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
