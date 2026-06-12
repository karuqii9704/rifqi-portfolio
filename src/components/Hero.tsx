"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";
import { ArrowDown, Globe, Mail, Download } from "lucide-react";

const roles = [
  "Project Manager",
  "Full-Stack Developer",
  "IoT Enthusiast",
  "IT Project Control",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const initials = personalData.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Orbs */}
      <div className="orb orb-1 animate-float" />
      <div className="orb orb-2 animate-float" style={{ animationDelay: "-3s" }} />
      <div className="orb orb-3 animate-pulse-glow" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="relative">
              <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-1 animate-gradient">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <span className="text-4xl sm:text-5xl font-bold text-white">
                    {initials}
                  </span>
                </div>
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-xl -z-10" />
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-4 border-white dark:border-slate-950 animate-pulse" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-blue-500 dark:text-blue-400 font-medium mb-2 tracking-wide"
            >
              Hello, I&apos;m
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-3">
              <span className="text-gradient">{personalData.name}</span>
            </h1>

            <div className="h-10 mb-4">
              <span className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 font-medium">
                {displayed}
                <span className="inline-block w-0.5 h-6 bg-blue-500 ml-1 animate-pulse" />
              </span>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
              {personalData.summary}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-3 justify-center md:justify-start"
            >
              <a
                href={`mailto:${personalData.email}`}
                className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-blue-700 to-cyan-600 transition-transform duration-300" />
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                LinkedIn
              </a>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                GitHub
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById("about");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-5 py-3 border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-8 mt-12 justify-center md:justify-start"
            >
              {personalData.stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { duration: 2, repeat: Infinity } }}
        onClick={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-600 hover:text-blue-500 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
