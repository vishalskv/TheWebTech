"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  {
    name: "Vishalkumar",
    image: "/images/profile.jpg",
    description1:
      "Frontend developer building smooth, modern interfaces with React and Next.js.",
    description2:
      "Focused on performance, pixel perfection, and delightful user experiences.",
  },
  {
    name: "Praveenkumar",
    image: "/images/praveen.jpg",
    description1:
      "Frontend enthusiast turning ideas into responsive, scalable UI.",
    description2:
      "Always pushing boundaries with clean code and design-first mindset.",
  },
  {
    name: "Ranjith",
    image: "/images/ranjith.jpg",
    description1:
      "Passionate frontend engineer focused on mobile-first, accessible web.",
    description2:
      "Translating vision into code that performs and engages users.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#020617] to-[#1e293b] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Team Behind the Brand
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          loop
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg transition hover:scale-[1.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-lg mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mb-1 px-2">
                  {member.description1}
                </p>
                <p className="text-gray-400 text-xs px-4">
                  {member.description2}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
