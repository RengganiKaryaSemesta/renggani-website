import { getImage } from 'astro:assets'
import projectBasedImage from '@assets/project-based.jpg'
import onDemandImage from '@assets/on-demand.jpg'
import { useState } from 'react';
const projectBasedImageOptimized = await getImage({ src: projectBasedImage, width: 400, height: 400, format: 'webp' });
const onDemandImageOptimized = await getImage({ src: onDemandImage, width: 400, height: 400, format: 'webp' });
const HomeServiceContent = () => {
    const [active, setActive] = useState<string>('service-1')
    return (
        <article className={`relative mt-10 flex flex-col gap-5 lg:gap-0 lg:flex-row dark:text-gray-500`}>
            <div onClick={() => {
                setActive('service-1')
            }} className={`w-full h-[400px] relative shadow-lg flex transition-all border-l-4 overflow-hidden lg:overflow-visible rounded-xl lg:rounded-l-xl bg-[#eef5f9] duration-500 dark:bg-gray-900 ${active != 'service-1' ? 'lg:max-w-52 border-gray-300 lg:text-gray-500' : 'dark:text-gray-200 max-w-full border-blue-800'}`} id="service-1">
                <button className="absolute -left-[95px] bottom-1/2 -rotate-90 font-roboto bg-blue-800 md:text-white px-6 py-3 rounded-t-xl">SERVICE #1</button>
                <div className={`absolute right-0 bottom-0 rounded-l-xl hidden md:block top-0 from-gray-900 ${active == 'service-1' ? 'w-1/2 bg-gradient-to-l' : 'lg:w-full w-1/2 bg-gradient-to-l lg:bg-gradient-to-b'}`}></div>
                <div className={`p-5 font-roboto overflow-hidden ${active != 'service-1' ? 'lg:absolute lg:left-0 lg:top-0 lg:text-white' : 'relative'}`}>
                    <h3 className="text-xl font-bold uppercase">Project-Based</h3>
                    <p className={`text-sm xl:text-base mt-2 ${active != 'service-1' && 'lg:hidden'}`}>Model kerja sama Project-Based ini sangat cocok untuk proyek-proyek dengan cakupan yang jelas dan spesifikasi yang telah ditetapkan, memungkinkan kami untuk memberikan solusi yang optimal dan sesuai dengan kebutuhan klien.</p>
                    <ul className={`xl:text-base text-sm my-3 flex flex-col gap-2 ${active != 'service-1' && 'lg:hidden'}`}>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Cocok untuk mengembangkan platform digital baru
                        </li>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Pengerjaan berdasarkan target bisnis Anda</li>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Harga dan timeline pengerjaan yang transparan</li>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Garansi 1 bulan</li>
                    </ul>
                    <a href="/services" className={`flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:font-semibold font-bold ${active != 'service-1' && 'lg:hidden'}`}>
                        Pergi ke Layanan
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 13h8l-3.5 3.5l1.42 1.42L17.84 12l-5.92-5.92L10.5 7.5L14 11H6z"></path>
                        </svg>
                    </a>
                </div>
                <img src={projectBasedImageOptimized.src} alt="project based" width={projectBasedImageOptimized.rawOptions.width} height={projectBasedImageOptimized.rawOptions.height} className={`h-full hidden md:block object-cover ${active != 'service-1' ? 'lg:rounded-l-xl w-72' : 'w-72 xl:w-1/2'}`} />
            </div>

            <div onClick={() => {
                setActive('service-2')
            }} className={`w-full h-[400px] shadow-lg flex relative overflow-hidden lg:overflow-visible transition-all border-l-4 origin-right rounded-xl lg:rounded-r-xl bg-[#fefbec] duration-500 dark:bg-gray-900 ${active != 'service-2' ? 'lg:max-w-52 lg:text-gray-500 border-gray-300' : 'dark:text-gray-200 max-w-full  border-[#c7a80e]'}`} id="service-2">
                <button className="absolute -left-[94px] bottom-1/2 -rotate-90 font-roboto bg-[#c7a80e] text-white px-6 py-3 rounded-t-xl">SERVICE #2</button>
                <div className={`absolute right-0 bottom-0 rounded-r-xl hidden md:block origin-right top-0 from-gray-900 ${active == 'service-2' ? 'w-1/2 bg-gradient-to-l' : 'lg:w-full w-1/2 bg-gradient-to-l lg:bg-gradient-to-b'}`}></div>
                <div className={`p-5 font-roboto overflow-hidden ${active != 'service-2' ? 'lg:absolute left-0 top-0 lg:text-white' : 'relative'}`}>
                    <h3 className="text-xl font-bold">ON
                        DEMAND</h3>
                    <p className={`text-sm xl:text-base mt-2 ${active != 'service-2' && 'lg:hidden'}`}>Layanan yang cocok bagi Anda yang membutuhkan bug-fixing atau pengembangan fitur baru di produk Anda dengan segera dan spefisik. Anda hanya perlu menghubungi kami, sampaikan kebutuhan Anda, dan tim kami akan memberikan penawaran solusi terbaik untuk menyelesaikannya.</p>
                    <ul className={`xl:text-base text-sm my-3 flex flex-col gap-2 ${active != 'service-2' && 'lg:hidden'}`}>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Lebih Fleksible
                        </li>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Pengerjaan berdasarkan requirement ticket</li>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Biaya yang lebih murah
                        </li>
                        <li className="flex gap-5 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='text-blue-800'>
                                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"></path>
                            </svg>
                            Cocok untuk pengembangan fitur dan maintenance</li>
                    </ul>
                    <a href="/services" className={`flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:font-semibold font-bold ${active != 'service-2' && 'lg:hidden'}`}>
                        Pergi ke Layanan
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 13h8l-3.5 3.5l1.42 1.42L17.84 12l-5.92-5.92L10.5 7.5L14 11H6z"></path>
                        </svg>
                    </a>
                </div>
                <img src={onDemandImageOptimized.src} alt="project based" width={onDemandImageOptimized.rawOptions.width} height={onDemandImageOptimized.rawOptions.height} className={`h-full origin-right object-cover hidden md:block rounded-r-xl w-72 ${active == 'service-2' && 'w-72 xl:w-1/2'}`} />
            </div>
        </article>
    )
}
export default HomeServiceContent