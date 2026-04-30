
import Image from "next/image";
import { BackgroundGradient } from "./background-gradient";

export function CardDemo({title,description,img}) {
    return (
        <>
            <div className="w-80 lg:w-96 xl:w-96 2xl:w-96">
                <BackgroundGradient className="rounded-[22px] p-10 bg-white dark:bg-zinc-900">
                    <Image
                        src={img}
                        alt="moksha"
                        className="object-contain h-56 w-56 lg:h-72 lg:w-72 xl:h-72 xl:w-72 2xl:h-72 2xl:w-72 rounded-2xl"
                    />
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        {title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {description}
                    </p>
                </BackgroundGradient>
            </div>
        </>
    );
}
