"use client";
import { motion } from "framer-motion";

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[900px] h-[900px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 55%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-[15%] -left-[10%] w-[700px] h-[700px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 55%)" }}
        animate={{ x: [0, -25, 0], y: [0, 35, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 50%)" }}
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dots" />

      {/* Faint grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
