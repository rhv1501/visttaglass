import { Metadata } from "next";

import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | Vistta Glass",
  description: "Explore our premium interior and architectural glass solutions, including aluminium & uPVC windows, glass doors, toughened glass, shower cubicles, partitions, and bespoke installations.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <main className="w-full pt-40 md:pt-56 pb-24 bg-brand-pastel min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-24 px-2">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              Capabilities
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-extrabold text-brand-navy leading-[0.95] tracking-tight">
              Architectural <br /> <span className="text-brand-gold">Solutions.</span>
            </h1>
            <p className="mt-8 text-[clamp(1.2rem,2vw,1.5rem)] text-brand-navy/70 max-w-2xl font-light leading-relaxed">
              We specialize in the supply and installation of interior and architectural glass solutions for residential and commercial projects. From site measurement to fabrication and installation, we ensure professional service and timely completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {servicesData.map((service, index) => (
              <div key={service.slug} className="group relative overflow-hidden rounded-[2rem] bg-brand-pastelCard p-2 ring-1 ring-brand-navy/5 shadow-sm block hover:ring-brand-cyan/50 transition-all duration-700">
                <div className="relative w-full h-full block rounded-[1.5rem] overflow-hidden bg-brand-navy/5">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.serviceName}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.32,0.72,0,1] group-hover:scale-105 opacity-90 mix-blend-multiply group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                    <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-brand-navy font-bold font-mono shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                      0{index + 1}
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex-1 flex flex-col bg-brand-pastelCard/50 backdrop-blur-sm relative z-10">
                    <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-brand-navy mb-4 group-hover:text-brand-cyan transition-colors tracking-tight">
                      {service.serviceName}
                    </h2>
                    <p className="text-brand-navy/60 mb-8 line-clamp-3 flex-1 font-light text-lg">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={`/${service.slug}`}
                      className="inline-flex items-center gap-3 text-brand-navy font-bold tracking-[0.1em] uppercase text-xs group/link mt-auto"
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand-navy after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-500 pb-1">
                        View Service Details
                      </span>
                      <div className="w-8 h-8 rounded-full border border-brand-navy/20 flex items-center justify-center group-hover/link:bg-brand-teal group-hover/link:border-brand-teal transition-colors duration-500">
                        <ArrowRight className="w-3 h-3 group-hover/link:text-white transition-colors" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
