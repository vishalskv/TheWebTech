"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Why You Need a Developer Portfolio",
    excerpt:
      "A strong portfolio helps you showcase your skills, stand out to clients, and get hired faster. Here's what to include...",
    slug: "/blog/portfolio-importance",
  },
  {
    title: "Top 5 Tools I Use as a Freelancer",
    excerpt:
      "These tools help me stay organized, write cleaner code, and deliver faster. Let me share my favorite stack...",
    slug: "/blog/freelance-tools",
  },
  {
    title: "How I Build Fast Websites with Next.js",
    excerpt:
      "I use Next.js, Tailwind, and Vercel to create blazing-fast websites. Here's my development flow...",
    slug: "/blog/nextjs-performance",
  },
];

export default function BlogSection() {
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
          From The Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
              <Link
                href={post.slug}
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
