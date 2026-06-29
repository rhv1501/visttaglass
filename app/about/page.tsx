import { Metadata } from "next";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Vistta Glass",
  description: "Learn about Vistta Glass, Chennai's premier architectural glass studio. We blend precision engineering with premium aesthetics.",
};

export default function AboutPage() {
  return (
    <>

      <main className="w-full pt-32 pb-24 bg-brand-white min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <span className="text-brand-silver text-sm uppercase tracking-[0.2em] mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-navy leading-tight">
              Engineering Light. <br />
              <span className="text-brand-teal">Defining Space.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
                alt="Vistta Glass Studio" 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl shadow-brand-navy/10"
              />
            </div>
            <div className="prose prose-lg text-brand-navy/80">
              <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">A Legacy of Precision</h2>
              <p>
                Vistta Glass is a leading interior and architectural glass solutions provider in Chennai. We specialize in supply and installation of aluminium windows, uPVC windows, glass doors, toughened glass, shower cubicles, glass partitions, office cubicles, railings, mirrors, and customized glass works for residential and commercial projects.
              </p>
              <p>
                We work closely with architects, interior designers, and builders to deliver high-quality, precision-finished glass and window solutions. From site measurement to fabrication and installation, we ensure professional service and timely completion.
              </p>
              <p>
                We undertake projects across Tamil Nadu and supply pan India. Our commitment to millimeter-perfect precision ensures that every installation is visually breathtaking and structurally uncompromised.
              </p>
              
              <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-brand-grey/50">
                <div>
                  <span className="block text-4xl font-heading font-bold text-brand-teal mb-2">15+</span>
                  <span className="text-sm uppercase tracking-wider text-brand-navy font-bold">Years Experience</span>
                </div>
                <div>
                  <span className="block text-4xl font-heading font-bold text-brand-teal mb-2">500+</span>
                  <span className="text-sm uppercase tracking-wider text-brand-navy font-bold">Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-brand-navy text-brand-white p-12 md:p-24 rounded-sm">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Our Philosophy</h2>
              <p className="text-xl leading-relaxed text-brand-white/80 mb-12">
                "We believe that the best architectural glass should feel invisible yet deeply impactful. It should reflect its environment, invite light, and stand the test of time with absolute integrity."
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
