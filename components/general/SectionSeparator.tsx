"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Star = { id: number; x: number; y: number; size: number; delay: number };

const SectionSeparator = () => {
  const [isClient, setIsClient] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setIsClient(true);
    // Generate stars only on client side
    const generatedStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center justify-center">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 dark:via-primary/5 to-transparent"></div>

      {/* Animated stars - only render on client */}
      {isClient && (
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.div
              key={star.id}
              className="absolute rounded-full bg-primary/30"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Main separator line with gradient */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <div className="relative h-px">
          {/* Base gradient line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent"></div>

          {/* Animated gradient overlay - only animate on client */}
          {isClient && (
            <>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />

              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent blur-sm"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />
            </>
          )}
        </div>

        {/* Center ornament */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {isClient ? (
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-8 h-8 relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-primary/30 bg-background"></div>

                {/* Inner dot */}
                <motion.div
                  className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/60 to-primary/80"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Subtle glow */}
                <div className="absolute inset-1 rounded-full bg-primary/20 blur-sm"></div>
              </div>
            </motion.div>
          ) : (
            <div className="w-8 h-8 relative">
              {/* Static version for SSR */}
              <div className="absolute inset-0 rounded-full border border-primary/30 bg-background"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/60 to-primary/80"></div>
              <div className="absolute inset-1 rounded-full bg-primary/20 blur-sm"></div>
            </div>
          )}
        </div>

        {/* Side ornaments */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          {isClient ? (
            <motion.div
              animate={{
                x: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary/60"></div>
            </motion.div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary/40 to-primary/60"></div>
          )}
        </div>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {isClient ? (
            <motion.div
              animate={{
                x: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-l from-primary/40 to-primary/60"></div>
            </motion.div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-gradient-to-l from-primary/40 to-primary/60"></div>
          )}
        </div>
      </div>

      {/* Floating particles - only render on client */}
      {isClient && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-primary/25"
              style={{
                left: `${20 + i * 10}%`,
                top: "50%",
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SectionSeparator;
