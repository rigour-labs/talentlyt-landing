'use client';

import { useEffect, useRef } from 'react';
import { analytics } from '@/lib/analytics';

const TIME_MILESTONES = [15, 30, 60, 120] as const;

export function useEngagementMilestones(
  pagePath: string,
  getSectionsViewed: () => number
) {
  const firedMilestones = useRef<Set<number>>(new Set());

  useEffect(() => {
    firedMilestones.current = new Set();

    const timers: ReturnType<typeof setTimeout>[] = [];

    TIME_MILESTONES.forEach((milestone) => {
      const timer = setTimeout(() => {
        if (firedMilestones.current.has(milestone)) return;

        // Only fire if user is still on the page
        if (document.visibilityState !== 'visible') return;

        firedMilestones.current.add(milestone);

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDepth = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

        analytics.track({
          event: 'engagement_milestone',
          properties: {
            milestone_seconds: milestone as 15 | 30 | 60 | 120,
            page_path: pagePath,
            scroll_depth_at_milestone: scrollDepth,
            sections_viewed: getSectionsViewed(),
          },
        });
      }, milestone * 1000);

      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [pagePath, getSectionsViewed]);
}
