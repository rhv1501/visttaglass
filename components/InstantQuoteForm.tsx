"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function InstantQuoteForm({ serviceName }: { serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <div className="bg-[#0A1118] p-12 text-center text-white h-full flex flex-col items-center justify-center border-t-4 border-brand-teal">
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-8">
          <Check className="w-6 h-6 text-brand-teal" />
        </div>
        <h3 className="text-3xl font-heading font-extrabold mb-4">Request <br/> Received.</h3>
        <p className="text-white/60 font-light text-sm max-w-[200px] leading-relaxed">
          Our engineering team will contact you shortly regarding the {serviceName} specifications.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#0A1118] p-8 md:p-12 text-white relative overflow-hidden group">
      {/* Decorative ultra-minimal abstract glass */}
      <div className="absolute top-0 right-0 w-full h-[200px] bg-gradient-to-b from-brand-teal/10 to-transparent opacity-50 pointer-events-none" />
      
      <div className="relative z-10">
        <span className="text-brand-teal text-xs font-mono uppercase tracking-[0.3em] mb-4 block">
          Project Inquiry
        </span>
        <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-12 leading-tight">
          Request an <br/> Estimate.
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <input 
              type="text" 
              id="name"
              required
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-brand-teal transition-colors placeholder:text-white/30 text-sm font-medium tracking-wide"
            />
          </div>
          <div className="relative">
            <input 
              type="tel" 
              id="phone"
              required
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-brand-teal transition-colors placeholder:text-white/30 text-sm font-medium tracking-wide"
            />
          </div>
          <div className="relative pt-4">
            <textarea 
              id="details"
              rows={3}
              placeholder="Project dimensions, scope, or specific requirements..."
              className="w-full bg-transparent border-b border-white/20 pb-4 text-white focus:outline-none focus:border-brand-teal transition-colors placeholder:text-white/30 text-sm font-medium tracking-wide resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full group/btn relative pt-8 pb-4 flex items-center justify-between border-b border-brand-teal hover:border-white transition-colors"
          >
            <span className="font-bold tracking-widest uppercase text-xs text-brand-teal group-hover/btn:text-white transition-colors">Submit Specification</span>
            <ArrowRight className="w-5 h-5 text-brand-teal group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}
