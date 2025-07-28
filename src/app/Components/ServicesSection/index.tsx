"use client";
import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  TrendingUp,
  Layers,
  Smartphone,
  Wrench,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Code size={32} />,
    title: "Web Development",
    description:
      "We build modern, scalable websites using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <Monitor size={32} />,
    title: "UI/UX Design",
    description:
      "Our team designs clean, intuitive, and user-centric interfaces with a mobile-first approach.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Performance Optimization",
    description:
      "We improve speed, accessibility, SEO, and Core Web Vitals for top-tier user experience.",
  },
  {
    icon: <Layers size={32} />,
    title: "Landing Pages",
    description:
      "We create high-converting landing pages tailored for product launches and campaigns.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Responsive Design",
    description:
      "Every layout we build is responsive and pixel-perfect across all devices.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Maintenance & Support",
    description:
      "We offer ongoing updates, bug fixes, and iterative improvements as your tech partner.",
  },
  {
    icon: <Users size={32} />,
    title: "Consulting",
    description:
      "We provide expert guidance on tech stacks, architecture, and project roadmaps for startups and businesses.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-gray-800 hover:border-blue-500 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
