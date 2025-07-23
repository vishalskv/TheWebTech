"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Colors from "@/app/Constant/colors";
export default function AboutSection() {
  const teamMembers = [
    {
      name: "Vishalkumar",
      image: "/images/profile.jpg",
      description1:
        "I’m Vishalkumar, a frontend developer specializing in building modern, responsive, and user-friendly websites using technologies like React, Next.js, and Tailwind CSS.",
      description2:
        "With a strong focus on performance and clean UI, I help businesses and startups create fast and effective digital experiences.",
      reverse: false,
    },
    {
      name: "Praveenkumar",
      image: "/images/praveen.jpg",
      description1:
        "I’m Praveenkumar, a frontend developer specializing in building modern, responsive, and user-friendly websites using technologies like React, Next.js, and Tailwind CSS.",
      description2:
        "With a strong focus on performance and clean UI, I help businesses and startups create fast and effective digital experiences.",
      reverse: true,
    },
    {
      name: "Ranjith",
      image: "/images/ranjith.jpg",
      description1:
        "I’m Ranjith, a frontend developer specializing in building modern, responsive, and user-friendly websites using technologies like React, Next.js, and Tailwind CSS.",
      description2:
        "With a strong focus on performance and clean UI, I help businesses and startups create fast and effective digital experiences.",
      reverse: false,
    },
  ];

  return (
    <section className="py-16  text-gray-100 ">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10"
        >
          {/* Conditional Image Position */}
          {!member.reverse ? (
            <>
              <motion.div
                className="flex lg:justify-start justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={350}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>

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
                  {member.description1}
                </p>
                <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                  {member.description2}
                </p>
                <Link
                  href="/contact"
                  style={{ backgroundColor: Colors?.primary }}
                  className={`inline-block text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition`}
                >
                  Contact Me
                </Link>
              </motion.div>
            </>
          ) : (
            <>
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
                  {member.description1}
                </p>
                <p className="text-gray-400 text-base md:text-lg mb-6 leading-relaxed">
                  {member.description2}
                </p>
                <Link
                  href="/contact"
                  className={`inline-block bg-[${Colors?.primary}] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition`}
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                className="flex lg:justify-end justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={350}
                  height={350}
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
