"use client";
import { motion } from "framer-motion";
import { IconCheck, IconChevronRight, IconStar, IconUsers, IconPackage, IconCreditCard, IconGitBranch, IconChartBar } from "@tabler/icons-react";
import { ScrollReveal, StaggerChildren, StaggerItem } from "./AnimatedText";

const BUNDLES = [
  { icon: IconUsers, color: "from-violet-500 to-purple-500", borderColor: "hover:border-violet-300", name: "人資行政包", tagline: "LINE 打卡 · AI 排班 · 勞基法合規", features: ["GPS + WiFi 打卡驗證", "AI 智慧排班", "14 種假別 + 自動算薪", "找人代班智能推薦", "員工 LIFF 自助操作"], popular: false },
  { icon: IconPackage, color: "from-emerald-500 to-green-500", borderColor: "hover:border-emerald-300", name: "進銷存管理包", tagline: "採購到出貨 · 手機掃碼 · 智能補貨", features: ["採購申請 → 三方比對 → 驗收入庫", "批號效期追蹤", "安全庫存自動補貨", "多倉調撥管理", "庫存成本估價"], popular: true },
  { icon: IconCreditCard, color: "from-amber-500 to-orange-500", borderColor: "hover:border-amber-300", name: "財務會計包", tagline: "傳票自動化 · 一鍵對帳 · 稅務申報", features: ["應收應付自動沖帳", "銀行對帳自動比對", "資產負債表 + 損益表", "預算管理 + 成本中心"], popular: false },
  { icon: IconGitBranch, color: "from-blue-500 to-indigo-500", borderColor: "hover:border-blue-300", name: "流程管理包", tagline: "AI 生成 SOP · 任務追蹤 · 多層簽核", features: ["AI 自動生成 SOP 流程", "任務指派 + LINE 通知", "多關卡簽核流程", "查核清單管理"], popular: false },
  { icon: IconChartBar, color: "from-pink-500 to-rose-500", borderColor: "hover:border-pink-300", name: "數據分析包", tagline: "跨模組洞察 · AI 異常偵測 · 自訂報表", features: ["營運儀表板即時 KPI", "銷售預測 + 異常偵測", "AI 助理對話式分析"], popular: false },
];

export function Bundles() {
  return (
    <section id="bundles" className="py-28 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-bold mb-6">
            📦 解決方案
          </span>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            依需求選擇<span className="gradient-text">方案包</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-lg mx-auto">
            或自由組合單一模組，打造最適合你的系統
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {BUNDLES.map((b, i) => {
            const Icon = b.icon;
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className={`group relative p-6 rounded-2xl bg-white border-2 ${b.popular ? "border-emerald-300 shadow-lg shadow-emerald-500/10" : "border-transparent"} ${b.borderColor} hover:shadow-xl transition-all duration-400`}
                >
                  {b.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[11px] font-bold flex items-center gap-1 whitespace-nowrap shadow-md">
                      <IconStar size={12} /> 最受歡迎
                    </div>
                  )}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-4 shadow-md`}>
                    <Icon size={20} className="text-white" stroke={1.5} />
                  </div>
                  <h3 className="font-[var(--font-display)] font-bold text-base mb-1">{b.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{b.tagline}</p>
                  <ul className="space-y-2 mb-5">
                    {b.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                        <IconCheck size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-2.5 rounded-xl border-2 border-slate-100 text-sm font-bold text-slate-600 hover:border-indigo-200 hover:text-indigo-600 flex items-center justify-center gap-1 transition-all duration-200 group-hover:border-indigo-200">
                    了解方案 <IconChevronRight size={14} />
                  </button>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
