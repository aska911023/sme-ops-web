import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SME Ops — 中小企業營運管理平台",
  description: "不限使用人數，彈性選購模組。涵蓋人資、排班、進銷存、財務、流程管理 16 大模組。專為台灣中小企業打造。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-[#0B0D1A] text-white font-[var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
