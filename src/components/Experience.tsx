"use client";

import { workExperience } from "@/lib/data";
import Reveal from "./Reveal";
import { Briefcase, Sparkles } from "lucide-react";

const typeStyles: Record<string, string> = {
  Startup: "from-jade-500/20 to-khaki-400/20 text-jade-400 border-jade-500/20",
  Research: "from-jade-600/20 to-jade-400/20 text-jade-300 border-jade-500/20",
  Internship: "from-khaki-500/20 to-khaki-400/20 text-khaki-300 border-khaki-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-khaki-400 text-sm font-medium tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> CAREER PATH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Work <span className="text-gradient">Experience</span></h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] sm:left-8 top-0 bottom-0 w-[2px] timeline-line-jade hidden sm:block rounded-full" />
          <div className="space-y-10">
            {workExperience.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 sm:left-[17px] top-1 w-9 h-9 rounded-full bg-surface-2 border-2 border-khaki-400/30 flex items-center justify-center z-10">
                    <Briefcase className="w-3.5 h-3.5 text-khaki-400" />
                  </div>
                  <div className="glass-card p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div><h3 className="text-lg font-display font-semibold text-text-primary">{exp.role}</h3><p className="text-jade-400 text-sm font-medium mt-0.5">{exp.company}</p></div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className={`px-3 py-1 text-[11px] font-medium rounded-full bg-gradient-to-r border ${typeStyles[exp.type] || "from-jade-500/20 to-khaki-400/20 text-jade-400 border-jade-500/20"}`}>{exp.type}</span>
                        <span className="text-xs text-text-tertiary">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {exp.descriptions.map((desc, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-jade-400/60 mt-2 shrink-0" />{desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
