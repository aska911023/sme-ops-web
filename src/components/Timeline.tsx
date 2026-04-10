"use client";
import { motion } from "framer-motion";
import { ScrollReveal } from "./AnimatedText";
import { IconClipboard, IconSettings, IconSchool, IconRocket } from "@tabler/icons-react";

const STEPS = [
  { week: "W1", title: "需求訪談", desc: "了解公司流程，確認優先模組", Icon: IconClipboard, color: "from-indigo-500 to-violet-500" },
  { week: "W2", title: "系統設定", desc: "門市建立、員工匯入、客製化", Icon: IconSettings, color: "from-cyan-500 to-blue-500" },
  { week: "W3", title: "教育訓練", desc: "管理端操作、LINE Bot 綁定", Icon: IconSchool, color: "from-violet-500 to-purple-500" },
  { week: "W4", title: "正式上線", desc: "平行測試、微調、正式切換", Icon: IconRocket, color: "from-emerald-500 to-green-500" },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-28 lg:py-36 px-6 lg:px-8 bg-[#0E1024]">
      <div className="absolute inset-0 bg-dots" />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-[13px] font-medium text-emerald-400 tracking-wider uppercase mb-4 block">Process</span>
            <h2 className="font-[var(--font-display)] text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              <span className="gradient-text">4 週</span>
              <span className="text-white/35"> 完成導入</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] bg-white/[0.04]" />
          <motion.div
            className="hidden lg:block absolute top-7 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                {/* Dot */}
                <div className="flex items-center lg:justify-start gap-3 mb-5">
                  <div className={`relative z-10 w-[14px] h-[14px] rounded-full bg-gradient-to-br ${step.color} ring-4 ring-[#0E1024] shadow-md`} />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-white/[0.06] bg-[#12142A]/60 p-5 hover:border-white/[0.1] transition-colors duration-300">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-md`}>
                    <step.Icon size={16} className="text-white" stroke={1.5} />
                  </div>
                  <span className="text-[11px] font-bold text-white/25 tracking-wider">{step.week}</span>
                  <h3 className="font-[var(--font-display)] font-bold text-lg text-white mt-1 mb-2">{step.title}</h3>
                  <p className="text-[13px] text-white/35 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
