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

        // Initialize Apollo.io tracking
        // Apollo is used for visitor identification and sales intelligence
        initApollo();
    }, []);

    // Apollo.io initialization function
    function initApollo() {
        const n = Math.random().toString(36).substring(7);
        const o = document.createElement('script');
        o.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${n}`;
        o.async = true;
        o.defer = true;
        o.onload = function () {
            // @ts-expect-error - Apollo tracking functions are loaded dynamically
            window.trackingFunctions?.onLoad({ appId: '6975eea1cab3420015e4d170' });
        };
        document.head.appendChild(o);
    }

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
