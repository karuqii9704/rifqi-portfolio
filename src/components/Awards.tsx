"use client";

import { awards } from "@/lib/data";
import Reveal from "./Reveal";
import { Award, Trophy } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Awards & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          {awards.map((award, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group flex items-start gap-5 bg-white dark:bg-slate-800/50 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:shadow-md hover:border-yellow-200 dark:hover:border-yellow-800/50 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-yellow-400/20 to-amber-400/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {i === 0 ? (
                    <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  ) : (
                    <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm leading-relaxed">
                    {award.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5">
                    {award.issuer}
                    <span className="mx-2 text-slate-300 dark:text-slate-600">·</span>
                    {award.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
