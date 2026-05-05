const winners = [
    { month: 'November', team: 'Lordgp',    pts: 242  },
    { month: 'December', team: '16Czechoslovakians',  pts: 410  },
    { month: 'January', team: 'Life FC',   pts: 302  },
    { month: 'February', team: 'Dolar Fc', pts: 278  },
    { month: 'March', team: 'Mayor FC',    pts: 210 },
]

export default function Motm() {
    return (
        <div className="px-6 md:px-0">
            <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow mb-4">
                Manager of the Month
            </p>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-left ps-3 text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Month</th>
                        <th className="text-left text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Team</th>
                        <th className="text-right pe-3 text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">Points</th>
                    </tr>
                </thead>
                <tbody>
                {winners.map((w) => (
                    <tr key={w.month} className="border-t border-white/[0.04] hover:bg-white/[0.04]">
                    <td className="py-2 ps-3 text-sm font-bold tracking-wider text-snow">
                        {w.month}
                    </td>
                    <td className="py-2 text-sm text-snow w-10">{w.team}</td>
                    <td className="py-2 pe-3 text-sm font-bold text-snow text-right">{w.pts}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}