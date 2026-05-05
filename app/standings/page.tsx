import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeagueTable from "@/components/LeagueTable";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/Button";

export default async function Standings() {
    // Fetch minimal FPL bootstrap data server-side and pass to a lightweight preview
    const res = await fetch(
        "https://fantasy.premierleague.com/api/bootstrap-static/",
        { next: { revalidate: 60 } },
    );
    const fpl: FplBootstrap = await res.json();
    const currentEvent =
        fpl.events.find((e) => e.is_current) ||
        fpl.events.find((e) => e.is_next) ||
        fpl.events[0];
    const topPlayers = [...fpl.elements]
        .sort((a, b) => b.total_points - a.total_points)
        .slice(0, 5);

    // fixtures for the current event (fixture of the week = first fixture)
    const fixturesRes = await fetch(
        `https://fantasy.premierleague.com/api/fixtures/?event=${currentEvent.id}`,
        { next: { revalidate: 60 } },
    );
    const fixtures: FplFixture[] = await fixturesRes.json();
    const fixtureOfWeek = fixtures && fixtures.length ? fixtures[0] : undefined;

    // mini-league standings (mini league id: 6268)
    const miniRes = await fetch(
        "https://fantasy.premierleague.com/api/leagues-classic/6268/standings/",
        { next: { revalidate: 300 } },
    );
    const miniJson = await miniRes.json();
    const miniResults: MiniLeagueResult[] =
        miniJson.standings?.results || miniJson.results || [];

    return (
        <div className="min-h-screen bg-white dark:bg-[#0f172a] text-slate-100">
        <Navbar />
        <div className="max-w-6xl mx-auto">
            <div className="py-5 md:flex items-center justify-between border-b border-blue-500/20 dark:border-blue-500/10">
                <div className="px-6 py-8">
                    <p className="md:text-sm text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-3">
                    Top manager
                    </p>
                    <h1 className="md:text-5xl text-4xl font-black tracking-wider text-snow leading-none mb-1">
                    Teetotaler
                    </h1>
                    <p className="md:text-lg text-md text-mist tracking-wide">
                    Mfoniso Johnson
                    </p>
                </div>
    
                <div>
                    {/* Points badge */}
                    <div className="bg-blue-500 rounded-xl p-6 mt-5 max-w-fit w-full flex flex-col items-center justify-center">
                    <div>
                        <p className="text-5xl font-black text-white leading-none">
                        68
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-bold tracking-[0.15em] uppercase text-white/60 mt-0.5">
                        Total pts
                        </p>
                    </div>
                    </div>
                    <div className="pt-5 flex md:justify-end">
                        <ButtonLink
                            text="View Team"
                            href="https://fantasy.premierleague.com/entry/2990079/event/34"
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Main body: two-column layout */}
        <div className="max-w-6xl px-6 py-8 mx-auto">
            {/* Left: Results + League Table */}
            <main>
                <div className="py-6 md:px-16">
                    <LeagueTable miniEntries={miniResults} />
                </div>
            </main>
        </div>
        <div>
            <Partners />
        </div>

        <Footer />
        </div>
    );
}