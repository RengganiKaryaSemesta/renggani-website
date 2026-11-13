import NavLink from '@components/atoms/NavLink';
import NavDropdown from '@components/molecules/NavDropdown';
import React from 'react';

interface NavListProps {
  isMobile?: boolean;
  currentPathName: string;
  isSolid?: boolean;
}

const NavList: React.FC<NavListProps> = ({ isMobile = false, currentPathName = '', isSolid = false }) => {

  const cleanPath = currentPathName.endsWith('/') && currentPathName.length > 1
    ? currentPathName.slice(0, -1)
    : currentPathName;

  const isEn = cleanPath === '/en' || cleanPath.startsWith('/en/');

  if (isEn) {
    const isEnHomeActive = cleanPath === '/en';
    const isCaseStudiesActive = cleanPath === '/en/case-studies' || cleanPath.startsWith('/en/case-studies/');
    const isServicesActive = cleanPath === '/en/services' || cleanPath.startsWith('/en/services/');

    return (
      <ul className={`${isMobile ? 'flex flex-col justify-start gap-6' : 'lg:flex items-center hidden'} xl:gap-4 lg:gap-1`}>
        <NavLink scrolledDefault={isMobile || isSolid} href="/en/" isActive={isEnHomeActive}>Home</NavLink>
        <NavLink scrolledDefault={isMobile || isSolid} href="/en/#case-studies" isActive={isCaseStudiesActive}>Case Studies</NavLink>
        <NavLink scrolledDefault={isMobile || isSolid} href="/en/#services" isActive={isServicesActive}>Capabilities</NavLink>
        <NavLink scrolledDefault={isMobile || isSolid} href="/en/#why-us" isActive={false}>Why Us</NavLink>
        <NavLink scrolledDefault={isMobile || isSolid} href="/en/#contact" isActive={false}>Contact</NavLink>
      </ul>
    );
  }

  const isHomeActive = cleanPath === '' || cleanPath === '/';
  const isBlogsActive = cleanPath === '/blogs' || cleanPath.startsWith('/blogs/');
  const isAboutActive = cleanPath === '/about-us' || cleanPath.startsWith('/about-us/');

  return (
    <ul className={`${isMobile ? 'flex flex-col justify-start gap-6' : 'lg:flex items-center hidden'} xl:gap-4 lg:gap-1`}>
      <NavLink scrolledDefault={isMobile || isSolid} href="/" isActive={isHomeActive}>Beranda</NavLink>
      <NavDropdown isMobile={isMobile} currentPathName={currentPathName} />
      <NavLink scrolledDefault={isMobile || isSolid} href="/blogs" isActive={isBlogsActive}>Blog</NavLink>
      <NavLink scrolledDefault={isMobile || isSolid} href="/about-us" isActive={isAboutActive}>Tentang</NavLink>
    </ul>
  );
};

export default NavList;
