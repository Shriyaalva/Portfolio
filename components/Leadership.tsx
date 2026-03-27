"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Leadership() {
  const [selectedImage, setSelectedImage] = useState("/President.jpeg");

  return (
    <section
      id="leadership"
      className="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 transition-colors duration-300"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-indigo-500 text-center mb-16">
        Leadership
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* ================= FIRST CARD ================= */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                     border border-gray-100 dark:border-gray-700
                     hover:border-indigo-400 
                     hover:shadow-xl
                     transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-10 p-8 items-center">
            
            {/* LEFT SIDE - Image Switcher */}
            <div className="flex flex-col items-center">
              
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <Image
                  src={selectedImage}
                  alt="Leadership"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover"
                />
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedImage("/President.jpeg")}
                  className="border-2 border-transparent hover:border-indigo-500 rounded-lg overflow-hidden transition"
                >
                  <Image src="/President.jpeg" alt="President" width={80} height={80} />
                </button>

                <button
                  onClick={() => setSelectedImage("/Navarasa.jpg")}
                  className="border-2 border-transparent hover:border-indigo-500 rounded-lg overflow-hidden transition"
                >
                  <Image src="/Navarasa.jpg" alt="Navarasa" width={80} height={80} />
                </button>

                <button
                  onClick={() => setSelectedImage("/abhyuday.jpeg")}
                  className="border-2 border-transparent hover:border-indigo-500 rounded-lg overflow-hidden transition"
                >
                  <Image src="/abhyuday.jpeg" alt="Abhyuday" width={80} height={80} />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div>
              <h3 className="text-2xl font-bold mb-2">
                President, Taaleem Club (2025–26)
              </h3>

              <p className="text-indigo-500 font-medium mb-6">
                Theatre Club under Abhyuday Department
              </p>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>Led overall coordination and execution of theatre events.</li>
                <li>Organized intra- and inter-college performances.</li>
                <li>Core organizer of Navarasa at Incridea fest.</li>
                <li>Managed teams and delegated responsibilities.</li>
                <li>Strengthened leadership and event management skills.</li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* ================= SECOND CARD ================= */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                     border border-gray-100 dark:border-gray-700
                     hover:border-indigo-400 
                     hover:shadow-xl
                     transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-10 p-8 items-center">

            {/* Image */}
            <div className="flex justify-center">
              <Image
                src="/cultural-1.jpg"
                alt="Cultural Committee"
                width={400}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Member of Cultural Committee
              </h3>

              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
                <li>Active member for three consecutive years.</li>
                <li>Assisted in planning and execution of events.</li>
                <li>Collaborated across teams for smooth operations.</li>
                <li>Ensured seamless coordination during fests.</li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}