export default function Partners() {
    return (
        <section className="bg-gray-300 px-20">
        <div className="flex flex-col items-center justify-center">
            <div>
            <p className="text-gray-600 text-3xl pt-12">OUR PARTNERS</p>
            </div>
            <div className="flex items-center justify-center gap-5 pt-12 pb-20 w-full max-w-5xl">
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
        </section>
    );
}
