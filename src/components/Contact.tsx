"use client";

import { personalData } from "@/lib/data";
import Reveal from "./Reveal";
import { Mail, Phone, Globe, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const items = [
    { icon: Mail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: Phone, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
    { icon: Globe, label: "LinkedIn", value: personalData.linkedin, href: personalData.linkedinUrl },
    { icon: MapPin, label: "Location", value: personalData.location },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="section-divider" />
            <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
              Interested in working together? Feel free to reach out — I&apos;m always open to discussing new opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white dark:bg-slate-800/50 rounded-xl px-5 py-4 shadow-sm border border-slate-200 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.2}>
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700/50">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                Send a Message
              </h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center mb-4">
                    <Send className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    Message sent successfully!
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    const form = e.target as HTMLFormElement;
                    const data = new FormData(form);
                    window.open(
                      `mailto:${personalData.email}?subject=${encodeURIComponent(
                        data.get("subject") as string
                      )}&body=${encodeURIComponent(
                        `From: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
                      )}`
                    );
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400"
                  />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
