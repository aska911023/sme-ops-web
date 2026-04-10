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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-sm border-b border-black/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("hero")}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-[var(--font-display)] font-bold text-sm shadow-lg shadow-indigo-500/20">
            S
          </div>
          <span className="font-[var(--font-display)] font-bold text-lg tracking-tight">
            SME OPS
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "痛點", id: "pain" },
            { label: "方案", id: "bundles" },
            { label: "LINE", id: "line" },
            { label: "導入", id: "timeline" },
            { label: "體驗", id: "try" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-lg hover:bg-black/[0.03] transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          預約諮詢 <IconArrowRight size={15} />
        </button>
      </div>
    </nav>
  );
}
