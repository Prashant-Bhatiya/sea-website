'use client';

import Results from '@/views/Results';
import { useApp } from '@/context/AppContext';

export default function ResultsPage() {
  const { openVideo } = useApp();
  return <Results onOpenVideo={openVideo} />;
}

