export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-bold text-[10px]">
            S
          </div>
          <span className="text-sm text-white/30">SME OPS</span>
        </div>
        <span className="text-xs text-white/20">專為台灣中小企業打造</span>
      </div>
    </footer>
  );
}
