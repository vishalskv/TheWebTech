"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InlineWidget } from "react-calendly";
import Colors from "@/app/Constant/colors";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  const slides = [
    {
      image: "/images/banner-1.jpg",
      title: "Hello, I'm Vishalkumar",
      description: "I build fast, responsive web apps using React & Next.js.",
    },
    {
      image: "/images/banner-2.jpg",
      title: "Creative Web Developer",
      description: "Delivering clean, scalable, and modern UI solutions.",
    },
    {
      image: "/images/photo.avif",
      title: "Build with Performance",
      description: "Optimized user experience with fast-loading interfaces.",
    },
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % slides.length);
    }, 8000); // every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-no-repeat bg-center bg-cover w-full h-full transition-opacity duration-1000 ease-in-out z-[-2] ${
            i === bgIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[-1]" />

      {/* Slide Content */}
      <div className="relative text-center z-10 px-6 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span
                style={{ color: Colors?.secondary }}
                className={`text-[${Colors?.primary}]`}
              >
                {slides[bgIndex].title}
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-6">
              {slides[bgIndex].description}
            </p>
            <motion.button
              style={{ backgroundColor: Colors?.primary }}
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-80 transition"
            >
              Book a Call
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Calendly Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl shadow-lg w-full max-w-3xl relative overflow-hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-xl font-bold hover:text-red-500 transition"
            >
              &times;
            </button>
            <InlineWidget
              url="https://calendly.com/vishal-skv-21"
              styles={{ height: "600px" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
