"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AgriBot",
    description: `AI-powered chatbot for crop selection and disease prediction using XGBoost and ResNet.
Developed an AI-powered agricultural assistant for crop recommendation and plant disease detection.
Implemented XGBoost for crop prediction and ResNet CNN for image-based disease classification.
Tech: Python, XGBoost, ResNet, Django, HTML, CSS, JavaScript.`,
    image: "/AGRIBOT.png",
    github: "https://github.com/Shriyaalva/agribot",
  },
  {
    title: "Smart Placement Chatbot",
    description: `Web-based chatbot system with automated notifications and student support features.
A web-based placement tracking system that notifies students when a company’s registration deadline is approaching or has ended.
It helps students avoid missing application deadlines and provides a centralized platform to track placement drives.
Tech: Python, JavaScript, REST APIs, HTML, CSS.`,
    image: "/Chatbot.png",
    github:
      "https://github.com/Shriyaalva/Smart-Placement-Deadline-Tracker",
  },
  {
    title: "Canteen Queue Monitoring",
    description: `YOLOv8-based computer vision system to detect crowd count and estimate wait times.
Automated Queue Monitoring System that analyzes live CCTV footage to dynamically estimate waiting time.
Tech: Python, YOLOv8, OpenCV.`,
    image: "/Canteen.png",
    github: "",
    status: "Ongoing Project",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white px-8">
      <h2 className="text-4xl font-bold text-red-500 text-center mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group bg-zinc-900 rounded-xl overflow-hidden
                       border border-zinc-800
                       hover:border-red-500
                       hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]
                       transition-all duration-300"
          >
            <div className="p-6">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 transition group-hover:text-red-500">
                {project.title}
              </h3>

              {/* Image */}
              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={0}
                  height={0}
                   sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                  className="rounded-lg object-cover w-full h-56 transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 whitespace-pre-line text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Status */}
              {project.status && (
                <p className="text-sm text-red-400 mb-4">
                  {project.status}
                </p>
              )}

              {/* GitHub Icon */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl transition group-hover:text-red-500"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}