'use client';

import React, { useState } from 'react';

export default function Batches() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    qualification: '',
    batch: 'Foundation Batch 2026 (GPSC Class 1/2 Civil)',
    center: 'Gandhinagar Classroom (The Landmark, Kudasan)',
    targetYear: '2025-2026'
  });

  // The 3 official active batches currently running at the academy
  const batchesList = [
    {
      id: 'foundation-2026',
      type: 'gpsc',
      badge: 'Official Flagship',
      statusBadge: 'Admissions Open 2026',
      poster: '/batches/foundation-batch-2026.jpg',
      targetCadre: 'GPSC Class 1/2 – Civil Engineering',
      title: 'Foundation Batch 2026',
      taglineHighlight: 'BUILD THE FOUNDATION. CRACK THE COMPETITION.',
      description: 'Comprehensive foundation program for future civil engineering officers. Complete coverage from core basics to advanced design specifications for Gujarat Public Service Commission Class 1 & 2 examinations.',
      metrics: [
        { label: 'Mode', value: 'ONLINE + OFFLINE' },
        { label: 'Delivery', value: 'Hybrid Program' },
        { label: 'Cadre Target', value: 'GPSC Class 1 & 2' }
      ],
      features: [
        'GPSC Class 1/2 માટે Complete Foundation Program From Basics',
        'Online + Offline Hybrid Learning with Live Classroom & Recorded Archives',
        'Application Access with High-Quality Recorded Lectures until Exam Day',
        'Short, Precise & Exam-Oriented SEA Specialized Civil Study Materials',
        'Structured Study Plan & Regular 1-on-1 Academic Faculty Guidance',
        'Subject-Wise Diagnostic Tests & Full Combined Mock Test Series'
      ],
      inquiryNote: 'Inquire for Fees Amount • Concessions Available via Counseling',
      accentColor: 'bg-[#2B3A55]'
    },
    {
      id: 'saksham-batch',
      type: 'gsssb',
      badge: '1600+ Vacancies Special',
      statusBadge: 'Active Running Batch',
      poster: '/batches/saksham-batch.jpg',
      targetCadre: '1600+ Work Assistant New Vacancies',
      title: 'સક્ષમ Batch (Saksham Batch)',
      taglineHighlight: 'Dedicated Work Assistant Direct Selection Track',
      description: 'Specialized high-impact technical and non-technical classroom & digital batch tailored specifically for the 1600+ Work Assistant posts in Gujarat government engineering departments.',
      metrics: [
        { label: 'Vacancies', value: '1600+ Posts' },
        { label: 'Curriculum', value: 'Technical + Non-Tech' },
        { label: 'Practice', value: 'Subject + 3 Full Tests' }
      ],
      features: [
        'Technical Subjects Covered: SOM, SA, RCC, Steel, BM, BC, Bridge, Surveying, etc.',
        'Complete Non-Technical Module: General Studies (GS), Mathematics & Reasoning',
        'Continuous In-Lecture MCQ & Past Year Questions (PYQ) Solving Drills',
        'Regular Test Series: Subject-Wise Tests, Combined Tests & 3 Full Simulated Mocks',
        'Specialized shortcuts for formula recall, speed calculation & negative marking control',
        'Full digital archives and study material kits available until exam cycle'
      ],
      inquiryNote: 'Inquire for Fees Amount • Early Bird & Merit Concessions',
      accentColor: 'bg-[#D4AB3F]'
    },
    {
      id: 'interview-batch',
      type: 'gpsc',
      badge: '900++ Seats Special',
      statusBadge: 'Interview Sessions Active',
      poster: '/batches/interview-batch.jpg',
      targetCadre: 'GPSC Civil Engineering Class-2',
      title: 'Interview Batch',
      taglineHighlight: 'STOP THINKING // START PREPARING!',
      description: 'Comprehensive interview guidance and practical field training program designed to crack the GPSC Class-2 interview board. Features personalized mock interviews and exclusive on-site engineering field visits.',
      metrics: [
        { label: 'Vacancies', value: '900++ Class-2 Seats' },
        { label: 'Field Immersion', value: '6 Site Visits' },
        { label: 'Mock Panels', value: 'Online / Offline' }
      ],
      features: [
        '1 Comprehensive Mock Interview Included (Online or Offline with Panel Experts)',
        'In-Depth Subject-Wise Learning & Live Practical Problem Analysis',
        'Exclusive 6-Point Site Visit Program: Reservoir, WTP, Working Site & RMC Plant',
        'Personalized Interview Transcript Evaluation & Customized Answer Strategy Feedback',
        'Live Lectures from Serving State Gazetted Officers & Civil Engineering Experts',
        'Comprehensive E-Material Kit, Recorded Strategy Videos on SEA App & Discussion Group'
      ],
      inquiryNote: 'Inquire for Fees Amount • Panel Booking on Advance Registration',
      accentColor: 'bg-[#B89E58]'
    }
  ];

  const filteredBatches = activeFilter === 'all'
    ? batchesList
    : batchesList.filter(b => b.type === activeFilter);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleInquireBatch = (batchTitle) => {
    setFormData((prev) => ({ ...prev, batch: batchTitle }));
    const formEl = document.getElementById('admission-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Top Hero */}
      <section className="relative w-full bg-[#2B3A55] text-white py-12 sm:py-16 overflow-hidden border-b border-[#3b4c6d]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AB3F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AB3F]/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hero Description */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-[#D4AB3F] border border-[#D4AB3F]/30 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#D4AB3F] animate-pulse"></span>
                <span>Active Batches 2025–2026 • Enrolment &amp; Admissions Open</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
                Current Active Batches &amp; Programs <span className="text-[#D4AB3F]">2025–26</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#d8e1f0] max-w-2xl leading-relaxed">
                Engineered exclusively for Gujarat Civil Engineering Aspirants by <strong className="text-white">Shubh Engineering Academy</strong>. Conceptual civil engineering classes, full-length mock tests, site visits, and interview guidance at our Gandhinagar center.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#batches-catalog"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AB3F] text-[#1E1C12] font-bold px-6 py-3 rounded-lg text-xs sm:text-sm hover:bg-[#D4AB3F]/90 transition-all shadow-md text-center"
                >
                  <span>Explore 3 Active Batches</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <a
                  href="#admission-section"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-lg text-xs sm:text-sm transition-all backdrop-blur-sm text-center"
                >
                  <span className="material-symbols-outlined text-sm text-[#D4AB3F]">call</span>
                  <span>Inquire for Fees &amp; Admission</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-[#d8e1f0] text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-base">location_on</span>
                  <span>The Landmark, Kudasan Road</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-base">pin_drop</span>
                  <span>Opposite Spicy Street</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-base">podcasts</span>
                  <span>Live Stream &amp; Revisions</span>
                </div>
              </div>
            </div>

            {/* Capacity & Direct Helpline Card */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-white/10 border border-white/15 p-5 sm:p-6 rounded-xl backdrop-blur-md text-white shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider text-[#d8e1f0] font-semibold">Admission Desk Notice</span>
                  <span className="text-[#D4AB3F] font-bold">Seats Open</span>
                </div>
                <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D4AB3F] h-full rounded-full w-[85%]"></div>
                </div>
                <p className="text-xs text-[#d8e1f0] pt-1 leading-relaxed">
                  Fee structures are customized based on Offline Classroom or Live Hybrid App mode. Every student is required to call or inquire for fees amount and admission procedure.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="text-white font-semibold">Admissions Hotline:</span>
                  <a href="tel:+919737609991" className="text-[#D4AB3F] font-bold hover:underline">
                    +91 97376 09991
                  </a>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl backdrop-blur-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border border-[#D4AB3F] shrink-0">
                    <img src="/sea-logo-badge.jpg" alt="SEA Badge" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-white font-bold leading-tight">Shubh Engineering Academy</p>
                    <p className="text-[11px] text-[#D4AB3F] font-bold leading-tight mt-0.5 tracking-wider uppercase">Inspire • Learn • Achieve</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live Notice Ribbon */}
      <div className="bg-[#EEE7D2] border-b border-[#B89E58]/30 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#2B3A55] text-xs">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="bg-[#2B3A55] text-[#D4AB3F] px-2 py-0.5 rounded text-[10px] sm:text-[11px] uppercase font-bold tracking-wide border border-[#B89E58]/40 shrink-0">
              Notice
            </span>
            <span className="font-semibold">
              Currently running 3 specialized batches: Foundation Batch 2026, સક્ષમ Batch (1600+ Vacancies), and GPSC Class-2 Interview Batch.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919737609991" className="font-bold flex items-center gap-1.5 hover:text-[#D4AB3F] transition-colors">
              <span className="material-symbols-outlined text-[#D4AB3F] text-sm">phone</span>
              <span>Call: +91 97376 09991</span>
            </a>
            <a
              href="https://www.instagram.com/shubh.engineering/"
              target="_blank"
              rel="noreferrer"
              className="text-[#2B3A55] hover:text-[#D4AB3F] font-bold flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm text-[#D4AB3F]">photo_camera</span>
              <span>@shubh.engineering</span>
            </a>
          </div>
        </div>
      </div>

      {/* Batches Catalog Section */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8 w-full" id="batches-catalog">
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#B89E58]/30 pb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B89E58] mb-1">
                <span className="material-symbols-outlined text-base text-[#D4AB3F]">school</span>
                <span>Active Classroom &amp; Hybrid Cohorts</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55]">
                Three Active Batches at Shubh Engineering Academy
              </h2>
              <p className="text-xs sm:text-sm text-[#566277] mt-1 max-w-2xl">
                Select your targeted cadre exam below. Fees are determined based on training mode, material kit, and concessions. Inquire directly for fee amount and seat availability.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 sm:gap-1.5 bg-white p-1 rounded-xl border border-[#B89E58]/30 shadow-xs shrink-0 self-start md:self-auto no-scrollbar overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'all' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                All 3 Active Batches
              </button>
              <button
                onClick={() => setActiveFilter('gpsc')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'gpsc' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                GPSC Class 1 &amp; 2
              </button>
              <button
                onClick={() => setActiveFilter('gsssb')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'gsssb' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                Work Assistant / GSSSB
              </button>
            </div>
          </div>

          {/* Batches Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredBatches.map((batch) => (
              <div
                key={batch.id}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-[#B89E58]/40 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group h-full"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${batch.accentColor}`}></div>
                
                <div className="space-y-4 flex-1 flex flex-col">
                  {/* Badge & Target: strictly 1 row, fixed height so all 3 cards align perfectly */}
                  <div className="flex items-center justify-between gap-2 pt-1 h-7">
                    <span className="bg-[#FAF7F0] text-[#2B3A55] font-bold border border-[#B89E58]/30 px-2 py-0.5 rounded text-[10.5px] uppercase tracking-wider truncate">
                      {batch.badge}
                    </span>
                    <span className="text-[#D4AB3F] text-[10.5px] font-bold bg-[#2B3A55] px-2.5 py-0.5 rounded shadow-xs whitespace-nowrap shrink-0">
                      {batch.statusBadge}
                    </span>
                  </div>

                  {/* Poster Thumbnail Preview */}
                  <div className="relative rounded-xl overflow-hidden border border-[#B89E58]/30 bg-[#2B3A55] aspect-[4/3] group/poster shrink-0">
                    <img
                      src={batch.poster}
                      alt={batch.title}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/poster:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A40]/90 via-transparent to-transparent flex items-end justify-between p-3">
                      <span className="text-white text-[11px] font-bold truncate max-w-[65%]">
                        {batch.targetCadre}
                      </span>
                      <button
                        onClick={() => setSelectedPoster(batch.poster)}
                        className="inline-flex items-center gap-1 bg-[#D4AB3F] text-[#1E1C12] text-[10px] font-bold px-2.5 py-1 rounded shadow hover:bg-white transition-colors"
                      >
                        <span className="material-symbols-outlined text-[13px]">visibility</span>
                        <span>View Poster</span>
                      </button>
                    </div>
                  </div>

                  {/* Title & Tagline with standardized heights */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B3A55] leading-snug min-h-[3.25rem] flex items-center">
                      {batch.title}
                    </h3>
                    <p className="text-[11px] font-bold text-[#D4AB3F] uppercase tracking-wider mt-0.5 h-4 truncate">
                      {batch.taglineHighlight}
                    </p>
                    <p className="text-xs text-[#566277] mt-2 leading-relaxed min-h-[3.5rem] line-clamp-3">
                      {batch.description}
                    </p>
                  </div>

                  {/* Metrics Pills */}
                  <div className="grid grid-cols-3 gap-2 py-2 bg-[#FAF7F0] p-2.5 rounded-xl border border-[#B89E58]/25 text-center shrink-0">
                    {batch.metrics.map((m, idx) => (
                      <div key={idx} className="border-r last:border-r-0 border-[#B89E58]/20 px-1">
                        <p className="text-[10px] text-[#566277] uppercase font-semibold">{m.label}</p>
                        <p className="text-[11px] sm:text-xs font-bold text-[#2B3A55] mt-0.5 truncate">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-1 flex-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#B89E58] font-bold block">
                      Program Curriculum &amp; Offerings
                    </span>
                    <ul className="space-y-2 text-xs text-[#1E1C12]">
                      {batch.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[#D4AB3F] text-sm shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action & Inquire for Fees Section */}
                <div className="pt-4 mt-6 bg-[#FAF7F0] -mx-5 -mb-5 sm:-mx-7 sm:-mb-7 px-5 sm:px-7 py-4 rounded-b-2xl border-t border-[#B89E58]/30 shrink-0">
                  {/* Click Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                      onClick={() => handleInquireBatch(batch.title)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#2B3A55] text-white hover:bg-[#1E2A40] px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md border border-[#D4AB3F]/40"
                    >
                      <span className="material-symbols-outlined text-sm text-[#D4AB3F]">help_outline</span>
                      <span>Inquire for Fees</span>
                    </button>

                    <a
                      href={`https://wa.me/919737609991?text=${encodeURIComponent(`Hello Shubh Engineering Academy, I want to inquire about the fees amount and admission process for ${batch.title}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366] text-[#1E1C12] hover:text-white px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all border border-[#25D366]/40 shadow-xs"
                      title="Direct WhatsApp Fee Inquiry"
                    >
                      <span className="material-symbols-outlined text-sm text-[#25D366]">chat</span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre Entitlements Bento Grid */}
      <section className="w-full py-16 bg-[#FAF7F0] border-y border-[#B89E58]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#D4AB3F] font-bold">Standard Cadre Entitlements</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Everything Included in Your Enrollment</h2>
            <p className="text-xs sm:text-sm text-[#566277] mt-1">Every aspirant at Shubh Engineering Academy receives continuous institutional support until final service appointment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#B89E58]/30 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-[#EEE7D2] flex items-center justify-center text-[#2B3A55] border border-[#B89E58]/30">
                  <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">inventory_2</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Physical &amp; Digital Material</h3>
                <p className="text-xs text-[#566277] leading-relaxed">Hardbound theory booklets, 5000+ past questions compilation, and color-coded formula sheets for quick revision.</p>
              </div>
              <div className="pt-2 border-t border-[#B89E58]/20">
                <span className="text-xs text-[#B89E58] font-bold">Hardcopies Dispatched</span>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#B89E58]/30 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-[#EEE7D2] flex items-center justify-center text-[#2B3A55] border border-[#B89E58]/30">
                  <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">local_library</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">24/7 Technical Reading Bay</h3>
                <p className="text-xs text-[#566277] leading-relaxed">Air-conditioned study suites at The Landmark, Kudasan Center equipped with high-speed internet, ergonomic desks, and complete reference libraries.</p>
              </div>
              <div className="pt-2 border-t border-[#B89E58]/20">
                <span className="text-xs text-[#B89E58] font-bold">Biometric Keycard Access</span>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#B89E58]/30 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-[#EEE7D2] flex items-center justify-center text-[#2B3A55] border border-[#B89E58]/30">
                  <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">live_tv</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Full-Duplex Live App Stream</h3>
                <p className="text-xs text-[#566277] leading-relaxed">Missed a class? Watch live interactive broadcasts or unlimited 1080p recorded archives on our secure student app until exam day.</p>
              </div>
              <div className="pt-2 border-t border-[#B89E58]/20">
                <span className="text-xs text-[#B89E58] font-bold">iOS &amp; Android Apps</span>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#B89E58]/30 shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-lg bg-[#EEE7D2] flex items-center justify-center text-[#2B3A55] border border-[#B89E58]/30">
                  <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">psychology</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Officer Mock Interviews</h3>
                <p className="text-xs text-[#566277] leading-relaxed">Serving Superintending Engineers (SE) and Chief Engineers review your DAF, technical clarity, and administrative ethics in real mock boards.</p>
              </div>
              <div className="pt-2 border-t border-[#B89E58]/20">
                <span className="text-xs text-[#B89E58] font-bold">Personalized Video Feedback</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Admission & Counseling Desk */}
      <section className="w-full py-16 bg-[#FAF7F0] border-t border-[#B89E58]/30" id="admission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Batch Info */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#D4AB3F]/20 text-[#1E1C12] border border-[#D4AB3F]/40 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span>Direct Batch Admissions &amp; Counseling</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight">
                Inquire for Fee Amount &amp; Admission Process
              </h2>

              <p className="text-xs sm:text-sm text-[#566277] leading-relaxed">
                Fees for our batches are communicated directly during academic counseling based on your preferred learning format (Offline Classroom at Kudasan or Live Hybrid Mobile App) and eligible concessions.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="bg-white border border-[#B89E58]/40 p-4 rounded-xl shadow-xs">
                  <p className="text-lg sm:text-xl text-[#D4AB3F] font-extrabold leading-none">On Inquiry</p>
                  <p className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1.5">Offline Classroom</p>
                  <p className="text-[11px] text-[#566277]">The Landmark, Kudasan Center</p>
                </div>
                <div className="bg-white border border-[#B89E58]/30 p-4 rounded-xl shadow-xs">
                  <p className="text-lg sm:text-xl text-[#2B3A55] font-extrabold leading-none">On Inquiry</p>
                  <p className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1.5">Online Hybrid App</p>
                  <p className="text-[11px] text-[#566277]">Live Interactive Stream + Notes</p>
                </div>
              </div>

              <div className="bg-white border border-[#B89E58]/30 p-4 rounded-xl shadow-xs space-y-2.5">
                <p className="text-xs text-[#2B3A55] font-bold uppercase tracking-wider">Direct Academic Desk Contacts</p>
                <div className="flex items-center justify-between text-xs text-[#566277] pt-1">
                  <span>Admissions Helpline 1</span>
                  <a href="tel:+919737609991" className="font-bold text-[#2B3A55] hover:text-[#D4AB3F]">+91 97376 09991</a>
                </div>
                <div className="flex items-center justify-between text-xs text-[#566277]">
                  <span>Admissions Helpline 2</span>
                  <a href="tel:+919737309991" className="font-bold text-[#2B3A55] hover:text-[#D4AB3F]">+91 97373 09991</a>
                </div>
                <div className="flex items-center justify-between text-xs text-[#566277]">
                  <span>Campus Address</span>
                  <span className="font-bold text-[#2B3A55] text-right">The Landmark, A-207, Kudasan</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#566277]">
                  <span>Office Timings</span>
                  <span className="font-bold text-[#2B3A55]">07:30 AM – 09:30 PM</span>
                </div>
              </div>
            </div>

            {/* Admission Form */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-xl shadow-md border border-[#B89E58]/40" id="admission-form">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AB3F]">Direct Enrollment &amp; Fee Inquiry</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B3A55] tracking-tight mt-0.5">
                  Batch Fee Inquiry &amp; Seat Reservation
                </h3>
                <p className="text-xs text-[#566277] mt-1">
                  Submit your details below. Our Gandhinagar subject counselors will call or WhatsApp you directly with fee structure, batch schedules, and admission guidelines.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 bg-[#FAF7F0] border border-[#D4AB3F] rounded-xl text-center space-y-3">
                  <span className="material-symbols-outlined text-5xl text-[#D4AB3F]">check_circle</span>
                  <h4 className="text-lg font-bold text-[#2B3A55]">Inquiry Registered Successfully!</h4>
                  <p className="text-xs text-[#566277] max-w-md mx-auto">
                    Your reference token is <strong className="text-[#2B3A55]">#SEA-BATCH-2025</strong>. Our admissions desk (+91 97376 09991 / +91 97373 09991) will connect with you on WhatsApp within 30 minutes with official fee quotes and admission process.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-[#2B3A55] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#1E2A40]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Full Legal Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Patel Hardikkumar"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">WhatsApp Mobile *</label>
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Degree / Diploma Qualification *</label>
                      <select
                        required
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      >
                        <option value="">Select Qualification</option>
                        <option value="BE Civil Final Year">B.E. / B.Tech Civil (Final Year)</option>
                        <option value="BE Civil Completed">B.E. / B.Tech Civil (Completed)</option>
                        <option value="Diploma Civil">Diploma Civil (Completed)</option>
                        <option value="M.Tech Structural/Civil">M.Tech / ME (Civil Engineering)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Preferred Active Batch *</label>
                      <select
                        required
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      >
                        <option value="Foundation Batch 2026 (GPSC Class 1/2 Civil)">Foundation Batch 2026 (GPSC Class 1/2 Civil)</option>
                        <option value="સક્ષમ Batch (1600+ Work Assistant Vacancies)">સક્ષમ Batch (1600+ Work Assistant Vacancies)</option>
                        <option value="Interview Batch (GPSC Class-2 900++ Seats)">Interview Batch (GPSC Class-2 900++ Seats)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Study Mode *</label>
                      <select
                        required
                        value={formData.center}
                        onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      >
                        <option value="Gandhinagar Offline">Gandhinagar Classroom (The Landmark, Kudasan)</option>
                        <option value="Online Hybrid">Live Online Hybrid Interactive Stream</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Target Exam Year *</label>
                      <select
                        required
                        value={formData.targetYear}
                        onChange={(e) => setFormData({ ...formData, targetYear: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      >
                        <option value="2025-2026">2025–2026 Upcoming Notification Cycles</option>
                        <option value="2026">2026 Comprehensive Foundation</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#2B3A55] hover:bg-[#1E2A40] text-white py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm text-[#D4AB3F]">help_outline</span>
                      <span>Inquire for Fees Amount &amp; Reserve Seat</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-[#566277] text-center">
                    Direct admission desk • Helplines: +91 97376 09991 / +91 97373 09991
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Full Resolution Poster View Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2A40]/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-4 sm:p-6 shadow-2xl border border-[#B89E58]/40 relative max-h-[90vh] flex flex-col items-center justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-[#B89E58]/30">
              <span className="text-xs font-bold text-[#2B3A55] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#D4AB3F] text-base">image</span>
                <span>Official Batch Poster</span>
              </span>
              <button
                onClick={() => setSelectedPoster(null)}
                className="p-1 rounded-lg text-[#566277] hover:text-[#2B3A55] hover:bg-[#EEE7D2]"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            <div className="w-full my-4 rounded-xl overflow-hidden border border-[#B89E58]/25 shadow-inner">
              <img
                src={selectedPoster}
                alt="Official Batch Poster"
                className="w-full h-auto object-contain max-h-[65vh] mx-auto"
              />
            </div>

            <div className="w-full pt-3 border-t border-[#B89E58]/20 flex items-center justify-between text-xs">
              <span className="text-[#566277]">Gandhinagar Sole Center</span>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+919737609991"
                  className="bg-[#2B3A55] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#1E2A40] transition-colors"
                >
                  Call: +91 97376 09991
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
