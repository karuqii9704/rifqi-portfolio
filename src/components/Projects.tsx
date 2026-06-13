"use client";

import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import { Code2, ExternalLink, Sparkles, Globe } from "lucide-react";

const categoryGradients: Record<string, string> = {
  "Full-Stack": "from-coral-600 to-coral-400",
  Backend: "from-coral-700 to-coral-500",
  IoT: "from-coral-500 to-coral-600",
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-coral-400 text-sm font-medium tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((proj, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="group bento-card h-full flex flex-col">
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${categoryGradients[proj.category] || "from-coral-600 to-coral-400"} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="w-11 h-11 rounded-xl bg-surface-3 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5 text-coral-500" />
                </div>
                <span className="inline-block self-start px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-surface-3 text-text-tertiary mb-3 uppercase tracking-wider border border-border-default">{proj.category}</span>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-text-primary group-hover:text-coral-500 transition-colors">{proj.name}</h3>
                  <span className="text-[11px] text-text-tertiary whitespace-nowrap shrink-0 mt-1">{proj.period}</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{proj.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-surface-3 text-text-secondary border border-border-default">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 pt-3 border-t border-border-default">
                  <button className="flex items-center gap-1.5 text-xs text-text-tertiary hover:text-coral-500 transition-colors"><ExternalLink className="w-3.5 h-3.5" />Live Demo</button>
                  <button className="flex items-center gap-1.5 text-xs text-text-tertiary hover:text-coral-200 transition-colors"><Globe className="w-3.5 h-3.5" />Source</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
