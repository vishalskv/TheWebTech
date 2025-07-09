import Navbar from "@/app/Components/Navbar";
import Banner from "@/app/Components/Banner";
import AboutUs from "@/app/Components/AboutUs";
import ServicesSection from "./Components/ServicesSection";
import PortfolioSection from "./Components/PortfolioSection";
import ContactSection from "./Components/ContactForm";
import Footer from "./Components/Footer";
import TestimonialsSection from "./Components/TestimonialsSection";
import BlogSection from "./Components/BlogSection";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
