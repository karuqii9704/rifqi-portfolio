"use client";

import { personalData } from "@/lib/data";
import { Globe, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              aria-label="LinkedIn"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 transition-all"
              aria-label="Instagram"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {year} {personalData.name}. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-600 mt-1 flex items-center justify-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
