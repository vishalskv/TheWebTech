"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        {/* Left: Image with animation */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Vishalkumar"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right: Text Content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
            I’m Vishalkumar, a frontend developer specializing in building
            modern, responsive, and user-friendly websites using technologies
            like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
            With a strong focus on performance and clean UI, I help businesses
            and startups create fast and effective digital experiences.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        {/* Left: Image with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
            I’m Praveenkumar, a frontend developer specializing in building
            modern, responsive, and user-friendly websites using technologies
            like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
            With a strong focus on performance and clean UI, I help businesses
            and startups create fast and effective digital experiences.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Right: Text Content with animation */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/praveen.jpg"
            alt="Praveen Kumar"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
        {/* Left: Image with animation */}
        <motion.div
          className="flex justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/ranjith.jpg"
            alt="Ranjith"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right: Text Content with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
            I’m Ranjith, a frontend developer specializing in building modern,
            responsive, and user-friendly websites using technologies like
            React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
            With a strong focus on performance and clean UI, I help businesses
            and startups create fast and effective digital experiences.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
