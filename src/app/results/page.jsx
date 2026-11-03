'use client';

import Results from '@/views/Results';
import { useApp } from '@/context/AppContext';

export default function ResultsPage() {
  const { openVideo, openMentor, openConclave } = useApp();
  return <Results onOpenVideo={openVideo} onOpenMentor={openMentor} onOpenConclave={openConclave} />;
}

