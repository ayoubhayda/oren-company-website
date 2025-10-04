"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import ProjectCard from "./general/ProjectCard";

const projects = [
  {
    slug: "ecommerce-platform",
    title: "BrewHaus - Modern Coffee Shop Website",
    description:
      "A sleek and responsive coffee shop website crafted with Next.js, TypeScript, TailwindCSS, and shadcn/ui. It features elegant animations and smooth interactions powered by Framer Motion.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "framer-motion",
      "Vercel",
    ],
    image:
      "https://9457m1r99j.ufs.sh/f/IOGyRQdjvdUuQKL8l4A9Jac2vkrD1p5ZlPq0hdgjwSKsxWVN",
    demoLink: "#",
    githubLink: "#",
  },
  {
    slug: "saas-dashboard",
    title: "PizzaCraft - Modern Pizza Shop Website",
    description:
      "A sleek and responsive pizza shop website built with React.js, TailwindCSS, shadcn/ui, and Framer Motion. Designed for all devices with smooth animations and an elegant user interface.",
    technologies: [
      "React.js",
      "TailwindCSS",
      "Headless UI",
      "shadcn/ui",
      "Framer Motion",
      "Vite",
      "TypeScript",
      "Responsive Design",
      "CSS Grid",
      "Flexbox",
    ],
    image:
      "https://9457m1r99j.ufs.sh/f/IOGyRQdjvdUu64aTFL048Y3UCAXi9qMFSTxhr6a2OcnjPRey",
    demoLink: "#",
    githubLink: "#",
  },
  {
    slug: "corporate-website",
    title: "Cactus - Modern Plant Showcase",
    description:
      "A beautifully designed cactus-themed website built with React.js, TailwindCSS, shadcn/ui, and Framer Motion. Fully responsive and crafted to provide a smooth and elegant user experience across all devices.",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "Framer Motion",
      "TypeScript",
      "Responsive Design",
      "Component Architecture",
    ],
    image:
      "https://9457m1r99j.ufs.sh/f/IOGyRQdjvdUule4JhpGseMcJCWhN8YURXIw1tip4l6FLSHdZ",
    demoLink: "#",
    githubLink: "#",
  },
];

export function PortfolioPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">
              {t("portfolio.badge")}
            </span>
          </div>
          {/* Portfolio title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("portfolio.subtitle")}
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <ProjectCard key={index} project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-8 h-px bg-gradient-to-r rtl:bg-gradient-to-l  from-transparent to-primary"></div>
            <Link
              href="/portfolio"
              className="hover:text-primary transition-colors"
            >
              {t("portfolio.view-all")}
            </Link>
            <div className="w-8 h-px bg-gradient-to-l rtl:bg-gradient-to-r  from-transparent to-primary"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
