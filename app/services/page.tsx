import { Metadata } from "next";

import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Solutions & Services | Vistta Glass",
  description: "Explore our premium interior and architectural glass solutions, categorized into Architectural Glass, Decorative Glass, and Glass Services.",
};

export default function ServicesIndexPage() {
  return (
    <>
      <main className="w-full pt-40 md:pt-56 pb-24 bg-brand-pastel min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-24 px-2">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              Our Solutions
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-extrabold text-brand-navy leading-[0.95] tracking-tight">
              Innovative Glass <br /> <span className="text-brand-gold">Solutions.</span>
            </h1>
            <p className="mt-8 text-[clamp(1.2rem,2vw,1.5rem)] text-brand-navy/70 max-w-2xl font-light leading-relaxed">
              We specialize in the supply and installation of premium interior and architectural glass solutions for residential and commercial projects. From precise site measurements and custom fabrication to professional installation, we deliver exceptional craftsmanship, reliable service, and on-time project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={category.slug} className="group relative overflow-hidden rounded-[2.5rem] bg-brand-pastelCard p-2 ring-1 ring-brand-navy/5 shadow-sm block hover:ring-brand-cyan/50 transition-all duration-700 flex flex-col h-full min-h-[500px]">
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-brand-navy/5 mb-2">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[0.32,0.72,0,1] group-hover:scale-105 opacity-90 mix-blend-multiply group-hover:opacity-100 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold font-mono text-lg shadow-sm border border-white/20 group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors duration-500 z-20">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col z-20">
                    <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-3 tracking-tight group-hover:text-brand-gold transition-colors">
                      {category.title}
                    </h2>
                    <p className="text-white/70 mb-8 line-clamp-2 font-light text-lg">
                      {category.description}
                    </p>
                    
                    <Link 
                      href={`/services/${category.slug}`}
                      className="inline-flex items-center gap-4 text-white font-bold tracking-[0.1em] uppercase text-sm group/link mt-auto w-fit"
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-white after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-500 pb-1">
                        Explore Category
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/link:bg-brand-gold group-hover/link:border-brand-gold transition-colors duration-500">
                        <ArrowRight className="w-4 h-4 text-white" />
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
