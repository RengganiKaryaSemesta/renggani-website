import type { FC } from "react"
interface SwiperHomeContentProps {
    title: string;
    detail: string;
    subtitle: string
}

const SwiperHomeContent: FC<SwiperHomeContentProps> = ({ title, subtitle, detail }) => {
    return (<article
        className="absolute bg-gradient-to-r flex items-center pt-36 md:pt-0 from-gray-800 to-blue-900/40 top-0 left-0 right-0 bottom-0 h-full z-30 lg:px-20 px-5"
    >
        <div className="text-white md:w-[560px]">
            <p className="text-sm mb-2 text-center md:text-start" dangerouslySetInnerHTML={{__html:subtitle}}>
            </p>
            <h1 className="md:text-5xl text-3xl font-bold text-center md:text-start"  dangerouslySetInnerHTML={{__html:title}}>
            </h1>
            <div className="w-10 border-2 mt-2 mb-5 mx-auto md:mx-0"></div>
            <p className="md:text-lg text-center md:text-start" dangerouslySetInnerHTML={{__html:detail}}>
            </p>
        </div>
    </article>)
}
export default SwiperHomeContent