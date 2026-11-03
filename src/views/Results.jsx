'use client';

import React, { useState, useMemo } from 'react';

export default function Results({ onOpenVideo, onOpenMentor, onOpenConclave }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'table', 'rankers', 'alumni'
  const [filterService, setFilterService] = useState('all');
  const [tableSearch, setTableSearch] = useState('');
  const [directorySearch, setDirectorySearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');

  // Official Table of Selected Candidates from Brochure Page 10 (Rising Stars Record)
  const examTableData = [
    {
      id: 1,
      exam: 'GES (Advt. No 71/2020-21)',
      category: 'gpsc',
      dept: 'Roads & Buildings / Narmada (GES Class 1 & 2)',
      vacancies: 61,
      selected: 29,
      ratio: '47.5%',
      badge: 'State Leader'
    },
    {
      id: 2,
      exam: 'GES (Advt. No 19/2022-23)',
      category: 'gpsc',
      dept: 'Gujarat Engineering Services Class 1 & 2',
      vacancies: 58,
      selected: 23,
      ratio: '39.7%',
      badge: 'Gazetted'
    },
    {
      id: 3,
      exam: 'GES (GWSSB) (Advt. No 41/2020-21)',
      category: 'gwssb',
      dept: 'GWSSB Water Supply & Sewerage Board',
      vacancies: 28,
      selected: 10,
      ratio: '35.7%',
      badge: 'Board Cadre'
    },
    {
      id: 4,
      exam: 'A.E. GWSSB (Advt. No. 01/2021-22)',
      category: 'gwssb',
      dept: 'Assistant Engineer Civil (GWSSB)',
      vacancies: 125,
      selected: 52,
      ratio: '41.6%',
      badge: '52 Appointees'
    },
    {
      id: 5,
      exam: 'A.E. Irrigation (Advt. No. 15/2021-22)',
      category: 'irrigation',
      dept: 'Narmada, Water Resources & Kalpsar Dept',
      vacancies: 119,
      selected: 60,
      ratio: '50.4%',
      badge: '50%+ Batch'
    },
    {
      id: 6,
      exam: 'A.E. GMB (Advt. No. 19/2021-22)',
      category: 'port',
      dept: 'Gujarat Maritime Board (Port Civil Works)',
      vacancies: 27,
      selected: 15,
      ratio: '55.6%',
      badge: 'Majority Seat'
    },
    {
      id: 7,
      exam: 'A.E. Irrigation (Advt. No. 120/2020-21)',
      category: 'irrigation',
      dept: 'Water Resources & Canal Engineering',
      vacancies: 165,
      selected: 72,
      ratio: '43.6%',
      badge: '72 Officers'
    },
    {
      id: 8,
      exam: 'A.E. Irrigation (Advt. No. 06/2022-23)',
      category: 'irrigation',
      dept: 'Assistant Engineer Class-II Narmada',
      vacancies: 100,
      selected: 59,
      ratio: '59.0%',
      badge: 'State Clean Sweep'
    },
    {
      id: 9,
      exam: 'Junior Scientific Assistant (Advt. 205/2022-23)',
      category: 'technical',
      dept: 'State Laboratories & Material Testing Wing',
      vacancies: 30,
      selected: 16,
      ratio: '53.3%',
      badge: 'Technical Lab'
    },
    {
      id: 10,
      exam: 'Municipal Engineer (Advt. Schemes)',
      category: 'corporation',
      dept: 'Gujarat Urban Municipalities & Corporations',
      vacancies: 116,
      selected: 62,
      ratio: '53.4%',
      badge: 'Urban Cadre'
    },
    {
      id: 11,
      exam: 'AMC Estate / TDO, સહાયક સબ ઇન્સ્પેક્ટર',
      category: 'corporation',
      dept: 'Ahmedabad Municipal Corporation (AMC)',
      vacancies: 66,
      selected: 27,
      ratio: '40.9%',
      badge: 'AMC Civic'
    },
    {
      id: 12,
      exam: 'A.A.E Irrigation (Additional Assistant Engineer)',
      category: 'class3',
      dept: 'Irrigation Field Cadre Subordinate Service',
      vacancies: 192,
      selected: 42,
      ratio: '21.9%',
      badge: 'Class 3 Cadre'
    },
    {
      id: 13,
      exam: 'AMC Technical Supervisor (Civil Engineering)',
      category: 'corporation',
      dept: 'Ahmedabad Municipal Corporation (AMC)',
      vacancies: 75,
      selected: 39,
      ratio: '52.0%',
      badge: 'AMC Supervisor'
    },
    {
      id: 14,
      exam: 'BMC Technical Assistant (Civil)',
      category: 'corporation',
      dept: 'Bhavnagar Municipal Corporation (BMC)',
      vacancies: 24,
      selected: 19,
      ratio: '79.2%',
      badge: '79% Dominance'
    }
  ];

  // Authentic State Rankers from Official Brochure (Pages 3 to 9)
  const rankers = [
    {
      id: 'prince-doshi',
      service: 'gpsc',
      rankBadge: 'State Rank 1 • GES Class 1 & 2',
      advt: 'Advt. No. 58/2022-23',
      name: 'Prince Doshi',
      batchCode: 'Batch: S41 Mains',
      designation: 'Gujarat Engineering Services (Class 1&2)',
      department: 'Roads & Buildings / Narmada, Water Resources',
      score: 'State Rank 1',
      attempt: 'S41 Mains Topper',
      quote: 'Structured coverage of conventional technical questions and precise answer-framing on GPSC standard ledger sheets made all the difference in achieving State Rank 1.',
      verifiedText: 'Verified Gazette Merit Position 01',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pul6KlOYJn-HpdPllNi05FzEIsjtIEmDk68QWxfh5b-flKRv9I1Vzl1lVsy74JCivzaaAX2_zkZ9jqqw_Q_GADux5MPHOR6HAuIjoivk_tkz4yKE2DW4wsnJ9M9f6RrWXBcygQ_pbwjqWXiLgOJrL-HGxXZfFlbZx8DBwRBSodDnBAwcq5R7qSlkovE1G02_8J9w1SNqsuvOhzwZs7WObKFW5_JnAfwxyTu42Cq6cJ_Za_uuQA_ImA'
    },
    {
      id: 'hardik-hadiya',
      service: 'irrigation',
      rankBadge: 'State Rank 1 • Assistant Engineer (Civil)',
      advt: 'Advt. No. 06/2022-23',
      name: 'Hardikbhai Hadiya',
      batchCode: 'Batch: SF2 - 37',
      designation: 'Assistant Engineer (Civil) Class-II',
      department: 'Narmada, Water Resources, Water Supply & Kalpsar Dept',
      score: 'State Rank 1',
      attempt: 'SF2 Regular Batch',
      quote: 'The faculty’s intense focus on hydraulic derivations and soil mechanics numerical shortcuts enabled lightning fast calculation during the test.',
      verifiedText: 'State Rank 1 Merit Holder',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGdnBvOYhg8t3wWf0aaqigUP15gikmNgLmW5Yu2-1h_tkYldtNsh-8i7R2ToX11uhmMmryKLp0A7jqNG1T-kErNMJXPv8q5y6KTPBVM3R1WX7hapX7hkC9O31BtIwbaHmJUb3_ug6ENjbLJ4gWsj1xTEGN4CIOqrFN0q9y9MACrvnqebH69aeEQXzQW7k9QPiBfYNDfxr-mxFvkEQcPaSAkKIdPsjd6rYY8RVUEVo9lGS0zPXPApY1GA'
    },
    {
      id: 'darshak-hadiya',
      service: 'gpsc',
      rankBadge: 'State Rank 2 • GES Class 1 & 2',
      advt: 'Advt. No. 58/2022-23',
      name: 'Darshak Hadiya',
      batchCode: 'Batch: S41 Interview',
      designation: 'Gujarat Engineering Services (Class 1&2)',
      department: 'Roads & Buildings / Narmada Kalpsar Dept',
      score: 'State Rank 2',
      attempt: 'S41 Cohort',
      quote: 'Personal mock interview panels guided by serving Chief & Executive Engineers sharpened my real site knowledge, leading directly to State Rank 2.',
      verifiedText: 'Verified Merit Position 02',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3ASXrZqi0bAfB9JqI3pB3BvReyBbJTyi9oAN6m7mMlNovo-sYpRnMXY629_OpSxYGVgoSlqJzJEPZ1xAYylUhCxoxvtfGsfQ-xFVEsBiN6RS1VPvESaJHXzvk4BPraNxv64zJzGW6a47KhF6KdsKbClfJQzirZWcAS3HtYZpziCj8cWbnAUZuNUjdQ4Zj6fnx1BlUAh6_Xf-LGQh9XT-qJkj_QasCcwKTW-DJGu3hwU95HuiNHYLOCw'
    },
    {
      id: 'moin-pancha',
      service: 'irrigation',
      rankBadge: 'State Rank 2 • Assistant Engineer Class-II',
      advt: 'Advt. No. 06/2022-23',
      name: 'Moin Pancha',
      batchCode: 'Batch: SF2 - 163',
      designation: 'Assistant Engineer (Civil) Class-II',
      department: 'Narmada, Water Resources, Water Supply & Kalpsar Dept',
      score: 'State Rank 2',
      attempt: 'SF2 Classroom Batch',
      quote: 'Daily test series with instant negative mark analysis helped me minimize unforced errors on technical design questions.',
      verifiedText: 'State Rank 2 Appointee',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBetpokv2xQUaA2jl-5kJVnBn4527JfXS0YJtapRcDq6-f_1oBvLRg1r_zgnFM5RRWRUXa5eOTXqGMRnWr7_v75VMIkRfyaOE1NykEzYAdGjoPttq00ATi2J4EYdaa_7BUtpVygfycweyp8upv3t63X-3ahE4vTB_NKgew52dVybbuLuZ-oQHPy9y-1-J1pWfd0nKMhefvRtUXicGV-WwgxZJhG6ZNmESK-sA0sR_Lm2XSgoLxV2zdhhA'
    },
    {
      id: 'mit-lathiya',
      service: 'gpsc',
      rankBadge: 'State Rank 3 • GES Class 1 & 2',
      advt: 'Advt. No. 58/2022-23',
      name: 'Mit Lathiya',
      batchCode: 'Batch: S41 Interview',
      designation: 'Gujarat Engineering Services (Class 1&2)',
      department: 'Roads & Buildings / Narmada Kalpsar Dept',
      score: 'State Rank 3',
      attempt: 'S41 Program',
      quote: 'The mentor sessions by Shubh Academy’s senior civil engineering team turned structural matrix analysis into one of my highest-scoring sections.',
      verifiedText: 'Verified State Rank 03',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6TrDjxb7FlIk0gTQ2bdXmsUiIsdC-d5MrneWauTda30az92u0VujhR_sF8RisonT1bAJrLvc5xkgsyHACa78TmnHh_tZCe_QYE5KJQsh9CqYU2xE7VWG3MPZ00Sve2blprCisozmqFFnJ8tQNzZSsrHlYJeEyrEN7joiONf7HpNZhikAl6uIqAU1aHUnq_MH1ZlvzBDueZDr07xXlfetf0sI-Ul4JXXwNrUVc7OVhXOId8QLiUYyVXQ'
    },
    {
      id: 'vivekkumar-aakoliya',
      service: 'irrigation',
      rankBadge: 'State Rank 3 • Assistant Engineer Class-II',
      advt: 'Advt. No. 06/2022-23',
      name: 'Vivekkumar Aakoliya',
      batchCode: 'Batch: SN1 - 04',
      designation: 'Assistant Engineer (Civil) Class-II',
      department: 'Narmada & Water Resources Department',
      score: 'State Rank 3',
      attempt: 'SN1 Cohort',
      quote: 'Concise formula pocketbooks and classroom doubt clearance sessions built complete clarity for both prelims and interview stages.',
      verifiedText: 'State Rank 3 Merit Appointee',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAj-gjsOo3SZiqF5pjZ160Ey9ctpKPTHFFx2NVimCMF6QpLi0d8bXSzaZ2T8mVmFz7nuaqFdbuG3VDgYBV-GCo175jwl2MymSVQmX0NlRNRUlTrTDMCYTdn6tWzCTYnHi4pXUWTnOoN6nGEeAcZKr_RsvrjxyVkINRIHq8naD1ebdCXIy_0SlT2VJifigJaQTvTxj93dr-2wU3OEU8qt9-X8l7xMLj7h5pwIfeYoj9FozlQ8tokdJ1O4g'
    },
    {
      id: 'lalu-yadav',
      service: 'gwssb',
      rankBadge: 'Rank 7 • AE GWSSB & Rank 16 Irrigation',
      advt: 'Advt. 01/2021-22 & 15/2021-22',
      name: 'Lalu Yadav',
      batchCode: 'Batch: S4 - 162',
      designation: 'Assistant Engineer (Civil)',
      department: 'GWSSB / Water Resources Department',
      score: 'Double Cadre Selection',
      attempt: 'S4 Classroom',
      quote: 'Secured selections in two competitive examinations simultaneously through Shubh Academy’s integrated civil syllabus strategy.',
      verifiedText: 'Dual Cadre State Ranker',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGdnBvOYhg8t3wWf0aaqigUP15gikmNgLmW5Yu2-1h_tkYldtNsh-8i7R2ToX11uhmMmryKLp0A7jqNG1T-kErNMJXPv8q5y6KTPBVM3R1WX7hapX7hkC9O31BtIwbaHmJUb3_ug6ENjbLJ4gWsj1xTEGN4CIOqrFN0q9y9MACrvnqebH69aeEQXzQW7k9QPiBfYNDfxr-mxFvkEQcPaSAkKIdPsjd6rYY8RVUEVo9lGS0zPXPApY1GA'
    },
    {
      id: 'desai-maharshi',
      service: 'irrigation',
      rankBadge: 'State Rank 2 • AE Irrigation & Rank 9 GWSSB',
      advt: 'Advt. 15/2021-22 & 01/2021-22',
      name: 'Desai Maharshi',
      batchCode: 'Batch: S4 - 27',
      designation: 'Assistant Engineer (Civil) Class-II',
      department: 'Narmada, Water Resources & GWSSB',
      score: 'Rank 2 & Rank 9',
      attempt: 'S4 Intensive Track',
      quote: 'Continuous faculty mentorship and structured PYQ calculation drills enabled me to score in the top 10 in two distinct department exams.',
      verifiedText: 'State Rank 2 Merit Certified',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pul6KlOYJn-HpdPllNi05FzEIsjtIEmDk68QWxfh5b-flKRv9I1Vzl1lVsy74JCivzaaAX2_zkZ9jqqw_Q_GADux5MPHOR6HAuIjoivk_tkz4yKE2DW4wsnJ9M9f6RrWXBcygQ_pbwjqWXiLgOJrL-HGxXZfFlbZx8DBwRBSodDnBAwcq5R7qSlkovE1G02_8J9w1SNqsuvOhzwZs7WObKFW5_JnAfwxyTu42Cq6cJ_Za_uuQA_ImA'
    }
  ];

  // Verified Alumni Officers Directory (Merged with District Registry)
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
      name: 'Er. Prince Doshi, GES Cl-1&2',
      batch: 'Batch S41',
      rank: 'State Rank 1',
      post: 'Executive Cadre Engineer',
      dept: 'rnb',
      deptName: 'Roads & Buildings (R&B)',
      division: 'Secretariat Capital Works, Gandhinagar',
      tags: 'prince doshi state rank 1 ges mains secretariat',
      expertise: ['Infrastructure Planning', 'Structural Specifications'],
      status: 'State Rank 1 Leader',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4pul6KlOYJn-HpdPllNi05FzEIsjtIEmDk68QWxfh5b-flKRv9I1Vzl1lVsy74JCivzaaAX2_zkZ9jqqw_Q_GADux5MPHOR6HAuIjoivk_tkz4yKE2DW4wsnJ9M9f6RrWXBcygQ_pbwjqWXiLgOJrL-HGxXZfFlbZx8DBwRBSodDnBAwcq5R7qSlkovE1G02_8J9w1SNqsuvOhzwZs7WObKFW5_JnAfwxyTu42Cq6cJ_Za_uuQA_ImA'
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
      name: 'Er. Hardikbhai Hadiya, AE Cl-II',
      batch: 'Batch SF2',
      rank: 'State Rank 1',
      post: 'Assistant Engineer (Civil)',
      dept: 'nwrws',
      deptName: 'Narmada & Water Resources',
      division: 'Dam & Canal Division, Vadodara Circle',
      tags: 'hadiya hardik narmada irrigation state rank 1',
      expertise: ['Canal Hydraulics', 'Water Resource Planning'],
      status: 'State Rank 1 Mentor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGdnBvOYhg8t3wWf0aaqigUP15gikmNgLmW5Yu2-1h_tkYldtNsh-8i7R2ToX11uhmMmryKLp0A7jqNG1T-kErNMJXPv8q5y6KTPBVM3R1WX7hapX7hkC9O31BtIwbaHmJUb3_ug6ENjbLJ4gWsj1xTEGN4CIOqrFN0q9y9MACrvnqebH69aeEQXzQW7k9QPiBfYNDfxr-mxFvkEQcPaSAkKIdPsjd6rYY8RVUEVo9lGS0zPXPApY1GA'
    },
    {
      id: 7,
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
      id: 8,
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

  // Faculty Mentors from Brochure Page 3
  const faculties = [
    { name: 'Mr. Shubham Sir', subject: 'Civil Engineering Lead', exp: 'Senior Director' },
    { name: 'Mr. Swami Sir', subject: 'Structural Dynamics & SOM', exp: 'Senior Faculty' },
    { name: 'Mr. Ramesh Sir', subject: 'Fluid Mechanics & Hydraulics', exp: 'Senior Faculty' },
    { name: 'Mr. Ruchit Sir', subject: 'Geotechnical & Soil Mechanics', exp: 'Subject Mentor' },
    { name: 'Mr. Parth Sir', subject: 'Building Materials & Surveying', exp: 'Subject Specialist' },
    { name: 'Mr. Tushar Sir', subject: 'Transportation & Highway Engg', exp: 'Field Specialist' },
    { name: 'Mr. Jayani Sir', subject: 'Environmental & Water Works', exp: 'Consultant' },
    { name: 'Mr. Nitin Sir', subject: 'General Studies & State Affairs', exp: 'Exam Strategist' }
  ];

  // Filtered Exam Table Data
  const filteredTable = useMemo(() => {
    return examTableData.filter(item => {
      const matchesSearch = !tableSearch ||
        item.exam.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.dept.toLowerCase().includes(tableSearch.toLowerCase()) ||
        item.badge.toLowerCase().includes(tableSearch.toLowerCase());
      return matchesSearch;
    });
  }, [examTableData, tableSearch]);

  // Filtered Rankers
  const filteredRankers = useMemo(() => {
    if (filterService === 'all') return rankers;
    return rankers.filter(r => r.service === filterService);
  }, [rankers, filterService]);

  // Filtered Alumni Officers
  const filteredOfficers = useMemo(() => {
    return officers.filter(officer => {
      const matchesDept = selectedDept === 'all' || officer.dept === selectedDept;
      const query = directorySearch.toLowerCase();
      const matchesSearch = !query ||
        officer.name.toLowerCase().includes(query) ||
        officer.division.toLowerCase().includes(query) ||
        officer.post.toLowerCase().includes(query) ||
        officer.tags.toLowerCase().includes(query);
      return matchesDept && matchesSearch;
    });
  }, [officers, selectedDept, directorySearch]);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Authority Hero */}
      <section className="relative w-full overflow-hidden bg-[#2B3A55] text-white py-14 sm:py-16 px-4 sm:px-8 border-b border-[#B89E58]/30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A40] via-[#2B3A55] to-[#1E2A40] opacity-95 pointer-events-none"></div>
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#D4AB3F] opacity-10 blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 z-10">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2.5 bg-[#FAF7F0]/10 border border-[#B89E58]/50 text-[#D4AB3F] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <img src="/sea-logo-badge.jpg" alt="SEA" className="w-5 h-5 rounded-full object-cover border border-[#D4AB3F]" />
              <span>Results &bull; Rankers &bull; Gujarat Officers Alumni Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Proven Track Record: <span className="text-[#D4AB3F]">863+ Class 2</span> &amp; <span className="text-[#D4AB3F]">3,266+ Class 3</span> Officers
            </h1>

            <p className="text-base sm:text-lg text-[#d8e1f0] max-w-2xl leading-relaxed">
              From 2019 to 2026, more than <strong>863+ Class 2 Officers</strong> and <strong>3,266+ Class 3 Officers</strong> (4,129+ total selections) have cleared Gujarat competitive examinations under the dedicated teaching &amp; mentorship of Shubh Engineering Academy.
            </p>

            {/* Quick Navigation Jump Tabs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="#official-table"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#D4AB3F] text-[#1E1C12] text-xs font-bold shadow-md hover:bg-[#D4AB3F]/90 transition-all"
              >
                <span className="material-symbols-outlined text-sm">table_view</span>
                <span>Official Vacancy &amp; Selection Record</span>
              </a>
              <a
                href="#rankers-grid"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 text-white text-xs font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-sm text-[#D4AB3F]">military_tech</span>
                <span>Top Rankers</span>
              </a>
              <a
                href="#directory"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 text-white text-xs font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                <span className="material-symbols-outlined text-sm text-[#D4AB3F]">groups</span>
                <span>Officer Alumni Directory</span>
              </a>
              {onOpenConclave && (
                <button
                  onClick={onOpenConclave}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#FAF7F0] text-[#2B3A55] text-xs font-bold hover:bg-[#FAF7F0]/90 transition-all"
                >
                  <span className="material-symbols-outlined text-sm text-[#D4AB3F]">event_available</span>
                  <span>Annual Conclave RSVP</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto shrink-0">
            <div className="bg-[#FAF7F0]/10 backdrop-blur-md p-5 rounded-xl text-left border border-[#B89E58]/40 shadow-inner">
              <span className="text-xs text-[#D4AB3F] uppercase tracking-wider block font-bold">Official Milestone</span>
              <span className="text-2xl font-bold text-white block mt-0.5">850+ Selected</span>
              <span className="text-xs text-[#d8e1f0] block mt-0.5">Out of 1500+ State Vacancies (2021&ndash;23)</span>
            </div>
            {onOpenMentor && (
              <button
                onClick={onOpenMentor}
                className="bg-[#D4AB3F] text-[#1E1C12] font-bold px-6 py-4 rounded-xl text-xs text-center hover:bg-[#D4AB3F]/90 transition-all shadow-lg border border-[#D4AB3F] flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">support_agent</span>
                <span>Talk to Faculty Mentor</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Quantified Cadre Impact Counter Strip */}
      <section className="w-full bg-white py-10 sm:py-14 px-4 sm:px-8 shadow-sm border-b border-[#B89E58]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Class 2 Cadre</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">assured_workload</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">863<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Class 2 Officers (GPSC AE/DEE, R&amp;B, Narmada, GWSSB) cleared under our teaching and guidance.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Class 3 Cadre</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">construction</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">3,266<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Class 3 Officers (GSSSB AAE, GPSSB JE &amp; Urban Development) inducted across Gujarat governance.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Brochure Verified Record</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">verified</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">850<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Selected from Shubh Academy out of 1,500+ civil engineering vacancies during 2021 to 2023.
              </p>
            </div>

            <div className="bg-[#FAF7F0] p-5 sm:p-6 rounded-xl relative overflow-hidden group hover:shadow-md transition-shadow border border-[#B89E58]/25">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold text-[#2B3A55] tracking-wider">Total Selections</span>
                <span className="material-symbols-outlined text-[#D4AB3F]">workspace_premium</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl text-[#2B3A55] font-extrabold tracking-tight">4,129<span className="text-[#D4AB3F]">+</span></div>
              <p className="text-xs text-[#566277] mt-2 leading-relaxed">
                Total civil engineering candidates selected under Shubh Academy’s specialized guidance (2019&ndash;2026).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Brochure Table Section: GOVT. OF GUJARAT OFFICERS FROM SHUBH ACADEMY */}
      <section className="w-full py-14 sm:py-16 px-4 sm:px-8 bg-[#F6F0DF] border-b border-[#B89E58]/30" id="official-table">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-[#EEE7D2] text-[#2B3A55] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#B89E58]/40">
                <span className="material-symbols-outlined text-[#D4AB3F] text-base">auto_graph</span>
                <span>Official Brochure Record &bull; Gujarat Government Recruitments</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B3A55] tracking-tight">
                Government of Gujarat Officers from Shubh Academy
              </h2>
              <p className="text-xs sm:text-sm text-[#566277] max-w-2xl leading-relaxed">
                Direct advertisement-wise breakdown of vacancies vs. successful candidates from Shubh Academy published in our official academy gazette record.
              </p>
            </div>

            {/* Quick Filter Search Box */}
            <div className="relative w-full lg:w-72 shrink-0">
              <input
                type="text"
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                placeholder="Search exam or department..."
                className="w-full bg-white text-[#1E1C12] text-xs px-4 py-2.5 rounded-xl border border-[#B89E58]/40 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#D4AB3F] pl-10 pr-8"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#566277] text-lg">search</span>
              {tableSearch && (
                <button
                  onClick={() => setTableSearch('')}
                  className="absolute right-2.5 top-2.5 text-[#566277] hover:text-[#2B3A55]"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Official Brochure Highlight Card */}
          <div className="bg-gradient-to-r from-[#2B3A55] to-[#1E2A40] text-white p-5 sm:p-6 rounded-2xl border border-[#D4AB3F]/40 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AB3F]/20 border border-[#D4AB3F] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl text-[#D4AB3F]">military_tech</span>
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-[#D4AB3F] tracking-wider block">Official Brochure Milestone</span>
                <p className="text-base sm:text-lg font-bold text-white mt-0.5">
                  Out of 1,500+ Civil Engineering Vacancies during 2021 to 2023:
                </p>
                <p className="text-xs text-[#d8e1f0] mt-0.5">
                  Over <strong className="text-[#D4AB3F] font-extrabold text-sm">850+ Shubh Academy Aspirants</strong> were appointed across Gujarat state engineering departments.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#D4AB3F] text-[#1E1C12] text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-sm">
                56%+ Overall Conversion
              </span>
            </div>
          </div>

          {/* Responsive Data Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#B89E58]/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#2B3A55] text-white uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="py-4 px-4 sm:px-6 font-bold">Exam &amp; Notification</th>
                    <th className="py-4 px-4 font-bold">Cadre / Department</th>
                    <th className="py-4 px-4 text-center font-bold">Total State Vacancies</th>
                    <th className="py-4 px-4 text-center font-bold">Successful from Shubh Academy</th>
                    <th className="py-4 px-4 text-center font-bold">Success Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B89E58]/20">
                  {filteredTable.map((row, idx) => (
                    <tr
                      key={row.id}
                      className={`hover:bg-[#FAF7F0] transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF7F0]/40'}`}
                    >
                      <td className="py-3.5 px-4 sm:px-6">
                        <div className="font-extrabold text-[#2B3A55] text-xs sm:text-sm">{row.exam}</div>
                        <span className="inline-block mt-0.5 text-[10px] font-bold text-[#D4AB3F] bg-[#2B3A55] px-2 py-0.5 rounded border border-[#D4AB3F]/30">
                          {row.badge}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-[#566277] text-xs font-medium">
                        {row.dept}
                      </td>
                      <td className="py-3.5 px-4 text-center font-bold text-[#2B3A55]">
                        {row.vacancies}
                      </td>
                      <td className="py-3.5 px-4 text-center font-extrabold text-[#2B3A55]">
                        <span className="bg-[#EEE7D2] px-2.5 py-1 rounded-md text-[#2B3A55] border border-[#B89E58]/30">
                          {row.selected}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <div className="w-16 h-2 bg-[#E4DCC4] rounded-full overflow-hidden hidden sm:block">
                            <div
                              className="h-full bg-[#D4AB3F] rounded-full"
                              style={{ width: row.ratio }}
                            ></div>
                          </div>
                          <span className="font-bold text-xs text-[#2B3A55]">{row.ratio}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FAF7F0] py-3.5 px-6 border-t border-[#B89E58]/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#566277]">
              <span>Showing {filteredTable.length} verified state selection cycles from the official brochure registry.</span>
              <span className="font-bold text-[#2B3A55]">And many more ongoing recruitment results...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Free Study Material Drive Banner */}
      <section className="w-full py-8 px-4 sm:px-8 bg-white border-b border-[#B89E58]/30" id="free-material-banner">
        <div className="max-w-7xl mx-auto bg-[#2B3A55] text-white p-6 sm:p-7 rounded-2xl border border-[#D4AB3F]/40 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AB3F]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#FAF7F0]/15 px-3 py-1 rounded-full text-xs font-bold text-[#D4AB3F] border border-[#D4AB3F]/30">
                <span className="material-symbols-outlined text-sm">folder_shared</span>
                <span>Free Official Study Material &bull; Google Drive</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Prepare with Toppers' Notes &amp; Curated Exam Archives
              </h3>
              <p className="text-xs sm:text-sm text-[#d8e1f0] leading-relaxed">
                Direct Google Drive access with no sign-up barrier. Download official Gujarat Class 2 &amp; Class 3 civil engineering notes, solved questions, and formula handbooks for free.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://drive.google.com/drive/folders/1uH5js-rnb3-Gvw8dIrDi2ITNONJdrFow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#D4AB3F] text-[#1E1C12] font-bold px-5 py-3 rounded-xl text-xs sm:text-sm hover:bg-[#D4AB3F]/90 transition-all shadow-md group"
              >
                <span className="material-symbols-outlined text-base text-[#1E1C12] group-hover:scale-110 transition-transform">cloud_download</span>
                <span>Class 2 Free Material</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1Z6A4rF2wrd3ze8yy9EakwZMwy989e65f"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#2B3A55] font-bold px-5 py-3 rounded-xl text-xs sm:text-sm hover:bg-[#FAF7F0] transition-all shadow-md group border border-white/80"
              >
                <span className="material-symbols-outlined text-base text-[#2B3A55] group-hover:scale-110 transition-transform">cloud_download</span>
                <span>Class 3 Free Material</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame: Certified Top Rankers (Pages 3 to 9 of Brochure) */}
      <section className="w-full py-14 sm:py-16 px-4 sm:px-8 bg-[#F6F0DF]" id="rankers-grid">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase text-[#D4AB3F] tracking-wider">Brochure Certified Merits</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55] tracking-tight mt-1">Hall of Fame: Certified Top Rankers</h2>
              <p className="text-xs sm:text-sm text-[#566277] max-w-2xl mt-1">
                Authentic state rankers featured in the Shubh Academy official publication with merit positions, batch codes, and ministerial allotments.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="w-full md:w-auto overflow-x-auto pb-1 -mb-1 no-scrollbar">
              <div className="flex items-center gap-1.5 bg-[#EEE7D2] p-1 rounded-lg border border-[#B89E58]/30 w-max">
                <button
                  onClick={() => setFilterService('all')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'all' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  All State Ranks ({rankers.length})
                </button>
                <button
                  onClick={() => setFilterService('gpsc')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'gpsc' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  GES Class 1 &amp; 2
                </button>
                <button
                  onClick={() => setFilterService('irrigation')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'irrigation' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  Narmada &amp; Water Resources
                </button>
                <button
                  onClick={() => setFilterService('gwssb')}
                  className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    filterService === 'gwssb' ? 'bg-[#2B3A55] text-white shadow-sm' : 'text-[#566277] hover:text-[#2B3A55]'
                  }`}
                >
                  GWSSB Water Cadres
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
                <div className="p-5 sm:p-7 space-y-4">
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
                        <span className="font-bold text-[#2B3A55]">{ranker.batchCode}</span> &bull; <span className="text-[#D4AB3F] font-bold">{ranker.attempt}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FAF7F0] p-4 rounded-lg space-y-1.5 border border-[#B89E58]/20">
                    <div className="flex items-center gap-1.5 text-[#D4AB3F] text-xs font-bold uppercase">
                      <span className="material-symbols-outlined text-base">format_quote</span>
                      <span>Cadre Preparation Strategy</span>
                    </div>
                    <p className="text-xs text-[#1E1C12] italic leading-relaxed">
                      &ldquo;{ranker.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#B89E58]/20">
                  <span className="text-xs text-[#566277] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#D4AB3F] text-base">verified</span>
                    <span>{ranker.verifiedText}</span>
                  </span>
                  {onOpenVideo && (
                    <button
                      onClick={() => onOpenVideo(ranker.name, `${ranker.rankBadge} Strategy Masterclass`)}
                      className="inline-flex items-center gap-1 text-xs text-[#2B3A55] font-bold hover:text-[#D4AB3F] transition-colors py-1"
                    >
                      <span className="material-symbols-outlined text-base text-[#D4AB3F]">smart_display</span>
                      <span>Watch Strategy Interview</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merged Officer Alumni Directory Section */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8 w-full" id="directory">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#B89E58] font-bold mb-1">
              <span className="material-symbols-outlined text-base text-[#D4AB3F]">badge</span>
              <span>Officers Alumni Association</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55]">
              Gujarat State Civil Engineering Officers Directory
            </h2>
            <p className="text-xs sm:text-sm text-[#566277] mt-1">
              Connecting 863+ Class 2 and 3,266+ Class 3 officers actively serving across all 33 districts of Gujarat.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              value={directorySearch}
              onChange={(e) => setDirectorySearch(e.target.value)}
              placeholder="Search by name, post or division..."
              className="w-full bg-white text-[#1E1C12] text-xs px-4 py-2.5 rounded-lg border border-[#B89E58]/30 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AB3F] pl-10 pr-8"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#566277] text-lg">search</span>
            {directorySearch && (
              <button
                onClick={() => setDirectorySearch('')}
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
              { id: 'all', label: 'All State Cadres (4,129+)' },
              { id: 'rnb', label: 'Roads & Buildings (R&B)' },
              { id: 'nwrws', label: 'Narmada & Water Resources' },
              { id: 'gwssb', label: 'GWSSB Water Cadres' },
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
          {filteredOfficers.map((officer) => (
            <div
              key={officer.id}
              className="bg-white rounded-xl border border-[#B89E58]/30 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[#B89E58]/40 shrink-0 bg-[#FAF7F0]">
                    <img src={officer.avatar} alt={officer.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-sm text-[#2B3A55] leading-snug">{officer.name}</h3>
                    <p className="text-xs text-[#D4AB3F] font-bold">{officer.rank}</p>
                    <p className="text-[11px] text-[#566277]">{officer.batch}</p>
                  </div>
                </div>

                <div className="bg-[#FAF7F0] p-3 rounded-lg text-xs space-y-1 border border-[#B89E58]/20">
                  <div className="text-[#2B3A55] font-bold">{officer.post}</div>
                  <div className="text-[#566277] text-[11px]">{officer.deptName}</div>
                  <div className="text-[#566277] text-[11px] font-medium">{officer.division}</div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {officer.expertise.map((exp, i) => (
                    <span key={i} className="text-[10px] bg-[#EEE7D2]/80 text-[#2B3A55] px-2 py-0.5 rounded font-semibold border border-[#B89E58]/30">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#B89E58]/20 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#566277] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{officer.status}</span>
                </span>
                {onOpenMentor && (
                  <button
                    onClick={onOpenMentor}
                    className="text-[#2B3A55] hover:text-[#D4AB3F] font-bold text-xs flex items-center gap-1 transition-colors"
                  >
                    <span>Connect</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Experts Panel from Brochure Page 3 */}
      <section className="w-full py-14 sm:py-16 px-4 sm:px-8 bg-[#FAF7F0] border-t border-[#B89E58]/30">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AB3F] mb-1">
                <span className="material-symbols-outlined text-base">psychology</span>
                <span>Expert Faculty Directorate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2B3A55]">
                Senior Mentors Behind Gujarat&apos;s Highest Merit Ranks
              </h2>
              <p className="text-xs sm:text-sm text-[#566277] mt-1 max-w-xl">
                Official faculty team from the Gandhinagar center mentoring candidates through comprehensive civil syllabus coverage and interview coaching.
              </p>
            </div>
            {onOpenMentor && (
              <button
                onClick={onOpenMentor}
                className="bg-[#2B3A55] text-white hover:bg-[#1E2A40] text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md border border-[#D4AB3F]/40"
              >
                Schedule Personal Counseling
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {faculties.map((f, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-5 rounded-xl border border-[#B89E58]/30 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-lg bg-[#EEE7D2] flex items-center justify-center text-[#2B3A55] mb-2 font-bold text-sm">
                    <span className="material-symbols-outlined text-[#D4AB3F]">person</span>
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#2B3A55]">{f.name}</h3>
                  <p className="text-xs text-[#D4AB3F] font-semibold">{f.subject}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#B89E58]/20 flex items-center justify-between text-[11px] text-[#566277]">
                  <span>{f.exp}</span>
                  <span className="material-symbols-outlined text-sm text-[#2B3A55]">school</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
