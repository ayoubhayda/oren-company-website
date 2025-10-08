"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function HeroSectionBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="absolute inset-0" id="interactive-bg">
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, rgba(0, 105, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 105, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Interactive floating particles */}
      <div className="absolute inset-0" id="particle-container">
        {isClient && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full"
              animate={{
                y: [-8, 8, -8],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full"
              animate={{
                y: [12, -12, 12],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-primary/35 rounded-full"
              animate={{
                y: [-15, 15, -15],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary/25 rounded-full"
              animate={{
                y: [10, -10, 10],
                opacity: [0.25, 0.55, 0.25],
              }}
              transition={{
                duration: 3.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full"
              animate={{
                y: [-12, 12, -12],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary/15 rounded-full"
              animate={{
                y: [14, -14, 14],
                opacity: [0.15, 0.45, 0.15],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute bottom-2/3 right-1/5 w-2.5 h-2.5 bg-primary/35 rounded-full"
              animate={{
                y: [-18, 18, -18],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 5.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute top-1/6 right-1/2 w-1 h-1 bg-primary/20 rounded-full"
              animate={{
                y: [6, -6, 6],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3.8 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />

            {/* Additional floating elements for more life */}
            <motion.div
              className="absolute top-1/5 left-1/6 w-1 h-1 bg-primary/10 rounded-full"
              animate={{
                y: [-4, 4, -4],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-primary/15 rounded-full"
              animate={{
                y: [8, -8, 8],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 4.2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
            <motion.div
              className="absolute top-3/5 right-1/3 w-1 h-1 bg-primary/12 rounded-full"
              animate={{
                y: [-7, 7, -7],
                opacity: [0.12, 0.35, 0.12],
              }}
              transition={{
                duration: 3.2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          </>
        )}
      </div>

      {/* 3) Data wave behind title (animated) */}
      <svg className="absolute left-1/2 top-[18%] -translate-x-1/2 w-[120rem] h-[22rem] opacity-70">
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0069FF" stopOpacity="0.28" />
            <stop offset="50%" stopColor="#00BFFF" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#00E0FF" stopOpacity="0.24" />
          </linearGradient>
        </defs>
        <path
          id="auren-wave"
          d="M0 140 C 150 60, 300 220, 450 120 S 750 40, 900 140 S 1050 220, 1200 120"
          fill="none"
          stroke="url(#wave)"
          strokeWidth="36"
          strokeLinecap="round"
          className="blur-[18px] animate-[waveDash_16s_linear_infinite, waveDrift_26s_ease-in-out_infinite]"
        />
      </svg>

      {/* Animated glow orbs */}
      <div className="absolute -left-24 top-10 h-[24rem] w-[24rem] rounded-full bg-[#0069FF]/25 blur-3xl orb-1" id="orb-1" />
      <div className="absolute -right-24 bottom-10 h-[20rem] w-[20rem] rounded-full bg-[#00BFFF]/25 blur-3xl orb-2" id="orb-2" />
      <div className="absolute -left-32 top-1/2 h-[16rem] w-[16rem] rounded-full bg-[#00E0FF]/20 blur-3xl orb-3" id="orb-3" />
      <div className="absolute -right-32 bottom-1/3 h-[18rem] w-[18rem] rounded-full bg-[#0069FF]/15 blur-3xl orb-4" id="orb-4" />

      {/* Additional dynamic orbs */}
      <div className="absolute -left-16 top-1/3 h-[12rem] w-[12rem] rounded-full bg-[#00BFFF]/18 blur-2xl orb-5" id="orb-5" />
      <div className="absolute -right-16 bottom-1/4 h-[14rem] w-[14rem] rounded-full bg-[#0069FF]/20 blur-2xl orb-6" id="orb-6" />

      {/* Additional floating elements */}
      {isClient && (
        <>
          <motion.div
            className="absolute top-32 left-32 w-16 h-16 border border-primary/20 rotate-45"
            animate={{
              y: [-10, 10, -10],
              rotate: [45, 50, 45],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          <motion.div
            className="absolute bottom-32 right-32 w-12 h-12 border border-primary/15 rotate-12"
            animate={{
              y: [10, -10, 10],
              rotate: [12, 18, 12],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />

          {/* More interactive floating elements */}
          <motion.div
            className="absolute top-1/2 left-16 w-14 h-14 border border-primary/12 rotate-30"
            animate={{
              y: [-15, 15, -15],
              rotate: [30, 40, 30],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          <motion.div
            className="absolute top-3/4 right-16 w-18 h-18 border border-primary/8 -rotate-15"
            animate={{
              y: [12, -12, 12],
              rotate: [-15, -25, -15],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 7 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />

          {/* Extra floating geometric elements */}
          <motion.div
            className="absolute top-1/5 left-1/5 w-10 h-10 border border-primary/10 rotate-60"
            animate={{
              y: [-8, 8, -8],
              rotate: [60, 70, 60],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          <motion.div
            className="absolute bottom-1/5 right-1/5 w-20 h-20 border border-primary/12 rotate-20"
            animate={{
              y: [20, -20, 20],
              rotate: [20, 30, 20],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          <motion.div
            className="absolute top-2/5 right-1/6 w-8 h-8 border border-primary/8 rotate-75"
            animate={{
              y: [-6, 6, -6],
              rotate: [75, 85, 75],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 4.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          <motion.div
            className="absolute bottom-3/5 left-1/6 w-12 h-12 border border-primary/15 rotate-45"
            animate={{
              y: [15, -15, 15],
              rotate: [45, 55, 45],
              opacity: [0.35, 0.6, 0.35],
            }}
            transition={{
              duration: 5.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />

          {/* Additional dynamic shapes */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-6 h-6 border border-primary/6 rotate-90"
            animate={{
              y: [-5, 5, -5],
              rotate: [90, 100, 90],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-18 h-6 border border-primary/8 rotate-30"
            animate={{
              y: [8, -8, 8],
              rotate: [30, 40, 30],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 6.5 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        </>
      )}

      {/* Interactive service icons */}
      <div className="absolute top-20 left-1/3 text-primary/10 opacity-60 animate-pulse" id="service-icon-1">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" clipRule="evenodd"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-2/3 text-primary/8 opacity-50 animate-pulse" id="service-icon-2">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c.5 0 1-.5 1.5-1.5.5 1 1 1.5 1.5 1.5.5 0 1.5-.5 2.5-.5a3 3 0 01-2.88 2.12z" clipRule="evenodd"/>
        </svg>
      </div>

      {/* ===== Custom keyframes (global) ===== */}
      <style jsx global>{`
        /* Enhanced wave animations */
        @keyframes waveDash {
          0%   { stroke-dasharray: 160 1400; stroke-dashoffset: 0; }
          25%  { stroke-dasharray: 320 1200; stroke-dashoffset: -200; }
          50%  { stroke-dasharray: 280 1280; stroke-dashoffset: -400; }
          75%  { stroke-dasharray: 200 1400; stroke-dashoffset: -600; }
          100% { stroke-dasharray: 160 1400; stroke-dashoffset: -800; }
        }

        @keyframes waveDrift {
          0%   { transform: translateX(-50%) translateY(0) rotate(0deg) scale(1); }
          20%  { transform: translateX(calc(-50% + 12px)) translateY(-8px) rotate(0.6deg) scale(1.02); }
          40%  { transform: translateX(calc(-50% - 6px)) translateY(4px) rotate(-0.3deg) scale(0.98); }
          60%  { transform: translateX(calc(-50% + 15px)) translateY(-12px) rotate(0.8deg) scale(1.03); }
          80%  { transform: translateX(calc(-50% - 8px)) translateY(6px) rotate(-0.5deg) scale(0.97); }
          100% { transform: translateX(-50%) translateY(0) rotate(0deg) scale(1); }
        }

        /* Orb animations */
        .orb-1 {
          animation: orbFloat1 18s ease-in-out infinite;
        }
        .orb-2 {
          animation: orbFloat2 24s ease-in-out infinite;
        }
        .orb-3 {
          animation: orbFloat3 20s ease-in-out infinite;
        }
        .orb-4 {
          animation: orbFloat4 26s ease-in-out infinite;
        }
        .orb-5 {
          animation: orbFloat5 16s ease-in-out infinite;
        }
        .orb-6 {
          animation: orbFloat6 22s ease-in-out infinite;
        }

        /* Orb keyframes */
        @keyframes orbFloat1 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
          16%  { transform: translate(-15px, -20px) scale(1.08) rotate(2deg); opacity: 0.9; }
          32%  { transform: translate(25px, 15px) scale(0.92) rotate(-3deg); opacity: 0.6; }
          48%  { transform: translate(-10px, -30px) scale(1.12) rotate(4deg); opacity: 0.8; }
          64%  { transform: translate(20px, -8px) scale(0.88) rotate(-2deg); opacity: 0.5; }
          80%  { transform: translate(-25px, 22px) scale(1.05) rotate(3deg); opacity: 0.9; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
        }

        @keyframes orbFloat2 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
          12%  { transform: translate(30px, -18px) scale(1.15) rotate(-4deg); opacity: 0.8; }
          24%  { transform: translate(-20px, 28px) scale(0.85) rotate(3deg); opacity: 0.6; }
          36%  { transform: translate(15px, -35px) scale(1.20) rotate(-5deg); opacity: 0.9; }
          48%  { transform: translate(-35px, 12px) scale(0.90) rotate(2deg); opacity: 0.4; }
          60%  { transform: translate(28px, -22px) scale(1.10) rotate(-3deg); opacity: 0.7; }
          72%  { transform: translate(-18px, 32px) scale(0.95) rotate(4deg); opacity: 0.8; }
          84%  { transform: translate(22px, -15px) scale(1.05) rotate(-2deg); opacity: 0.5; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
        }

        @keyframes orbFloat3 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
          18%  { transform: translate(-22px, 25px) scale(1.12) rotate(5deg); opacity: 0.9; }
          36%  { transform: translate(35px, -20px) scale(0.88) rotate(-4deg); opacity: 0.5; }
          54%  { transform: translate(-15px, -28px) scale(1.18) rotate(6deg); opacity: 0.8; }
          72%  { transform: translate(25px, 18px) scale(0.82) rotate(-3deg); opacity: 0.4; }
          90%  { transform: translate(-30px, 35px) scale(1.08) rotate(4deg); opacity: 0.7; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
        }

        @keyframes orbFloat4 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.5; }
          14%  { transform: translate(28px, -25px) scale(1.25) rotate(-6deg); opacity: 0.8; }
          28%  { transform: translate(-25px, 35px) scale(0.75) rotate(5deg); opacity: 0.6; }
          42%  { transform: translate(18px, -32px) scale(1.30) rotate(-7deg); opacity: 0.9; }
          56%  { transform: translate(-32px, 15px) scale(0.80) rotate(3deg); opacity: 0.3; }
          70%  { transform: translate(35px, -18px) scale(1.15) rotate(-4deg); opacity: 0.7; }
          84%  { transform: translate(-20px, 30px) scale(0.90) rotate(5deg); opacity: 0.8; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.5; }
        }

        @keyframes orbFloat5 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
          20%  { transform: translate(-12px, 18px) scale(1.08) rotate(3deg); opacity: 0.8; }
          40%  { transform: translate(22px, -15px) scale(0.92) rotate(-2deg); opacity: 0.5; }
          60%  { transform: translate(-18px, -22px) scale(1.15) rotate(4deg); opacity: 0.9; }
          80%  { transform: translate(15px, 25px) scale(0.85) rotate(-3deg); opacity: 0.4; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.6; }
        }

        @keyframes orbFloat6 {
          0%   { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
          15%  { transform: translate(25px, -20px) scale(1.12) rotate(-5deg); opacity: 0.9; }
          30%  { transform: translate(-20px, 28px) scale(0.88) rotate(4deg); opacity: 0.6; }
          45%  { transform: translate(18px, -25px) scale(1.18) rotate(-6deg); opacity: 0.8; }
          60%  { transform: translate(-28px, 12px) scale(0.82) rotate(3deg); opacity: 0.4; }
          75%  { transform: translate(22px, -18px) scale(1.08) rotate(-4deg); opacity: 0.7; }
          90%  { transform: translate(-15px, 32px) scale(0.95) rotate(5deg); opacity: 0.8; }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.7; }
        }

        /* Enhanced grid animation */
        @keyframes gridMove {
          0%   { background-position: 0px 0px; opacity: 0.1; }
          25%  { background-position: 20px 20px; opacity: 0.15; }
          50%  { background-position: 40px 40px; opacity: 0.1; }
          75%  { background-position: 60px 60px; opacity: 0.12; }
          100% { background-position: 80px 80px; opacity: 0.1; }
        }
      `}</style>
    </div>
  )
}
