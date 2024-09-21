import { useEffect,  useState } from "react";
import { mobileMenuState } from "src/stores/toggleMobileMenuStore";
const SideBarButton = () => {
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
    }, [scrolled]);
    return (
        <button onClick={() => mobileMenuState.set(true)} className={`text-2xl ${scrolled ? 'text-gray-800' : 'text-white'} flex items-center justify-center h-10 w-10 rounded-full lg:hidden`} aria-label="menu open">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"></path></svg>
        </button>
    )
}
export default SideBarButton