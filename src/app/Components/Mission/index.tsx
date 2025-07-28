"use client";
import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-20  text-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Mission & Vision
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12 text-base md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We're a group of passionate young developers on a journey to build
          clean, modern, and impactful web solutions for startups, creators, and
          businesses.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4 text-blue-500">
              <Lightbulb size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Our Mission
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To empower businesses and individuals through user-centric,
              high-performing websites crafted with creativity, care, and clean
              code — all while learning and growing as a team.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4 text-blue-500">
              <Target size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Our Vision
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To become a trusted tech partner for startups and small businesses
              by building a brand known for quality, reliability, and innovation
              — led by the next generation of frontend talent.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
