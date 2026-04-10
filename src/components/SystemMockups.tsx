"use client";

/* ═══════════════════════════════════════════════════
   System UI Mockups — Based on actual sme-ops-system
   All proportions use consistent 280px card width
   ═══════════════════════════════════════════════════ */

const CARD = "rounded-xl border border-white/[0.08] bg-[#111827] shadow-2xl shadow-black/40 overflow-hidden";
const TOOLBAR = "px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between";
const BADGE_GREEN = "px-2 py-0.5 rounded-full text-[8px] font-semibold bg-emerald-500/15 text-emerald-400";
const BADGE_ORANGE = "px-2 py-0.5 rounded-full text-[8px] font-semibold bg-amber-500/15 text-amber-400";
const BADGE_RED = "px-2 py-0.5 rounded-full text-[8px] font-semibold bg-red-500/15 text-red-400";
const BADGE_CYAN = "px-2 py-0.5 rounded-full text-[8px] font-semibold bg-cyan-500/15 text-cyan-400";
const STAT_CARD = "rounded-lg bg-white/[0.03] border border-white/[0.04] p-2.5 text-center";

/* ── 排班表 (from Schedule.jsx) ── */
export function ScheduleMockup() {
  const days = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];
  const dates = ["4/7", "4/8", "4/9", "4/10", "4/11", "4/12", "4/13"];
  const emps = [
    { name: "王小明", sub: "正職·40h", shifts: ["09-18", "09-18", "休", "09-18", "09-18", "13-22", "休"], colors: ["cyan", "cyan", "", "cyan", "cyan", "violet", ""] },
    { name: "李佳穎", sub: "計時·32h", shifts: ["13-22", "休", "13-22", "13-22", "休", "09-18", "09-18"], colors: ["violet", "", "violet", "violet", "", "cyan", "cyan"] },
    { name: "陳建宏", sub: "正職·40h", shifts: ["09-18", "09-18", "09-18", "休", "13-22", "休", "09-18"], colors: ["cyan", "cyan", "cyan", "", "violet", "", "cyan"] },
  ];
  const shiftColor: Record<string, string> = {
    cyan: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
    violet: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  };
  return (
    <div className={CARD}>
      <div className={TOOLBAR}>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-white/90">📅 排班表</span>
          <span className="text-white/20">|</span>
          <span className="text-[10px] text-white/50">信義店</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] text-white/40">◀</span>
          <span className="px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 text-[9px] font-semibold">4/7 ~ 4/13</span>
          <span className="text-[9px] text-white/40">▶</span>
        </div>
      </div>
      {/* Compliance banner */}
      <div className="px-4 py-1.5 bg-emerald-500/[0.06] border-b border-emerald-500/10 flex items-center gap-2">
        <span className="text-[9px] text-emerald-400">🛡️ 排班符合勞基法規定</span>
      </div>
      {/* Stat row */}
      <div className="grid grid-cols-4 gap-1.5 px-3 py-2">
        {[
          { label: "總排班時數", value: "152h", color: "text-cyan-400" },
          { label: "人均週時", value: "38h", color: "text-emerald-400" },
          { label: "平均休假", value: "2.0 天", color: "text-amber-400" },
          { label: "超時人數", value: "0", color: "text-emerald-400" },
        ].map((s, i) => (
          <div key={i} className={STAT_CARD}>
            <div className="text-[7px] text-white/40 mb-0.5">{s.label}</div>
            <div className={`text-[11px] font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="px-2 pb-2">
        <table className="w-full text-[9px]">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="text-left px-2 py-1.5 text-white/40 font-medium">員工</th>
              {days.map((d, i) => (
                <th key={i} className={`text-center px-0.5 py-1.5 font-medium ${i >= 5 ? "text-red-400/60" : "text-white/40"}`}>
                  <div>{d}</div>
                  <div className={`text-[7px] ${i >= 5 ? "text-red-400/40" : "text-white/25"}`}>{dates[i]}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {emps.map((emp, i) => (
              <tr key={i} className="border-b border-white/[0.03] last:border-0">
                <td className="px-2 py-1.5 min-w-[60px]">
                  <div className="font-semibold text-white/80 text-[9px]">{emp.name}</div>
                  <div className="text-[7px] text-white/35">{emp.sub}</div>
                </td>
                {emp.shifts.map((s, j) => (
                  <td key={j} className="text-center px-0.5 py-1">
                    {s === "休" ? (
                      <span className="inline-block px-1.5 py-0.5 rounded-md bg-white/[0.03] text-white/25 border border-white/[0.04]">休</span>
                    ) : (
                      <span className={`inline-block px-1.5 py-0.5 rounded-md border font-semibold ${shiftColor[emp.colors[j]] || ""}`}>{s}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Shift legend */}
      <div className="px-3 py-1.5 border-t border-white/[0.04] bg-white/[0.02] flex items-center gap-2 text-[8px]">
        <span className="flex items-center gap-1"><span className="w-2.5 h-2 rounded-sm bg-cyan-500/30 border border-cyan-500/30" />早班</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2 rounded-sm bg-violet-500/30 border border-violet-500/30" />晚班</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2 rounded-sm bg-white/[0.04] border border-white/[0.06]" />休假</span>
      </div>
    </div>
  );
}

/* ── 營運儀表板 (from HRReport/HRAnalytics) ── */
export function DashboardMockup() {
  return (
    <div className={CARD}>
      <div className={TOOLBAR}>
        <span className="text-[11px] font-bold text-white/90">📊 營運儀表板</span>
        <span className="text-[9px] text-white/35">即時</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-3">
        {[
          { label: "在職人數", value: "47", sub: "+2", color: "text-cyan-400", subColor: "text-emerald-400" },
          { label: "本月加班", value: "128h", sub: "-12%", color: "text-amber-400", subColor: "text-emerald-400" },
          { label: "待審假單", value: "3", sub: "", color: "text-violet-400", subColor: "" },
          { label: "本月薪資", value: "1.4M", sub: "", color: "text-emerald-400", subColor: "" },
        ].map((s, i) => (
          <div key={i} className={STAT_CARD}>
            <div className="text-[7px] text-white/40 mb-0.5">{s.label}</div>
            <div className={`text-[12px] font-bold ${s.color}`}>{s.value}</div>
            {s.sub && <div className={`text-[7px] mt-0.5 ${s.subColor}`}>{s.sub}</div>}
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="px-3 pb-3">
        <div className="text-[8px] text-white/35 mb-1">人數趨勢（近 12 月）</div>
        <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-2 h-14 flex items-end gap-[2px]">
          {[38, 40, 42, 41, 43, 44, 42, 45, 44, 46, 45, 47].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500/50 to-cyan-400/30" style={{ height: `${(h / 50) * 100}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 流程追蹤 (from Workflows.jsx — ActiveInstancesList) ── */
export function WorkflowMockup() {
  const instances = [
    { name: "信義店 — 新店開幕 SOP", template: "開店流程", date: "2026-04-01", pending: 2, inProg: 3, done: 7, pct: 58 },
    { name: "教育訓練 Q2", template: "教育訓練", date: "2026-03-20", pending: 0, inProg: 1, done: 5, pct: 83 },
    { name: "POS 系統切換", template: "系統導入", date: "2026-04-05", pending: 4, inProg: 2, done: 1, pct: 14 },
  ];
  return (
    <div className={CARD}>
      <div className={TOOLBAR}>
        <span className="text-[11px] font-bold text-white/90">🔄 流程管理</span>
        <span className={BADGE_CYAN}>3 進行中</span>
      </div>
      <div className="p-3 space-y-2">
        {instances.map((inst, i) => (
          <div key={i} className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5 flex items-center gap-3 hover:border-cyan-500/20 transition-colors cursor-default">
            {/* Donut */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray={`${inst.pct * 1.005} 100.5`} strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-cyan-400">{inst.pct}%</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold text-white/80 truncate">{inst.name}</div>
              <div className="text-[8px] text-white/35 mt-0.5">{inst.template} · {inst.date}</div>
              <div className="flex gap-2 mt-1 text-[8px]">
                <span className="text-white/40">⬜ {inst.pending}</span>
                <span className="text-cyan-400">🔄 {inst.inProg}</span>
                <span className="text-emerald-400">✅ {inst.done}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── LINE Bot 對話 ── */
export function LineChatMockup() {
  return (
    <div className={`${CARD} !bg-[#1a3226]`}>
      <div className="bg-[#15291f] px-4 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
        <div className="w-6 h-6 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 text-[9px] font-bold">S</div>
        <span className="text-white/90 font-semibold text-[11px]">SME Ops Bot</span>
      </div>
      <div className="p-3 space-y-2.5">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
          <div className="bg-[#1e4030] rounded-2xl rounded-tl-md px-3 py-2 max-w-[78%]">
            <div className="text-[10px] text-white/80 leading-relaxed">您好！已收到打卡紀錄</div>
            <div className="text-white/30 text-[8px] mt-1">09:01</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
          <div className="bg-[#1e4030] rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%]">
            <div className="text-[8px] text-white/30 mb-1">打卡成功</div>
            <div className="text-white/90 text-[11px] font-semibold">上班 09:01</div>
            <div className="text-[9px] text-white/45 mt-0.5">📍 信義店 · GPS 已驗證</div>
            <div className="mt-2 pt-2 border-t border-white/[0.06] flex gap-1.5">
              <span className={BADGE_GREEN}>正常</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-emerald-600/30 rounded-2xl rounded-tr-md px-3 py-2 max-w-[70%]">
            <div className="text-[10px] text-white/90">查詢本月薪資</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
          <div className="bg-[#1e4030] rounded-2xl rounded-tl-md px-3 py-2 max-w-[80%]">
            <div className="text-[8px] text-white/30 mb-1">薪資查詢</div>
            <div className="text-[10px] text-white/60">2026 年 3 月</div>
            <div className="text-[14px] font-bold text-emerald-400 mt-1">NT$ 38,450</div>
            <div className="text-[8px] text-white/35 mt-1">底薪 36,000 + 加班 4,800 − 扣項 2,350</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── LIFF 打卡 (from LiffClockIn.jsx — light theme phone frame) ── */
export function LiffClockInMockup() {
  return (
    <div className="rounded-[24px] border-[2.5px] border-white/[0.12] bg-white shadow-2xl shadow-black/50 overflow-hidden w-[190px] mx-auto">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1 text-[8px] text-slate-400 bg-white">
        <span className="font-medium">9:01</span>
        <div className="flex gap-1.5 items-center">
          <svg width="12" height="8" viewBox="0 0 12 8"><path d="M1 7h1V3h-1zM4 7h1V2h-1zM7 7h1V1h-1zM10 7h1V0h-1z" fill="#94a3b8" /></svg>
          <div className="w-4 h-2 rounded-sm border border-slate-300 relative"><div className="absolute inset-[1px] right-[2px] bg-slate-400 rounded-[1px]" /></div>
        </div>
      </div>
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-[8px] text-white font-bold shadow-sm">S</div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">SME OPS</div>
          <div className="text-[7px] text-slate-400">打卡系統</div>
        </div>
        <span className="ml-auto px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[7px] font-semibold border border-emerald-100">LINE</span>
      </div>
      {/* Employee card */}
      <div className="mx-3 mt-2.5 rounded-xl border border-slate-200 p-3 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-[11px] text-white font-bold flex-shrink-0">王</div>
        <div>
          <div className="text-[11px] font-extrabold text-slate-800">王小明</div>
          <div className="text-[8px] text-slate-500">正職 · 門市部</div>
          <div className="text-[7px] text-slate-400 flex items-center gap-0.5 mt-0.5">📍 信義店</div>
        </div>
      </div>
      {/* Time */}
      <div className="text-center py-4">
        <div className="text-[28px] font-extrabold text-slate-800 tracking-wider leading-none">09:01</div>
        <div className="text-[9px] text-slate-400 mt-1">2026年4月10日 (四)</div>
      </div>
      {/* Today record */}
      <div className="mx-3 rounded-xl bg-slate-50 border border-slate-100 p-2.5 mb-2">
        <div className="text-[8px] font-semibold text-slate-400 mb-1.5">今日紀錄</div>
        <div className="flex items-center justify-between text-[9px]">
          <div><span className="font-bold text-cyan-600">09:01</span> <span className="text-slate-400">上班</span></div>
          <div><span className="text-slate-300">--:--</span> <span className="text-slate-400">下班</span></div>
        </div>
      </div>
      {/* Button */}
      <div className="px-3 pb-3">
        <div className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-[11px] font-extrabold text-white shadow-md shadow-cyan-500/30 flex items-center justify-center gap-1">
          ⏰ 上班打卡
        </div>
        <div className="flex items-center justify-center gap-1 mt-2 text-[7px] text-emerald-500">
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
          GPS 已驗證 · 192.168.1.100
        </div>
      </div>
      {/* Home indicator */}
      <div className="flex justify-center py-1.5"><div className="h-1 w-10 rounded-full bg-slate-200" /></div>
    </div>
  );
}

/* ── LIFF 薪資查詢 (from Salary.jsx logic — light theme phone frame) ── */
export function LiffSalaryMockup() {
  return (
    <div className="rounded-[24px] border-[2.5px] border-white/[0.12] bg-white shadow-2xl shadow-black/50 overflow-hidden w-[190px] mx-auto">
      <div className="flex items-center justify-between px-4 py-1 text-[8px] text-slate-400 bg-white">
        <span className="font-medium">9:41</span>
        <div className="w-4 h-2 rounded-sm border border-slate-300 relative"><div className="absolute inset-[1px] right-[2px] bg-slate-400 rounded-[1px]" /></div>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-100">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-[8px] text-white font-bold shadow-sm">S</div>
        <div>
          <div className="text-[10px] font-bold text-slate-800">薪資明細</div>
          <div className="text-[7px] text-slate-400">2026 年 3 月</div>
        </div>
      </div>
      {/* Net salary */}
      <div className="text-center pt-4 pb-3 px-3">
        <div className="text-[8px] text-slate-400 mb-0.5">實領金額</div>
        <div className="text-[24px] font-extrabold text-emerald-600 leading-none">$38,450</div>
      </div>
      {/* Breakdown */}
      <div className="mx-3 mb-2 space-y-1">
        {[
          { label: "底薪", value: "$36,000", color: "text-slate-700", sign: "" },
          { label: "加班費", value: "+$4,800", color: "text-cyan-600", sign: "+" },
          { label: "勞健保", value: "-$1,850", color: "text-amber-600", sign: "−" },
          { label: "所得稅", value: "-$500", color: "text-amber-600", sign: "−" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center text-[9px] px-2.5 py-2 rounded-lg bg-slate-50 border border-slate-100">
            <span className="text-slate-500">{item.label}</span>
            <span className={`font-semibold ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </div>
      {/* Divider */}
      <div className="mx-3 mb-2 border-t border-dashed border-slate-200 pt-2">
        <div className="flex justify-between items-center text-[9px] px-2.5">
          <span className="text-slate-500 font-medium">Gross</span>
          <span className="font-bold text-slate-700">$40,800</span>
        </div>
        <div className="flex justify-between items-center text-[9px] px-2.5 mt-1">
          <span className="text-slate-500 font-medium">扣除</span>
          <span className="font-bold text-red-500">-$2,350</span>
        </div>
      </div>
      <div className="flex justify-center py-1.5"><div className="h-1 w-10 rounded-full bg-slate-200" /></div>
    </div>
  );
}

/* ── 出勤總覽 (from Attendance.jsx) ── */
export function AttendanceMockup() {
  return (
    <div className={CARD}>
      <div className={TOOLBAR}>
        <span className="text-[11px] font-bold text-white/90">⏰ 打卡追蹤</span>
        <span className="text-[9px] text-white/35">4 月</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 p-3">
        {[
          { label: "正常", value: "89%", color: "text-emerald-400", bg: "bg-emerald-500/[0.06]" },
          { label: "遲到", value: "6%", color: "text-amber-400", bg: "bg-amber-500/[0.06]" },
          { label: "未打卡", value: "3%", color: "text-red-400", bg: "bg-red-500/[0.06]" },
          { label: "平均工時", value: "8.2h", color: "text-cyan-400", bg: "bg-cyan-500/[0.06]" },
        ].map((s, i) => (
          <div key={i} className={`rounded-lg ${s.bg} border border-white/[0.04] p-2 text-center`}>
            <div className="text-[7px] text-white/40 mb-0.5">{s.label}</div>
            <div className={`text-[12px] font-bold ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="px-3 pb-2">
        <table className="w-full text-[9px]">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="text-left py-1.5 text-white/40 font-medium">員工</th>
              <th className="text-center py-1.5 text-white/40 font-medium">上班</th>
              <th className="text-center py-1.5 text-white/40 font-medium">下班</th>
              <th className="text-center py-1.5 text-white/40 font-medium">工時</th>
              <th className="text-right py-1.5 text-white/40 font-medium">狀態</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "王小明", in: "09:01", out: "18:05", hours: "9.0h", status: "正常", badge: BADGE_GREEN },
              { name: "李佳穎", in: "09:18", out: "18:30", hours: "9.2h", status: "遲到", badge: BADGE_ORANGE },
              { name: "陳建宏", in: "08:55", out: "18:00", hours: "9.0h", status: "正常", badge: BADGE_GREEN },
              { name: "張雅婷", in: "--:--", out: "--:--", hours: "-", status: "未打卡", badge: BADGE_RED },
            ].map((r, i) => (
              <tr key={i} className="border-b border-white/[0.03] last:border-0">
                <td className="py-1.5 font-semibold text-white/75">{r.name}</td>
                <td className="py-1.5 text-center text-cyan-400/80">{r.in}</td>
                <td className="py-1.5 text-center text-amber-400/80">{r.out}</td>
                <td className="py-1.5 text-center text-white/50">{r.hours}</td>
                <td className="py-1.5 text-right"><span className={r.badge}>{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── 庫存管理 (from WMS/Overview.jsx) ── */
export function InventoryMockup() {
  return (
    <div className={CARD}>
      <div className={TOOLBAR}>
        <span className="text-[11px] font-bold text-white/90">📦 庫存管理</span>
        <span className={BADGE_ORANGE}>2 待補貨</span>
      </div>
      <div className="p-3 space-y-2">
        {[
          { name: "紅酒 Château Margaux", sku: "W-001", stock: 12, min: 10, pct: 80, status: "充足", color: "text-emerald-400", bar: "bg-emerald-400/40" },
          { name: "白蘭地 VSOP", sku: "W-042", stock: 3, min: 10, pct: 20, status: "不足", color: "text-red-400", bar: "bg-red-400/40" },
          { name: "清酒 純米大吟釀", sku: "W-108", stock: 8, min: 10, pct: 53, status: "低於安全量", color: "text-amber-400", bar: "bg-amber-400/40" },
          { name: "精釀啤酒 IPA", sku: "W-203", stock: 45, min: 20, pct: 95, status: "充足", color: "text-emerald-400", bar: "bg-emerald-400/40" },
        ].map((item, i) => (
          <div key={i} className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-2.5">
            <div className="flex items-center justify-between mb-1.5">
              <div className="min-w-0">
                <span className="text-[9px] font-semibold text-white/80 truncate block">{item.name}</span>
                <span className="text-[7px] text-white/30">{item.sku}</span>
              </div>
              <span className={`text-[8px] font-semibold ${item.color} flex-shrink-0 ml-2`}>{item.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/[0.04]">
                <div className={`h-full rounded-full ${item.bar}`} style={{ width: `${item.pct}%` }} />
              </div>
              <span className="text-[8px] text-white/40 w-10 text-right flex-shrink-0">{item.stock}/{item.min}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
