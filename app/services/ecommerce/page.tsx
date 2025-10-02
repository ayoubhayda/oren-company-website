import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function EcommercePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge className="mb-4">E-commerce Solutions</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                E-commerce Development Services
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Build powerful online stores that drive sales and provide exceptional shopping experiences
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
