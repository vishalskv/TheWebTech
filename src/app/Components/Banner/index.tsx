"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
const slides = [
  {
    image: "/images/banner-1.jpg",
    heading: "I’m Vishalkumar, a Web Developer",
    subtext: "I build fast and responsive websites for businesses.",
  },
  {
    image: "/images/banner-2.jpg",
    heading: "Freelance Web Designer",
    subtext: "Creating beautiful UI that converts visitors into clients.",
  },
  {
    image: "/images/photo.avif",
    heading: "React.js & Next.js Expert",
    subtext: "Modern frontend solutions for growing startups.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center transition-all duration-1000 mt-[60px]"
      style={{
        backgroundImage: `url(${slide.image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="w-full min-h-[600px] bg-black/70 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            key={current} // triggers animation on change
            className="text-white max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {slide.heading}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              {slide.subtext}
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Hire Me
            </button>
          </motion.div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl shadow-lg w-full max-w-3xl relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-xl font-bold hover:text-red-500 transition"
            >
              &times;
            </button>

            {/* Calendly Inline Widget */}
            <InlineWidget
              url="https://calendly.com/vishalkumar" // change this
              styles={{ height: "600px" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
