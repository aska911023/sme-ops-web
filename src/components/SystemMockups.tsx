"use client";

/* ── Schedule table (dark) ── */
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
          <span className="text-white/40">信義店</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold text-[9px]">4/7 ~ 4/13</span>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/[0.04]">
            <th className="text-left px-3 py-1.5 text-white/30 font-medium w-20">員工</th>
            {days.map((d, i) => (
              <th key={i} className={`text-center px-1 py-1.5 font-medium ${i >= 5 ? "text-red-400/60" : "text-white/30"}`}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i} className="border-b border-white/[0.03] last:border-0">
              <td className="px-3 py-1.5">
                <div className="font-medium text-white/80">{emp.name}</div>
                <div className="text-white/30 text-[9px]">{emp.pos}</div>
              </td>
              {emp.shifts.map((s, j) => (
                <td key={j} className="text-center px-0.5 py-1.5">
                  {s === "休" ? (
                    <span className="inline-block px-1.5 py-0.5 rounded bg-white/[0.04] text-white/25">休</span>
                  ) : (
                    <span className="inline-block px-1.5 py-0.5 rounded bg-cyan-500/15 text-cyan-300 font-medium">{s}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-3 px-3 py-1.5 border-t border-white/[0.04] bg-white/[0.02] text-white/40">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald-400/60" /> 合規</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-amber-400/60" /> 警告 1</span>
      </div>
    </div>
  );
}

/* ── KPI Dashboard (dark) ── */
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
        <span className="text-white/25 text-[9px]">即時</span>
      </div>
      <div className="grid grid-cols-4 gap-2 p-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-lg bg-white/[0.03] p-2">
            <div className="text-white/30 text-[9px] mb-1">{s.label}</div>
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

/* ── Workflow (dark) ── */
export function WorkflowMockup() {
  const tasks = [
    { name: "新店裝潢進度", progress: 75, status: "進行中", color: "text-cyan-400", stroke: "#22d3ee" },
    { name: "員工教育訓練", progress: 100, status: "已完成", color: "text-emerald-400", stroke: "#34d399" },
    { name: "POS 系統測試", progress: 30, status: "進行中", color: "text-cyan-400", stroke: "#22d3ee" },
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
              <span className={`text-[8px] font-medium ${t.color}`}>{t.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── LINE Chat (dark) ── */
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
            <div className="text-white/30 text-[8px] mt-0.5">09:01</div>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex-shrink-0 mt-0.5" />
          <div className="bg-[#1e4535] rounded-xl rounded-tl-sm px-2.5 py-2 max-w-[80%]">
            <div className="text-[9px] text-white/30 mb-1">打卡成功</div>
            <div className="text-white/90 font-medium">上班 09:01</div>
            <div className="text-[9px] text-white/40 mt-0.5">信義店 · GPS 已驗證</div>
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
