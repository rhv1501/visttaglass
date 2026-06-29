import { notFound } from "next/navigation";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import InstantQuoteForm from "@/components/InstantQuoteForm";
import { servicesData } from "@/data/services";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  
  if (!service) {
    return { title: "Not Found" };
  }

  return {
    title: `${service.title} | Vistta Glass`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [service.image],
    },
    alternates: {
      canonical: `https://visttaglass.com/${service.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: "Vistta Glass",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Door No.49, Old, Maddox St, Periyamedu, Choolai",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "600112",
        addressCountry: "IN",
      }
    },
    description: service.description,
    areaServed: {
      "@type": "City",
      name: "Chennai"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      
      <main className="w-full bg-brand-white min-h-screen">
        
        {/* Cinematic Hero */}
        <div className="relative w-full h-[80vh] bg-[#0A1118] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={service.serviceName} 
              className="w-full h-[120%] object-cover opacity-60 mix-blend-luminosity transform -translate-y-10"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/40 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
            <div className="container mx-auto max-w-7xl">
              <span className="text-brand-cyan text-xs md:text-sm font-mono uppercase tracking-[0.3em] mb-6 block">
                Engineering Specialization
              </span>
              <h1 className="text-[clamp(3rem,8vw,8rem)] font-heading font-extrabold text-white leading-[0.95] tracking-tighter">
                {service.serviceName}.
              </h1>
            </div>
          </div>
        </div>

        {/* Editorial Content Layout */}
        <div className="container mx-auto px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-navy mb-12 leading-tight">
                {service.heading}
              </h2>
              
              <div className="text-xl md:text-2xl text-brand-navy/70 font-light leading-relaxed mb-24 border-l border-brand-teal pl-8">
                {service.content}
              </div>

              <div className="border-t border-brand-navy/10 pt-24 mb-24">
                <span className="text-brand-silver text-xs font-mono uppercase tracking-[0.3em] mb-12 block">
                  The Vistta Methodology
                </span>
                
                <div className="space-y-16">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                    <span className="text-5xl font-heading font-extrabold text-brand-navy/10">01</span>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Precision Engineered</h3>
                      <p className="text-brand-navy/70 leading-relaxed font-light text-lg">Every structural pane is measured and cut with laser accuracy, ensuring a flawless fit for high-end architectural tolerances.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                    <span className="text-5xl font-heading font-extrabold text-brand-navy/10">02</span>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Premium Global Sourcing</h3>
                      <p className="text-brand-navy/70 leading-relaxed font-light text-lg">We source exclusively from world-renowned manufacturers, integrating high-grade German and European hardware systems.</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                    <span className="text-5xl font-heading font-extrabold text-brand-navy/10">03</span>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">Flawless Installation</h3>
                      <p className="text-brand-navy/70 leading-relaxed font-light text-lg">Execution is everything. Our certified engineers handle complex installations with absolute clinical precision, guaranteeing acoustic and structural integrity.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Sidebar (Dark Form) */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <InstantQuoteForm serviceName={service.serviceName} />
                
                <div className="mt-12 p-8 border border-brand-navy/10 bg-brand-offwhite">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy mb-4">Direct Inquiry</h4>
                  <p className="text-brand-navy/60 font-mono text-sm leading-relaxed mb-6">
                    For architectural briefs and immediate commercial estimates, contact our engineering desk directly.
                  </p>
                  <a href="tel:+919840396462" className="text-brand-teal font-heading text-2xl font-bold hover:text-brand-navy transition-colors">
                    +91 98403 96462
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
