"use client";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "痛點", id: "pain" },
  { label: "模組", id: "hot" },
  { label: "方案", id: "bundles" },
  { label: "導入", id: "timeline" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "bg-[#0B0D1A]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_10px_73px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2.5 cursor-pointer py-4"
            onClick={() => scrollTo("hero")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="relative"
              animate={{ height: scrolled ? 30 : 36, width: scrolled ? 30 : 36 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <span className="text-white font-bold text-xs">S</span>
              </div>
            </motion.div>
            <motion.span
              className="font-[var(--font-display)] font-bold tracking-tight text-white"
              animate={{ fontSize: scrolled ? "15px" : "17px" }}
              transition={{ duration: 0.3 }}
            >
              SME OPS
            </motion.span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollTo(link.id)}
                className="group relative px-4 py-5 text-[14px] font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
                <span className="absolute bottom-3 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-[60%] bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full transition-all duration-300 ease-out" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0B0D1A] text-[13px] font-semibold hover:bg-white/90 transition-colors duration-200"
            >
              預約諮詢
              <IconArrowRight size={14} />
            </motion.button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#020817]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-xl font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={() => scrollTo("contact")}
                className="mt-4 flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0B0D1A] font-semibold"
              >
                預約諮詢 <IconArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
