import { useEffect, useRef } from "react";
import NavList from "@components/molecules/NavList";
import HeaderButtonContactUs from "@components/atoms/HeaderButtonContactUs";
import LanguageSwitcher from "@components/atoms/LanguageSwitcher";
import { mobileMenuState } from "src/stores/toggleMobileMenuStore";
import { useStore } from "@nanostores/react";

interface SideBarMenuProps {
    currentPathName: string;
}

const SideBarMenu: React.FC<SideBarMenuProps> = ({ currentPathName }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const isActive = useStore(mobileMenuState);
    const handleClickOutside = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            mobileMenuState.set(false);
        }
    };

    useEffect(() => {
        if (isActive) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isActive]);

    return (
        <aside className={`lg:hidden fixed z-50 flex overflow-hidden justify-end top-0 right-0 h-screen bg-black/50 backdrop-blur-sm transition-all w-full ${isActive ? 'max-w-full' : 'max-w-0 duration-700'}`} >
            <menu ref={sidebarRef} className={`bg-white w-[80%] ${isActive ? 'max-w-full duration-700' : 'max-w-0 duration-300 translate-x-10'} transition-all pt-8 pl-8 pr-6 flex flex-col justify-between h-full pb-10`}>
                <div>
                    <div className="flex justify-between items-center mb-8">
                        <LanguageSwitcher currentPathName={currentPathName} isMobile={true} isSolid={true} />
                        <button onClick={() => mobileMenuState.set(false)} className="text-2xl text-gray-800 p-2" aria-label="menu close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
                        </button>
                    </div>
                    <NavList currentPathName={currentPathName} isMobile={true} />
                </div>
                <div>
                    <hr className="my-6" />
                    <HeaderButtonContactUs className="w-full text-center" isSolid={true} currentPathName={currentPathName} />
                </div>
            </menu>
        </aside>
    );
};

export default SideBarMenu;
