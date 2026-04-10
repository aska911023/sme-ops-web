import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SME Ops — 從一個模組開始，打造最適合您的數位大腦",
  description: "不限使用人數，彈性選購模組。涵蓋人資、排班、進銷存、財務、流程管理 16 大模組，跨模組資料即時串接。專為台灣中小企業打造。",
  keywords: ["ERP", "中小企業", "人資管理", "排班系統", "進銷存", "LINE整合", "AI排班"],
  openGraph: {
    title: "SME Ops — 按需選購，隨需擴充",
    description: "從一個模組開始，打造最適合您的數位大腦。不限使用人數，4 週快速導入。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-[#f8faff] text-slate-900 font-[var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
