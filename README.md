# Shubh Engineering Academy (SEA) - Civil Technical Portal

A modern, responsive **React.js** web application engineered specifically for **Shubh Engineering Academy** in Gujarat, preparing civil engineering aspirants for high-stakes competitive examinations:
- **GPSC Class 1 & 2** (Executive Engineer & Deputy Executive Engineer - Roads & Buildings, Narmada, GWSSB)
- **GSSSB AAE** (Additional Assistant Engineer - CBRT Mode)
- **GPSSB JE** (Panchayat Junior Engineer - 33 District Cadres)

---

## 🎨 Official Brand Color Palette

| Color Name | Hex Code | Purpose & Usage |
|---|---|---|
| **Twilight Indigo** | `#2B3A55` | Primary brand tone, headers, primary buttons, authoritative chrome |
| **Blue Slate** | `#566277` | Technical neutral, subheadings, labels, secondary metadata |
| **Metallic Gold** | `#D4AB3F` | Brand highlight, merit badges, rankers, call-to-actions, progress bars |
| **Golden Bronze** | `#B89E58` | Architectural borders, hairline dividers, card contours |
| **Ivory Mist** | `#F6F0DF` | Warm parchment canvas foundation, eye-friendly contrast |

---

## 🚀 Quick Start (Development & Production)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Runs at `http://localhost:3000` with instant Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Creates an optimized static bundle in the `dist/` folder ready for hosting on Vercel, Netlify, GitHub Pages, AWS S3, or cPanel.

### 4. Local Production Preview
```bash
npm run preview
```

---

## 🏗️ Architecture & Pages

- **`#/` (Targeted Exams / Home)**:
  - Live Cadre Dispatch notification ticker
  - Architectural blueprint CAD grid hero with State Merit Ratio donut chart
  - 3 Core Cadre Cards (GPSC Class 1 & 2, GSSSB AAE, GPSSB JE) with specs, eligibility, cutoffs
  - 18-Subject Comparative Weightage Matrix with category filters
  - Aspirant Repository with downloadable official syllabi and 10-year solved PYQ bundles
  - Interactive download confirmation toast
- **`#/batches` (Batches & Admissions)**:
  - 4 Active Cohorts (GPSC Foundation, GSSSB Fastrack, GPSSB Weekend, GPSC Mains Answer Writing)
  - Interactive Cadre filter tabs (`All Cadres`, `GPSC`, `GSSSB / GPSSB`)
  - Standard daily schedule timetable breakdown (Morning & Evening batch schedules)
  - Gujarat Civil Talent Search Exam (GCTSE 2025) 100% Tuition Waiver scholarship section
  - Candidate batch enrollment & scholarship form with instant feedback
- **`#/results` (Excellence & Results / Hall of Fame)**:
  - Verified State Merit Ledger 2016–2025 (1,450+ selections)
  - Department allocation progress bars (Roads & Buildings 48%, Water Resources 34%, Panchayats 18%)
  - Certified Top Rankers showcase (Er. Hardik Patel [State Rank 1], Er. Pooja Joshi [State Rank 2], Er. Mehul Solanki [State Rank 1], Er. Chirag Dave [Rank 3])
  - Interactive HD video interview masterclass modal
- **`#/alumni` (Alumni Network & Serving Officers Directory)**:
  - Gujarat State Civil Engineering Officers Alumni Association covering all 33 districts
  - Live search by officer name, post, division, or district
  - Department filter buttons (Roads & Buildings, GWSSB, NWRWS, Municipal Corporations, Panchayat Rural Works)
  - Interactive 1-on-1 Mentorship Advice Request modal
  - Annual Civil Conclave RSVP registration modal
- **`#/contact` (Contact & Campuses)**:
  - Gandhinagar Main Campus HQ (Sector 11) & Ahmedabad Branch (Navrangpura) blueprints & facilities
  - Candidate Help Desk inquiry form with all 33 Gujarat district dropdowns and reference ticket generation
  - 1-on-1 Strategy session booking with Director Desk
  - Interactive FAQ accordion for civil engineering aspirants

---

## 📷 Future Customization (Adding Real Photos & Batches)

When you have real photos ready:
1. **Topper / Ranker Photos**: Update the `avatar` URLs in `src/pages/Results.jsx` and `src/pages/Alumni.jsx`.
2. **Campus / Batch Photos**: Drop your images into `src/assets/` or `public/` and reference them in `Batches.jsx` and `Contact.jsx`.
3. **New Batch Schedules & Fees**: Adjust the `batchesList` array in `src/pages/Batches.jsx`.
4. **Alumni Count**: Update the statistics ribbon in `src/pages/Alumni.jsx` and `src/pages/Results.jsx`.

