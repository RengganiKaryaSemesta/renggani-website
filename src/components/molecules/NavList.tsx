import NavLink from '@components/atoms/NavLink';
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

  const isHomeActive = cleanPath === '' || cleanPath === '/';
  const isServicesActive = cleanPath === '/services' || cleanPath.startsWith('/services/');
  const isBlogsActive = cleanPath === '/blogs' || cleanPath.startsWith('/blogs/');
  const isBukuBatikActive = cleanPath === '/bukubatik' || cleanPath.startsWith('/bukubatik/');

  return (
    <ul className={`${isMobile ? 'flex flex-col justify-start gap-10' : 'lg:flex items-center hidden'} xl:gap-7 lg:gap-5 font-roboto`}>
      <NavLink scrolledDefault={isMobile || isSolid} href="/" isActive={isHomeActive}>Beranda</NavLink>
      <NavLink scrolledDefault={isMobile || isSolid} href="/services" isActive={isServicesActive}>Layanan</NavLink>
      <NavLink scrolledDefault={isMobile || isSolid} href="/blogs" isActive={isBlogsActive}>Blog</NavLink>
      <NavLink scrolledDefault={isMobile || isSolid} href="/bukubatik" isActive={isBukuBatikActive} isHighlight={true}>BukuBatik</NavLink>
    </ul>
  );
};

export default NavList;