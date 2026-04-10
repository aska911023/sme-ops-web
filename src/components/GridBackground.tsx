"use client";
import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 10%, transparent 70%)",
        }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)" }}
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full blur-[80px]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 60%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-indigo-400/20"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            width: `${3 + Math.random() * 6}px`,
            height: `${3 + Math.random() * 6}px`,
          }}
          animate={{
            y: [0, -200 - Math.random() * 300],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 15,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="relative h-24 -mt-12">
      <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 96" fill="none" preserveAspectRatio="none">
        <path d="M0 48C360 96 720 0 1080 48C1260 72 1380 48 1440 48V96H0V48Z" fill="#f8faff" />
      </svg>
    </div>
  );
}
