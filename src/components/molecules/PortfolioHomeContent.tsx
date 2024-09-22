import type { CollectionEntry } from "astro:content";
import { categoryActived } from "src/stores/portfolioHomeStore"
import { useStore } from '@nanostores/react';
import { useState } from "react";
import { getImage } from "astro:assets";
import robotEmptyImage from "../../assets/emptyRobot.png"


interface PortfolioHomeContentProps {
    portfolios: CollectionEntry<'portfolios'>[];
}
interface PortfolioHasContentProps extends PortfolioHomeContentProps {
    limit: number,
    loadMore: () => void
}

const robotEmptyImageOptimized = await getImage({
    src: robotEmptyImage,
    format: "webp",
    width: 300,
    height: 500,
    loading: 'lazy'
})

const HasContent: React.FC<PortfolioHasContentProps> = ({ portfolios, limit, loadMore }) => {
    const paginateData = portfolios.slice(0, limit)
    return (
        <article className="px-5 lg:px-20 relative">
            <div className="grid md:grid-cols-6 gap-5">
                {
                    paginateData.map(item => (
                        <div className={`shadow-lg relative overflow-hidden rounded-lg group ${item.data.category=='Mobile Apps'?'lg:col-span-1 col-span-6':'md:col-span-3 col-span-6'}`} key={item.slug}>
                            <img src={item.data.image.src} alt={item.slug} width={item.data.image.width} height={300} className={`object-cover h-52 xl:h-72 object-top rounded-lg w-full`} />
                            <div className="absolute group-hover:max-h-full max-h-0 h-[100%] transition-all duration-500 dark:from-gray-800 from-blue-800/60 w-full bottom-0  bg-gradient-to-t dark:to-gray-900/40" />
                            <div className="absolute bottom-0 w-full min-h-full flex items-center justify-center text-center p-3 font-roboto group-hover:backdrop-blur-sm">
                                <span className="border-2 px-4 py-2 rounded-full text-white group-hover:translate-x-0 duration-500 transition-all translate-x-[500px]">
                                    {item.data.title}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
            {paginateData.length < portfolios.length && <div className="flex items-center justify-center mt-5"><button className="rounded-full py-3 border-2 border-blue-800 px-7 shadow-lg hover:shadow-none font-roboto text-white bg-blue-800 duration-500 dark:bg-gray-800 dark:text-white dark:border-gray-800 dark:hover:bg-gray-900" onClick={() => loadMore()}>Lebih Banyak</button></div>}
        </article>)
}
const PortfolioHomeContent: React.FC<PortfolioHomeContentProps> = ({ portfolios }) => {
    const isActive = useStore(categoryActived);
    const [limit, setLimit] = useState(4);
    const loadMore = () => {
        setLimit((prevCount) => prevCount + 4);
    };
    const filteredPortfolios = portfolios.filter(portfolio => portfolio.data.category === isActive || isActive == "Terbaru");
    return (
        <>
            {
                filteredPortfolios.length > 0
                    ? <HasContent limit={limit} portfolios={filteredPortfolios} loadMore={loadMore} />
                    : <article className="flex items-center justify-center flex-col md:flex-row px-5 lg:px-20">
                        <img src={robotEmptyImageOptimized.src} alt="empty portfolio" width={300} height={500} className="w-40 md:w-auto" />
                        <div className="max-w-[500px] text-center md:text-left">
                            <h3 className="text-base lg:text-xl dark:text-white font-roboto font-bold">Belum ada proyek unggulan</h3>
                            <p className="text-xs lg:text-base mb-3 dark:text-gray-500">Tambahkan proyek Anda ke dalam daftar unggulan kami dan buat proyek bersama kami!</p>
                            <a href="https://api.whatsapp.com/send?phone=6289512589756" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-700 dark:text-gray-500 dark:hover:text-gray-400  font-bold font-roboto">Buat Sekarang</a>
                        </div>
                    </article>
            }
        </>)
}
export default PortfolioHomeContent