import React from 'react';

export default function DownloadToast({ toastData, onClose }) {
  if (!toastData || !toastData.visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-[#2B3A55] text-white p-4 rounded-xl shadow-2xl flex items-center justify-between border border-[#D4AB3F]/40 animate-slide-up">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[#D4AB3F] text-2xl">task_alt</span>
        <div>
          <span className="text-xs font-bold block text-white">
            Downloading: {toastData.filename}
          </span>
          <span className="text-[11px] text-[#FAF7F0]/80">
            Official verified PDF dispatched from Shubh Academy Repository.
          </span>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-[#FAF7F0] hover:text-[#D4AB3F] p-1 ml-2"
        aria-label="Dismiss Notification"
      >
        <span className="material-symbols-outlined text-xl">close</span>
      </button>
    </div>
  );
}

