"use client";

import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import { Code2, ExternalLink, Globe } from "lucide-react";

const categoryColors: Record<string, string> = {
  "Full-Stack": "from-blue-500 to-cyan-400",
  Backend: "from-purple-500 to-pink-500",
  IoT: "from-green-500 to-emerald-400",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="group relative bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    categoryColors[proj.category] || "from-blue-500 to-cyan-400"
                  }`}
                />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Category badge */}
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                  {proj.category}
                </span>

                {/* Title + Period */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {proj.name}
                  </h3>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap shrink-0 mt-0.5">
                    {proj.period}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover links */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Globe className="w-3.5 h-3.5" />
                    Source
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
