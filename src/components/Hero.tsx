"use client";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { GridBackground } from "./GridBackground";
import { ScheduleMockup, DashboardMockup, WorkflowMockup, LineChatMockup } from "./SystemMockups";

const lineVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.15 + i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16 sm:pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/[0.15] mb-10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[13px] font-medium text-indigo-300 tracking-wide">專為台灣中小企業打造</span>
            </motion.div>

            <h1 className="font-[var(--font-display)] leading-[1.08] tracking-tight mb-8">
              {[
                { text: "從一個模組開始", className: "text-[clamp(2.2rem,4.5vw,3.5rem)] font-light text-white/40" },
                { text: "打造你的", className: "text-[clamp(2.5rem,5vw,4rem)] font-bold text-white" },
                { text: "營運數位中樞", className: "text-[clamp(2.5rem,5vw,4rem)] font-bold gradient-text" },
              ].map((line, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className={`block ${line.className}`}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[16px] text-white/45 leading-[1.7] max-w-md mb-10"
            >
              不限人數、按模組計費、4 週上線。
              現在解決最痛的問題，未來隨需擴充。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0B0D1A] text-[15px] font-semibold overflow-hidden hover:bg-white/90 transition-colors duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-100/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative">預約營運診斷</span>
                <IconArrowRight size={16} className="relative group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/[0.1] text-white/60 text-[15px] font-semibold hover:border-white/[0.2] hover:text-white/90 hover:bg-white/[0.03] transition-all duration-300"
              >
                瀏覽方案
                <IconArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap gap-8 sm:gap-12 mt-16 sm:mt-20 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: "16", label: "模組選配" },
                { value: "4 週", label: "快速上線" },
                { value: "不限", label: "使用人數" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.1 }}
                >
                  <span className="font-[var(--font-display)] text-2xl sm:text-3xl font-bold text-white">{s.value}</span>
                  <span className="block text-[12px] text-white/30 mt-1 tracking-wide">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: System mockups bento */}
          {/* Mobile: single mockup */}
          <motion.div
            className="md:hidden mt-8 -mx-2 overflow-x-auto no-scrollbar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="min-w-[340px] px-2">
              <ScheduleMockup />
            </div>
          </motion.div>

          {/* Tablet: show 2 mockups in a row */}
          <motion.div
            className="hidden md:grid lg:hidden grid-cols-2 gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ScheduleMockup />
            <DashboardMockup />
          </motion.div>

          {/* Desktop: full bento */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 animate-float">
                <ScheduleMockup />
              </div>
              <div className="animate-float-delayed">
                <DashboardMockup />
              </div>
              <div className="space-y-3">
                <div className="animate-float">
                  <WorkflowMockup />
                </div>
                <div className="animate-float-delayed">
                  <LineChatMockup />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0D1A] to-transparent pointer-events-none z-20" />
    </section>
  );
}
