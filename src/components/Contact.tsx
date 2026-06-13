"use client";

import { personalData, reference } from "@/lib/data";
import Reveal from "./Reveal";
import { Mail, Phone, Globe, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const items = [
    { icon: Mail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}` },
    { icon: Phone, label: "Phone", value: personalData.phone, href: `tel:${personalData.phone}` },
    { icon: Globe, label: "LinkedIn", value: personalData.linkedin, href: personalData.linkedinUrl },
    { icon: MapPin, label: "Location", value: personalData.location },
  ];

  return (
    <section id="contact" className="relative py-28 bg-surface-0">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-surface-1 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 text-coral-500 text-sm font-medium tracking-wider mb-4"><Sparkles className="w-3.5 h-3.5" /> LET&apos;S CONNECT</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
            <div className="section-divider mx-auto" />
            <p className="text-text-secondary mt-5 max-w-xl mx-auto text-sm sm:text-base">Interested in working together? Feel free to reach out — I&apos;m always open to discussing new opportunities.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Reveal delay={0.1}>
            <div className="space-y-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bento-card group">
                  <div className="w-10 h-10 rounded-xl bg-coral-600/10 flex items-center justify-center shrink-0 group-hover:bg-coral-600/20 transition-colors"><item.icon className="w-4 h-4 text-coral-500" /></div>
                  {item.href ? <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-text-primary hover:text-coral-500 transition-colors">{item.value}</a> : <span className="text-sm text-text-primary">{item.value}</span>}
                </div>
              ))}
              <div className="bento-card mt-6">
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider mb-3">Academic Reference</p>
                <p className="text-sm font-display font-semibold text-text-primary mb-1">{reference.name}</p>
                <p className="text-xs text-text-secondary mb-2">{reference.affiliation}</p>
                <div className="flex flex-col gap-1 text-xs text-text-tertiary">
                  <a href={`mailto:${reference.email}`} className="hover:text-coral-500 transition-colors">{reference.email}</a>
                  <a href={`tel:${reference.phone}`} className="hover:text-coral-500 transition-colors">{reference.phone}</a>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="bento-card">
              <h3 className="font-display font-semibold text-text-primary mb-6">Send a Message</h3>
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="w-16 h-16 rounded-full bg-coral-600/15 flex items-center justify-center mb-5"><Send className="w-6 h-6 text-coral-500" /></motion.div>
                  <p className="text-text-primary font-display font-semibold text-lg">Message sent!</p>
                  <p className="text-text-secondary text-sm mt-1">I&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); const d = new FormData(e.target as HTMLFormElement); window.open(`mailto:${personalData.email}?subject=${encodeURIComponent(d.get("subject") as string)}&body=${encodeURIComponent(`From: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`)}`) }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 text-sm rounded-xl bg-surface-3 border border-border-default focus:border-coral-600 outline-none transition-all text-text-primary placeholder:text-text-tertiary" />
                    <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 text-sm rounded-xl bg-surface-3 border border-border-default focus:border-coral-600 outline-none transition-all text-text-primary placeholder:text-text-tertiary" />
                  </div>
                  <input type="text" name="subject" placeholder="Subject" required className="w-full px-4 py-3 text-sm rounded-xl bg-surface-3 border border-border-default focus:border-coral-600 outline-none transition-all text-text-primary placeholder:text-text-tertiary" />
                  <textarea name="message" rows={4} placeholder="Your Message" required className="w-full px-4 py-3 text-sm rounded-xl bg-surface-3 border border-border-default focus:border-coral-600 outline-none transition-all text-text-primary placeholder:text-text-tertiary resize-none" />
                  <button type="submit" className="w-full px-6 py-3.5 bg-gradient-to-r from-coral-700 to-coral-500 text-white rounded-xl font-medium hover:shadow-xl hover:shadow-coral-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"><Send className="w-4 h-4" />Send Message</button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
