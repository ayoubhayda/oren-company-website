"use client";

import { Search, Palette, Code, Rocket, HeadphonesIcon, Waypoints } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";

const steps = [
  {
    icon: Search,
    titleKey: "process.discover",
    descriptionKey: "process.discover.desc",
  },
  {
    icon: Palette,
    titleKey: "process.design",
    descriptionKey: "process.design.desc",
  },
  {
    icon: Code,
    titleKey: "process.develop",
    descriptionKey: "process.develop.desc",
  },
  {
    icon: Rocket,
    titleKey: "process.launch",
    descriptionKey: "process.launch.desc",
  },
  {
    icon: HeadphonesIcon,
    titleKey: "process.support",
    descriptionKey: "process.support.desc",
  },
];

export function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Waypoints className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              {t("process.badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("process.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("process.subtitle")}
          </p>
        </AnimatedSection>

        {/* Process Steps - Elegant Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Central Timeline Line - moves to left on mobile */}
          <div className="absolute left-1 z-[0.5] sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          <StaggerContainer className="relative">
            <div className="space-y-8">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <StaggerItem key={index} className="relative">
                    {/* Timeline Node - moves to left on mobile */}
                    <div className="absolute left-[-2.5px] sm:left-1/2 sm:-translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 transition-all duration-300 hover:scale-125" />

                    {/* Process Card - always on right on mobile, alternating on desktop */}
                    <div
                      className={`flex relative z-30 ${
                        isLeft ? "sm:justify-start" : "sm:justify-end"
                      } justify-end`}
                    >
                      <div
                        className={`w-full max-w-xl sm:max-w-sm md:max-w-md lg:max-w-lg ${
                          isLeft ? "sm:pe-12 pl-7" : "sm:ps-12 pl-7"
                        }`}
                      >
                        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                          {/* Header with Icon and Step Number */}
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">
                              {t(step.titleKey)}
                            </h3>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {t(step.descriptionKey)}
                          </p>

                          {/* Subtle accent line */}
                          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>
          </StaggerContainer>
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l  from-transparent to-primary"></div>
            <span>
              {t("process.cta")}
            </span>
            <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r  from-transparent to-primary"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
