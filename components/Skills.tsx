"use client";

import { motion } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiC, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  // Programming
  { name: "Java", icon: <FaJava />, category: "Programming" },
  { name: "Python", icon: <FaPython />, category: "Programming" },
  { name: "C", icon: <SiC />, category: "Programming" },

  // Web
  { name: "React", icon: <FaReact />, category: "Web Development" },
  { name: "HTML", icon: <FaHtml5 />, category: "Web Development" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Web Development" },
  { name: "JavaScript", icon: <FaJs />, category: "Web Development" },

  // Tools
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools" },

  // Databases
  { name: "MongoDB", icon: <SiMongodb />, category: "Databases" },
  { name: "MySQL", icon: <SiMysql />, category: "Databases" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-950 text-white px-8">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-16">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="group bg-zinc-900 p-6 rounded-xl flex flex-col items-center justify-center 
                       border border-zinc-800 
                       hover:border-red-500 
                       hover:shadow-[0_0_25px_rgba(239,68,68,0.3)] 
                       transition-all duration-300"
          >
            <div className="text-4xl mb-4 text-gray-300 group-hover:text-red-500 transition">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-gray-300 group-hover:text-white transition">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}