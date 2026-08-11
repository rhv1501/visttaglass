"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Phone, Mail, Check, ArrowLeft } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  }
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    brief: "",
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const validateStep = (currentStep: number) => {
    const newErrors: Partial<typeof formData> = {};
    let isValid = true;
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) { newErrors.firstName = "First name is required"; isValid = false; }
      if (!formData.lastName.trim()) { newErrors.lastName = "Last name is required"; isValid = false; }
    } else if (currentStep === 2) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) { newErrors.email = "Email is required"; isValid = false; }
      else if (!emailRegex.test(formData.email)) { newErrors.email = "Invalid email format"; isValid = false; }
      
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!formData.phone.trim()) { newErrors.phone = "Phone number is required"; isValid = false; }
      else if (!phoneRegex.test(formData.phone)) { newErrors.phone = "Invalid phone number"; isValid = false; }
    } else if (currentStep === 3) {
      if (!formData.brief.trim()) { newErrors.brief = "Project brief is required"; isValid = false; }
      else if (formData.brief.length < 10) { newErrors.brief = "Brief must be at least 10 characters"; isValid = false; }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      if (step < 3) {
        setStep(prev => prev + 1);
      } else {
        submitForm();
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const submitForm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

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
                  <a href="mailto:sales@visttaglass.com" className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-bold text-brand-navy group-hover:text-brand-navy break-all tracking-tight transform group-hover:translate-x-2 transition-transform duration-500">
                    sales@visttaglass.com
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Right: Razor-Thin Minimal Form */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="w-full lg:w-7/12 p-8 md:p-16 lg:p-24 xl:p-32 bg-white relative z-0 min-h-[600px] flex flex-col justify-center"
            >
              <div className="max-w-2xl mx-auto lg:mx-0 w-full">
                
                {!isSubmitted ? (
                  <>
                    <div className="flex justify-between items-end mb-12">
                      <h3 className="text-[clamp(2.5rem,4vw,3.5rem)] font-heading font-extrabold text-brand-navy tracking-tight leading-none">
                        Submit <br className="hidden md:block" /><span className="text-brand-gold">Specification</span>
                      </h3>
                      <div className="text-brand-navy/30 font-mono text-sm tracking-widest flex flex-col items-end">
                        <span>Step {step}</span>
                        <div className="flex gap-1 mt-2">
                          {[1, 2, 3].map((s) => (
                            <div key={s} className={`h-1 rounded-full transition-all duration-500 ${s === step ? 'w-8 bg-brand-cyan' : s < step ? 'w-4 bg-brand-teal/50' : 'w-4 bg-brand-navy/10'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-8 md:space-y-12">
                      <AnimatePresence mode="wait">
                        {step === 1 && (
                          <motion.div 
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-12"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                              <div className="relative group">
                                <input 
                                  type="text" 
                                  id="firstName"
                                  value={formData.firstName}
                                  onChange={(e) => {
                                    setFormData({ ...formData, firstName: e.target.value });
                                    if (errors.firstName) setErrors({ ...errors, firstName: undefined });
                                  }}
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
                                {errors.firstName && <span className="absolute -bottom-6 left-0 text-red-500 text-xs">{errors.firstName}</span>}
                              </div>
                              
                              <div className="relative group">
                                <input 
                                  type="text" 
                                  id="lastName"
                                  value={formData.lastName}
                                  onChange={(e) => {
                                    setFormData({ ...formData, lastName: e.target.value });
                                    if (errors.lastName) setErrors({ ...errors, lastName: undefined });
                                  }}
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
                                {errors.lastName && <span className="absolute -bottom-6 left-0 text-red-500 text-xs">{errors.lastName}</span>}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {step === 2 && (
                          <motion.div 
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-12"
                          >
                            <div className="relative group">
                              <input 
                                type="email" 
                                id="email"
                                value={formData.email}
                                onChange={(e) => {
                                  setFormData({ ...formData, email: e.target.value });
                                  if (errors.email) setErrors({ ...errors, email: undefined });
                                }}
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
                              {errors.email && <span className="absolute -bottom-6 left-0 text-red-500 text-xs">{errors.email}</span>}
                            </div>

                            <div className="relative group">
                              <input 
                                type="tel" 
                                id="phone"
                                value={formData.phone}
                                onChange={(e) => {
                                  setFormData({ ...formData, phone: e.target.value });
                                  if (errors.phone) setErrors({ ...errors, phone: undefined });
                                }}
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
                              {errors.phone && <span className="absolute -bottom-6 left-0 text-red-500 text-xs">{errors.phone}</span>}
                            </div>
                          </motion.div>
                        )}

                        {step === 3 && (
                          <motion.div 
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-12"
                          >
                            <div className="relative group pt-4">
                              <textarea 
                                id="brief"
                                rows={4}
                                value={formData.brief}
                                onChange={(e) => {
                                  setFormData({ ...formData, brief: e.target.value });
                                  if (errors.brief) setErrors({ ...errors, brief: undefined });
                                }}
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
                              {errors.brief && <span className="absolute -bottom-6 left-0 text-red-500 text-xs">{errors.brief}</span>}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="pt-12 flex items-center justify-between">
                        {step > 1 ? (
                          <button 
                            type="button" 
                            onClick={handlePrev}
                            className="text-brand-navy/40 hover:text-brand-cyan text-xs font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
                          >
                            <ArrowLeft className="w-4 h-4" /> Back
                          </button>
                        ) : (
                          <div />
                        )}

                        <MagneticButton strength={0.3}>
                          <button 
                            type="button"
                            onClick={handleNext}
                            className={`group/btn relative px-8 md:px-10 py-4 md:py-5 bg-brand-navy text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-4 overflow-hidden rounded-full shadow-xl hover:shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-500 border border-transparent ${isSubmitting ? 'opacity-80 pointer-events-none' : ''}`}
                          >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-teal to-brand-cyan transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[0.32,0.72,0,1]" />
                            <span className="relative z-10 font-bold group-hover/btn:text-white transition-colors duration-500">
                              {isSubmitting ? 'Processing...' : step === 3 ? 'Transmit Brief' : 'Continue'}
                            </span>
                            {!isSubmitting && (
                              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors duration-500">
                                <ArrowRight className="w-4 h-4 text-white transition-all duration-300 group-hover/btn:translate-x-1" />
                              </div>
                            )}
                          </button>
                        </MagneticButton>
                      </div>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-8">
                      <Check className="w-10 h-10 text-brand-cyan" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-navy mb-4 tracking-tight">
                      Brief Received.
                    </h3>
                    <p className="text-brand-navy/60 font-light text-lg leading-relaxed max-w-sm mx-auto">
                      Our engineering desk will evaluate your requirements and reach out within 24 hours.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
