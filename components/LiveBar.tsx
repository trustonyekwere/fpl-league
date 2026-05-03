export default function LiveBar() {
  return (
    <div className="flex items-center gap-3 py-4 bg-[#172554]/50 border-b border-blue-500/10">
      <div className="mx-auto max-w-6xl w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1.5 bg-red-500/10 border border-red-500/30 rounded px-2.5 py-1">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-[pulse-dot_1.4s_ease-in-out_infinite]" />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-red-400">Live</span>
          </div>
          <span className="text-sm text-snow/40">Gameweek 34 in progress &middot; 6 of 10 matches played | <span className="text-red-400">Deadline Passed</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-sm text-snow/25 tracking-wide">Last updated:</span>
          <span className="text-sm text-snow/40 font-medium">12:43 GMT</span>
        </div>
      </div>
      </div>
    </div>
  )
}