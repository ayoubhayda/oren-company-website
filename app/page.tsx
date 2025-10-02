import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Oren - Professional Web Development & Digital Solutions",
  description:
    "Transform your digital presence with professional web development, custom platforms, e-commerce solutions, and digital marketing services. Trusted by startups and enterprises.",
  keywords: [
    "web development",
    "custom platforms",
    "e-commerce",
    "digital marketing",
    "UI/UX design",
    "social media management",
  ],
  openGraph: {
    title: "Oren - Professional Web Development & Digital Solutions",
    description:
      "Transform your digital presence with professional web development, custom platforms, and digital marketing services.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
