"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="w-full py-32 md:py-48 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          
          <div className="md:w-1/3">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              The Manifesto
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-[1.1] tracking-tight">
              Chennai&apos;s premier partner for visionary interior and architectural glass solutions.
            </h2>
          </div>

          <div className="md:w-2/3 mt-4">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-medium text-white leading-snug mb-12"
            >
              We don&apos;t just install glass; we engineer light, space, and structure. Our expertise spans high-performance aluminium and uPVC windows, toughened glass doors, elegant shower cubicles, seamless office partitions, structural railings, bespoke mirrors, and customized glass works—meticulously crafted for <span className="text-brand-gold">premium residential and commercial projects.</span>
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-lg md:text-xl text-brand-silver leading-relaxed max-w-2xl font-light"
            >
              Collaborating with leading architects, interior designers, and builders, we transform ambitious blueprints into flawless reality. We take full ownership of the process—from exact site measurements to precision fabrication and expert installation—ensuring zero compromises on quality. Based in Chennai, executing across Tamil Nadu, and supplying Pan India.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
