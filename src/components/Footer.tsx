"use client";

import { personalData } from "@/lib/data";
import { Globe, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border-default bg-surface-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <a href={personalData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:text-jade-400 hover:border-jade-500/30 transition-all" aria-label="LinkedIn"><Globe className="w-4 h-4" /></a>
            <a href={personalData.githubUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:text-text-primary hover:border-border-hover transition-all" aria-label="GitHub"><Globe className="w-4 h-4" /></a>
            <a href={`mailto:${personalData.email}`} className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:text-jade-400 hover:border-jade-500/30 transition-all" aria-label="Email"><Mail className="w-4 h-4" /></a>
            <a href={`https://instagram.com/${personalData.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-surface-2 border border-border-default flex items-center justify-center text-text-tertiary hover:text-khaki-400 hover:border-khaki-500/30 transition-all" aria-label="Instagram"><Globe className="w-4 h-4" /></a>
          </div>
          <div className="text-center">
            <p className="text-sm text-text-secondary">&copy; {year} {personalData.name}. All rights reserved.</p>
            <p className="text-xs text-text-tertiary mt-2 flex items-center justify-center gap-1.5">Built with <Heart className="w-3 h-3 text-jade-400 fill-jade-400" /> using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
