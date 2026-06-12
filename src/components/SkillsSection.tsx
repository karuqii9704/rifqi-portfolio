"use client";

import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Zap, Code } from "lucide-react";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs text-slate-400 dark:text-slate-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Management */}
          <Reveal delay={0.1}>
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-400/20 to-amber-400/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Management & Strategy
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Leadership & project delivery
                  </p>
                </div>
              </div>
              {skills.management.map((s, i) => (
                <SkillBar key={i} name={s.name} level={s.level} />
              ))}
            </div>
          </Reveal>

          {/* Technical */}
          <Reveal delay={0.2}>
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Technical & Development
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Full-stack & IoT engineering
                  </p>
                </div>
              </div>
              {skills.technical.map((s, i) => (
                <SkillBar key={i} name={s.name} level={s.level} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
