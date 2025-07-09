"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    role: "Startup Founder",
    message:
      "Vishalkumar was fantastic to work with. He delivered a modern, fast, and responsive website that helped us convert more leads.",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager",
    message:
      "Highly professional, communicative, and always met deadlines. His UI skills are top-notch. Highly recommend.",
  },
  {
    name: "David Kim",
    role: "Creative Director",
    message:
      "Our new portfolio site is stunning — smooth animations, fast performance, and mobile friendly. Excellent work!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4 italic">{item.message}</p>
              <div className="font-semibold text-white">{item.name}</div>
              <div className="text-sm text-gray-400">{item.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
