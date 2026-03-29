"use client";

import Image from "next/image";

type Project = {
  title: string;
  description: string;
  details: string;
  image: string;
  tags: string[];
  github?: string;
  ongoing?: boolean;
};

const projects: Project[] = [
  {
    title: "AgriBot",
    description:
      "AI-powered agricultural assistant for crop recommendation and plant disease detection.",
    details:
      "Implemented XGBoost for crop prediction and ResNet CNN for image based disease classification. Helps farmers make data-driven decisions for better yield.",
    image: "/AGRIBOT.png",
    tags: ["Python", "XGBoost", "ResNet", "Django", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Shriyaalva/agribot",
  },
  {
    title: "Smart Placement Chatbot",
    description:
      "Web-based placement tracking system with automated deadline notifications and student support.",
    details:
      "Notifies students when a company's registration deadline is approaching or has ended. Provides a centralized platform to track placement drives and avoid missed opportunities.",
    image: "/Chatbot.png",
    tags: ["Python", "JavaScript", "REST APIs", "HTML", "CSS"],
    github: "https://github.com/Shriyaalva/Smart-Placement-Deadline-Tracker",
  },
  {
    title: "Canteen Queue Monitoring",
    description:
      "YOLOv8-based computer vision system to detect crowd count and estimate wait times.",
    details:
      "Analyzes live CCTV footage to dynamically estimate waiting time, helping students plan their visits and reduce overcrowding.",
    image: "/Canteen.png",
    tags: ["Python", "YOLOv8", "OpenCV"],
    ongoing: true,
  },
];

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            My <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Things I&apos;ve built — from AI-powered tools to full stack web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Ongoing Badge */}
              {project.ongoing && (
                <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-700">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                  Ongoing
                </div>
              )}

              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Short description */}
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                  {project.description}
                </p>

                {/* Longer details */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                  {project.details}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-white text-sm font-semibold transition-all duration-200"
                    >
                      <GitHubIcon />
                      View Code
                    </a>
                  ) : (
                    <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-sm font-semibold cursor-not-allowed">
                      <GitHubIcon />
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Shriyaalva"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <GitHubIcon />
            View All on GitHub
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}