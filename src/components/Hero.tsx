"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import { AnimatedWords, FadeUp } from "./AnimatedText";
import { GridBackground } from "./GridBackground";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Eyebrow badge */}
        <FadeUp delay={0}>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-violet-50 border border-indigo-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span className="text-sm font-bold text-indigo-600 tracking-wide">
              按需選購，隨需擴充
            </span>
          </div>
        </FadeUp>

        {/* Main heading with word animation */}
        <h1 className="font-[var(--font-display)] leading-[1.05] tracking-[-0.04em] mb-8">
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-light text-slate-400">
            <AnimatedWords text="從一個模組開始" />
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-7xl font-bold mt-2">
            <AnimatedWords
              text="打造最適合您的數位大腦"
              className="gradient-text"
            />
          </span>
        </h1>

        {/* Subtitle */}
        <FadeUp delay={0.5}>
          <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-xl mx-auto mb-10">
            不限使用人數，彈性選購模組。
            <br className="hidden sm:block" />
            現在解決最痛的點，未來隨公司成長無限擴充。
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-lg font-bold shadow-xl shadow-indigo-500/30 overflow-hidden"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">預約專人導覽</span>
              <IconArrowRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
              {/* Pulse ring */}
              <span className="absolute -inset-1 rounded-2xl border-2 border-indigo-400/30 animate-[pulse_2s_ease-out_infinite]" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-black/[0.06] text-slate-700 text-lg font-bold hover:bg-white hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
              onClick={() => document.getElementById("try")?.scrollIntoView({ behavior: "smooth" })}
            >
              <IconPlayerPlay size={18} />
              免費自行體驗
            </motion.button>
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.9}>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16 mt-16 pt-8 border-t border-black/[0.06]">
            {[
              { value: "5", label: "解決方案包", color: "text-indigo-500" },
              { value: "16", label: "大模組自由選配", color: "text-cyan-500" },
              { value: "4 週", label: "快速導入上線", color: "text-violet-500" },
              { value: "不限", label: "使用人數", color: "text-emerald-500" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-1"
              >
                <span className={`font-[var(--font-display)] text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-sm text-slate-400 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </motion.div>
    </section>
  );
}
