"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  { id: 1, video: "/videos/1758908431.MP4" },
  { id: 2, video: "/videos/1759252963.MP4" },
  { id: 3, video: "/videos/1762441292.MP4" },
];

function LazyVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "400px" }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [shouldLoad]);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-brand-navy/5 animate-pulse">
          <div className="w-8 h-8 rounded-full border-2 border-brand-navy/20 border-t-brand-cyan animate-spin" />
        </div>
      )}
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        muted
        loop
        playsInline
        preload={shouldLoad ? "auto" : "none"}
        onCanPlay={() => setIsLoaded(true)}
        className={`absolute inset-0 z-10 w-full h-full object-cover transition-all duration-[1.2s] ease-[0.32,0.72,0,1] group-hover:scale-105 will-change-transform ${
          isLoaded ? "opacity-90 group-hover:opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}

export default function FeaturedProjects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted scroll to fit 3 items + 1 CTA perfectly
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section id="projects" className="w-full bg-brand-pastel">
      
      {/* Header content - Scrolls Normally */}
      <div className="container mx-auto px-6 md:px-12 pt-32 md:pt-48 pb-12 md:pb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-6">
              Selected Work
            </span>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-heading font-extrabold text-brand-navy leading-[1.05] tracking-tighter">
              Transparent <br /> <span className="text-brand-gold">Brilliance.</span>
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="mt-8 md:mt-0 flex items-center gap-3 text-brand-navy uppercase tracking-[0.1em] text-xs font-bold group"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-brand-navy after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-500 pb-1">
              View Complete Portfolio
            </span>
            <div className="w-8 h-8 rounded-full border border-brand-navy/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:border-brand-teal transition-colors duration-500">
              <ArrowRight className="w-3 h-3 group-hover:text-white transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery - Pins and scrolls */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative w-[85vw] md:w-[60vw] lg:w-[45vw] h-[55vh] md:h-[65vh] overflow-hidden rounded-[2rem] bg-brand-pastelCard p-2 ring-1 ring-brand-navy/5 shadow-sm block hover:ring-brand-cyan/50 transition-all duration-700 shrink-0"
              >
                <div className="relative w-full h-full block rounded-[1.5rem] overflow-hidden bg-brand-navy/5">
                  <LazyVideo src={project.video} />
                </div>
              </div>
            ))}

            {/* End of Gallery CTA */}
            <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[55vh] md:h-[65vh] flex items-center justify-center shrink-0 pr-6 md:pr-12">
              <Link href="/projects" className="group flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-full border border-brand-navy/10 flex items-center justify-center bg-brand-navy/5 group-hover:bg-brand-cyan group-hover:border-brand-cyan transition-colors duration-500">
                  <ArrowRight className="w-8 h-8 text-brand-navy group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl md:text-5xl font-heading font-extrabold text-brand-navy group-hover:text-brand-cyan transition-colors duration-500">
                  View Portfolio
                </h3>
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
