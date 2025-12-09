import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CatalogoHero } from "@/components/catalogo-hero"
import { ProductosGrid } from "@/components/productos-grid"

export default function CatalogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CatalogoHero />
      <ProductosGrid />
      <Footer />
    </main>
  )
}
