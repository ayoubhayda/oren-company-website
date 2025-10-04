import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioPreview } from "@/components/portfolio-preview";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import ServicesBar from "@/components/general/ServicesBar";
import SectionSeparator from "@/components/general/SectionSeparator";

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
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        {/* Services bar */}
        <section>
          <ServicesBar />
        </section>
        <ServicesSection />
        <SectionSeparator />
        <ProcessSection />
        <SectionSeparator />
        <PortfolioPreview />
        <SectionSeparator />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
