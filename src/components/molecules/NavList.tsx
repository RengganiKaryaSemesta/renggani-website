import NavLink from '@components/atoms/NavLink';
import NavDropdown from '@components/molecules/NavDropdown';
import React, { useState, useEffect } from 'react';

interface NavListProps {
  isMobile?: boolean;
  currentPathName: string;
  isSolid?: boolean;
}

const NavList: React.FC<NavListProps> = ({ isMobile = false, currentPathName = '', isSolid = false }) => {
  const [scrolled, setScrolled] = useState(isSolid);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 || isSolid) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSolid]);

  const cleanPath = currentPathName.endsWith('/') && currentPathName.length > 1
    ? currentPathName.slice(0, -1)
    : currentPathName;

  const isHomeActive = cleanPath === '' || cleanPath === '/';
  const isBlogsActive = cleanPath === '/blogs' || cleanPath.startsWith('/blogs/');
  const isAboutActive = cleanPath === '/about-us' || cleanPath.startsWith('/about-us/');

  return (
    <ul className={`${isMobile ? 'flex flex-col justify-start gap-6' : 'lg:flex items-center hidden'} xl:gap-5 lg:gap-3 font-roboto`}>
      <NavLink scrolledDefault={isMobile || isSolid} href="/" isActive={isHomeActive}>Beranda</NavLink>
      <NavDropdown isMobile={isMobile} currentPathName={currentPathName} scrolled={isMobile || scrolled} />
      <NavLink scrolledDefault={isMobile || isSolid} href="/blogs" isActive={isBlogsActive}>Blog</NavLink>
      <NavLink scrolledDefault={isMobile || isSolid} href="/about-us" isActive={isAboutActive}>Tentang</NavLink>
    </ul>
  );
};

export default NavList;