'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileDrawer({ isOpen, onClose }) {
  const pathname = usePathname();

  if (!isOpen) return null;

  const navLinks = [
    { name: 'Targeted Exams', path: '/', icon: 'rule' },
    { name: 'Batches & Fees', path: '/batches', icon: 'school' },
    { name: 'Free Material', path: '/free-material', icon: 'folder_shared' },
    { name: 'Results & Alumni Network', path: '/results', icon: 'military_tech' },
    { name: 'Inquire Now', path: '/contact', icon: 'contact_support', isHighlight: true }
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2B3A55]/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-[#FAF7F0] border-l border-[#B89E58]/40 z-50 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto animate-slide-left">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#B89E58]/30">
            <div className="flex items-center">
              <img
                src="/sea-logo-horizontal.png"
                alt="Shubh Engineering Academy"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#566277] hover:text-[#2B3A55] hover:bg-[#EEE7D2]"
              aria-label="Close Menu"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 mt-5">
            {navLinks.map((item) => {
              const isActive = pathname === item.path;
              if (item.isHighlight) {
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={onClose}
                    className="mt-2 px-4 py-3 rounded-xl text-sm font-extrabold flex items-center justify-between bg-[#2B3A55] text-white shadow-md border border-[#D4AB3F] group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#D4AB3F]">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <span className="material-symbols-outlined text-xs text-[#D4AB3F] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-3 transition-colors ${
                    isActive
                      ? 'bg-[#2B3A55] text-white shadow-sm'
                      : 'text-[#566277] hover:bg-[#EEE7D2] hover:text-[#2B3A55]'
                  }`}
                >
                  <span className={`material-symbols-outlined ${isActive ? 'text-[#D4AB3F]' : 'text-[#B89E58]'}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Quick Google Drive Study Material Links in Mobile Drawer */}
          <div className="mt-5 p-3.5 bg-[#EEE7D2]/80 rounded-xl border border-[#B89E58]/30 space-y-2">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#2B3A55] uppercase">
              <span className="material-symbols-outlined text-[#D4AB3F] text-base">cloud_download</span>
              <span>Free Google Drive Notes</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-0.5">
              <a
                href="https://drive.google.com/drive/folders/1uH5js-rnb3-Gvw8dIrDi2ITNONJdrFow"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2B3A55] text-white text-[11px] font-bold py-2 px-2.5 rounded-lg text-center flex items-center justify-center gap-1 shadow-xs hover:bg-[#1E2A40]"
              >
                <span>Class 2 Drive</span>
                <span className="material-symbols-outlined text-xs text-[#D4AB3F]">open_in_new</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Z6A4rF2wrd3ze8yy9EakwZMwy989e65f"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AB3F] text-[#1E1C12] text-[11px] font-bold py-2 px-2.5 rounded-lg text-center flex items-center justify-center gap-1 shadow-xs hover:bg-[#D4AB3F]/90"
              >
                <span>Class 3 Drive</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA in Drawer */}
        <div className="pt-5 border-t border-[#B89E58]/30 space-y-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full bg-[#2B3A55] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md border border-[#D4AB3F]/40 hover:bg-[#1E2A40]"
          >
            <span>Inquire for Admission</span>
            <span className="material-symbols-outlined text-[#D4AB3F] text-sm">arrow_forward</span>
          </Link>

          <a
            href="https://www.instagram.com/shubh.engineering/"
            target="_blank"
            rel="noreferrer"
            className="w-full bg-white py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 text-[#2B3A55] border border-[#B89E58]/30 shadow-xs hover:border-[#D4AB3F]"
          >
            <span className="material-symbols-outlined text-[#D4AB3F] text-base">photo_camera</span>
            <span>Follow @shubh.engineering</span>
          </a>

          <div className="text-[11px] text-[#566277] text-center pt-1 font-medium space-y-1">
            <p className="font-bold text-[#2B3A55]">
              <a href="tel:+919737309991" className="hover:text-[#D4AB3F]">+91 97373 09991</a> • <a href="tel:+919737609991" className="hover:text-[#D4AB3F]">+91 97376 09991</a>
            </p>
            <p>The Landmark, A-207, Kudasan, Gandhinagar</p>
          </div>
        </div>
      </aside>
    </>
  );
}
