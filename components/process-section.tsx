"use client"

import { Search, Palette, Code, Rocket, HeadphonesIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/animated-section"

const steps = [
  {
    icon: Search,
    titleKey: "process.discover",
    description: "We analyze your business needs, target audience, and project goals to create a strategic roadmap.",
  },
  {
    icon: Palette,
    titleKey: "process.design",
    description: "Our designers craft beautiful, user-centric interfaces that align with your brand identity.",
  },
  {
    icon: Code,
    titleKey: "process.develop",
    description: "We build robust, scalable solutions using cutting-edge technologies and best practices.",
  },
  {
    icon: Rocket,
    titleKey: "process.launch",
    description: "We deploy your project with thorough testing and ensure a smooth, successful launch.",
  },
  {
    icon: HeadphonesIcon,
    titleKey: "process.support",
    description: "Ongoing maintenance, updates, and support to keep your digital presence running smoothly.",
  },
]

export function ProcessSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("process.title")}</h2>
          <p className="text-lg text-muted-foreground">{t("process.subtitle")}</p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" style={{ zIndex: 0 }} />

            {steps.map((step, index) => (
              <StaggerItem key={index} className="relative flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-4 shadow-lg">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Step Number */}
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
