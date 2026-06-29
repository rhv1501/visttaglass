"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Marina Pavilion",
    category: "Commercial Architecture",
    location: "ECR, Chennai",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Zenith Tech Park",
    category: "Acoustic Partitions",
    location: "OMR, Chennai",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Aura Luxury Villas",
    category: "Residential Glazing",
    location: "Boat Club",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Velocity Tower",
    category: "Structural Facades",
    location: "Guindy",
    image: "https://images.unsplash.com/photo-1545083036-b179caebecab?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function FeaturedProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Updated to -80% to ensure the 5th item (the CTA) comes fully into view
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="projects" className="w-full bg-brand-pastel">
      
      {/* Header content - Scrolls Normally */}
      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-6">
              Selected Work
            </span>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-heading font-extrabold text-brand-navy leading-[1.05] tracking-tighter">
              Transparent <br /> <span className="text-brand-gold">Brilliance.</span>
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="mt-8 md:mt-0 flex items-center gap-3 text-brand-navy uppercase tracking-[0.1em] text-xs font-bold group"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand-navy after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-500 pb-1">
              View Complete Portfolio
            </span>
            <div className="w-8 h-8 rounded-full border border-brand-navy/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-colors duration-500">
              <ArrowRight className="w-3 h-3 group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery - Pins and scrolls */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[55vh] md:h-[65vh] overflow-hidden rounded-[2rem] bg-brand-pastelCard p-2 ring-1 ring-brand-navy/5 shadow-sm block hover:ring-brand-cyan/50 transition-all duration-700 shrink-0"
              >
                <div className="relative w-full h-full block rounded-[1.5rem] overflow-hidden bg-brand-navy/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply group-hover:scale-105 group-hover:opacity-100 transition-all duration-[1.2s] ease-[0.32,0.72,0,1] grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-80 group-hover:opacity-90 group-hover:from-brand-teal/90 transition-all duration-700" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.32,0.72,0,1]">
                    <div className="flex flex-col">
                      <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                        0{index + 1} — {project.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-2 group-hover:text-brand-cyan transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-white/60 font-mono text-sm tracking-wide">{project.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* End of Gallery CTA */}
            <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[55vh] md:h-[65vh] flex items-center justify-center shrink-0 pr-6 md:pr-12">
              <Link href="/projects" className="group flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-full border border-brand-navy/10 flex items-center justify-center bg-brand-navy/5 group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-colors duration-500">
                  <ArrowRight className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy group-hover:text-brand-cyan transition-colors duration-500">
                  View Portfolio
                </h3>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
