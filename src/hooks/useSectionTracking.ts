'use client';

import { useEffect, useRef } from 'react';
import { analytics } from '@/lib/analytics';

interface SectionConfig {
  id: string;
  name: string;
  index: number;
}

export function useSectionTracking(sections: SectionConfig[]) {
  const firedSections = useRef<Set<string>>(new Set());
  const startTime = useRef<number>(Date.now());
  const sectionsViewedCount = useRef<number>(0);

  useEffect(() => {
    firedSections.current = new Set();
    startTime.current = Date.now();
    sectionsViewedCount.current = 0;

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !firedSections.current.has(section.id)) {
            firedSections.current.add(section.id);
            sectionsViewedCount.current += 1;

            const elapsedSeconds = Math.round((Date.now() - startTime.current) / 1000);
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollDepth = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

            analytics.track({
              event: 'section_impression',
              properties: {
                section_id: section.id,
                section_name: section.name,
                section_index: section.index,
                time_on_page_seconds: elapsedSeconds,
                scroll_depth_at_impression: scrollDepth,
              },
            });
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return { sectionsViewedCount };
}
