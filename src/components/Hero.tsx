"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { personalData } from "@/lib/data";
import { ArrowDown, ArrowRight, Star } from "lucide-react";

const roles = [
  "IT Project Manager",
  "Full-Stack Developer",
  "IoT Enthusiast",
  "Startup Co-Founder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x * 30);
      mouseY.set(y * 30);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  // Stable random values for floating particles (no Math.random during render)
  const particles = useMemo(
    () =>
      [...Array(8)].map((_, i) => ({
        id: i,
        bg: i % 2 === 0 ? "rgba(255,127,80,0.3)" : "rgba(255,171,145,0.3)",
        startX: `${(i * 13 + 5) % 100}%`,
        startY: `${(i * 17 + 10) % 100}%`,
        endY: `${((i * 17 + 10) % 100) - 30}%`,
        duration: 7 + (i * 1.5),
        delay: i * 0.8,
      })),
    [],
  );

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2500);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        timeout = setTimeout(() => {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }, 0);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const initials = personalData.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated Orbs */}
      <motion.div className="hero-orb hero-orb-1" style={{ x: springX, y: springY }} />
      <motion.div className="hero-orb hero-orb-2" style={{ x: springX.get() * -1.2, y: springY.get() * -1.2 }} />
      <div className="hero-orb hero-orb-3" />

      {/* Grid */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 rounded-full"
            style={{ background: p.bg }}
            initial={{ x: p.startX, y: p.startY, opacity: 0 }}
            animate={{ y: [p.startY, p.endY], opacity: [0, 0.7, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ===== LEFT: Text Content (Figma-style) ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* "Hello!" label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-coral-400 text-sm font-medium tracking-[0.3em] uppercase border border-coral-400/30 rounded-full px-5 py-1.5 mb-6"
            >
              Hello!
            </motion.p>

            {/* "I'm Rifqi," in serif italic */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-peach-200 mb-1"
            >
              I&apos;m <span className="text-peach-100">{personalData.name.split(" ")[0]},</span>
            </motion.p>

            {/* Massive bold heading with decorative lines */}
            <div className="relative mb-6">
              {/* Decorative hand-drawn lines (Figma-style) */}
              <svg
                className="absolute -top-6 -right-4 w-32 h-16 opacity-30 pointer-events-none hidden sm:block"
                viewBox="0 0 120 60"
              >
                <path
                  d="M5 55 Q30 10 60 25 T115 5"
                  className="decorative-line"
                  stroke="#ff7f50"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                  style={{ animation: "draw-line 1.5s ease-out 0.8s forwards" }}
                />
              </svg>
              <svg
                className="absolute -bottom-2 -left-4 w-24 h-12 opacity-25 pointer-events-none hidden sm:block"
                viewBox="0 0 90 45"
              >
                <path
                  d="M5 35 Q25 5 45 20 T85 10"
                  className="decorative-line"
                  stroke="#ffab91"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="150"
                  strokeDashoffset="150"
                  style={{ animation: "draw-line 1.5s ease-out 1s forwards" }}
                />
              </svg>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-[0.9] tracking-tight">
                <span className="text-gradient">{personalData.title}</span>
              </h1>
            </div>

            {/* Typewriter role */}
            <div className="h-10 mb-6">
              <span className="text-xl sm:text-2xl text-text-secondary font-display font-medium">
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-coral-500 ml-1 align-middle"
                />
              </span>
            </div>

            {/* Summary */}
            <p className="text-text-secondary text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              {personalData.summary}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href={`mailto:${personalData.email}`} className="btn-coral group">
                Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-coral-200"
              >
                Hire me
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-8 mt-14"
            >
              {personalData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="group cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient-static group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                    <span className="text-base text-coral-200">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] text-text-tertiary mt-1.5 uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ===== RIGHT: Visual (Avatar + Testimonial) ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center lg:items-end gap-8"
          >
            {/* Avatar with coral gradient orb behind */}
            <div className="relative">
              {/* Coral radial glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-30 pointer-events-none animate-pulse-glow"
                style={{
                  background: "radial-gradient(circle, rgba(255,127,80,0.3) 0%, rgba(255,171,145,0.1) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Avatar ring */}
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-coral-600 via-coral-500 to-coral-400 p-[4px] animate-gradient">
                <div className="w-full h-full rounded-full bg-surface-1 flex items-center justify-center overflow-hidden">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-gradient">
                    {initials}
                  </span>
                </div>
              </div>

              {/* Status pill */}
              <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 glass rounded-full px-3 py-1.5 text-xs text-coral-200 border border-coral-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-coral-500" />
                </span>
                Open to work
              </div>
            </div>

            {/* Testimonial / Stats card (Figma-style right sidebar) */}
            <div className="glass-card p-6 max-w-xs">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-coral-500 text-coral-500" />
                ))}
              </div>
              <p className="text-sm text-text-secondary italic leading-relaxed mb-3">
                &ldquo;Results-driven IT professional with proven track record in
                project management and full-stack development.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border-default">
                <div className="w-8 h-8 rounded-full bg-coral-600/20 flex items-center justify-center text-xs font-bold text-coral-500">
                  R
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    Telkom University
                  </p>
                  <p className="text-xs text-text-tertiary">GPA 3.80/4.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-text-tertiary hover:text-coral-500 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-0 to-transparent pointer-events-none" />
    </section>
  );
}
