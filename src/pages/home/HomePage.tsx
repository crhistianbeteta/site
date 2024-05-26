import me from "../../assets/me.png"
import SocialMedia from "./components/SocialMedia"

export default function HomePage({ translate }: { translate: (key: string) => string }) {
    return (

        <section className="bg-white dark:bg-gray-900 h-full">
            <div className="flex flex-col md:flex-row justify-center items-center p-5 h-full">

                <div className="order-1 w-full md:order-2  flex  justify-center items-center">
                    <img src={me} className="drop-shadow-md w-[50%] lg:w-[70%] main-image" alt="Crhistian Beteta" />
                </div>

                <div className="order-2 w-full md:order-1 flex flex-col justify-center items-center">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Crhistian Beteta</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {translate('home.computer_engineer')}
                    </p>
                    <SocialMedia />
                </div>
            </div>
        </section>

    )
}
