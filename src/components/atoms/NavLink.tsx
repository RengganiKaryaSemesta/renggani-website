import React, { useState, useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolledDefault?: boolean;
  isActive?: boolean;
  isHighlight?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, scrolledDefault = false, isActive = false, isHighlight = false }) => {
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
  }, [scrolledDefault]);

  if (isHighlight) {
    return (
      <li>
        <a
          href={href}
          className={`font-semibold border-2 px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 text-sm ${
            scrolled
              ? isActive
                ? 'bg-purple-700 text-white border-purple-700 shadow-md'
                : 'bg-purple-600 text-white hover:bg-purple-700 border-purple-600 dark:bg-purple-600 dark:text-white shadow-sm'
              : isActive
                ? 'bg-purple-600 text-white border-purple-400 backdrop-blur-md shadow-md'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400/50 hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-500/25'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          {children}
        </a>
      </li>
    );
  }

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
  );
};

export default NavLink;
