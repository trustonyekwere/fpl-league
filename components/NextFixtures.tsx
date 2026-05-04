const fixtures = [
  { home: 'Leeds',       away: 'Burnley' },
  { home: 'Brentford',   away: 'West Ham' },
  { home: 'Newcastle',   away: 'Brighton' },
  { home: 'Wolves',      away: 'Sunderland' },
  { home: 'Bournemouth', away: 'C. Palace' },
  { home: 'Man City',    away: 'Leicester' },
]

export default function NextFixtures() {
  return (
    <div className="px-6 md:px-0">
      <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow/30 mb-4">
        Next Fixtures
      </p>
      <div className="flex flex-col">
        {fixtures.map((f, i) => (
          <div
            key={i}
            className="flex items-center justify-between py-2 hover:bg-white/[0.04] px-3 border-b border-white/[0.04] last:border-none"
          >
            <span className="text-sm text-snow/55 flex-1 truncate">{f.home}</span>
            <span className="text-xl text-yellow-300 mx-2 shrink-0">vs</span>
            <span className="text-sm text-snow/55 flex-1 text-right truncate">{f.away}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
