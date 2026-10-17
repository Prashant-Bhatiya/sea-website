import React from 'react';

export default function VideoModal({ videoData, onClose }) {
  if (!videoData || !videoData.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2A40]/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#B89E58]/40 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#566277] hover:text-[#2B3A55] p-1"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-[#D4AB3F] text-3xl">smart_display</span>
          <div>
            <h3 className="text-lg font-bold text-[#2B3A55]">
              {videoData.officerName || 'Ranker Strategy Session'}
            </h3>
            <p className="text-xs text-[#566277]">
              {videoData.title || 'Shubh Engineering Academy Masterclass Archive'}
            </p>
          </div>
        </div>

        {/* Video Player Display */}
        <div className="w-full aspect-video bg-[#1E2A40] rounded-xl overflow-hidden relative flex items-center justify-center border border-[#B89E58]/30 shadow-inner group">
          <div className="text-center p-6 space-y-3">
            <div className="w-16 h-16 rounded-full bg-[#D4AB3F]/20 border-2 border-[#D4AB3F] flex items-center justify-center text-[#D4AB3F] mx-auto animate-pulse">
              <span className="material-symbols-outlined text-4xl">play_arrow</span>
            </div>
            <p className="text-sm font-bold text-white">Full Length Video Masterclass (HD 1080p)</p>
            <p className="text-xs text-[#F6F0DF]/80 max-w-md">
              Answer-sheet structure, IS Code 456-2000 derivations, time management in CBRT, and GPSC interview board questions.
            </p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#B89E58]/30 flex items-center justify-between text-xs text-[#566277]">
          <span>Recorded at Gandhinagar HQ Studio</span>
          <button
            onClick={() => {
              alert("Handout Notes & Strategy PDF has been downloaded.");
              onClose();
            }}
            className="text-[#D4AB3F] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            <span>Download Handout Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
}

