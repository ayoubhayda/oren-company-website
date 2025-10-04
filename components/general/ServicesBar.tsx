"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Palette, Zap, Globe, Shield, Rocket, Star } from "lucide-react";

const ServicesBar = () => {
  const services = [
    { text: "Full Stack Web Developer", icon: Code },
    { text: "Next.js & React Expert", icon: Rocket },
    { text: "Laravel & PHP Backend", icon: Database },
    { text: "TypeScript Specialist", icon: Zap },
    { text: "UI/UX Designer", icon: Palette },
    { text: "MERN Stack Developer", icon: Globe },
    { text: "Performance Optimizer", icon: Star },
    { text: "API Integration Expert", icon: Shield },
  ];

  // Duplicate for seamless loop
  const duplicatedServices = [...services, ...services];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-muted/30 via-primary/4 to-muted/30 border-y border-border py-6">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--primary)/0.08)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
      
      <motion.div
        className="flex items-center gap-9"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
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
                {service.text}
              </span>
              {index < duplicatedServices.length - 1 && (
                <div className="w-2 h-2 rounded-full bg-primary/60 ml-6"></div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ServicesBar;