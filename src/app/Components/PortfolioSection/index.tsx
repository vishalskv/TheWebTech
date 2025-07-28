"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    image: "/images/image-1.jpg",
    link: "https://clarion-three.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: "/images/image-2.jpg",
    link: "https://praveen-info.netlify.app/",
  },
  {
    title: "Landing Page",
    image: "/images/image-3.webp",
    link: "https://www.leadsynq.com/",
  },
  // {
  //   title: "Admin Dashboard",
  //   image: "/images/image-1.jpg",
  //   link: "https://admin-ui-demo.vercel.app",
  // },
];

export default function PortfolioSection() {
  return (
    <section className="py-20  text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group overflow-hidden rounded-xl bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
