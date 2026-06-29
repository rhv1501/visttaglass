"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Precision Measurements",
    desc: "Millimeter-perfect laser scanning of your space to ensure flawless fit and alignment of every architectural glass panel. We leave absolutely no margin for error."
  },
  {
    num: "02",
    title: "Expert Fabrication",
    desc: "State-of-the-art cutting, toughening, and edging processes executed in our advanced facilities. Ensuring uncompromising structural integrity, optical clarity, and ultimate safety."
  },
  {
    num: "03",
    title: "Master Installation",
    desc: "Our certified engineering technicians install with microscopic precision, utilizing premium structural sealants, bespoke heavy-duty hardware, and acoustic seals."
  },
  {
    num: "04",
    title: "Immaculate Finishing",
    desc: "Rigorous final inspection, multi-stage polishing, and quality assurance protocols to deliver a breathtaking, crystal-clear result that redefines your space."
  }
];

export default function MaterialExcellence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} id="process" className="w-full relative bg-brand-navy text-white min-h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex items-center overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan via-transparent to-transparent opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Pinned Content */}
          <div className="flex flex-col items-start">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              The Process
            </span>
            <h2 className="text-[clamp(3.5rem,7vw,6.5rem)] font-heading font-extrabold leading-[1.05] tracking-tight mb-8">
              The Vistta <br /> Standard.
            </h2>
            <p className="text-xl text-white/60 font-light max-w-md leading-relaxed">
              Crafted with uncompromising precision from start to finish. Our methodology ensures architectural perfection.
            </p>
          </div>

          {/* Right Scrolling Content Container */}
          <div className="relative h-[60vh] w-full flex flex-col justify-center">
            {steps.map((step, index) => {
              // Calculate specific scroll ranges for each step to fade in/out
              const stepStart = index * 0.25;
              const stepPeak = stepStart + 0.125;
              const stepEnd = stepStart + 0.25;

              // Use hook directly in loop because it's deterministic and fixed length
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                [Math.max(0, stepStart - 0.1), stepPeak, stepEnd],
                [0, 1, 0]
              );
              
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [Math.max(0, stepStart - 0.1), stepPeak, stepEnd],
                [50, 0, -50]
              );

              return (
                <motion.div
                  key={step.num}
                  style={{ opacity, y }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <span className="text-brand-cyan text-8xl md:text-[14rem] font-heading font-extrabold opacity-10 leading-none mb-4 md:-ml-8 pointer-events-none select-none">
                    {step.num}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg relative z-10 font-light">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
