'use client';

import { useEffect, useRef } from 'react';
import { analytics } from '@/lib/analytics';

const MILESTONES = [25, 50, 75, 100] as const;

export function useScrollDepth(pagePath: string) {
  const firedMilestones = useRef<Set<number>>(new Set());
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    firedMilestones.current = new Set();
    startTime.current = Date.now();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      const elapsedSeconds = Math.round((Date.now() - startTime.current) / 1000);

      for (const milestone of MILESTONES) {
        if (scrollPercent >= milestone && !firedMilestones.current.has(milestone)) {
          firedMilestones.current.add(milestone);
          analytics.track({
            event: 'scroll_depth',
            properties: {
              depth_percentage: milestone,
              page_path: pagePath,
              time_to_reach_seconds: elapsedSeconds,
            },
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pagePath]);
}
