"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    title: "Why You Need a Developer Portfolio",
    content: "Long article content for Blog 1...",
  },
  {
    id: 2,
    title: "Top Tools I Use as a Freelancer",
    content: "Detailed content for Blog 2...",
  },
  {
    id: 3,
    title: "How to Build Faster Sites with Next.js",
    content: "Full guide for Blog 3...",
  },
];

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="text-center text-white py-20">Blog not found</div>;
  }

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <p className="mb-10 text-gray-400">Blog ID: {id}</p>
        <article className="text-lg leading-relaxed text-gray-300 space-y-6">
          <p>{blog.content}</p>
        </article>
        <div className="mt-10">
          <Link href="/blogs" className="text-blue-400 hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
