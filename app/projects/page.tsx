"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

// Expanded data with more videos from the folder to demonstrate infinite scrolling
const projectsData = [
  { id: 1, video: "/videos/1758908431.MP4" },
  { id: 2, video: "/videos/1759252963.MP4" },
  { id: 3, video: "/videos/1762441292.MP4" },
  { id: 4, video: "/videos/1762892977.MP4" },
  { id: 5, video: "/videos/1763047876.MP4" },
  { id: 6, video: "/videos/1763113473.MP4" },
  { id: 7, video: "/videos/1763458182.MP4" },
  { id: 8, video: "/videos/1763636051.MP4" },
  { id: 9, video: "/videos/1768541285.MP4" },
  { id: 10, video: "/videos/1769265586.MP4" },
  { id: 11, video: "/videos/1775759119.MP4" },
  { id: 12, video: "/videos/1776077384.MP4" },
  { id: 13, video: "/videos/1776078035.MP4" },
  { id: 14, video: "/videos/1776260450.MP4" },
  { id: 15, video: "/videos/1776364727.MP4" },
  { id: 16, video: "/videos/1781002276.MP4" },
  { id: 17, video: "/videos/1781002325.MP4" },
  { id: 18, video: "/videos/1781002409.MP4" },
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
      videoRef.current.play().catch(() => {
        // Ignore auto-play errors
      });
    }
  }, [shouldLoad]);

  return (
    <>
      {/* Loading Skeleton / Spinner */}
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

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setVisibleCount(1);
    }
  }, []);

  const loadMore = useCallback(() => {
    const step = typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 3;
    setVisibleCount((prev) => Math.min(prev + step, projectsData.length));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "400px" } // Balanced margin so mobile doesn't trigger multiple loads at once
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [loadMore]);

  const visibleProjects = projectsData.slice(0, visibleCount);

  return (
    <>
      <main className="w-full pt-40 md:pt-56 pb-24 bg-brand-pastel min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mb-16 px-2">
            <span className="inline-block rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-8">
              Portfolio
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-extrabold text-brand-navy leading-[0.95] tracking-tight">
              Selected <span className="text-brand-cyan">Works</span>
            </h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <AnimatePresence>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="group relative rounded-[2rem] bg-brand-pastelCard p-2 ring-1 ring-brand-navy/5 shadow-sm block aspect-[4/5] hover:ring-brand-cyan/50 transition-all duration-700"
                >
                  <div className="relative w-full h-full block rounded-[1.5rem] overflow-hidden bg-brand-navy/5">
                    <LazyVideo src={project.video} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Infinite Scroll Trigger */}
          {visibleCount < projectsData.length && (
            <div ref={loadMoreRef} className="w-full h-32 flex items-center justify-center mt-8">
              {/* Optional subtle loading indicator if wanted */}
              <div className="w-8 h-8 rounded-full border-2 border-brand-navy/20 border-t-brand-cyan animate-spin" />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
