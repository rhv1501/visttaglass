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
  const [activeImg, setActiveImg] = useState(services[0].img);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="w-full relative min-h-screen bg-[#0A1118] overflow-hidden py-32 flex flex-col justify-center">
      {/* Fixed Full-Bleed Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImg}
            src={activeImg}
            alt="Service showcase"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-transparent to-[#0A1118]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
            <div>
              <span className="text-white/40 text-sm uppercase tracking-[0.3em] mb-4 block font-bold">Capabilities</span>
              <h2 className="text-3xl md:text-5xl font-heading font-light text-white max-w-2xl">
                Engineering Light &amp; Space.
              </h2>
            </div>
            <Link href="/services" className="mt-8 md:mt-0 flex items-center gap-3 text-white uppercase tracking-wider text-sm font-bold group">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-300 pb-1">
                Explore All Services
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Immersive Typographic List */}
          <div className="flex flex-col w-full border-t border-white/10">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={service.link}
                onMouseEnter={() => {
                  setActiveImg(service.img);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative w-full py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className={`text-sm md:text-lg font-mono transition-colors duration-500 ${hoveredIndex === index ? "text-brand-cyan" : "text-white/30"}`}>
                    {service.id}
                  </span>
                  <motion.h3 
                    className={`text-5xl md:text-7xl lg:text-[7rem] font-heading font-extrabold leading-none tracking-tighter transition-all duration-700 ease-[0.16,1,0.3,1] ${
                      hoveredIndex !== null && hoveredIndex !== index ? "text-white/10" : "text-white"
                    }`}
                  >
                    {service.title}
                  </motion.h3>
                </div>
                
                <div className="hidden md:flex overflow-hidden">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: hoveredIndex === index ? 0 : -20, opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-4 text-brand-cyan font-bold tracking-widest uppercase text-sm"
                  >
                    <span>View Project Spec</span>
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
