"use client";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { ScrollReveal } from "./AnimatedText";

export function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.08),transparent_50%)]" />

            {/* Decorative floating elements */}
            <motion.div
              className="absolute top-8 right-12 w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.05]"
              animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-12 left-10 w-10 h-10 rounded-xl border border-white/10 bg-white/[0.05]"
              animate={{ y: [0, 6, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/4 w-6 h-6 rounded-lg border border-white/10 bg-white/[0.03]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />

            <div className="relative z-10 p-12 sm:p-16 lg:p-20 text-center">
              <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                不確定從哪裡開始？
              </h2>
              <p className="text-lg text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
                預約 30 分鐘線上營運診斷，由顧問協助盤點管理痛點，評估哪些模組最能產生即時效益。
              </p>
              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0B0D1A] text-[15px] font-semibold hover:bg-white/95 transition-colors duration-200"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                預約免費營運診斷
                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
