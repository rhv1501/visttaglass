"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Commercial", "Residential", "Retail", "Hospitality"];

const projectsData = [
  { id: 1, title: "The Marina Pavilion", category: "Commercial", location: "ECR, Chennai", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Aura Luxury Villas", category: "Residential", location: "Boat Club", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
  { id: 3, title: "Zenith Tech Park", category: "Commercial", location: "OMR, Chennai", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" },
  { id: 4, title: "Velvet Boutique", category: "Retail", location: "Phoenix Marketcity", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "Oceanic Resort", category: "Hospitality", location: "Mahabalipuram", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop" },
  { id: 6, title: "Skyline Penthouses", category: "Residential", location: "Adyar", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <>
      <main className="w-full pt-40 md:pt-56 pb-24 bg-brand-pastel min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-16 px-2">
            <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">
              Portfolio
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-extrabold text-brand-navy leading-[0.95] tracking-tight">
              Selected <span className="text-brand-cyan">Works</span>
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-brand-navy/10 pb-6 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-brand-cyan text-brand-navy shadow-lg shadow-brand-cyan/20" 
                    : "bg-brand-navy/5 text-brand-navy hover:bg-brand-gold/10 hover:text-brand-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative rounded-[2rem] bg-brand-pastelCard p-2 ring-1 ring-brand-navy/5 shadow-sm block aspect-[4/5] hover:ring-brand-cyan/50 transition-all duration-700"
                >
                  <div className="relative w-full h-full block rounded-[1.5rem] overflow-hidden bg-brand-navy/5">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.32,0.72,0,1] group-hover:scale-105 opacity-90 mix-blend-multiply group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:from-brand-teal/90 transition-all duration-500" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.32,0.72,0,1]">
                      <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-white mb-1 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-white/80 font-mono text-xs">{project.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
