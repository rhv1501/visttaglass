"use client";

import { motion } from "framer-motion";

const partners = [
  "Saint-Gobain",
  "Dorma",
  "Ozone",
  "Schüco",
  "Modiguard",
  "Hettich",
  "Hafele",
  "Glaverbel",
  "Asahi",
  "Kinlong",
];

export default function PartnersMarquee() {
  return (
    <section className="w-full py-24 bg-brand-pastel overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <span className="inline-block rounded-full bg-brand-navy/5 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy">
          Powered by Industry Leaders
        </span>
      </div>
      
      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex py-4">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-pastel to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-pastel to-transparent z-10" />

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="px-12 md:px-24 flex items-center justify-center text-brand-navy/10 text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-widest hover:text-brand-cyan transition-colors duration-500"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
