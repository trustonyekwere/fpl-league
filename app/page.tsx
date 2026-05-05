import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pod from "../components/Pod";
import Results from "../components/Results";
import LeagueTable from "../components/LeagueTable";
import Podium from "../components/Podium";
import NextFixtures from "../components/NextFixtures";
import WeeklyWinners from "../components/WeeklyWinners";
import Motm from "../components/Motm";
import Insights from "../components/Insights";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import FplPreview from "../components/FplPreview";
import { ArrowUpRight } from "lucide-react";

export default async function Home() {
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
      <Hero fixture={fixtureOfWeek} teams={fpl.teams} />
      <FplPreview
        currentEvent={currentEvent}
        topPlayers={topPlayers}
        teams={fpl.teams}
      />
      <Pod />
      <Podium />

      {/* Main body: two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] max-w-6xl lg:px-0 px-6 mx-auto border-b border-blue-500/10">
        {/* Left: Results + League Table */}
        <main className="flex-1 border-r border-blue-500/10 divide-y divide-white/[0.04]">
          <div className="md:pe-16 py-6">
            <Results />
          </div>
          <div className="md:pe-16 py-6">
            <LeagueTable miniEntries={miniResults} />
            <div className="flex justify-center pb-14">
                <button className="mt-5 px-5 py-2.5 text-md font-bold tracking-[0.15em] uppercase  border border-blue-500/40 rounded-lg hover:bg-transparent bg-blue-500 hover:text-blue-400 hover:scale-105 text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-1">
                FULL TABLE <ArrowUpRight size={22} />
                </button>
            </div>
          </div>
        </main>

        {/* Right: Sidebar */}
        <aside className="w-full shrink-0 flex flex-col divide-y divide-white/[0.04]">
          <div className="md:ps-16 py-6">
            <NextFixtures />
          </div>
          <div className="md:ps-16 py-6">
            <WeeklyWinners />
          </div>
          <div className="md:ps-16 py-6">
            <Motm />
          </div>
          <div className="md:ps-16 py-6">
            <Insights />
          </div>
        </aside>
      </div>
      <div>
        <Partners />
      </div>

      <Footer />
    </div>
  );
}
