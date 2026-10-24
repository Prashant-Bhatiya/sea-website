'use client';

import React, { useState } from 'react';

export default function ConclaveModal({ isOpen, onClose }) {
  const [officerName, setOfficerName] = useState('');
  const [cadrePost, setCadrePost] = useState('');
  const [district, setDistrict] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
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
            <span className="material-symbols-outlined text-2xl">event_available</span>
          </div>
          <div>
            <h3 className="text-base font-bold text-[#2B3A55]">Annual Conclave 2025 RSVP</h3>
            <p className="text-xs text-[#566277]">Mahatma Mandir Convention Hall, Gandhinagar</p>
          </div>
        </div>

        {isRegistered ? (
          <div className="p-6 bg-[#FAF7F0] border border-[#D4AB3F] rounded-xl text-center space-y-2">
            <span className="material-symbols-outlined text-4xl text-[#D4AB3F]">check_circle</span>
            <h4 className="text-sm font-bold text-[#2B3A55]">Conclave Delegate Pass Generated</h4>
            <p className="text-xs text-[#566277]">Your official confirmation has been registered for the annual session.</p>
          </div>
        ) : (
          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Officer / Aspirant Full Name *</label>
              <input
                type="text"
                required
                value={officerName}
                onChange={(e) => setOfficerName(e.target.value)}
                placeholder="e.g. Er. Hardik Patel"
                className="w-full px-3 py-2 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Cadre Status / Current Role *</label>
              <select
                required
                value={cadrePost}
                onChange={(e) => setCadrePost(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
              >
                <option value="">Select Category</option>
                <option value="Executive Engineer">Executive Engineer (Class 1)</option>
                <option value="Deputy Executive Engineer">Deputy Executive Engineer (Class 2)</option>
                <option value="Additional Assistant Engineer">Additional Assistant Engineer (AAE)</option>
                <option value="Junior Engineer">Junior Engineer (Panchayat)</option>
                <option value="Candidate Aspirant">Aspiring Civil Engineering Candidate</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2B3A55] mb-1">Serving District / Division *</label>
              <input
                type="text"
                required
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="e.g. Gandhinagar / Rajkot / Ahmedabad"
                className="w-full px-3 py-2 text-xs bg-[#FAF7F0] rounded border border-[#B89E58]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AB3F]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#D4AB3F] text-[#1E1C12] font-bold hover:bg-[#B89E58] hover:text-white py-2.5 rounded-lg text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Confirm Conclave Attendance</span>
              <span className="material-symbols-outlined text-sm">badge</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

