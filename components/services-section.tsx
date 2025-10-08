"use client";

import {
  Code,
  Palette,
  ShoppingCart,
  TrendingUp,
  Share2,
  Zap,
  ArrowRight,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";

const services = [
  {
    icon: Code,
    titleKey: "services.web-dev",
    descKey: "services.web-dev.desc",
    href: "/services/web-development",
  },
  {
    icon: Zap,
    titleKey: "services.custom-platforms",
    descKey: "services.custom-platforms.desc",
    href: "/services/custom-platforms",
  },
  {
    icon: ShoppingCart,
    titleKey: "services.ecommerce",
    descKey: "services.ecommerce.desc",
    href: "/services/ecommerce",
  },
  {
    icon: TrendingUp,
    titleKey: "services.marketing",
    descKey: "services.marketing.desc",
    href: "/services/digital-marketing",
    comingSoon: true,
  },
  {
    icon: Share2,
    titleKey: "services.social",
    descKey: "services.social.desc",
    href: "/services/social-media",
    comingSoon: true,
  },
  {
    icon: Palette,
    titleKey: "services.design",
    descKey: "services.design.desc",
    href: "/services/design",
    comingSoon: true,
  },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Wrench className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              {t("services.headerBadge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card className={`group transition-all duration-300 border-border flex flex-col justify-between h-full ${
                service.comingSoon
                  ? "opacity-75 hover:border-muted-foreground/30 hover:-translate-y-0"
                  : "hover:border-primary/30 hover:-translate-y-1"
              }`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 transition-opacity duration-500 ${
                  service.comingSoon ? "opacity-0" : "opacity-0 group-hover:opacity-100"
                }`} />

                <div className="relative flex flex-col gap-5">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-colors ${
                        service.comingSoon
                          ? "bg-muted-foreground/10"
                          : "group-hover:bg-primary/20"
                      }`}>
                        <service.icon className={`h-6 w-6 transition-colors ${
                          service.comingSoon ? "text-muted-foreground" : "text-primary"
                        }`} />
                      </div>
                      {service.comingSoon && (
                        <Badge variant="outline" className="text-xs text-muted-foreground border-muted-foreground/30">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    <CardTitle className={`text-xl ${service.comingSoon ? "text-muted-foreground" : ""}`}>
                      {t(service.titleKey)}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <CardDescription className={`leading-relaxed text-base ${service.comingSoon ? "text-muted-foreground/80" : "text-muted-foreground"}`}>
                      {t(service.descKey)}
                    </CardDescription>
                  </CardContent>
                </div>

                <div className="mt-auto p-6 pt-0">
                  {service.comingSoon ? (
                    <Button variant="outline" disabled className="w-full opacity-50 cursor-not-allowed">
                      Coming Soon
                    </Button>
                  ) : (
                    <Button
                      variant="link"
                      asChild
                      className="!p-0 h-auto font-semibold group/link hover:text-black dark:hover:text-white hover:no-underline"
                    >
                      <Link href={service.href}>
                        {t("common.learnMore")}

                        <ArrowRight className="ms-0.5 transform rtl:rotate-180" />
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l  from-transparent to-primary"></div>
            <Link href="/services" className="hover:text-primary transition-colors">
              {t("services.viewAllServices")}
            </Link>
            <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r  from-transparent to-primary"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
