'use client';

import React, { useState } from 'react';

export default function MentorModal({ mentorData, onClose }) {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!mentorData || !mentorData.isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2A40]/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#B89E58]/40 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#566277] hover:text-[#2B3A55] p-1"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-lg bg-[#2B3A55] flex items-center justify-center text-[#D4AB3F]">
            <span className="material-symbols-outlined text-2xl">shield_person</span>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#2B3A55]">Request Cadre Guidance</h3>
            <p className="text-xs text-[#D4AB3F] font-semibold">{mentorData.officerName || 'Serving Officer'}</p>
          </div>
        </div>

        {submitted ? (
          <div className="p-6 bg-[#FAF7F0] border border-[#D4AB3F] rounded-xl text-center space-y-2">
            <span className="material-symbols-outlined text-4xl text-[#D4AB3F]">check_circle</span>
            <h4 className="text-sm font-bold text-[#2B3A55]">Guidance Request Logged!</h4>
            <p className="text-xs text-[#566277]">
              Our Gandhinagar Mentorship Desk will schedule a 1-on-1 tele-consultation with {mentorData.officerName}.
            </p>
          </div>
        ) : (
          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3 py-2 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2B3A55] mb-1">WhatsApp Mobile *</label>
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="10-digit number"
                className="w-full px-3 py-2 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Specific Query / Advice Topic *</label>
              <textarea
                required
                rows={3}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. How to prepare R&B bridge design topics or balance site job with study..."
                className="w-full px-3 py-2 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2B3A55] hover:bg-[#1E2A40] text-white py-2.5 rounded-lg text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Submit Mentorship Request</span>
              <span className="material-symbols-outlined text-sm text-[#D4AB3F]">send</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

