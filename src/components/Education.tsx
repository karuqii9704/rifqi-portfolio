"use client";

import { education } from "@/lib/data";
import Reveal from "./Reveal";
import { GraduationCap, Sparkles } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-jade-400 text-sm font-medium tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> ACADEMIC BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Education</span></h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] sm:left-8 top-0 bottom-0 w-[2px] timeline-line-jade hidden sm:block rounded-full" />
          <div className="space-y-12">
            {education.map((edu, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="relative pl-14 sm:pl-20">
                  <div className="absolute left-0 sm:left-[17px] top-1 w-9 h-9 rounded-full bg-surface-2 border-2 border-jade-500/30 flex items-center justify-center z-10">
                    <GraduationCap className="w-3.5 h-3.5 text-jade-400" />
                  </div>
                  <div className="glass-card p-6 sm:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div><h3 className="text-lg font-display font-semibold text-text-primary">{edu.institution}</h3><p className="text-jade-400 text-sm font-medium mt-0.5">{edu.degree}</p></div>
                      <span className="inline-block px-3 py-1 text-[11px] font-medium rounded-full bg-jade-500/10 text-jade-400 border border-jade-500/20 shrink-0 self-start">{edu.period}</span>
                    </div>
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg bg-surface-3 border border-border-default">
                      <span className="text-xs text-text-tertiary">GPA</span>
                      <span className="text-sm font-display font-semibold text-gradient-static">{edu.gpa}</span>
                    </div>
                    <ul className="space-y-2.5">
                      {edu.achievements.map((ach, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-jade-400/60 mt-2 shrink-0" />{ach}
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
