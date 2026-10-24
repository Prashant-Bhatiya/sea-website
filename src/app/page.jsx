'use client';

import TargetedExams from '@/views/TargetedExams';
import { useApp } from '@/context/AppContext';

export default function HomePage() {
  const { triggerDownload } = useApp();
  return <TargetedExams onTriggerDownload={triggerDownload} />;
}

