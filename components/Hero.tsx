"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center px-8 overflow-hidden">
      
      {/* Red Background Circles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-600 rounded-full opacity-40 blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-500 rounded-full opacity-30 blur-2xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full pt-20">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I’m <span className="text-red-500">Shriya Alva</span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-extrabold text-red-500 mb-6">
            ML & Full-Stack Developer
          </h2>

          <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
            B.Tech Information Science student passionate about building
            intelligent systems, scalable web applications, and real-world
            AI-powered solutions.
          </p>

          <div className="flex gap-6 text-2xl mb-8">
            <a
              href="https://github.com/Shriyaalva/"
              target="_blank"
              className="hover:text-red-500 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shriya-alva/"
              target="_blank"
              className="hover:text-red-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-block bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105"
          >
            Resume
          </a>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Large Red Circle Behind Image */}
          <div className="absolute w-96 h-96 bg-red-600 rounded-full opacity-30"></div>

          <Image
            src="/profile.jpeg"
            alt="Shriya Alva"
            width={420}
            height={420}
            className="relative z-10 object-cover rounded-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}