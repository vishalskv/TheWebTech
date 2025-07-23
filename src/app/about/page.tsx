"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Vishalkumar",
    role: "Frontend Developer",
    description:
      "Focused on smooth UI/UX, clean code, and modern responsive designs using React.js and Next.js.",
    image: "/images/profile.jpg",
  },
  {
    name: "Praveen Kumar",
    role: "Fullstack Developer",
    description:
      "Specializes in building scalable backend systems and optimized fullstack applications with performance in mind.",
    image: "/images/praveen.jpg",
  },
  {
    name: "Ranjith",
    role: "UI/UX Developer",
    description:
      "Passionate about pixel-perfect designs and delivering interactive, high-conversion websites.",
    image: "/images/ranjith.jpg",
  },
];

export default function AboutPage() {
  return (
    <section className="py-20 min-h-screen  text-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold"
        >
          Meet Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto"
        >
          We are a team of three passionate developers — Vishalkumar, Praveen
          Kumar, and Ranjith — committed to crafting modern, fast, and
          responsive websites for businesses and startups.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl text-center shadow hover:shadow-lg transition"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full border-4 border-blue-600 shadow-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              {member.name}
            </h3>
            <p className="text-blue-400 font-medium mb-3">{member.role}</p>
            <p className="text-gray-300 text-sm">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
