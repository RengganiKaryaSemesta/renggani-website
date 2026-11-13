import React, { useState, useEffect } from 'react';

interface LanguageSwitcherProps {
  currentPathName: string;
  isSolid?: boolean;
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentPathName = '',
  isSolid = false,
  isMobile = false,
}) => {
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

  const isEn = currentPathName.startsWith('/en');

  // Compute destination URLs
  let idUrl = '/';
  let enUrl = '/en/';

  if (isEn) {
    const withoutEn = currentPathName.replace(/^\/en(\/|$)/, '/');
    idUrl = withoutEn.startsWith('/') ? withoutEn : `/${withoutEn}`;
  } else {
    enUrl = currentPathName === '/' ? '/en/' : `/en${currentPathName}`;
  }

  const isLightText = !scrolled && !isMobile;

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 text-xs font-semibold tracking-wider transition-colors duration-300 ${
        isLightText
          ? 'bg-white/20 text-white backdrop-blur-sm border border-white/30'
          : 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700'
      }`}
    >
      <a
        href={idUrl}
        aria-label="Bahasa Indonesia"
        className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${
          !isEn
            ? isLightText
              ? 'bg-white text-blue-900 shadow-sm font-bold'
              : 'bg-blue-600 text-white shadow-sm font-bold'
            : isLightText
            ? 'text-white/80 hover:text-white'
            : 'text-slate-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
        }`}
      >
        <span>ID</span>
      </a>
      <a
        href={enUrl}
        aria-label="English (Australia & Global)"
        className={`px-2.5 py-1 rounded-full transition-all duration-200 flex items-center gap-1 ${
          isEn
            ? isLightText
              ? 'bg-white text-blue-900 shadow-sm font-bold'
              : 'bg-blue-600 text-white shadow-sm font-bold'
            : isLightText
            ? 'text-white/80 hover:text-white'
            : 'text-slate-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
        }`}
      >
        <span>EN</span>
      </a>
    </div>
  );
};

export default LanguageSwitcher;
