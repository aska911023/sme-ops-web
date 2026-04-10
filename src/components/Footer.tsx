export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-black/[0.04] bg-white/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs">
            S
          </div>
          <span className="text-sm text-slate-400">SME OPS — 按需選購，隨需擴充</span>
        </div>
        <span className="text-sm text-slate-400">專為台灣中小企業打造</span>
      </div>
    </footer>
  );
}
