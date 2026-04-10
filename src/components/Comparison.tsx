"use client";
import { IconCheck, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./AnimatedText";

const ROWS = [
  { item: "導入時間", us: "4 週", them: "3-6 個月" },
  { item: "最低費用", us: "按模組計費", them: "50 萬起" },
  { item: "使用人數", us: "不限人數", them: "按授權數" },
  { item: "LINE 整合", us: "LIFF + Bot", them: "需另開發", usGood: true, themBad: true },
  { item: "AI 功能", us: "排班·流程·分析", them: "無", usGood: true, themBad: true },
  { item: "模組選購", us: "自由選配", them: "整包購買", usGood: true, themBad: true },
  { item: "系統更新", us: "自動更新", them: "另收費", usGood: true },
  { item: "客製化", us: "彈性設定", them: "需求單另計" },
];

export function Comparison() {
  return (
    <section className="relative py-28 lg:py-36 px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[13px] font-medium text-cyan-400 tracking-wider uppercase mb-4 block">Comparison</span>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-[2.8rem] font-bold tracking-tight">
              <span className="text-white">跟傳統 ERP</span>
              <span className="text-white/50"> 有什麼不同？</span>
            </h2>
          </div>
        </ScrollReveal>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/[0.06] bg-[#12142A]/60 overflow-hidden"
        >
          <div className="grid grid-cols-[1.2fr_1fr_1fr] px-3 sm:px-6 py-3 sm:py-4 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider">項目</div>
            <div className="text-center">
              <span className="px-3 py-1 rounded-md bg-white text-[#0B0D1A] text-[11px] font-bold">SME Ops</span>
            </div>
            <div className="text-[11px] font-semibold text-white/35 text-center uppercase tracking-wider">傳統 ERP</div>
          </div>

          {ROWS.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className={`grid grid-cols-[1.2fr_1fr_1fr] px-3 sm:px-6 py-3 sm:py-4 ${i < ROWS.length - 1 ? "border-b border-white/[0.03]" : ""} hover:bg-white/[0.02] transition-colors duration-200`}
            >
              <div className="text-[12px] sm:text-[13px] font-medium text-white/65">{row.item}</div>
              <div className="text-[11px] sm:text-[13px] text-center flex items-center justify-center gap-1">
                {row.usGood && <IconCheck size={13} className="text-emerald-400" />}
                <span className="font-semibold text-white/90">{row.us}</span>
              </div>
              <div className="text-[11px] sm:text-[13px] text-center flex items-center justify-center gap-1">
                {row.themBad && <IconX size={13} className="text-white/20" />}
                <span className="text-white/35">{row.them}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
