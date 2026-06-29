import { Metadata } from "next";

import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Vistta Glass",
  description: "Learn about Vistta Glass, Chennai's premier architectural glass studio. We blend precision engineering with premium aesthetics.",
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <Footer />
    </>
  );
}
