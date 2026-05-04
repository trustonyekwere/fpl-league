type Leader = {
  rank: number
  team: string
  manager: string
  pts: number
}

const leaders: Leader[] = [
  { rank: 1, team: 'Dolar Fc',   manager: 'WF Tunde',        pts: 2037 },
  { rank: 2, team: 'Teetotaler', manager: 'Mfoniso Johnson', pts: 1981 },
  { rank: 3, team: '@#012345',  manager: 'Peter Adibe',      pts: 1972 },
]

export default function Podium() {
    return (
        <div className="grid grid-cols-1 bg-[#0f172a] border-b px-6 border-blue-500/10">
            <div className="max-w-6xl mx-auto w-full">
                {/* Fixture of the Week */}
                <div>
                    <div className="py-12">
                        <div>
                          <p className="text-xl md:text-3xl font-bold tracking-[0.2em] uppercase text-snow/30">
                            League Leaders
                          </p>
                          <p className="pb-4 pt-2 text-sm md:text-lg text-gray-400">Our top 3 at the moment</p>
                          <div className="grid md:grid-cols-[2fr_1.6fr_1.3fr] grid-cols-1 gap-6">
                            {/* 1st */}
                            <div className="flex items-center gap-3 md:h-44 bg-blue-500 rounded-xl px-4 py-10 hover:scale-[104%] transition-all ease-in-out duration-300">
                              <span className="text-5xl md:text-6xl font-black text-white/30">1</span>
                              <div className="flex-1 min-w-0 ps-2">
                                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-wider truncate">{leaders[0].team}</p>
                                <p className="text-sm md:text-lg text-white/50 mt-0.5 truncate">{leaders[0].manager}</p>
                              </div>
                              <span className="text-2xl lg:text-3xl font-black text-white">{leaders[0].pts}</span>
                            </div>

                            {/* 2nd */}
                            <div className="flex items-center gap-3 md:h-36 bg-yellow-400/10 border border-yellow-400/20 rounded-xl px-4 py-7 hover:scale-[104%] transition-all ease-in-out duration-300">
                              <span className="text-4xl md:text-5xl font-black text-yellow-300/30">2</span>
                              <div className="flex-1 min-w-0 ps-2">
                                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-snow leading-tight tracking-wider truncate">{leaders[1].team}</p>
                                <p className="text-xs lg:text-md font-light text-white/50 text-snow/35 mt-0.5 truncate">{leaders[1].manager}</p>
                              </div>
                              <span className="text-xl lg:text-2xl font-black text-yellow-300">{leaders[1].pts}</span>
                            </div>

                            {/* 3rd */}
                            <div className="flex items-center gap-3 md:h-28 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-4 hover:scale-[104%] transition-all ease-in-out duration-300">
                              <span className="text-3xl md:text-4xl font-black text-snow/15">3</span>
                              <div className="flex-1 min-w-0 ps-2">
                                <p className="text-md lg:text-2xl font-semibold text-snow/80 leading-tight tracking-wider truncate">{leaders[2].team}</p>
                                <p className="text-xs lg:text-sm text-white/50 text-snow/30 mt-0.5 truncate">{leaders[2].manager}</p>
                              </div>
                              <span className="text-md lg:text-xl font-black text-snow/40">{leaders[2].pts}</span>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
