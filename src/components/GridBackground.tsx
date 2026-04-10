"use client";
import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static gradient orbs on mobile, animated on desktop */}
      <div
        className="absolute -top-[20%] -right-[10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 55%)" }}
      />
      <div
        className="absolute -bottom-[15%] -left-[10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 55%)" }}
      />

      {/* Animated orb — desktop only */}
      <motion.div
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full hidden sm:block"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 50%)" }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* SVG geometrics — desktop only (these cause mobile lag) */}
      <motion.svg
        className="absolute top-[12%] left-[8%] text-indigo-400/[0.06] hidden md:block"
        width="120" height="120" viewBox="0 0 120 120"
        animate={{ y: [0, -15, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="10" y="10" width="100" height="100" rx="20" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <motion.svg
        className="absolute top-[20%] right-[12%] text-cyan-400/[0.05] hidden md:block"
        width="80" height="80" viewBox="0 0 80 80"
        animate={{ y: [0, 12, 0], rotate: [0, -120, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <polygon points="40,5 75,65 5,65" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <motion.svg
        className="absolute bottom-[25%] right-[18%] text-white/[0.03] hidden lg:block"
        width="60" height="60" viewBox="0 0 60 60"
        animate={{ y: [0, -10, 0], rotate: [0, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="30" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      <motion.svg
        className="absolute top-[55%] left-[5%] text-violet-400/[0.04] hidden lg:block"
        width="90" height="90" viewBox="0 0 90 90"
        animate={{ y: [0, 18, 0], rotate: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <polygon points="45,5 85,30 85,70 45,90 5,70 5,30" fill="none" stroke="currentColor" strokeWidth="1" />
      </motion.svg>

      {/* Grid + dots — static, no performance cost */}
      <div
        className="absolute inset-0 opacity-[0.02] hidden sm:block"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-dots" />
    </div>
  );
}
