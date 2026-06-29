"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion";

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

// Helper component for individual words
const Word = ({ children, progress, range, isGold }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number], isGold?: boolean }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span 
      style={{ opacity }} 
      className={`transition-colors duration-300 ${isGold ? "text-brand-gold drop-shadow-[0_0_15px_rgba(201,169,110,0.5)]" : "text-brand-navy"}`}
    >
      {children}
    </motion.span>
  );
};

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  
  // Scroll Interaction Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"]
  });

  const words = "We build spaces that invite light, command attention, and stand the test of time.".split(" ");

  return (
    <section id="about" className="w-full bg-brand-pastel relative">
      
      {/* Scroll-Scrub Header Section */}
      <div ref={containerRef} className="h-[150vh] md:h-[200vh] w-full relative">
        <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-12 container mx-auto">
          
          <div className="max-w-5xl">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              Why Architects Trust Us
            </span>
            <h2 className="text-[2.5rem] md:text-[clamp(3.5rem,7vw,7rem)] font-heading font-extrabold leading-[1.1] md:leading-[1.05] tracking-tight">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                const isGold = word.includes("light");
                return (
                  <span key={i}>
                    <Word progress={scrollYProgress} range={[start, end]} isGold={isGold}>
                      {word}
                    </Word>
                    {/* Add native space for proper natural wrapping on all devices */}
                    {" "}
                  </span>
                );
              })}
            </h2>
          </div>
          
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 pb-24 md:pb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-30">
          
          {/* Left Side: Staggered Statistics */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="mb-16 lg:mb-0">
              <h3 className="text-xl md:text-2xl font-heading font-extrabold text-brand-navy mb-4 tracking-tight">
                Tamil Nadu Coverage
              </h3>
              <p className="text-brand-navy/60 leading-relaxed max-w-sm mb-16 font-light">
                Delivering architectural perfection across Chennai, Coimbatore, Madurai, and beyond. We bring world-class engineering to the South Indian coastline.
              </p>
              
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-[2px] h-12 bg-gradient-to-b from-brand-teal to-brand-cyan" />
                  <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-navy leading-none tracking-tighter">
                    200+
                  </span>
                  <span className="text-brand-navy/60 text-xs font-mono uppercase tracking-[0.2em] mt-4 block">
                    Projects Delivered
                  </span>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-6 top-2 w-[2px] h-12 bg-brand-gold/50" />
                  <span className="block text-6xl md:text-8xl font-heading font-extrabold text-brand-navy leading-none tracking-tighter">
                    100%
                  </span>
                  <span className="text-brand-navy/60 text-xs font-mono uppercase tracking-[0.2em] mt-4 block">
                    Satisfaction Rate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Editorial Accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-brand-navy/10">
              {features.map((feature, index) => (
                <div 
                  key={feature.num}
                  className="border-b border-brand-navy/10"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                    className="w-full py-8 md:py-12 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-8 md:gap-16">
                      <span className={`text-sm font-mono transition-colors duration-500 ${activeIndex === index ? "text-brand-gold" : "text-brand-navy/40"}`}>
                        {feature.num}
                      </span>
                      <h3 className={`text-2xl md:text-5xl font-heading font-bold tracking-tight transition-all duration-500 ${activeIndex === index ? "text-brand-navy" : "text-brand-navy/40 group-hover:text-brand-cyan"}`}>
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Minimalist Plus/Minus Icon */}
                    <div className="relative w-4 h-4 shrink-0 hidden md:block">
                      <div className={`absolute top-1/2 left-0 w-full h-[1.5px] transition-colors duration-500 -translate-y-1/2 ${activeIndex === index ? "bg-brand-gold" : "bg-brand-navy"}`} />
                      <div className={`absolute top-0 left-1/2 w-[1.5px] h-full transition-all duration-500 ease-[0.32,0.72,0,1] -translate-x-1/2 ${activeIndex === index ? "bg-brand-gold rotate-90 scale-0" : "bg-brand-navy rotate-0 scale-100"}`} />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="md:pl-28 pb-8 md:pb-12">
                          <p className="text-base md:text-2xl text-brand-navy/70 font-light leading-relaxed max-w-xl">
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
