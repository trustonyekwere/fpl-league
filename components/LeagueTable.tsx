import { ArrowUpRight } from "lucide-react"
import ButtonLink from "./Button"

type Standing = {
  rank: number
  team: string
  manager: string
  pts: number
}

const standings: Standing[] = [
  { rank: 1, team: 'Dolar Fc',    manager: 'Wf Tunde',               pts: 2037 },
  { rank: 2, team: 'Teetotaler',  manager: 'Mfoniso Johnson',        pts: 1981 },
  { rank: 3, team: '@#012345',   manager: 'Peter Adibe',             pts: 1972 },
  { rank: 4, team: 'Survive FC',  manager: 'Militerian VUWWW Marlians',  pts: 1949 },
  { rank: 5, team: 'ROOKIE17',      manager: 'Onyekwere Trust',        pts: 1943 },
  { rank: 6, team: 'Dolar Fc',    manager: 'Wf Tunde',               pts: 2037 },
  { rank: 7, team: 'Teetotaler',  manager: 'Mfoniso Johnson',        pts: 1981 },
  { rank: 8, team: '@#012345',   manager: 'Peter Adibe',             pts: 1972 },
  { rank: 9, team: 'Survive FC',  manager: 'Militerian VUWWW Marlians',  pts: 1949 },
  { rank: 10, team: 'ROOKIE17',      manager: 'Onyekwere Trust',        pts: 1943 },
]

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1)
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-blue-500 text-white text-md p-4 font-black">
        1
      </span>
    )
  if (rank === 2)
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-yellow-400/15 text-yellow-300 border border-yellow-300 text-md p-3.5 font-bold">
        2
      </span>
    )
  if (rank === 3)
    return (
      <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-white/[0.04] text-snow/45 border border-white/[0.07] text-md p-3 font-bold">
        3
      </span>
    )
  return <span className="text-snow/25 text-md font-semibold p-3">{rank}</span>
}

export default function LeagueTable() {
  return (
    <section>
      <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow/30 mb-4">
        League Table
      </p>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-sm font-semibold tracking-[0.15em] text-red-400 pb-3 w-8">Rank</th>
            <th className="text-left text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Team</th>
            <th className="text-right text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((s) => (
            <tr key={s.rank} className="border-t border-white/[0.04] group">
              <td className="py-3 pr-3">
                <RankBadge rank={s.rank} />
              </td>
              <td className="py-3">
                <p className={`text-lg font-semibold leading-tight ${s.rank === 1 ? 'text-blue-400' : 'text-snow'}`}>
                  {s.team}
                </p>
                <p className="text-xs text-snow/30 mt-0.5">{s.manager}</p>
              </td>
              <td className={`py-3 text-right text-sm font-black ${s.rank === 1 ? 'text-blue-400' : 'text-snow'}`}>
                {s.pts.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center">
        <button className="mt-5 px-5 py-2.5 text-md font-bold tracking-[0.15em] uppercase  border border-blue-500/40 rounded-lg hover:bg-transparent bg-blue-500 hover:text-blue-400 hover:scale-105 text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-1">
            FULL TABLE <ArrowUpRight size={22} />
        </button>
      </div>
    </section>
  )
}
