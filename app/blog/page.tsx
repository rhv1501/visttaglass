import { Metadata } from "next";

import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Articles | Vistta Glass",
  description: "Read the latest insights on architectural glass, interior design trends, and engineering solutions.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Frameless Acoustic Partitions in Modern Offices",
    excerpt: "How modern workspaces are balancing open-plan collaboration with the need for acoustic privacy using advanced glass technology.",
    category: "Architecture",
    date: "Oct 12, 2026",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Understanding U-Values in uPVC vs Aluminium Windows",
    excerpt: "A comprehensive guide for architects and builders on selecting the right thermal profiles for coastal climates like Chennai.",
    category: "Engineering",
    date: "Sep 28, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Designing the Perfect Minimalist Shower Cubicle",
    excerpt: "Hardware selection, glass thickness, and layout considerations for luxury residential bathrooms.",
    category: "Interior Design",
    date: "Sep 15, 2026",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
  }
];

export default function BlogPage() {
  return (
    <>

      <main className="w-full pt-32 pb-24 bg-brand-white min-h-screen">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-4xl mb-24">
            <span className="text-brand-silver text-sm uppercase tracking-[0.2em] mb-4 block">Insights</span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-brand-navy leading-tight">
              Blog &amp; <span className="text-brand-teal">Articles.</span>
            </h1>
          </div>

          {/* Featured Post (First item as featured) */}
          {blogPosts.length > 0 && (
            <div className="mb-24 group cursor-pointer">
              <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm mb-8">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-brand-white px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-brand-navy">
                  {blogPosts[0].category}
                </div>
              </div>
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 text-brand-silver text-sm mb-4">
                  <span>{blogPosts[0].date}</span>
                </div>
                <h2 className="text-4xl font-heading font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-xl text-brand-navy/70 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-navy font-bold tracking-wider uppercase text-sm">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-16 border-t border-brand-grey/30">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider text-brand-navy">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-brand-silver text-xs mb-3">
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-navy/70 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-teal font-bold tracking-wider uppercase text-xs">
                  Read Article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
