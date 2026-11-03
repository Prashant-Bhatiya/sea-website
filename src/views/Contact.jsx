'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    district: 'Gandhinagar',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const gujaratDistricts = [
    'Gandhinagar', 'Ahmedabad', 'Rajkot', 'Surat', 'Vadodara',
    'Mehsana', 'Bhavnagar', 'Banaskantha', 'Sabarkantha', 'Kutch',
    'Junagadh', 'Jamnagar', 'Anand', 'Kheda', 'Patan', 'Valsad',
    'Navsari', 'Bharuch', 'Amreli', 'Surendranagar', 'Panchmahal',
    'Dahod', 'Aravalli', 'Gir Somnath', 'Botad', 'Morbi', 'Devbhoomi Dwarka',
    'Chhota Udaipur', 'Mahisagar', 'Narmada', 'Tapi', 'Dang', 'Porbandar'
  ];

  const faqs = [
    {
      q: 'Where is Shubh Engineering Academy located?',
      a: 'We are located at The Landmark, A-207, Kudasan Road, opposite Spicy Street, Kudasan, Gandhinagar, Gujarat 382419.'
    },
    {
      q: 'Which competitive exams does the academy prepare students for?',
      a: 'We prepare civil engineers exclusively for GPSC Class 1 & 2 (Executive Engineer & Deputy Executive Engineer), Assistant Engineer (AE), GSSSB Additional Assistant Engineer (AAE), and GPSSB Junior Engineer (JE).'
    },
    {
      q: 'What are the 4 core offerings of Shubh Engineering Academy?',
      a: 'Our core curriculum includes: (1) Conceptual Civil Engineering Classes covering theory and derivations, (2) Full-Length Mock Tests mirroring GPSC & GSSSB patterns, (3) Interview Guidance for GPSC Class 1 & 2 candidates, and (4) Marathon Revision Sessions before competitive exams.'
    },
    {
      q: 'Do you offer weekend batches for working site engineers?',
      a: 'Yes. We run specialized weekend batches on Saturdays and Sundays with recorded session access, designed specifically for in-service degree & diploma engineers.'
    }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Sub-Hero Section */}
      <section className="relative w-full bg-[#2B3A55] text-white py-14 sm:py-16 overflow-hidden border-b border-[#B89E58]/35">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AB3F_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2.5 bg-[#FAF7F0]/10 border border-[#D4AB3F]/40 px-3.5 py-1.5 rounded-full text-[#D4AB3F] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <img src="/sea-logo-badge.jpg" alt="SEA" className="w-4 h-4 rounded-full object-cover border border-[#D4AB3F]" />
                <span>Shubh Engineering Academy • Inspire . Learn . Achieve</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Admissions &amp; Academic Help Desk
              </h1>
              
              <p className="text-sm sm:text-base text-[#FAF7F0]/90 leading-relaxed max-w-2xl font-normal">
                Connect with faculty at our Gandhinagar center in Kudasan, inquire about upcoming batches for GPSC Class 1-2, AE &amp; GSSSB AAE, or reserve your 1-on-1 strategy session.
              </p>
            </div>

            {/* Metrics & Direct Numbers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-[#1E2A40]/90 border border-[#B89E58]/40 backdrop-blur-md p-4 rounded-2xl shadow-lg">
              <div className="px-3 text-left">
                <span className="text-[10px] text-[#D4AB3F] uppercase tracking-wider font-bold block">Official Helpline</span>
                <a href="tel:+919737309991" className="text-base sm:text-lg font-bold text-white hover:text-[#D4AB3F] transition-colors block">
                  +91 97373 09991
                </a>
                <a href="tel:+919737609991" className="text-xs text-[#FAF7F0]/80 hover:text-[#D4AB3F] transition-colors block">
                  +91 97376 09991
                </a>
              </div>
              <div className="hidden sm:block w-px h-10 bg-[#B89E58]/30"></div>
              <div className="px-3 text-left">
                <span className="text-[10px] text-[#D4AB3F] uppercase tracking-wider font-bold block">Location</span>
                <span className="text-xs text-white font-semibold block">Kudasan, Gandhinagar</span>
                <span className="text-[10px] text-[#FAF7F0]/70 block">The Landmark, A-207</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Single Campus Showcase (The Landmark, Kudasan) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Flagship Center Details Card (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#B89E58]/30 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#FAF7F0]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2B3A55] flex items-center justify-center text-[#D4AB3F] shadow-sm">
                  <span className="material-symbols-outlined text-2xl">apartment</span>
                </div>
                <div>
                  <span className="inline-block bg-[#2B3A55] text-[#D4AB3F] text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider border border-[#D4AB3F]/30">
                    Gandhinagar Center
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2B3A55] mt-1 font-display">
                    The Landmark Campus
                  </h2>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D4AB3F]/50 text-[#1E1C12] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D4AB3F] animate-pulse"></span>
                <span>Open: 07:30 AM – 09:30 PM</span>
              </span>
            </div>

            {/* Address & Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 bg-[#FAF7F0] p-4 rounded-xl border border-[#B89E58]/20">
                <span className="text-[10px] text-[#566277] font-bold uppercase tracking-wider block">Official Address</span>
                <p className="text-xs text-[#1E1C12] font-semibold leading-relaxed">
                  The Landmark, A-207, Kudasan Road, opposite Spicy Street, Kudasan, Gandhinagar, Gujarat 382419.
                </p>
                <span className="text-[10px] text-[#B89E58] font-bold block pt-1">
                  Landmark: Opp. Spicy Street
                </span>
              </div>

              <div className="space-y-1 bg-[#FAF7F0] p-4 rounded-xl border border-[#B89E58]/20">
                <span className="text-[10px] text-[#566277] font-bold uppercase tracking-wider block">Direct Phone &amp; WhatsApp</span>
                <a href="tel:+919737309991" className="text-sm font-bold text-[#2B3A55] hover:text-[#D4AB3F] block">
                  +91 97373 09991
                </a>
                <a href="tel:+919737609991" className="text-sm font-bold text-[#2B3A55] hover:text-[#D4AB3F] block">
                  +91 97376 09991
                </a>
                <span className="text-[10px] text-[#566277] block pt-1">
                  Admissions &amp; Academic Inquiries
                </span>
              </div>
            </div>

            {/* 4 Core Offerings Grid */}
            <div className="space-y-3">
              <span className="text-xs text-[#566277] font-bold uppercase tracking-wider block">
                Academy Core Offerings
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF7F0]/60 border border-[#B89E58]/25 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-xl shrink-0 mt-0.5">menu_book</span>
                  <div>
                    <h3 className="text-xs font-bold text-[#2B3A55]">Conceptual Civil Classes</h3>
                    <p className="text-[11px] text-[#566277] mt-0.5 leading-relaxed">
                      Deep conceptual teaching across SOM, RCC, Geotech, Surveying &amp; Fluid Mechanics.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F0]/60 border border-[#B89E58]/25 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-xl shrink-0 mt-0.5">fact_check</span>
                  <div>
                    <h3 className="text-xs font-bold text-[#2B3A55]">Mock Test Series</h3>
                    <p className="text-[11px] text-[#566277] mt-0.5 leading-relaxed">
                      OMR and simulated exam test papers mirroring exact GPSC &amp; GSSSB standards.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F0]/60 border border-[#B89E58]/25 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-xl shrink-0 mt-0.5">record_voice_over</span>
                  <div>
                    <h3 className="text-xs font-bold text-[#2B3A55]">Interview Guidance</h3>
                    <p className="text-[11px] text-[#566277] mt-0.5 leading-relaxed">
                      Personality test preparation and mock panels for GPSC Class 1 &amp; 2 gazetted posts.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F0]/60 border border-[#B89E58]/25 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#D4AB3F] text-xl shrink-0 mt-0.5">bolt</span>
                  <div>
                    <h3 className="text-xs font-bold text-[#2B3A55]">Marathon Revision Sessions</h3>
                    <p className="text-[11px] text-[#566277] mt-0.5 leading-relaxed">
                      High-yield formula bootcamps and rapid-fire IS-Code revision marathons.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Classroom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div
                className="w-full h-40 bg-cover bg-center rounded-xl relative overflow-hidden border border-[#B89E58]/30 shadow-xs"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4Kj5eiFmdIbYdDwwOgljgHLCzpJKr7nb_QU5BEY-D2Q6dqHhuJT9vyDagnMzalmJby-ooI6GgXYIiysNKPYkpSpIX_8BNAOJcuD-Y6g1aW4INi-n-ojpHDBcb7zAAtDxxWT06SALeE4zX9qb_N5GLZLBfuXKFKpxeqq17Zc4eWHFN-jb7nt-BRzgZdebLRuR25acECxh8jNxT7jWSqDrS8wsZ31CHCFQ5n3wmFRrMxBGb66-ukq3gGg')`
                }}
              >
                <div className="absolute bottom-2 left-2 bg-[#FAF7F0]/95 border border-[#B89E58]/40 px-2.5 py-1 rounded-lg text-[11px] text-[#2B3A55] font-semibold flex items-center gap-1.5 shadow-xs">
                  <span className="material-symbols-outlined text-sm text-[#D4AB3F]">pin_drop</span>
                  <span>The Landmark, Kudasan Road</span>
                </div>
              </div>

              <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[#B89E58]/30 shadow-xs">
                <img
                  className="w-full h-full object-cover"
                  alt="Gandhinagar Classroom Bay"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6ymmBDRjC27wXjSmJynJtfBH7U9rN1UevWBhuUM-94abjLQiEwsFNAcYCGdoZzlR7vrsFHUTqq_R5zhaSLam1CiFxUrqwDv-KHmsrE9v1qO06gBmktQ-gJcqSf43Xx4Ke0PQCKplsYLzhqGTtNglPAy1JCT6nL6OHtjZUuelgkKib-zO64wb0NWRMn_BAfdm8NjS5VNj9Rcq520rabCYGPLejYRuQfpGxc-T-S0AMCbLJALSAPou0gQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B3A55]/85 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-white text-xs font-semibold">Lecture Hall: A-207</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#B89E58]/20">
              <span className="text-xs text-[#566277] font-medium">Gandhinagar, Gujarat 382419</span>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2B3A55] text-white text-xs font-bold hover:bg-[#1E2A40] transition-colors shadow-xs"
                href="https://maps.google.com/?q=The+Landmark+Kudasan+Road+Gandhinagar"
                target="_blank"
                rel="noreferrer"
              >
                <span>Open in Google Maps</span>
                <span className="material-symbols-outlined text-sm text-[#D4AB3F]">directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Social & Inquiry Card (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Official Instagram Card */}
            <div className="bg-[#1E2A40] text-white p-6 sm:p-7 rounded-2xl border border-[#B89E58]/35 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D4AB3F] text-[11px] font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                  <span>Official Instagram</span>
                </span>
                <span className="text-xs text-[#FAF7F0]/70">Live Updates</span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-display">@shubh.engineering</h3>
                <p className="text-xs text-[#d8e1f0] mt-1 leading-relaxed">
                  Follow our official Instagram for daily question polls, marathon class schedules, exam alerts, and student success highlights.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.instagram.com/shubh.engineering/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D4AB3F] text-[#1E1C12] font-bold text-xs hover:bg-[#D4AB3F]/90 transition-all shadow-md"
                >
                  <span>Visit Instagram Profile</span>
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>

            {/* Direct Faculty Consultation Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#B89E58]/30 shadow-sm space-y-4">
              <span className="text-xs uppercase font-bold text-[#D4AB3F] tracking-wider block">Direct Contact Desk</span>
              <h3 className="text-lg font-bold text-[#2B3A55] font-display">Talk to a Civil Exam Mentor</h3>
              <p className="text-xs text-[#566277] leading-relaxed">
                Have questions regarding syllabus weightage, eligibility, or batch timings? Call our Gandhinagar desk directly.
              </p>

              <div className="space-y-2 pt-1">
                <a
                  href="tel:+919737309991"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FAF7F0] border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#D4AB3F] text-xl">call</span>
                    <span className="text-xs font-bold text-[#2B3A55]">+91 97373 09991</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#B89E58] group-hover:text-[#2B3A55]">Call Desk</span>
                </a>

                <a
                  href="tel:+919737609991"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-[#FAF7F0] border border-[#B89E58]/30 hover:border-[#D4AB3F] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#D4AB3F] text-xl">call</span>
                    <span className="text-xs font-bold text-[#2B3A55]">+91 97376 09991</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#B89E58] group-hover:text-[#2B3A55]">Call Desk</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Candidate Help Desk Inquiry Form */}
      <section className="w-full bg-[#FAF7F0] border-y border-[#B89E58]/30 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Container (Span 7) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-[#B89E58]/30">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AB3F]">Direct Admission Desk</span>
                <h2 className="text-2xl font-extrabold text-[#2B3A55] tracking-tight mt-0.5 font-display">Register Your Inquiry</h2>
                <p className="text-xs text-[#566277] mt-1">
                  Submit your query or batch preference. Our subject counselors from Gandhinagar will contact you directly on WhatsApp.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#FAF7F0] border border-[#D4AB3F] rounded-2xl text-center space-y-3">
                  <span className="material-symbols-outlined text-5xl text-[#D4AB3F]">verified</span>
                  <h3 className="text-lg font-bold text-[#2B3A55]">Inquiry Registered Successfully!</h3>
                  <p className="text-xs text-[#566277] max-w-md mx-auto">
                    Your reference ticket <strong className="text-[#2B3A55]">#SEA-2025</strong> has been recorded. Our Gandhinagar team (+91 97373 09991) will call you shortly.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-[#2B3A55] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-[#1E2A40]"
                  >
                    Submit Another Query
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
                        value={inquiryData.fullName}
                        onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                        placeholder="e.g. Patel Hardikkumar V."
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded-xl border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">WhatsApp Mobile *</label>
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                        value={inquiryData.whatsapp}
                        onChange={(e) => setInquiryData({ ...inquiryData, whatsapp: e.target.value })}
                        placeholder="10-digit mobile number"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded-xl border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Email ID</label>
                      <input
                        type="email"
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        placeholder="civil.engineer@example.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded-xl border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Home District in Gujarat *</label>
                      <select
                        required
                        value={inquiryData.district}
                        onChange={(e) => setInquiryData({ ...inquiryData, district: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F0] rounded-xl border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
                      >
                        {gujaratDistricts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-[#2B3A55]">
                        How Can We Assist Your Civil Exam Preparation? *
                      </label>
                      <span className="text-[11px] text-[#B89E58] font-bold">Admissions • Batches • Guidance</span>
                    </div>
                    <textarea
                      rows={4}
                      required
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      placeholder="e.g. I want to inquire about fees amount and admission process for Foundation Batch 2026, Saksham Batch, or Interview Batch..."
                      className="w-full p-3.5 text-xs bg-[#FAF7F0] rounded-xl border border-[#B89E58]/30 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F] leading-relaxed"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                    <p className="text-[11px] text-[#566277] flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#D4AB3F]">verified_user</span>
                      <span>Information handled strictly under Shubh Academy data policy.</span>
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-[#2B3A55] text-white hover:bg-[#1E2A40] px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm border border-[#B89E58]/30"
                    >
                      <span>Submit Inquiry</span>
                      <span className="material-symbols-outlined text-sm text-[#D4AB3F]">send</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: FAQ Accordion (Span 5) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#B89E58]/30 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-[#2B3A55] flex items-center gap-2 font-display">
                  <span className="material-symbols-outlined text-[#D4AB3F]">help</span>
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#B89E58]/20 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full p-3.5 text-left text-xs font-bold text-[#2B3A55] flex items-center justify-between bg-[#FAF7F0] hover:bg-[#EEE7D2]/60"
                      >
                        <span>{faq.q}</span>
                        <span className="material-symbols-outlined text-sm text-[#D4AB3F]">
                          {activeFaq === idx ? 'expand_less' : 'expand_more'}
                        </span>
                      </button>
                      {activeFaq === idx && (
                        <div className="p-3.5 text-xs text-[#566277] bg-white border-t border-[#B89E58]/20 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
