import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy pt-32 pb-12 rounded-t-[3rem] mt-[-3rem] relative z-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(26,107,138,0.15)_0%,rgba(10,25,47,0)_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
            Next Steps
          </span>
          <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-heading font-light text-white leading-[0.9] tracking-tighter mb-12">
            Let's Build <br /> <span className="text-white/40">Together.</span>
          </h2>
          
          <Link 
            href="/contact"
            className="group relative px-10 py-5 bg-white text-brand-navy text-sm font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-4 overflow-hidden rounded-full transition-transform active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-brand-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 group-hover:text-brand-navy transition-colors duration-300">Start a Conversation</span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-brand-navy/10 flex items-center justify-center group-hover:bg-brand-navy/20 transition-colors duration-300">
              <ArrowRight className="w-4 h-4 text-brand-navy group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-300" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pt-12 border-t border-white/10">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block relative mb-8 group">
              <div className="absolute inset-0 bg-brand-cyan/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <img 
                src="/vistta-video.gif" 
                alt="Vistta Glass" 
                className="relative z-10 h-20 md:h-28 w-auto object-contain rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105" 
              />
            </Link>
            <p className="text-white/40 max-w-sm font-light">
              Premium architectural glass and window solutions for modern spaces in Chennai and Tamil Nadu.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/services/${category.slug}`} className="text-white/50 hover:text-white transition-colors">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Direct Desk</h4>
            <ul className="space-y-4 text-sm font-light text-white/50">
              <li>Door No.49, Old, Maddox St,</li>
              <li>Periyamedu, Choolai, Chennai</li>
              <li className="pt-2"><a href="mailto:Sales@visttaglass.com" className="hover:text-white transition-colors">Sales@visttaglass.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-mono">
            &copy; {new Date().getFullYear()} Vistta Glass. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-white/30">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
