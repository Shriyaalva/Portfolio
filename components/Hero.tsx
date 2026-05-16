"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const TYPING_PHRASES = ["2026 Graduate"];

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex > currentPhrase.length) {
      // Pause at end before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentPhrase.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Greeting badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            Open to internships & job opportunity
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
            Hi, I&apos;m{" "}
            <span className="text-indigo-500">Shriya Alva</span>
          </h1>

          {/* Typing animation */}
          <div className="h-10 mb-5 flex items-center justify-center md:justify-start">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-indigo-500 ml-0.5 animate-pulse align-middle" />
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
            B.Tech Information Science student passionate about building
            intelligent systems, scalable web applications, and real-world
           solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm shadow-md hover:shadow-indigo-200 dark:hover:shadow-indigo-900 transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
              Download Resume
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/Shriyaalva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-10 flex items-center gap-2 justify-center md:justify-start text-gray-400 dark:text-gray-600 text-xs animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
                clipRule="evenodd"
              />
            </svg>
            Scroll to explore
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 blur-lg opacity-30 scale-110" />
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full ring-4 ring-indigo-100 dark:ring-indigo-900 overflow-hidden shadow-xl">
              <Image
                src="/profile.jpeg"
                alt="Shriya Alva"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 shadow-lg rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for hire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}