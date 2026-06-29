"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    num: "01",
    title: "Uncompromising Accuracy",
    desc: "Laser-measured tolerances down to the millimeter. We do not guess. We engineer with absolute certainty."
  },
  {
    num: "02",
    title: "End-to-End Reliability",
    desc: "From global material sourcing to final structural installation. We maintain complete control over the entire process."
  },
  {
    num: "03",
    title: "Timely Delivery",
    desc: "Strict adherence to your architectural timeline. Predictability you can build your entire project around."
  },
  {
    num: "04",
    title: "Premium Finish",
    desc: "Immaculate polished edges, invisible acoustic seals, and flawless execution that redefines luxury spaces."
  }
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="about" className="w-full py-32 md:py-48 bg-brand-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Minimalist Header */}
        <div className="mb-32">
          <span className="text-brand-silver text-xs font-mono uppercase tracking-[0.3em] mb-8 block">
            Why Architects Trust Us
          </span>
          <h2 className="text-[clamp(3rem,6vw,7rem)] font-heading font-light text-brand-navy leading-[1.1] tracking-tighter max-w-5xl">
            We build spaces that invite light, command attention, and stand the test of time.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Staggered Statistics */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-16 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-navy mb-4">
                Tamil Nadu Coverage
              </h3>
              <p className="text-brand-navy/60 leading-relaxed max-w-sm mb-16">
                Delivering architectural perfection across Chennai, Coimbatore, Madurai, and beyond. We bring world-class engineering to the South Indian coastline.
              </p>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-[2px] h-12 bg-brand-teal" />
                  <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-navy leading-none tracking-tighter">
                    200+
                  </span>
                  <span className="text-brand-silver text-xs font-mono uppercase tracking-[0.2em] mt-2 block">
                    Projects Delivered
                  </span>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-[2px] h-12 bg-brand-navy/10" />
                  <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-navy leading-none tracking-tighter">
                    100%
                  </span>
                  <span className="text-brand-silver text-xs font-mono uppercase tracking-[0.2em] mt-2 block">
                    Satisfaction Rate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-brand-navy/20">
              {features.map((feature, index) => (
                <div 
                  key={feature.num}
                  className="border-b border-brand-navy/20"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                    className="w-full py-8 md:py-12 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className={`text-sm font-mono transition-colors duration-500 ${activeIndex === index ? "text-brand-teal" : "text-brand-silver"}`}>
                        {feature.num}
                      </span>
                      <h3 className={`text-3xl md:text-5xl font-heading font-bold transition-all duration-500 ${activeIndex === index ? "text-brand-navy" : "text-brand-navy/40 group-hover:text-brand-navy/70"}`}>
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Minimalist Plus/Minus Icon */}
                    <div className="relative w-4 h-4 shrink-0">
                      <div className="absolute top-1/2 left-0 w-full h-[1.5px] bg-brand-navy -translate-y-1/2" />
                      <div className={`absolute top-0 left-1/2 w-[1.5px] h-full bg-brand-navy -translate-x-1/2 transition-transform duration-500 ${activeIndex === index ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 md:pl-28 pb-12">
                          <p className="text-lg md:text-2xl text-brand-navy/70 font-light leading-relaxed max-w-xl">
                            {feature.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
