"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="w-full py-32 md:py-48 bg-brand-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          <div className="md:w-1/3">
            <span className="text-brand-silver text-xs font-mono uppercase tracking-[0.3em] mb-6 block">
              The Manifesto
            </span>
            <div className="w-12 h-[1px] bg-brand-navy mb-8" />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy leading-tight">
              Leading interior and architectural glass solutions provider in Chennai.
            </h2>
          </div>

          <div className="md:w-2/3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-3xl font-light text-brand-navy/80 leading-relaxed mb-12"
            >
              We specialize in the supply and installation of aluminium windows, uPVC windows, glass doors, toughened glass, shower cubicles, glass partitions, office cubicles, railings, mirrors, and customized glass works for residential and commercial projects.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-brand-navy/60 leading-relaxed max-w-2xl"
            >
              We work closely with architects, interior designers, and builders to deliver high-quality, precision-finished solutions. From site measurement to fabrication and installation, we ensure professional service and timely completion. We undertake projects across Tamil Nadu and supply pan India.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
