"use client";
import { motion } from "framer-motion";
import { IconAlertTriangle, IconCheck } from "@tabler/icons-react";
import { ScrollReveal } from "./AnimatedText";

const PAINS = [
  { pain: "員工打卡用紙本，月底人資手動算出勤", cost: "每月 40+ hr", fix: "LINE 打卡自動統計", icon: "📋" },
  { pain: "排班用 Excel，改一個人要調半天", cost: "每週 3-5 hr", fix: "AI 一鍵合規排班", icon: "📊" },
  { pain: "薪資用計算機，怕算錯又怕漏", cost: "每月 2-3 天", fix: "自動串出勤計算", icon: "💰" },
  { pain: "庫存靠記憶，賣完才知道沒貨", cost: "損失 5-10% 營收", fix: "安全量自動補貨", icon: "📦" },
  { pain: "請假要填紙本，主管不在就卡住", cost: "平均等 2-3 天", fix: "LINE 即時送簽", icon: "📱" },
  { pain: "開新店流程混亂，總是漏東漏西", cost: "延誤 2-4 週", fix: "SOP + 進度追蹤", icon: "🔄" },
];

export function PainPoints() {
  return (
    <section id="pain" className="relative py-28 lg:py-36 px-6 lg:px-8">
      {/* Section glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-red-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 mb-14">
          <ScrollReveal>
            <span className="text-[13px] font-medium text-red-400 tracking-wider uppercase mb-4 block">Pain Points</span>
            <h2 className="font-[var(--font-display)] text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              <span className="text-white">這些問題</span>
              <br />
              <span className="text-white/35">聽起來熟悉嗎？</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-[16px] text-white/40 leading-relaxed lg:pt-10">
              中小企業營運中最常見的管理瓶頸。如果你中了 3 項以上，代表數位化能為你省下大量時間與成本。
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAINS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, borderColor: "rgba(255,255,255,0.12)" }}
              className="group rounded-2xl border border-white/[0.06] bg-[#12142A]/60 hover:bg-[#1A1D35]/80 transition-all duration-400 p-6 cursor-default"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <p className="text-white/80 font-medium text-[14px] leading-relaxed mb-5">{item.pain}</p>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-red-400/80 bg-red-500/10 px-2.5 py-1 rounded-md">
                  <IconAlertTriangle size={11} />
                  {item.cost}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/80 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  <IconCheck size={11} />
                  {item.fix}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
