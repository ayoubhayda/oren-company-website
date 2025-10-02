"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import Silk from "./Silk";

export function HeroSection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system for animated background
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 105, 255, 0.3)";
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 105, 255, ${
              0.2 * (1 - distance / 150)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className="h-screen flex justify-center items-end relative bg-[#00020d]">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1  bg-gradient-to-b from-[#00020d]/50 via-[#00020d]/80 to-[#00020d]" />
      <div className="absolute z-0 inset-0">
        <Silk
          speed={9}
          scale={1}
          color="#0069FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("hero.badge")}
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              {t("hero.title")}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
              <Button
                size="lg"
                asChild
                className="group w-full sm:w-auto shadow-none transition-all"
              >
                <Link href="/contact">
                  {t("hero.cta.primary")}
                  <Sparkles className="ms-2 h-4 w-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group bg-transparent hover:bg-primary/5 w-full sm:w-auto transition-all"
              >
                <Link href="/portfolio">
                  {t("hero.cta.secondary")}
                  <Play className="ms-2 h-4 w-4 transform rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 sm:pt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-12 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-2xl font-bold text-foreground">
                  50+
                </span>
                <span className="text-[10px] sm:text-sm">
                  {t("hero.stats.projects")}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-2xl font-bold text-foreground">
                  98%
                </span>
                <span className="text-[10px] sm:text-sm">
                  {t("hero.stats.satisfaction")}
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-lg sm:text-2xl font-bold text-foreground">
                  5+
                </span>
                <span className="text-[10px] sm:text-sm">
                  {t("hero.stats.experience")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
