export default function Pod() {
    return (
        <div className="grid grid-cols-1 bg-[#0f172a] border-b pt-5 border-blue-500/10">
            <div className="max-w-6xl mx-auto w-full">
                {/* Fixture of the Week */}
                <div>
                    <div className="py-5">
                        <div className="flex flex-col text-start justify-center">
                            <h2 className="text-3xl font-black tracking-wide text-snow leading-tight mb-1">
                                Latest Episode on the FPL Pod
                            </h2>
                            <div className="w-full py-7">
                                <iframe
                                    src="https://open.spotify.com/embed/show/2bzbBwoyGGCD2aCTXqvwqU"
                                    width="100%"
                                    height="232"
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}