"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { CheckCircle2, Users, Shield, Zap, TrendingUp, Award } from "lucide-react"

export default function SobreNosotros() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 sm:pt-28 lg:pt-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 relative ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
          >
            <span className="absolute inset-0 blur-3xl bg-primary/30 transform scale-110"></span>
            <span className="relative bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h1>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto font-light ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            Más de 25 años de experiencia en el sector del vending
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats Card */}
            <div className="glass rounded-3xl p-12">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Award, label: "Años de Experiencia", value: "25+" },
                  { icon: Users, label: "Clientes Satisfechos", value: "500+" },
                  { icon: TrendingUp, label: "Crecimiento Anual", value: "40%" },
                  { icon: Zap, label: "Tiempo de Respuesta", value: "15min" },
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-light">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">Nuestra Historia</span>
              </div>

              <h2 className="text-4xl font-bold">
                Tras más de <span className="text-primary">25 años</span> de experiencia
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                En el sector de máquinas dispensadoras vending, hemos decidido desarrollar nuestra propia empresa.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Nuestra seña de identidad en <span className="text-primary font-semibold">«Lify Vending»</span> corresponde a <span className="font-semibold">seriedad, compromiso y dedicación</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content First */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold">Nuestro Compromiso</span>
              </div>

              <h2 className="text-4xl font-bold">
                Lify Vending se caracteriza por poseer la <span className="text-primary">competencia</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                De una empresa líder del sector, pero sin olvidar la <span className="font-semibold">transparencia y cercanía</span> con el público.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground font-light">
                    Nos comprometemos con nuestros clientes, asegurando así un <span className="font-semibold">servicio totalmente satisfactorio</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Icon Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Seriedad", color: "from-primary to-secondary" },
                { icon: Users, title: "Compromiso", color: "from-secondary to-accent" },
                { icon: Zap, title: "Dedicación", color: "from-accent to-primary" },
                { icon: Award, title: "Excelencia", color: "from-primary to-accent" },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="glass glass-hover rounded-2xl p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} mb-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Nuestros <span className="text-primary">Valores</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Lo que nos define como empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Seriedad",
                description: "Actuamos con profesionalidad y responsabilidad en cada proyecto"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Compromiso",
                description: "Dedicados al éxito de nuestros clientes y sus negocios"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Dedicación",
                description: "Servicio personalizado y atención constante a tus necesidades"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-8 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="text-primary">FAQ</span>s
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "¿Cuesta dinero contratar una máquina de vending o de café?",
                answer: "No, únicamente repercute beneficios. Nosotros trabajamos a comisión sobre el beneficio que produzcan las máquinas una vez instaladas."
              },
              {
                question: "¿Con qué márgenes de beneficio trabaja Lify Vending?",
                answer: "El beneficio se obtiene del porcentaje acordado antes de la instalación de las máquinas. El porcentaje se ajusta en relación a las máquinas demandadas."
              },
              {
                question: "¿Se necesita licencia para la instalación?",
                answer: "Nosotros nos encargamos de todos los permisos. Al ser un arrendamiento de máquinas, la obligatoriedad de permisos recae en Lify Vending."
              },
              {
                question: "¿Quién se encarga del mantenimiento y reposición de productos?",
                answer: "Lify Vending se encarga tanto de suministrar tanto la máquina como los productos. Disponemos de software integrado en las máquinas que proporciona la capacidad de la máquina en tiempo real."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="glass glass-hover rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <span className="text-primary shrink-0">→</span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-8 font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
