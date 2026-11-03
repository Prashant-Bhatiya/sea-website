'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ onOpenMobileMenu }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Targeted Exams', path: '/' },
    { name: 'Batches & Fees', path: '/batches' },
    { name: 'Free Material', path: '/free-material' },
    { name: 'Results & Alumni', path: '/results' }
  ];

  return (
    <header
      className={`sticky top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F0]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#B89E58]/35'
          : 'bg-[#FAF7F0] py-3.5 border-b border-[#B89E58]/25'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 py-0.5">
          <img
            src="/sea-logo-horizontal.png"
            alt="Shubh Engineering Academy - Inspire . Learn . Achieve"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path === '/results' && pathname === '/alumni');
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-xl text-xs xl:text-sm font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#2B3A55] bg-[#EEE7D2] shadow-xs'
                    : 'text-[#566277] hover:text-[#2B3A55] hover:bg-[#EEE7D2]/50'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#D4AB3F] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop ONLY: Inquire Now button */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex group relative items-center gap-2 px-4 py-2 rounded-xl bg-[#2B3A55] text-white text-xs xl:text-sm font-bold shadow-md hover:bg-[#1E2A40] transition-all duration-200 border border-[#D4AB3F]/40 hover:border-[#D4AB3F]"
          >
            <span>Inquire Now</span>
            <span className="material-symbols-outlined text-sm text-[#D4AB3F] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={onOpenMobileMenu}
            className="lg:hidden p-2 rounded-xl text-[#2B3A55] bg-white border border-[#B89E58]/30 hover:bg-[#EEE7D2] transition-colors flex items-center justify-center shadow-xs shrink-0 focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>

      </div>
    </header>
  );
}
