'use client';

/**
 * Analytics Provider
 *
 * Initializes analytics services on mount:
 * - Mixpanel: User behavior tracking with autocapture
 * - GA4: Direct event sending + UTM/referrer/click ID capture
 * - Vercel Speed Insights: Core Web Vitals monitoring
 * - UTM Persistence: First-touch & last-touch attribution
 *
 * Wrap your app with this provider in the root layout.
 */

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import mixpanel from 'mixpanel-browser';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { analytics } from '@/lib/analytics';
import { captureTrafficAttribution, getAttributionProperties, cleanTrackingParams } from '@/lib/utm';

/**
 * Inner component that uses useSearchParams for route-change page view tracking.
 * Must be wrapped in <Suspense> to support static generation.
 */
function AnalyticsPageViewTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Track page views on route change (for GA4 — Mixpanel handles this via track_pageview: 'full-url')
    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_path: pathname,
                page_title: document.title,
                page_location: window.location.href,
                send_to: 'G-TK1KFTDDED',
            });
        }
    }, [pathname, searchParams]);

    return null;
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
    // Initialize once on mount
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

        // Capture UTM parameters, click IDs, and referrer from URL
        const attribution = captureTrafficAttribution();

        // Get flattened attribution properties for super properties
        const attributionProps = getAttributionProperties();

        // Set super properties (attached to ALL events)
        // This means every single event will carry UTM data automatically
        analytics.setSuperProperties({
            platform: 'landing_site',
            app_version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
            ...attributionProps,
        });

        // Also set UTM data as GA4 user properties via gtag
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            const userProps: Record<string, string> = {};
            if (attributionProps.utm_source) userProps['traffic_source'] = attributionProps.utm_source;
            if (attributionProps.utm_medium) userProps['traffic_medium'] = attributionProps.utm_medium;
            if (attributionProps.utm_campaign) userProps['traffic_campaign'] = attributionProps.utm_campaign;
            if (attributionProps.utm_content) userProps['traffic_content'] = attributionProps.utm_content;
            if (attributionProps.utm_term) userProps['traffic_term'] = attributionProps.utm_term;
            if (attributionProps.first_touch_utm_source) userProps['first_touch_source'] = attributionProps.first_touch_utm_source;
            if (attributionProps.first_touch_utm_medium) userProps['first_touch_medium'] = attributionProps.first_touch_utm_medium;
            if (attributionProps.first_touch_utm_campaign) userProps['first_touch_campaign'] = attributionProps.first_touch_utm_campaign;

            if (Object.keys(userProps).length > 0) {
                window.gtag('set', 'user_properties', userProps);
            }
        }

        // Clean tracking parameters from URL bar (keeps URL clean, data already captured)
        cleanTrackingParams();

        if (process.env.NODE_ENV === 'development') {
            console.log('[Analytics] UTM Attribution:', attribution);
            console.log('[Analytics] Super Properties:', attributionProps);
        }
    }, []);

    return (
        <>
            <Suspense fallback={null}>
                <AnalyticsPageViewTracker />
            </Suspense>
            {children}
            {/* Vercel Speed Insights: Monitors Core Web Vitals (LCP, FID, CLS, TTFB)
                - Data appears in Vercel Dashboard → Analytics → Speed Insights
                - No configuration needed, automatically tracks performance */}
            <SpeedInsights />
        </>
    );
}
