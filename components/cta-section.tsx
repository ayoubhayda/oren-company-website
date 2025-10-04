"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Play } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { AnimatedSection } from "@/components/animated-section";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <MessageSquare className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              {t("common.getStarted")}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t("cta.title")}
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            {t("cta.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="group bg-primary text-primary-foreground hover:bg-primary/90 shadow-none transition-all"
            >
              <Link href="/contact">
                {t("hero.cta.primary")}
                <ArrowRight className="ms-2 h-4 w-4 transform rtl:rotate-180 " />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group bg-transparent hover:bg-primary/5 border-border hover:border-primary/30 transition-all"
            >
              <Link href="/portfolio">
                {t("hero.cta.secondary")}
                <Play className="ms-2 h-4 w-4 transform rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
