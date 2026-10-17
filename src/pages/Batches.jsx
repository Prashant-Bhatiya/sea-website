import React, { useState } from 'react';

export default function Batches() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeScheduleTab, setActiveScheduleTab] = useState('morning');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    qualification: '',
    batch: 'Batch A: GPSC Foundation (10 Months)',
    center: 'Gandhinagar',
    targetYear: '2025'
  });

  const batchesList = [
    {
      id: 'sea-foundation',
      type: 'gpsc',
      badge: 'Official Flagship Course',
      statusBadge: 'Admissions Open 2025–26',
      title: 'Class 2 Foundation Batch For Civil Engineering ("Sea Foundation Batch")',
      taglineHighlight: 'Complete your preparation before Notification Release',
      description: 'The premier comprehensive foundation program for Gujarat Civil Engineers. Full in-depth coverage of Technical all subjects + General Studies (GS). Finish your complete syllabus well before the official notification release.',
      metrics: [
        { label: 'Duration', value: '6 Months' },
        { label: 'Mode', value: 'ONLINE / OFFLINE (HYBRID)' },
        { label: 'Curriculum', value: 'Technical All + GS' }
      ],
      features: [
        'Complete coverage of all Civil Engineering subjects (SOM, RCC, Geotech, Surveying, FM, Steel, Highway)',
        'Full General Studies (GS) modules: Gujarat Polity, Geography, History, Culture & State Current Affairs',
        'Available in Offline Classroom (The Landmark, Kudasan) or Live Online Interactive Dual-Stream',
        'Daily speed drills, full-length mock exams & marathon revision sessions included',
        'Strategy: Complete your preparation before Notification Release'
      ],
      price: '₹30,000 Offline • ₹25,000 Online',
      installment: 'Offline: ₹30k | Online: ₹25k',
      accentColor: 'bg-[#2B3A55]'
    },
    {
      id: 'batch-b',
      type: 'gsssb',
      badge: '4 Months Accelerated Track',
      statusBadge: 'Morning & Evening Batches',
      title: 'GSSSB AAE / Surveyor Fastrack Batch',
      description: 'High-density MCQ drill, rapid numerical shortcuts, and continuous Computer Based Recruitment Test (CBRT) simulation.',
      metrics: [
        { label: 'Question Vault', value: '5000+ PYQ Solved' },
        { label: 'Exam Mode', value: 'CBRT Lab Mock' },
        { label: 'Batch Slots', value: 'AM & PM Shifts' }
      ],
      features: [
        'Focused on GSSSB & GWSSB syllabus weightage (SOM, Surveying, Concrete Tech)',
        'Negative marking mitigation training (-0.25 / -0.33 tactical drills)',
        'Weekly state-wide live percentile ranking against 3,000+ active aspirants'
      ],
      price: '₹18,500',
      installment: 'Single-pay concessions',
      accentColor: 'bg-[#D4AB3F]'
    },
    {
      id: 'batch-c',
      type: 'gsssb',
      badge: 'Weekend Special (Sat & Sun)',
      statusBadge: 'Ideal for In-Service Engineers',
      title: 'GPSSB Panchayat JE Ranker Batch',
      description: 'Structured specifically for working diploma civil engineers, site project engineers, and private consultancy practitioners.',
      metrics: [
        { label: 'Weekly Hours', value: '14 hrs Intensive' },
        { label: 'Recorded Support', value: 'Unlimited 1080p' },
        { label: 'Schedule', value: 'Sat & Sun Only' }
      ],
      features: [
        'Saturday 3 PM - 9 PM & Sunday 8 AM - 4 PM with catered lunch breaks',
        'Zero attendance clash with on-site duty rosters',
        'Condensed memory map charts & formula cheat-sheets for revision on mobile'
      ],
      price: '₹14,000',
      installment: 'Study material kit included',
      accentColor: 'bg-[#566277]'
    },
    {
      id: 'batch-d',
      type: 'gpsc',
      badge: 'Mains Evaluation Module',
      statusBadge: '1-on-1 Officer Reviews',
      title: 'GPSC Mains Answer Writing & Test Series',
      description: 'Rigorous descriptive paper practice. Physical offline copy checking and structural mentoring by serving Class 1 Executive Engineers.',
      metrics: [
        { label: 'Test Papers', value: '12 Simulated' },
        { label: 'Feedback SLA', value: 'Within 72 Hours' },
        { label: 'Mentor Panel', value: 'Serving EE/DEEs' }
      ],
      features: [
        'Engineering diagram presentation, IS code annotations & neat layout training',
        'Individualized scorecards tracking speed, conceptual depth, and presentation weight',
        'Classroom model answer script booklets distributed post-submission'
      ],
      price: '₹9,500',
      installment: 'Complete 12 test cycles',
      accentColor: 'bg-[#B89E58]'
    }
  ];

  const morningSchedule = [
    { time: '07:30 – 08:30 AM', title: 'Technical Concept Foundation', desc: 'Core Civil subject deep dive (Theory, standard IS specifications, formula derivation).' },
    { time: '08:35 – 09:35 AM', title: 'Numerical & Analytical Workshop', desc: 'Real exam numerical solving and GPSC/GSSSB past question pattern breakdowns.' },
    { time: '09:35 – 09:50 AM', title: 'Academic Recess & Tea Break', desc: 'Library clearing, faculty interaction, and study partner peer sync.' },
    { time: '09:50 – 10:45 AM', title: 'General Studies & Gujarat State Affairs', desc: 'Gujarat geography, culture, constitution, and current policy developments.' },
    { time: '10:45 – 11:30 AM', title: 'Daily Speed Test & OMR Evaluation', desc: 'Timed 30-question diagnostic drill on morning delivered modules with instant negative marks analysis.' }
  ];

  const eveningSchedule = [
    { time: '05:30 – 06:30 PM', title: 'Core Technical Module Lecture', desc: 'Direct exam-oriented structural, geotechnical, and highway engineering lecture series.' },
    { time: '06:35 – 07:35 PM', title: 'High-Yield Numericals & IS Code Checks', desc: 'Fast calculation methods, elimination tactics, and GSSSB/GPSC past test papers.' },
    { time: '07:35 – 07:50 PM', title: 'Evening Refreshment Break', desc: 'Informal discussion with on-duty ranker mentors and study desk refreshment.' },
    { time: '07:50 – 08:45 PM', title: 'Language & General Knowledge Syllabus', desc: 'Gujarati Grammar, English comprehension, and general administration topics.' },
    { time: '08:45 – 09:30 PM', title: 'Rapid-Fire MCQ Test & Doubts', desc: 'End-of-day verification test. Library remains open post-class till 02:00 AM for night shifts.' }
  ];

  const filteredBatches = activeFilter === 'all'
    ? batchesList
    : batchesList.filter(b => b.type === activeFilter);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
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
                <span>Academic Session 2025–26 Enrolment Now Active</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
                Target-Oriented Classroom &amp; Hybrid Batches <span className="text-[#D4AB3F]">2025–26</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#d8e1f0] max-w-2xl leading-relaxed">
                Engineered exclusively for Gujarat Civil Cadres by <strong className="text-white">Shubh Engineering Academy</strong>. Conceptual civil engineering classes, full-length mock tests, interview guidance, and marathon revision sessions at our center in Kudasan, Gandhinagar.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#batches-catalog"
                  className="inline-flex items-center justify-center gap-2 bg-[#D4AB3F] text-[#1E1C12] font-bold px-6 py-3 rounded-lg text-xs sm:text-sm hover:bg-[#D4AB3F]/90 transition-all shadow-md text-center"
                >
                  <span>Explore Active Batches</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
                <a
                  href="#admission-section"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 hover:bg-white/20 px-6 py-3 rounded-lg text-xs sm:text-sm transition-all backdrop-blur-sm text-center"
                >
                  <span className="material-symbols-outlined text-sm text-[#D4AB3F]">how_to_reg</span>
                  <span>Direct Batch Admission</span>
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

            {/* Capacity Gauge */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-white/10 border border-white/15 p-5 sm:p-6 rounded-xl backdrop-blur-md text-white shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider text-[#d8e1f0] font-semibold">Classroom Capacity</span>
                  <span className="text-[#D4AB3F] font-bold">53 / 65 Seats Confirmed</span>
                </div>
                <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#D4AB3F] h-full rounded-full w-[82%]"></div>
                </div>
                <p className="text-xs text-[#d8e1f0] pt-1 leading-relaxed">
                  82% of Kudasan main batch intake confirmed. Seats allocated on direct registration basis. Early enrollment recommended before notification release.
                </p>
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

      {/* Live Status Ribbon */}
      <div className="bg-[#EEE7D2] border-b border-[#B89E58]/30 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[#2B3A55] text-xs">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="bg-[#2B3A55] text-[#D4AB3F] px-2 py-0.5 rounded text-[10px] sm:text-[11px] uppercase font-bold tracking-wide border border-[#B89E58]/40 shrink-0">
              Notice
            </span>
            <span className="font-medium">
              Admissions open for GPSC AE / GSSSB AAE Technical Batches at The Landmark, Kudasan, Gandhinagar.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919737309991" className="font-bold flex items-center gap-1.5 hover:text-[#D4AB3F] transition-colors">
              <span className="material-symbols-outlined text-[#D4AB3F] text-sm">phone</span>
              <span>Helpline: +91 97373 09991</span>
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

      {/* 4 Core Offerings Strip */}
      <section className="w-full bg-white py-10 px-4 sm:px-8 border-b border-[#B89E58]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all">
              <span className="material-symbols-outlined text-3xl text-[#D4AB3F] mb-2">menu_book</span>
              <h3 className="text-sm font-bold text-[#2B3A55]">Conceptual Civil Classes</h3>
              <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                Fundamental clarity in SOM, RCC, Geotech, Surveying &amp; Fluid Mechanics from root derivations.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all">
              <span className="material-symbols-outlined text-3xl text-[#D4AB3F] mb-2">fact_check</span>
              <h3 className="text-sm font-bold text-[#2B3A55]">Full-Length Mock Tests</h3>
              <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                Timed OMR &amp; CBRT simulator test series mirroring exact GPSC &amp; GSSSB negative marking drills.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all">
              <span className="material-symbols-outlined text-3xl text-[#D4AB3F] mb-2">record_voice_over</span>
              <h3 className="text-sm font-bold text-[#2B3A55]">Interview Guidance</h3>
              <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                Personality test preparation, DAF scrutiny, and mock panel interviews with serving Superintending Engineers.
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F0] border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all">
              <span className="material-symbols-outlined text-3xl text-[#D4AB3F] mb-2">bolt</span>
              <h3 className="text-sm font-bold text-[#2B3A55]">Marathon Revisions</h3>
              <p className="text-xs text-[#566277] mt-1 leading-relaxed">
                Non-stop high-yield formula marathons and IS-Code 456 rapid-fire revision sessions before examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Batches Catalog */}
      <section className="w-full py-16 bg-[#F6F0DF]" id="batches-catalog">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-2 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D4AB3F] font-bold block">Structured Academic Tracks</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Active &amp; Upcoming Cohorts</h2>
              <p className="text-xs sm:text-sm text-[#566277] mt-1">Select an intensive programme tailored to your qualification tier and examination target date.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center gap-1 bg-[#EEE7D2] p-1 rounded-lg border border-[#B89E58]/30 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  activeFilter === 'all' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                All Cadres
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
                GSSSB / GPSSB
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredBatches.map((batch) => (
              <div
                key={batch.id}
                className="bg-white rounded-xl p-5 sm:p-8 border border-[#B89E58]/40 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-2.5 h-full ${batch.accentColor}`}></div>
                <div className="space-y-4 sm:space-y-5 pl-2 sm:pl-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="bg-[#FAF7F0] text-[#2B3A55] font-bold border border-[#B89E58]/30 px-2.5 py-1 rounded text-[11px] sm:text-xs uppercase tracking-wider">
                      {batch.badge}
                    </span>
                    <span className="text-[#2B3A55] text-[11px] sm:text-xs font-bold bg-[#FAF7F0] px-2.5 py-1 rounded border border-[#B89E58]/30">
                      {batch.statusBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#2B3A55] leading-snug">{batch.title}</h3>
                    <p className="text-xs text-[#566277] mt-1.5 leading-relaxed">{batch.description}</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 py-2 bg-[#FAF7F0] p-3 rounded-lg border border-[#B89E58]/20">
                    {batch.metrics.map((m, idx) => (
                      <div key={idx}>
                        <p className="text-[11px] text-[#566277]">{m.label}</p>
                        <p className="text-xs sm:text-sm font-bold text-[#2B3A55]">{m.value}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2 text-xs text-[#1E1C12]">
                    {batch.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[#D4AB3F] text-sm shrink-0 mt-0.5">check_circle</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 pl-2 sm:pl-3 mt-6 bg-[#FAF7F0] -mx-5 -mb-5 sm:-mx-8 sm:-mb-8 px-5 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3 rounded-b-xl border-t border-[#B89E58]/30">
                  <div>
                    <p className="text-[10px] sm:text-xs text-[#566277] uppercase font-semibold">Course Investment</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-[#2B3A55] leading-none">{batch.price}</span>
                      <span className="text-[11px] text-[#566277]">{batch.installment}</span>
                    </div>
                  </div>
                  <a
                    href="#admission-form"
                    onClick={() => setFormData({ ...formData, batch: batch.title })}
                    className="bg-[#2B3A55] text-white hover:bg-[#1E2A40] px-5 sm:px-6 py-2.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                  >
                    Enroll in Cohort
                  </a>
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
                  <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">menu_book</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Bilingual Formula Books</h3>
                <p className="text-xs text-[#566277] leading-relaxed">Handcrafted Civil Engineering formula handbooks covering 18 subjects with parallel Gujarati &amp; English technical terminologies.</p>
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
                  <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">shield_person</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Cadre Officer Mentorship</h3>
                <p className="text-xs text-[#566277] leading-relaxed">Direct 1-on-1 strategy sessions with serving Executive Engineers in Sachivalaya and R&amp;B departments for interview grooming.</p>
              </div>
              <div className="pt-2 border-t border-[#B89E58]/20">
                <span className="text-xs text-[#B89E58] font-bold">Weekly 1-on-1 Clinics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Routine Timetable Breakdown (Interactive Tabs on Mobile) */}
      <section className="w-full py-16 bg-[#F6F0DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#D4AB3F] font-bold">Daily Routine &amp; Class Blocks</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Standard Daily Schedule Breakdown</h2>
              <p className="text-xs sm:text-sm text-[#566277] mt-1">Engineered to balance core subject lectures, daily MCQ drills, and personal self-study revisions.</p>
            </div>
            
            {/* Schedule Slot Switcher */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#B89E58]/30 text-xs">
              <button
                onClick={() => setActiveScheduleTab('morning')}
                className={`px-3.5 py-1.5 rounded font-bold transition-all ${
                  activeScheduleTab === 'morning' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                Morning Slot (07:30 AM)
              </button>
              <button
                onClick={() => setActiveScheduleTab('evening')}
                className={`px-3.5 py-1.5 rounded font-bold transition-all ${
                  activeScheduleTab === 'evening' ? 'bg-[#2B3A55] text-white shadow-xs' : 'text-[#566277] hover:text-[#2B3A55]'
                }`}
              >
                Evening Slot (05:30 PM)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Morning Slot */}
            <div className={`bg-white rounded-xl p-5 sm:p-8 border border-[#B89E58]/30 shadow-sm space-y-4 ${activeScheduleTab === 'evening' ? 'hidden lg:block' : 'block'}`}>
              <div className="flex items-center justify-between pb-2 bg-[#FAF7F0] p-4 rounded-lg border border-[#B89E58]/20">
                <div>
                  <span className="text-xs uppercase font-bold text-[#D4AB3F]">Slot A • Full-Time Focus</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Morning Batch Schedule</h3>
                </div>
                <span className="text-xs font-bold text-[#2B3A55] bg-white px-2.5 py-1 rounded shadow-xs border border-[#B89E58]/20">
                  07:30 AM – 11:30 AM
                </span>
              </div>

              <div className="space-y-3 relative pl-4 border-l-2 border-[#D4AB3F]/40 ml-2">
                {morningSchedule.map((item, idx) => (
                  <div key={idx} className="relative p-3 bg-[#FAF7F0] rounded-lg border border-[#B89E58]/20 space-y-1">
                    <span className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-[#D4AB3F] border-2 border-white"></span>
                    <span className="text-[11px] font-bold text-[#B89E58] block">{item.time}</span>
                    <p className="text-xs font-bold text-[#2B3A55]">{item.title}</p>
                    <p className="text-[11px] text-[#566277]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Evening Slot */}
            <div className={`bg-white rounded-xl p-5 sm:p-8 border border-[#B89E58]/30 shadow-sm space-y-4 ${activeScheduleTab === 'morning' ? 'hidden lg:block' : 'block'}`}>
              <div className="flex items-center justify-between pb-2 bg-[#FAF7F0] p-4 rounded-lg border border-[#B89E58]/20">
                <div>
                  <span className="text-xs uppercase font-bold text-[#2B3A55]">Slot B • Evening Working Professional</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#2B3A55]">Evening Batch Schedule</h3>
                </div>
                <span className="text-xs font-bold text-[#2B3A55] bg-white px-2.5 py-1 rounded shadow-xs border border-[#B89E58]/20">
                  05:30 PM – 09:30 PM
                </span>
              </div>

              <div className="space-y-3 relative pl-4 border-l-2 border-[#2B3A55]/40 ml-2">
                {eveningSchedule.map((item, idx) => (
                  <div key={idx} className="relative p-3 bg-[#FAF7F0] rounded-lg border border-[#B89E58]/20 space-y-1">
                    <span className="absolute -left-[23px] top-4 w-3.5 h-3.5 rounded-full bg-[#2B3A55] border-2 border-white"></span>
                    <span className="text-[11px] font-bold text-[#2B3A55] block">{item.time}</span>
                    <p className="text-xs font-bold text-[#2B3A55]">{item.title}</p>
                    <p className="text-[11px] text-[#566277]">{item.desc}</p>
                  </div>
                ))}
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
                <span>Direct Batch Admissions 2025–26</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight">
                Class 2 Foundation Batch ("Sea Foundation Batch")
              </h2>

              <p className="text-xs sm:text-sm text-[#566277] leading-relaxed">
                From 2019 to 2026, more than <span className="font-bold text-[#2B3A55]">3,000+ Class 2 Officers</span> and <span className="font-bold text-[#2B3A55]">5,000+ Class 3 Officers</span> have cleared competitive exams under our teaching and guidance. Complete your preparation before the official notification release!
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
                <div className="bg-white border border-[#B89E58]/40 p-4 rounded-xl shadow-xs">
                  <p className="text-2xl sm:text-3xl text-[#D4AB3F] font-extrabold leading-none">₹30,000</p>
                  <p className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">Offline Classroom</p>
                  <p className="text-[11px] text-[#566277]">The Landmark, Kudasan Center</p>
                </div>
                <div className="bg-white border border-[#B89E58]/30 p-4 rounded-xl shadow-xs">
                  <p className="text-2xl sm:text-3xl text-[#2B3A55] font-extrabold leading-none">₹25,000</p>
                  <p className="text-xs sm:text-sm font-bold text-[#2B3A55] mt-1">Online Hybrid</p>
                  <p className="text-[11px] text-[#566277]">Live Interactive App + Dual Stream</p>
                </div>
              </div>

              <div className="bg-white border border-[#B89E58]/30 p-4 rounded-xl shadow-xs space-y-2.5">
                <p className="text-xs text-[#2B3A55] font-bold uppercase tracking-wider">Program Highlights &amp; Syllabus</p>
                <div className="flex items-center justify-between text-xs text-[#566277] pt-1">
                  <span>Duration</span>
                  <span className="font-bold text-[#2B3A55]">6 Months Intensive</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#566277]">
                  <span>Subject Coverage</span>
                  <span className="font-bold text-[#2B3A55]">Technical All Subjects + GS</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#566277]">
                  <span>Delivery Mode</span>
                  <span className="font-bold text-[#2B3A55]">ONLINE / OFFLINE (HYBRID)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#566277]">
                  <span>Academic Inclusions</span>
                  <span className="font-bold text-[#2B3A55]">Mock Tests, Revision &amp; Interview</span>
                </div>
              </div>
            </div>

            {/* Admission Form */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-xl shadow-md border border-[#B89E58]/40" id="admission-form">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AB3F]">Direct Enrollment</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B3A55] tracking-tight mt-0.5">
                  Batch Seat Reservation &amp; Inquiry
                </h3>
                <p className="text-xs text-[#566277] mt-1">
                  Reserve your seat directly for the Sea Foundation Batch or inquire about upcoming cohorts. No screening test required.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 bg-[#FAF7F0] border border-[#D4AB3F] rounded-xl text-center space-y-3">
                  <span className="material-symbols-outlined text-5xl text-[#D4AB3F]">check_circle</span>
                  <h4 className="text-lg font-bold text-[#2B3A55]">Seat Reservation Request Received!</h4>
                  <p className="text-xs text-[#566277] max-w-md mx-auto">
                    Your enrollment reference is <strong className="text-[#2B3A55]">#SEA-BATCH-2025</strong>. Our admissions desk (+91 97373 09991) will connect with you on WhatsApp within 45 minutes with fee payment link, schedule, and syllabus kit.
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
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Preferred Cohort Batch *</label>
                      <select
                        required
                        value={formData.batch}
                        onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      >
                        <option value="Sea Foundation Batch (6 Months - 30k Offline / 25k Online)">Class 2 Foundation Batch ("Sea Foundation Batch")</option>
                        <option value="GSSSB AAE / Surveyor Fastrack Batch">GSSSB AAE / Surveyor Fastrack Batch (4 Months)</option>
                        <option value="GPSSB Panchayat JE Ranker Batch">GPSSB Panchayat JE Ranker Batch (Weekend Special)</option>
                        <option value="GPSC Mains Answer Writing & Test Series">GPSC Mains Answer Writing &amp; Test Series</option>
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
                        <option value="Gandhinagar Offline">Gandhinagar Classroom (The Landmark, Kudasan - ₹30,000)</option>
                        <option value="Online Hybrid">Live Online Hybrid Interactive Stream (₹25,000)</option>
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
                        <option value="2025">2025 Upcoming Notifications</option>
                        <option value="2026">2026 Early Preparation</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#2B3A55] hover:bg-[#1E2A40] text-white py-3 rounded-lg text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <span>Reserve Seat in Sea Foundation Batch</span>
                      <span className="material-symbols-outlined text-sm text-[#D4AB3F]">arrow_forward</span>
                    </button>
                  </div>
                  <p className="text-[11px] text-[#566277] text-center">
                    Direct admission • Contact desk: +91 97373 09991 / +91 97376 09991
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
