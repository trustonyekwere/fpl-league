export default function Insights() {
    return (
        <div className="px-6 md:px-0">
            <p className="text-lg font-bold tracking-[0.2em] uppercase text-snow/30 mb-4">
                League Insights
            </p>
            <p>Find interesting stats, trends, and highlights from the current season. Tap the button below to get started.</p>
            <button className="mt-5 w-full px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase  border border-blue-500/40 rounded-lg hover:bg-transparent bg-blue-500 hover:text-blue-400 text-white transition-all duration-200 cursor-pointer">
                VIEW SUMMARY
            </button>
        </div>
    )
}