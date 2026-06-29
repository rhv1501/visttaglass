"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Studio", path: "/about" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* 
        Awwwards-Level Minimal Split Nav 
        Mixes into the background seamlessly at top, becomes a premium glass strip on scroll.
      */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${
          scrolled && !menuOpen 
            ? "py-4 bg-[#0a1118]/70 backdrop-blur-2xl border-b border-white/10" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className={`relative z-[60] text-xl md:text-2xl font-bold tracking-tighter transition-colors duration-500 ${
              menuOpen ? "text-white" : (scrolled ? "text-white" : "text-brand-navy mix-blend-difference invert")
            }`}
          >
            VISTTA<span className="text-brand-teal">.</span>
          </Link>

          {/* Desktop Nav (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="group relative overflow-hidden text-sm font-bold tracking-widest uppercase text-white mix-blend-difference"
                >
                  <span className="relative z-10 block transition-transform duration-500 group-hover:-translate-y-full">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 z-10 block translate-y-full transition-transform duration-500 group-hover:translate-y-0 text-brand-teal">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="w-[1px] h-4 bg-white/20 mix-blend-difference" />

            <MagneticButton strength={0.2}>
              <Link
                href="/contact"
                className="relative flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest group bg-white/5 backdrop-blur-sm mix-blend-difference"
              >
                <span className="absolute inset-0 w-full h-full bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 group-hover:text-[#0A1118] transition-colors duration-500">Inquire</span>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <div className="md:hidden relative z-[60]">
            <MagneticButton strength={0.4}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors duration-500 ${
                  menuOpen 
                    ? "bg-white/10" 
                    : (scrolled ? "bg-white/10" : "bg-brand-navy mix-blend-difference invert")
                }`}
              >
                <span className={`w-5 h-[1.5px] bg-current transition-transform duration-500 ${menuOpen ? "rotate-45 translate-y-[3.5px] text-white" : "text-white"}`} />
                <span className={`w-5 h-[1.5px] bg-current transition-transform duration-500 ${menuOpen ? "-rotate-45 -translate-y-[3.5px] text-white" : "text-white"}`} />
              </button>
            </MagneticButton>
          </div>
        </div>
      </motion.nav>

      {/* 
        Awwwards-Level Sidebar Menu (Mobile & Tablet Focus)
        Slides in from the right with a dark architectural vibe.
      */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.4 } }}
            className="fixed inset-0 z-40 bg-[#0A1118]/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 w-full md:w-[480px] h-full bg-[#0A1118] border-l border-white/10 flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Menu Header Area (to push content down below the nav line) */}
              <div className="h-28 md:h-32 border-b border-white/5 flex items-end px-8 md:px-12 pb-6 md:pb-8">
                <span className="text-white/30 font-mono text-xs uppercase tracking-widest">Navigation</span>
              </div>

              {/* Main Links */}
              <div className="flex-1 flex flex-col justify-center px-8 md:px-12 gap-4 md:gap-6">
                {[{ name: "Home", path: "/" }, ...navLinks, { name: "Contact", path: "/contact" }].map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "100%" }}
                      transition={{ duration: 0.6, delay: 0.1 + (i * 0.05), ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link 
                        href={link.path}
                        className={`group flex items-center gap-4 text-[clamp(2.5rem,8vw,3.5rem)] font-heading font-extrabold tracking-tighter ${
                          pathname === link.path ? "text-white" : "text-white/40 hover:text-white"
                        } transition-colors duration-300`}
                      >
                        <span className="text-brand-teal text-sm font-mono font-normal opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                          0{i + 1}
                        </span>
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Footer / Direct Contact inside Menu */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 md:p-12 border-t border-white/5 bg-white/[0.02]"
              >
                <span className="text-white/30 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">Direct Desk</span>
                <a href="tel:+919840396462" className="text-white hover:text-brand-teal transition-colors font-bold text-xl block mb-2">+91 98403 96462</a>
                <a href="mailto:hello@visttaglass.com" className="text-white/50 hover:text-brand-teal transition-colors text-sm">hello@visttaglass.com</a>
              </motion.div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
