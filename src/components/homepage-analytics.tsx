'use client';

import { useMemo, useCallback } from 'react';
import { useScrollDepth } from '@/hooks/useScrollDepth';
import { useSectionTracking } from '@/hooks/useSectionTracking';
import { useEngagementMilestones } from '@/hooks/useEngagementMilestones';

const HOMEPAGE_SECTIONS = [
  { id: 'hero', name: 'Hero', index: 0 },
  { id: 'social-proof', name: 'Beta Stats', index: 1 },
  { id: 'capabilities', name: 'Capabilities', index: 2 },
  { id: 'how-it-works', name: 'How It Works', index: 3 },
  { id: 'problem-solution', name: 'Problem Solution', index: 4 },
  { id: 'final-cta', name: 'CTA', index: 5 },
];

export function HomepageAnalytics() {
  const sections = useMemo(() => HOMEPAGE_SECTIONS, []);

  useScrollDepth('/');
  const { sectionsViewedCount } = useSectionTracking(sections);

  const getSectionsViewed = useCallback(
    () => sectionsViewedCount.current,
    [sectionsViewedCount]
  );

  useEngagementMilestones('/', getSectionsViewed);

  return null;
}
