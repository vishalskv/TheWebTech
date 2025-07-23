import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" text-white py-10 border-t border-t-amber-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name or Logo */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Vishalkumar. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-gray-300">
          <Link
            href="https://github.com/vishalskv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishalkumar-p-s-721995286"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:vishal.skv.21@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
