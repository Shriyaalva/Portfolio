"use client";

import { useState } from "react";

type Skill = {
  name: string;
  icon: string;
  color: string;
};

type Category = {
  label: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    label: "Languages",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "hover:border-yellow-400 hover:shadow-yellow-100 dark:hover:shadow-yellow-900/30",
      },
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "hover:border-red-400 hover:shadow-red-100 dark:hover:shadow-red-900/30",
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        color: "hover:border-blue-400 hover:shadow-blue-100 dark:hover:shadow-blue-900/30",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "hover:border-yellow-300 hover:shadow-yellow-100 dark:hover:shadow-yellow-900/30",
      },
    ],
  },
  {
    label: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "hover:border-cyan-400 hover:shadow-cyan-100 dark:hover:shadow-cyan-900/30",
      },
      {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "hover:border-orange-400 hover:shadow-orange-100 dark:hover:shadow-orange-900/30",
      },
      {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "hover:border-blue-400 hover:shadow-blue-100 dark:hover:shadow-blue-900/30",
      },
    ],
  },
  {
    label: "Backend & DB",
    skills: [
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        color: "hover:border-green-500 hover:shadow-green-100 dark:hover:shadow-green-900/30",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "hover:border-green-400 hover:shadow-green-100 dark:hover:shadow-green-900/30",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        color: "hover:border-blue-500 hover:shadow-blue-100 dark:hover:shadow-blue-900/30",
      },
    ],
  },
  {
  label: "CN",
  skills: [
    {
      name: "DNS",
      icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png",
      color: "hover:border-blue-400 hover:shadow-blue-100 dark:hover:shadow-blue-900/30",
    },
    {
      name: "HTTP",
      icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
      color: "hover:border-orange-400 hover:shadow-orange-100 dark:hover:shadow-orange-900/30",
    },
    {
      name: "TCP/IP",
      icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png",
      color: "hover:border-green-400 hover:shadow-green-100 dark:hover:shadow-green-900/30",
    },
    {
      name: "SSL/TLS",
      icon: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
      color: "hover:border-purple-400 hover:shadow-purple-100 dark:hover:shadow-purple-900/30",
    },
    {
      name: "Networking Fundamentals",
      icon: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
      color: "hover:border-cyan-400 hover:shadow-cyan-100 dark:hover:shadow-cyan-900/30",
    },
  ],
},
  {
    label: "Tools",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "hover:border-orange-500 hover:shadow-orange-100 dark:hover:shadow-orange-900/30",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "hover:border-gray-500 hover:shadow-gray-100 dark:hover:shadow-gray-700/30",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "hover:border-blue-500 hover:shadow-blue-100 dark:hover:shadow-blue-900/30",
      },
    ],
  },
];

const ALL_LABEL = "All";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(ALL_LABEL);

  const categories = [ALL_LABEL, ...skillCategories.map((c) => c.label)];

  const visibleSkills =
    activeCategory === ALL_LABEL
      ? skillCategories.flatMap((c) => c.skills)
      : skillCategories.find((c) => c.label === activeCategory)?.skills ?? [];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My <span className="text-indigo-500">Skills</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Technologies and tools I work with to build intelligent, scalable systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-500 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/40"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center justify-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl border-2 border-transparent shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default ${skill.color}`}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Currently Learning */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-sm text-gray-400 dark:text-gray-500 font-medium uppercase tracking-widest">
            Currently Exploring
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["LangChain", "LLMs", "Node.js", "Docker"].map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold border border-indigo-100 dark:border-indigo-800"
              >
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}