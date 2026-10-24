'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileDrawer from '@/components/MobileDrawer';
import DownloadToast from '@/components/DownloadToast';
import VideoModal from '@/components/VideoModal';
import MentorModal from '@/components/MentorModal';
import ConclaveModal from '@/components/ConclaveModal';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [conclaveOpen, setConclaveOpen] = useState(false);
  const [toastData, setToastData] = useState({ visible: false, filename: '' });
  const [videoData, setVideoData] = useState({ isOpen: false, officerName: '', title: '' });
  const [mentorData, setMentorData] = useState({ isOpen: false, officerName: '' });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDownload = (filename) => {
    setToastData({ visible: true, filename });
    setTimeout(() => {
      setToastData({ visible: false, filename: '' });
    }, 5000);
  };

  const openVideo = (officerName, title) => {
    setVideoData({ isOpen: true, officerName, title });
  };

  const openMentor = (officerName) => {
    setMentorData({ isOpen: true, officerName });
  };

  return (
    <AppContext.Provider
      value={{
        triggerDownload,
        openVideo,
        openMentor,
        openConclave: () => setConclaveOpen(true),
      }}
    >
      <div className="min-h-screen flex flex-col bg-[#F6F0DF] text-[#1E1C12] overflow-x-hidden w-full max-w-full">
        {/* Global Navigation Header */}
        <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        {/* Mobile Drawer */}
        <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

        {/* Main Routed Page Content */}
        <main className="flex-grow overflow-x-hidden w-full max-w-full">
          {children}
        </main>

        {/* Global Footer */}
        <Footer onTriggerDownload={triggerDownload} />

        {/* Modals & Overlays */}
        <VideoModal
          videoData={videoData}
          onClose={() => setVideoData({ isOpen: false, officerName: '', title: '' })}
        />

        <MentorModal
          mentorData={mentorData}
          onClose={() => setMentorData({ isOpen: false, officerName: '' })}
        />

        <ConclaveModal
          isOpen={conclaveOpen}
          onClose={() => setConclaveOpen(false)}
        />

        <DownloadToast
          toastData={toastData}
          onClose={() => setToastData({ visible: false, filename: '' })}
        />

        {/* Floating Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-30 w-11 h-11 bg-[#2B3A55] text-[#D4AB3F] hover:bg-[#1E2A40] rounded-full shadow-lg flex items-center justify-center transition-all border border-[#D4AB3F]/40"
            aria-label="Back to Top"
          >
            <span className="material-symbols-outlined text-2xl">arrow_upward</span>
          </button>
        )}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    return {
      triggerDownload: () => {},
      openVideo: () => {},
      openMentor: () => {},
      openConclave: () => {},
    };
  }
  return context;
}

