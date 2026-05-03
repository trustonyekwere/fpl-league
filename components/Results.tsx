import { ChevronDown } from "lucide-react"

type Result = {
  home: string
  away: string
  homeScore: number
  awayScore: number
}

const results: Result[] = [
  { home: 'Sunderland',    away: "Nott'm Forest", homeScore: 0, awayScore: 6 },
  { home: 'Fulham',        away: 'Aston Villa',   homeScore: 1, awayScore: 0 },
  { home: 'Liverpool',     away: 'Crystal Palace',homeScore: 2, awayScore: 1 },
  { home: 'West Ham',      away: 'Everton',       homeScore: 3, awayScore: 1 },
  { home: 'Wolves',        away: 'Brentford',     homeScore: 0, awayScore: 0 },
  { home: 'Arsenal',       away: 'Newcastle',     homeScore: 1, awayScore: 0 },
  { home: 'Man Utd',       away: 'Brentford',     homeScore: 3, awayScore: 1 },
]

function ScoreBox({ score, isWinner }: { score: number; isWinner: 'win' | 'draw' | 'lose' }) {
  const base = 'w-7 h-7 flex items-center justify-center text-sm font-black rounded'
  if (isWinner === 'win')  return <div className={`${base} bg-blue-500 text-white`}>{score}</div>
  if (isWinner === 'draw') return <div className={`${base} bg-yellow-400/20 text-yellow-300`}>{score}</div>
  return <div className={`${base} bg-white/5 text-snow/35`}>{score}</div>
}

function getState(a: number, b: number): ['win' | 'draw' | 'lose', 'win' | 'draw' | 'lose'] {
  if (a > b) return ['win', 'lose']
  if (a < b) return ['lose', 'win']
  return ['draw', 'draw']
}

export default function Results() {
  return (
    <section>
      <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow/30 mb-4">
        GW34 Results
      </p>
      <div className="flex flex-col gap-0">
        {results.map((r, i) => {
          const [hState, aState] = getState(r.homeScore, r.awayScore)
          return (
            <div
              key={i}
              className="flex items-center py-2.5 gap-6 border-b border-white/[0.04] last:border-none"
            >
              <ChevronDown />
              <span className={`flex-1 text-sm ${hState === 'win' ? 'text-snow font-semibold' : 'text-snow/55'}`}>
                {r.home}
              </span>
              <div className="flex items-center gap-1 mx-4">
                <ScoreBox score={r.homeScore} isWinner={hState} />
                <span className="text-snow/15 text-xs mx-0.5">–</span>
                <ScoreBox score={r.awayScore} isWinner={aState} />
              </div>
              <span className={`flex-1 text-sm text-right ${aState === 'win' ? 'text-snow font-semibold' : 'text-snow/55'}`}>
                {r.away}
              </span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
