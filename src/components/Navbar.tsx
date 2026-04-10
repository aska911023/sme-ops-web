"use client";
import { useState, useEffect } from "react";
import { IconArrowRight } from "@tabler/icons-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D1A]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo("hero")}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-[var(--font-display)] font-bold text-xs">
            S
          </div>
          <span className="font-[var(--font-display)] font-bold text-[15px] tracking-tight text-white">SME OPS</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "痛點", id: "pain" },
            { label: "模組", id: "hot" },
            { label: "方案", id: "bundles" },
            { label: "導入", id: "timeline" },
          ].map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="px-3.5 py-1.5 text-[13px] font-medium text-white/50 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="group flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0B0D1A] text-[13px] font-semibold hover:bg-white/90 transition-colors duration-200"
        >
          預約諮詢
          <IconArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </nav>
  );
}
