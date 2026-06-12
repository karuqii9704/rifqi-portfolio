"use client";

import { education } from "@/lib/data";
import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 hidden sm:block" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative pl-0 sm:pl-20">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-4 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 items-center justify-center shadow-lg shadow-blue-500/20 -translate-x-1/2 z-10">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/30">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                      GPA: <span className="font-semibold text-slate-800 dark:text-slate-200">{edu.gpa}</span>
                    </p>

                    <ul className="space-y-2">
                      {edu.achievements.map((ach, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mt-2 shrink-0" />
                          {ach}
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
