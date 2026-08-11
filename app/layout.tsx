import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visttaglass.com"),
  title: {
    default: "Vistta Glass | Premium Architectural Glass Solutions in Chennai",
    template: "%s | Vistta Glass"
  },
  description: "Vistta Glass is a leading interior and architectural glass solutions provider in Chennai. We specialize in aluminium windows, uPVC windows, glass doors, toughened glass, shower cubicles, partitions, office cubicles, railings, and mirrors.",
  keywords: ["architectural glass Chennai", "toughened glass", "aluminium windows", "uPVC windows", "glass partitions", "Vistta Glass", "premium glass installations"],
  authors: [{ name: "Vistta Glass" }],
  creator: "Vistta Glass",
  publisher: "Vistta Glass",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  openGraph: {
    title: "Vistta Glass | Premium Architectural Glass Solutions",
    description: "Precision crafted glass for modern spaces in Chennai and Tamil Nadu.",
    url: "https://visttaglass.com",
    siteName: "Vistta Glass",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vistta Glass - Premium Architectural Glass Solutions",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vistta Glass | Premium Architectural Glass Solutions",
    description: "Precision crafted glass for modern spaces in Chennai and Tamil Nadu.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className={`${outfit.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Vistta Glass",
                "url": "https://visttaglass.com",
                "logo": "https://visttaglass.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-9840396462",
                  "contactType": "customer service",
                  "email": "sales@visttaglass.com",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Tamil"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Vistta Glass",
                "image": "https://visttaglass.com/logo.png",
                "@id": "https://visttaglass.com/#localbusiness",
                "url": "https://visttaglass.com",
                "telephone": "+91-9840396462",
                "email": "sales@visttaglass.com",
                "description": "Vistta Glass is a leading interior and architectural glass solutions provider in Chennai. We specialize in aluminium windows, uPVC windows, glass doors, toughened glass, shower cubicles, partitions, office cubicles, railings, and mirrors.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Door No.49, Old, Maddox St, Periyamedu, Choolai",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "postalCode": "600112",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 13.0827,
                  "longitude": 80.2707
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "priceRange": "$$$"
              }
            ])
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
