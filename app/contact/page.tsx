"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  }
};

export default function ContactPage() {
  return (
    <>
      <main className="w-full min-h-screen bg-brand-pastel text-brand-navy overflow-hidden">
        
        {/* Extreme Minimalist Hero */}
        <section className="pt-40 md:pt-56 pb-24 md:pb-32 px-6 md:px-12 border-b border-brand-navy/10 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 mix-blend-multiply pointer-events-none" />
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16"
            >
              <div className="max-w-4xl">
                <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8 md:mb-12">
                  Project Inquiry
                </span>
                <h1 className="text-[clamp(3.5rem,8vw,10rem)] font-heading font-extrabold leading-[0.9] tracking-tighter text-brand-navy">
                  Let's engineer <br /> your <span className="text-brand-cyan relative">
                    vision.
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-cyan/30 translate-y-2 rounded-full" />
                  </span>
                </h1>
              </div>
              
              <div className="md:max-w-sm pb-2 md:pb-4">
                <p className="text-brand-navy/60 font-light text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed">
                  Our technical desk is open for architectural briefs, structural glass specifications, and complex facade estimations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cinematic Split Layout */}
        <section className="py-0 relative">
          <div className="container mx-auto flex flex-col lg:flex-row">
            
            {/* Left: Stark Typographic Information */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="w-full lg:w-5/12 border-b lg:border-b-0 lg:border-r border-brand-navy/10 flex flex-col bg-brand-pastel z-10"
            >
              
              <div className="p-8 md:p-16 lg:p-24 border-b border-brand-navy/10 flex-1 hover:bg-brand-navy hover:text-white transition-colors duration-700 group flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/5 group-hover:bg-brand-cyan/20 flex items-center justify-center transition-colors duration-500">
                    <MapPin className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <span className="inline-block rounded-full bg-brand-navy/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy group-hover:bg-white/10 group-hover:text-brand-cyan transition-colors duration-500">Headquarters</span>
                </div>
                
                <p className="text-[clamp(1.75rem,3vw,3rem)] font-heading font-bold leading-[1.1] mb-6 max-w-sm tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">
                  Door No.49, Old, Maddox St.
                </p>
                <p className="text-brand-navy/60 group-hover:text-white/60 text-base md:text-lg leading-relaxed mb-12 font-light transition-colors duration-500">Periyamedu, Choolai<br />Chennai, Tamil Nadu 600112</p>
                
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-brand-navy group-hover:text-brand-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-4 group/map w-max transition-colors">
                  <span className="relative pb-1">
                    View on Map
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-navy group-hover:bg-brand-gold origin-left scale-x-0 group-hover/map:scale-x-100 transition-transform duration-500" />
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover/map:translate-x-2 transition-transform duration-500" />
                </a>
              </div>

              <div className="p-8 md:p-16 lg:p-24 flex-1 hover:bg-brand-cyan transition-colors duration-700 group flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand-navy/5 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-500">
                    <Mail className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors" />
                  </div>
                  <span className="inline-block rounded-full bg-brand-navy/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-navy group-hover:bg-white/20 group-hover:text-white transition-colors duration-500">Direct Desk</span>
                </div>
                
                <div className="flex flex-col gap-6">
                  <a href="mailto:hello@visttaglass.com" className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-bold text-brand-navy group-hover:text-brand-navy break-all tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">
                    hello@visttaglass.com
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Right: Razor-Thin Minimal Form */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24 xl:p-32 bg-white relative z-0"
            >
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h3 className="text-[clamp(2.5rem,4vw,3.5rem)] font-heading font-extrabold mb-16 md:mb-24 text-brand-navy tracking-tight">
                  Submit <span className="text-brand-gold">Specification</span>
                </h3>
                
                <motion.form variants={containerVariants} initial="hidden" animate="show" className="space-y-12 md:space-y-16">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <motion.div variants={itemVariants} className="relative group">
                      <input 
                        type="text" 
                        id="firstName"
                        required
                        className="peer w-full bg-transparent border-b border-brand-navy/10 pb-3 text-brand-navy focus:outline-none text-lg md:text-xl font-light tracking-wide placeholder-transparent"
                        placeholder="First Name"
                      />
                      <label 
                        htmlFor="firstName"
                        className="absolute left-0 top-0 text-brand-navy/40 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-navy/40 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-brand-cyan"
                      >
                        First Name
                      </label>
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 peer-focus:w-full" />
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="relative group">
                      <input 
                        type="text" 
                        id="lastName"
                        required
                        className="peer w-full bg-transparent border-b border-brand-navy/10 pb-3 text-brand-navy focus:outline-none text-lg md:text-xl font-light tracking-wide placeholder-transparent"
                        placeholder="Last Name"
                      />
                      <label 
                        htmlFor="lastName"
                        className="absolute left-0 top-0 text-brand-navy/40 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-navy/40 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-brand-cyan"
                      >
                        Last Name
                      </label>
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 peer-focus:w-full" />
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="relative group">
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="peer w-full bg-transparent border-b border-brand-navy/10 pb-3 text-brand-navy focus:outline-none text-lg md:text-xl font-light tracking-wide placeholder-transparent"
                      placeholder="Email Address"
                    />
                    <label 
                      htmlFor="email"
                      className="absolute left-0 top-0 text-brand-navy/40 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-navy/40 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-brand-cyan"
                    >
                      Email Address
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 peer-focus:w-full" />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group">
                    <input 
                      type="tel" 
                      id="phone"
                      required
                      className="peer w-full bg-transparent border-b border-brand-navy/10 pb-3 text-brand-navy focus:outline-none text-lg md:text-xl font-light tracking-wide placeholder-transparent"
                      placeholder="Phone Number"
                    />
                    <label 
                      htmlFor="phone"
                      className="absolute left-0 top-0 text-brand-navy/40 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-navy/40 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-brand-cyan"
                    >
                      Phone Number
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 peer-focus:w-full" />
                  </motion.div>

                  <motion.div variants={itemVariants} className="relative group pt-4">
                    <textarea 
                      id="brief"
                      rows={3}
                      required
                      className="peer w-full bg-transparent border-b border-brand-navy/10 pb-3 text-brand-navy focus:outline-none text-lg md:text-xl font-light tracking-wide resize-none placeholder-transparent"
                      placeholder="Project Brief"
                    ></textarea>
                    <label 
                      htmlFor="brief"
                      className="absolute left-0 top-0 text-brand-navy/40 text-[10px] font-mono uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-brand-navy/40 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-brand-cyan"
                    >
                      Project Brief
                    </label>
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-brand-teal to-brand-cyan transition-all duration-500 peer-focus:w-full" />
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-8 md:pt-12">
                    <MagneticButton strength={0.3}>
                      <button 
                        type="button"
                        className="group/btn relative px-8 md:px-10 py-5 md:py-6 bg-brand-navy text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-between overflow-hidden rounded-full w-full sm:w-auto min-w-[280px] shadow-xl hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-500 border border-transparent"
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-teal to-brand-cyan transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[0.32,0.72,0,1]" />
                        <span className="relative z-10 font-bold group-hover/btn:text-white transition-colors duration-500 pr-8">Transmit Brief</span>
                        <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors duration-500">
                          <ArrowRight className="w-4 h-4 text-white transition-all duration-300 group-hover/btn:translate-x-1" />
                        </div>
                      </button>
                    </MagneticButton>
                  </motion.div>

                </motion.form>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
