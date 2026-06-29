"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Vistta brings a level of precision that is rare. Their structural glass installations elevated our commercial project from standard to landmark.",
    author: "Ar. Karthik Rajan",
    role: "Principal Architect",
    firm: "Studio KR"
  },
  {
    quote: "We demand absolute perfection in our high-end residential builds. Vistta consistently delivers with impeccable material quality and flawless execution.",
    author: "Priya Natarajan",
    role: "Lead Designer",
    firm: "Aura Interiors"
  },
  {
    quote: "The acoustic performance of their partition systems completely transformed our corporate headquarters. A highly professional and visionary team.",
    author: "Sanjay Menon",
    role: "Project Director",
    firm: "Zenith Tech Parks"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(10px)",
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -60 : 60,
      opacity: 0,
      filter: "blur(10px)",
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    })
  };

  return (
    <section id="testimonials" className="w-full py-24 md:py-48 bg-brand-navy text-white relative overflow-hidden flex flex-col justify-center min-h-screen">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="flex justify-center mb-12 md:mb-24">
          <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">
            Client Voices
          </span>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[55vh] md:h-[50vh] flex flex-col items-center justify-center w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col items-center justify-center text-center w-full px-4"
            >
              <h2 className="text-[clamp(1.5rem,5vw,5rem)] font-heading font-medium leading-[1.3] md:leading-[1.1] tracking-tight max-w-6xl mx-auto mb-8 md:mb-12 text-white">
                "{testimonials[currentIndex].quote}"
              </h2>
              
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-bold tracking-[0.15em] uppercase text-xs md:text-sm mb-2">
                  {testimonials[currentIndex].author}
                </span>
                <span className="text-brand-cyan text-[9px] md:text-xs font-mono tracking-widest uppercase">
                  {testimonials[currentIndex].role} — {testimonials[currentIndex].firm}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Navigation */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mt-12 md:mt-24">
          <button 
            onClick={slidePrev}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-500 group shrink-0"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white/60 group-hover:text-white transition-colors" />
          </button>
          
          {/* Progress Indicators */}
          <div className="flex gap-2 md:gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className="group py-2 px-1 md:px-0"
              >
                <div 
                  className={`h-[2px] transition-all duration-500 rounded-full ${
                    idx === currentIndex 
                      ? "w-6 md:w-8 bg-brand-gold" 
                      : "w-3 md:w-4 bg-white/20 group-hover:bg-white/50"
                  }`} 
                />
              </button>
            ))}
          </div>

          <button 
            onClick={slideNext}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-500 group shrink-0"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/60 group-hover:text-white transition-colors" />
          </button>
        </div>

      </div>
    </section>
  );
}
