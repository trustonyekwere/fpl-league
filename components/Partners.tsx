export default function Partners() {
    return (
        <section className="bg-gray-300 px-6">
            <div className="max-w-6xl mx-auto w-full">
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <p className="text-gray-600 md:text-3xl text-2xl pt-12">OUR PARTNERS</p>
                    </div>
                    <div className="grid grid-cols-3 gap-5 md:pt-12 md:pb-20 w-full max-w-5xl">
                        <img
                            src="/core-tech.png"
                            alt="Core Tech"
                            className="h-32 w-full max-w-xs object-contain"
                        />
                        <img
                            src="/crux.styles_homes.png"
                            alt="Crux Styles Homes"
                            className="h-32 w-full max-w-xs object-contain"
                        />
                        <img
                            src="/sammy_phone_arena.png"
                            alt="Sammy Phone Arena"
                            className="h-32 w-full max-w-xs object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
