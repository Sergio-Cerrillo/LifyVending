"use client"

import { Coffee, Droplet, Zap, Wrench } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const services = [
  {
    id: 1,
    name: "Máquinas Vending",
    description: "Snacks, bebidas y productos frescos de máxima calidad",
    icon: Zap,
    features: ["Stock ilimitado", "Pago contactless", "Control remoto"],
  },
  {
    id: 2,
    name: "Máquinas de Café",
    description: "Café espresso profesional de barista automático",
    icon: Coffee,
    features: ["Granos premium", "12 variedades", "Limpieza automática"],
  },
  {
    id: 3,
    name: "Máquinas de Agua",
    description: "Agua pura con sistema de filtración de 7 etapas",
    icon: Droplet,
    features: ["Filtración UV", "Fría y caliente", "Ahorro ecológico"],
  },
  {
    id: 4,
    name: "Servicio Técnico",
    description: "Mantenimiento preventivo y soporte inmediato",
    icon: Wrench,
    features: ["Respuesta 15min", "Técnicos 24/7", "Repuestos originales"],
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

          <h2 className="text-4xl sm:text-5xl font-semibold mb-6 leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
                className={`group relative glass glass-hover rounded-xl p-8 overflow-hidden touch-feedback border border-primary/10 ${isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center transform ${isHovered ? "scale-105" : ""
                        } transition-all duration-200`}
                    >
                      <Icon className="text-primary" size={32} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-6 right-6 bg-primary/10 px-3 py-1 rounded-md text-xs font-medium text-primary">Premium</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="glass rounded-xl p-12 relative overflow-hidden border border-primary/10">
          <h3 className="text-3xl font-semibold text-center mb-12 bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
            Ventajas Competitivas
          </h3>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { value: "100%", label: "Dedicación Total", sublabel: "A tu proyecto" },
              { value: "<15min", label: "Reposición Express", sublabel: "Tiempo récord" },
              { value: "24/7/365", label: "Disponibilidad", sublabel: "Sin interrupciones" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
