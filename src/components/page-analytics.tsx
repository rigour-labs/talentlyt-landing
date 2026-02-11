'use client';

/**
 * Reusable Page Analytics Component
 *
 * Drop this into any page to automatically track:
 * - Scroll depth milestones (25%, 50%, 75%, 100%)
 * - Time-on-page engagement milestones (15s, 30s, 60s, 120s)
 *
 * Usage:
 *   <PageAnalytics pagePath="/pricing" />
 */

import { useCallback, useRef } from 'react';
import { useScrollDepth } from '@/hooks/useScrollDepth';
import { useEngagementMilestones } from '@/hooks/useEngagementMilestones';

interface PageAnalyticsProps {
    pagePath: string;
}

export function PageAnalytics({ pagePath }: PageAnalyticsProps) {
    const sectionsViewed = useRef(0);

    useScrollDepth(pagePath);

    const getSectionsViewed = useCallback(
        () => sectionsViewed.current,
        []
    );

    useEngagementMilestones(pagePath, getSectionsViewed);

    return null;
}
