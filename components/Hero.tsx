"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#0A1118]"
    >
      {/* Cinematic Full-Bleed Background with Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
          alt="Architectural Glass Installation"
          className="w-full h-full object-cover mix-blend-luminosity opacity-50 contrast-[1.1] grayscale"
        />
        {/* Advanced Radial Wash for perfect text contrast (No cheap solid overlays) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,17,24,0.4)_0%,rgba(10,17,24,0.9)_100%)] z-10" />
      </motion.div>

      {/* 3D Floating Glass Planes (Restrained for mobile perf, visible mainly on desktop) */}
      <div className="absolute inset-0 z-10 perspective-[1500px] pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{
            rotateY: [0, 8, 0],
            rotateX: [0, 4, 0],
            y: [-15, 15, -15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="hidden md:block absolute w-[40vw] h-[60vh] rounded-sm transform-gpu opacity-[0.03] backdrop-blur-3xl border border-white/10"
          style={{ transformStyle: "preserve-3d", background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)" }}
        />
      </div>

      {/* Cinematic Center Content */}
      <motion.div 
        style={{ opacity: opacityText, scale: scaleText }}
        className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center pt-24 pb-12"
      >
        {/* 
          Ultra-wide container fix to prevent 6-line wrapping.
          Using a flexible clamp for mobile scale without breaking boundaries. 
        */}
        <div className="w-full max-w-[95vw] md:max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[clamp(2.5rem,7vw,7rem)] font-heading font-extrabold text-white leading-[1.05] tracking-tighter mb-8"
          >
            Engineering Light. <br className="hidden sm:block" />
            <span className="text-white/60 font-light">Defining</span>
            <span 
              className="inline-block w-[clamp(4rem,10vw,8rem)] h-[clamp(1.8rem,5vw,4.5rem)] rounded-full mx-2 md:mx-4 align-middle bg-cover bg-center bg-no-repeat shadow-inner"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop")' }}
            />
            Space.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="max-w-[85vw] md:max-w-2xl mx-auto"
        >
          <p className="text-base md:text-xl text-white/70 mb-12 leading-relaxed font-light">
            Leading interior and architectural glass solutions provider in Chennai. We specialize in precision-finished aluminium windows, uPVC systems, structural glass, and bespoke installations for residential and commercial projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto px-6 sm:px-0"
        >
          <MagneticButton strength={0.2} className="w-full sm:w-auto">
            <Link 
              href="/contact"
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-[#0A1118] text-xs md:text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 overflow-hidden rounded-full w-full sm:w-auto transition-transform active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-brand-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Technical Inquiry</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
            </Link>
          </MagneticButton>
          
          <MagneticButton strength={0.2} className="w-full sm:w-auto">
            <Link 
              href="/projects"
              className="group relative px-8 md:px-10 py-4 md:py-5 border border-white/20 text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center hover:bg-white/10 transition-all duration-500 ease-[0.16,1,0.3,1] rounded-full backdrop-blur-md w-full sm:w-auto active:scale-95"
            >
              Selected Work
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
