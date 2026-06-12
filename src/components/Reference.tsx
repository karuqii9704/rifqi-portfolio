"use client";

import { reference } from "@/lib/data";
import Reveal from "./Reveal";
import { BookOpen, Phone, Mail } from "lucide-react";

export default function Reference() {
  return (
    <section className="py-16 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-700/50 text-center hover:shadow-lg hover:border-green-200 dark:hover:border-green-800/50 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                Reference
              </h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                {reference.name}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                {reference.affiliation}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={`tel:${reference.phone}`}
                  className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call
                </a>
                {reference.email && (
                  <a
                    href={`mailto:${reference.email}`}
                    className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
