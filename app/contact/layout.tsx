import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Project Inquiries",
  description: "Contact Vistta Glass for premium architectural and interior glass solutions in Chennai. Submit your project brief for expert consultation and estimates.",
  alternates: {
    canonical: "https://visttaglass.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Vistta Glass",
    description: "Submit a project inquiry or contact our technical desk.",
    url: "https://visttaglass.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Vistta Glass",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9840396462",
        contactType: "customer service",
        email: "sales@visttaglass.com",
        availableLanguage: ["English", "Tamil"]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
