import { useState, useEffect, type FC } from 'react';
interface HeaderButtonContactUsProps {
    className: string
}
const HeaderButtonContactUs: FC<HeaderButtonContactUsProps> = ({ className }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <a href="https://api.whatsapp.com/send?phone=6289512589756" target="_blank" rel="noopener noreferrer" aria-label="contact us" className={`relative inline-block px-6 py-3 text-blue-800 border-2 border-blue-800 dark:text-gray-500 dark:border-gray-500 transition-transform duration-500 ease-out group overflow-hidden rounded-full ${!scrolled && 'shadow-xl'} ${className}`}
        >
            <span className={`absolute inset-0 w-full h-full transition-all duration-500 ease-out transform scale-0 bg-blue-800 group-hover:scale-150 dark:bg-gray-900 origin-bottom-right rounded-tl-full ${!scrolled && 'scale-150'}`}></span>
            <span className={`relative z-10 transition-colors flex items-center gap-2 duration-500 ease-out group-hover:text-white font-medium font-roboto ${!scrolled && 'text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className='text-2xl' viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z" />
                </svg>
                Hubungi Kami
            </span>
        </a>)
}
export default HeaderButtonContactUs