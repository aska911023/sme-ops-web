"use client";
import { motion } from "framer-motion";
import { IconDeviceMobile, IconClock, IconGitBranch } from "@tabler/icons-react";
import { ScrollReveal, StaggerChildren, StaggerItem } from "./AnimatedText";

const MODULES = [
  {
    icon: IconDeviceMobile, name: "LINE 行動辦公",
    desc: "員工用 LINE 就能打卡、查薪資、請假、回報任務。零學習成本，開通即用。",
    color: "from-cyan-500 to-blue-500", tag: "最多人選", tagBg: "bg-cyan-50 text-cyan-600",
    features: ["GPS 打卡驗證", "薪資查詢", "請假申請", "任務回報"],
  },
  {
    icon: IconClock, name: "AI 智慧排班",
    desc: "一鍵自動排班，15 條勞基法自動檢查。找人代班、換班申請全自動化。",
    color: "from-violet-500 to-purple-500", tag: "AI 驅動", tagBg: "bg-violet-50 text-violet-600",
    features: ["勞基法合規", "智慧代班", "門市專屬班別", "優先級排序"],
  },
  {
    icon: IconGitBranch, name: "AI 流程助手",
    desc: "用自然語言描述需求，AI 自動生成 SOP 流程。任務追蹤 + LINE 即時通知。",
    color: "from-blue-500 to-indigo-500", tag: "效率翻倍", tagBg: "bg-blue-50 text-blue-600",
    features: ["AI 生成 SOP", "多層簽核", "LINE 通知", "進度追蹤"],
  },
];

export function HotModules() {
  return (
    <section id="hot" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-indigo-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-bold mb-6">
            🔥 最受歡迎
          </span>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            不知道從哪裡開始？
          </h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            超過 80% 客戶首選導入的模組
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {MODULES.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative p-8 rounded-3xl bg-white border border-black/[0.04] hover:shadow-2xl hover:shadow-indigo-500/[0.08] transition-all duration-500 text-center overflow-hidden"
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-indigo-50/30 group-hover:to-violet-50/30 transition-all duration-500 rounded-3xl" />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={28} className="text-white" stroke={1.5} />
                    </div>

                    {/* Tag */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${mod.tagBg} mb-4`}>
                      {mod.tag}
                    </span>

                    <h3 className="font-[var(--font-display)] text-xl font-bold mb-3">{mod.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{mod.desc}</p>

                    {/* Feature chips */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {mod.features.map((f, j) => (
                        <span key={j} className="px-3 py-1 rounded-lg bg-slate-50 text-xs font-medium text-slate-600">
                          {f}
                        </span>
                      ))}
                    </div>

                    {/* Badge */}
                    <div className="mt-5 inline-block px-4 py-1.5 rounded-lg bg-indigo-50 text-indigo-600 text-xs font-bold">
                      可單獨導入
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
