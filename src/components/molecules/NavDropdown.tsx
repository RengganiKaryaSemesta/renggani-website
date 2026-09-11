import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  title: string;
  subtitle: string;
  href: string;
  badge?: string;
  badgeColor?: string;
  iconBg: string;
  iconColor: string;
  svgPath: React.ReactNode;
}

interface NavDropdownProps {
  isMobile?: boolean;
  currentPathName: string;
  scrolled?: boolean;
}

const servicesItems: DropdownItem[] = [
  {
    title: 'Solusi & Jasa IT',
    subtitle: 'Pengembangan Web, Mobile Apps & Solusi Software Custom',
    href: '/services',
    iconBg: 'bg-blue-500/10 dark:bg-blue-500/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
    svgPath: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    title: 'BukuBatik',
    subtitle: 'Sistem Akuntansi, Pembukuan, PO, Piutang & HPP Usaha',
    href: '/bukubatik',
    badge: 'Sistem Akuntansi',
    badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
    iconBg: 'bg-purple-500/10 dark:bg-purple-500/20',
    iconColor: 'text-purple-600 dark:text-purple-400',
    svgPath: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
  {
    title: 'RKSWorkmate',
    subtitle: 'Presensi Selfie Liveness, Multi-Cabang & Auto Payroll',
    href: '/rksworkmate',
    badge: 'HR & Payroll',
    badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    iconBg: 'bg-emerald-500/10 dark:bg-emerald-500/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    svgPath: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    ),
  },
];

const NavDropdown: React.FC<NavDropdownProps> = ({ isMobile = false, currentPathName = '', scrolled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanPath = currentPathName.endsWith('/') && currentPathName.length > 1
    ? currentPathName.slice(0, -1)
    : currentPathName;

  const isLayananActive =
    cleanPath === '/services' ||
    cleanPath.startsWith('/services/') ||
    cleanPath === '/bukubatik' ||
    cleanPath.startsWith('/bukubatik/') ||
    cleanPath === '/rksworkmate' ||
    cleanPath.startsWith('/rksworkmate/');

  // Handle click outside on desktop
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 150);
    }
  };

  // Mobile View
  if (isMobile) {
    return (
      <li className="w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between text-left font-medium py-2 text-base transition-colors ${
            isLayananActive ? 'text-blue-600 font-bold' : 'text-slate-800 dark:text-slate-200'
          }`}
          aria-expanded={isOpen}
        >
          <span className="flex items-center gap-2">
            Layanan & Produk
            {isLayananActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            )}
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <ul className="mt-2 space-y-2 pl-3 border-l-2 border-slate-200 dark:border-slate-800">
            {servicesItems.map((item) => {
              const isItemActive = cleanPath === item.href || cleanPath.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block p-2.5 rounded-xl transition-all ${
                      isItemActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{item.title}</span>
                      {item.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{item.subtitle}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  }

  // Desktop View
  return (
    <li
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`group font-medium border-2 px-6 py-2.5 rounded-full flex items-center gap-1.5 transition-all duration-300 focus:outline-none ${
          scrolled
            ? isLayananActive
              ? 'text-white dark:bg-gray-900 dark:text-white border-blue-800 bg-blue-800'
              : 'border-transparent dark:text-gray-300 text-gray-800 hover:text-white hover:border-blue-800 hover:bg-blue-800 dark:hover:bg-gray-900 dark:hover:border-gray-800'
            : isLayananActive
              ? 'border-white backdrop-blur-sm bg-white/10 text-white'
              : 'border-transparent text-white hover:border-white hover:backdrop-blur-sm hover:bg-white/10'
        }`}
      >
        <span>Layanan</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Floating Dropdown Panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 w-80 sm:w-96 transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl p-2.5 space-y-1.5 ring-1 ring-black/5">
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest font-bold text-slate-400 dark:text-slate-500">
            Pilihan Layanan & Produk
          </div>

          {servicesItems.map((item) => {
            const isItemActive = cleanPath === item.href || cleanPath.startsWith(`${item.href}/`);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-start gap-3.5 p-3 rounded-xl transition-all duration-150 group ${
                  isItemActive
                    ? 'bg-slate-100 dark:bg-slate-800/80 ring-1 ring-slate-200 dark:ring-slate-700'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 ${item.iconBg} ${item.iconColor} transition-transform group-hover:scale-110`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.svgPath}
                  </svg>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className={`text-[9px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default NavDropdown;
