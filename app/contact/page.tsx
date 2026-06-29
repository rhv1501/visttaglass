"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>

      <main className="w-full min-h-screen bg-brand-white text-brand-navy">
        
        {/* Extreme Minimalist Hero */}
        <section className="pt-48 pb-32 px-6 md:px-12 border-b border-brand-navy/10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16"
            >
              <div className="max-w-4xl">
                <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-[0.3em] mb-12 block">
                  Project Inquiry
                </span>
                <h1 className="text-[clamp(4rem,8vw,9rem)] font-heading font-light leading-[0.95] tracking-tighter text-brand-navy">
                  Let's engineer <br /> your <span className="font-extrabold">vision.</span>
                </h1>
              </div>
              
              <div className="md:max-w-sm pb-4">
                <p className="text-brand-navy/60 font-light text-xl leading-relaxed">
                  Our technical desk is open for architectural briefs, structural glass specifications, and complex facade estimations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Breathing Space Layout */}
        <section className="py-0">
          <div className="container mx-auto flex flex-col lg:flex-row">
            
            {/* Left: Stark Typographic Information */}
            <div className="w-full lg:w-5/12 border-r border-brand-navy/10 flex flex-col">
              
              <div className="p-12 md:p-24 border-b border-brand-navy/10 flex-1 hover:bg-brand-navy/[0.02] transition-colors">
                <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-[0.3em] mb-8 block">Headquarters</span>
                <p className="text-3xl md:text-5xl font-heading font-bold leading-[1.1] mb-8 max-w-xs text-brand-navy">
                  Door No.49, Old, Maddox St.
                </p>
                <p className="text-brand-navy/60 text-lg leading-relaxed mb-8">Periyamedu, Choolai<br />Chennai, Tamil Nadu 600112</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-brand-teal font-bold uppercase tracking-widest text-xs hover:text-brand-navy transition-colors flex items-center gap-2">
                  View on Map <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              <div className="p-12 md:p-24 border-b border-brand-navy/10 flex-1 hover:bg-brand-navy/[0.02] transition-colors">
                <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-[0.3em] mb-8 block">Direct Desk</span>
                <div className="flex flex-col gap-6">
                  <a href="tel:+919840396462" className="text-4xl md:text-5xl font-heading font-bold hover:text-brand-teal transition-colors text-brand-navy">
                    +91 98403 96462
                  </a>
                  <a href="mailto:hello@visttaglass.com" className="text-2xl md:text-3xl font-heading font-bold hover:text-brand-teal transition-colors text-brand-navy/60 break-all">
                    hello@visttaglass.com
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Razor-Thin Minimal Form */}
            <div className="w-full lg:w-7/12 p-12 md:p-24 lg:p-32 bg-brand-white">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-heading font-bold mb-24 text-brand-navy">Submit Specification</h3>
                
                <form className="space-y-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="relative group">
                      <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-widest mb-4 block">First Name</span>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-brand-navy/20 pb-4 text-brand-navy focus:outline-none focus:border-brand-teal transition-colors text-xl font-light tracking-wide peer"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-500 peer-focus:w-full" />
                    </div>
                    <div className="relative group">
                      <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-widest mb-4 block">Last Name</span>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b border-brand-navy/20 pb-4 text-brand-navy focus:outline-none focus:border-brand-teal transition-colors text-xl font-light tracking-wide peer"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-500 peer-focus:w-full" />
                    </div>
                  </div>

                  <div className="relative group">
                    <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-widest mb-4 block">Email Address</span>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-transparent border-b border-brand-navy/20 pb-4 text-brand-navy focus:outline-none focus:border-brand-teal transition-colors text-xl font-light tracking-wide peer"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-500 peer-focus:w-full" />
                  </div>

                  <div className="relative group">
                    <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-widest mb-4 block">Phone Number</span>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-transparent border-b border-brand-navy/20 pb-4 text-brand-navy focus:outline-none focus:border-brand-teal transition-colors text-xl font-light tracking-wide peer"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-500 peer-focus:w-full" />
                  </div>

                  <div className="relative group pt-8">
                    <span className="text-brand-navy/50 font-bold text-xs font-mono uppercase tracking-widest mb-4 block">Project Brief</span>
                    <textarea 
                      rows={4}
                      required
                      className="w-full bg-transparent border-b border-brand-navy/20 pb-4 text-brand-navy focus:outline-none focus:border-brand-teal transition-colors text-xl font-light tracking-wide resize-none peer"
                    ></textarea>
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-teal transition-all duration-500 peer-focus:w-full" />
                  </div>

                  <div className="pt-16">
                    <button 
                      type="button"
                      className="group/btn relative px-16 py-8 border border-brand-navy/20 hover:border-brand-navy text-brand-navy text-sm tracking-[0.3em] uppercase flex items-center justify-between overflow-hidden transition-all duration-500 w-full md:w-auto"
                    >
                      <div className="absolute inset-0 w-full h-full bg-brand-navy transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                      <span className="relative z-10 font-bold group-hover/btn:text-white transition-colors duration-500">Transmit Brief</span>
                      <ArrowRight className="relative z-10 w-6 h-6 group-hover/btn:text-white transition-all duration-500 group-hover/btn:translate-x-2" />
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
