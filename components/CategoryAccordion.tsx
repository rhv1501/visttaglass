"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";

export default function CategoryAccordion({ services }: { services: ServiceItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className="w-full flex flex-col gap-4">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div 
            key={service.slug}
            className={`border border-brand-navy/10 rounded-[1.5rem] overflow-hidden transition-colors duration-500 ${isOpen ? 'bg-brand-pastelCard shadow-sm' : 'bg-transparent hover:bg-brand-navy/5'}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
            >
              <div className="flex items-center gap-6">
                <span className={`font-mono text-sm font-bold transition-colors duration-300 ${isOpen ? 'text-brand-cyan' : 'text-brand-navy/40'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={`text-xl md:text-3xl font-heading font-light transition-colors duration-300 ${isOpen ? 'text-brand-navy' : 'text-brand-navy/70'}`}>
                  {service.title}
                </h3>
              </div>
              <div className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-brand-cyan bg-brand-cyan text-white' : 'border-brand-navy/20 text-brand-navy/50'}`}>
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <div className="px-6 md:px-8 pb-8 pt-2">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden relative flex-shrink-0 bg-brand-navy/5">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="text-lg md:text-xl font-heading font-light text-brand-navy mb-4">
                          {service.heading}
                        </h4>
                        <p className="text-brand-navy/70 font-light leading-relaxed mb-8 text-base">
                          {service.content}
                        </p>
                        <Link 
                          href={`/${service.slug}`}
                          className="inline-flex items-center gap-3 text-brand-navy font-bold tracking-[0.1em] uppercase text-xs group/link mt-auto w-fit"
                        >
                          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand-navy after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-500 pb-1">
                            Read Full Details
                          </span>
                          <div className="w-8 h-8 rounded-full border border-brand-navy/20 flex items-center justify-center group-hover/link:bg-brand-teal group-hover/link:border-brand-teal transition-colors duration-500">
                            <ArrowRight className="w-3 h-3 group-hover/link:text-white transition-colors" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
