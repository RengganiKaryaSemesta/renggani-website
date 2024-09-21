import NavLink from '@components/atoms/NavLink';
import React from 'react';

interface NavListProps {
  isMobile?: boolean
  currentPathName: string
}

const NavList: React.FC<NavListProps> = ({ isMobile = false, currentPathName }) => (
  <ul className={`${isMobile ? 'flex flex-col justify-start gap-10' : 'lg:flex items-center hidden'} xl:gap-7  lg:gap-5 font-roboto`}>
    <NavLink scrolledDefault={isMobile} href="/" isActive={currentPathName == '/'}>Beranda</NavLink>
    <NavLink scrolledDefault={isMobile} href="/services" isActive={currentPathName == '/services'}>Layanan</NavLink>
    <NavLink scrolledDefault={isMobile} href="/about-us" isActive={currentPathName == '/about-us'}>Tentang</NavLink>
    <NavLink scrolledDefault={isMobile} href="/blogs" isActive={currentPathName == '/blogs'}>Blog</NavLink>
  </ul>
);

export default NavList;