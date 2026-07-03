import { notFound } from "next/navigation";
import { Metadata } from "next";

import Footer from "@/components/Footer";
import { serviceCategories } from "@/data/services";
import CategoryAccordion from "@/components/CategoryAccordion";

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = serviceCategories.find((c) => c.slug === resolvedParams.categorySlug);
  
  if (!category) {
    return { title: "Not Found" };
  }

  return {
    title: `${category.title} | Vistta Glass`,
    description: category.description,
    openGraph: {
      title: category.title,
      description: category.description,
      images: [category.image],
    },
  };
}

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }> }) {
  const resolvedParams = await params;
  const category = serviceCategories.find((c) => c.slug === resolvedParams.categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <main className="w-full pt-40 md:pt-56 pb-24 bg-brand-pastel min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Header */}
          <div className="max-w-4xl mb-16 px-2">
            <span className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan mb-8">
              Category Solutions
            </span>
            <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-heading font-extrabold text-brand-navy leading-[0.95] tracking-tight">
              {category.title.split(' ')[0]} <br /> <span className="text-brand-gold">{category.title.split(' ').slice(1).join(' ')}.</span>
            </h1>
            <p className="mt-8 text-[clamp(1.2rem,2vw,1.5rem)] text-brand-navy/70 max-w-2xl font-light leading-relaxed">
              {category.description} Explore our comprehensive range of specialized solutions below.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-24">
            <h2 className="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-silver mb-8 pl-4">
              Select a solution to view details
            </h2>
            <CategoryAccordion services={category.services} />
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
