"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { id: "01", title: "Aluminium Systems", link: "/aluminium-windows-chennai", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  { id: "02", title: "Structural Glass", link: "/toughened-glass-chennai", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: "03", title: "Acoustic Partitions", link: "/glass-partitions-chennai", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" },
  { id: "04", title: "uPVC Engineering", link: "/upvc-windows-chennai", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
];

export default function ServicesShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full relative min-h-screen bg-brand-pastel py-32 md:py-48 flex flex-col justify-center overflow-hidden transition-colors duration-700">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={services[hoveredIndex].img} 
                alt="Service Background" 
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-pastel/80 via-transparent to-brand-pastel/80" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <div className="max-w-2xl transition-colors duration-500">
            <span className={`inline-block rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 transition-colors duration-500 ${hoveredIndex !== null ? 'bg-brand-cyan/20 text-brand-cyan' : 'bg-brand-gold/10 text-brand-gold'}`}>
              Capabilities
            </span>
            <h2 className={`text-[clamp(2.5rem,6vw,5rem)] font-heading font-extrabold leading-[1.05] tracking-tight transition-colors duration-500 ${hoveredIndex !== null ? 'text-white' : 'text-brand-navy'}`}>
              Engineering Light <br /> &amp; <span className={hoveredIndex !== null ? 'text-brand-gold' : 'text-brand-cyan'}>Space.</span>
            </h2>
          </div>
          <Link href="/services" className={`mt-8 md:mt-0 flex items-center gap-3 uppercase tracking-[0.1em] text-xs font-bold group transition-colors duration-500 ${hoveredIndex !== null ? 'text-white' : 'text-brand-navy'}`}>
            <span className={`relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-500 pb-1 ${hoveredIndex !== null ? 'after:bg-white' : 'after:bg-brand-navy'}`}>
              Explore All Services
            </span>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-500 ${hoveredIndex !== null ? 'border-white/20 group-hover:bg-brand-cyan group-hover:border-brand-cyan' : 'border-brand-navy/20 group-hover:bg-brand-cyan group-hover:border-brand-cyan'}`}>
              <ArrowRight className="w-3 h-3 group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>

        {/* Interactive Typographic List */}
        <div className="w-full flex flex-col border-t border-brand-navy/10 relative z-20">
          {services.map((service, index) => (
            <Link 
              key={service.id} 
              href={service.link}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-brand-navy/10 relative transition-colors"
            >
              {/* Dynamic Line on Hover */}
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-brand-cyan group-hover:w-full transition-all duration-700 ease-[0.32,0.72,0,1]" />

              <div className="flex items-center gap-8 md:gap-16">
                <span className={`text-sm font-mono transition-colors duration-500 ${hoveredIndex !== null && hoveredIndex !== index ? 'text-white/30' : hoveredIndex === index ? 'text-brand-cyan' : 'text-brand-navy/40'}`}>
                  {service.id}
                </span>
                <h3 className={`text-[clamp(2rem,4vw,5rem)] font-heading font-bold tracking-tight transition-all duration-500 transform group-hover:translate-x-4 ${hoveredIndex !== null && hoveredIndex !== index ? 'text-white/30' : hoveredIndex === index ? 'text-white' : 'text-brand-navy group-hover:text-brand-navy'}`}>
                  {service.title}
                </h3>
              </div>
              
              <div className="mt-6 md:mt-0 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/30">
                <ArrowRight className="w-6 h-6 text-brand-cyan -rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
