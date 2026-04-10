"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconSend, IconCheck, IconBuilding, IconUser, IconMail, IconPhone, IconUsers, IconChevronDown } from "@tabler/icons-react";
import { ScrollReveal } from "./AnimatedText";

const PAIN_OPTIONS = [
  "打卡出勤管理混亂",
  "排班耗時費力",
  "薪資計算容易出錯",
  "庫存管理靠人工",
  "請假簽核流程慢",
  "開店 / 展店流程沒有 SOP",
  "缺乏數據分析能力",
  "其他",
];

const SCALE_OPTIONS = [
  "1-10 人",
  "11-30 人",
  "31-50 人",
  "51-100 人",
  "100 人以上",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedPains, setSelectedPains] = useState<string[]>([]);

  const togglePain = (pain: string) => {
    setSelectedPains((prev) =>
      prev.includes(pain) ? prev.filter((p) => p !== pain) : [...prev, pain]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-28 lg:py-36 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-8">
              <IconCheck size={36} className="text-emerald-400" />
            </div>
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
              感謝你的填寫！
            </h2>
            <p className="text-white/40 text-lg">
              我們的顧問會在 1-2 個工作天內與你聯繫，安排免費的營運診斷。
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-28 lg:py-36 px-6 lg:px-8 bg-[#0E1024]">
      <div className="absolute inset-0 bg-dots" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20">
          {/* Left: intro */}
          <ScrollReveal>
            <div>
              <span className="text-[13px] font-medium text-indigo-400 tracking-wider uppercase mb-4 block">Contact</span>
              <h2 className="font-[var(--font-display)] text-3xl lg:text-4xl font-bold tracking-tight leading-[1.15] mb-5">
                <span className="text-white">免費營運診斷</span>
                <br />
                <span className="text-white/35">從這裡開始</span>
              </h2>
              <p className="text-white/40 leading-relaxed mb-8">
                填寫以下問卷，讓我們的顧問了解你的需求。我們會在 1-2 個工作天內聯繫你，安排 30 分鐘的線上診斷。
              </p>

              {/* Trust signals */}
              <div className="space-y-4">
                {[
                  "免費諮詢，無任何費用",
                  "不強迫購買，純粹了解需求",
                  "30 分鐘即可完成診斷",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <IconCheck size={11} className="text-emerald-400" />
                    </div>
                    <span className="text-[14px] text-white/50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.06] bg-[#12142A]/60 p-6 sm:p-8 space-y-6">
              {/* Name + Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">
                    姓名 *
                  </label>
                  <div className="relative">
                    <IconUser size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                      required
                      type="text"
                      placeholder="王小明"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[14px] placeholder:text-white/20 focus:border-indigo-500/40 focus:bg-white/[0.06] outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">
                    公司名稱 *
                  </label>
                  <div className="relative">
                    <IconBuilding size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                      required
                      type="text"
                      placeholder="OO 有限公司"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[14px] placeholder:text-white/20 focus:border-indigo-500/40 focus:bg-white/[0.06] outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">
                    Email *
                  </label>
                  <div className="relative">
                    <IconMail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[14px] placeholder:text-white/20 focus:border-indigo-500/40 focus:bg-white/[0.06] outline-none transition-all duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">
                    電話
                  </label>
                  <div className="relative">
                    <IconPhone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                    <input
                      type="tel"
                      placeholder="09xx-xxx-xxx"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[14px] placeholder:text-white/20 focus:border-indigo-500/40 focus:bg-white/[0.06] outline-none transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Company scale */}
              <div>
                <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">
                  公司規模 *
                </label>
                <div className="relative">
                  <IconUsers size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" />
                  <IconChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none" />
                  <select
                    required
                    className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[14px] appearance-none focus:border-indigo-500/40 focus:bg-white/[0.06] outline-none transition-all duration-200"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#12142A] text-white/40">請選擇</option>
                    {SCALE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#12142A] text-white">{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Pain points - multi select chips */}
              <div>
                <label className="block text-[12px] font-medium text-white/40 mb-3 tracking-wide">
                  目前最困擾的問題（可複選）
                </label>
                <div className="flex flex-wrap gap-2">
                  {PAIN_OPTIONS.map((pain) => {
                    const active = selectedPains.includes(pain);
                    return (
                      <button
                        key={pain}
                        type="button"
                        onClick={() => togglePain(pain)}
                        className={`px-3.5 py-2 rounded-xl text-[13px] font-medium border transition-all duration-200 ${
                          active
                            ? "bg-indigo-500/15 border-indigo-500/30 text-indigo-300"
                            : "bg-white/[0.02] border-white/[0.06] text-white/40 hover:border-white/[0.12] hover:text-white/60"
                        }`}
                      >
                        {active && <IconCheck size={12} className="inline mr-1.5 -mt-0.5" />}
                        {pain}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[12px] font-medium text-white/40 mb-2 tracking-wide">
                  其他補充
                </label>
                <textarea
                  rows={3}
                  placeholder="有什麼想讓我們事先了解的？"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white text-[14px] placeholder:text-white/20 focus:border-indigo-500/40 focus:bg-white/[0.06] outline-none transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-white text-[#0B0D1A] text-[15px] font-semibold hover:bg-white/90 transition-colors duration-200"
              >
                送出，預約免費診斷
                <IconSend size={16} />
              </motion.button>

              <p className="text-[11px] text-white/20 text-center">
                提交即表示同意我們的隱私政策。我們不會將你的資料分享給第三方。
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
