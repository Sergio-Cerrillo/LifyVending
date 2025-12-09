"use client"

import { Coffee, Droplet, Cookie, Package } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categorias = [
  {
    id: "snacks",
    nombre: "Snacks",
    icon: Cookie,
    color: "from-amber-500 to-orange-500",
    descripcion: "Amplia variedad de aperitivos salados y dulces",
    items: [
      "Patatas fritas",
      "Frutos secos",
      "Chocolatinas",
      "Galletas",
      "Snacks saludables",
      "Chicles y caramelos"
    ]
  },
  {
    id: "bebidas-frias",
    nombre: "Bebidas Frías",
    icon: Droplet,
    color: "from-blue-500 to-cyan-500",
    descripcion: "Refrescantes opciones para todos los gustos",
    items: [
      "Agua mineral",
      "Refrescos",
      "Zumos naturales",
      "Bebidas energéticas",
      "Tés fríos",
      "Bebidas isotónicas"
    ]
  },
  {
    id: "bebidas-calientes",
    nombre: "Bebidas Calientes",
    icon: Coffee,
    color: "from-amber-700 to-brown-600",
    descripcion: "Café y bebidas calientes de calidad premium",
    items: [
      "Café espresso",
      "Café con leche",
      "Cappuccino",
      "Chocolate caliente",
      "Infusiones",
      "Café americano"
    ]
  },
  {
    id: "varios",
    nombre: "Varios",
    icon: Package,
    color: "from-purple-500 to-pink-500",
    descripcion: "Productos esenciales para tu día a día",
    items: [
      "Productos de higiene",
      "Accesorios tecnológicos",
      "Productos farmacéuticos",
      "Artículos de papelería",
      "Snacks para mascotas",
      "Productos ecológicos"
    ]
  }
]

export function ProductosGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            Nuestro <span className="text-primary">Catálogo</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Amplia variedad de productos para todos los gustos
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categorias.map((cat) => {
            const IconComponent = cat.icon
            const isActive = activeCategory === cat.id

            return (
              <div
                key={cat.id}
                className={cn(
                  "glass glass-hover rounded-2xl p-8 cursor-pointer transition-all duration-300",
                  isActive && "ring-2 ring-primary shadow-lg shadow-primary/20"
                )}
                onClick={() => setActiveCategory(isActive ? null : cat.id)}
              >
                {/* Icon */}
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br transition-all duration-300",
                  cat.color,
                  isActive ? "scale-110" : "scale-100"
                )}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{cat.nombre}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {cat.descripcion}
                </p>

                {/* Items List */}
                <div className={cn(
                  "space-y-2 overflow-hidden transition-all duration-300",
                  isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="border-t border-border pt-4">
                    <ul className="space-y-2">
                      {cat.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-sm flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="mt-4 text-center">
                  <span className="text-xs text-primary font-semibold">
                    {isActive ? "Ver menos" : "Ver productos"}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center glass rounded-3xl p-12">
          <h3 className="text-3xl font-black mb-4">
            ¿Buscas algo específico?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Podemos personalizar nuestro catálogo según las necesidades de tu negocio. Contáctanos para más información.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold px-8 py-6 text-lg shadow-lg shadow-primary/30 hover:scale-105 transition-all"
          >
            Contactar Ahora
          </Button>
        </div>
      </div>
    </section>
  )
}
