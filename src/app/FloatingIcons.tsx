"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";

const ICONS = [FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaNodeJs];

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const FloatingIcons = () => {
  type FloatingIcon = {
    Icon: React.ElementType;
    left: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
  };
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  useEffect(() => {
    const newIcons = Array.from({ length: 25 }).map(() => {
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      return {
        Icon,
        left: getRandom(0, 100), // % from left
        size: getRandom(20, 40), // px
        duration: getRandom(10, 25), // seconds
        delay: getRandom(0, 10), // seconds
        opacity: getRandom(0.2, 0.5),
      };
    });
    setIcons(newIcons);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 overflow-hidden">
      {icons.map((item, index) => {
        const { Icon, left, size, duration, delay, opacity } = item;
        return (
          <motion.div
            key={index}
            initial={{ y: "-10%" }}
            animate={{ y: "110%" }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 w-full h-full"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              opacity,
              color: "#ffffff22",
            }}
          >
            <Icon />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingIcons;
