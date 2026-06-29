"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Marina Pavilion",
    category: "Commercial Architecture",
    location: "ECR, Chennai",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: 2,
    title: "Zenith Tech Park",
    category: "Acoustic Glass Partitions",
    location: "OMR, Chennai",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 3,
    title: "Aura Luxury Villas",
    category: "Residential Glazing",
    location: "Boat Club",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: 4,
    title: "Velocity Tower",
    category: "Structural Facades",
    location: "Guindy",
    image: "https://images.unsplash.com/photo-1545083036-b179caebecab?q=80&w=2070&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-3",
    rowSpan: "row-span-2",
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="w-full py-32 md:py-48 bg-brand-white">
      <div className="container mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-4xl">
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-heading font-extrabold text-brand-navy leading-[1.05] tracking-tighter">
              Transparent <br /> Brilliance.
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="mt-8 md:mt-0 group flex items-center gap-4 text-brand-navy font-bold tracking-widest uppercase text-sm"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-brand-navy after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-500 pb-1">
              View Complete Portfolio
            </span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </div>

      {/* Gapless Bento Grid */}
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] md:auto-rows-[400px] grid-flow-dense gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-sm ${project.colSpan} ${project.rowSpan}`}
            >
              <div className="absolute inset-0 w-full h-full bg-[#0A1118]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[0.16,1,0.3,1]"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/90 via-[#0A1118]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                <div className="flex flex-col">
                  <span className="text-brand-cyan text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-mono text-sm tracking-wide">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
