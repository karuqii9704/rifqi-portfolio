"use client";

import { awards } from "@/lib/data";
import Reveal from "./Reveal";
import { Award, Trophy, Sparkles } from "lucide-react";

export default function Awards() {
  return (
    <section id="awards" className="relative py-28 bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-khaki-400 text-sm font-medium tracking-wider mb-4"><Sparkles className="w-3.5 h-3.5" /> RECOGNITION</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Awards & <span className="text-gradient">Certifications</span></h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="space-y-4 max-w-3xl mx-auto">
          {awards.map((award, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bento-card group flex items-start gap-5">
                <div className="w-11 h-11 rounded-xl bg-jade-500/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {i === 0 ? <Trophy className="w-5 h-5 text-khaki-400" /> : <Award className="w-5 h-5 text-khaki-400" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-text-primary text-sm leading-relaxed group-hover:text-khaki-300 transition-colors">{award.title}</h3>
                  <p className="text-text-secondary text-sm mt-2">{award.issuer}<span className="mx-2 text-text-tertiary">·</span><span className="text-text-tertiary">{award.year}</span></p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
