"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Leadership() {
  const [selectedImage, setSelectedImage] = useState("/President.jpeg");

  return (
    <section id="leadership" className="py-24 bg-black text-white px-8">
      <h2 className="text-4xl font-bold text-red-500 text-center mb-16">
        Leadership
      </h2>

      <div className="max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-900 rounded-xl overflow-hidden 
                     border border-zinc-800 
                     hover:border-red-500 
                     hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] 
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

              {/* Thumbnail Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedImage("/President.jpeg")}
                  className="border-2 border-transparent hover:border-red-500 rounded-lg overflow-hidden transition"
                >
                  <Image
                    src="/President.jpeg"
                    alt="President"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>

                <button
                  onClick={() => setSelectedImage("/Navarasa.jpg")}
                  className="border-2 border-transparent hover:border-red-500 rounded-lg overflow-hidden transition"
                >
                  <Image
                    src="/Navarasa.jpg"
                    alt="Navarasa Event"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>
                <button
                  onClick={() => setSelectedImage("/abhyuday.jpeg")}
                  className="border-2 border-transparent hover:border-red-500 rounded-lg overflow-hidden transition"
                >
                  <Image
                    src="/abhyuday.jpeg"
                    alt="abyuday department"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - Content */}
            <div>
              <h3 className="text-2xl font-bold mb-2">
                President, Taaleem Club (2025–26)
              </h3>

              <p className="text-red-400 font-medium mb-6">
                Theatre Club under Abhyuday Department
              </p>

              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed list-disc list-inside">
                <li>
                  Led overall coordination and execution of theatre events under the department.
                </li>
                <li>
                  Organized and hosted multiple intra- and inter-college performances and cultural programs.
                </li>
                <li>
                  Served as a core organizer of Navarasa, a flagship theatre event of the inter-college fest Incridea.
                </li>
                <li>
                  Managed cross-functional teams, delegated responsibilities, and ensured smooth event operations.
                </li>
                <li>
                  Strengthened leadership, team coordination, and event management capabilities.
                </li>
              </ul>
            </div>

          </div>
        </motion.div>
        {/* ================= CULTURAL COMMITTEE SECTION ================= */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-900 rounded-xl overflow-hidden 
                     border border-zinc-800 
                     hover:border-red-500 
                     hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] 
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

              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed list-disc list-inside">
                <li>Served as an active member of the Cultural Committee for three consecutive years.</li>
                <li>Assisted in event planning, coordination, and on-ground execution of fest activities.</li>
                <li>Collaborated with multiple teams to ensure seamless scheduling and operations.</li>
                <li>Contributed to smooth functioning of large-scale cultural events through effective communication and teamwork.</li>
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>




  );
}