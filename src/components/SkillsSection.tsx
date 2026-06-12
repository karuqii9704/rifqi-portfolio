"use client";

import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Zap, Code, Sparkles } from "lucide-react";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{name}</span>
        <span className="text-xs text-text-tertiary font-display tabular-nums">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-jade-500 to-khaki-400 relative"
        >
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-jade-400 text-sm font-medium tracking-wider mb-4"><Sparkles className="w-3.5 h-3.5" /> COMPETENCIES</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Skills & <span className="text-gradient">Expertise</span></h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <div className="bento-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-khaki-500/15 flex items-center justify-center"><Zap className="w-5 h-5 text-khaki-400" /></div>
                <div><h3 className="font-display font-semibold text-text-primary">Management & Strategy</h3><p className="text-xs text-text-tertiary mt-0.5">Leadership & project delivery</p></div>
              </div>
              <div className="space-y-5">{skills.management.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} index={i} />)}</div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bento-card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-jade-500/15 flex items-center justify-center"><Code className="w-5 h-5 text-jade-400" /></div>
                <div><h3 className="font-display font-semibold text-text-primary">Technical & Development</h3><p className="text-xs text-text-tertiary mt-0.5">Full-stack & IoT engineering</p></div>
              </div>
              <div className="space-y-5">{skills.technical.map((s, i) => <SkillBar key={i} name={s.name} level={s.level} index={i} />)}</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
