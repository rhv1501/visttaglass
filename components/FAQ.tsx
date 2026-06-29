"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you handle both residential and commercial glass installations?",
    answer: "Absolutely. We manage everything from bespoke frameless shower enclosures in luxury villas to multi-story structural spider-glazing facades for corporate headquarters."
  },
  {
    question: "What is the typical timeline for a custom architectural glass project?",
    answer: "Timeline depends strictly on scale and structural requirements. Standard residential installations usually take 2-3 weeks from final laser measurement. Large-scale commercial facades run on tightly managed architectural schedules spanning months."
  },
  {
    question: "Do you supply the hardware (hinges, channels, handles) as well?",
    answer: "Yes. We source premium architectural hardware from global leaders like Dorma, Ozone, and Schüco, ensuring that the metal mechanics match the exact tolerance and aesthetic quality of the glass itself."
  },
  {
    question: "Can you execute complex curved or acoustic glass partitions?",
    answer: "Yes. Our engineering capabilities include complex curved glass panels, switchable privacy smart-glass, and double-glazed acoustic partitions that significantly reduce decibel transfer in corporate environments."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-32 md:py-48 bg-brand-pastel border-t border-brand-navy/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              Knowledge Base
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-brand-navy leading-[1.1] tracking-tighter mb-8">
              Frequently <br /> <span className="text-brand-gold">Asked.</span>
            </h2>
            <p className="text-brand-navy/60 text-lg leading-relaxed max-w-sm font-light">
              We believe in total transparency before a project even begins. Here are the technical and operational details architects and clients frequently request.
            </p>
          </div>

          <div className="lg:col-span-7 border-t border-brand-navy/10">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-brand-navy/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 text-left flex justify-between items-center group"
                >
                  <h3 className={`text-xl md:text-2xl font-heading font-bold pr-8 transition-colors ${openIndex === index ? "text-brand-navy" : "text-brand-navy/60 group-hover:text-brand-cyan"}`}>
                    {faq.question}
                  </h3>
                  <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                    <div className={`absolute w-full h-[2px] transition-colors duration-500 ${openIndex === index ? "bg-brand-gold" : "bg-brand-navy"}`} />
                    <div className={`absolute h-full w-[2px] transition-all duration-500 ease-[0.32,0.72,0,1] ${openIndex === index ? "bg-brand-gold rotate-90 scale-0" : "bg-brand-navy rotate-0 scale-100"}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-lg text-brand-navy/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
