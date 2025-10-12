"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Palette,
  Zap,
  Globe,
  Shield,
  Rocket,
  Star,
  Smartphone,
  ShoppingCart,
  TrendingUp,
  Share2,
  Settings,
  Layers,
  Gauge,
  Lock,
  Cloud,
  Headphones,
  Lightbulb,
  BarChart3,
  Users,
  Wrench,
  Monitor,
  Search,
  Mail,
  CreditCard,
  Building
} from "lucide-react";
import { useLanguage } from "../language-provider";

const ServicesBar = () => {
  const { t, language } = useLanguage();
  const rtl = language === "ar";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { textKey: "services.complete-web-solutions", icon: Code },
    { textKey: "services.modern-interactive-websites", icon: Rocket },
    { textKey: "services.secure-backend-systems", icon: Database },
    { textKey: "services.reliable-development-solutions", icon: Zap },
    { textKey: "services.intuitive-user-experiences", icon: Palette },
    { textKey: "services.dynamic-web-applications", icon: Globe },
    { textKey: "services.website-speed-optimization", icon: Star },
    { textKey: "services.seamless-system-integration", icon: Shield },
    { textKey: "services.ecommerce-solutions", icon: ShoppingCart },
    { textKey: "services.digital-marketing", icon: TrendingUp },
    { textKey: "services.social-media-management", icon: Share2 },
    { textKey: "services.api-development", icon: Layers },
    { textKey: "services.performance-optimization", icon: Gauge },
    { textKey: "services.database-management", icon: Database },
    { textKey: "services.seo-optimization", icon: Search },
    { textKey: "services.email-marketing", icon: Mail },
    { textKey: "services.payment-integration", icon: CreditCard },
    { textKey: "services.cms-development", icon: Monitor },
    { textKey: "services.analytics-tracking", icon: BarChart3 },
    { textKey: "services.custom-platforms", icon: Building },
    { textKey: "services.technical-consulting", icon: Wrench },
  ];

  // Create multiple duplicates for seamless infinite loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <motion.div
      className="relative w-full overflow-hidden bg-gradient-to-r from-muted/30 via-primary/4 to-muted/30 border-y border-border py-6"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isVisible ? {
        opacity: 1,
        y: 0,
        scale: 1,
      } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth entrance
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.08)_1px,_transparent_0)] bg-[size:20px_20px]"></div>

      {/* Gradient overlays for fade effect - RTL aware */}
      <div className={`absolute ${rtl ? 'right-0' : 'left-0'} top-0 w-32 h-full ${rtl ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-background to-transparent z-10`}></div>
      <div className={`absolute ${rtl ? 'left-0' : 'right-0'} top-0 w-32 h-full ${rtl ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-background to-transparent z-10`}></div>

      <motion.div
        className="flex items-center gap-9"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? {
          opacity: 1,
          y: 0,
          x: rtl ? [0, "100%"] : [0, "-100%"],
        } : { opacity: 0, y: 20 }}
        transition={{
          opacity: { duration: 0.6 },
          y: { duration: 0.6 },
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: rtl ? 45 : 45, // Slightly slower for RTL to match reading speed
            ease: "linear",
            delay: 0.5, // Start scrolling after entrance animation
          },
        }}
      >
        {duplicatedServices.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="flex items-center gap-3 whitespace-nowrap group">
              <div className="p-2 rounded-lg bg-card border border-border group-hover:shadow-md group-hover:scale-105 transition-all duration-300 group-hover:border-primary/30">
                <IconComponent className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-semibold text-sm md:text-base tracking-wide">
                {t(service.textKey)}
              </span>
              {index < duplicatedServices.length - 1 && (
                <div className={`w-2 h-2 rounded-full bg-primary/60 ms-6`}></div>
              )}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ServicesBar;