const winners = [
  { gw: 29, team: 'Mayor FC',    pts: 97  },
  { gw: 30, team: 'Themisan FC',  pts: 79  },
  { gw: 31, team: 'Survive Fc',   pts: 73  },
  { gw: 32, team: 'Concord fc', pts: 77  },
  { gw: 33, team: 'Dolar Fc',    pts: 144 },
]

export default function WeeklyWinners() {
  return (
    <div>
      <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow/30 mb-4">
        Weekly Winners
      </p>
      <table className="w-full border-collapse">
        <thead>
            <tr>
                <th className="text-left ps-3 text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Week</th>
                <th className="text-left text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Team</th>
                <th className="text-right pe-3 text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Points</th>
            </tr>
        </thead>
        <tbody>
          {winners.map((w) => (
            <tr key={w.gw} className="border-t border-white/[0.04] hover:bg-white/[0.04]">
              <td className="py-2 ps-3 text-sm font-bold tracking-wider text-snow/25">
                GW{w.gw}
              </td>
              <td className="py-2 text-sm text-snow/60">{w.team}</td>
              <td className="py-2 pe-3 text-sm font-semibold text-snow text-right">{w.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-5 w-full px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-blue-400 border border-blue-500/40 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
        See all winners
      </button>
    </div>
  )
}
