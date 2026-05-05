import { ArrowUpRight } from "lucide-react";

type Standing = {
    rank: number;
    team: string;
    manager: string;
    pts: number;
};

function RankBadge({ rank }: { rank: number }) {
    if (rank === 1)
        return (
        <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-blue-500 text-white text-md p-4 font-black">
            1
        </span>
        );
    if (rank === 2)
        return (
        <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-yellow-400/15 text-yellow-300 border border-yellow-300 text-md p-3.5 font-bold">
            2
        </span>
        );
    if (rank === 3)
        return (
        <span className="inline-flex w-6 h-6 items-center justify-center rounded bg-white/[0.04] text-snow/45 border dark:border-white/[0.07] text-md p-3 font-bold">
            3
        </span>
        );
    return <span className="text-snow/25 text-md font-semibold p-3">{rank}</span>;
}

export default function LeagueTable({
    miniEntries,
}: {
    miniEntries?: MiniLeagueResult[];
}) {
    const useMini = Array.isArray(miniEntries) && miniEntries.length > 0;
    const display: Standing[] = useMini
        ? miniEntries.map((e) => ({
            rank: e.rank,
            team: e.entry_name,
            manager: e.player_name,
            pts: e.total,
        }))
        : ["An error occured"].map((t) => ({
            rank: 0,
            team: t,
            manager: "",
            pts: 0,
        }));

    return (
        <section className="px-6 md:px-0">
        <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow mb-4">
            League Table
        </p>

        <table className="w-full border-collapse">
            <thead>
            <tr>
                <th className="text-left text-sm font-semibold tracking-[0.15em] text-red-400 pb-3 w-8">
                Rank
                </th>
                <th className="text-left text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">
                Team
                </th>
                <th className="text-right text-sm font-semibold tracking-[0.15em] text-red-400 pb-3">
                Total Points
                </th>
            </tr>
            </thead>

            <tbody>
            {display.map((s) => (
                <tr
                key={`${s.team}-${s.rank}`}
                className="border-t border-white/[0.04] group"
                >
                <td className="py-3 pr-3 dark:text-white text-black">
                    <RankBadge rank={s.rank} />
                </td>
                <td className="py-3">
                    <p
                    className={`text-lg font-semibold leading-tight ${s.rank === 1 ? "text-blue-400" : "text-snow"}`}
                    >
                    {s.team}
                    </p>
                    <p className="text-xs text-mist mt-0.5">{s.manager}</p>
                </td>
                <td
                    className={`py-3 text-right text-sm font-black ${s.rank === 1 ? "text-blue-400" : "text-snow"}`}
                >
                    {s.pts.toLocaleString()}
                </td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="flex justify-center pb-14">
            <button className="mt-5 px-5 py-2.5 text-md font-bold tracking-[0.15em] uppercase  border border-blue-500/40 rounded-lg hover:bg-transparent bg-blue-500 hover:text-blue-400 hover:scale-105 text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-1">
            FULL TABLE <ArrowUpRight size={22} />
            </button>
        </div>
        </section>
    );
}
