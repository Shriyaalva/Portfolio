"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl text-center"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-red-500 mb-10">
          About Me
        </h2>

        <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 font-light">
          I’m a B.Tech Information Science student passionate about building 
          intelligent systems, AI-driven applications, and scalable web platforms.
          I focus on solving real-world problems through technology while continuously 
          improving my leadership and collaborative skills.
        </p>
      </motion.div>
    </section>
  );
}