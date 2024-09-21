import React, { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolledDefault?:boolean;
  isActive?:boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children,scrolledDefault=false,isActive=false }) => {
  const [scrolled, setScrolled] = useState(scrolledDefault);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || scrolledDefault) {
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
    <li>
      <a
        href={href}
        className={`font-medium border-2 px-7 py-3 rounded-full ${scrolled 
          ? (`hover:text-white hover:border-blue-800 hover:bg-blue-800  dark:border-transparent dark:hover:bg-gray-900 dark:hover:border-gray-800 
            ${isActive ? 'text-white dark:bg-gray-900 dark:text-white border-blue-800 bg-blue-800':'border-transparent dark:text-gray-500 text-gray-800'}`)
          : (`text-white hover:border-white hover:backdrop-blur-sm hover:bg-white/10 
            ${isActive ? 'border-white backdrop-blur-sm bg-white/10':'border-transparent'}`)} transition-all duration-300`}
      >
        
        {children}
      </a>
    </li>
  )
};

export default NavLink;
