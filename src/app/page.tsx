"use client";
import Banner from "@/app/Components/Banner";
// import AboutUs from "@/app/Components/AboutUs";
import ServicesSection from "./Components/ServicesSection";
import PortfolioSection from "./Components/PortfolioSection";
import ContactSection from "./Components/ContactForm";
import MissionVissionSection from "./Components/Mission";
import TestimonialsSection from "./Components/TestimonialsSection";
import BlogSection from "./Components/BlogSection";
export default function Home() {
  return (
    <div>
      <Banner />
      <ServicesSection />
      <PortfolioSection />
      <MissionVissionSection />
      <TestimonialsSection />
      {/* <AboutUs /> */}
      <BlogSection />
      <ContactSection />
    </div>
  );
}
