import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vistta Glass | Premium Architectural Glass Solutions in Chennai",
  description: "Vistta Glass is a leading interior and architectural glass solutions provider in Chennai. We specialize in aluminium windows, uPVC windows, glass doors, toughened glass, shower cubicles, partitions, office cubicles, railings, and mirrors.",
  openGraph: {
    title: "Vistta Glass | Premium Architectural Glass Solutions",
    description: "Precision crafted glass for modern spaces in Chennai and Tamil Nadu.",
    url: "https://visttaglass.com",
    siteName: "Vistta Glass",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistta Glass | Premium Architectural Glass Solutions",
    description: "Precision crafted glass for modern spaces in Chennai and Tamil Nadu.",
  },
  alternates: {
    canonical: "https://visttaglass.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Vistta Glass",
              image: "https://visttaglass.com/logo.png",
              "@id": "https://visttaglass.com",
              url: "https://visttaglass.com",
              telephone: "+91-9840396462",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Door No.49, Old, Maddox St, Periyamedu, Choolai",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600112",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.0827,
                longitude: 80.2707,
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <div className="noise-overlay" />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
