import React, { useState } from 'react';

export default function Results({ onOpenVideo }) {
  const [filterService, setFilterService] = useState('all');

  const rankers = [
    {
      id: 'hardik',
      service: 'gpsc',
      rankBadge: 'State Rank 1 • GPSC Class 1',
      advt: 'Advt. No. 24/2023-24',
      name: 'Er. Hardik Patel',
      designation: 'Executive Engineer (Class 1)',
      department: 'Roads & Buildings Department, Gandhinagar',
      score: 'Score 248/500',
      rollNo: '10842918',
      attempt: '1st Attempt',
      quote: 'The Academy’s 45 full-length conventional test series and formula handbooks for Structural Analysis and Soil Mechanics were the absolute differentiator. Writing answers in exact GPSC Mains ledger sheets built unmatched speed.',
      verifiedText: 'Verified Gujarat Gazette Final List',
      videoDuration: '18m',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pul6KlOYJn-HpdPllNi05FzEIsjtIEmDk68QWxfh5b-flKRv9I1Vzl1lVsy74JCivzaaAX2_zkZ9jqqw_Q_GADux5MPHOR6HAuIjoivk_tkz4yKE2DW4wsnJ9M9f6RrWXBcygQ_pbwjqWXiLgOJrL-HGxXZfFlbZx8DBwRBSodDnBAwcq5R7qSlkovE1G02_8J9w1SNqsuvOhzwZs7WObKFW5_JnAfwxyTu42Cq6cJ_Za_uuQA_ImA'
    },
    {
      id: 'pooja',
      service: 'gpsc',
      rankBadge: 'State Rank 2 • GPSC Class 2',
      advt: 'Advt. No. 27/2023-24',
      name: 'Er. Pooja Joshi',
      designation: 'Assistant Engineer (Class 2)',
      department: 'Narmada, Water Resources & Kalpsar Dept',
      score: 'Score 239/500',
      rollNo: '20491823',
      attempt: 'Classroom Batch 2023',
      quote: 'Fluid Mechanics and Hydrology were my weaker zones. Senior Faculty mentorship and customized structural notes simplified multi-variable derivations. Cleared in 1st attempt with highest female candidate marks.',
      verifiedText: 'Highest Marks in Technical Paper II',
      videoDuration: '14m',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6TrDjxb7FlIk0gTQ2bdXmsUiIsdC-d5MrneWauTda30az92u0VujhR_sF8RisonT1bAJrLvc5xkgsyHACa78TmnHh_tZCe_QYE5KJQsh9CqYU2xE7VWG3MPZ00Sve2blprCisozmqFFnJ8tQNzZSsrHlYJeEyrEN7joiONf7HpNZhikAl6uIqAU1aHUnq_MH1ZlvzBDueZDr07xXlfetf0sI-Ul4JXXwNrUVc7OVhXOId8QLiUYyVXQ'
    },
    {
      id: 'mehul',
      service: 'gsssb',
      rankBadge: 'State Rank 1 • GSSSB AAE',
      advt: 'Advt. No. 198/2023',
      name: 'Er. Mehul Solanki',
      designation: 'Additional Assistant Engineer (AAE)',
      department: 'Urban Development & Urban Housing Dept',
      score: 'Score 182/210',
      rollNo: '55102941',
      attempt: '1st Attempt Rank 1',
      quote: 'GSSSB requires lightning speed in formula calculations and IS Code 456 memorization. The Academy’s OMR simulator test series mirrored the exact examination pressure and negative marking control.',
      verifiedText: '100% Accuracy in Highway Engg',
      videoDuration: '22m',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ASXrZqi0bAfB9JqI3pB3BvReyBbJTyi9oAN6m7mMlNovo-sYpRnMXY629_OpSxYGVgoSlqJzJEPZ1xAYylUhCxoxvtfGsfQ-xFVEsBiN6RS1VPvESaJHXzvk4BPraNxv64zJzGW6a47KhF6KdsKbClfJQzirZWcAS3HtYZpziCj8cWbnAUZuNUjdQ4Zj6fnx1BlUAh6_Xf-LGQh9XT-qJkj_QasCcwKTW-DJGu3hwU95HuiNHYLOCw'
    },
    {
      id: 'chirag',
      service: 'gsssb',
      rankBadge: 'Rank 3 • GPSSB Junior Engineer',
      advt: 'Advt. No. 13/2023-24',
      name: 'Er. Chirag Dave',
      designation: 'Junior Engineer (Civil)',
      department: 'District Panchayat Ahmedabad Division',
      score: 'Score 89/100',
      rollNo: '99182304',
      attempt: 'Weekend Cadre Batch',
      quote: 'Balancing field work with exam preparation seemed impossible. The weekend batch modular sheets and concise Building Materials notes allowed me to score Rank 3 in Ahmedabad district on my first try.',
      verifiedText: 'Ahmedabad Cadre Allotment',
      videoDuration: '16m',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBetpokv2xQUaA2jl-5kJVnBn4527JfXS0YJtapRcDq6-f_1oBvLRg1r_zgnFM5RRWRUXa5eOTXqGMRnWr7_v75VMIkRfyaOE1NykEzYAdGjoPttq00ATi2J4EYdaa_7BUtpVygfycweyp8upv3t63X-3ahE4vTB_NKgew52dVybbuLuZ-oQHPy9y-1-J1pWfd0nKMhefvRtUXicGV-WwgxZJhG6ZNmESK-sA0sR_Lm2XSgoLxV2zdhhA'
    }
  ];

  const filteredRankers = filterService === 'all'
    ? rankers
    : rankers.filter(r => r.service === filterService);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Authority Hero */}
      <section className="relative w-full overflow-hidden bg-[#2B3A55] text-white py-16 px-4 sm:px-8 border-b border-[#B89E58]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A40] via-[#2B3A55] to-[#1E2A40] opacity-95 pointer-events-none"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#D4AB3F] opacity-10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2.5 bg-[#FAF7F0]/10 border border-[#B89E58]/50 text-[#D4AB3F] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <img src="/sea-logo-badge.jpg" alt="SEA" className="w-5 h-5 rounded-full object-cover border border-[#D4AB3F]" />
              <span>Shubh Engineering Academy • Inspire . Learn . Achieve</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Proven Track Record: <span className="text-[#D4AB3F]">3,000+ Class 2</span> &amp; <span className="text-[#D4AB3F]">5,000+ Class 3</span> Officers
            </h1>

            <p className="text-base sm:text-lg text-[#d8e1f0] max-w-2xl leading-relaxed">
              From 2019 to 2026, more than <strong>3,000+ Class 2 Officers</strong> and <strong>5,000+ Class 3 Officers</strong> have cleared state competitive examinations under the dedicated teaching &amp; guidance of Shubh Engineering Academy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <div className="bg-[#FAF7F0]/10 backdrop-blur-md p-5 rounded-xl text-left border border-[#B89E58]/40 shadow-inner">
              <span className="text-xs text-[#D4AB3F] uppercase tracking-wider block font-bold">Established Year</span>
              <span className="text-2xl font-bold text-white block mt-0.5">Estd. 2019</span>
              <span className="text-xs text-[#d8e1f0] block mt-0.5">2019–2026 Proven Heritage</span>
            </div>
            <a
              href="#rankers-grid"
              className="bg-[#D4AB3F] text-[#1E1C12] font-bold px-6 py-4 rounded-lg text-xs text-center hover:bg-[#D4AB3F]/90 transition-all shadow-lg border border-[#D4AB3F]"
            >
              Inspect Merits
            </a>
          </div>
        </div>
      </section>

      {/* Quantified Cadre Impact Counter Strip */}
      <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-8 shadow-sm border-b border-[#B89E58]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Class 2 Cadre</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">assured_workload</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">3,000<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Class 2 Officers (GPSC AE/DEE, R&amp;B, Narmada, GWSSB) cleared under our teaching and guidance.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Class 3 Cadre</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">construction</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">5,000<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Class 3 Officers (GSSSB AAE, GPSSB JE &amp; Urban Development) inducted across Gujarat governance.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Heritage Track Record</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">history_edu</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">2019<span className="text-[#D4AB3F]">–26</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                7+ continuous years of unmatched civil engineering exam leadership established in 2019 in Gandhinagar.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Total Selections</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">workspace_premium</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">8,000<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Total civil engineering candidates selected under Shubh Academy’s specialized teaching &amp; guidance.
              </p>
            </div>
          </div>

          {/* Department Selection Distribution Visualization */}
          <div className="mt-8 p-5 sm:p-8 bg-[#F6F0DF] rounded-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 border border-[#B89E58]/30">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4AB3F]"></span>
                <span className="text-xs uppercase font-bold text-[#2B3A55]">Department Selection Distribution</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-[#2B3A55]">Gujarat State Civil Engineering Cadre Appointments</p>
              <p className="text-xs text-[#566277]">Validated against GPSC Advt 20/2022-23 to 48/2024-25 final appointment gazette records.</p>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <div>
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-[#2B3A55] font-semibold">Roads &amp; Buildings (R&amp;B Cadre)</span>
                  <span className="font-bold text-[#2B3A55]">48% (696 Appointees)</span>
                </div>
                <div className="w-full h-2.5 bg-[#E4DCC4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#2B3A55] rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-[#2B3A55] font-semibold">Water Resources &amp; GWSSB (Irrigation)</span>
                  <span className="font-bold text-[#2B3A55]">34% (493 Appointees)</span>
                </div>
                <div className="w-full h-2.5 bg-[#E4DCC4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4AB3F] rounded-full" style={{ width: '34%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs pb-1">
                  <span className="text-[#2B3A55] font-semibold">GPSSB Panchayat &amp; Urban Development</span>
                  <span className="font-bold text-[#2B3A55]">18% (261 Appointees)</span>
                </div>
                <div className="w-full h-2.5 bg-[#E4DCC4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#566277] rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame: Certified Top Rankers */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 bg-[#F6F0DF]" id="rankers-grid">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#D4AB3F] tracking-wider">First-Attempt State Ranks</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Hall of Fame: Certified Top Rankers</h2>
              <p className="text-xs sm:text-sm text-[#566277] max-w-2xl mt-1">
                Authentic results verified with state gazetted roll numbers, merit positions, and allocated ministerial postings.
              </p>
            </div>
            
            {/* Filter Tabs with mobile scroll container */}
            <div className="w-full md:w-auto overflow-x-auto pb-1 -mb-1 no-scrollbar">
              <div className="flex items-center gap-1.5 bg-[#EEE7D2] p-1 rounded-lg border border-[#B89E58]/30 w-max">
                <button
                  onClick={() => setFilterService('all')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'all' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  All Services ({rankers.length})
                </button>
                <button
                  onClick={() => setFilterService('gpsc')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'gpsc' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  GPSC Class 1 &amp; 2
                </button>
                <button
                  onClick={() => setFilterService('gsssb')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'gsssb' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  GSSSB AAE &amp; GPSSB
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredRankers.map((ranker) => (
              <div
                key={ranker.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-all border border-[#B89E58]/30"
              >
                <div className="p-5 sm:p-8 space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#FAF7F0]">
                    <span className="bg-[#2B3A55] text-[#D4AB3F] border border-[#D4AB3F]/40 px-3 py-1 rounded-lg text-xs uppercase font-bold tracking-wider">
                      {ranker.rankBadge}
                    </span>
                    <span className="text-xs text-[#566277] font-medium">{ranker.advt}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden flex-shrink-0 bg-[#FAF7F0] border border-[#B89E58]/30 shadow-inner">
                      <img className="w-full h-full object-cover object-top" alt={ranker.name} src={ranker.avatar} />
                      <div className="absolute bottom-1 right-1 bg-[#D4AB3F] text-[#1E1C12] font-extrabold text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded shadow">
                        {ranker.score}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-[#2B3A55]">{ranker.name}</h3>
                      <p className="text-xs sm:text-sm text-[#2B3A55] font-semibold">{ranker.designation}</p>
                      <p className="text-xs text-[#566277]">{ranker.department}</p>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-[#566277]">
                        <span className="font-bold text-[#2B3A55]">Roll No:</span> {ranker.rollNo} • <span className="text-[#D4AB3F] font-bold">{ranker.attempt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FAF7F0] p-4 rounded-lg space-y-1.5 border border-[#B89E58]/20">
                    <div className="flex items-center gap-1.5 text-[#D4AB3F] text-xs font-bold uppercase">
                      <span className="material-symbols-outlined text-base">format_quote</span>
                      <span>Strategy Quote</span>
                    </div>
                    <p className="text-xs text-[#1E1C12] italic leading-relaxed">
                      “{ranker.quote}”
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#B89E58]/20">
                  <span className="text-xs text-[#566277] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#D4AB3F] text-base">verified</span>
                    <span>{ranker.verifiedText}</span>
                  </span>
                  <button
                    onClick={() => onOpenVideo(ranker.name, `${ranker.rankBadge} Masterclass`)}
                    className="inline-flex items-center gap-1 text-xs text-[#2B3A55] font-bold hover:text-[#D4AB3F] transition-colors py-1"
                  >
                    <span className="material-symbols-outlined text-base text-[#D4AB3F]">smart_display</span>
                    <span>Watch Interview ({ranker.videoDuration})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

