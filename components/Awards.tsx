"use client";

import { motion } from "framer-motion";

const awards = [
  { year: "2025", title: "Excellence in Structural Glazing", org: "Architectural Digest India" },
  { year: "2024", title: "Best Commercial Facade Execution", org: "Indian Institute of Architects" },
  { year: "2023", title: "Innovation in Acoustic Glass", org: "Design & Build Awards" },
  { year: "2021", title: "Premium Residential Contracting", org: "South India Real Estate" }
];

export default function Awards() {
  return (
    <section className="w-full py-32 bg-[#0A1118] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div className="max-w-2xl">
            <span className="text-white/40 text-xs font-mono uppercase tracking-[0.3em] mb-6 block">
              Recognition
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold leading-[1.1] tracking-tighter">
              Award-Winning <br /> Execution.
            </h2>
          </div>
        </div>

        <div className="border-t border-white/10">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-white/10 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-brand-teal text-lg font-mono mb-4 md:mb-0 md:w-1/4">
                {award.year}
              </div>
              <div className="md:w-2/4">
                <h3 className="text-2xl md:text-4xl font-heading font-bold group-hover:text-brand-cyan transition-colors">
                  {award.title}
                </h3>
              </div>
              <div className="md:w-1/4 text-left md:text-right text-white/50 uppercase tracking-widest text-xs mt-4 md:mt-0 font-bold">
                {award.org}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
