"use client";

import { organizations } from "@/lib/data";
import Reveal from "./Reveal";
import { Users } from "lucide-react";

export default function Organizations() {
  return (
    <section id="organizations" className="relative py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Organizations & <span className="text-gradient">Leadership</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizations.map((org, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group bg-white dark:bg-slate-800/50 rounded-xl p-5 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {org.period}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {org.role}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {org.org}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
