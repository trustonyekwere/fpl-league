type Leader = {
  rank: number
  team: string
  manager: string
  pts: number
}

const leaders: Leader[] = [
  { rank: 1, team: 'Dolar Fc',   manager: 'WF Tunde',        pts: 2037 },
  { rank: 2, team: 'Teetotaler', manager: 'Mfoniso Johnson', pts: 1981 },
  { rank: 3, team: '@#012345',  manager: 'Peter Adibe',      pts: 1972 },
]

export default function Podium() {
  return (
    <div>
      <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow/30 mb-4">
        League Leaders
      </p>
      <div className="flex flex-col gap-4">
        {/* 1st */}
        <div className="flex items-center gap-3 bg-blue-500 rounded-xl px-4 py-4 hover:scale-105 transition-all ease-in-out duration-300">
          <span className="text-3xl font-black text-white/30">1</span>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-bold text-white leading-tight truncate">{leaders[0].team}</p>
            <p className="text-sm text-white/50 mt-0.5 truncate">{leaders[0].manager}</p>
          </div>
          <span className="text-xl font-black text-white">{leaders[0].pts}</span>
        </div>

        {/* 2nd */}
        <div className="flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/20 rounded-xl px-4 py-3.5 hover:scale-105 transition-all ease-in-out duration-300">
          <span className="text-2xl font-black text-yellow-300/30">2</span>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold text-snow leading-tight truncate">{leaders[1].team}</p>
            <p className="text-sm font-light text-snow/35 mt-0.5 truncate">{leaders[1].manager}</p>
          </div>
          <span className="text-lg font-black text-yellow-300">{leaders[1].pts}</span>
        </div>

        {/* 3rd */}
        <div className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3 hover:scale-105 transition-all ease-in-out duration-300">
          <span className="text-xl font-black text-snow/15">3</span>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-semibold text-snow/80 leading-tight truncate">{leaders[2].team}</p>
            <p className="text-sm text-snow/30 mt-0.5 truncate">{leaders[2].manager}</p>
          </div>
          <span className="text-lg font-black text-snow/40">{leaders[2].pts}</span>
        </div>
      </div>
    </div>
  )
}
