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

      <main className="w-full pt-32 pb-24 bg-brand-white min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-4xl mb-16">
            <span className="text-brand-silver text-sm uppercase tracking-[0.2em] mb-4 block">Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-navy leading-tight">
              Selected Works
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16 border-b border-brand-grey/30 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-brand-navy text-white" 
                    : "bg-brand-offwhite text-brand-navy hover:bg-brand-grey/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-brand-cyan text-sm uppercase tracking-wider mb-2 block font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">{project.location}</p>
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
