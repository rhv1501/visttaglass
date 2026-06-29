"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section className="w-full py-32 md:py-48 bg-brand-navy relative overflow-hidden flex items-center justify-center">
      {/* Background abstract glass parallax elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-teal/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ x: ["5%", "-5%", "5%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-[clamp(4rem,10vw,12rem)] font-heading font-extrabold text-white tracking-tighter leading-[0.9] mb-16">
            Let&apos;s Build <br /> Something <span className="text-brand-silver">Transparent.</span>
          </h2>
          
          <MagneticButton strength={0.3}>
            <Link 
              href="/contact"
              className="inline-flex group relative px-12 py-6 bg-white text-brand-navy text-sm font-bold tracking-widest uppercase items-center justify-center gap-4 overflow-hidden rounded-sm"
            >
              <div className="absolute inset-0 w-full h-full bg-brand-teal transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Schedule Site Visit</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
