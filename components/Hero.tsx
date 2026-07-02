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
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-transparent pt-12 md:pt-0"
    >
      {/* Soft Pastel Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 w-full h-[130%] -top-[15%] z-0"
        >
          <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-cyan/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-brand-gold/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 mix-blend-multiply" />
        </motion.div>
      </div>

      {/* Fluted Glass Layer (Nothing OS Style) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 backdrop-blur-[30px] bg-white/5 border-b border-white/10">
        {/* Fluted Vertical Lines (Ribbed Glass Effect) */}
        <div 
          className="absolute inset-0 w-full h-full opacity-80"
          style={{ 
            backgroundImage: `linear-gradient(
              90deg, 
              rgba(255, 255, 255, 0.08) 0%, 
              transparent 15%, 
              rgba(0, 0, 0, 0.06) 85%, 
              rgba(255, 255, 255, 0.12) 100%
            )`,
            backgroundSize: '32px 100%'
          }}
        />
      </div>

      {/* Cinematic Center Content */}
      <motion.div 
        style={{ opacity: opacityText, scale: scaleText }}
        className="container relative z-20 mx-auto px-4 md:px-12 flex flex-col items-center text-center mt-auto mb-auto"
      >
        <div className="w-full max-w-[95vw] md:max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            className="text-[clamp(2.8rem,9vw,6.5rem)] font-heading font-extrabold text-brand-navy leading-[1.05] tracking-tighter mb-8"
          >
            <span className="block md:inline">Precision</span>{" "}
            <span className="text-brand-cyan block md:inline">Glass.</span>{" "}
            <br className="hidden md:block" />
            <span className="text-brand-navy/60 font-light block md:inline mt-2 md:mt-0">Defining</span>{" "}
            <span 
              className="inline-block w-[clamp(5rem,16vw,9rem)] h-[clamp(2.5rem,8vw,4.5rem)] rounded-full mx-2 md:mx-4 align-middle bg-cover bg-center bg-no-repeat shadow-lg shadow-brand-gold/20 ring-[1px] ring-brand-gold/30 mt-2 md:mt-0"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600&auto=format&fit=crop")' }}
            />
            <span className="inline-block mt-2 md:mt-0">Space.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
          className="max-w-[90vw] md:max-w-2xl mx-auto"
        >
          <p className="text-[15px] md:text-xl text-brand-navy/70 mb-12 md:mb-14 leading-relaxed font-light px-2 md:px-0">
            Leading interior and architectural glass solutions provider in Chennai. We specialize in precision-finished aluminium windows, uPVC systems, structural glass, and bespoke installations for <span className="font-bold text-brand-navy">premium spaces.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
        >
          <MagneticButton strength={0.2}>
            <Link 
              href="/contact"
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-brand-navy text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-3 overflow-hidden rounded-full shadow-xl shadow-brand-navy/20 hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all active:scale-95 border border-transparent w-[260px] sm:w-auto"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-teal to-brand-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.32,0.72,0,1]" />
              <span className="relative z-10 font-bold transition-colors duration-300">Start Project</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-navy/20 transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-[1px] text-white transition-all duration-300" />
              </div>
            </Link>
          </MagneticButton>
          
          <MagneticButton strength={0.2}>
            <Link 
              href="/projects"
              className="group relative px-8 md:px-10 py-4 md:py-5 border border-brand-navy/20 text-brand-navy text-xs md:text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-500 ease-[0.32,0.72,0,1] rounded-full backdrop-blur-md active:scale-95 w-[260px] sm:w-auto"
            >
              Selected Work
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
