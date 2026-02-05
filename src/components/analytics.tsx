'use client';

/**
 * Analytics Provider
 *
 * Initializes analytics services on mount:
 * - Mixpanel: User behavior tracking with autocapture
 * - Vercel Speed Insights: Core Web Vitals monitoring
 *
 * Wrap your app with this provider in the root layout.
 */

import { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { analytics } from '@/lib/analytics';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Mixpanel with new project token
        mixpanel.init('bf6d4651c960bb7031b11866fe705d83', {
            // Autocapture: Automatically tracks clicks, form submissions, page views
            // This provides baseline data without manual instrumentation
            autocapture: true,

            // Session Recording: Records 100% of sessions for replay analysis
            // Useful for UX debugging and understanding user journeys
            record_sessions_percent: 100,

            // Debug mode: Logs events to console in development
            debug: process.env.NODE_ENV === 'development',

            // Track page views on route change (Next.js SPA navigation)
            track_pageview: 'full-url',

            // Persistence: Use localStorage for cross-session identity
            persistence: 'localStorage',
        });

        // Mark our typed analytics wrapper as initialized
        analytics.init();

        // Set super properties (attached to ALL events)
        analytics.setSuperProperties({
            platform: 'landing_site',
            app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
        });
    }, []);

    return (
        <>
            {children}
            {/* Vercel Speed Insights: Monitors Core Web Vitals (LCP, FID, CLS, TTFB)
                - Data appears in Vercel Dashboard → Analytics → Speed Insights
                - No configuration needed, automatically tracks performance */}
            <SpeedInsights />
        </>
    );
}
