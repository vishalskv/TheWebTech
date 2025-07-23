"use client";
import Banner from "@/app/Components/Banner";
import AboutUs from "@/app/Components/AboutUs";
import ServicesSection from "./Components/ServicesSection";
import PortfolioSection from "./Components/PortfolioSection";
import ContactSection from "./Components/ContactForm";

import TestimonialsSection from "./Components/TestimonialsSection";
import BlogSection from "./Components/BlogSection";
export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
