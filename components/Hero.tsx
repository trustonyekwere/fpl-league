import { ArrowUpRight } from "lucide-react";
import ButtonLink from "./Button";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 bg-[#0f172a] border-b pt-5 border-blue-500/10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Manager of the Week */}
        <div className="py-8 border-b border-blue-500/10 grid grid-cols-2">
          <div className="pb-5">
            <div>
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-400 mb-3">
                Manager of the week - GW34
              </p>
              <h1 className="text-5xl font-black tracking-wider text-snow leading-none mb-1">
                Teetotaler
              </h1>
              <p className="text-lg text-snow/40 tracking-wide">
                Mfoniso Johnson
              </p>
            </div>

            {/* Points badge */}
            <div className="bg-blue-500 rounded-xl p-6 mt-5 max-w-fit w-full flex flex-col items-center justify-center">
              <div>
                <p className="text-5xl font-black text-white leading-none">68</p>
              </div>
              <div>
                <p className="text-sm font-bold tracking-[0.15em] uppercase text-white/60 mt-0.5">
                  Total pts
                </p>
              </div>
            </div>
            <div className="pt-5">
              <ButtonLink text="View Team" href="https://fantasy.premierleague.com/entry/2990079/event/34" />
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex flex-col items-end">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-400 mb-3">
                Current Standings
              </p>
              {/* Team breakdown */}
              <div className="flex flex-col items-end gap-1.5">
                {[
                  { name: "FUSHIFC", pts: 68 },
                  { name: "kay-moil fc", pts: 61 },
                  { name: "Dolar Fc", pts: 59 },
                  { name: "16Czechoslovakians", pts: 58 },
                ].map((t) => (
                  <div key={t.name} className="flex items-center gap-2">
                    <a className="hover:underline leading-8" href="">
                      <span className="text-md text-snow/35">{t.name}&nbsp;</span>
                      <span className="text-md font-semibold text-snow/55">
                        ({t.pts})
                      </span>
                    </a>
                  </div>
                ))}
                <a
                  href="https://fpl.coresystech.ng/live.php#gw_rankings"
                  className="flex items-center underline text-md pt-4"
                >
                  See Full Standings <ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fixture of the Week */}
        <div className="pt-10 grid grid-cols-2">
          <div className="flex -space-x-12">
            <img src="./101188.png" alt="" />
            <img src="./235674.png" alt="" />
          </div>

          <div className="py-5">
            <div className="flex flex-col text-start">
              <p className="text-sm font-bold tracking-[0.2em] uppercase text-red-400 mb-3">
                Fixture of the week &middot; GW34
              </p>
              <h2 className="text-5xl font-black tracking-wide text-snow leading-tight mb-1">
                Aston Villa vs. Spurs
              </h2>
              <div className="bg-blue-500/10 h-0.5 w-full" />
              <p className="text-lg text-snow/35 mt-2">
                May 03, 2026 &middot; 19:00
              </p>
            </div>

            <div className="flex flex-col items-start pt-5">
              <ButtonLink text="Read More" href="https://www.premierleague.com/match/125132" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
