import NavLink from '@components/atoms/NavLink';
import React from 'react';

interface NavListProps {
  isMobile?: boolean
  currentPathName: string
  isSolid?: boolean
}

const NavList: React.FC<NavListProps> = ({ isMobile = false, currentPathName, isSolid = false }) => (
  <ul className={`${isMobile ? 'flex flex-col justify-start gap-10' : 'lg:flex items-center hidden'} xl:gap-7  lg:gap-5 font-roboto`}>
    <NavLink scrolledDefault={isMobile || isSolid} href="/" isActive={currentPathName == '/'}>Beranda</NavLink>
    <NavLink scrolledDefault={isMobile || isSolid} href="/services" isActive={currentPathName == '/services'}>Layanan</NavLink>
    <NavLink scrolledDefault={isMobile || isSolid} href="/blogs" isActive={currentPathName == '/blogs' || currentPathName.startsWith('/blogs')}>Blog</NavLink>
    <NavLink scrolledDefault={isMobile || isSolid} href="/bukubatik" isActive={currentPathName == '/bukubatik' || currentPathName.startsWith('/bukubatik')}>BukuBatik</NavLink>
  </ul>
);

export default NavList;