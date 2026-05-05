import React from "react";

type Props = {
  currentEvent?: FplEvent;
  topPlayers: FplElement[];
  teams: FplTeam[];
};

function getTeamShortName(teams: FplTeam[], id: number) {
  return teams.find((t) => t.id === id)?.short_name ?? "";
}

export default function FplPreview({ currentEvent, topPlayers, teams }: Props) {
  return (
    <div className="grid grid-cols-1 bg-[#071033] border-b px-6 border-blue-500/10">
      <div className="max-w-6xl mx-auto w-full py-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-blue-400 mb-1">
              FPL Snapshot
            </p>
            <h3 className="text-2xl font-bold text-snow">
              {currentEvent?.name ?? "Gameweek"}
            </h3>
            {currentEvent?.deadline_time && (
              <p className="text-sm text-snow/40">
                Deadline:{" "}
                {new Date(currentEvent.deadline_time).toLocaleString()}
              </p>
            )}
          </div>

          <div className="text-right">
            <p className="text-xs text-snow/30">Top players (total points)</p>
            <div className="mt-2 flex gap-3 items-center justify-end">
              {topPlayers.map((p) => (
                <div
                  key={p.id}
                  className="bg-white/[0.03] px-3 py-2 rounded text-sm text-snow/90"
                >
                  <div className="font-semibold">{p.web_name}</div>
                  <div className="text-xs text-snow/40">
                    {getTeamShortName(teams, p.team)}
                  </div>
                  <div className="text-sm font-bold text-yellow-300">
                    {p.total_points}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
