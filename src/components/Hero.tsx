"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconArrowRight, IconUsers, IconClock, IconPackage, IconChartBar, IconDeviceMobile, IconGitBranch, IconCreditCard, IconBuildingStore } from "@tabler/icons-react";
import { GridBackground } from "./GridBackground";
import { ScheduleMockup, DashboardMockup, WorkflowMockup, LineChatMockup } from "./SystemMockups";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      <GridBackground />

      {/* Floating decorative icons scattered around */}
      {[
        { Icon: IconUsers, x: "8%", y: "18%", size: 18, delay: 0 },
        { Icon: IconClock, x: "92%", y: "22%", size: 16, delay: 1 },
        { Icon: IconPackage, x: "85%", y: "75%", size: 14, delay: 2 },
        { Icon: IconChartBar, x: "5%", y: "70%", size: 16, delay: 1.5 },
        { Icon: IconDeviceMobile, x: "15%", y: "45%", size: 14, delay: 0.5 },
        { Icon: IconGitBranch, x: "78%", y: "45%", size: 14, delay: 2.5 },
        { Icon: IconCreditCard, x: "50%", y: "85%", size: 14, delay: 1.8 },
        { Icon: IconBuildingStore, x: "35%", y: "12%", size: 14, delay: 0.8 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-[5] w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center"
          style={{ left: item.x, top: item.y }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          <item.Icon size={item.size} className="text-white/20" stroke={1.5} />
        </motion.div>
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-[13px] font-medium text-indigo-300">專為台灣中小企業打造</span>
            </motion.div>

            <h1 className="font-[var(--font-display)] leading-[1.1] tracking-[-0.02em] mb-7">
              <motion.span
                className="block text-[clamp(2.2rem,4.5vw,3.5rem)] font-light text-white/40"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                從一個模組開始
              </motion.span>
              <motion.span
                className="block text-[clamp(2.5rem,5vw,4rem)] font-bold mt-2"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white">打造你的</span>
                <span className="gradient-text"> 營運中樞</span>
              </motion.span>
            </h1>

            <motion.p
              className="text-[16px] text-white/45 leading-[1.7] max-w-md mb-9"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              不限人數、按模組計費、4 週上線。
              現在解決最痛的問題，未來隨需擴充。
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <button
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0B0D1A] text-[14px] font-semibold hover:bg-white/90 transition-colors duration-200"
              >
                預約營運診斷
                <IconArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-full border border-white/[0.12] text-white/70 text-[14px] font-semibold hover:border-white/25 hover:text-white transition-all duration-200"
              >
                瀏覽方案
              </button>
            </motion.div>

            <motion.div
              className="flex gap-8 mt-14 pt-8 border-t border-white/[0.06]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {[
                { value: "16", label: "模組選配" },
                { value: "4 週", label: "快速上線" },
                { value: "不限", label: "使用人數" },
              ].map((s, i) => (
                <div key={i}>
                  <span className="font-[var(--font-display)] text-2xl font-bold text-white">{s.value}</span>
                  <span className="block text-[12px] text-white/30 mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: System mockups bento */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {/* Top left: Schedule (spans full width) */}
              <div className="col-span-2 animate-float">
                <ScheduleMockup />
              </div>
              {/* Bottom left: Dashboard */}
              <div className="animate-float-delayed">
                <DashboardMockup />
              </div>
              {/* Bottom right: Workflow + LINE stacked */}
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
      </motion.div>
    </section>
  );
}
