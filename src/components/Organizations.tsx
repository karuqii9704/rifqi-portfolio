"use client";

import { organizations } from "@/lib/data";
import Reveal from "./Reveal";
import { Users, Sparkles } from "lucide-react";

export default function Organizations() {
  return (
    <section id="organizations" className="relative py-28 bg-surface-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-coral-400 text-sm font-medium tracking-wider mb-4"><Sparkles className="w-3.5 h-3.5" /> COMMUNITY ENGAGEMENT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Organizations & <span className="text-gradient">Leadership</span></h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {organizations.map((org, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="bento-card group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-coral-600/15 flex items-center justify-center"><Users className="w-4 h-4 text-coral-500" /></div>
                  <span className="text-[11px] text-text-tertiary font-medium">{org.period}</span>
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm mb-1 group-hover:text-coral-500 transition-colors">{org.role}</h3>
                <p className="text-text-secondary text-sm">{org.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
