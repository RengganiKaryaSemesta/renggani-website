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
      setScrolled(window.scrollY > 16 || scrolledDefault);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDefault]);

  if (isHighlight) {
    return (
      <li>
        <a href={href} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
          {children}
        </a>
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        className={`group relative inline-flex items-center whitespace-nowrap px-2.5 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
          isActive
            ? 'text-blue-700'
            : scrolled
              ? 'text-slate-600 hover:text-blue-700'
              : 'text-slate-700 hover:text-blue-700'
        }`}
      >
        {children}
        <span className={`absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-blue-600 transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} aria-hidden="true" />
      </a>
    </li>
  );
};

export default NavLink;
