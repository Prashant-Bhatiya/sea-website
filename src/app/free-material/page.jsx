'use client';

import FreeMaterial from '@/views/FreeMaterial';
import { useApp } from '@/context/AppContext';

export default function FreeMaterialPage() {
  const { triggerDownload, openMentor } = useApp();
  return <FreeMaterial onTriggerDownload={triggerDownload} onOpenMentor={openMentor} />;
}

