"use client";
import { IconCheck, IconX, IconAlertTriangle } from "@tabler/icons-react";
import { ScrollReveal } from "./AnimatedText";

const ROWS = [
  { item: "導入時間", us: "4 週", them: "3-6 個月" },
  { item: "最低啟動費用", us: "按模組計費", them: "50 萬起" },
  { item: "使用人數", us: "不限人數", them: "按授權數" },
  { item: "LINE 整合", us: "完整 LIFF + Bot", them: "需另外開發", usGood: true, themBad: true },
  { item: "AI 功能", us: "排班 / 流程 / 分析", them: "無", usGood: true, themBad: true },
  { item: "模組選購", us: "自由選配", them: "整包購買", usGood: true, themBad: true },
  { item: "系統更新", us: "自動更新", them: "另收費用", usGood: true },
  { item: "客製化", us: "彈性設定", them: "需求單另計" },
];

export function Comparison() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            跟傳統 ERP <span className="gradient-text">有什麼不同？</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl overflow-hidden border border-black/[0.06] bg-white shadow-xl shadow-indigo-500/[0.03]">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] px-6 py-4 bg-gradient-to-r from-indigo-50 to-violet-50 border-b border-black/[0.06]">
              <div className="text-sm font-bold text-slate-600">比較項目</div>
              <div className="text-sm font-bold text-indigo-600 text-center">SME Ops</div>
              <div className="text-sm font-bold text-slate-400 text-center">傳統 ERP</div>
            </div>
            {/* Rows */}
            {ROWS.map((row, i) => (
              <div key={i} className={`grid grid-cols-[1.4fr_1fr_1fr] px-6 py-4 ${i < ROWS.length - 1 ? "border-b border-black/[0.03]" : ""} hover:bg-indigo-50/30 transition-colors duration-200`}>
                <div className="text-sm font-medium text-slate-700">{row.item}</div>
                <div className="text-sm font-bold text-center flex items-center justify-center gap-1.5">
                  {row.usGood && <IconCheck size={15} className="text-emerald-500" />}
                  <span className="text-emerald-600">{row.us}</span>
                </div>
                <div className="text-sm text-center flex items-center justify-center gap-1.5">
                  {row.themBad && <IconX size={15} className="text-red-400" />}
                  <span className="text-slate-400">{row.them}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
