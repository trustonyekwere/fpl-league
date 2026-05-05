import { ArrowUpRight, CalendarClock } from "lucide-react";
import ButtonLink from "./Button";

function getTeamName(teams: FplTeam[] | undefined, id?: number) {
  return teams?.find((t) => t.id === id)?.name ?? "";
}

function getTeamLogoUrl(teams: FplTeam[] | undefined, id?: number) {
  const team = teams?.find((t) => t.id === id);
  const label = team?.short_name || team?.name || "Team";
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(label)}&background=0F172A&color=ffffff&size=128`;
}

export default function Hero({
  fixture,
  teams,
}: {
  fixture?: FplFixture;
  teams?: FplTeam[];
}) {
  return (
    <div className="grid grid-cols-1 bg-white dark:bg-[#0f172a] border-b px-6 border-blue-500/20 dark:border-blue-500/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Manager of the Week */}
        <div className="py-8 border-b border-blue-500/10">
          <div className="pb-5 md:flex items-center justify-between">
            <div>
              <p className="md:text-sm text-xs font-bold tracking-[0.2em] uppercase text-blue-400 mb-3">
                Manager of the week - GW34
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

          <div className="flex border-t border-blue-500/10 dark:border-blue-500/10 pt-4 mt-4">
            {/* Team breakdown */}
            <div className="flex flex-col items-start gap-1.5">
              {[
                { name: "FUSHIFC", pts: 68 },
                { name: "kay-moil fc", pts: 61 },
                { name: "Dolar Fc", pts: 59 },
                { name: "16Czechoslovakians", pts: 58 },
              ].map((t) => (
                <div key={t.name} className="flex items-center gap-2">
                  <a className="hover:underline leading-8" href="">
                    <span className="text-sm text-snow">{t.name}&nbsp;</span>
                    <span className="text-sm font-semibold text-snow">
                      ({t.pts})
                    </span>
                  </a>
                </div>
              ))}
              <a
                href="https://fpl.coresystech.ng/live.php#gw_rankings"
                className="flex items-center text-snow underline text-md pt-4"
              >
                See Full Standings <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>

        {/* Fixture of the Week */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img
                src={getTeamLogoUrl(teams, fixture?.team_h)}
                alt={getTeamName(teams, fixture?.team_h)}
                className="w-12 h-12 rounded"
              />
              <div className="text-left">
                <div className="text-xl text-snow font-bold">
                  {fixture ? getTeamName(teams, fixture.team_h) : ""}
                </div>
                <div className="text-sm text-mist">Home</div>
              </div>
            </div>

            <div className="text-xl text-yellow-300 mx-2 shrink-0">vs</div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xl text-snow font-bold">
                  {fixture ? getTeamName(teams, fixture.team_a) : ""}
                </div>
                <div className="text-sm text-mist">Away</div>
              </div>
              <img
                src={getTeamLogoUrl(teams, fixture?.team_a)}
                alt={getTeamName(teams, fixture?.team_a)}
                className="w-12 h-12 rounded"
              />
            </div>
          </div>

          <div className="py-5">
            <div className="flex flex-col md:text-start text-center">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-red-400 mb-3">
                Fixture of the week{" "}
                {fixture ? `· GW${fixture.event}` : "· GW34"}
              </p>
              <h2 className="md:text-5xl text-3xl font-black tracking-wide text-snow leading-tight mb-1">
                {fixture
                  ? `${getTeamName(teams, fixture.team_h)} vs. ${getTeamName(teams, fixture.team_a)}`
                  : "Error loading fixture details"}
              </h2>
              <div className="bg-blue-500/10 h-0.5 w-full" />
              <p className="text-md text-mist mt-2 flex gap-3">
                <CalendarClock size={22} />
                {fixture
                  ? `${new Date(fixture.kickoff_time).toLocaleString()}`
                  : "Error loading fixture details"}
              </p>
            </div>

            <div className="flex flex-col md:items-start items-center py-5">
              <ButtonLink
                text="Read More"
                href={
                  fixture
                    ? `https://fantasy.premierleague.com/fixtures/?event=${fixture.event}`
                    : "https://www.premierleague.com/match/125132"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
