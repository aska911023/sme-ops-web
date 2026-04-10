"use client";
import { motion } from "framer-motion";
import { ScrollReveal } from "./AnimatedText";
import { ScheduleMockup, LineChatMockup, WorkflowMockup } from "./SystemMockups";

const MODULES = [
  {
    name: "LINE 行動辦公",
    desc: "員工用 LINE 就能打卡、查薪資、請假、回報任務。零學習成本，開通即用。",
    tag: "最多人選",
    features: ["GPS 打卡驗證", "薪資查詢", "請假申請", "任務回報"],
    mockup: "line",
    glow: "bg-emerald-500/[0.06]",
  },
  {
    name: "AI 智慧排班",
    desc: "一鍵排班，15 條勞基法約束自動合規。代班、換班、加班全自動化流程。",
    tag: "AI 驅動",
    features: ["勞基法合規", "智慧代班", "門市專屬班別", "優先級排序"],
    mockup: "schedule",
    glow: "bg-indigo-500/[0.06]",
  },
  {
    name: "流程自動化",
    desc: "用自然語言描述需求，AI 自動生成 SOP。任務指派、多層簽核、LINE 推播。",
    tag: "效率翻倍",
    features: ["AI 生成 SOP", "多層簽核", "LINE 通知", "進度追蹤"],
    mockup: "workflow",
    glow: "bg-cyan-500/[0.06]",
  },
];

function MockupRenderer({ type }: { type: string }) {
  switch (type) {
    case "line": return <LineChatMockup />;
    case "schedule": return <ScheduleMockup />;
    case "workflow": return <WorkflowMockup />;
    default: return null;
  }
}

export function HotModules() {
  return (
    <section id="hot" className="relative py-28 lg:py-36 px-6 lg:px-8 bg-[#0E1024]">
      <div className="absolute inset-0 bg-dots" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-lg mb-20">
            <span className="text-[13px] font-medium text-indigo-400 tracking-wider uppercase mb-4 block">Popular Modules</span>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-[2.8rem] font-bold tracking-tight leading-[1.15] mb-4 text-white">
              最受歡迎的模組
            </h2>
            <p className="text-[16px] text-white/40 leading-relaxed">
              超過 80% 客戶首選導入，每個模組都可以獨立運作。
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {MODULES.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-white/[0.06] bg-[#12142A]/60 overflow-hidden group hover:border-white/[0.1] transition-all duration-400"
            >
              {/* Glow */}
              <div className={`absolute -top-20 ${i % 2 === 0 ? "-right-20" : "-left-20"} w-[300px] h-[300px] rounded-full ${mod.glow} blur-[80px] pointer-events-none`} />

              <div className={`relative grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-10 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <span className="inline-block text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/[0.06] text-white/50 mb-5">
                    {mod.tag}
                  </span>
                  <h3 className="font-[var(--font-display)] text-2xl lg:text-3xl font-bold text-white mb-4">{mod.name}</h3>
                  <p className="text-white/40 leading-relaxed mb-6">{mod.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {mod.features.map((f, j) => (
                      <span key={j} className="px-3 py-1.5 rounded-lg border border-white/[0.06] text-[12px] font-medium text-white/50 bg-white/[0.02]">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mockup */}
                <div className={`${i % 2 === 1 ? "lg:[direction:ltr]" : ""} max-w-sm ${i % 2 === 1 ? "lg:mr-auto" : "lg:ml-auto"}`}>
                  <MockupRenderer type={mod.mockup} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
