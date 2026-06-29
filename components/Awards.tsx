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
    <section className="w-full py-32 bg-brand-pastel">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">
              Recognition
            </span>
            <h2 className="text-[clamp(3.5rem,7vw,6.5rem)] font-heading font-extrabold text-brand-navy leading-[1.1] tracking-tight">
              Award-Winning <br /> <span className="text-brand-cyan">Execution.</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-brand-navy/10">
          {awards.map((award, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-16 border-b border-brand-navy/10 group hover:bg-brand-teal/5 transition-colors"
            >
              <div className="text-brand-gold text-lg font-mono mb-4 md:mb-0 md:w-1/4">
                {award.year}
              </div>
              <div className="md:w-2/4">
                <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-brand-navy group-hover:text-brand-cyan transition-colors tracking-tight">
                  {award.title}
                </h3>
              </div>
              <div className="md:w-1/4 text-left md:text-right text-brand-navy/50 uppercase tracking-[0.2em] text-xs mt-4 md:mt-0 font-bold group-hover:text-brand-gold transition-colors">
                {award.org}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
