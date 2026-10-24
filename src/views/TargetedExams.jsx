'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TargetedExams({ onTriggerDownload }) {
  const [selectedDiscipline, setSelectedDiscipline] = useState('all');

  const syllabusData = [
    {
      discipline: "Strength of Materials & Structural Analysis",
      subtopics: "SFD/BMD, Deflections, Trusses, Matrix Methods",
      gpsc: "18% - 22% (40-50M)",
      gsssb: "14% (20-22M)",
      gpssb: "10% (10M)",
      status: "Ultra Critical",
      statusClass: "bg-[#D4AB3F] text-[#1E1C12]",
      category: "core"
    },
    {
      discipline: "Soil Mechanics & Geotechnical Engineering",
      subtopics: "Bearing Capacity, Consolidation, Shear Strength, Deep Foundations",
      gpsc: "16% - 18% (35-40M)",
      gsssb: "12% (18-20M)",
      gpssb: "12% (12M)",
      status: "Ultra Critical",
      statusClass: "bg-[#D4AB3F] text-[#1E1C12]",
      category: "core"
    },
    {
      discipline: "Fluid Mechanics & Water Resource Engineering",
      subtopics: "Canal Design, Narmada Hydrology, Open Channel Flow, Ogee Spillways",
      gpsc: "15% - 17% (35M)",
      gsssb: "16% (24M)",
      gpssb: "15% (15M)",
      status: "Gujarat Core",
      statusClass: "bg-[#2B3A55] text-white",
      category: "water"
    },
    {
      discipline: "RCC, Prestressed Concrete & Steel Structures",
      subtopics: "IS 456-2000, IS 800-2007, Limit State, Plate Girders, Columns",
      gpsc: "16% - 18% (38M)",
      gsssb: "15% (22-25M)",
      gpssb: "14% (14M)",
      status: "Ultra Critical",
      statusClass: "bg-[#D4AB3F] text-[#1E1C12]",
      category: "core"
    },
    {
      discipline: "Surveying, GPS, GIS & Levelling",
      subtopics: "Compass, Theodolite, Tacheometry, Contouring, Total Station",
      gpsc: "6% - 8% (15M)",
      gsssb: "15% (22M)",
      gpssb: "18% (18M)",
      status: "High GSSSB/GPSSB",
      statusClass: "bg-[#EEE7D2] text-[#2B3A55] border border-[#B89E58]/40",
      category: "field"
    },
    {
      discipline: "Estimation, Costing, Valuation & Specifications",
      subtopics: "Gujarat SOR rates, Earthwork calculations, Tender formats, Rate analysis",
      gpsc: "5% - 7% (12M)",
      gsssb: "14% (20M)",
      gpssb: "16% (16M)",
      status: "High Field Utility",
      statusClass: "bg-[#EEE7D2] text-[#2B3A55] border border-[#B89E58]/40",
      category: "field"
    },
    {
      discipline: "Highway, Railway & Airport Engineering",
      subtopics: "IRC Standards, Geometric Design, Pavement Analysis, California Bearing",
      gpsc: "10% - 12% (25M)",
      gsssb: "8% (12M)",
      gpssb: "8% (8M)",
      status: "Medium",
      statusClass: "bg-[#FAF7F0] text-[#2B3A55] border border-[#B89E58]/30",
      category: "transport"
    },
    {
      discipline: "Building Materials & Construction Technology",
      subtopics: "Cement tests, Fly ash concrete, Bricks, Timber, Gujarat Geo-polymers",
      gpsc: "6% - 8% (15M)",
      gsssb: "10% (15M)",
      gpssb: "12% (12M)",
      status: "Standard",
      statusClass: "bg-[#FAF7F0] text-[#2B3A55] border border-[#B89E58]/30",
      category: "materials"
    }
  ];

  const filteredSyllabus = selectedDiscipline === 'all' 
    ? syllabusData 
    : syllabusData.filter(item => item.category === selectedDiscipline);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Blueprint CAD Grid */}
      <section className="relative w-full bg-[#FAF7F0] pt-10 sm:pt-14 pb-14 sm:pb-16 overflow-hidden border-b border-[#B89E58]/30">
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="48" id="cad-grid-react" patternunits="userSpaceOnUse" width="48">
                <path className="text-[#B89E58]" d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.75"></path>
                <circle className="text-[#2B3A55]" cx="24" cy="24" fill="currentColor" r="1.5"></circle>
              </pattern>
            </defs>
            <rect fill="url(#cad-grid-react)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero Text Block */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-[#EEE7D2] text-[#2B3A55] font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full uppercase tracking-wider border border-[#B89E58]/40 shadow-xs max-w-full">
                <img src="/sea-logo-badge.jpg" alt="SEA" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-[#D4AB3F] shrink-0" />
                <span className="truncate">Shubh Engineering Academy • Inspire . Learn . Achieve</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] tracking-tight font-extrabold leading-tight">
                Gateway to Gujarat Engineering Services &amp; Technical Cadres
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#566277] max-w-2xl leading-relaxed">
                Precision tactical coaching for Gujarat's most elite civil administrative appointments. We bridge structural analysis, fluid mechanics, soil dynamics, and state development codes directly with GPSC, GSSSB, and GPSSB marking schemes.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 pt-2">
                <a
                  href="#exam-cards"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-xl bg-[#2B3A55] text-white text-xs sm:text-sm font-bold hover:bg-[#1E2A40] transition-all shadow-md border border-[#D4AB3F]/40 whitespace-nowrap"
                >
                  <span>Explore Targeted Cadres</span>
                </a>
                <a
                  href="#matrix-roadmap"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white text-[#2B3A55] text-xs sm:text-sm font-bold hover:bg-[#FAF7F0] transition-all border border-[#B89E58]/30 shadow-xs whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-base text-[#B89E58]">table_chart</span>
                  <span>Weightage Matrix</span>
                </a>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#EEE7D2]/80 border border-[#B89E58]/30 text-xs font-bold text-[#2B3A55] whitespace-nowrap shadow-xs">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-base">verified</span>
                  <span>2025–26 Syllabus Mapped</span>
                </div>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg border border-[#B89E58]/30 space-y-4 sm:space-y-5 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#B89E58]/20">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#D4AB3F]"></span>
                    <span className="text-xs uppercase font-bold text-[#2B3A55]">State Merit Ratio 2024</span>
                  </div>
                  <span className="font-mono text-[11px] text-[#566277]">CADRE-ACC/REF-09</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-[#F6F0DF] p-4 rounded-lg border border-[#B89E58]/30">
                  <div className="relative flex items-center justify-center mx-auto sm:mx-0">
                    <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-[#E4DCC4]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.8"></path>
                      <path className="text-[#2B3A55]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="68, 100" strokeLinecap="round" strokeWidth="3.8"></path>
                      <path className="text-[#D4AB3F]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="24, 100" strokeDashoffset="-68" strokeLinecap="round" strokeWidth="3.8"></path>
                    </svg>
                    <div className="absolute text-center">
                      <span className="text-2xl font-extrabold text-[#2B3A55] block leading-none">68%</span>
                      <span className="text-[10px] text-[#566277] font-bold uppercase">Cadre Merit</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[#566277] flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded bg-[#2B3A55]"></span> GPSC EE/AE
                      </span>
                      <span className="font-bold text-[#2B3A55] font-mono">148 Ranks</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#566277] flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded bg-[#D4AB3F]"></span> GSSSB AAE
                      </span>
                      <span className="font-bold text-[#2B3A55] font-mono">312 Seats</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#566277] flex items-center gap-1.5 font-medium">
                        <span className="w-2 h-2 rounded bg-[#B89E58]"></span> GPSSB JE
                      </span>
                      <span className="font-bold text-[#2B3A55] font-mono">194 Seats</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#2B3A55] text-white p-3.5 rounded-lg flex items-center justify-between border border-[#B89E58]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-[#D4AB3F] shrink-0">
                      <img src="/sea-logo-badge.jpg" alt="SEA Badge" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs text-[#D4AB3F] uppercase font-bold">Shubh Engineering Academy</p>
                      <p className="text-[11px] sm:text-xs text-[#FAF7F0] mt-0.5">Inspire • Learn • Achieve • Gujarat Civil Hub</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[24px] text-[#D4AB3F] hidden sm:block">verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gujarat Technical Wings Directory */}
      <section className="w-full py-16 bg-[#F6F0DF]" id="exam-cards">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
            <div>
              <span className="text-xs text-[#D4AB3F] uppercase font-bold tracking-widest block">Cadre Specialization</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Gujarat Technical Wings Directory</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#566277] max-w-md">
              Structured pedagogical paths aligned with Gujarat Civil Service Examination Rules and Gujarat Subordinate Services Selection Board mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: GPSC */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-[#B89E58]/30">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2B3A55]"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#FAF7F0] text-[#2B3A55] text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-[#B89E58]/30">
                    Class 1 &amp; Class 2 Gazetted
                  </span>
                  <span className="font-mono text-xs text-[#D4AB3F] font-bold">GES Cadre</span>
                </div>

                <div className="relative h-44 rounded-lg overflow-hidden bg-[#FAF7F0]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Gujarat Narmada Canal Project"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGdnBvOYhg8t3wWf0aaqigUP15gikmNgLmW5Yu2-1h_tkYldtNsh-8i7R2ToX11uhmMmryKLp0A7jqNG1T-kErNMJXPv8q5y6KTPBVM3R1WX7hapX7hkC9O31BtIwbaHmJUb3_ug6ENjbLJ4gWsj1xTEGN4CIOqrFN0q9y9MACrvnqebH69aeEQXzQW7k9QPiBfYNDfxr-mxFvkEQcPaSAkKIdPsjd6rYY8RVUEVo9lGS0zPXPApY1GA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B3A55]/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-bold">R&amp;B, Narmada, GWSSB Departments</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2B3A55]">GPSC Executive &amp; Assistant Engineer</h3>
                  <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                    Apex technical bureaucracy commanding state highway infrastructure, multi-reservoir canals, dam monitoring, and mega-urban water networks.
                  </p>
                </div>

                <div className="bg-[#FAF7F0] p-3.5 rounded-lg space-y-2 text-xs border border-[#B89E58]/20">
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Prelims Exam</span>
                    <span className="font-bold text-[#2B3A55]">300 Marks (GS + Core Civil)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Mains Written</span>
                    <span className="font-bold text-[#2B3A55]">5 Descriptive Technical Papers</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Interview Viva</span>
                    <span className="font-bold text-[#2B3A55]">100 Marks (Board Interview)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Eligibility</span>
                    <span className="font-bold text-[#B89E58]">B.E. / B.Tech Civil</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                  <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#B89E58]/30">
                    <span className="text-[10px] text-[#566277] block uppercase font-bold">Recent Cutoff (Gen)</span>
                    <span className="text-base sm:text-lg font-bold text-[#2B3A55] font-mono">182.50</span>
                  </div>
                  <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#B89E58]/30">
                    <span className="text-[10px] text-[#566277] block uppercase font-bold">Target Calendar</span>
                    <span className="text-base sm:text-lg font-bold text-[#D4AB3F] font-mono">Advt 45/2025</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#B89E58]/20">
                <button
                  onClick={() => onTriggerDownload('GPSC-Class-1-2-Official-Syllabus.pdf')}
                  className="w-full bg-[#2B3A55] text-white py-2.5 rounded-lg text-xs font-bold hover:bg-[#1E2A40] transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>GPSC Detailed Syllabus</span>
                </button>
              </div>
            </div>

            {/* Card 2: GSSSB AAE */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-[#B89E58]/30">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D4AB3F]"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#D4AB3F]/20 text-[#1E1C12] text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-[#D4AB3F]/40">
                    Subordinate Executive
                  </span>
                  <span className="font-mono text-xs text-[#D4AB3F] font-bold">CBRT Mode</span>
                </div>

                <div className="relative h-44 rounded-lg overflow-hidden bg-[#FAF7F0]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Civil Engineering Bridge Construction"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHdoHJYiFyZqMh0DKKY2OksNC0z3GIN4aFzeBdIdwKzjOil1CKUmvUWUSaUHtKaCebEEQYYn6M3Fo6f3dzhoDwAw4wesuzyqIPkSNADBYvJ_LhfPYjpVrCLZDavWl8i-wwSVF_F8Ewl3XkOHUn6A1EOkQ_cqOd4T3RVWfOJXbVXsyOhPoKjoQtpoxSCQ7NcWZ_2YKrr9jmzkHpOTA4WZ0KsX-J3sO0cOWPXhShVxiT0No-PpiiFfHoKw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B3A55]/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-bold">AAE Civil &amp; Town Planning Assistant</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2B3A55]">GSSSB Additional Assistant Engineer</h3>
                  <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                    Subordinate technical executioners responsible for site inspections, bill verification, quality laboratory testing, and field tender supervision.
                  </p>
                </div>

                <div className="bg-[#FAF7F0] p-3.5 rounded-lg space-y-2 text-xs border border-[#B89E58]/20">
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Exam Format</span>
                    <span className="font-bold text-[#2B3A55]">CBRT (Computer Based Test)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Technical Civil</span>
                    <span className="font-bold text-[#2B3A55]">150 Marks (SOM, RCC, Survey)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Gujarati &amp; GS</span>
                    <span className="font-bold text-[#2B3A55]">60 Marks (Lang + Current)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Eligibility</span>
                    <span className="font-bold text-[#B89E58]">Diploma &amp; Degree Civil</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                  <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#B89E58]/30">
                    <span className="text-[10px] text-[#566277] block uppercase font-bold">Recent Cutoff (Gen)</span>
                    <span className="text-base sm:text-lg font-bold text-[#2B3A55] font-mono">134.25</span>
                  </div>
                  <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#B89E58]/30">
                    <span className="text-[10px] text-[#566277] block uppercase font-bold">Total Expected</span>
                    <span className="text-base sm:text-lg font-bold text-[#D4AB3F] font-mono">580+ Seats</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#B89E58]/20">
                <button
                  onClick={() => onTriggerDownload('GSSSB-AAE-Civil-Syllabus.pdf')}
                  className="w-full bg-[#D4AB3F] text-[#1E1C12] py-2.5 rounded-lg text-xs font-bold hover:bg-[#D4AB3F]/90 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>GSSSB AAE Exam Pattern</span>
                </button>
              </div>
            </div>

            {/* Card 3: GPSSB Junior Engineer */}
            <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group border border-[#B89E58]/30">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#B89E58]"></div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#FAF7F0] text-[#2B3A55] text-[11px] font-bold px-2.5 py-1 rounded uppercase tracking-wider border border-[#B89E58]/30">
                    Panchayat Cadre
                  </span>
                  <span className="font-mono text-xs text-[#D4AB3F] font-bold">OMR Based</span>
                </div>

                <div className="relative h-44 rounded-lg overflow-hidden bg-[#FAF7F0]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt="Rural Infrastructure Gujarat Blueprint"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmdM0LCI96rYUUE7mna-7OBio3yvDGq1KD3knCpH4dYdEYsUPEBXIcD2Viiqea-6wuH8mIFSVgiNaya0vyhRmKsO8tsQ_KU6CyDk2s4Z98ZuQvTCOyuMGgfk3eC6jeGTJw6mCVu3pLHbMLwM974lfdDFLd7Xj_V_4angNv715BAkLTXgQlXovRHoBjtckpo_pX-l7eYG8n63NWUxJ8Y09ykPvSk5rh9w92B9l6ff5B12K4JHHKV8X2FA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B3A55]/85 via-transparent to-transparent flex items-end p-3">
                    <span className="text-white text-xs font-bold">District Panchayat Engineering Wing</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#2B3A55]">GPSSB Junior Engineer (Civil)</h3>
                  <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                    Spearheading block and taluka-level infrastructure, rural road connectivity (MMGSY), minor checkdams, and panchayat bhavan construction.
                  </p>
                </div>

                <div className="bg-[#FAF7F0] p-3.5 rounded-lg space-y-2 text-xs border border-[#B89E58]/20">
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Technical Civil</span>
                    <span className="font-bold text-[#2B3A55]">100 Marks (Civil Diploma Core)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">Gujarati Grammar</span>
                    <span className="font-bold text-[#2B3A55]">35 Marks (Vyakaran &amp; Sahitya)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">General Aptitude</span>
                    <span className="font-bold text-[#2B3A55]">15 Marks (Reasoning &amp; Maths)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#566277] font-medium">District Coverage</span>
                    <span className="font-bold text-[#B89E58]">33 District Panchayats</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                  <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#B89E58]/30">
                    <span className="text-[10px] text-[#566277] block uppercase font-bold">Recent Cutoff (Gen)</span>
                    <span className="text-base sm:text-lg font-bold text-[#2B3A55] font-mono">109.80</span>
                  </div>
                  <div className="bg-[#FAF7F0] p-2.5 rounded-lg border border-[#B89E58]/30">
                    <span className="text-[10px] text-[#566277] block uppercase font-bold">Negative Marking</span>
                    <span className="text-base sm:text-lg font-bold text-red-600 font-mono">-0.33 Mark</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#B89E58]/20">
                <button
                  onClick={() => onTriggerDownload('GPSSB-JE-Syllabus-Scheme.pdf')}
                  className="w-full bg-[#2B3A55] text-white py-2.5 rounded-lg text-xs font-bold hover:bg-[#1E2A40] transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  <span>GPSSB JE Syllabus Packet</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Shubh Engineering Academy */}
      <section className="w-full bg-white py-12 px-4 sm:px-8 border-t border-[#B89E58]/30">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#D4AB3F] tracking-wider">Academic Methodology</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">
                4-Pillar Preparation System
              </h2>
            </div>
            <div className="text-xs text-[#566277] flex flex-wrap items-center gap-3">
              <span>The Landmark, Kudasan, Gandhinagar</span>
              <a href="tel:+919737309991" className="font-bold text-[#2B3A55] hover:text-[#D4AB3F] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#D4AB3F]">call</span>
                <span>+91 97373 09991</span>
              </a>
              <a
                href="https://www.instagram.com/shubh.engineering/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#2B3A55] hover:text-[#D4AB3F] flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm text-[#D4AB3F]">photo_camera</span>
                <span>@shubh.engineering</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#2B3A55] text-[#D4AB3F] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">menu_book</span>
              </div>
              <h3 className="text-base font-bold text-[#2B3A55]">Conceptual Classes</h3>
              <p className="text-xs text-[#566277] leading-relaxed">
                In-depth civil fundamentals: SOM, RCC, Geotech, Surveying, and Environmental Engg taught from first principles.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#2B3A55] text-[#D4AB3F] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">fact_check</span>
              </div>
              <h3 className="text-base font-bold text-[#2B3A55]">Mock Test Series</h3>
              <p className="text-xs text-[#566277] leading-relaxed">
                Full-length simulated tests matching GPSC Prelims &amp; GSSSB CBRT patterns with negative marking mitigation.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#2B3A55] text-[#D4AB3F] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">record_voice_over</span>
              </div>
              <h3 className="text-base font-bold text-[#2B3A55]">Interview Guidance</h3>
              <p className="text-xs text-[#566277] leading-relaxed">
                Specialized personality test preparation, DAF review, and mock interview panels for GPSC Class 1 &amp; 2 candidates.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#2B3A55] text-[#D4AB3F] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <h3 className="text-base font-bold text-[#2B3A55]">Marathon Revisions</h3>
              <p className="text-xs text-[#566277] leading-relaxed">
                High-yield formula marathons and IS-Code revision bootcamps right before state competitive examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Weightage Matrix */}
      <section className="w-full py-16 bg-[#FAF7F0] border-y border-[#B89E58]/30" id="matrix-roadmap">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-[#D4AB3F] uppercase font-bold tracking-widest block">Structural Breakdown</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Syllabus Comparative Weightage Matrix</h2>
            </div>
            
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-lg border border-[#B89E58]/30 text-xs">
              <button
                onClick={() => setSelectedDiscipline('all')}
                className={`px-3 py-1.5 rounded font-bold transition-all ${selectedDiscipline === 'all' ? 'bg-[#2B3A55] text-white' : 'text-[#566277] hover:text-[#2B3A55]'}`}
              >
                All (8)
              </button>
              <button
                onClick={() => setSelectedDiscipline('core')}
                className={`px-3 py-1.5 rounded font-bold transition-all ${selectedDiscipline === 'core' ? 'bg-[#2B3A55] text-white' : 'text-[#566277] hover:text-[#2B3A55]'}`}
              >
                Structures &amp; Soil
              </button>
              <button
                onClick={() => setSelectedDiscipline('water')}
                className={`px-3 py-1.5 rounded font-bold transition-all ${selectedDiscipline === 'water' ? 'bg-[#2B3A55] text-white' : 'text-[#566277] hover:text-[#2B3A55]'}`}
              >
                Water Resources
              </button>
              <button
                onClick={() => setSelectedDiscipline('field')}
                className={`px-3 py-1.5 rounded font-bold transition-all ${selectedDiscipline === 'field' ? 'bg-[#2B3A55] text-white' : 'text-[#566277] hover:text-[#2B3A55]'}`}
              >
                Survey &amp; Estimation
              </button>
            </div>
          </div>

          <p className="text-xs text-[#566277] md:hidden flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#D4AB3F]">swipe</span>
            <span>Swipe table left/right to view all cadre scores</span>
          </p>

          <div className="w-full bg-white rounded-xl shadow-md overflow-hidden border border-[#B89E58]/30">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[650px]">
                <thead className="bg-[#2B3A55] text-white text-xs uppercase tracking-wider font-bold">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 sticky left-0 bg-[#2B3A55] z-10 shadow-[2px_0_5px_rgba(0,0,0,0.15)]">Technical Civil Discipline</th>
                    <th className="py-4 px-3 sm:px-4 text-center">GPSC Class 1 &amp; 2 (Prelims/Mains)</th>
                    <th className="py-4 px-3 sm:px-4 text-center">GSSSB AAE Civil (150M)</th>
                    <th className="py-4 px-3 sm:px-4 text-center">GPSSB JE (100M)</th>
                    <th className="py-4 px-3 sm:px-4 text-center">Priority Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B89E58]/20">
                  {filteredSyllabus.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-[#FAF7F0] transition-colors' : 'bg-[#FAF7F0] hover:bg-[#EEE7D2]/60 transition-colors'}>
                      <td className={`py-4 px-4 sm:px-6 font-bold text-[#2B3A55] sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.06)] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F0]'}`}>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#B89E58] text-[18px]">straighten</span>
                          <span>{row.discipline}</span>
                        </div>
                        <span className="text-[11px] text-[#566277] block pl-6 font-normal mt-0.5">{row.subtopics}</span>
                      </td>
                      <td className="py-4 px-3 sm:px-4 text-center font-mono font-bold text-[#2B3A55]">{row.gpsc}</td>
                      <td className="py-4 px-3 sm:px-4 text-center font-mono font-bold text-[#2B3A55]">{row.gsssb}</td>
                      <td className="py-4 px-3 sm:px-4 text-center font-mono font-bold text-[#2B3A55]">{row.gpssb}</td>
                      <td className="py-4 px-3 sm:px-4 text-center">
                        <span className={`px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] uppercase font-bold inline-block ${row.statusClass}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Official Syllabi & PYQ Repository */}
      <section className="w-full py-16 bg-[#F6F0DF]" id="syllabus-downloads">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs text-[#D4AB3F] uppercase font-bold tracking-widest block">Aspirant Repository</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Official Syllabi &amp; 10-Year Solved PYQs</h2>
            </div>
            <p className="text-xs sm:text-sm text-[#566277] max-w-md">
              Direct verified PDF archives including provisional and final answer keys released by Gujarat Public Service Commission &amp; Selection Boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Item 1 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EEE7D2] flex items-center justify-center shrink-0 text-[#2B3A55]">
                  <span className="material-symbols-outlined text-[24px]">picture_as_pdf</span>
                </div>
                <div>
                  <span className="text-[10px] bg-[#FAF7F0] text-[#2B3A55] px-2 py-0.5 rounded font-bold uppercase border border-[#B89E58]/30">GPSC Official</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">Class 1 &amp; 2 Full Syllabus PDF</h4>
                  <p className="text-[11px] text-[#566277] mt-0.5">Includes Prelims 300M + Mains 5 Papers technical curriculum breakdown.</p>
                  <span className="text-[11px] font-mono text-[#566277] mt-1.5 block">PDF • 4.2 MB • Updated 2025</span>
                </div>
              </div>
              <button
                onClick={() => onTriggerDownload('GPSC-Class-1-2-Official-Syllabus.pdf')}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#FAF7F0] hover:bg-[#2B3A55] hover:text-white text-[#2B3A55] rounded-lg flex items-center justify-center transition-colors shadow-sm"
                title="Download Syllabus"
                aria-label="Download GPSC Syllabus"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EEE7D2] flex items-center justify-center shrink-0 text-[#2B3A55]">
                  <span className="material-symbols-outlined text-[24px]">picture_as_pdf</span>
                </div>
                <div>
                  <span className="text-[10px] bg-[#D4AB3F]/20 text-[#1E1C12] px-2 py-0.5 rounded font-bold uppercase border border-[#D4AB3F]/40">GSSSB Official</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">GSSSB AAE Civil Syllabus</h4>
                  <p className="text-[11px] text-[#566277] mt-0.5">Revised CBRT exam schema, Gujarati language syllabus and civil topics.</p>
                  <span className="text-[11px] font-mono text-[#566277] mt-1.5 block">PDF • 2.8 MB • Gazette 2024</span>
                </div>
              </div>
              <button
                onClick={() => onTriggerDownload('GSSSB-AAE-Civil-Syllabus.pdf')}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#FAF7F0] hover:bg-[#D4AB3F] hover:text-[#1E1C12] text-[#2B3A55] rounded-lg flex items-center justify-center transition-colors shadow-sm"
                title="Download Syllabus"
                aria-label="Download GSSSB Syllabus"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EEE7D2] flex items-center justify-center shrink-0 text-[#2B3A55]">
                  <span className="material-symbols-outlined text-[24px]">picture_as_pdf</span>
                </div>
                <div>
                  <span className="text-[10px] bg-[#FAF7F0] text-[#2B3A55] px-2 py-0.5 rounded font-bold uppercase border border-[#B89E58]/30">GPSSB Panchayat</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">GPSSB JE Civil Pattern &amp; Code</h4>
                  <p className="text-[11px] text-[#566277] mt-0.5">100M Technical + 50M General section rubric with negative mark rules.</p>
                  <span className="text-[11px] font-mono text-[#566277] mt-1.5 block">PDF • 1.9 MB • Revised</span>
                </div>
              </div>
              <button
                onClick={() => onTriggerDownload('GPSSB-JE-Syllabus-Scheme.pdf')}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#FAF7F0] hover:bg-[#2B3A55] hover:text-white text-[#2B3A55] rounded-lg flex items-center justify-center transition-colors shadow-sm"
                title="Download Syllabus"
                aria-label="Download GPSSB Syllabus"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>

            {/* Item 4 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E4DCC4] flex items-center justify-center shrink-0 text-[#B89E58]">
                  <span className="material-symbols-outlined text-[24px]">folder_zip</span>
                </div>
                <div>
                  <span className="text-[10px] bg-[#FAF7F0] text-[#2B3A55] px-2 py-0.5 rounded font-bold uppercase border border-[#B89E58]/30">Solved PYQ Paper</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">GPSC AE/EE Papers (2018-2023)</h4>
                  <p className="text-[11px] text-[#566277] mt-0.5">Previous 6 sessions solved with detailed state engineering calculations.</p>
                  <span className="text-[11px] font-mono text-[#566277] mt-1.5 block">ZIP / PDF • 48 MB • 1,200 MCQs</span>
                </div>
              </div>
              <button
                onClick={() => onTriggerDownload('GPSC-AE-EE-Solved-PYQ-2018-2023.zip')}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#FAF7F0] hover:bg-[#2B3A55] hover:text-white text-[#2B3A55] rounded-lg flex items-center justify-center transition-colors shadow-sm"
                title="Download PYQs"
                aria-label="Download GPSC PYQs"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>

            {/* Item 5 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E4DCC4] flex items-center justify-center shrink-0 text-[#B89E58]">
                  <span className="material-symbols-outlined text-[24px]">folder_zip</span>
                </div>
                <div>
                  <span className="text-[10px] bg-[#D4AB3F]/20 text-[#1E1C12] px-2 py-0.5 rounded font-bold uppercase border border-[#D4AB3F]/40">Solved PYQ Paper</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">GSSSB AAE Civil 2017-2024 Papers</h4>
                  <p className="text-[11px] text-[#566277] mt-0.5">Includes all shift CBRT question papers with official provisional vs final keys.</p>
                  <span className="text-[11px] font-mono text-[#566277] mt-1.5 block">PDF • 32 MB • 8 Sets</span>
                </div>
              </div>
              <button
                onClick={() => onTriggerDownload('GSSSB-AAE-Civil-PYQ-Complete.zip')}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#FAF7F0] hover:bg-[#D4AB3F] hover:text-[#1E1C12] text-[#2B3A55] rounded-lg flex items-center justify-center transition-colors shadow-sm"
                title="Download PYQs"
                aria-label="Download GSSSB PYQs"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>

            {/* Item 6 */}
            <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 justify-between border border-[#B89E58]/30">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EEE7D2] flex items-center justify-center shrink-0 text-[#2B3A55]">
                  <span className="material-symbols-outlined text-[24px]">menu_book</span>
                </div>
                <div>
                  <span className="text-[10px] bg-[#D4AB3F]/20 text-[#1E1C12] px-2 py-0.5 rounded font-bold uppercase border border-[#D4AB3F]/40">Academy Special</span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">Gujarat Civil Formula Pocketbook</h4>
                  <p className="text-[11px] text-[#566277] mt-0.5">Over 650+ condensed IS code formulas, soil coefficients, and hydraulic tables.</p>
                  <span className="text-[11px] font-mono text-[#566277] mt-1.5 block">PDF • 14 MB • High Yield</span>
                </div>
              </div>
              <button
                onClick={() => onTriggerDownload('Gujarat-Civil-Engineering-Formula-Handbook.pdf')}
                className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#FAF7F0] hover:bg-[#2B3A55] hover:text-white text-[#2B3A55] rounded-lg flex items-center justify-center transition-colors shadow-sm"
                title="Download Pocketbook"
                aria-label="Download Formula Handbook"
              >
                <span className="material-symbols-outlined text-[20px]">download</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* End of Targeted Exams Content */}
    </div>
  );
}
