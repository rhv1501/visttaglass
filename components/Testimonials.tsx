"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="w-full py-32 md:py-48 bg-[#0A1118] text-white overflow-hidden relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-teal rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-heading font-light leading-[1.2] tracking-tight mb-16 text-center text-white/90">
              "Vistta brings a level of precision that is rare. Their structural glass installations elevated our commercial project from standard to landmark."
            </h2>
            
            <div className="flex flex-col items-center justify-center border-t border-white/10 pt-10 w-48 mx-auto">
              <span className="text-white font-bold tracking-widest uppercase text-sm mb-2">Ar. Karthik Rajan</span>
              <span className="text-brand-silver text-xs font-mono tracking-widest uppercase">Studio KR</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
