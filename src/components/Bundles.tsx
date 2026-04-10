"use client";
import { motion } from "framer-motion";
import { IconCheck, IconArrowRight, IconStar, IconUsers, IconPackage, IconCreditCard, IconGitBranch, IconChartBar } from "@tabler/icons-react";
import { ScrollReveal } from "./AnimatedText";

const BUNDLES = [
  { icon: IconUsers, color: "from-violet-500 to-purple-500", glowColor: "violet", name: "人資行政包", tagline: "LINE 打卡 · AI 排班 · 自動算薪", features: ["GPS + WiFi 打卡", "AI 排班 + 勞基法合規", "14 種假別管理", "智能代班推薦", "員工 LIFF 自助"], popular: false },
  { icon: IconPackage, color: "from-emerald-500 to-teal-500", glowColor: "emerald", name: "進銷存管理包", tagline: "採購到出貨 · 智能補貨", features: ["採購 → 比對 → 入庫", "批號效期追蹤", "安全庫存補貨", "多倉調撥", "成本估價"], popular: true },
  { icon: IconCreditCard, color: "from-amber-500 to-orange-500", glowColor: "amber", name: "財務會計包", tagline: "傳票自動化 · 報表產出", features: ["應收應付沖帳", "銀行對帳比對", "損益/資產負債表", "預算+成本中心"], popular: false },
  { icon: IconGitBranch, color: "from-blue-500 to-indigo-500", glowColor: "indigo", name: "流程管理包", tagline: "AI SOP · 任務 · 簽核", features: ["AI 生成 SOP", "任務+LINE 通知", "多關卡簽核", "查核清單"], popular: false },
  { icon: IconChartBar, color: "from-rose-500 to-pink-500", glowColor: "rose", name: "數據分析包", tagline: "AI 洞察 · 異常偵測", features: ["即時 KPI 儀表板", "銷售預測", "AI 對話分析"], popular: false },
];

export function Bundles() {
  return (
    <section id="bundles" className="relative py-28 lg:py-36 px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 mb-16">
            <div>
              <span className="text-[13px] font-medium text-violet-400 tracking-wider uppercase mb-4 block">Solutions</span>
              <h2 className="font-[var(--font-display)] text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">五大方案包</span>
                <br />
                <span className="text-white/35">自由選配組合</span>
              </h2>
            </div>
            <p className="text-[16px] text-white/40 leading-relaxed lg:pt-8">
              每個方案包都可以獨立導入，也可以跨包組合單一模組。沒有綁定、沒有最低購買量。
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {BUNDLES.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.12)" }}
                className={`group relative rounded-2xl border border-white/[0.06] bg-[#12142A]/60 hover:bg-[#1A1D35]/80 transition-all duration-400 overflow-hidden ${
                  b.popular ? "ring-1 ring-emerald-500/30" : ""
                }`}
              >
                {b.popular && (
                  <div className="absolute top-0 right-0 px-2.5 py-1 rounded-bl-xl bg-emerald-500/20 text-emerald-300 text-[10px] font-bold flex items-center gap-1">
                    <IconStar size={10} /> 熱門
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.color} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={20} className="text-white" stroke={1.5} />
                  </div>

                  <h3 className="font-[var(--font-display)] font-bold text-[16px] text-white mb-1">{b.name}</h3>
                  <p className="text-[11px] text-white/30 mb-5">{b.tagline}</p>

                  <ul className="space-y-2 mb-5">
                    {b.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] text-white/50">
                        <IconCheck size={13} className="text-emerald-400/70 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/[0.08] text-[12px] font-semibold text-white/50 hover:border-white/20 hover:text-white/80 transition-all duration-200 group/btn"
                  >
                    了解方案
                    <IconArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
