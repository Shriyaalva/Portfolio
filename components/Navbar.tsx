"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-black/40 backdrop-blur-md z-50 px-8 py-4 flex justify-between items-center">
      <h1 className="text-white font-bold text-lg">
        Shriya<span className="text-accent">.</span>
      </h1>

      <div className="space-x-6 text-gray-300 hidden md:flex">
        <a href="#about" className="hover:text-accent transition">About</a>
        <a href="#projects" className="hover:text-accent transition">Projects</a>
        <a href="#leadership" className="hover:text-accent transition">Leadership</a>
        <a href="#contact" className="hover:text-accent transition">Contact</a>
      </div>
    </nav>
  );
}