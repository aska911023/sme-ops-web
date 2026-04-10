"use client";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "./AnimatedText";

export function FinalCTA() {
  return (
    <section className="py-28 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative p-12 sm:p-16 rounded-[2rem] overflow-hidden text-center">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-cyan-50 rounded-[2rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.08),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.06),transparent_60%)]" />
            <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/60" />

            <div className="relative">
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                不確定從哪裡開始？
              </h2>
              <p className="text-lg text-slate-500 max-w-lg mx-auto mb-8">
                預約 30 分鐘線上營運診斷，由顧問協助盤點管理痛點，評估哪些模組最能產生即時效益。
              </p>
              <motion.button
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-lg font-bold shadow-xl shadow-indigo-500/30 overflow-hidden"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">預約免費營運診斷</span>
                <IconArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
