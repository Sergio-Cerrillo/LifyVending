"use client"

import { Award, Zap, Shield, Clock, Users, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clientes",
    color: "from-primary to-secondary",
  },
  {
    icon: Clock,
    value: "99%",
    label: "Uptime",
    color: "from-secondary to-accent",
  },
  {
    icon: Zap,
    value: "15min",
    label: "Respuesta",
    color: "from-accent to-primary",
  },
  {
    icon: Award,
    value: "#1",
    label: "En Mallorca",
    color: "from-primary to-accent",
  },
]

const features = [
  {
    icon: Target,
    title: "Dedicación Profesional",
    description: "Equipo especializado dedicado exclusivamente a tu negocio con seguimiento personalizado 24/7.",
  },
  {
    icon: Zap,
    title: "Reposición Ultra Rápida",
    description: "Sistema de monitoreo inteligente con IA que detecta automáticamente cuando necesitas reposición.",
  },
  {
    icon: Shield,
    title: "Disponibilidad Completa",
    description: "Servicio 24/7/365 garantizado con técnicos en toda Mallorca listos para actuar.",
  },
]

function Target(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

export function WhyUsSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full mb-6">
            <Award className="text-primary dark:text-accent" size={18} />
            <span className="text-sm font-medium text-primary dark:text-accent">Certificados de Excelencia</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground mb-2">¿Por Qué</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Elegirnos?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Más de una década liderando la innovación en vending
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-8 text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-light">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
