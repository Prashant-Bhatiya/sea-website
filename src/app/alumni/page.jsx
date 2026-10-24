'use client';

import Alumni from '@/views/Alumni';
import { useApp } from '@/context/AppContext';

export default function AlumniPage() {
  const { openMentor, openConclave } = useApp();
  return <Alumni onOpenMentor={openMentor} onOpenConclave={openConclave} />;
}

