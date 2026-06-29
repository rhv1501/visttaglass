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
    <section className="w-full py-24 bg-[#0A1118] border-y border-white/5 overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
         <span className="text-brand-silver text-xs font-mono uppercase tracking-[0.3em]">
          Powered by Industry Leaders
        </span>
      </div>
      
      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1118] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A1118] to-transparent z-10" />

        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="px-12 md:px-24 flex items-center justify-center text-white/30 text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest hover:text-white transition-colors duration-500"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
