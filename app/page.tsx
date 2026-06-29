import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ServicesShowcase from "@/components/ServicesShowcase";
import FeaturedProjects from "@/components/FeaturedProjects";
import MaterialExcellence from "@/components/MaterialExcellence";
import PartnersMarquee from "@/components/PartnersMarquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <main className="flex flex-col w-full max-w-full clip-path-none">
        <Hero />
        <Manifesto />
        <ServicesShowcase />
        <FeaturedProjects />
        <MaterialExcellence />
        <PartnersMarquee />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
