"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 30% scroll
      const scrollThreshold = document.documentElement.scrollHeight * 0.3;
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        >
          <Link
            href="#contact"
            className="flex items-center gap-3 px-6 py-3 bg-brand-navy/90 backdrop-blur-md text-white rounded-full shadow-[0_10px_40px_rgba(30,58,74,0.3)] border border-white/10 hover:bg-brand-teal transition-colors duration-300"
          >
            <Calendar className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm font-medium tracking-wide">Book Free Site Visit</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
