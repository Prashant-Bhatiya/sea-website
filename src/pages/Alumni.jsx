import React, { useState } from 'react';

export default function Alumni({ onOpenMentor, onOpenConclave }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  const officers = [
    {
      id: 1,
      name: 'Er. Harshad Patel, GPSC Cl-1',
      batch: 'Batch 2018',
      rank: 'GPSC Rank 04',
      post: 'Executive Engineer (Civil)',
      dept: 'rnb',
      deptName: 'Roads & Buildings (R&B)',
      division: 'R&B Division, Rajkot District Circle',
      tags: 'patel rajkot executive bridge r&b',
      expertise: ['Major Cable-Stayed Bridges', 'IRC Code Compliances'],
      status: 'Active Field Guide',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj-gjsOo3SZiqF5pjZ160Ey9ctpKPTHFFx2NVimCMF6QpLi0d8bXSzaZ2T8mVmFz7nuaqFdbuG3VDgYBV-GCo175jwl2MymSVQmX0NlRNRUlTrTDMCYTdn6tWzCTYnHi4pXUWTnOoN6nGEeAcZKr_RsvrjxyVkINRIHq8naD1ebdCXIy_0SlT2VJifigJaQTvTxj93dr-2wU3OEU8qt9-X8l7xMLj7h5pwIfeYoj9FozlQ8tokdJ1O4g'
    },
    {
      id: 2,
      name: 'Er. Bhavisha Solanki, GPSC Cl-2',
      batch: 'Batch 2020',
      rank: 'GPSC Rank 11',
      post: 'Deputy Executive Engineer',
      dept: 'nwrws',
      deptName: 'Narmada & Water Resources',
      division: 'Sardar Sarovar Dam Division, Kevadia',
      tags: 'solanki narmada sardar dam irrigation nwrws kevadia',
      expertise: ['Dam Safety Monitoring', 'GIS Canal Network'],
      status: 'Technical Panel Mentor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz-gVQlvvUZWKRc-GIAGziVDTqcx2Ew7YLz-2xsBVGR7rDonrBVObJWbJ9gR7ILyGmUOwIfbC4DllJRcOdwuZ5Mo4tXlg2btpH6NG-cU-oGGT0bsNvG9NktefbHz4d6OytxHYcFe6GENrleHAVsg6itbDSczlfEzVTCRDq2z5bioUBL7B0Rx_tM7vW-geFVjUaQJUidYiStP0wEB3OMF9iLO47i-XXA_cFl14x546dQS4w08gxc5N8Sw'
    },
    {
      id: 3,
      name: 'Er. Jignesh Makwana, GSSSB AAE',
      batch: 'Batch 2022',
      rank: 'State Rank 07',
      post: 'Additional Assistant Engineer',
      dept: 'corporations',
      deptName: 'Municipal Corporations',
      division: 'Ahmedabad Municipal Corporation (AMC)',
      tags: 'makwana ahmedabad amc urban corporation stormwater',
      expertise: ['Smart City Stormwater', 'Metro Civil Integration'],
      status: 'Field Guide Mentor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ASXrZqi0bAfB9JqI3pB3BvReyBbJTyi9oAN6m7mMlNovo-sYpRnMXY629_OpSxYGVgoSlqJzJEPZ1xAYylUhCxoxvtfGsfQ-xFVEsBiN6RS1VPvESaJHXzvk4BPraNxv64zJzGW6a47KhF6KdsKbClfJQzirZWcAS3HtYZpziCj8cWbnAUZuNUjdQ4Zj6fnx1BlUAh6_Xf-LGQh9XT-qJkj_QasCcwKTW-DJGu3hwU95HuiNHYLOCw'
    },
    {
      id: 4,
      name: 'Er. Nilesh Chaudhari, GPSC Cl-2',
      batch: 'Batch 2019',
      rank: 'GPSC Rank 18',
      post: 'Deputy Executive Engineer',
      dept: 'gwssb',
      deptName: 'GWSSB Water Cadres',
      division: 'GWSSB Circle, Mehsana District',
      tags: 'chaudhari mehsana gwssb water supply pipeline',
      expertise: ['Bulk Pipeline Grids', 'Water Treatment Works'],
      status: 'Cadre Lead',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGdnBvOYhg8t3wWf0aaqigUP15gikmNgLmW5Yu2-1h_tkYldtNsh-8i7R2ToX11uhmMmryKLp0A7jqNG1T-kErNMJXPv8q5y6KTPBVM3R1WX7hapX7hkC9O31BtIwbaHmJUb3_ug6ENjbLJ4gWsj1xTEGN4CIOqrFN0q9y9MACrvnqebH69aeEQXzQW7k9QPiBfYNDfxr-mxFvkEQcPaSAkKIdPsjd6rYY8RVUEVo9lGS0zPXPApY1GA'
    },
    {
      id: 5,
      name: 'Er. Krunal Rathod, GPSSB JE',
      batch: 'Batch 2021',
      rank: 'Surat Rank 02',
      post: 'Junior Engineer (Civil)',
      dept: 'panchayat',
      deptName: 'Panchayat Rural Works',
      division: 'District Panchayat Surat Division',
      tags: 'rathod surat panchayat rural roads checkdam',
      expertise: ['PMGSY Village Roads', 'Overhead Water Tanks'],
      status: 'Active Guide',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBetpokv2xQUaA2jl-5kJVnBn4527JfXS0YJtapRcDq6-f_1oBvLRg1r_zgnFM5RRWRUXa5eOTXqGMRnWr7_v75VMIkRfyaOE1NykEzYAdGjoPttq00ATi2J4EYdaa_7BUtpVygfycweyp8upv3t63X-3ahE4vTB_NKgew52dVybbuLuZ-oQHPy9y-1-J1pWfd0nKMhefvRtUXicGV-WwgxZJhG6ZNmESK-sA0sR_Lm2XSgoLxV2zdhhA'
    },
    {
      id: 6,
      name: 'Er. Dipen Shah, GPSC Cl-1',
      batch: 'Batch 2017',
      rank: 'GPSC Rank 03',
      post: 'Executive Engineer',
      dept: 'rnb',
      deptName: 'Roads & Buildings (R&B)',
      division: 'Capital Project Division, Gandhinagar',
      tags: 'shah gandhinagar capital secretariat r&b',
      expertise: ['Secretariat Infrastructure', 'Seismic Design Code'],
      status: 'Chief Guest Mentor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pul6KlOYJn-HpdPllNi05FzEIsjtIEmDk68QWxfh5b-flKRv9I1Vzl1lVsy74JCivzaaAX2_zkZ9jqqw_Q_GADux5MPHOR6HAuIjoivk_tkz4yKE2DW4wsnJ9M9f6RrWXBcygQ_pbwjqWXiLgOJrL-HGxXZfFlbZx8DBwRBSodDnBAwcq5R7qSlkovE1G02_8J9w1SNqsuvOhzwZs7WObKFW5_JnAfwxyTu42Cq6cJ_Za_uuQA_ImA'
    }
  ];

  const filteredOfficers = officers.filter(officer => {
    const matchesDept = selectedDept === 'all' || officer.dept === selectedDept;
    const query = searchTerm.toLowerCase();
    const matchesSearch = !query ||
      officer.name.toLowerCase().includes(query) ||
      officer.division.toLowerCase().includes(query) ||
      officer.post.toLowerCase().includes(query) ||
      officer.tags.toLowerCase().includes(query);

    return matchesDept && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Administrative Hero */}
      <section className="relative bg-[#2B3A55] text-white overflow-hidden pt-16 pb-24 shadow-md border-b border-[#B89E58]/30">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AB3F_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#D4AB3F] mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1E2A40] text-[#D4AB3F] border border-[#B89E58]/40">
              <img src="/sea-logo-badge.jpg" alt="SEA" className="w-4 h-4 rounded-full object-cover border border-[#D4AB3F]" />
              <span>State Cadre Network Registry</span>
            </span>
            <span className="text-[#B89E58]">/</span>
            <span className="text-[#F6F0DF]">Shubh Engineering Academy • Inspire . Learn . Achieve</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-4xl sm:text-5xl text-white tracking-tight font-extrabold max-w-4xl leading-tight">
                Gujarat State Civil Engineering Officers Alumni Association
              </h1>
              <p className="text-base sm:text-lg text-[#d8e1f0] max-w-3xl leading-relaxed">
                Uniting over 3,000+ Class 2 and 5,000+ Class 3 technical officers across all 33 districts of Gujarat trained by Shubh Engineering Academy (2019–2026). From the Gandhinagar Swarnim Sankul secretariat to critical field engineering divisions, our alumni build, manage, and safeguard the physical infrastructure of Gujarat.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#directory"
                  className="inline-flex items-center gap-2 bg-[#D4AB3F] text-[#1E1C12] font-bold px-6 py-3 rounded-lg text-xs shadow-md hover:bg-[#D4AB3F]/90 transition-all"
                >
                  <span className="material-symbols-outlined text-base">badge</span>
                  <span>Explore Officer Directory</span>
                </a>
                <button
                  onClick={onOpenConclave}
                  className="inline-flex items-center gap-2 bg-[#1E2A40]/80 text-[#F6F0DF] border border-[#B89E58]/40 px-6 py-3 rounded-lg text-xs hover:bg-[#1E2A40] hover:text-[#D4AB3F] transition-all backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined text-base text-[#D4AB3F]">event_available</span>
                  <span>Annual Conclave RSVP</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="bg-[#1E2A40] p-5 rounded-xl border border-[#B89E58]/30 shadow-sm backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase text-[#D4AB3F] font-bold tracking-wider">State Representation</span>
                  <span className="material-symbols-outlined text-[#D4AB3F]">public</span>
                </div>
                <div className="text-3xl font-extrabold text-white">33 / 33</div>
                <div className="text-xs text-[#d8e1f0]">Districts Active in Civil Governance</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#1E2A40]/90 p-4 rounded-xl border border-[#B89E58]/20">
                  <div className="text-2xl font-bold text-[#D4AB3F]">3,000+</div>
                  <div className="text-[11px] text-[#d8e1f0] uppercase">Class 2 Officers</div>
                </div>
                <div className="bg-[#1E2A40]/90 p-4 rounded-xl border border-[#B89E58]/20">
                  <div className="text-2xl font-bold text-[#D4AB3F]">5,000+</div>
                  <div className="text-[11px] text-[#d8e1f0] uppercase">Class 3 Officers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Ribbon Overlay */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-10 relative z-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 bg-white p-4 sm:p-6 rounded-xl border border-[#B89E58]/30 shadow-lg">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FAF7F0]/40 sm:bg-transparent">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#FAF7F0] border border-[#B89E58]/30 flex items-center justify-center text-[#2B3A55] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">account_balance</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#2B3A55]">3,000+</div>
              <div className="text-xs text-[#566277]">Class 2 Officers</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FAF7F0]/40 sm:bg-transparent">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#FAF7F0] border border-[#B89E58]/30 flex items-center justify-center text-[#2B3A55] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">engineering</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#2B3A55]">5,000+</div>
              <div className="text-xs text-[#566277]">Class 3 Officers</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FAF7F0]/40 sm:bg-transparent">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#FAF7F0] border border-[#B89E58]/30 flex items-center justify-center text-[#2B3A55] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">military_tech</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#2B3A55]">8,000+</div>
              <div className="text-xs text-[#566277]">Total Selections (2019-2026)</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-lg bg-[#FAF7F0]/40 sm:bg-transparent">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#FAF7F0] border border-[#B89E58]/30 flex items-center justify-center text-[#2B3A55] shrink-0">
              <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">history_edu</span>
            </div>
            <div>
              <div className="text-xl font-bold text-[#2B3A55]">Estd. 2019</div>
              <div className="text-xs text-[#566277]">Gandhinagar Premier Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Officer Directory */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8 w-full" id="directory">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B89E58] font-bold mb-1">
              <span className="material-symbols-outlined text-base text-[#D4AB3F]">verified_user</span>
              <span>Official Registry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55]">Gazetted &amp; Technical Cadre Directory</h2>
            <p className="text-xs sm:text-sm text-[#566277] mt-1">Verified records of Shubh Academy alumni officers steering government infrastructure projects across Gujarat.</p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, post or district..."
              className="w-full bg-white text-[#1E1C12] text-xs px-4 py-2.5 rounded-lg border border-[#B89E58]/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AB3F] pl-10 pr-8"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#566277] text-lg">search</span>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2.5 text-[#566277] hover:text-[#2B3A55]"
                title="Clear search"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Department Filter Buttons */}
        <div className="overflow-x-auto pb-4 mb-6 no-scrollbar w-full max-w-full">
          <div className="flex items-center gap-2 w-max">
            {[
              { id: 'all', label: 'All State Cadres (8,000+)' },
              { id: 'rnb', label: 'Roads & Buildings (R&B)' },
              { id: 'gwssb', label: 'GWSSB Water Cadres' },
              { id: 'nwrws', label: 'NWRWS (Narmada & Water Resources)' },
              { id: 'corporations', label: 'Municipal Corps (AMC/GMC/SMC)' },
              { id: 'panchayat', label: 'Panchayat Rural Works' }
            ].map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors shadow-sm ${
                  selectedDept === dept.id
                    ? 'bg-[#2B3A55] text-[#D4AB3F] border border-[#B89E58]'
                    : 'bg-white text-[#566277] hover:text-[#2B3A55] border border-[#B89E58]/30'
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfficers.length === 0 ? (
            <div className="col-span-full py-16 px-6 text-center bg-white rounded-xl border border-dashed border-[#B89E58]/40 shadow-sm">
              <span className="material-symbols-outlined text-5xl text-[#B89E58] mb-3">person_search</span>
              <h3 className="text-lg font-bold text-[#2B3A55]">No matching cadre officers found</h3>
              <p className="text-xs text-[#566277] max-w-md mx-auto mt-1 mb-5">
                We couldn't find any officer matching <span className="font-semibold text-[#2B3A55]">"{searchTerm}"</span> in the selected department. Try checking the spelling or resetting the filters.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedDept('all'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B3A55] text-[#D4AB3F] text-xs font-bold rounded-lg hover:bg-[#1E2A40] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-base">restart_alt</span>
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            filteredOfficers.map((officer) => (
              <div
                key={officer.id}
                className="bg-white rounded-xl p-5 sm:p-6 border border-[#B89E58]/30 hover:border-[#B89E58] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#FAF7F0] border-2 border-[#B89E58]/40 shrink-0">
                      <img className="w-full h-full object-cover object-top" alt={officer.name} src={officer.avatar} />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="px-2 py-0.5 rounded text-[11px] uppercase bg-[#FAF7F0] text-[#2B3A55] font-bold tracking-wide border border-[#B89E58]/30">
                        {officer.batch}
                      </span>
                      <span className="text-[11px] text-[#D4AB3F] font-bold mt-1">{officer.rank}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#2B3A55]">{officer.name}</h3>
                  <p className="text-xs text-[#566277] mt-0.5 font-medium">{officer.post}</p>

                  <div className="mt-3 py-2 px-3 rounded bg-[#FAF7F0] border border-[#B89E58]/20 flex items-center gap-2 text-[#566277] text-xs">
                    <span className="material-symbols-outlined text-[#B89E58] text-base shrink-0">domain</span>
                    <span className="text-[#1E1C12] truncate">{officer.division}</span>
                  </div>

                  <div className="mt-4">
                    <div className="text-[11px] text-[#566277] font-bold uppercase tracking-wider mb-1.5">Core Public Expertise</div>
                    <div className="flex flex-wrap gap-1.5">
                      {officer.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] bg-[#F6F0DF] text-[#2B3A55] font-medium border border-[#B89E58]/30"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#B89E58]/20 flex items-center justify-between text-xs text-[#566277]">
                  <span className="flex items-center gap-1.5 text-[#2B3A55] font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#D4AB3F]"></span>
                    {officer.status}
                  </span>
                  <button
                    onClick={() => onOpenMentor(officer.name)}
                    className="text-[#2B3A55] font-bold hover:text-[#D4AB3F] transition-colors inline-flex items-center gap-1 py-1 px-1.5 rounded hover:bg-[#FAF7F0]"
                  >
                    <span>Request Advice</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

