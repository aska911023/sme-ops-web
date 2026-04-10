"use client";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerChildren, StaggerItem } from "./AnimatedText";

const STEPS = [
  { week: "第 1 週", title: "需求訪談", desc: "了解公司流程，確認模組需求", emoji: "📋", color: "bg-indigo-500" },
  { week: "第 2 週", title: "系統設定", desc: "門市建立、員工匯入、客製化", emoji: "⚙️", color: "bg-cyan-500" },
  { week: "第 3 週", title: "教育訓練", desc: "管理端操作、LINE Bot 綁定", emoji: "🎓", color: "bg-violet-500" },
  { week: "第 4 週", title: "正式上線", desc: "平行測試、微調、正式切換", emoji: "🚀", color: "bg-emerald-500" },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold mb-6">
            🚀 導入流程
          </span>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">4 週</span>快速導入
          </h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            從需求訪談到正式上線，一個月內完成
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[3px] bg-gradient-to-r from-indigo-200 via-cyan-200 via-violet-200 to-emerald-200 rounded-full" />

          {STEPS.map((step, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.04] hover:shadow-xl hover:shadow-indigo-500/[0.06] transition-all duration-500"
              >
                <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg relative z-10`}>
                  {step.emoji}
                </div>
                <div className="text-sm font-bold text-indigo-500 mb-2">{step.week}</div>
                <h3 className="font-[var(--font-display)] font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
