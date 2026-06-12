"use client";

import { workExperience } from "@/lib/data";
import Reveal from "./Reveal";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 hidden sm:block" />

          <div className="space-y-10">
            {workExperience.map((exp, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-0 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 items-center justify-center shadow-lg shadow-cyan-500/20 -translate-x-1/2 z-10">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-lg hover:border-cyan-200 dark:hover:border-cyan-800/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300">
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mt-4">
                      {exp.descriptions.map((desc, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 shrink-0" />
                          {desc}
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
