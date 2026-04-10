"use client";
import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import { ScrollReveal, StaggerChildren, StaggerItem } from "./AnimatedText";

const PAINS = [
  { emoji: "📋", pain: "員工打卡用紙本，月底人資手動算出勤", cost: "每月浪費 40+ 小時", fix: "LINE GPS 打卡 → 自動統計" },
  { emoji: "📊", pain: "排班用 Excel，改一個人要調半天", cost: "每週花 3-5 小時排班", fix: "AI 一鍵排班 + 勞基法自動檢查" },
  { emoji: "💰", pain: "薪資用計算機，怕算錯又怕漏", cost: "每月 2-3 天算薪", fix: "自動拉出勤 + 加班 + 請假計算" },
  { emoji: "📦", pain: "庫存靠記憶，賣完才知道沒貨", cost: "缺貨損失 5-10% 營收", fix: "即時庫存 + 安全量自動補貨" },
  { emoji: "📱", pain: "請假要填紙本，主管不在就卡住", cost: "審核平均等 2-3 天", fix: "LINE 即時送簽 → 秒核" },
  { emoji: "🔄", pain: "開新店流程混亂，總是漏東漏西", cost: "開店延誤 2-4 週", fix: "SOP 範本 + 任務追蹤 + 進度透明" },
];

export function PainPoints() {
  return (
    <section id="pain" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold mb-6">
            💡 痛點診斷
          </span>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            這些問題，<span className="gradient-text">聽起來熟悉嗎？</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            如果你中了 3 項以上，是時候考慮數位化了
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAINS.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-7 rounded-3xl bg-white/80 backdrop-blur-sm border border-black/[0.04] hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/[0.06] transition-all duration-500 cursor-default"
              >
                {/* Gradient glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50/0 to-violet-50/0 group-hover:from-indigo-50/50 group-hover:to-violet-50/50 transition-all duration-500" />

                <div className="relative">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <p className="font-bold text-slate-800 leading-relaxed mb-3">{item.pain}</p>
                  <p className="text-sm font-semibold text-red-500 mb-4">💸 {item.cost}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 px-3 py-2 rounded-xl bg-cyan-50/60">
                    <IconCheck size={16} className="flex-shrink-0" />
                    {item.fix}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
