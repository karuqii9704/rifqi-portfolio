"use client";

import { personalData } from "@/lib/data";
import Reveal from "./Reveal";
import { Mail, Phone, MapPin, Globe, Sparkles } from "lucide-react";

export default function About() {
  const details = [
    { icon: Mail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: Phone, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
    { icon: Globe, label: "LinkedIn", value: personalData.linkedin, href: personalData.linkedinUrl },
    { icon: MapPin, label: "Location", value: personalData.location },
  ];

  return (
    <section id="about" className="relative py-28 bg-surface-1">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-coral-600/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-coral-500 text-sm font-medium tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
              Crafting <span className="text-gradient">Digital Excellence</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="bento-card h-full">
              <h3 className="font-display font-semibold text-lg text-text-primary mb-6">Professional Summary</h3>
              <div className="space-y-4">
                {personalData.aboutParagraphs.map((p, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed text-[15px]">{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-2" delay={0.2}>
            <div className="bento-card h-full">
              <h3 className="font-display font-semibold text-lg text-text-primary mb-6">Quick Info</h3>
              <div className="space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-surface-3 flex items-center justify-center shrink-0 group-hover:bg-coral-600/10 transition-colors">
                      <d.icon className="w-4 h-4 text-coral-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-text-tertiary uppercase tracking-wider font-medium">{d.label}</p>
                      {d.href ? <a href={d.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary hover:text-coral-500 transition-colors">{d.value}</a> : <p className="text-sm text-text-primary">{d.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
