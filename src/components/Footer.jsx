'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer({ onTriggerDownload }) {
  return (
    <footer className="w-full bg-[#2B3A55] text-white pt-16 pb-8 border-t border-[#B89E58]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Col 1 & 2: Branding & Social */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-[#D4AB3F] shadow-sm shrink-0">
                <img src="/sea-logo-badge.jpg" alt="Shubh Engineering Academy Badge" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-base text-white font-black uppercase tracking-tight block font-display">
                  Shubh Engineering Academy
                </span>
                <span className="text-[11px] text-[#D4AB3F] font-bold tracking-widest block uppercase">
                  Inspire • Learn • Achieve
                </span>
              </div>
            </div>
            
            <p className="text-xs text-[#FAF7F0]/85 max-w-sm leading-relaxed">
              Gujarat’s premier civil engineering coaching &amp; preparation institute in Gandhinagar. Dedicated exclusively to GPSC Class 1 &amp; 2, Assistant Engineer (AE), Additional Assistant Engineer (AAE), and state government technical competitive exams.
            </p>

            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-wider text-[#D4AB3F] font-bold block mb-2">Official Social &amp; Connect</span>
              <a
                href="https://www.instagram.com/shubh.engineering/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E2A40] text-[#FAF7F0] hover:text-[#D4AB3F] border border-[#B89E58]/30 hover:border-[#D4AB3F] text-xs font-semibold transition-all group"
              >
                <span className="material-symbols-outlined text-[#D4AB3F] text-base group-hover:scale-110 transition-transform">
                  photo_camera
                </span>
                <span>@shubh.engineering</span>
                <span className="material-symbols-outlined text-xs text-[#B89E58]">arrow_outward</span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-[#FAF7F0]/70">
              <span className="text-[#D4AB3F] font-bold">Focus Exams:</span> GPSC Class 1 &amp; 2 • Assistant Engineer (AE) • GSSSB AAE • GPSSB JE • State Civil Technical Cadres
            </div>
          </div>

          {/* Col 3: Core Academic Offerings */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#D4AB3F] font-bold uppercase tracking-wider">Core Offerings</h3>
            <ul className="space-y-2 text-xs text-[#FAF7F0]/80">
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D4AB3F]">check_circle</span>
                <span>Conceptual Civil Classes</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D4AB3F]">check_circle</span>
                <span>Full-Length Mock Test Series</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D4AB3F]">check_circle</span>
                <span>Interview Guidance (Cl 1 &amp; 2)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D4AB3F]">check_circle</span>
                <span>Marathon Revision Sessions</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D4AB3F]">check_circle</span>
                <span>SOM &amp; RCC Formula Mastery</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px] text-[#D4AB3F]">check_circle</span>
                <span>Gujarat SOR &amp; IS-Code Drills</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Aspirant Resources & Downloads */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#D4AB3F] font-bold uppercase tracking-wider">Aspirant Resources</h3>
            <ul className="space-y-2 text-xs text-[#FAF7F0]/80">
              <li>
                <Link
                  href="/free-material"
                  className="hover:text-[#D4AB3F] transition-colors inline-flex items-center gap-1 text-left font-semibold text-[#D4AB3F]"
                >
                  <span>Free Study Material &amp; Drive</span>
                  <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1uH5js-rnb3-Gvw8dIrDi2ITNONJdrFow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AB3F] transition-colors inline-flex items-center gap-1 text-left"
                >
                  <span>Class 2 Google Drive</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1Z6A4rF2wrd3ze8yy9EakwZMwy989e65f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AB3F] transition-colors inline-flex items-center gap-1 text-left"
                >
                  <span>Class 3 Google Drive</span>
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => onTriggerDownload && onTriggerDownload('Civil-Formula-Handbook-Gandhinagar.pdf')}
                  className="hover:text-[#D4AB3F] transition-colors text-left"
                >
                  Civil Formula Handbooks
                </button>
              </li>
              <li>
                <Link href="/batches" className="hover:text-[#D4AB3F] transition-colors">
                  Active Batches &amp; Fees Inquiries
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-[#D4AB3F] transition-colors">
                  Results &amp; Officers Alumni (4,129+)
                </Link>
              </li>
              <li>
                <Link href="/results#official-table" className="hover:text-[#D4AB3F] transition-colors">
                  Official Vacancy Selection Record (850+)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Gandhinagar Center & Direct Contact */}
          <div className="space-y-3">
            <h3 className="text-xs text-[#D4AB3F] font-bold uppercase tracking-wider">Gandhinagar Center</h3>
            
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-white block">Academy Address:</span>
              <p className="text-xs text-[#FAF7F0]/85 leading-relaxed">
                The Landmark, A-207, Kudasan Road, opposite Spicy Street, Kudasan, Gandhinagar, Gujarat 382419.
              </p>
            </div>

            <div className="pt-2 border-t border-[#B89E58]/20 space-y-1 text-xs">
              <p className="text-[#FAF7F0]/80">
                <span className="font-bold text-[#D4AB3F]">Call / WhatsApp Inquiries:</span>
              </p>
              <p className="font-bold text-white">
                <a href="tel:+919737309991" className="hover:text-[#D4AB3F] block">+91 97373 09991</a>
                <a href="tel:+919737609991" className="hover:text-[#D4AB3F] block">+91 97376 09991</a>
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F0] text-[#2B3A55] text-xs font-bold hover:bg-[#D4AB3F] transition-colors"
              >
                <span>Send Admission Query</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#B89E58]/20 flex flex-col md:flex-row items-center justify-between text-xs text-[#FAF7F0]/70 gap-3">
          <p>© 2025 Shubh Engineering Academy. Inspire • Learn • Achieve. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/shubh.engineering/"
              target="_blank"
              rel="noreferrer"
              className="text-[#D4AB3F] hover:underline font-bold flex items-center gap-1"
            >
              <span>Follow on Instagram</span>
              <span className="material-symbols-outlined text-xs">arrow_outward</span>
            </a>
            <Link href="/contact" className="hover:text-[#D4AB3F] transition-colors">
              Visit Gandhinagar Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
