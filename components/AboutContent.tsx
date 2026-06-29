"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    title: "Absolute Precision",
    desc: "Every panel is measured to the millimeter. We employ advanced laser technology to guarantee perfect fitment, eliminating human error from the architectural equation.",
    num: "01"
  },
  {
    title: "Material Integrity",
    desc: "We source only the highest grade architectural glass and structural hardware. No compromises, no inferior substitutes. Built to withstand time and elements.",
    num: "02"
  },
  {
    title: "Acoustic Mastery",
    desc: "Our partition systems are engineered for flawless sound isolation. We create pockets of absolute silence within bustling corporate and commercial environments.",
    num: "03"
  },
  {
    title: "On-Time Delivery",
    desc: "We understand that our installations are on the critical path of your project. Our supply chain and execution teams operate with military precision to hit every deadline.",
    num: "04"
  }
];

const processSteps = [
  {
    title: "Consultation & Engineering",
    desc: "We collaborate closely with architects to understand the structural and aesthetic requirements, mapping out load calculations and material specifications."
  },
  {
    title: "Laser Measurement",
    desc: "Our technicians use advanced 3D laser mapping on-site to capture exact dimensions, ensuring our custom fabrications fit flawlessly on the first attempt."
  },
  {
    title: "Custom Fabrication",
    desc: "The glass is CNC-cut, tempered, and polished in state-of-the-art facilities. Edges are refined, and acoustic seals are seamlessly integrated into the hardware."
  },
  {
    title: "Flawless Installation",
    desc: "Our highly trained in-house execution team installs the systems with meticulous care, leaving the site immaculate and the structure breathtaking."
  }
];

export default function AboutContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main ref={containerRef} className="w-full pt-40 md:pt-56 pb-24 bg-brand-pastel min-h-screen overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-4xl mb-24 relative z-10">
          <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">
            Our Story
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-extrabold text-brand-navy leading-[1.05] tracking-tight"
          >
            Engineering <span className="text-brand-cyan">Light.</span> <br />
            <span className="text-brand-navy/40">Defining Space.</span>
          </motion.h1>
        </div>

        {/* Legacy Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32 md:mb-48">
          <div className="relative group overflow-hidden rounded-[2rem] bg-brand-pastel p-2 ring-1 ring-brand-navy/5 shadow-sm block hover:ring-brand-cyan/50 transition-all duration-700">
            <div className="relative w-full h-full block rounded-[1.5rem] overflow-hidden bg-brand-navy/5 aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
                alt="Vistta Glass Studio" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.32,0.72,0,1] group-hover:scale-105 opacity-90 mix-blend-multiply group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
            </div>
          </div>
          <div className="prose prose-lg text-brand-navy/70 font-light mt-8 md:mt-16">
            <h2 className="text-3xl font-heading font-extrabold text-brand-navy mb-6 tracking-tight">A Legacy of <span className="text-brand-gold">Precision</span></h2>
            <p>
              Vistta Glass is a leading interior and architectural glass solutions provider in Chennai. We specialize in supply and installation of aluminium windows, uPVC windows, structural glass, shower cubicles, acoustic glass partitions, and bespoke installations for <strong className="text-brand-navy font-bold">premium residential and commercial projects.</strong>
            </p>
            <p className="mt-4">
              We work closely with architects, interior designers, and builders to deliver high-quality, precision-finished glass and window solutions. From site measurement to fabrication and installation, we ensure professional service and absolute reliability.
            </p>
            
            <div className="mt-16 grid grid-cols-2 gap-8 pt-12 border-t border-brand-navy/10">
              <div>
                <span className="block text-4xl md:text-5xl font-heading font-extrabold text-brand-cyan mb-2 tracking-tighter">15+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60 font-bold">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-heading font-extrabold text-brand-cyan mb-2 tracking-tighter">500+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/60 font-bold">Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="mb-32 md:mb-48">
          <div className="mb-16">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-6">
              Our Pillars
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-extrabold text-brand-navy leading-tight tracking-tight max-w-2xl">
              The principles that govern our craftsmanship.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 md:p-12 rounded-[2rem] border border-brand-navy/5 shadow-sm hover:shadow-xl hover:border-brand-cyan/30 transition-all duration-500 group">
                <span className="text-brand-gold font-mono text-sm mb-6 block opacity-50 group-hover:opacity-100 transition-opacity">{pillar.num}</span>
                <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4 group-hover:text-brand-cyan transition-colors">{pillar.title}</h3>
                <p className="text-brand-navy/60 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Vistta Process */}
        <div className="mb-32 md:mb-48 relative">
          <div className="mb-16 text-center">
            <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-6">
              Execution
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-heading font-extrabold text-brand-navy leading-tight tracking-tight">
              The Vistta Process
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-12 py-12 border-b border-brand-navy/10 relative group"
              >
                <div className="md:w-1/3 shrink-0">
                  <div className="text-brand-cyan font-mono text-sm tracking-widest mb-2 opacity-50">PHASE 0{i + 1}</div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy tracking-tight">{step.title}</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-brand-navy/70 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-[1px] bg-brand-cyan group-hover:w-full transition-all duration-1000 ease-[0.32,0.72,0,1]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Craftsmanship Mosaic */}
        <div className="mb-32 md:mb-48">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[80vh] md:h-[600px]">
            <motion.div style={{ y: y1 }} className="md:col-span-7 rounded-[2rem] overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply grayscale-[0.2]" alt="Architectural glass detail" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="md:col-span-5 rounded-[2rem] overflow-hidden relative bg-brand-navy flex items-center justify-center p-12">
              <div className="absolute inset-0 w-full h-full bg-brand-cyan/20 blur-[80px] pointer-events-none mix-blend-screen" />
              <div className="relative z-10">
                <h3 className="text-3xl font-heading font-extrabold text-white mb-6">Unseen Details.</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  True craftsmanship exists in the margins. It’s the microscopic polish on a raw glass edge, the silent glide of a heavily weighted door, and the total absence of visual clutter in a structural seal. We engineer the invisible.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-brand-navy text-brand-white p-12 md:p-32 rounded-[2rem] overflow-hidden relative shadow-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-brand-cyan rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-screen" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">
              Our Philosophy
            </span>
            <p className="text-[clamp(1.5rem,3vw,2.5rem)] leading-snug text-white font-heading font-medium tracking-tight">
              "We believe that the best architectural glass should feel invisible yet deeply impactful. It should reflect its environment, invite light, and stand the test of time with <span className="text-brand-cyan">absolute integrity.</span>"
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
