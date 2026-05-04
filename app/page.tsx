import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Pod from '@/components/Pod'
import Results from '@/components/Results'
import LeagueTable from '@/components/LeagueTable'
import Podium from '@/components/Podium'
import NextFixtures from '@/components/NextFixtures'
import WeeklyWinners from '@/components/WeeklyWinners'
import Motm from '@/components/Motm'
import Insights from '@/components/Insights'
import Partners from '@/components/Partners'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080e1f] text-slate-100">
      <Navbar />
      <Hero />
      <Pod />
      <Podium />

      {/* Main body: two-column layout */}
      <div className="grid grid-cols-[1.5fr_1fr] max-w-6xl mx-auto border-b border-blue-500/10">

        {/* Left: Results + League Table */}
        <main className="flex-1 border-r border-blue-500/10 divide-y divide-white/[0.04]">
          <div className="pe-16 py-6">
            <Results />
          </div>
          <div className="md:pe-16 py-6">
            <LeagueTable />
          </div>
        </main>

        {/* Right: Sidebar */}
        <aside className="w-full shrink-0 flex flex-col divide-y divide-white/[0.04]">
          <div className="ps-16 py-6">
            <NextFixtures />
          </div>
          <div className="ps-16 py-6">
            <WeeklyWinners />
          </div>
          <div className="ps-16 py-6">
            <Motm />
          </div>
          <div className="ps-16 py-6">
            <Insights />
          </div>
        </aside>
      </div>
      <div>
        <Partners />
      </div>

      <Footer />
    </div>
  )
}
