'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FreeMaterial({ onTriggerDownload, onOpenMentor }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const downloads = [
    {
      id: 1,
      cadre: 'class2',
      badge: 'GPSC Class 1 & 2',
      badgeColor: 'bg-[#2B3A55] text-[#D4AB3F]',
      title: 'GPSC Class 1 & 2 Official Syllabus',
      desc: 'Complete Prelims 300M + Mains 5 Papers technical curriculum breakdown with marking schemes.',
      meta: 'PDF • 4.2 MB • Updated 2025–26',
      filename: 'GPSC-Class-1-2-Official-Syllabus.pdf'
    },
    {
      id: 2,
      cadre: 'class3',
      badge: 'GSSSB AAE Official',
      badgeColor: 'bg-[#D4AB3F] text-[#1E1C12]',
      title: 'GSSSB AAE Civil Detailed Syllabus',
      desc: 'Revised CBRT exam schema, Gujarati language grammar syllabus, and civil technical subjects.',
      meta: 'PDF • 2.8 MB • Gazette 2024',
      filename: 'GSSSB-AAE-Civil-Syllabus.pdf'
    },
    {
      id: 3,
      cadre: 'class3',
      badge: 'GPSSB Panchayat',
      badgeColor: 'bg-[#EEE7D2] text-[#2B3A55]',
      title: 'GPSSB Junior Engineer Exam Pattern & Code',
      desc: '100M Technical + 50M General section rubric with negative marking mitigation guidelines.',
      meta: 'PDF • 1.9 MB • Revised Pattern',
      filename: 'GPSSB-JE-Syllabus-Scheme.pdf'
    },
    {
      id: 4,
      cadre: 'class2',
      badge: 'Solved Papers',
      badgeColor: 'bg-[#2B3A55] text-white',
      title: 'GPSC AE/EE 10-Year Solved Question Papers',
      desc: 'Previous examination sessions solved with detailed state engineering calculations and steps.',
      meta: 'ZIP / PDF • 48 MB • 1,200 MCQs',
      filename: 'GPSC-AE-EE-Solved-PYQ-2018-2023.zip'
    },
    {
      id: 5,
      cadre: 'class3',
      badge: 'Solved Papers',
      badgeColor: 'bg-[#D4AB3F] text-[#1E1C12]',
      title: 'GSSSB AAE Civil CBRT Question Papers',
      desc: 'All-shift CBRT question papers with official provisional vs final keys and model answers.',
      meta: 'PDF • 32 MB • 8 Shift Sets',
      filename: 'GSSSB-AAE-Civil-PYQ-Complete.zip'
    },
    {
      id: 6,
      cadre: 'all',
      badge: 'Academy Special',
      badgeColor: 'bg-[#2B3A55] text-[#D4AB3F]',
      title: 'Gujarat Civil Engineering Formula Pocketbook',
      desc: 'Over 650+ condensed IS code formulas, soil coefficients, and hydraulic reference tables.',
      meta: 'PDF • 14 MB • High Yield Handbook',
      filename: 'Gujarat-Civil-Engineering-Formula-Handbook.pdf'
    }
  ];

  const filteredDownloads = activeCategory === 'all'
    ? downloads
    : downloads.filter(d => d.cadre === activeCategory || d.cadre === 'all');

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Authority Hero */}
      <section className="relative w-full overflow-hidden bg-[#2B3A55] text-white py-14 sm:py-16 px-4 sm:px-8 border-b border-[#B89E58]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A40] via-[#2B3A55] to-[#1E2A40] opacity-95 pointer-events-none"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#D4AB3F] opacity-10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2.5 bg-[#FAF7F0]/10 border border-[#B89E58]/50 text-[#D4AB3F] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm">cloud_download</span>
              <span>Open Google Drive Study Archives &bull; 100% Free For All Aspirants</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Free Civil Engineering Study Material &amp; Drive Archives
            </h1>

            <p className="text-base sm:text-lg text-[#d8e1f0] max-w-2xl leading-relaxed">
              Curated directly by Gandhinagar subject faculty at <strong>Shubh Engineering Academy</strong>. Download official syllabus handbooks, solved question archives, and formula pocketbooks with zero registration or payment barrier.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#drive-folders"
                className="inline-flex items-center gap-2 bg-[#D4AB3F] text-[#1E1C12] font-bold px-6 py-3 rounded-xl text-xs sm:text-sm hover:bg-[#D4AB3F]/90 transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-base">folder_shared</span>
                <span>Access Google Drive Folders</span>
              </a>
              <a
                href="#direct-downloads"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-base text-[#D4AB3F]">download</span>
                <span>Instant PDF Handouts</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
            <div className="bg-[#FAF7F0]/10 backdrop-blur-md p-5 rounded-xl text-left border border-[#B89E58]/40 shadow-inner">
              <span className="text-xs text-[#D4AB3F] uppercase tracking-wider block font-bold">Open Access Policy</span>
              <span className="text-xl sm:text-2xl font-bold text-white block mt-0.5">Zero Fee &bull; No Login</span>
              <span className="text-xs text-[#d8e1f0] block mt-0.5">Direct Google Drive Links</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Google Drive Folders Section */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8 w-full" id="drive-folders">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase text-[#D4AB3F] tracking-wider block">Official Cloud Repositories</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">
              Select Your Target Examination Cadre
            </h2>
            <p className="text-xs sm:text-sm text-[#566277] max-w-2xl mt-1">
              Open the dedicated Google Drive directory for your target competitive exam to preview and download all files.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Card 1: Class 2 Material */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AB3F]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AB3F]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#FAF7F0]">
                  <span className="bg-[#2B3A55] text-[#D4AB3F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#D4AB3F]/30">
                    GPSC Class 1 &amp; 2
                  </span>
                  <span className="text-xs font-bold text-[#2B3A55] flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#B89E58]/30">
                    <span className="material-symbols-outlined text-[#D4AB3F] text-sm">verified</span>
                    <span>863+ Officers Selected</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] group-hover:text-[#D4AB3F] transition-colors">
                    Class 2 Civil Engineering Study Material
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566277] mt-2 leading-relaxed">
                    Exclusively curated for GPSC Assistant Engineer (Civil), Executive Engineer (EE), and Gujarat Engineering Services (GES) aspirants across Roads &amp; Buildings, Narmada &amp; GWSSB.
                  </p>
                </div>

                <div className="bg-[#FAF7F0] p-4 sm:p-5 rounded-xl border border-[#B89E58]/25 space-y-3">
                  <span className="text-xs font-bold uppercase text-[#2B3A55] tracking-wider block">Included Inside This Google Drive:</span>
                  <ul className="space-y-2 text-xs text-[#2B3A55]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>Technical Subject Notes:</strong> SOM, RCC, Soil Mechanics, Fluid Dynamics, Hydrology, Environmental &amp; CPM.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>Mains Conventional Answer Frameworks:</strong> Model answer sheets for GPSC Class 1 &amp; 2 standard ledger formats.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>10-Year Solved Papers:</strong> Advt. 71/2020-21, 19/2022-23, 06/2022-23, and 58/2022-23 past papers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>Interview Preparation Kit:</strong> Technical interview transcripts and panel guidelines.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#B89E58]/30 space-y-2">
                <a
                  href="https://drive.google.com/drive/folders/1uH5js-rnb3-Gvw8dIrDi2ITNONJdrFow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#2B3A55] hover:bg-[#1E2A40] text-white py-4 px-6 rounded-xl font-bold text-sm shadow-md transition-all border border-[#2B3A55] group-hover:border-[#D4AB3F]"
                >
                  <span className="material-symbols-outlined text-xl text-[#D4AB3F]">cloud_download</span>
                  <span>Open Class 2 Google Drive Folder</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <span className="text-[11px] text-[#566277] block text-center">
                  Official Google Drive link maintained by Shubh Academy mentors
                </span>
              </div>
            </div>

            {/* Card 2: Class 3 Material */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#B89E58]/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#2B3A55]/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#FAF7F0]">
                  <span className="bg-[#D4AB3F] text-[#1E1C12] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#B89E58]/40">
                    GSSSB • GPSSB • 1600+ Work Assistant
                  </span>
                  <span className="text-xs font-bold text-[#2B3A55] flex items-center gap-1.5 bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#B89E58]/30">
                    <span className="material-symbols-outlined text-[#D4AB3F] text-sm">verified</span>
                    <span>3,266+ Officers Selected</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] group-hover:text-[#D4AB3F] transition-colors">
                    Class 3 Civil Engineering Study Material
                  </h3>
                  <p className="text-xs sm:text-sm text-[#566277] mt-2 leading-relaxed">
                    Designed specifically for GSSSB Additional Assistant Engineer (AAE), GPSSB Junior Engineer (JE), and 1,600+ Work Assistant candidates.
                  </p>
                </div>

                <div className="bg-[#FAF7F0] p-4 sm:p-5 rounded-xl border border-[#B89E58]/25 space-y-3">
                  <span className="text-xs font-bold uppercase text-[#2B3A55] tracking-wider block">Included Inside This Google Drive:</span>
                  <ul className="space-y-2 text-xs text-[#2B3A55]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>Technical Subject Notes:</strong> Concrete Technology, Building Construction, Surveying, Highway &amp; Irrigation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>Non-Technical Modules:</strong> Gujarati Grammar, Reasoning, Mathematics, and General Studies modules.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>CBRT Test Practice Sets:</strong> Full-length computer-based test simulation questions with answer keys.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#D4AB3F] text-base shrink-0 mt-0.5">check_circle</span>
                      <span><strong>Work Assistant Packets:</strong> 1600+ Work Assistant exam focused field calculations and estimation.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#B89E58]/30 space-y-2">
                <a
                  href="https://drive.google.com/drive/folders/1Z6A4rF2wrd3ze8yy9EakwZMwy989e65f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D4AB3F] hover:bg-[#D4AB3F]/90 text-[#1E1C12] py-4 px-6 rounded-xl font-bold text-sm shadow-md transition-all border border-[#D4AB3F]"
                >
                  <span className="material-symbols-outlined text-xl text-[#1E1C12]">cloud_download</span>
                  <span>Open Class 3 Google Drive Folder</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
                <span className="text-[11px] text-[#566277] block text-center">
                  Official Google Drive link maintained by Shubh Academy mentors
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Instant PDF Download Cards */}
      <section className="py-14 sm:py-16 bg-[#FAF7F0] border-t border-[#B89E58]/30 w-full" id="direct-downloads">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#D4AB3F] tracking-wider block">Instant Downloads</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">
                Official Syllabi &amp; 10-Year Solved Papers
              </h2>
              <p className="text-xs sm:text-sm text-[#566277] max-w-xl mt-1">
                Direct verified downloads released by Gujarat Public Service Commission and State Selection Boards.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 bg-[#EEE7D2] p-1 rounded-xl border border-[#B89E58]/30 self-start md:self-auto">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'all' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                All Files
              </button>
              <button
                onClick={() => setActiveCategory('class2')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'class2' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                Class 1 &amp; 2
              </button>
              <button
                onClick={() => setActiveCategory('class3')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'class3' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                Class 3
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredDownloads.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#EEE7D2] flex items-center justify-center shrink-0 text-[#2B3A55]">
                    <span className="material-symbols-outlined text-[26px]">
                      {item.filename.endsWith('.zip') ? 'folder_zip' : 'picture_as_pdf'}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider inline-block ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <h4 className="text-sm font-bold text-[#2B3A55] leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-[#566277] leading-relaxed">{item.desc}</p>
                    <span className="text-[11px] font-semibold text-[#B89E58] block pt-1">{item.meta}</span>
                  </div>
                </div>

                <button
                  onClick={() => onTriggerDownload && onTriggerDownload(item.filename)}
                  className="shrink-0 w-10 h-10 bg-[#FAF7F0] hover:bg-[#2B3A55] hover:text-white text-[#2B3A55] rounded-xl flex items-center justify-center transition-colors shadow-sm"
                  title="Download File"
                  aria-label={`Download ${item.title}`}
                >
                  <span className="material-symbols-outlined text-[22px]">download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Support Footer Callout */}
      <section className="w-full py-12 px-4 sm:px-8 bg-white border-t border-[#B89E58]/30">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#2B3A55] to-[#1E2A40] text-white p-6 sm:p-8 rounded-2xl border border-[#D4AB3F]/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase font-bold text-[#D4AB3F] tracking-wider block">Have Questions Regarding Syllabus or Preparation?</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Connect With Gandhinagar Center Faculty
            </h3>
            <p className="text-xs sm:text-sm text-[#d8e1f0] max-w-xl">
              Get personalized clarity regarding test series, batch timings, and textbook recommendations from our senior faculties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenMentor && (
              <button
                onClick={onOpenMentor}
                className="bg-[#D4AB3F] text-[#1E1C12] font-bold px-5 py-3 rounded-xl text-xs sm:text-sm hover:bg-[#D4AB3F]/90 transition-all shadow-md flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">support_agent</span>
                <span>Talk to Mentor</span>
              </button>
            )}
            <Link
              href="/batches"
              className="bg-white/10 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Explore Running Batches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

