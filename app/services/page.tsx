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

      <main className="w-full pt-32 pb-24 bg-brand-offwhite min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <span className="text-brand-silver text-sm uppercase tracking-[0.2em] mb-4 block">Capabilities</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-navy leading-tight">
              Architectural <span className="text-brand-teal">Solutions.</span>
            </h1>
            <p className="mt-6 text-xl text-brand-navy/70 max-w-2xl">
              We specialize in the supply and installation of interior and architectural glass solutions for residential and commercial projects. From site measurement to fabrication and installation, we ensure professional service and timely completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service, index) => (
              <div key={service.slug} className="group flex flex-col bg-brand-white border border-brand-grey/30 rounded-sm overflow-hidden shadow-lg shadow-brand-navy/5 hover:shadow-2xl hover:shadow-brand-navy/10 transition-all duration-500">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.serviceName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/10 transition-colors duration-500" />
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-navy font-bold font-mono">
                    0{index + 1}
                  </div>
                </div>
                
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors">
                    {service.serviceName}
                  </h2>
                  <p className="text-brand-navy/70 mb-8 line-clamp-3 flex-1">
                    {service.description}
                  </p>
                  
                  <Link 
                    href={`/${service.slug}`}
                    className="inline-flex items-center gap-2 text-brand-navy font-bold tracking-wider uppercase text-sm group/link mt-auto"
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand-navy after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-300">
                      View Service Details
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
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
