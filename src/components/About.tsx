"use client";

import { personalData } from "@/lib/data";
import Reveal from "./Reveal";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function About() {
  const details = [
    { icon: Mail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: Phone, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
    { icon: Globe, label: "LinkedIn", value: personalData.linkedin, href: personalData.linkedinUrl },
    { icon: MapPin, label: "Location", value: personalData.location },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Summary */}
          <Reveal className="md:col-span-3" delay={0.1}>
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 inline-block" />
                Professional Summary
              </h3>
              <div className="space-y-4">
                {personalData.aboutParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-slate-600 dark:text-slate-400 leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact Info */}
          <Reveal className="md:col-span-2" delay={0.2}>
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 inline-block" />
                Quick Info
              </h3>
              <div className="space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                      <d.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-700 dark:text-slate-300">
                          {d.value}
                        </p>
                      )}
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
