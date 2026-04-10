"use client";

/* ═══════════════════════════════════════════
   System UI Mockups (Dark Theme)
   All mockups simulate real sme-ops-system UI
   ═══════════════════════════════════════════ */

/* ── Schedule Table ── */
export function ScheduleMockup() {
  const days = ["一", "二", "三", "四", "五", "六", "日"];
  const employees = [
    { name: "王小明", pos: "正職", shifts: ["09-18", "09-18", "休", "09-18", "09-18", "13-22", "休"] },
    { name: "李佳穎", pos: "計時", shifts: ["13-22", "休", "13-22", "13-22", "休", "09-18", "09-18"] },
    { name: "陳建宏", pos: "正職", shifts: ["09-18", "09-18", "09-18", "休", "13-22", "休", "09-18"] },
    { name: "張雅婷", pos: "計時", shifts: ["休", "09-18", "09-18", "09-18", "09-18", "休", "13-22"] },
  ];
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#12142A]/90 shadow-2xl shadow-black/40 overflow-hidden text-[10px]">
      <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white/90 text-[11px]">排班表</span>
          <span className="text-white/20">|</span>
          <span className="text-white/50">信義店</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold text-[9px]">4/7 ~ 4/13</span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/[0.04]">
            <th className="text-left px-3 py-1.5 text-white/40 font-medium w-20">員工</th>
            {days.map((d, i) => (
              <th key={i} className={`text-center px-1 py-1.5 font-medium ${i >= 5 ? "text-red-400/70" : "text-white/40"}`}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i} className="border-b border-white/[0.03] last:border-0">
              <td className="px-3 py-1.5">
                <div className="font-medium text-white/80">{emp.name}</div>
                <div className="text-white/35 text-[9px]">{emp.pos}</div>
              </td>
              {emp.shifts.map((s, j) => (
                <td key={j} className="text-center px-0.5 py-1.5">
                  {s === "休" ? (
                    <span className="inline-block px-1.5 py-0.5 rounded bg-white/[0.04] text-white/30">休</span>
                  ) : (
                    <span className="inline-block px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-medium">{s}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-3 px-3 py-1.5 border-t border-white/[0.04] bg-white/[0.02] text-white/50">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald-400/60" /> 合規</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber-400/60" /> 警告 1</span>
      </div>
    </div>
  );
}

/* ── KPI Dashboard ── */
export function DashboardMockup() {
  const stats = [
    { label: "在職人數", value: "47", change: "+2", color: "text-indigo-400" },
    { label: "本月加班", value: "128h", change: "-12%", color: "text-amber-400" },
    { label: "待審假單", value: "3", change: "", color: "text-cyan-400" },
    { label: "本月薪資", value: "1.4M", change: "", color: "text-emerald-400" },
  ];
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#12142A]/90 shadow-2xl shadow-black/40 overflow-hidden text-[10px]">
      <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
        <span className="font-semibold text-white/90 text-[11px]">營運儀表板</span>
        <span className="text-white/35 text-[9px]">即時</span>
      </div>
      <div className="grid grid-cols-4 gap-2 p-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-lg bg-white/[0.03] p-2">
            <div className="text-white/40 text-[9px] mb-1">{s.label}</div>
            <div className={`font-bold text-sm ${s.color}`}>{s.value}</div>
            {s.change && <div className="text-[9px] mt-0.5 text-emerald-400/70">{s.change}</div>}
          </div>
        ))}
      </div>
      <div className="px-3 pb-3">
        <div className="rounded-lg bg-white/[0.03] p-2 h-16 flex items-end gap-[3px]">
          {[40, 55, 45, 65, 50, 72, 60, 68, 75, 58, 80, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-indigo-500/60 to-indigo-400/40" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Workflow Progress ── */
export function WorkflowMockup() {
  const tasks = [
    { name: "新店裝潢進度", progress: 75, status: "進行中", stroke: "#22d3ee" },
    { name: "員工教育訓練", progress: 100, status: "已完成", stroke: "#34d399" },
    { name: "POS 系統測試", progress: 30, status: "進行中", stroke: "#22d3ee" },
  ];
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#12142A]/90 shadow-2xl shadow-black/40 overflow-hidden text-[10px]">
      <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
        <span className="font-semibold text-white/90 text-[11px]">流程追蹤</span>
        <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-semibold text-[9px]">3 進行中</span>
      </div>
      <div className="p-3 space-y-2.5">
        {tasks.map((t, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <svg className="w-8 h-8 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                <circle cx="18" cy="18" r="14" fill="none" stroke={t.stroke} strokeWidth="3" strokeDasharray={`${t.progress * 0.88} 88`} strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white/60">{t.progress}%</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-white/80 truncate">{t.name}</div>
              <span className="text-[8px] font-medium text-cyan-400">{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── LINE Chat ── */
export function LineChatMockup() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#1a3a2a]/90 shadow-2xl shadow-black/40 overflow-hidden text-[10px]">
      <div className="bg-[#15302a] px-3 py-2 flex items-center gap-2 border-b border-white/[0.06]">
        <div className="w-5 h-5 rounded-full bg-emerald-500/30 flex items-center justify-center text-emerald-300 text-[8px] font-bold">S</div>
        <span className="text-white/90 font-semibold text-[11px]">SME Ops Bot</span>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
          <div className="bg-[#1e4535] rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[75%]">
            <div className="text-white/80">您好！已收到打卡紀錄</div>
            <div className="text-white/35 text-[8px] mt-0.5">09:01</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
          <div className="bg-[#1e4535] rounded-xl rounded-tl-sm px-2.5 py-2 max-w-[80%]">
            <div className="text-[9px] text-white/35 mb-1">打卡成功</div>
            <div className="text-white/90 font-medium">上班 09:01</div>
            <div className="text-[9px] text-white/45 mt-0.5">信義店 · GPS 已驗證</div>
            <div className="mt-1.5 pt-1.5 border-t border-white/[0.06]">
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[8px] font-medium">正常</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-emerald-600/40 rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[70%]">
            <div className="text-white/90">查詢本月薪資</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── NEW: LIFF Clock-In Phone Frame ── */
export function LiffClockInMockup() {
  return (
    <div className="rounded-[20px] border-2 border-white/[0.1] bg-[#0a0f1e] shadow-2xl shadow-black/50 overflow-hidden w-[180px] mx-auto">
      {/* Phone status bar */}
      <div className="flex items-center justify-between px-3 py-1 text-[7px] text-white/40">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-3 h-1.5 rounded-sm border border-white/30 relative"><div className="absolute inset-[1px] right-[2px] bg-white/40 rounded-[1px]" /></div>
        </div>
      </div>
      {/* App header */}
      <div className="px-3 py-2 text-center border-b border-white/[0.06]">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 mx-auto mb-1 flex items-center justify-center text-[7px] text-white font-bold">S</div>
        <div className="text-[9px] font-semibold text-white/80">SME Ops 打卡</div>
      </div>
      {/* Employee info */}
      <div className="px-3 py-2 text-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 mx-auto mb-1.5 flex items-center justify-center text-[8px] text-white font-bold">王</div>
        <div className="text-[9px] font-medium text-white/80">王小明</div>
        <div className="text-[7px] text-white/40">正職 · 信義店</div>
      </div>
      {/* Time */}
      <div className="text-center py-2">
        <div className="text-[22px] font-bold text-white tracking-tight">09:01</div>
        <div className="text-[7px] text-white/35">2026/04/10 (四)</div>
      </div>
      {/* Today record */}
      <div className="mx-3 mb-2 rounded-lg bg-white/[0.03] p-2">
        <div className="text-[7px] text-white/35 mb-1">今日紀錄</div>
        <div className="flex justify-between text-[8px]">
          <span className="text-cyan-400">上班 09:01</span>
          <span className="text-white/25">下班 --:--</span>
        </div>
      </div>
      {/* Clock button */}
      <div className="px-3 pb-3">
        <div className="w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-[10px] font-bold text-white shadow-lg shadow-cyan-500/20">
          上班打卡
        </div>
        <div className="flex items-center justify-center gap-1 mt-1.5 text-[7px] text-emerald-400/60">
          <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
          GPS 已驗證
        </div>
      </div>
    </div>
  );
}

/* ── NEW: LIFF Salary View Phone Frame ── */
export function LiffSalaryMockup() {
  return (
    <div className="rounded-[20px] border-2 border-white/[0.1] bg-[#0a0f1e] shadow-2xl shadow-black/50 overflow-hidden w-[180px] mx-auto">
      <div className="flex items-center justify-between px-3 py-1 text-[7px] text-white/40">
        <span>9:41</span>
        <div className="w-3 h-1.5 rounded-sm border border-white/30 relative"><div className="absolute inset-[1px] right-[2px] bg-white/40 rounded-[1px]" /></div>
      </div>
      <div className="px-3 py-2 border-b border-white/[0.06]">
        <div className="text-[9px] font-semibold text-white/80">薪資明細</div>
        <div className="text-[7px] text-white/35">2026 年 3 月</div>
      </div>
      {/* Net salary hero */}
      <div className="text-center py-3 px-3">
        <div className="text-[7px] text-white/35 mb-0.5">實領金額</div>
        <div className="text-[20px] font-bold text-emerald-400">$38,450</div>
      </div>
      {/* Breakdown */}
      <div className="mx-3 mb-2 space-y-1.5">
        <div className="flex justify-between text-[8px] px-2 py-1.5 rounded-lg bg-white/[0.03]">
          <span className="text-white/50">底薪</span>
          <span className="text-white/80 font-medium">$36,000</span>
        </div>
        <div className="flex justify-between text-[8px] px-2 py-1.5 rounded-lg bg-white/[0.03]">
          <span className="text-white/50">加班費</span>
          <span className="text-cyan-400 font-medium">+$4,800</span>
        </div>
        <div className="flex justify-between text-[8px] px-2 py-1.5 rounded-lg bg-white/[0.03]">
          <span className="text-white/50">勞健保</span>
          <span className="text-amber-400 font-medium">-$1,850</span>
        </div>
        <div className="flex justify-between text-[8px] px-2 py-1.5 rounded-lg bg-white/[0.03]">
          <span className="text-white/50">所得稅</span>
          <span className="text-amber-400 font-medium">-$500</span>
        </div>
      </div>
      {/* Bottom nav hint */}
      <div className="px-3 pb-2">
        <div className="h-1 w-12 rounded-full bg-white/10 mx-auto" />
      </div>
    </div>
  );
}

/* ── NEW: Attendance Stats ── */
export function AttendanceMockup() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#12142A]/90 shadow-2xl shadow-black/40 overflow-hidden text-[10px]">
      <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
        <span className="font-semibold text-white/90 text-[11px]">出勤總覽</span>
        <span className="text-white/35 text-[9px]">4 月</span>
      </div>
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-2 p-3">
        {[
          { label: "正常", value: "89%", color: "text-emerald-400", dot: "bg-emerald-400" },
          { label: "遲到", value: "6%", color: "text-amber-400", dot: "bg-amber-400" },
          { label: "未打卡", value: "3%", color: "text-red-400", dot: "bg-red-400" },
          { label: "請假", value: "2%", color: "text-blue-400", dot: "bg-blue-400" },
        ].map((s, i) => (
          <div key={i} className="rounded-lg bg-white/[0.03] p-2 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
              <span className="text-white/40 text-[8px]">{s.label}</span>
            </div>
            <div className={`font-bold text-[13px] ${s.color}`}>{s.value}</div>
          </div>
        ))}
      </div>
      {/* Mini table */}
      <div className="px-3 pb-3">
        <div className="rounded-lg bg-white/[0.03] overflow-hidden">
          {[
            { name: "王小明", time: "09:01", status: "正常", statusColor: "text-emerald-400" },
            { name: "李佳穎", time: "09:18", status: "遲到", statusColor: "text-amber-400" },
            { name: "陳建宏", time: "08:55", status: "正常", statusColor: "text-emerald-400" },
          ].map((r, i) => (
            <div key={i} className={`flex items-center justify-between px-2 py-1.5 ${i < 2 ? "border-b border-white/[0.03]" : ""}`}>
              <span className="text-white/60 font-medium">{r.name}</span>
              <span className="text-white/40">{r.time}</span>
              <span className={`text-[8px] font-medium ${r.statusColor}`}>{r.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── NEW: Inventory / WMS ── */
export function InventoryMockup() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#12142A]/90 shadow-2xl shadow-black/40 overflow-hidden text-[10px]">
      <div className="px-3 py-2 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
        <span className="font-semibold text-white/90 text-[11px]">庫存管理</span>
        <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-semibold text-[9px]">2 待補貨</span>
      </div>
      <div className="p-3 space-y-2">
        {[
          { name: "紅酒 Château", sku: "W-001", stock: 12, min: 10, status: "充足", color: "text-emerald-400", bar: "w-[80%] bg-emerald-400/40" },
          { name: "白蘭地 VSOP", sku: "W-042", stock: 3, min: 10, status: "不足", color: "text-red-400", bar: "w-[20%] bg-red-400/40" },
          { name: "清酒 純米大吟", sku: "W-108", stock: 8, min: 10, status: "低於安全量", color: "text-amber-400", bar: "w-[50%] bg-amber-400/40" },
          { name: "啤酒 IPA 精釀", sku: "W-203", stock: 45, min: 20, status: "充足", color: "text-emerald-400", bar: "w-[95%] bg-emerald-400/40" },
        ].map((item, i) => (
          <div key={i} className="rounded-lg bg-white/[0.03] p-2">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="font-medium text-white/80">{item.name}</span>
                <span className="text-white/25 ml-1.5">{item.sku}</span>
              </div>
              <span className={`text-[8px] font-medium ${item.color}`}>{item.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/[0.04]">
                <div className={`h-full rounded-full ${item.bar}`} />
              </div>
              <span className="text-white/40 text-[8px] w-8 text-right">{item.stock}/{item.min}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
